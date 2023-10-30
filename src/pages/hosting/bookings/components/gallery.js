import React, { Component } from 'react';
import Slider from 'react-slick';
import House2 from '../../../../assets/img/aspenhouse.webp';
import House3 from '../../../../assets/img/modernpoolhouse.webp';
import House4 from '../../../../assets/img/terassehouse.webp';
import House5 from '../../../../assets/img/townhouse.webp';
import House6 from '../../../../assets/img/poolhouse.webp';

export default class AutoPlay extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 3000,
            cssEase: 'linear'
        };
        return (
            <div className="">
                <Slider {...settings}>
                    <div className="relative">
                        <div className="relative h-[600px]">
                            <img className="h-full w-full object-cover shadow-lg " src={House6} />
                            <div className="absolute left-0 top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <p className="absolute bottom-44 left-10 font-body text-4xl font-bold text-white">
                            Discover the Beach View
                        </p>
                    </div>
                    <div className="relative">
                        <div className="relative h-[600px]">
                            <img className="h-full w-full object-cover shadow-lg " src={House2} />
                            <div className="absolute left-0 top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <p className="absolute bottom-44 left-10 font-body text-4xl font-bold text-white">
                            Snuggle by the Fireplace
                        </p>
                    </div>
                    <div className="relative">
                        <div className="relative h-[600px]">
                            <img className="h-full w-full object-cover shadow-lg " src={House3} />
                            <div className="absolute left-0 top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <p className="absolute bottom-20 left-10 font-body text-4xl font-bold text-white">
                            Poolhouse Retreat for Families
                        </p>
                    </div>
                    <div className="relative">
                        <div className="relative h-[600px]">
                            <img className="h-full w-full object-cover shadow-lg " src={House4} />
                            <div className="absolute left-0 top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <p className="absolute bottom-32 left-10 font-body text-4xl font-bold text-white">
                            Family Memories Made on the Terrace
                        </p>
                    </div>
                    <div className="relative">
                        <div className="relative h-[600px]">
                            <img className="h-full w-full object-cover shadow-lg " src={House5} />
                            <div className="absolute left-0 top-0 h-full w-full bg-black opacity-30"></div>
                        </div>
                        <p className="absolute bottom-32 left-10 font-body text-4xl font-bold text-white">
                            Explore Our Townhouses
                        </p>
                    </div>
                </Slider>
            </div>
        );
    }
}
