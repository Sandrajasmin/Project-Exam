import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVenues } from '../../../store/modules/VenueSlice';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DefaultHouse from '../../../assets/img/default_house.jpeg';
import ErrorComponent from '../../../components/errorComponent';

const AllProducts = () => {
    const dispatch = useDispatch();
    const { venues } = useSelector((state) => state.venues);
    const { isError } = useSelector((state) => state.error);
    const { errorMessage } = useSelector((state) => state.error);

    const truncateText = (text, maxWords) => {
        const words = text.split(' ');

        if (words.length <= maxWords) {
            return text;
        }

        const truncatedWords = words.slice(0, maxWords);
        return truncatedWords.join(' ') + '...';
    };

    useEffect(() => {
        dispatch(fetchVenues());
    }, [dispatch]);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    rows: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="max-w-8xl mx-auto my-10">
            <div className="px-5">
                {isError ? (
                    <ErrorComponent message={errorMessage} />
                ) : (
                    <Slider {...settings}>
                        {venues.slice(0, 20).map((venue) => {
                            const truncatedName = truncateText(venue.name, 3);
                            return (
                                <div
                                    className="h-72 px-2 transition duration-500 hover:scale-105 hover:opacity-90"
                                    key={venue.id}
                                >
                                    <Link to={`/venue/${venue.id}`}>
                                        <div className="h-44">
                                            <img
                                                src={venue.media[0] ? venue.media[0] : DefaultHouse}
                                                className="h-full w-full object-cover"
                                                loading="lazy"
                                                alt=""
                                            />
                                        </div>
                                        <div className="mt-4 flex flex-col">
                                            <div className="relative font-body text-lg font-bold text-darkgrey">
                                                <h3>{truncatedName}</h3>
                                            </div>
                                            <p className="text-md font-body text-darkgrey">
                                                {venue.price} $ /night
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </Slider>
                )}
            </div>
        </div>
    );
};

export default AllProducts;
