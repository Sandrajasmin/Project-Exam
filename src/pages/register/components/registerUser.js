import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Full name must be at least 3 characters')
        .required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Required').min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    avatar: Yup.string()
        .url('Invalid URL')
        .matches(/\.(gif|jpe?g|png)$/i, 'Invalid image URL')
});

const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            avatar: '',
            password: '',
            passwordConfirm: '',
            venueManager: false
        },
        validationSchema,
        onSubmit: (values) => {
            const userData = {
                name: values.name,
                email: values.email,
                avatar: values.avatar,
                venueManager: values.venueManager,
                password: values.password
            };
            fetch('https://nf-api.onrender.com/api/v1/holidaze/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    window.location.href = '/log-in';
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="mx-auto  flex flex-col gap-5 px-4 sm:px-6 md:flex-row md:justify-between lg:px-8">
                    <div className="flex flex-col gap-5 md:w-[400px]">
                        <div id="input_name">
                            <label
                                htmlFor="name"
                                className="block font-heading text-sm leading-6 text-black"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                id="name"
                                placeholder="John Doe"
                                className="block w-full rounded-md border-0 px-4 py-2 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue"
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="pl-1 font-body text-sm font-light text-red-500">
                                    *{formik.errors.name}
                                </div>
                            ) : null}
                        </div>
                        <div id="input_email">
                            <label
                                htmlFor="email"
                                className="block font-heading text-sm leading-6 text-black"
                            >
                                Email
                            </label>

                            <input
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                autoComplete="email"
                                placeholder="example@stud.noroff.no"
                                className="block w-full rounded-md border-0 px-4 py-2 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="pl-1 font-body text-sm font-light text-red-500">
                                    *{formik.errors.email}
                                </div>
                            ) : null}
                        </div>
                        <div id="input_password">
                            <label
                                htmlFor="password"
                                className="block font-heading text-sm leading-6 text-black"
                            >
                                Password
                            </label>

                            <input
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                autoComplete="password"
                                placeholder="••••••••"
                                className="block w-full rounded-md border-0 px-4 py-2 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue"
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="pl-1 font-body text-sm font-light text-red-500">
                                    *{formik.errors.password}
                                </div>
                            ) : null}
                        </div>
                        <div id="input_confirmPassword">
                            <label
                                htmlFor="email"
                                className="block font-heading text-sm leading-6 text-black"
                            >
                                Confirm Password
                            </label>

                            <input
                                name="confirmPassword"
                                type="confirmPassword"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                                autoComplete="password"
                                placeholder="••••••••"
                                className="block w-full rounded-md border-0 px-4 py-2 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue"
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <div className="pl-1 font-body text-sm font-light text-red-500">
                                    *{formik.errors.confirmPassword}
                                </div>
                            ) : null}
                        </div>
                        <div id="input_Avatar">
                            <label
                                htmlFor="avatar"
                                className="block font-heading text-sm leading-6 text-black"
                            >
                                Avatar
                            </label>
                            <input
                                name="avatar"
                                type="avatar"
                                autoComplete="avatar"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.avatar}
                                placeholder="avatar.com/image"
                                className="block w-full rounded-md border-0 px-4 py-2 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue"
                            />
                            {formik.touched.avatar && formik.errors.avatar ? (
                                <div className="pl-1 font-body text-sm font-light text-red-500">
                                    *{formik.errors.avatar}
                                </div>
                            ) : null}
                        </div>
                        <fieldset className="flex flex-col gap-4 text-black md:flex-row md:gap-12">
                            <p>Do you want to rent out an accommodation??</p>
                            <div>
                                <input
                                    checked={formik.values.venueManager}
                                    onChange={(event) => {
                                        formik.setFieldValue(
                                            'venueManager',
                                            event.target.value === 'true'
                                        );
                                    }}
                                    type="radio"
                                    id="yes"
                                    name="venueManager"
                                    value={true}
                                />

                                <label htmlFor="yes" className="ml-1">
                                    Yes
                                </label>
                            </div>
                            <div>
                                <input
                                    checked={formik.values.venueManager}
                                    onChange={(event) => {
                                        formik.setFieldValue(
                                            'venueManager',
                                            event.target.value === 'false'
                                        );
                                    }}
                                    type="radio"
                                    id="no"
                                    name="venueManager"
                                    value={false}
                                />
                                <label htmlFor="no" className="ml-1">
                                    No
                                </label>
                            </div>
                        </fieldset>

                        <div className="flex">
                            <button
                                type="submit"
                                className="w-full rounded-md bg-blue py-2.5 text-center text-sm font-normal text-white shadow-md hover:bg-bluegreen hover:text-black"
                            >
                                Create account
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
