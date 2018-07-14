export const fetchUserBookings = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${id}`
  });
};
