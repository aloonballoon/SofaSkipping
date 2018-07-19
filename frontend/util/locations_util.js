export const fetchLocation = (location) => {
  return $.ajax({
    method: 'get',
    url: 'api/locations',
    data: {location: {city: location, country: location}}
  });
};
