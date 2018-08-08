export const fetchLocation = (location) => {
  return $.ajax({
    method: 'get',
    url: 'api/locations',
    data: {location: {city: location, country: location}}
  });
};

export const createLocation = (location) => {
  return $.ajax({
    method: 'post',
    url: 'api/locations',
    data: {location: {city: location.city, country: location.country, lat: location.lat, lng: location.lng}}
  });
};
