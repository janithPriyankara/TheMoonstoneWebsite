import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  DollarSign, 
  ShoppingCart, 
  Receipt, 
  Calendar,
  Download,
  Eye,
  Filter,
  Search,
  ArrowLeft
} from 'lucide-react';
import { Button } from '../ui/button';

const Dashboard = ({ user, onLogout, onBackToHome }) => {
  const [activeTab, setActiveTab] = useState('orders');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data - in real app, this would come from API
  const [data, setData] = useState({
    orders: [
      {
        id: 'ORD-001',
        title: 'Custom PCB Design',
        status: 'completed',
        date: '2024-01-15',
        amount: 850.00,
        description: 'Arduino-compatible development board'
      },
      {
        id: 'ORD-002',
        title: 'Web Application Development',
        status: 'in-progress',
        date: '2024-02-01',
        amount: 2500.00,
        description: 'E-commerce platform with payment integration'
      }
    ],
    proposals: [
      {
        id: 'PROP-001',
        title: 'IoT Sensor Network',
        status: 'pending',
        date: '2024-02-10',
        validUntil: '2024-03-10',
        description: 'Smart building automation system proposal'
      }
    ],
    quotations: [
      {
        id: 'QUOT-001',
        title: 'Mobile App Development',
        status: 'approved',
        date: '2024-01-20',
        amount: 4200.00,
        validUntil: '2024-02-20',
        description: 'Cross-platform mobile application'
      }
    ],
    invoices: [
      {
        id: 'INV-001',
        title: 'Custom PCB Design',
        status: 'paid',
        date: '2024-01-20',
        dueDate: '2024-02-20',
        amount: 850.00,
        description: 'Arduino-compatible development board'
      }
    ]
  });

  const tabs = [
    { id: 'orders', label: 'Orders', icon: ShoppingCart, count: data.orders.length },
    { id: 'proposals', label: 'Proposals', icon: FileText, count: data.proposals.length },
    { id: 'quotations', label: 'Quotations', icon: DollarSign, count: data.quotations.length },
    { id: 'invoices', label: 'Invoices', icon: Receipt, count: data.invoices.length }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
      case 'paid':
      case 'approved':
        return 'bg-green-900 text-green-300';
      case 'in-progress':
      case 'pending':
        return 'bg-yellow-900 text-yellow-300';
      case 'cancelled':
      case 'rejected':
        return 'bg-red-900 text-red-300';
      default:
        return 'bg-gray-900 text-gray-300';
    }
  };

  const filteredData = data[activeTab]?.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  }) || [];

  const getUniqueStatuses = () => {
    const statuses = data[activeTab]?.map(item => item.status) || [];
    return [...new Set(statuses)];
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Button
              onClick={onBackToHome}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="text-gray-300">Welcome back, {user.name}</p>
            </div>
          </div>
          <Button
            onClick={onLogout}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <div key={tab.id} className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">{tab.label}</p>
                    <p className="text-2xl font-bold text-white">{tab.count}</p>
                  </div>
                  <Icon className="h-8 w-8 text-blue-400" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="bg-gray-800 rounded-lg">
          <div className="border-b border-gray-700">
            <nav className="flex space-x-8 px-6">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-400'
                        : 'border-transparent text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                    <span className="bg-gray-700 text-gray-300 rounded-full px-2 py-1 text-xs">
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Filters */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder={`Search ${activeTab}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                >
                  <option value="all">All Status</option>
                  {getUniqueStatuses().map(status => (
                    <option key={status} value={status}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {filteredData.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-400 mb-2">
                  No {activeTab} found
                </h3>
                <p className="text-gray-500">
                  {searchTerm || statusFilter !== 'all' 
                    ? 'Try adjusting your filters' 
                    : `You don't have any ${activeTab} yet`}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredData.map(item => (
                  <div key={item.id} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-650 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                            {item.status.replace('-', ' ')}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-2">{item.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                          {item.amount && (
                            <span className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              ${item.amount.toFixed(2)}
                            </span>
                          )}
                          {item.validUntil && (
                            <span className="text-yellow-400">
                              Valid until: {new Date(item.validUntil).toLocaleDateString()}
                            </span>
                          )}
                          {item.dueDate && (
                            <span className="text-orange-400">
                              Due: {new Date(item.dueDate).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-600"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-600"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
