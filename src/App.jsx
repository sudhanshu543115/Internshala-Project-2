import React from 'react';
import './styles.css';
import TabbedWidget from './components/TabbedWidget';
import GalleryWidget from './components/GalleryWidget';

function App() {
  return (
    <div className="app">
      <div className="layout">
        <div className="left-empty" />
        <div className="right-stack">
          <TabbedWidget />
          <GalleryWidget />
        </div>
      </div>
    </div>
  );
};

export default App;
