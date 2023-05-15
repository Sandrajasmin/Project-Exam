import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleVenue } from '../../store/modules/VenueSlice';
import Slider from 'react-slick';
// import DatePicker from '../../components/calendar/calendar';

function DetailPage() {
    const dispatch = useDispatch();
    const { singleVenue, isError } = useSelector((state) => state.venues);
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchSingleVenue(id));
        }
    }, [dispatch, id]);

    if (!singleVenue) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div>Loading...</div>
            </div>
        );
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true
    };

    return (
        <>
            {singleVenue && !isError && (
                <div className="mx-auto max-w-7xl py-10">
                    <div className="">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
                                {singleVenue.name}
                            </h1>
                            <div id="location" className="flex gap-1">
                                <p>{singleVenue.location.address},</p>
                                <p>{singleVenue.location.country}</p>
                            </div>
                            <div id="rating">
                                <p className="font-body font-light">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`text-blue ${
                                                i < Math.round(singleVenue.rating)
                                                    ? 'font-bold'
                                                    : ''
                                            }`}
                                        >
                                            {i < Math.round(singleVenue.rating) ? '★' : '☆'}
                                        </span>
                                    ))}
                                </p>
                            </div>
                            <div className="mx-2 my-5">
                                <Slider className="mb-10" {...settings}>
                                    {singleVenue.media.map((media, index) => (
                                        <div key={media} className="">
                                            <img
                                                key={index}
                                                src={media}
                                                alt={singleVenue.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <div id="about-section" className="flex flex-col items-center gap-2">
                            <h2 className="font-heading text-xl font-medium">About the property</h2>
                            <div className="flex gap-2 font-body text-sm font-light text-darkgrey md:text-base">
                                <p>{singleVenue.maxGuests} Guests </p>
                                <p className="">&#x2022;</p>
                                {singleVenue.maxGuests > 16 ? (
                                    <p>8 Bedrooms</p>
                                ) : singleVenue.maxGuests > 12 ? (
                                    <p>6 Bedrooms</p>
                                ) : singleVenue.maxGuests > 4 ? (
                                    <p>4 Bedrooms</p>
                                ) : (
                                    <p>1 Bedroom</p>
                                )}
                                <p className="">&#x2022;</p>
                                {singleVenue.maxGuests > 24 ? (
                                    <p>4 Bathrooms</p>
                                ) : singleVenue.maxGuests > 12 ? (
                                    <p>3 Bedrooms</p>
                                ) : singleVenue.maxGuests > 4 ? (
                                    <p>2 Bedrooms</p>
                                ) : (
                                    <p>1 Bedroom</p>
                                )}
                            </div>
                            <div id="amenities" className="flex max-w-[300px] gap-2">
                                {singleVenue.meta.wifi ? (
                                    <div className="flex items-center gap-1 font-body text-base font-light text-darkgrey">
                                        <div>
                                            <img
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIUlEQVR4nM1Su0pDQRC9nXZKIFooKH6AlVoJaSzW3D1ns7kzVztr/Qd7P8AQtbdT/IGUgkXAL9BCJV+QKkVQJt4ESXylEQeWw5k5Z5nZ2ST5F6FpuiTeHwl5o8C9ko+GBT+0+qTJubIApwr0lHz98gC9gc658ruxVttS4GUoEKAv5J0ATSFPCjTe/6B5zr3fTIS8GpmAZoxx2Tk3Y8Wc3MnIDeOWV+BseIn5koNKZVbJ68z73X1gUcmGAt2xdo03YowLeQhV05tvNHcGrAvQ+W5mATqmm3w01TkF2kVb5+r9dj1N1wwFuBjkgbbpPl+VasnmDCHMK3CswKWhccuraunnfZOtsZZb030W4KEwPtWr1ZVfmy32QlgV8tZwKuOfxBt/lKteGnXXzAAAAABJRU5ErkJggg=="
                                                alt="wifi"
                                            />
                                        </div>
                                        <p>Wifi</p>
                                    </div>
                                ) : null}
                                {singleVenue.meta.parking ? (
                                    <div className="flex items-center gap-1 font-body text-base font-light text-darkgrey">
                                        <div>
                                            <img
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAs0lEQVR4nKWTPQrCUBCEU3kGsba2EVF7CwlvhkDehNzByjt4BBtB8A4eIAFLea2XsVEe4g+CsM8sTLHFxw67s1nWteTcXEArIBjUVsDsDUeQvJkFtJ9wSITDbxhYqijGUZVzE5FrD1xNcE0ORK5E7jywVZ73RR7MsAeOz74iFwI29snAMNougZGknifPybZF7gVczAurv2ynbxs4/Qcz7c5JCfNA84JjVq3ZjmBJTju80qPukgEoFI2IEpUAAAAASUVORK5CYII="
                                                alt="icon parking"
                                            />
                                        </div>
                                        <p>Parking</p>
                                    </div>
                                ) : null}
                                {singleVenue.meta.breakfast ? (
                                    <div className="flex items-center gap-1 font-body text-base font-light text-darkgrey">
                                        <div>
                                            <img
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsklEQVR4nGNgoBYI9fVdEuzj4xbi67sbRkf4+oqH+vmVBvv72+LVHOLrez/U1zch1M/vP4wO9/dXCPXzmx/q6/s4xtWVmzzNIDEfn1j8mmEKoTSKZl/f1fg0H4RqhGBf32+hoaGcSJrP49Qc5u2tE+rndwCq8EaYj08wOCARrrmLN9Cgiv8H+/s7IPHBmkN8fe8PiOZjob6+keRqnk9Q48BqBqXpMG9vfSTNpSBMlGZiAQBZHINWQGLVygAAAABJRU5ErkJggg=="
                                                alt="icon cutlery"
                                            />
                                        </div>
                                        <p>Breakfast</p>
                                    </div>
                                ) : null}
                                {singleVenue.meta.pets ? (
                                    <div className="flex items-center gap-1 font-body text-base font-light text-darkgrey">
                                        <div>
                                            <img
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcUlEQVR4nI2Rvy8EURDHV0gkgkooJKglIqLmSut25vvu7Js9P6ImrqFQKCRESCgUOpWOCIl/QKERCpFQiEIl/gC5U7nkTt5ml7fn7njJy+bNzme+35lxnKqTU2pAAC0i7XHMV2pMmF2n0RFgUJgLAlQEuIxiu9G7opnXGsEHcWJ4M5lRAUoW/FofZj6x4YAokyjGXGyknLdUPrPZbLf5fseAm2qmSSu1oJmX51y3U5gfo+SjyM2ZpRz4wIhm3helhozaimVtB0BHAIynUqkWAxt1Yd4zYOB5wxr4iArdOpr5xar8/Mc2rqzcd2OraAXuTNIMUZcGLjTzkxDNh6Dn9QpQtnKvHQ2cW4GNqO97q5WSaUOI+iy4HCg1EascC3A4zdyTsPZz36bS6X5NtBT+V2o20U84GOChBhi7KgjzFhG1/RqGBrbrgskim7UmufovGMj/gl3XbRXmdQ2cmn37zMrs1SeaFGDRDFOUyolIcwx9AbKsBwz0AKiWAAAAAElFTkSuQmCC"
                                                alt="icon pets"
                                            />
                                        </div>
                                        <p>Pets</p>
                                    </div>
                                ) : null}
                            </div>
                            <div className="my-5 flex items-center gap-2">
                                <div className="h-10 w-10">
                                    <img
                                        className="h-full w-full rounded-full object-cover"
                                        src={singleVenue.owner.avatar}
                                    />
                                </div>
                                <p className="font-body font-bold text-blue">
                                    {singleVenue.owner.name}
                                </p>
                            </div>
                        </div>
                        {/* description */}
                        <div id="description" className="py-5 font-body text-base">
                            {singleVenue.description.length > 10 ? (
                                singleVenue.description.split('.').map((sentence, index) => (
                                    <React.Fragment key={index}>
                                        <p>{sentence.trim()}.</p>
                                        <br />
                                    </React.Fragment>
                                ))
                            ) : (
                                <div className="flex flex-col gap-5">
                                    <p>
                                        The property is idyllically located in Mellby and boasts
                                        impeccable sun and view conditions. The property consists of
                                        a holiday home, outbuilding and annexe.
                                    </p>
                                    <p>
                                        The holiday home has a living room/kitchen with fantastic
                                        views, four bedrooms (incl. annex), bathroom and toilet
                                        room. The cabin was significantly upgraded in 2016.{' '}
                                    </p>
                                    <p>
                                        The annexe is about 15 square meters. If you have, you and
                                        the family can enjoy sunny days fishing from shore or boat.{' '}
                                    </p>
                                    <p>
                                        {' '}
                                        The boat is located in the marina approx. 500 meters from
                                        the cabin
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="">{/* <DatePicker/> */}</div>
                    </div>
                </div>
            )}
            {isError && <h1>Sorry, an error accured </h1>}
        </>
    );
}

export default DetailPage;
