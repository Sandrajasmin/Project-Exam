import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useParams } from 'react-router-dom';
import { fetchSingleVenue, editVenue } from '../../../store/modules/VenueSlice';

const validationSchema = Yup.object().shape({
    name: Yup.string().min(6, 'Must be 6 chars or more').max(50, 'Can not be longer than 50 chars'),

    description: Yup.string()
        .min(6, 'Must be 6 chars or more')
        .max(1500, 'Can not be longer than 1500 chars'),
    media: Yup.string()
        .url('Invalid URL')
        .matches(/\.(gif|jpe?g|png)$/i, 'Invalid image URL')
        .nullable()
        .notRequired(),
    price: Yup.number().required('Required'),
    address: Yup.string()
        .min(2, 'Must be 6 chars or more')
        .max(50, 'Can not be longer than 50 chars'),
    continent: Yup.string()
        .min(2, 'Must be 6 chars or more')
        .max(50, 'Can not be longer than 50 chars'),
    country: Yup.string()
        .min(2, 'Must be 6 chars or more')
        .max(50, 'Can not be longer than 50 chars'),
    city: Yup.string().min(2, 'Must be 6 chars or more').max(50, 'Can not be longer than 50 chars')
});

function EditFormVenue() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const { singleVenue } = useSelector((state) => state.venues);
    useEffect(() => {
        if (id) {
            dispatch(fetchSingleVenue(id));
        }
    }, [dispatch, id]);
    const [mediaArray, setMediaArray] = useState(singleVenue ? singleVenue.media : []);

    const formik = useFormik({
        initialValues: {
            name: singleVenue?.name || '',
            description: singleVenue?.description || '',
            media: singleVenue?.media || [],
            price: singleVenue?.price || 1,
            maxGuests: singleVenue?.maxGuests || 1,
            rating: 5,
            meta: {
                wifi: singleVenue?.meta.wifi || '',
                parking: singleVenue?.meta.parking || '',
                breakfast: singleVenue?.meta.breakfast || '',
                pets: singleVenue?.meta.pets || ''
            },
            location: {
                address: singleVenue?.location.address || '',
                city: singleVenue?.location.city || '',
                zip: singleVenue?.location.zip || '',
                country: singleVenue?.location.country || '',
                continent: singleVenue?.location.continent || '',
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
            dispatch(editVenue(id, venueData));
        }
    });

    function pushToMediaArray() {
        const mediaValue = document.getElementById('media').value;
        const urlRegex = /(ftp|http|https):\/\/[^ "]+$/;
        if (urlRegex.test(mediaValue)) {
            const newMediaArray = [...mediaArray, mediaValue];
            setMediaArray(newMediaArray);
            document.getElementById('media').value = '';
        } else {
            return null;
        }
    }

    function deleteMedia(media) {
        const newMediaArray = mediaArray.filter((item) => item !== media);
        setMediaArray(newMediaArray);
    }

    return (
        <div className="mx-auto max-w-7xl px-5">
            <div className="my-5 flex gap-5">
                <div id="create-venue" className="w-full bg-white px-5 py-5 drop-shadow-md">
                    <div id="form">
                        <form onSubmit={formik.handleSubmit} className="my-5">
                            <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:space-y-0">
                                <div className="flex flex-col gap-y-5 lg:gap-y-10">
                                    <div id='input_title'>
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
                                                    value={formik.values.name || ''}
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-darkgrey placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder={'Write a good name'}
                                                />
                                            </div>
                                            {formik.touched.name && formik.errors.name ? (
                                                <div className="text-sm text-red-600">
                                                    *{formik.errors.name}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>                            
                                    <div id='input_description'>
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
                                                rows="6"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.description || ''}
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
                                    <div id='input_country'>
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
                                                    htmlFor="continent"
                                                    className="my-2 block font-body font-medium leading-6 text-darkgrey"
                                                >
                                                    Continent
                                                </label>
                                                <input
                                                    type="text"
                                                    name="continent"
                                                    id="continent"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.continent || ''}
                                                    className="block w-full rounded-md border-0 py-1.5 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue sm:leading-6"
                                                />
                                                {formik.touched.continent &&
                                                formik.errors.continent ? (
                                                    <div className="text-sm text-red-600">
                                                        *{formik.errors.continent}
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
                                        <div id="address" className="mt-2">
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
                                <div className=" flex flex-col gap-5 lg:w-1/2 xl:w-1/3">
                                    {/* GALLERY */}
                                    <div className="flex flex-col items-start">
                                        <label htmlFor="gallery" className="mb-[-16px]">
                                            Gallery
                                        </label>
                                        {mediaArray && (
                                            <div className="mt-4 flex flex-wrap gap-1">
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
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            />
                                        </div>
                                        {formik.touched.media && formik.errors.media ? (
                                            <div className="text-red-600">
                                                {formik.errors.media}
                                            </div>
                                        ) : null}
                                        <button
                                            type="button"
                                            onClick={pushToMediaArray}
                                            className="mt-4 place-self-end rounded bg-[#125C85] px-3 py-1 font-semibold text-white hover:bg-[#A2D9FF] hover:text-black"
                                        >
                                            Add
                                        </button>
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
                                                    type="number"
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
                                    {/*  */}
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
                                                        value={formik.values.pets || ''}
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
                                                        value={formik.values.wifi || ''}
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
                                                        value={formik.values.breakfast || ''}
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
                                                        value={formik.values.parking || ''}
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
                                            to="/venueManager"
                                            className="rounded-md bg-bluegreen px-5 py-2 font-body font-light drop-shadow-md hover:bg-blue hover:text-white"
                                        >
                                            Cancel
                                        </Link>
                                        <button
                                            type="submit"
                                            className="rounded-md bg-blue px-10 py-2 font-body text-white shadow-sm hover:bg-[#1798CE] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Update
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
}

export default EditFormVenue;
