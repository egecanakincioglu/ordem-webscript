import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Backend API URL'si
});

export const getVisitorCount = () => api.get('/visitor-count');
export const getCompletedProjects = () => api.get('/completed-projects');
export const getUpcomingProjects = () => api.get('/upcoming-projects');
export const getTeam = () => api.get('/team');
export const getContactInfo = () => api.get('/contact-info');
