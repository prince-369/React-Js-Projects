import { 
    FaArrowUp as ArrowUpIcon,
    FaArrowDown as ArrowDownIcon,
    FaDollarSign as CurrencyDollarIcon,
    FaUsers as UserGroupIcon,
    FaShoppingBag as ShoppingBagIcon,
    FaChartPie as ChartPieIcon
  } from 'react-icons/fa';
  import { Chart as ChartJS, registerables } from 'chart.js';
  import { Bar, Pie, Line } from 'react-chartjs-2';
  
  // Register ChartJS components
  ChartJS.register(...registerables);
  
  const StatCard = ({ title, value, change, icon: Icon, isPositive }) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-semibold mt-1">{value}</p>
            <div className={`flex items-center mt-2 ${isPositive ? 'text-success' : 'text-danger'}`}>
              {isPositive ? (
                <ArrowUpIcon className="h-4 w-4" />
              ) : (
                <ArrowDownIcon className="h-4 w-4" />
              )}
              <span className="text-sm ml-1">{change}</span>
            </div>
          </div>
          <div className="p-3 rounded-full bg-primary-light/10 text-primary-light dark:bg-primary-dark/20 dark:text-primary-dark">
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </div>
    )
  }
  
  const Dashboard = () => {
    const stats = [
      { title: 'Total Revenue', value: '$24,780', change: '+12.5%', icon: CurrencyDollarIcon, isPositive: true },
      { title: 'New Customers', value: '1,250', change: '+8.3%', icon: UserGroupIcon, isPositive: true },
      { title: 'New Orders', value: '845', change: '-2.1%', icon: ShoppingBagIcon, isPositive: false },
      { title: 'Conversion Rate', value: '3.6%', change: '+0.7%', icon: ChartPieIcon, isPositive: true },
    ]
  
    // Revenue Chart Data
    const revenueData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Revenue',
          data: [12000, 19000, 15000, 18000, 22000, 24000, 24780],
          backgroundColor: 'rgba(115, 103, 240, 0.2)',
          borderColor: 'rgba(115, 103, 240, 1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        }
      ]
    };
  
    // Sales Distribution Data
    const salesData = {
      labels: ['Electronics', 'Clothing', 'Home Goods', 'Books', 'Other'],
      datasets: [
        {
          data: [35, 25, 20, 10, 10],
          backgroundColor: [
            'rgba(115, 103, 240, 0.7)',
            'rgba(40, 199, 111, 0.7)',
            'rgba(234, 84, 85, 0.7)',
            'rgba(255, 159, 67, 0.7)',
            'rgba(0, 207, 232, 0.7)'
          ],
          borderWidth: 0
        }
      ]
    };
  
    // Orders Trend Data
    const ordersData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Orders',
          data: [720, 790, 810, 830, 850, 840, 845],
          borderColor: 'rgba(40, 199, 111, 1)',
          backgroundColor: 'rgba(40, 199, 111, 0.1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        }
      ]
    };
  
    return (
      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-xl sm:text-2xl font-bold px-2 sm:px-0">Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-0">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 px-2 sm:px-0">
          {/* Revenue Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6 lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <h2 className="text-lg font-semibold">Revenue Overview</h2>
              <select className="text-sm border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 bg-white dark:bg-gray-700 focus:outline-none max-w-[200px]">
                <option>Last 7 Months</option>
                <option>Last Year</option>
                <option>Last 2 Years</option>
              </select>
            </div>
            <div className="h-64">
              <Line 
                data={revenueData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false
                    }
                  },
                  scales: {
                    y: {
                      beginAtZero: false,
                      grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                      }
                    },
                    x: {
                      grid: {
                        display: false
                      }
                    }
                  }
                }}
              />
            </div>
          </div>
          
          {/* Pie Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6">
            <h2 className="text-lg font-semibold mb-4">Sales Distribution</h2>
            <div className="h-64">
              <Pie
                data={salesData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'right',
                      labels: {
                        usePointStyle: true,
                        padding: 20
                      }
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
  
        {/* Orders Trend Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6">
          <h2 className="text-lg font-semibold mb-4">Orders Trend</h2>
          <div className="h-64">
            <Line 
              data={ordersData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  y: {
                    beginAtZero: false,
                    grid: {
                      color: 'rgba(0, 0, 0, 0.05)'
                    }
                  },
                  x: {
                    grid: {
                      display: false
                    }
                  }
                }
              }}
            />
          </div>
        </div>
        
        {/* Recent Orders Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-lg font-semibold">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Order ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Customer</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-primary-light dark:text-primary-dark">#ORD-00{item}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">Customer {item}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm hidden sm:table-cell">2023-05-{10 + item}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">${(150 + item * 25).toFixed(2)}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item % 3 === 0 ? 'bg-success/10 text-success' : 
                        item % 3 === 1 ? 'bg-warning/10 text-warning' : 
                        'bg-danger/10 text-danger'
                      }`}>
                        {item % 3 === 0 ? 'Completed' : item % 3 === 1 ? 'Processing' : 'Cancelled'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  
  export default Dashboard