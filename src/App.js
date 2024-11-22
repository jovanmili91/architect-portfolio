import React from "react";
import "./App.css";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <header className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Architect Portfolio</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Projects />
        <div class="animate-fade-in">This element fades in.</div>

        <section>
          <h2>Our Projects</h2>
          {/* Ovdje možeš dodati galeriju projekata ili linkove do stranica */}
        </section>
      </main>

      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <div className="animate-fade-in">Welcome to Architect Portfolio</div>

          <p className="text-gray-600 leading-relaxed">
            We bring years of experience, creative designs, and a commitment to
            excellence.
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Architect Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
