import React, { useEffect } from 'react';
import { getUserDetails } from '../../../utils/auth';
import { fetchProfile } from '../../../store/modules/profileSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GetAvatar from '../../../components/getAvatar';

function ProfileCard() {
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('email');

    const dispatch = useDispatch();
    const userDetails = getUserDetails();
    const singleProfile = useSelector((state) => state.profile.singleProfile);
    console.log('single', singleProfile);

    useEffect(() => {
        if (userDetails.username) {
            dispatch(fetchProfile(userDetails.username));
        }
    }, [dispatch, userDetails.username]);

    return (
        <div className="relative bottom-6 flex flex-col items-center justify-center gap-10 rounded-md ">
            <div className=" flex max-w-[120px] flex-col items-center justify-center gap-5">
                <GetAvatar size="24" fontsize="5xl" shadowDepth="lg" />
                <div className="text-center font-heading font-bold text-black ">
                    {userName}
                    <div className="font-light">{userEmail}</div>
                </div>
            </div>
            <div id="bookingCount" className="flex gap-5">
                <Link id="Bookings" to="/bookings">
                    <div className="py-2 text-center font-body font-light text-black">
                        <div className="flex flex-col items-center">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABW0lEQVR4nK3UP0hVYRjH8c81RLIlIm0VkZAC8UKKm+ji5CDU7iRBRFNjIASCm2MRKCIILhG6BA2C4GCb/Rkda1KoIMiwq7zwKC+He6R7jz944ZznOe/3ff69h/Z0HXdxzRVoAN9wio/orgpcDNj5elgV+KQAHK0K7MQCtjFXFfYMe1jFnaqwSTSyVBO0bd3AAU4y4AfU2gUu4R/WM+AbzLQDG4vI0ri8yoCvcYSJVoGfsY+uSPMcOI63OMbsZYCRaEDSvQAOxvtGwBpR1xrm8akMNow/sWkNuxgK3008buWGdMVJ+S14nvkf4R22wrfzP508zVba0JH518I+hb/xXC+DPSgM7S/0N+n0XuHwlTLgNDajXvXCKKRSfMVv3A/bLRxGvXubAVO3+vATP3A7872MaIqj8TTsL8qiTJAEKwK/Y7nJ9+mv8wXvy4BJPQVYUkopb06uNEppXegMyLxeSU55FKUAAAAASUVORK5CYII=" />
                            <span className="">Bookings</span>
                        </div>
                        <div className="">
                            {singleProfile &&
                            singleProfile._count &&
                            singleProfile._count.bookings !== undefined ? (
                                <div className="flex justify-center gap-2">
                                    {singleProfile._count.bookings}
                                </div>
                            ) : (
                                <p></p>
                            )}
                        </div>
                    </div>
                </Link>
                <Link id="Venues" to="/venueManager">
                    <div className="py-2 text-center  font-body font-light text-black">
                        <div className="flex flex-col items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="20"
                                height="20"
                                viewBox="0 0 50 50"
                            >
                                <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
                            </svg>
                            <span className="">Venues</span>
                        </div>
                        <div className="">
                            {singleProfile &&
                            singleProfile._count &&
                            singleProfile._count.venues !== undefined ? (
                                <div className="flex justify-center gap-2">
                                    {singleProfile._count.venues}
                                </div>
                            ) : (
                                <p></p>
                            )}
                        </div>
                    </div>
                </Link>
            </div>
            <div id="links" className="flex flex-col gap-5 pb-10">
                <Link className="mx-5 border-b border-black hover:font-medium" to="/createVenue">
                    Create Venue
                </Link>
                <Link className="mx-5 border-b border-black hover:font-medium" to="/venueManager">
                    Venues
                </Link>
                <Link className="mx-5 border-b border-black hover:font-medium" to="/bookingManager">
                    Bookings
                </Link>
            </div>
        </div>
    );
}

export default ProfileCard;
