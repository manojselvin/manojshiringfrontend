import React, { useState } from 'react';
import axios from 'axios';

function AddCandidateForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: ['node'],
    status: '',
    expected_salary: 0,
    node_experience: 0,
    react_experience: 0
  });

 const handleSelectMultiple = (e) => {
    console.log(e.target.selectedOptions);
    let value = Array.from(e.target.selectedOptions, option => option.value);
    setFormData({ ...formData, [e.target.name]: value });
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/candidates', formData);
      alert('Candidate added successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        skills: [],
        status: '',
        expected_salary: 0,
        node_experience: 0,
        react_experience: 0
      });
    } catch (error) {
      console.error('Error adding candidate:', error);
      alert('Error adding candidate. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Add New Candidate</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </label>

        <label className="block">
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </label>

        <label className="block">
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </label>

        <label htmlFor="skills" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skills/Qualifications: <span className="text-gray-400">(Choose Multiple)</span></label>
        <select id="skills" name="skills" defaultValue={formData.skills} onChange={handleSelectMultiple} multiple className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="node_js">Node.js</option>
          <option value="react_js">ReactJS</option>
          <option value="java">Java</option>
          <option value="php">PHP</option>
        </select>

        <label className="block">
          Status:
          <select name="status" value={formData.status} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option value="">Select status</option>
            <option value="Contacted">Contacted</option>
            <option value="Interview Scheduled">Interview Scheduled</option>
            <option value="Offer Extended">Offer Extended</option>
            <option value="Hired">Hired</option>
            <option value="Rejected">Rejected</option>
          </select>
        </label>

        <label className="block">
          Expected Salary:
          <input type="number" name="expected_salary" value={formData.expected_salary} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </label>

        <label className="block">
          Node.js Experience (years):
          <input type="number" name="node_experience" value={formData.node_experience} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </label>

        <label className="block">
          ReactJS Experience (years):
          <input type="number" name="react_experience" value={formData.react_experience} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </label>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Candidate</button>
      </form>
    </div>

  );
}

export default AddCandidateForm;
