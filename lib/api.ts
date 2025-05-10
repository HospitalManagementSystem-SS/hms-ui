import axios from 'axios';

export const patientAPI = axios.create({
  baseURL: '/api/patients',
});

export const appointmentAPI = axios.create({
  baseURL: '/api/appointments',
});

export const billingAPI = axios.create({
  baseURL: '/api/billing',
});
