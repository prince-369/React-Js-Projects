import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
 
const DocumentVerification = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState('');
 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
    }}
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: '#04253a' }}
    >
      {/* Main Container Box */}
      <div className="w-full max-w-6xl rounded-xl overflow-hidden shadow-2xl flex flex-col"
        style={{ backgroundColor: '#0e3a59' }}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-600 flex justify-between">
         
            <div className="text-2xl font-bold text-white">LOGO</div>
         
          <h1 className="text-2xl font-bold text-center text-white">Document Verification (Teacher)</h1>
 
         <div> <Link to='/'><button
      type="button"
      className="px-4 py-1 bg-sky-600 text-white font-medium rounded-md shadow-sm hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
    >
      Logout
    </button></Link></div>
        </div>
 
        {/* Main Content */}
        <div className="p-6 md:p-8">
          {/* Lesson Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Lesson</h2>
           
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-300 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Last Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Phone No.</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Phone No."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Home Address</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Home Address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Experience (in years)</label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Experience (in years)"
                  />
                </div>
                <div>
  <label className="block text-sm font-medium text-gray-300 mb-1">Upload Aadhar Card</label>
  <div className="relative flex items-center">
    <input
      type="text"
      placeholder="Upload Aadhar Card"
      readOnly
      className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={selectedFileName}
    />
    <button
      type="button"
      onClick={() => fileInputRef.current.click()}
      className="absolute right-1 top-1 bottom-1 px-3 bg-blue-800 text-white rounded-md text-sm hover:bg-blue-700"
    >
      Browse File
    </button>
    <input
      type="file"
      ref={fileInputRef}
      onChange={handleFileChange}
      className="hidden"
    />
  </div>
</div>
 
              </div>
            </div>
 
            {/* Educational Information */}
            <div>
              <h3 className="text-lg font-medium text-gray-300 mb-4">Educational Information</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-600">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Degree</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Institution Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Marks/GPA</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Document</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-600">
                    {/* Secondary School */}
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">Secondary School</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          className="w-full px-2 py-1 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                          placeholder="10th School Name"
                        />
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          className="w-full px-2 py-1 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                          placeholder="Total Marks in %"
                        />
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Upload 10th Marksheet</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <button className="px-3 py-1 bg-blue-800 text-white text-sm rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                          Browse Files
                        </button>
                      </td>
                    </tr>
                   
                    {/* Higher Secondary */}
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">Higher Secondary</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          className="w-full px-2 py-1 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                          placeholder="12th School Name"
                        />
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          className="w-full px-2 py-1 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                          placeholder="Total Marks in %"
                        />
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Upload 12th Marksheet</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <button className="px-3 py-1 bg-blue-800 text-white text-sm rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                          Browse Files
                        </button>
                      </td>
                    </tr>
                   
                    {/* Under Graduation */}
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">Under Graduation</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          className="w-full px-2 py-1 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                          placeholder="U.G. College/University Name"
                        />
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          className="w-full px-2 py-1 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                          placeholder="CGPA/SGPA out of 10"
                        />
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Upload U.G. Marksheet</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <button className="px-3 py-1 bg-blue-800 text-white text-sm rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                          Browse Files
                        </button>
                      </td>
                    </tr>
                   
                    {/* Post Graduation */}
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-white">Post Graduation</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          className="w-full px-2 py-1 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                          placeholder="P.G. College/University Name"
                        />
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          className="w-full px-2 py-1 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-blue-400"
                          placeholder="CGPA/SGPA out of 10"
                        />
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">Upload P.G. Marksheet</td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <button className="px-3 py-1 bg-blue-800 text-white text-sm rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                          Browse Files
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
 
          {/* Submit Button */}
          <div className="flex justify-center mt-8">
           <Link to='/request'><button
              type="submit"
              className="px-6 py-3 bg-blue-800 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Submit
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default DocumentVerification;