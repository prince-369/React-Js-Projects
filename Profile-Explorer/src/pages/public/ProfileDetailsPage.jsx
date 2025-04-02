import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, MapPinIcon } from '@heroicons/react/24/outline';
import useProfile from '../../../hooks/useProfile';
import InteractiveMap from '../../components/map/InteractiveMap';

const ProfileDetailsPage = () => {
  const { id } = useParams();
  const { profile, loading, error } = useProfile(id);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">Error loading profile: {error.message}</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="container mx-auto p-4">
        <p>Profile not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Link
        to="/"
        className="flex items-center text-primary hover:text-primary-dark mb-4"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-1" />
        Back to Profiles
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={profile.photo || '/default-profile.jpg'}
              alt={profile.name}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPinIcon className="w-5 h-5 mr-1" />
              <span>{profile.address}</span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                <p className="mt-1 text-sm text-gray-900">{profile.email}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                <p className="mt-1 text-sm text-gray-900">{profile.phone}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">About</h3>
                <p className="mt-1 text-sm text-gray-900">{profile.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <h3 className="text-lg font-medium mb-2">Location</h3>
          <div className="h-64 w-full rounded-md overflow-hidden">
            <InteractiveMap address={profile.address} height="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsPage;