import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AddCandidatePage, CandidateListPage, HomePage } from './pages';

function App() {
  return (
    <Router>
      <div className="">
        {/* NavBar */}
        <nav className="bg-gray-800 p-4">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="block text-lime-400 hover:text-lime-600">Manoj's Hiring</Link>
            <div className="hidden w-full md:block md:w-auto">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link to="/add" className="block py-2 px-3 text-white hover:text-cyan-300">Add Candidate</Link>
                </li>
                <li>
                  <Link to="/list" className="block py-2 px-3 text-white hover:text-cyan-300">Candidate List</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes List */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddCandidatePage />} />
          <Route path="/list" element={<CandidateListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
