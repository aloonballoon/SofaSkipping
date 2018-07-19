import * as BookingApiUtil from '../util/bookings_util';


export const RECEIVE_TRIP = "RECEIVE_TRIP";

export const receiveTrip = (trip) => {
  return {
          type: RECEIVE_TRIP,
          trip: trip
        };
};

export const createTrip = (trip) => {
  return dispatch => {
    return BookingApiUtil.createTrip(trip).then(trip => {
      return dispatch(receiveTrip(trip));
    });
  };
};

export const cancelHosting = (id) => {
  return dispatch => {
    return BookingApiUtil.cancelHosting(id).then((hosting) => {
      return dispatch(receiveCanceledHosting(hosting));
    });
  };
};

export const confirmHosting = (id) => {
  return dispatch => {
    return BookingApiUtil.confirmHosting(id).then((hosting) => {
      return dispatch(receiveConfirmedHosting(hosting));
    });
  };
};

export const receiveConfirmedHosting = (hosting) => {
  return {
    type: RECEIVE_CONFIRMED_HOSTING,
    hosting: hosting,
  };
};

export const receiveCanceledHosting = (hosting) => {
  return {
    type: RECEIVE_CANCELED_HOSTING,
    id: hosting.id
  };
};

export const RECEIVE_CONFIRMED_HOSTING = "RECEIVE_CONFIRMED_HOSTING";

export const RECEIVE_CANCELED_HOSTING = 'RECEIVE_CANCELED_HOSTING';
