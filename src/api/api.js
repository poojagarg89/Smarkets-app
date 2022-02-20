import axios from 'axios';

const baseURL = `https://cors-anywhere.herokuapp.com/https://api.smarkets.com`;

export const getEventIds = () => {
  const URL = `${baseURL}/v3/popular/event_ids/sport/football/`;
  return axios.get(URL);
};

export const getAllEventDetailsByIds = eventId => {
  const URL = `${baseURL}/v3/events/${eventId}`;
  return axios.get(URL);
};
