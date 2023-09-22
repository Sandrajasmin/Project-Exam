import React, { Component } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import Slider from 'react-slick';
import { fetchSingleVenue } from '../../../store/modules/VenueSlice';

class CenterMode extends Component {
    componentDidMount() {
        const { dispatch, id } = this.props;
        if (id) {
            dispatch(fetchSingleVenue(id));
        }
    }

    render() {
        const { singleVenue, isError } = this.props;
        const settings = {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 2,
            speed: 500
        };

        return (
            <div>
                <h2>Center Mode</h2>
                {singleVenue && !isError && (
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
                )}

                {isError && <h1>Sorry, an error occurred</h1>}
            </div>
        );
    }
}

// Prop type validation
CenterMode.propTypes = {
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    singleVenue: PropTypes.object.isRequired,
    isError: PropTypes.bool.isRequired
};

export default CenterMode;
