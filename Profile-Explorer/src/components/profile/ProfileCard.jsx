import { Link } from 'react-router-dom';
import { MapPinIcon, EyeIcon } from '@heroicons/react/24/outline';

const ProfileCard = ({ profile, onShowMap }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <img
        src={profile.photo || '/default-profile.jpg'}
        alt={profile.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{profile.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{profile.description}</p>
        <div className="mt-auto flex justify-between items-center">
          <button
            onClick={() => onShowMap(profile.address)}
            className="flex items-center text-primary hover:text-primary-dark"
          >
            <MapPinIcon className="w-5 h-5 mr-1" />
            View on Map
          </button>
          <Link
            to={`/profile/${profile.id}`}
            className="flex items-center text-primary hover:text-primary-dark"
          >
            <EyeIcon className="w-5 h-5 mr-1" />
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;