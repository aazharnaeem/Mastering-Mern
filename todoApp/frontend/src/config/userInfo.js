import jwt_decode from 'jwt-decode';

const token = localStorage.getItem('token');

export const { id } = jwt_decode(token);