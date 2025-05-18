import { FaBell as BellIcon, FaSearch as SearchIcon } from 'react-icons/fa'


const Header = ({ sidebarOpen, toggleSidebar, isMobile }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm z-20">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none md:hidden"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="relative hidden sm:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full pl-10 pr-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4">
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none">
            <BellIcon className="h-5 w-5" />
          </button>
          
         
          
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-primary-light flex items-center justify-center text-white">
              <span className="text-sm font-semibold">PK</span>
            </div>
            {!isMobile && (
              <span className="ml-2 text-sm font-medium hidden md:inline">Prince Kumar</span>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header