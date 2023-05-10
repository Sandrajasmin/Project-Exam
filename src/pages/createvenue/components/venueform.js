import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { newVenue } from '../../../store/modules/VenueSlice'
import DefaultAvatar from '../../../assets/img/defaultAvatar.png';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(8, 'Must be 6 characters or more')
        .max(60, 'Can not be longer than 50 chars')
        .required('Required'),
    description: Yup.string()
        .min(10, 'Must be at least 10 characters or more')
        .max(1500, 'Can not be longer than 1500 chars')
        .required('Required'),
    media: Yup.string()
        .url('Invalid URL')
        .matches(/\.(gif|jpe?g|png)$/i, 'Invalid image URL'),
    price: Yup.number().required('Required'),
    maxGuests: Yup.number().required('Required'),
    address: Yup.string()
        .min(2, 'Must be 6 chars or more')
        .max(50, 'Can not be longer than 50 chars')
        .required('Required'),
    continent: Yup.string()
        .min(2, 'Must be 6 chars or more')
        .max(50, 'Can not be longer than 50 chars')
        .required('Required'),
    country: Yup.string()
        .min(2, 'Must be 6 chars or more')
        .max(50, 'Can not be longer than 50 chars')
        .required('Required'),
    city: Yup.string()
        .min(2, 'Must be 6 chars or more')
        .max(50, 'Can not be longer than 50 chars')
        .required('Required'),
    zip: Yup.string().required('Required')
});

const VenueForm = () => {
    const dispatch = useDispatch();
    const userName = localStorage.getItem('userName');
    // const avatar = localStorage.getItem('avatar');
    // let userAvatar;
    // if (avatar) {
    //     userAvatar = <img src={avatar} alt="avatar" className=" ounded-full" />;
    // } else {
    //     userAvatar = <img src={Defaultavatar} alt="avatar" className=" h-8 w-8 rounded-full" />;
    // }

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            media: [],
            price: 1,
            maxGuests: 1,
            rating: 5,
            meta: {
                wifi: false,
                parking: false,
                breakfast: false,
                pets: false
            },
            location: {
                address: '',
                city: '',
                zip: '',
                country: '',
                continent: '',
                lat: 0,
                lng: 0
            }
        },
        validationSchema,
        onSubmit: (values) => {
            const venueData = {
                name: values.name,
                description: values.description,
                media: [values.media],
                price: values.price,
                maxGuests: values.maxGuests,
                rating: 5,
                meta: {
                    wifi: values.wifi,
                    parking: values.parking,
                    breakfast: values.breakfast,
                    pets: values.pets
                },
                location: {
                    address: values.address,
                    city: values.city,
                    zip: values.zip,
                    country: values.country,
                    continent: values.continent,
                    lat: 0,
                    lng: 0
                }
            };
            console.log(venueData);
            dispatch(newVenue(venueData));
        }
    });


    return (
        <div className="mx-auto max-w-7xl px-5">
            <div className="my-5 flex gap-5">
                <div id="dashboard" className="hidden sm:block ">
                    <aside className="sticky top-0  flex h-screen flex-col items-center rounded-md bg-gradient-to-r from-blue to-[#1798CE] lg:h-full">
                        <div className="py-20">
                            <img src={DefaultAvatar} />
                            <p className="font-body text-white">{userName}</p>
                        </div>
                        <div className="flex flex-col gap-5 px-16 font-body text-white">
                            <div className="items-base flex gap-2">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <Link to="/">Dashboard</Link>
                            </div>
                            <div className="items-base flex gap-2">
                                <i className="fa-solid fa-person-walking-luggage"></i>
                                <Link to="/">Bookings</Link>
                            </div>
                            <div className="items-base flex gap-2">
                                <i className="fa-sharp fa-solid fa-house-chimney"></i>
                                <Link to="/">Venus</Link>
                            </div>
                            <div className="items-base flex gap-2">
                                <i className="fa-solid fa-door-open"></i>
                                <Link to="/">Sign out</Link>
                            </div>
                        </div>
                    </aside>
                </div>
                <div id="create-venue" className="w-full bg-white px-5 py-5 drop-shadow-md">
                    <div id="header">
                        <h1 className="font-heading text-4xl font-bold leading-7 text-black">
                            Hi 👋 {userName}
                        </h1>
                        <p className="font-body text-base text-black ">
                            Ready to create a new listing? Don’t be afraid to contact us if you need
                            help setting up your new venue.
                        </p>
                    </div>
                    <div id="form">
                        <form onSubmit={formik.handleSubmit} className="my-5">
                            <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:space-y-0">
                                <div className="flex flex-col gap-y-5 lg:gap-y-10">
                                    {/* TITLE */}
                                    <div className="">
                                        <label
                                            htmlFor="name"
                                            className="block font-body font-medium leading-6 text-darkgrey"
                                        >
                                            Title
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.name}
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-darkgrey placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Write a good name"
                                                />
                                            </div>
                                            {formik.touched.name && formik.errors.name ? (
                                                <div className="text-sm text-red-600">
                                                    *{formik.errors.name}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    {/* Description */}
                                    <div className="">
                                        <div className="flex justify-between">
                                            <label
                                                htmlFor="description"
                                                className="block font-body leading-6 text-darkgrey"
                                            >
                                                Description
                                            </label>
                                            {/* <p>{`${textAreaCount}/800`}</p> */}
                                        </div>
                                        <div className="mt-2">
                                            <textarea
                                                id="description"
                                                name="description"
                                                rows="3"
                                                onBlur={formik.handleBlur}
                                                value={formik.values.description}
                                                onChange={formik.handleChange}
                                                placeholder="Write a good description of the venue you want to list"
                                                className="block w-full rounded-md border-0 py-1.5 text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            ></textarea>
                                            {formik.touched.description &&
                                                formik.errors.description ? (
                                                <div className="text-sm text-red-600">
                                                    *{formik.errors.description}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    {/* ADRESS */}
                                    <div className="">
                                        <div className="flex flex-col md:flex-row md:justify-between lg:gap-5">
                                            <div className="mt-2">
                                                <label
                                                    htmlFor="country"
                                                    className="my-2 block font-body font-medium leading-6 text-darkgrey"
                                                >
                                                    Country
                                                </label>
                                                <input
                                                    type="text"
                                                    name="country"
                                                    id="country"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.country || ''}
                                                    className="block w-full rounded-md border-0 py-1.5 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue sm:leading-6"
                                                />
                                                {formik.touched.country && formik.errors.country ? (
                                                    <div className="text-sm text-red-600">
                                                        *{formik.errors.country}
                                                    </div>
                                                ) : null}
                                            </div>
                                            <div className="mt-2">
                                                <label
                                                    htmlFor="city"
                                                    className="my-2 block font-body font-medium leading-6 text-darkgrey"
                                                >
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.city || ''}
                                                    onChange={formik.handleChange}
                                                    className="block w-full rounded-md border-0 py-1.5 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue sm:leading-6"
                                                />
                                                {formik.touched.city && formik.errors.city ? (
                                                    <div className="text-sm text-red-600">
                                                        *{formik.errors.city}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div id="adress" className="mt-2">
                                            <label
                                                htmlFor="adress"
                                                className="my-2 block font-body font-medium leading-6 text-darkgrey"
                                            >
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                onBlur={formik.handleBlur}
                                                value={formik.values.address || ''}
                                                onChange={formik.handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue sm:leading-6"
                                            />
                                            {formik.touched.address && formik.errors.address ? (
                                                <div className="text-sm text-red-600">
                                                    *{formik.errors.address}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div id="Zip" className="mt-2">
                                            <label
                                                htmlFor="postal-code"
                                                className="my-2 block font-body font-medium leading-6 text-darkgrey"
                                            >
                                                ZIP / Postal code
                                            </label>
                                            <input
                                                type="text"
                                                name="zip"
                                                id="zip"
                                                onBlur={formik.handleBlur}
                                                value={formik.values.zip || ''}
                                                onChange={formik.handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue sm:leading-6"
                                            />
                                            {formik.touched.zip && formik.errors.zip ? (
                                                <div className="text-sm text-red-600">
                                                    *{formik.errors.zip}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex flex-col gap-5">
                                    {/* GALLERY */}
                                    <div className="">
                                        <div className="mt-2 flex flex-col gap-5 rounded-lg border border-dashed border-darkgrey/25 px-10  py-10">
                                            <div>
                                                <label
                                                    htmlFor="cover-photo"
                                                    className="block font-body text-sm font-medium leading-6 text-black"
                                                >
                                                    Cover photo
                                                </label>
                                                <input
                                                    type="text"
                                                    name="media"
                                                    className="block w-full rounded-md border-0 py-1.5 text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                // onChange={formik.handleChange}
                                                // onBlur={formik.handleBlur}
                                                />
                                                {/* {formik.touched.media && formik.errors.media ? (
                                                        <div className="text-sm text-red-600">
                                                            *{formik.errors.media}
                                                        </div>
                                                    ) : null} */}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <label
                                                    htmlFor="cover-photo"
                                                    className="block font-body text-sm font-medium leading-6 text-black"
                                                >
                                                    Gallery
                                                </label>
                                                <input
                                                    type="text"
                                                    name="media"
                                                    className="block w-full rounded-md border-0 py-1.5 text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                                <input
                                                    type="text"
                                                    name="media"
                                                    className="block w-full rounded-md border-0 py-1.5 text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                                <input
                                                    type="text"
                                                    name="media"
                                                    className="block w-full rounded-md border-0 py-1.5 text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* PRICE */}
                                    <div className="">
                                        <label
                                            htmlFor="price"
                                            className="py-2 font-body text-base font-medium leading-6 text-darkgrey"
                                        >
                                            Price /Pr night
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="price"
                                                    id="price"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.price}
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 font-body text-base font-light text-darkgrey focus:ring-0 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            {formik.touched.price && formik.errors.price ? (
                                                <div className="text-sm text-red-600">
                                                    *{formik.errors.price}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    {/* PRICE */}
                                    <div className="">
                                        <label
                                            htmlFor="maxGuests"
                                            className="py-2 font-body text-base font-medium leading-6 text-darkgrey"
                                        >
                                            Max guests
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="maxGuests"
                                                    id="maxGuests"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.maxGuests}
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 font-body text-base font-light text-darkgrey focus:ring-0 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            {formik.touched.maxGuests && formik.errors.maxGuests ? (
                                                <div className="text-sm text-red-600">
                                                    *{formik.errors.maxGuests}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    {/* AMENITIES */}
                                    <div className="space-y-10 ">
                                        <fieldset>
                                            <legend className="py-2 font-body text-base font-medium leading-6 text-darkgrey">
                                                Amenities
                                            </legend>
                                            <div className="flex flex-col gap-5 md:flex-row">
                                                <div className="relative flex items-center gap-x-2 font-body text-sm font-light">
                                                    <input
                                                        id="pets"
                                                        name="pets"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.pets}
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-blue focus:ring-blue"
                                                    />
                                                    <label htmlFor="pets" className="">
                                                        Pets
                                                    </label>
                                                </div>
                                                <div className="relative flex items-center gap-x-2 font-body text-sm font-light">
                                                    <input
                                                        id="wifi"
                                                        name="wifi"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.wifi}
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-blue focus:ring-blue"
                                                    />
                                                    <label htmlFor="wifi" className="">
                                                        Wifi
                                                    </label>
                                                </div>
                                                <div className="relative flex items-center gap-x-2 font-body text-sm font-light">
                                                    <input
                                                        id="breakfast"
                                                        name="breakfast"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.breakfast}
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-blue focus:ring-blue"
                                                    />
                                                    <label htmlFor="breakfast" className="">
                                                        Breakfast
                                                    </label>
                                                </div>
                                                <div className="relative flex items-center gap-x-2 font-body text-sm font-light">
                                                    <input
                                                        id="parking"
                                                        name="parking"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.parking}
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-blue focus:ring-blue"
                                                    />
                                                    <label htmlFor="parking" className="">
                                                        Parking
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    {/* BUTTON */}
                                    <div className="flex items-center justify-end gap-x-6">
                                        <Link
                                            to="/dashboard"
                                            className="rounded-md bg-bluegreen px-5 py-2 font-body font-light drop-shadow-md hover:bg-blue hover:text-white"
                                        >
                                            Cancel
                                        </Link>
                                        <button
                                            type="submit"
                                            className="rounded-md bg-blue px-10 py-2 font-body text-white shadow-sm hover:bg-[#1798CE] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Publish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VenueForm;

