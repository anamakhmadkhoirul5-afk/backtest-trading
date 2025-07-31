'use client';

import { useState } from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  Target, 
  Zap, 
  Settings, 
  Play, 
  Pause, 
  Eye,
  Copy,
  Star,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Clock
} from 'lucide-react';

function StrategyCard({ strategy, onActivate, onView, onCopy }) {
  const { name, description, performance, winRate, drawdown, status, tags, totalTrades } = strategy;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full ${status === 'active' ? 'bg-green-400' : 'bg-gray-300'}`}></div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          {strategy.featured && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
        </div>
        <span className={`px-2 py-1 text-xs rounded-full ${
          status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
        }`}>
          {status === 'active' ? 'Active' : 'Inactive'}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="flex items-center space-x-1 mb-1">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Performance</span>
          </div>
          <span className={`text-lg font-bold ${performance > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {performance > 0 ? '+' : ''}{performance}%
          </span>
        </div>
        
        <div>
          <div className="flex items-center space-x-1 mb-1">
            <Target className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Win Rate</span>
          </div>
          <span className="text-lg font-bold text-gray-900">{winRate}%</span>
        </div>
        
        <div>
          <div className="flex items-center space-x-1 mb-1">
            <ArrowDownRight className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-gray-700">Max Drawdown</span>
          </div>
          <span className="text-lg font-bold text-red-600">{drawdown}%</span>
        </div>
        
        <div>
          <div className="flex items-center space-x-1 mb-1">
            <Activity className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Total Trades</span>
          </div>
          <span className="text-lg font-bold text-gray-900">{totalTrades}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={() => onActivate(strategy)}
          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
            status === 'active' 
              ? 'bg-red-600 text-white hover:bg-red-700' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {status === 'active' ? (
            <>
              <Pause className="w-4 h-4 mr-2 inline" />
              Deactivate
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2 inline" />
              Activate
            </>
          )}
        </button>
        
        <button
          onClick={() => onView(strategy)}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Eye className="w-4 h-4" />
        </button>
        
        <button
          onClick={() => onCopy(strategy)}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function StrategiesPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [strategies, setStrategies] = useState([
    {
      id: 1,
      name: "Scalping Pro",
      description: "Strategy scalping untuk timeframe 1-5 menit dengan risk reward 1:2",
      performance: 23.5,
      winRate: 73,
      drawdown: 8.2,
      status: 'active',
      featured: true,
      tags: ['Scalping', 'High Frequency', 'EUR/USD'],
      totalTrades: 342
    },
    {
      id: 2,
      name: "Trend Following",
      description: "Strategy mengikuti trend jangka menengah dengan moving average crossover",
      performance: 18.7,
      winRate: 65,
      drawdown: 12.1,
      status: 'inactive',
      featured: false,
      tags: ['Trend Following', 'Daily', 'GBP/USD'],
      totalTrades: 156
    },
    {
      id: 3,
      name: "Range Trading",
      description: "Strategy untuk market sideways dengan support resistance analysis",
      performance: 15.2,
      winRate: 68,
      drawdown: 6.8,
      status: 'active',
      featured: false,
      tags: ['Range Trading', '4H', 'USD/JPY'],
      totalTrades: 89
    },
    {
      id: 4,
      name: "Breakout Hunter",
      description: "Strategy untuk menangkap breakout dari level support/resistance kunci",
      performance: 31.8,
      winRate: 58,
      drawdown: 15.4,
      status: 'inactive',
      featured: true,
      tags: ['Breakout', 'High Risk', 'Multi Pair'],
      totalTrades: 203
    }
  ]);

  const filteredStrategies = strategies.filter(strategy => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active') return strategy.status === 'active';
    if (activeTab === 'inactive') return strategy.status === 'inactive';
    if (activeTab === 'featured') return strategy.featured;
    return true;
  });

  const handleActivate = (strategy) => {
    setStrategies(prev => prev.map(s => 
      s.id === strategy.id 
        ? { ...s, status: s.status === 'active' ? 'inactive' : 'active' }
        : s
    ));
  };

  const handleView = (strategy) => {
    console.log('View strategy:', strategy);
  };

  const handleCopy = (strategy) => {
    console.log('Copy strategy:', strategy);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Trading Strategies</h1>
        <p className="text-gray-600">
          Kelola dan monitor performa strategy trading Anda
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Active Strategies</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">
            {strategies.filter(s => s.status === 'active').length}
          </span>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Avg Performance</span>
          </div>
          <span className="text-2xl font-bold text-green-600">
            +{(strategies.reduce((acc, s) => acc + s.performance, 0) / strategies.length).toFixed(1)}%
          </span>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Avg Win Rate</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">
            {(strategies.reduce((acc, s) => acc + s.winRate, 0) / strategies.length).toFixed(0)}%
          </span>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Total Trades</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">
            {strategies.reduce((acc, s) => acc + s.totalTrades, 0)}
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
        {[
          { id: 'all', label: 'All Strategies' },
          { id: 'active', label: 'Active' },
          { id: 'inactive', label: 'Inactive' },
          { id: 'featured', label: 'Featured' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Strategies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredStrategies.map((strategy) => (
          <StrategyCard
            key={strategy.id}
            strategy={strategy}
            onActivate={handleActivate}
            onView={handleView}
            onCopy={handleCopy}
          />
        ))}
      </div>

      {/* Create New Strategy Button */}
      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Create New Strategy
        </button>
      </div>
    </div>
  );
}