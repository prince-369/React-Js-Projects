import { useState } from 'react';
import { mockProfiles } from '../src/utils/mockData';
import { v4 as uuidv4 } from 'uuid';

const useProfileManagement = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // In a real app, these would be API calls
  const createProfile = async (profileData) => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      const newProfile = { id: uuidv4(), ...profileData };
      mockProfiles.push(newProfile);
      return newProfile;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (id, profileData) => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      const index = mockProfiles.findIndex(p => p.id === id);
      if (index !== -1) {
        mockProfiles[index] = { ...mockProfiles[index], ...profileData };
        return mockProfiles[index];
      }
      throw new Error('Profile not found');
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteProfile = async (id) => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      const index = mockProfiles.findIndex(p => p.id === id);
      if (index !== -1) {
        mockProfiles.splice(index, 1);
      } else {
        throw new Error('Profile not found');
      }
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createProfile, updateProfile, deleteProfile, loading, error };
};

export default useProfileManagement;