import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Full name must be at least 3 characters')
        .required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
        .required('Required')
        .min(6, 'Password must be at least 6 characters'),
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
            password: '',
            confirmPassword: '',
            avatar: '',
            venueManager: "no"
        },
        validationSchema,
        onSubmit: (values) => {
            const userData = {
                name: values.name,
                email: values.email,
                avatar: values.avatar,
                venueManager: values.venueManager === "yes",
                password: values.password
            };
            console.log(userData);
            fetch('https://nf-api.onrender.com/api/v1/holidaze/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })
                .then(data => {
                    console.log(data);
                    window.location.href = '/login';
                })
                .catch(error => {
                    console.error(error)
                })
        }
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} className="dark:bg-primaryblue relative bg-white pt-5">
                <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 md:flex-row md:justify-between lg:px-8">
                    <div className="md:w-1/2 md:pt-20 flex flex-col gap-5">
                        <div id='input_name'>
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
                                    <div className="font-body text-sm font-light text-red-500 pl-1">
                                        *{formik.errors.name}
                                    </div>
                                ) : null}
                         
                        </div>
                        <div id='input_email'>
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
                                    placeholder='example@stud.noroff.no'
                                    className="block w-full rounded-md border-0 px-4 py-2 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue"
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="font-body text-sm font-light text-red-500 pl-1">
                                        *{formik.errors.email}
                                    </div>
                                ) : null}
                         
                        </div>
                        <div id='input_password'>
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
                                placeholder='••••••••'
                                className="block w-full rounded-md border-0 px-4 py-2 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue"
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="font-body text-sm font-light text-red-500 pl-1">
                                    *{formik.errors.password}
                                </div>
                            ) : null}

                        </div>
                        <div id='input_confirmPassword'>
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
                                placeholder='••••••••'
                                className="block w-full rounded-md border-0 px-4 py-2 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue"
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <div className="font-body text-sm font-light text-red-500 pl-1">
                                    *{formik.errors.confirmPassword}
                                </div>
                            ) : null}

                        </div>
                        <div id='input_Avatar'>
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
                                placeholder='avatar.com/image'
                                className="block w-full rounded-md border-0 px-4 py-2 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue"
                            />
                        </div>
                        
                        <div className="flex justify-end py-8">
                            <button
                                type="submit"
                                className="bg-blue hover:bg-bluegreen rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus"
                            >
                                Register User
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
