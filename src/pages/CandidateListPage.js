import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {CandidateList} from '../components/Candidate';

function CandidateListPage() {
  const [candidates, setCandidates] = useState([]);

  const loadData = () => {
    axios.get('http://localhost:3000/candidates')
      .then(response => {
        setCandidates(response.data);
      })
      .catch(error => {
        console.error('Error fetching candidates:', error);
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <CandidateList candidates={candidates} refreshTable={loadData} />
    </div>
  );
}

export default CandidateListPage;
