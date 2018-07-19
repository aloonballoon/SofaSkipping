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

export const createTrip = (info) => {
  return $.ajax({
    method: 'post',
    url: `api/bookings/`,
    data: {booking: {start_date: info.startDate, end_date: info.endDate, host_id: info.userId}}
  });
};

export const confirmHosting = (id) => {
  return $.ajax({
    method: 'patch',
    url: `api/bookings/${id}`
  });
};

export const cancelHosting = (id) => {
  return $.ajax({
    method: 'delete',
    url: `api/bookings/${id}`
  });
};
