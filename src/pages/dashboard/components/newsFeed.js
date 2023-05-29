import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../../utils/auth';
import { fetchProfile } from '../../../store/modules/profileSlice';

const HostingCard = () => {
    const dispatch = useDispatch();
    const userDetails = getUserDetails();
    const singleProfile = useSelector((state) => state.profile.singleProfile);

    useEffect(() => {
        if (userDetails.username) {
            dispatch(fetchProfile(userDetails.username));
        }
    }, [dispatch, userDetails.username]);

    return (
        <div className="relative flex max-h-[600px] w-[300px] flex-col items-center justify-evenly overflow-auto rounded-md bg-gradient-to-t from-blue to-[#2890BB] md:w-[330px] lg:max-h-[620px] lg:w-[360px]">
            <div className="absolute right-0 top-0 ">
                <h2 className="p-2 font-heading text-4xl font-bold text-white">NEWS</h2>
            </div>
            <div className="mx-5 my-20 overflow-auto lg:mx-10">
                <div className="border-b py-5 font-body text-base font-medium text-white">
                    <h2>NEW BOOKING ON </h2>
                    {singleProfile && singleProfile.venues && singleProfile.venues !== undefined ? (
                        <div className="">{singleProfile.venues[0].name}</div>
                    ) : (
                        <p>COTTAGE HOUSE</p>
                    )}
                    <p className="font-body text-sm font-light text-white">
                        Sandra has requested 17.05.23 - 19.05.23
                    </p>
                </div>
                <div className="border-b py-5 font-body text-base font-medium text-white">
                    <h2>NEW BOOKING ON </h2>
                    {singleProfile && singleProfile.venues && singleProfile.venues !== undefined ? (
                        <div className="">{singleProfile.venues[1].name}</div>
                    ) : (
                        <p>COTTAGE HOUSE</p>
                    )}
                    <p className="font-body text-sm font-light text-white">
                        Sandra has requested 17.05.23 - 19.05.23
                    </p>
                </div>
                <div className="border-b py-5 font-body text-base font-medium text-white">
                    <h2>NEW BOOKING ON </h2>
                    {singleProfile && singleProfile.venues && singleProfile.venues !== undefined ? (
                        <div className="">{singleProfile.venues[2].name}</div>
                    ) : (
                        <p>COTTAGE HOUSE</p>
                    )}
                    <p className="font-body text-sm font-light text-white">
                        Sandra has requested 17.05.23 - 19.05.23
                    </p>
                </div>
                <div className="border-b py-5 font-body text-base font-medium text-white">
                    <h2>NEW BOOKING ON </h2>
                    {singleProfile && singleProfile.venues && singleProfile.venues !== undefined ? (
                        <div className="">{singleProfile.venues[3].name}</div>
                    ) : (
                        <p>COTTAGE HOUSE</p>
                    )}
                    <p className="font-body text-sm font-light text-white">
                        Sandra has requested 17.05.23 - 19.05.23
                    </p>
                </div>
                <div className="border-b py-5 font-body text-base font-medium text-white">
                    <h2>NEW BOOKING ON </h2>
                    {singleProfile && singleProfile.venues && singleProfile.venues !== undefined ? (
                        <div className="">{singleProfile.venues[0].name}</div>
                    ) : (
                        <p>COTTAGE HOUSE</p>
                    )}
                    <p className="font-body text-sm font-light text-white">
                        Sandra has requested 17.05.23 - 19.05.23
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HostingCard;
