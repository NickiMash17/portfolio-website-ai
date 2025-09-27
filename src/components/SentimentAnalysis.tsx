import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const SentimentAnalysis: React.FC = () => {
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState<string | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        // Load a pre-trained sentiment analysis model
        // In a real application, you would host this model yourself
        const loadedModel = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json');
        setModel(loadedModel);
      } catch (error) {
        console.error('Failed to load model:', error);
      }
    };
    loadModel();
  }, []);

  const handleAnalyze = async () => {
    if (model && text) {
      // Preprocess the text (this is a simplified example)
      const sequence = text.split(' ').map(word => {
        // In a real application, you would use a proper tokenizer
        const charCode = word.charCodeAt(0);
        return charCode > 96 && charCode < 123 ? charCode - 96 : 0;
      }).slice(0, 100);

      // Pad the sequence to a fixed length
      const paddedSequence = sequence.concat(Array(100 - sequence.length).fill(0));
      const input = tf.tensor2d([paddedSequence], [1, 100]);

      // Make a prediction
      const result = model.predict(input) as tf.Tensor;
      const score = result.dataSync()[0];
      result.dispose();

      setPrediction(score > 0.5 ? 'Positive' : 'Negative');
    }
  };

  return (
    <div className="glass-ai rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">Interactive AI Demo: Sentiment Analysis</h3>
      <p className="text-sm text-secondary mb-4">Enter a sentence below and the AI will analyze its sentiment.</p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a sentence..."
          className="w-full sm:flex-1 bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
        />
        <button onClick={handleAnalyze} className="w-full sm:w-auto bg-brand-gradient text-white rounded-lg px-4 py-2 font-bold">Analyze</button>
      </div>
      {prediction && (
        <div className="mt-4 text-center">
          <p className="text-lg">Sentiment: <span className={`font-bold ${prediction === 'Positive' ? 'text-green-400' : 'text-red-400'}`}>{prediction}</span></p>
        </div>
      )}
    </div>
  );
};

export default SentimentAnalysis;
