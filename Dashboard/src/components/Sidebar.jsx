import { NavLink } from "react-router-dom";
import {
  FaHome as HomeIcon,
  FaChartBar as ChartBarIcon,
  FaCog as CogIcon,
  FaUsers as UsersIcon,
  FaFileAlt as DocumentTextIcon,
  FaCalendarAlt as CalendarIcon,
  FaEnvelope as MailIcon,
  FaFolder as FolderIcon,
  FaShoppingCart as ShoppingCartIcon,
} from "react-icons/fa";

const Sidebar = ({ sidebarOpen, toggleSidebar, isMobile }) => {
  const navItems = [
    { name: "Dashboard", icon: HomeIcon, path: "/" },
    { name: "Analytics", icon: ChartBarIcon, path: "/analytics" },
    { name: "Users", icon: UsersIcon, path: "/users" },
    { name: "Documents", icon: DocumentTextIcon, path: "/documents" },
    { name: "Calendar", icon: CalendarIcon, path: "/calendar" },
    { name: "Email", icon: MailIcon, path: "/email" },
    { name: "Projects", icon: FolderIcon, path: "/projects" },
    { name: "E-commerce", icon: ShoppingCartIcon, path: "/ecommerce" },
    { name: "Settings", icon: CogIcon, path: "/settings" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar container */}
      <div
        className={`
          sidebar-transition bg-white dark:bg-gray-800 shadow-md
          fixed md:relative h-full z-30
          ${
            sidebarOpen
              ? "w-64 translate-x-0"
              : "-translate-x-full md:translate-x-0 md:w-20"
          }
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo section */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            {sidebarOpen ? (
              <h1 className="text-xl font-bold text-primary-light dark:text-primary-dark">
                PrinceHub
              </h1>
            ) : (
              <h1 className="text-xl font-bold text-primary-light dark:text-primary-dark">
                M
              </h1>
            )}
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Scrollable navigation area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <nav className="flex-1 overflow-y-auto">
              <ul className="space-y-1 px-2 py-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `
                        flex items-center p-3 rounded-lg transition-colors
                        ${
                          isActive
                            ? "bg-primary-light/10 text-primary-light dark:bg-primary-dark/20 dark:text-primary-dark"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                        }
                      `}
                    >
                      <item.icon
                        className={`h-5 w-5 ${sidebarOpen ? "mr-3" : "mx-auto"}`}
                      />
                      {sidebarOpen && <span>{item.name}</span>}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* User profile */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary-light flex items-center justify-center text-white">
                <span className="font-semibold">PK</span>
              </div>
              {sidebarOpen && (
                <div className="ml-3">
                  <p className="text-sm font-medium">Prince Kumar</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Admin
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;