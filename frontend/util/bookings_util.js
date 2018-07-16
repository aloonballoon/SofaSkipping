export const fetchUserHostings = (hostId) => {
  return $.ajax({
    method: 'get',
    url: `api/bookings/${hostId}`
  });
};
