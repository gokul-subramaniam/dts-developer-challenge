import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Adjust as needed

export const fetchTasks = () => axios.get(`${API_URL}/tasks`);
export const createTask = (task) => axios.post(`${API_URL}/tasks`, task);
export const updateStatus = (id, status) => axios.put(`${API_URL}/tasks/${id}/status`, { status });
export const deleteTask = (id) => axios.delete(`${API_URL}/tasks/${id}`);
