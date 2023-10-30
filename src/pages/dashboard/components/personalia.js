import React, { useState } from 'react';
import { updateLocalStorage } from '../../../utils/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    avatar: Yup.string()
        .url('Invalid URL')
        .matches(
            /^(https?:\/\/.*\.(?:png|PNG))$/i,
            'Invalid image URL. Only PNG images are allowed.'
        )
});

const userName = localStorage.getItem('userName');
const userEmail = localStorage.getItem('email');

function EditPersonalia() {
    const [avatar, setAvatar] = useState(localStorage.getItem('avatar'));

    const formik = useFormik({
        initialValues: {
            avatar: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                await formik.validateForm();
                const response = await fetch(
                    `https://nf-api.onrender.com/api/v1/holidaze/profiles/${userName}/media`,
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify({ avatar: values.avatar })
                    }
                );
                if (response.ok) {
                    updateLocalStorage('avatar', values.avatar);
                    setAvatar(values.avatar); // Update the local state with the new avatar
                    window.location.reload();
                } else {
                    throw new Error('Network response was not ok.');
                }
            } catch (error) {
                console.error(error);
            }
            setSubmitting(false);
        }
    });

    return (
        <div className="mx-auto px-5">
            <form onSubmit={formik.handleSubmit} className="my-8 flex flex-col gap-5 font-body">
                <div id="input_title">
                    <label htmlFor="name" className="block font-medium leading-6 text-darkgrey">
                        Title
                    </label>
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-darkBlue sm:max-w-md">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            placeholder={userName}
                            readOnly={true}
                        />
                    </div>
                </div>
                <div id="input_email">
                    <label htmlFor="email" className="block font-medium leading-6 text-darkgrey">
                        Email
                    </label>
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-darkBlue sm:max-w-md">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-2 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            placeholder={userEmail}
                            readOnly={true}
                        />
                    </div>
                </div>
                <div id="input_avatar" className="mb-4">
                    <label htmlFor="avatar" className="block font-medium text-gray-700">
                        Avatar URL:
                    </label>
                    <input
                        type="text"
                        id="avatar"
                        name="avatar"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.avatar}
                        placeholder={avatar}
                    />
                    {formik.touched.avatar && formik.errors.avatar && (
                        <div className="mt-1 text-red-500">{formik.errors.avatar}</div>
                    )}
                </div>
                <div className="flex justify-between md:justify-end">
                    <button
                        type="submit"
                        className="bg-darkBrown px-4  py-2 text-white hover:bg-lightBeig"
                        disabled={formik.isSubmitting}
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditPersonalia;
