import PropTypes from 'prop-types';
import { MapIcon, Clock10Icon } from 'lucide-react';

function RestaurantCard({ restaurant, onClick }) {
    return (
        <div
            onClick={onClick}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer overflow-hidden"
        >
            <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="font-semibold text-lg text-orange-600">{restaurant.name}</h2>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                    <MapIcon className="w-4 h-4 mr-1" />
                    <span>{restaurant.address}</span>
                </div>
                <div className="flex items-center mt-2">
                    <Clock10Icon className="w-4 h-4 mr-1" />
                    <span>{restaurant.time}</span>
                </div>
            </div>
        </div>
    );
}

RestaurantCard.propTypes = {
    restaurant: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func,
};
RestaurantCard.defaultProps = {
    onClick: () => { },
};

export default RestaurantCard;
