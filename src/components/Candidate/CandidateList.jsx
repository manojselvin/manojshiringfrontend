import React, { useState } from 'react';
import axios from 'axios';

function CandidateList({ candidates, refreshTable }) {

    const [formData, setFormData] = useState({
        id: '',
        status: '',
        showEditUserModal: false
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const setCandidateDetails = (selectedId, currentStatus) => {
        console.log(selectedId, currentStatus)
        setFormData({ ...formData, id: selectedId, status: currentStatus, showEditUserModal: true });
    }

    const handleSubmit = async () => {
        try {
            await axios.put('http://localhost:3000/candidates', formData);
            alert('Candidate status updated successfully!');
            setFormData({ id: '', status: '', showEditUserModal: false });
            refreshTable();
        } catch (error) {
            console.error('Error updating candidate:', error);
            alert('Error updating candidate. Please try again.');
        }
    };

    return (
        <div className="max-w-7xl mx-auto mt-8">
            <h2 className="text-4xl font-extrabold p-4 dark:text-white">Candidate List</h2>

            { /* Candidate Listing */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Skills
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Expected Salary
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Node.js Experience
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ReactJS Experience
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Score
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map(candidate => (
                            <tr key={Math.random() + candidate.id + '-id'} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {candidate.name}
                                </th>
                                <td className="px-6 py-4">
                                    {candidate.email}
                                </td>
                                <td className="px-6 py-4">
                                    {candidate.phone}
                                </td>
                                <td className="px-6 py-4">
                                    {JSON.parse(candidate.skills).join(", ")}
                                </td>
                                <td className="px-6 py-4">
                                    {candidate.status}
                                </td>
                                <td className="px-6 py-4">
                                    {candidate.expected_salary}
                                </td>
                                <td className="px-6 py-4">
                                    {candidate.node_experience}
                                </td>
                                <td className="px-6 py-4">
                                    {candidate.react_experience}
                                </td>
                                <td className="px-6 py-4">
                                    {candidate.total_score}
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" onClick={(e) => { e.preventDefault(); setCandidateDetails(candidate.id, candidate.status) }} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>


            { /* Edit Candidate Status Modal */}
            {formData.showEditUserModal ? <div className={(formData.showEditUserModal ? '' : 'hidden') + "fixed inset-0 z-10 overflow-y-auto modal"} >
                <div
                    className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center"
                >
                    <div
                        className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                    ></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span
                    >&#8203;
                    <div
                        className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                    >
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Edit Candidate</h3>
                            <div className="mt-2">
                                <label className="block">
                                    Status:
                                    <select name="status" defaultValue={formData.status} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                        <option value="">Select status</option>
                                        <option value="Contacted">Contacted</option>
                                        <option value="Interview Scheduled">Interview Scheduled</option>
                                        <option value="Offer Extended">Offer Extended</option>
                                        <option value="Hired">Hired</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-6">
                            <button onClick={handleSubmit}
                                className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm close-modal hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                            >
                                Update Details
                            </button>
                            <button onClick={() => setFormData({ id: '', status: '', showEditUserModal: false })}
                                className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-gray-500 border border-transparent rounded-md close-modal hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2  sm:text-sm"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div> : ''}
        </div>
    );
}

export default CandidateList;
