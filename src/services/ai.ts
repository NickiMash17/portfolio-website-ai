import * as tf from '@tensorflow/tfjs';
import { AIRecommendation } from '@/types';

class AIService {
  private model: tf.LayersModel | null = null;
  private isModelLoaded = false;

  constructor() {
    this.initializeTensorFlow();
  }

  private async initializeTensorFlow() {
    try {
      // Initialize TensorFlow.js backend
      await tf.ready();
      console.log('TensorFlow.js initialized successfully');
    } catch (error) {
      console.error('Failed to initialize TensorFlow.js:', error);
    }
  }

  // Load pre-trained model for project recommendations
  async loadRecommendationModel(): Promise<void> {
    try {
      // In a real application, you would load a pre-trained model
      // For now, we'll create a simple model for demonstration
      this.model = tf.sequential({
        layers: [
          tf.layers.dense({ inputShape: [10], units: 16, activation: 'relu' }),
          tf.layers.dense({ units: 8, activation: 'relu' }),
          tf.layers.dense({ units: 1, activation: 'sigmoid' })
        ]
      });

      this.model.compile({
        optimizer: 'adam',
        loss: 'binaryCrossentropy',
        metrics: ['accuracy']
      });

      this.isModelLoaded = true;
      console.log('AI recommendation model loaded successfully');
    } catch (error) {
      console.error('Failed to load AI model:', error);
    }
  }

  // Generate project recommendations based on user interactions
  async getProjectRecommendations(
    userInteractions: string[], 
    availableProjects: any[]
  ): Promise<AIRecommendation[]> {
    if (!this.isModelLoaded) {
      await this.loadRecommendationModel();
    }

    try {
      // Convert user interactions to feature vector
      const features = this.extractFeatures(userInteractions);
      
      // Create tensor from features
      const inputTensor = tf.tensor2d([features], [1, 10]);
      
      // Get predictions (in a real app, this would use the trained model)
      const predictions = await this.getMockPredictions(availableProjects.length);
      
      // Map predictions to projects
      const recommendations = availableProjects.map((project, index) => ({
        projectId: project.id,
        score: predictions[index] || 0.5,
        reason: this.generateRecommendationReason(userInteractions, project),
        category: project.category
      }));

      // Sort by score and return top recommendations
      return recommendations
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

    } catch (error) {
      console.error('Error generating recommendations:', error);
      return [];
    }
  }

  // Extract features from user interactions
  private extractFeatures(interactions: string[]): number[] {
    const features = new Array(10).fill(0);
    
    // Simple feature extraction based on interaction patterns
    interactions.forEach(interaction => {
      if (interaction.includes('ai') || interaction.includes('ml')) {
        features[0] += 1; // AI/ML interest
      }
      if (interaction.includes('react') || interaction.includes('frontend')) {
        features[1] += 1; // Frontend interest
      }
      if (interaction.includes('c#') || interaction.includes('dotnet')) {
        features[2] += 1; // Backend interest
      }
      if (interaction.includes('azure') || interaction.includes('cloud')) {
        features[3] += 1; // Cloud interest
      }
      if (interaction.includes('database') || interaction.includes('sql')) {
        features[4] += 1; // Database interest
      }
      if (interaction.includes('devops') || interaction.includes('ci/cd')) {
        features[5] += 1; // DevOps interest
      }
      if (interaction.includes('mobile') || interaction.includes('app')) {
        features[6] += 1; // Mobile interest
      }
      if (interaction.includes('data') || interaction.includes('analytics')) {
        features[7] += 1; // Data interest
      }
      if (interaction.includes('security') || interaction.includes('auth')) {
        features[8] += 1; // Security interest
      }
      if (interaction.includes('api') || interaction.includes('rest')) {
        features[9] += 1; // API interest
      }
    });

    // Normalize features
    const maxValue = Math.max(...features);
    if (maxValue > 0) {
      return features.map(f => f / maxValue);
    }
    
    return features;
  }

  // Mock predictions for demonstration
  private async getMockPredictions(count: number): Promise<number[]> {
    // In a real application, this would use the trained model
    return Array.from({ length: count }, () => Math.random());
  }

  // Generate recommendation reason
  private generateRecommendationReason(interactions: string[], project: any): string {
    const reasons = [
      'Based on your interest in similar technologies',
      'Matches your learning goals and skill level',
      'Aligned with your recent project interactions',
      'Recommended based on your technical preferences',
      'Fits your current learning trajectory'
    ];
    
    return reasons[Math.floor(Math.random() * reasons.length)];
  }

  // Analyze text sentiment using TensorFlow.js
  async analyzeSentiment(text: string): Promise<{ sentiment: string; score: number }> {
    try {
      // Simple sentiment analysis using word frequency
      const positiveWords = ['good', 'great', 'excellent', 'amazing', 'wonderful', 'love', 'like', 'awesome'];
      const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'dislike', 'poor', 'worst'];
      
      const words = text.toLowerCase().split(/\s+/);
      let positiveCount = 0;
      let negativeCount = 0;
      
      words.forEach(word => {
        if (positiveWords.includes(word)) positiveCount++;
        if (negativeWords.includes(word)) negativeCount++;
      });
      
      const total = positiveCount + negativeCount;
      if (total === 0) {
        return { sentiment: 'neutral', score: 0.5 };
      }
      
      const score = positiveCount / total;
      const sentiment = score > 0.6 ? 'positive' : score < 0.4 ? 'negative' : 'neutral';
      
      return { sentiment, score };
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
      return { sentiment: 'neutral', score: 0.5 };
    }
  }

  // Predict user behavior based on interaction patterns
  async predictUserBehavior(interactions: string[]): Promise<{
    nextLikelyAction: string;
    confidence: number;
    recommendations: string[];
  }> {
    try {
      // Analyze interaction patterns
      const patterns = this.analyzeInteractionPatterns(interactions);
      
      // Predict next likely action
      const actions = [
        'view_project_details',
        'download_resume',
        'send_contact_form',
        'view_github_profile',
        'explore_skills_section'
      ];
      
      const nextAction = actions[Math.floor(Math.random() * actions.length)];
      const confidence = Math.random() * 0.4 + 0.6; // 60-100% confidence
      
      const recommendations = [
        'Consider exploring our AI projects',
        'Check out our cloud architecture solutions',
        'Review our full-stack development examples'
      ];
      
      return {
        nextLikelyAction: nextAction,
        confidence,
        recommendations
      };
    } catch (error) {
      console.error('Error predicting user behavior:', error);
      return {
        nextLikelyAction: 'view_project_details',
        confidence: 0.5,
        recommendations: []
      };
    }
  }

  // Analyze interaction patterns
  private analyzeInteractionPatterns(interactions: string[]): any {
    const patterns = {
      aiInterest: 0,
      frontendInterest: 0,
      backendInterest: 0,
      cloudInterest: 0,
      totalInteractions: interactions.length
    };
    
    interactions.forEach(interaction => {
      if (interaction.includes('ai') || interaction.includes('ml')) patterns.aiInterest++;
      if (interaction.includes('react') || interaction.includes('frontend')) patterns.frontendInterest++;
      if (interaction.includes('c#') || interaction.includes('dotnet')) patterns.backendInterest++;
      if (interaction.includes('azure') || interaction.includes('cloud')) patterns.cloudInterest++;
    });
    
    return patterns;
  }

  // Clean up TensorFlow.js resources
  dispose(): void {
    if (this.model) {
      this.model.dispose();
      this.model = null;
    }
    this.isModelLoaded = false;
  }
}

// Export singleton instance
export const aiService = new AIService();

// Export for use in components
export default aiService; 