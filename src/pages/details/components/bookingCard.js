import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { fetchSingleVenue, bookVenue } from '../../../store/modules/VenueSlice';
import DatePicker from './calendar';
import Logo from '../../../assets/img/logo.png';

const calculatePriceTax = (dateFrom, dateTo, pricePerNight) => {
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
    const totalPriceTax = numberOfNights * pricePerNight + 500 + 100;
    return totalPriceTax;
};

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
    const totalPrice = numberOfNights * pricePerNight;
    return totalPrice;
};

const Modal = ({ isOpen, onClose, children }) => {
    const modalClasses = `fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? 'visible' : 'hidden'
    }`;
    return (
        <div className={modalClasses}>
            <div className="modal-overlay absolute inset-0 bg-black opacity-70"></div>
            <div className="modal-container z-50 mx-auto w-11/12 lg:w-4/4 overflow-y-auto bg-white shadow-lg md:max-w-md">
                <div className="modal-content px-6 py-10 md:mx-10 lg:py-14 text-left">
                    <button
                        className="modal-close absolute right-0 top-0 mr-10 mt-14"
                        onClick={onClose}
                    >
                        <svg
                            className="h-6 w-6 fill-current text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                className="heroicon-ui"
                                d="M14.35 14.35a1 1 0 0 1-1.42 0L10 11.41l-2.93 2.93a1 1 0 0 1-1.42-1.42L8.59 10 5.66 7.07a1 1 0 0 1 1.42-1.42L10 8.59l2.93-2.93a1 1 0 0 1 1.42 1.42L11.41 10l2.93 2.93a1 1 0 0 1 0 1.42z"
                            />
                        </svg>
                    </button>
                    {children}
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};

const DetailPage = () => {
    const dispatch = useDispatch();
    const singleVenue = useSelector((state) => state.venues.singleVenue);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const { id } = useParams();

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
        return format(date, 'dd-MM-yyyy');
    };

    const formik = useFormik({
        initialValues: {
            dateFrom: '',
            dateTo: '',
            guests: '',
            venueId: id
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            const bookingData = {
                dateFrom: values.dateFrom,
                dateTo: values.dateTo,
                guests: values.guests,
                venueId: values.venueId
            };
            //dispatch(setLoadingState(true));
            await dispatch(bookVenue(bookingData));
            // dispatch(setLoadingState(false));
            resetForm();
            setFormSubmitted(true);
            setModalOpen(true);
            window.scrollTo(0, 0);
        }
    });

    useEffect(() => {
        dispatch(fetchSingleVenue(id));
    }, [dispatch, id]);

    const totalPriceTax = calculatePriceTax(
        formik.values.dateFrom,
        formik.values.dateTo,
        singleVenue.price
    );

    const totalPrice = calculatePrice(
        formik.values.dateFrom,
        formik.values.dateTo,
        singleVenue.price
    );

    const calculateNumberOfNights = () => {
        if (!formik.values.dateFrom || !formik.values.dateTo) {
            return 0;
        }

        const start = new Date(formik.values.dateFrom);
        const end = new Date(formik.values.dateTo);

        if (isNaN(start) || isNaN(end)) {
            return 0;
        }

        const timeDiff = Math.abs(end - start);
        const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return numberOfNights;
    };

    // Calculate the number of nights
    const numberOfNights = calculateNumberOfNights();

    return (
        <>
            <div>
                {formSubmitted ? (
                    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                        <div className="flex flex-col gap-5 items-center">
                            <div className="h-15 w-15">
                                <img src={Logo} alt="Logo w-full h-full" />
                            </div>
                            <div className='flex flex-col gap-5 w-full'>
                                <div>
                                    <h1 className="font-heading text-4xl font-bold">THANK YOU</h1>
                                    <hr className="h-[3px] w-56 bg-black" />
                                    <h2 className="font-heading text-base">For booking</h2>
                                </div>
                                <div>
                                    <p className="text-sm font-body">
                                        We will send you a email with your booking details shortly!
                                    </p>
                                    <Link to="/bookings" >
                                        <p className='font-body text-sm '>You can manage your bookings <span className='underline'>here</span></p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Modal>
                ) : (
                    <div className="max-w-md rounded-md bg-white px-6 py-5 drop-shadow-lg md:px-8">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex justify-center">
                                <div>
                                    <label
                                        htmlFor="dateFrom"
                                        className="block rounded-tl bg-darkBlue py-2 text-center font-body font-light text-white"
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
                                            className="border-1 block w-full border border-darkBlue px-2 py-1.5 text-center"
                                        />
                                        {formik.touched.dateFrom && formik.errors.dateFrom ? (
                                            <div className="text-center text-sm text-red-600">
                                                {formik.errors.dateFrom}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="dateTo"
                                        className="block rounded-tr bg-lightBlue py-2 text-center font-body font-light text-white"
                                    >
                                        Check out
                                    </label>
                                    <div className="">
                                        <input
                                            onChange={formik.handleChange}
                                            value={
                                                formik.values.dateTo
                                                    ? dateToYMD(formik.values.dateTo)
                                                    : ''
                                            }
                                            id="dateTo"
                                            name="dateTo"
                                            required
                                            className="border-1 block w-full border border-lightBlue px-2 py-1.5 text-center"
                                        />
                                        {formik.touched.dateTo && formik.errors.dateTo ? (
                                            <div className="text-center text-sm text-red-600">
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
                                    placeholder="Number of Guests"
                                    className="border-1 block w-full border border-darkBlue px-4 py-1.5"
                                />
                                {formik.touched.guests && formik.errors.guests ? (
                                    <div className="text-sm text-red-600">
                                        {formik.errors.guests}
                                    </div>
                                ) : null}
                            </div>
                            <div className="my-5 flex justify-center">
                                <DatePicker formik={formik} bookings={singleVenue.bookings || []} />
                            </div>
                            <div className="flex flex-col items-center sm:block">
                                <div className="flex w-full flex-col gap-2 px-2 font-body">
                                    <div className="flex justify-between">
                                        <p>
                                            {singleVenue.price} X {numberOfNights} Nights
                                        </p>

                                        <div>{totalPrice} $</div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Cleaning Fee</p>
                                        <p>500 $</p>
                                    </div>
                                    <div className="flex justify-between pb-5">
                                        <p>Tax</p>
                                        <p>100 $</p>
                                    </div>
                                    <div className="flex w-full justify-between border-t border-black pt-5 font-medium">
                                        <h2>Total</h2>
                                        {totalPriceTax} $
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
            </div>
        </>
    );
};

export default DetailPage;
