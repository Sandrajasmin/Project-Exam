import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { newVenue } from '../../../store/modules/VenueSlice';
import Heading from './heading';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(6, 'Must be 6 chars or more')
        .max(50, 'Cannot be longer than 50 chars')
        .required('Required'),
    description: Yup.string()
        .min(6, 'Must be 6 chars or more')
        .max(1500, 'Cannot be longer than 1500 chars')
        .required('Required'),
    media: Yup.string()
        .url('Invalid URL')
        .matches(/\.(gif|jpe?g|png)$/i, 'Invalid image URL'),
    price: Yup.number().required('Required'),
    maxGuests: Yup.number().required('Required'),
    address: Yup.string()
        .min(2, 'Must be 6 chars or more')
        .max(50, 'Cannot be longer than 50 chars')
        .required('Required'),
    continent: Yup.string()
        .min(2, 'Must be 6 chars or more')
        .max(50, 'Cannot be longer than 50 chars')
        .required('Required'),
    country: Yup.string()
        .min(2, 'Must be 6 chars or more')
        .max(50, 'Cannot be longer than 50 chars')
        .required('Required'),
    city: Yup.string()
        .min(2, 'Must be 6 chars or more')
        .max(50, 'Cannot be longer than 50 chars')
        .required('Required'),
    zip: Yup.string().required('Required')
});

const VenueForm = () => {
    const [mediaArray, setMediaArray] = useState([]);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            media: [],
            price: 1,
            maxGuests: 1,
            rating: 3,
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
                media: mediaArray,
                price: values.price,
                maxGuests: values.maxGuests,
                rating: 3,
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
            dispatch(newVenue(venueData));
        }
    });

    const pushToMediaArray = () => {
        const mediaValue = document.getElementById('media').value;
        const urlRegex = /(ftp|http|https):\/\/[^ "]+$/;
        if (mediaValue.match(urlRegex)) {
            setMediaArray([...mediaArray, mediaValue]);
            document.getElementById('media').value = '';
        } else {
            alert('Invalid image URL');
        }
    };

    const deleteMedia = (media) => {
        const updatedMediaArray = mediaArray.filter((item) => item !== media);
        setMediaArray(updatedMediaArray);
    };

    const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;

    return (
        <div className="mx-auto max-w-7xl px-5">
            <div className="my-5 flex gap-5">
                <div id="create-venue" className="w-full bg-white px-5 py-5 drop-shadow-md">
                    <div id="form">
                        <Heading />
                        <form onSubmit={handleSubmit} className="my-5">
                            <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:space-y-0">
                                <div className="flex flex-col gap-y-5 lg:gap-y-10">
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
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.name}
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-darkgrey placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Title"
                                                />
                                            </div>
                                            {touched.name && errors.name ? (
                                                <div className="text-sm text-red-600">
                                                    *{errors.name}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between">
                                            <label
                                                htmlFor="description"
                                                className="block font-body leading-6 text-darkgrey"
                                            >
                                                Description
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <textarea
                                                id="description"
                                                name="description"
                                                rows="3"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.description}
                                                placeholder="Write a good description of the venue you want to list"
                                                className="block w-full rounded-md border-0 py-1.5 text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            ></textarea>
                                            {touched.description && errors.description ? (
                                                <div className="text-sm text-red-600">
                                                    *{errors.description}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                    {/* ADRESS */}
                                    <div className="">
                                        <div id="address" className="">
                                            <label
                                                htmlFor="address"
                                                className="my-2 block font-body font-medium leading-6 text-darkgrey"
                                            >
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                onBlur={handleBlur}
                                                value={values.address || ''}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue sm:leading-6"
                                            />
                                            {touched.address && errors.address ? (
                                                <div className="text-sm text-red-600">
                                                    *{errors.address}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div id="city" className="mt-2">
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
                                                onBlur={handleBlur}
                                                value={values.city || ''}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 py-1.5 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue sm:leading-6"
                                            />
                                            {touched.city && errors.city ? (
                                                <div className="text-sm text-red-600">
                                                    *{errors.city}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div id="country" className="mt-2">
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
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.country || ''}
                                                className="block w-full rounded-md border-0 py-1.5 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue sm:leading-6"
                                            />
                                            {touched.country && errors.country ? (
                                                <div className="text-sm text-red-600">
                                                    *{errors.country}
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="flex flex-col md:justify-between lg:flex-row lg:gap-5">
                                            <div id="continent" className="mt-2">
                                                <label
                                                    htmlFor="continent"
                                                    className="my-2 block font-body font-medium leading-6 text-darkgrey"
                                                >
                                                    Continent
                                                </label>
                                                <input
                                                    type="text"
                                                    name="continent"
                                                    id="continent"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.continent || ''}
                                                    className="block w-full rounded-md border-0 py-1.5 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue sm:leading-6"
                                                />
                                                {touched.continent && errors.continent ? (
                                                    <div className="text-sm text-red-600">
                                                        *{errors.continent}
                                                    </div>
                                                ) : null}
                                            </div>

                                            <div id="Zip" className="mt-2">
                                                <label
                                                    htmlFor="postal-code"
                                                    className="my-2 block font-body font-medium leading-6 text-darkgrey"
                                                >
                                                    ZIP
                                                </label>
                                                <input
                                                    type="text"
                                                    name="zip"
                                                    id="zip"
                                                    onBlur={handleBlur}
                                                    value={values.zip || ''}
                                                    onChange={handleChange}
                                                    className="block w-full rounded-md border-0 py-1.5 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue sm:leading-6"
                                                />
                                                {touched.zip && errors.zip ? (
                                                    <div className="text-sm text-red-600">
                                                        *{errors.zip}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex flex-col gap-5">
                                    <div className="flex flex-col items-start">
                                        <label htmlFor="gallery" className="mb-[-16px]">
                                            Gallery
                                        </label>
                                        <p className="pt-5 font-body text-sm font-thin">
                                            * Only image urls containing jpg,pdf and gif are
                                            accepted
                                        </p>
                                        {mediaArray && (
                                            <div className=" flex flex-wrap gap-1">
                                                {mediaArray.map((media) => (
                                                    <div
                                                        key={media}
                                                        className="relative h-24 w-24 rounded bg-gray-200"
                                                    >
                                                        <img
                                                            src={media}
                                                            alt="gallery"
                                                            className="h-full w-full rounded object-cover"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => deleteMedia(media)}
                                                            className="absolute right-[-4px] top-[-4px] flex h-4 w-4 items-center justify-center rounded-full bg-gray-200 text-sm"
                                                        >
                                                            x
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        <div className="mt-4 flex w-full gap-4">
                                            <input
                                                type="text"
                                                name="media"
                                                id="media"
                                                className="w-full rounded border-2 border-[#125C85] p-1"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        {touched.media && errors.media ? (
                                            <div className="text-red-600">{errors.media}</div>
                                        ) : null}
                                        <button
                                            type="button"
                                            onClick={pushToMediaArray}
                                            className="mt-4 place-self-end rounded bg-[#125C85] px-3 py-1 font-semibold text-white hover:bg-[#A2D9FF] hover:text-black"
                                        >
                                            Add
                                        </button>
                                    </div>
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
                                                    type="number"
                                                    name="price"
                                                    id="price"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.price}
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 font-body text-base font-light text-darkgrey focus:ring-0 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            {touched.price && errors.price ? (
                                                <div className="text-sm text-red-600">
                                                    *{errors.price}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>

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
                                                    type="number"
                                                    name="maxGuests"
                                                    id="maxGuests"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.maxGuests}
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 font-body text-base font-light text-darkgrey focus:ring-0 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            {touched.maxGuests && errors.maxGuests ? (
                                                <div className="text-sm text-red-600">
                                                    *{errors.maxGuests}
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
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.pets}
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
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.wifi}
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
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.breakfast}
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
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.parking}
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
