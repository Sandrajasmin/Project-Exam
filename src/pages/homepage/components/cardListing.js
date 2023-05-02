import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVenues } from '../../../store/modules/VenueSlice';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import ErrorComponent from "../../components/shared/ErrorComponent";

const AllProducts = () => {
    const dispatch = useDispatch();
    const { venues } = useSelector((state) => state.venues);

    useEffect(() => {
        dispatch(fetchVenues());
    }, [dispatch]);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 20,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 10,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }
        ]
    };

    return (
        <div className="mx-auto my-10 max-w-7xl">
            <div className="max-h-96 px-10">
                <Slider {...settings}>
                    {venues.map((venue) => (
                        <div className="" key={venue.id}>
                            <Link to={`venues/${venue.id}`}>
                                <div className="">
                                    <img
                                        src={venue.media[0]}
                                        className="h-full w-full rounded-md object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="mt-4 flex flex-col">
                                    <div className="relative font-body text-lg font-bold text-darkgrey">
                                        <h3>{venue.name}</h3>
                                    </div>
                                    <div className="flex gap-4">
                                        <p className="font-body font-light text-darkgrey">
                                            {venue.price}
                                        </p>
                                        <p className="font-body font-light text-darkgrey">
                                            Super Host
                                        </p>
                                    </div>

                                    <p className="font-body text-lg font-bold text-darkgrey">
                                        {venue.price} $ /night
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default AllProducts;
