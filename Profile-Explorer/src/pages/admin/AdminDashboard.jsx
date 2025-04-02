import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import useProfiles from '../../../hooks/useProfiles';
import useProfileManagement from '../../../hooks/useProfileManagement';
import ConfirmationDialog from '../../components/common/ConfirmationDialog';

const AdminDashboard = () => {
  const { profiles, loading, error, refetch } = useProfiles();
  const { deleteProfile } = useProfileManagement();
  const [deleteId, setDeleteId] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setOpenDeleteDialog(true);
  };

  const handleConfirmDelete = async () => {
    if (deleteId) {
      try {
        await deleteProfile(deleteId);
        refetch();
      } catch (err) {
        console.error('Error deleting profile:', err);
      }
    }
    setOpenDeleteDialog(false);
    setDeleteId(null);
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Profile Management</h1>
        <Link
          to="/admin/profiles/new"
          className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
        >
          <PlusIcon className="w-5 h-5 mr-1" />
          Add New Profile
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {profiles.map(profile => (
                <tr key={profile.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img 
                      src={profile.photo || '/default-profile.jpg'} 
                      alt={profile.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{profile.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{profile.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <Link
                        to={`/admin/profiles/${profile.id}/edit`}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <PencilIcon className="w-5 h-5" />
                      </Link>
                      <button
                        onClick={() => handleDeleteClick(profile.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <ConfirmationDialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={handleConfirmDelete}
        title="Confirm Delete"
        message="Are you sure you want to delete this profile?"
      />
    </div>
  );
};

export default AdminDashboard;