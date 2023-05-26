import React, { useState } from 'react';
import { updateLocalStorage } from '../../../utils/auth';
import DefaultAvatar from '../../../assets/img/defaultAvatar.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    avatar: Yup.string()
        .url('Invalid URL')
        .matches(/\.(gif|jpe?g|png)$/i, 'Invalid image URL')
});

function ProfileCard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [avatar, setAvatar] = useState(localStorage.getItem('avatar'));
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('email');

    const renderAvatar = () => {
        if (avatar) {
            return (
                <div className="my-5 h-20 w-20 rounded-full">
                    <img src={avatar} alt="avatar" className="h-full w-full rounded-full" />
                </div>
            );
        } else {
            return <img src={DefaultAvatar} alt="avatar" className="my-5 h-20 w-20 rounded-full" />;
        }
    };

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
                    setIsModalOpen(false);
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

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative flex h-[300px] w-[300px] flex-col items-center justify-center rounded-md bg-gradient-to-t from-blue to-[#2890BB] md:w-[330px] lg:w-[290px]">
            <div className="absolute right-0 top-0">
                <i
                    className="fa-solid fa-pencil float-right p-5 text-white"
                    onClick={openModal}
                ></i>
            </div>
            {renderAvatar()}
            <div className="text-center font-heading font-bold text-white">
                <span className="pr-2">Hi 👋</span>
                {userName}
                <div className="font-light">{userEmail}</div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="mx-5 w-full max-w-4xl rounded-md bg-white p-10 md:mx-20 lg:mx-32">
                        <h2 className="mb-4 font-heading text-xl font-bold">Update Avatar</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="avatar"
                                    className="block font-body font-medium text-gray-700"
                                >
                                    Avatar URL:
                                </label>
                                <input
                                    type="text"
                                    id="avatar"
                                    name="avatar"
                                    className="w-full rounded-md border border-gray-300 p-2 font-body text-sm"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.avatar}
                                />
                                {formik.touched.avatar && formik.errors.avatar && (
                                    <div className="mt-1 text-red-500">{formik.errors.avatar}</div>
                                )}
                            </div>
                            <div className="flex justify-between md:justify-end">
                                <button
                                    type="button"
                                    className="rounded-md bg-green px-4 py-2 text-black hover:text-gray-700 md:mr-5"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 rounded-md bg-blue px-4 py-2 text-white"
                                    disabled={formik.isSubmitting}
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileCard;
