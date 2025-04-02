// src/hooks/useProfiles.js
import { useState, useEffect } from 'react';
import { mockProfiles } from '../src/utils/mockData';

const useProfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = async () => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setProfiles(mockProfiles);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return { profiles, loading, error, refetch };
};

export default useProfiles;