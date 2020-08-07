import { sendGet } from './axios';

export const login = () => sendGet('/api/v1/login', null);
