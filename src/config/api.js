// API Configuration
// This file centralizes API endpoint configuration

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const API_ENDPOINTS = {
    // Projects
    projects: `${API_BASE_URL}/projects`,
    projectById: (id) => `${API_BASE_URL}/projects/${id}`,

    // Insights
    insights: `${API_BASE_URL}/insights`,
    insightById: (id) => `${API_BASE_URL}/insights/${id}`,

    // Auth
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/auth/register`,

    // Upload
    upload: `${API_BASE_URL}/upload`,

    // Health check
    health: `${API_BASE_URL}/health`
};

export default API_BASE_URL;
