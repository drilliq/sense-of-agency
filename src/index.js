import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import PinkNoise from './screens/test/PinkNoise';
import WhiteNoise from './screens/test/WhiteNoise';
import Keystroke from './screens/test/Keystroke';
import TrialRunShort from './screens/test/TrialRunShort';
import Tests from './screens/test/Tests';

import ExperimentChooser from './screens/experiment/ExperimentChooser';
import ExperimentAW from './screens/experiment/ExperimentAW';
import ExperimentWA from './screens/experiment/ExperimentWA';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/agency">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test/pink-noise" element={<PinkNoise />} />
        <Route path="/test/no-noise" element={<WhiteNoise />} />
        <Route path="/test/keystrokes" element={<Keystroke />} />
        <Route path="/test/trial-run" element={<TrialRunShort />} />
        <Route path="/test/" element={<Tests />} />

        <Route path="/experiment/" element={<ExperimentChooser />} />
        <Route path="/experiment/1" element={<ExperimentAW />} />
        <Route path="/experiment/2" element={<ExperimentWA />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
