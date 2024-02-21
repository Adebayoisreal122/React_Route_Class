import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = ({ token }) => {
  const navigate = useNavigate();
  const [verificationResult, setVerificationResult] = useState('');

  useEffect(() => {
    const verifyToken = () => {
      axios.post('http://localhost:4000/verify', { token })
        .then((res) => {
          setVerificationResult(res.data.message);
          navigate('/signin');
        })
        .catch((error) => {
          console.error('Error verifying token:', error);
          setVerificationResult('Error verifying token');
        });
    };

    verifyToken();
  }, [token, navigate]);

  return (
    <div className="text-dark">Home</div>
  );
};

export default Home;
