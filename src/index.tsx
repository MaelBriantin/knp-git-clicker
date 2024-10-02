import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Game } from './components';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="container">
      <Game />
    </div>
  </StrictMode>,
)