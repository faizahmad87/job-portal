// src/App.js
import React, {useEffect, useState} from 'react';
import {
 BrowserRouter as Router,
 Routes,
 Route,
 Navigate
} from 'react-router-dom';
import {Box} from '@mui/material';
import Sidebar from './components/Sidebar';
import JobListings from './pages/Dashboard/JobListing';
import AssessmentList from './pages/CreateAssessment/AssessmentList';
import Questionnaire from './pages/CreateAssessment/Questionnaire';
import CandidateList from './pages/Dashboard/CandidateList';
import CandidateDetails from './pages/Dashboard/CandidateDetails';

function App() {
 //  useEffect(() => {
 //   setIsAuth(!!localStorage.getItem('token'));
 //  }, []);

 return (
  <Router>
   <Box sx={{display: 'flex'}}>
    {/* Conditionally render Sidebar and main content only if authenticated */}

    <Sidebar />
    <Box component="main" sx={{flexGrow: 1, padding: 3}}>
     <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<JobListings />} />
      <Route
       path="/dashboard/job/:jobId/candidates"
       element={<CandidateList />}
      />
      <Route
       path="/dashboard/job/:jobId/candidate/:candidateId"
       element={<CandidateDetails />}
      />
      <Route path="/create-assessment" element={<AssessmentList />} />
      <Route
       path="/create-assessment/:assessmentId/questionnaire"
       element={<Questionnaire />}
      />
     </Routes>
    </Box>
   </Box>
  </Router>
 );
}

export default App;
