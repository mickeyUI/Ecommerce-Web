const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export async function apiRequest(endpoint, options = {}) {
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);



  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || errorData.detail || `Request failed with status ${response.status}`);
  }

  return response.json();
}

export const api = {
  baseUrl: BASE_URL,

  getNotes: () => 
    apiRequest('/getProducts', {
      method: 'GET'
    }),

}
