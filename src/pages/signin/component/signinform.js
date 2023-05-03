import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters')
});

function SingIn() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: (values) => {
            const userData = {
                email: values.email,
                password: values.password
            };
            fetch('https://nf-api.onrender.com/api/v1/holidaze/auth/login', {
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
                    localStorage.setItem('userName', data.name);
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('avatar', data.avatar);
                    window.location.href = '/';
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    });
    return (
        <div>
            <>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mx-auto">
                        <div className="flex w-72 flex-col md:w-[400px]">
                            <div id="input_email">
                                <input
                                    name="email"
                                    type="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    autoComplete="email"
                                    placeholder="example@stud.noroff.no"
                                    className="block w-full rounded-t-md border-0 px-4 py-2 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue"
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="pl-1 font-body text-sm font-light text-red-500">
                                        *{formik.errors.email}
                                    </div>
                                ) : null}
                            </div>
                            <div id="input_password">
                                <input
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    autoComplete="password"
                                    placeholder="Password"
                                    className="block w-full rounded-b-md border-0 px-4 py-2 font-body font-light text-darkgrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue"
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="pl-1 font-body text-sm font-light text-red-500">
                                        *{formik.errors.password}
                                    </div>
                                ) : null}
                            </div>
                            <fieldset className="flex justify-between py-6 font-body text-sm font-light leading-5">
                                <div className="flex gap-1">
                                    <input type="checkbox" id="save" name="save" />
                                    <label htmlFor="save">Remember me</label>
                                </div>
                                <div>
                                    <span className="font-medium  text-blue">
                                        Forgot your password?
                                    </span>
                                </div>
                            </fieldset>
                            <div className="flex ">
                                <button
                                    type="submit"
                                    className="w-full rounded-md bg-blue py-2.5 text-center text-sm font-normal text-white shadow-md hover:bg-bluegreen hover:text-black"
                                >
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        </div>
    );
}

export default SingIn;
