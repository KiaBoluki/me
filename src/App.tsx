import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import './App.css';

// Home Page Component
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Kia’s Portfolio</h1>
        <p className="text-lg text-gray-600 mt-2">Web Developer & Designer</p>
      </header>

      <main className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-700">
            I’m Kia, a passionate web developer and designer based in Oman. I specialize in creating modern websites, like the Cryo Center’s pricing page, using the latest tools like React, Vite, and Tailwind CSS. Let’s build something amazing together!
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Services</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Custom Website Development</li>
            <li>Web Design & Branding</li>
            <li>Automation Solutions (Bookings, WhatsApp, etc.)</li>
            <li>Portfolio & Pricing Pages</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Me</h2>
          <p className="text-gray-700">
            Email: kia@example.com | Phone: +968 1234 5678 | WhatsApp: +968 9876 5432
          </p>
        </section>
      </main>

      <footer className="mt-8 text-gray-600">
        <p>© 2025 Kia. All rights reserved.</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;