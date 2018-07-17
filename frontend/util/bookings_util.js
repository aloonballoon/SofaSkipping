export const fetchUserHostings = (hostId) => {
  return $.ajax({
    method: 'get',
    url: `api/bookings/${hostId}`
  });
};

export const fetchUserTrips = (tripId) => {
  return $.ajax({
    method: 'get',
    url: `api/bookings/${tripId}/trips`
  });
};
