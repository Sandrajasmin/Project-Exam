import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { fetchSingleVenue, bookVenue } from '../../../store/modules/VenueSlice';
import DatePicker from './calendar';
import Logo from '../../../assets/img/logo_small.webp';

const calculatePrice = (dateFrom, dateTo, pricePerNight) => {
    if (!dateFrom || !dateTo) {
        return 0;
    }

    const start = new Date(dateFrom);
    const end = new Date(dateTo);

    if (isNaN(start) || isNaN(end)) {
        return 0;
    }

    const timeDiff = Math.abs(end - start);
    const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const totalPrice = numberOfNights * pricePerNight + 500 + 100;
    return totalPrice;
};

const DetailPage = () => {
    const dispatch = useDispatch();
    const singleVenue = useSelector((state) => state.venues.singleVenue);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { id } = useParams();

    console.log('halo', singleVenue);

    useEffect(() => {
        if (id) {
            dispatch(fetchSingleVenue(id));
        }
    }, [dispatch, id]);

    const validationSchema = Yup.object().shape({
        dateFrom: Yup.date().required('Required'),
        dateTo: Yup.date().required('Required'),
        guests: Yup.number()
            .min(1, 'Must be at least 1 guest')
            .max(singleVenue.maxGuests, `Max number of guests is ${singleVenue.maxGuests}`)
            .required('Required')
    });

    const dateToYMD = (date) => {
        return format(date, 'yyyy-MM-dd');
    };

    const formik = useFormik({
        initialValues: {
            dateFrom: '',
            dateTo: '',
            guests: '',
            venueId: id
        },
        validationSchema,
        onSubmit: async (values) => {
            const bookingData = {
                dateFrom: values.dateFrom,
                dateTo: values.dateTo,
                guests: values.guests,
                venueId: values.venueId
            };
            //dispatch(setLoadingState(true));
            await dispatch(bookVenue(bookingData));
            // dispatch(setLoadingState(false));
            setFormSubmitted(true);
            window.scrollTo(0, 0);
        }
    });

    useEffect(() => {
        dispatch(fetchSingleVenue(id));
    }, [dispatch, id]);

    const totalPrice = calculatePrice(
        formik.values.dateFrom,
        formik.values.dateTo,
        singleVenue.price
    );

    return (
        <>
            {formSubmitted ? (
                <div>
                    <img src={Logo} />
                    <h1>Thank you for your booking!</h1>
                    <p>Email will be sent with your booking details</p>
                </div>
            ) : (
                <div className="max-w-md rounded-md bg-white px-6 py-5 drop-shadow-md md:px-8">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex justify-center">
                                <div>
                                    <label
                                        htmlFor="dateFrom"
                                        className="block rounded-tl bg-bluegreen py-2 text-center font-body font-light text-black"
                                    >
                                        Check in
                                    </label>
                                    <div className="">
                                        <input
                                            onChange={formik.handleChange}
                                            value={
                                                formik.values.dateFrom
                                                    ? dateToYMD(formik.values.dateFrom)
                                                    : ''
                                            }
                                            id="dateFrom"
                                            name="dateFrom"
                                            required
                                            className="border-1 block w-full border border-bluegreen px-2 py-1.5"
                                        />
                                        {formik.touched.dateFrom && formik.errors.dateFrom ? (
                                            <div className="text-sm text-red-600">
                                                {formik.errors.dateFrom}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="dateTo"
                                        className="block rounded-tr bg-green py-2 text-center font-body font-light text-black"
                                    >
                                        Check out
                                    </label>
                                    <div className="">
                                        <input
                                            onChange={formik.handleChange}
                                            value={
                                                formik.values.dateTo ? dateToYMD(formik.values.dateTo) : ''
                                            }
                                            id="dateTo"
                                            name="dateTo"
                                            required
                                            className="border-1 block w-full border border-green px-2 py-1.5"
                                        />
                                        {formik.touched.dateTo && formik.errors.dateTo ? (
                                            <div className="text-sm text-red-600">
                                                {formik.errors.dateTo}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <input
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.guests}
                                    id="guests"
                                    name="guests"
                                    type="number"
                                    min="1"
                                    required
                                    placeholder="1 Guests"
                                    className="border-1 block w-full border border-green px-4 py-1.5"
                                />
                                {formik.touched.guests && formik.errors.guests ? (
                                    <div className="text-sm text-red-600">{formik.errors.guests}</div>
                                ) : null}
                            </div>
                            <div className="my-5 flex justify-center">
                                <DatePicker formik={formik} bookings={singleVenue.bookings || []} />
                            </div>
                            <div className="flex flex-col items-center sm:block">
                                <div className="flex w-full flex-col gap-2 px-2 font-body">
                                    <div className="flex justify-between">
                                        <p>Price/ pr night</p>
                                        {singleVenue.price}
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Cleaning Fee</p>
                                        <p>$500</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Tax</p>
                                        <p>$100</p>
                                    </div>
                                    <div className="flex w-full justify-between border-t border-black py-5 font-bold">
                                        <h2>Total</h2>
                                        {totalPrice}
                                    </div>
                                </div>
                                <div className=" flex justify-center md:my-1">
                                    <button
                                        type="submit"
                                        disabled={!formik.isValid}
                                        className="w-full rounded-md bg-blue px-10 py-2 font-body font-bold text-white drop-shadow-md hover:bg-bluegreen hover:text-black md:w-48"
                                    >
                                        Book now!
                                    </button>
                                </div>
                            </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default DetailPage;
