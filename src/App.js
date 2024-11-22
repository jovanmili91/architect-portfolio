import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home"; // Create a Home component
import Projects from "./pages/Projects"; // Make sure this exists
import Contact from "./pages/Contact"; // Make sure this exists

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header className="bg-gray-800 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Architect Portfolio</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors duration-300"
                    aria-label="Home Page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="hover:text-blue-400 transition-colors duration-300"
                    aria-label="Projects Page"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-blue-400 transition-colors duration-300"
                    aria-label="Contact Page"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Why Choose Us Section */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Us?
            </h2>
            <div className="animate-fade-in">
              Welcome to Architect Portfolio
            </div>
            <p className="text-gray-600 leading-relaxed">
              We bring years of experience, creative designs, and a commitment
              to excellence.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-6">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© 2024 Architect Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
