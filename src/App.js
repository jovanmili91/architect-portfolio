import React from 'react';
import './App.css';
import Projects from './pages/Projects';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Architect Portfolio</h1>
        <p>Explore our latest architectural projects and designs.</p>
      </header>
      <main>
        <Projects />
        <section>
          <h2>Our Projects</h2>
          {/* Ovdje možeš dodati galeriju projekata ili linkove do stranica */}
        </section>
      </main>
    </div>
  );
}

export default App;
