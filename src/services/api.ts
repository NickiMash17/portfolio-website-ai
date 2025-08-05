import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { 
  Project, 
  ContactForm, 
  ResumeOptions, 
  VisitorAnalytics, 
  AIRecommendation,
  ChatbotMessage,
  ApiResponse,
  PaginatedResponse 
} from '@/types';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('auth_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('auth_token');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // Projects API
  async getProjects(): Promise<Project[]> {
    const response: AxiosResponse<ApiResponse<Project[]>> = await this.api.get('/projects');
    return response.data.data || [];
  }

  async getProject(id: string): Promise<Project> {
    const response: AxiosResponse<ApiResponse<Project>> = await this.api.get(`/projects/${id}`);
    return response.data.data!;
  }

  async createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<Project> {
    const response: AxiosResponse<ApiResponse<Project>> = await this.api.post('/projects', project);
    return response.data.data!;
  }

  async updateProject(id: string, project: Partial<Project>): Promise<Project> {
    const response: AxiosResponse<ApiResponse<Project>> = await this.api.put(`/projects/${id}`, project);
    return response.data.data!;
  }

  async deleteProject(id: string): Promise<void> {
    await this.api.delete(`/projects/${id}`);
  }

  // Contact API
  async sendContactForm(form: ContactForm): Promise<void> {
    await this.api.post('/contact', form);
  }

  // Resume API
  async generateResume(options: ResumeOptions): Promise<Blob> {
    const response = await this.api.post('/resume/generate', options, {
      responseType: 'blob',
    });
    return response.data;
  }

  // Analytics API
  async trackPageView(page: string): Promise<void> {
    await this.api.post('/analytics/pageview', { page });
  }

  async trackInteraction(action: string, metadata?: any): Promise<void> {
    await this.api.post('/analytics/interaction', { action, metadata });
  }

  // AI API
  async getProjectRecommendations(userInteractions: string[]): Promise<AIRecommendation[]> {
    const response: AxiosResponse<ApiResponse<AIRecommendation[]>> = await this.api.post('/ai/recommendations', {
      interactions: userInteractions
    });
    return response.data.data || [];
  }

  async analyzeSentiment(text: string): Promise<{ sentiment: string; score: number }> {
    const response: AxiosResponse<ApiResponse<{ sentiment: string; score: number }>> = await this.api.post('/ai/sentiment', {
      text
    });
    return response.data.data!;
  }

  // Chatbot API
  async sendChatMessage(message: string): Promise<ChatbotMessage> {
    const response: AxiosResponse<ApiResponse<ChatbotMessage>> = await this.api.post('/chatbot/message', {
      message
    });
    return response.data.data!;
  }

  // File Upload API
  async uploadFile(file: File, type: 'image' | 'document'): Promise<{ url: string }> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('type', type);

    const response: AxiosResponse<ApiResponse<{ url: string }>> = await this.api.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.data!;
  }

  // Health Check
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    const response: AxiosResponse<ApiResponse<{ status: string; timestamp: string }>> = await this.api.get('/health');
    return response.data.data!;
  }
}

// Export singleton instance
export const apiService = new ApiService();

// Export for use in components
export default apiService; 