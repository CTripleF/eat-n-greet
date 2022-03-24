export const getAddedMeetupIds = () => {
    const addMeetupsIds = localStorage.getItem('add_meetup')
        ? JSON.parse(localStorage.getItem('add_meetup'))
        : [];

    return savedMeetupsIds;
};

export const saveRestaurantIds = (restaurantIdArr) => {
    if (restaurantIdArr.length) {
        localStorage.setItem('saved_restaurants', JSON.stringify(restaurantIdArr));
    } else {
        localStorage.removeItem('saved_restaurants');
    }
};

export const removeRestaurantId = (restaurantId) => {
    const savedRestaurantIds = localStorage.getItem('saved_restaurants')
        ? JSON.parse(localStorage.getItem('saved_restaurants'))
        : null;

    if (!savedRestaurantIds) {
        return false;
    }

    const updatedSavedRestaurantIds = savedRestaurantIds?.filter((savedRestaurantId) => savedRestaurantId !== restaurantId);
    localStorage.setItem('saved_restaurants', JSON.stringify(updatedSavedRestaurantIds));

    return true;
};

