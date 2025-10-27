import React, { useState } from 'react';

const Pill = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`pill ${active ? 'active' : ''}`}
  >
    {children}
  </button>
);

const TabbedWidget = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="card">
      <div className="card-header">
        <div className="header-left">
          <div className="header-icon"><span>▦</span></div>
          <div className="tabs">
            <Pill active={activeTab==='about'} onClick={() => setActiveTab('about')}>About Me</Pill>
            <Pill active={activeTab==='experiences'} onClick={() => setActiveTab('experiences')}>Experiences</Pill>
            <Pill active={activeTab==='recommended'} onClick={() => setActiveTab('recommended')}>Recommended</Pill>
          </div>
        </div>
      </div>

      <div className="card-body">
        {activeTab === 'about' && (
          <div className="copy">
            <p className="muted-strong">
              Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 5 years now.
            </p>
            <p>
              I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters– Anna and Elena. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a...
            </p>
          </div>
        )}
        {activeTab === 'experiences' && (
          <div className="copy">
            <p>• **************************</p>
            <p>• **********************</p>
            <p>• *********************</p>
          </div>
        )}
        {activeTab === 'recommended' && (
          <div className="copy">
            <p>• *********************</p>
            <p>• ***************</p>
            <p>• *****************</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedWidget;