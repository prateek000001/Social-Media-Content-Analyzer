import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:5000';

export async function uploadFile(file) {
  const form = new FormData();
  form.append('file', file);

  const res = await axios.post(`${SERVER_URL}/extract`, form, {
    headers: { 'Content-Type': 'multipart/form-data' },
    timeout: 120000
  });

  return res.data;
}
