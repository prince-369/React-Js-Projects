import { useState, useEffect } from 'react';
import { mockProfiles } from '../src/utils/mockData';

const useProfile = (id) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        const foundProfile = mockProfiles.find(p => p.id === id);
        if (foundProfile) {
          setProfile(foundProfile);
          setError(null);
        } else {
          setError(new Error('Profile not found'));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProfile();
    }
  }, [id]);

  return { profile, loading, error };
};

export default useProfile;