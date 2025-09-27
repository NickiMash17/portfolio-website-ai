import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

const codeSnippet = `
import * as tf from '@tensorflow/tfjs';

// Load the model
async function loadModel() {
  const model = await tf.loadLayersModel('model/model.json');
  return model;
}

// Make a prediction
function predict(model, input) {
  const prediction = model.predict(input);
  return prediction;
}
`;

const LiveCoding: React.FC = () => {
  const [code, setCode] = useState(codeSnippet);

  return (
    <div className="glass-ai rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">Live Coding Demo</h3>
      <p className="text-sm text-secondary mb-4">This is a read-only editor showcasing a snippet of code.</p>
      <Editor
        value={code}
        onValueChange={setCode}
        highlight={code => highlight(code, languages.js, 'js')}
        padding={10}
        style={{
          fontFamily: '"Fira Code", "Fira Mono", monospace',
          fontSize: 14,
          backgroundColor: '#2d2d2d',
          borderRadius: '8px',
        }}
        readOnly
      />
    </div>
  );
};

export default LiveCoding;
