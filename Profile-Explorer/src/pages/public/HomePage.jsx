import { useState } from 'react';
import ProfileCard from '../../components/profile/ProfileCard.jsx';
import InteractiveMap from '../../components/map/InteractiveMap.jsx';
import useProfiles from '../../../hooks/useProfiles';

const HomePage = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { profiles, loading, error } = useProfiles();

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowMap = (address) => {
    setSelectedAddress(address);
  };

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">Error loading profiles: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search profiles by name or address..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : filteredProfiles.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">No profiles found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProfiles.map(profile => (
                <ProfileCard 
                  key={profile.id} 
                  profile={profile} 
                  onShowMap={handleShowMap} 
                />
              ))}
            </div>
          )}
        </div>
        <div className="w-full md:w-1/3">
          <InteractiveMap address={selectedAddress} height="600px" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;