export const fetchUser = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${id}`
  });
};

export const updateStatus = (user) => {
  return $.ajax({
    method: 'patch',
    url: `api/users/${user.id}`,
    data: {user: user}
  });
};

export const fetchGuests = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${id}/guests`
  });
};

export const fetchHosts = (id) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${id}/hosts`
  });
};
