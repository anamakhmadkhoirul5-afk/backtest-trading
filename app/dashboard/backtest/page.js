'use client';

import { useState } from 'react';
import { 
  Play, 
  Download, 
  Calendar, 
  TrendingUp, 
  BarChart3, 
  Settings,
  Clock,
  DollarSign,
  Activity,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw
} from 'lucide-react';

function BacktestResult({ result }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{result.strategyName}</h3>
          <p className="text-sm text-gray-600">{result.period} • {result.pair}</p>
        </div>
        <span className={`px-2 py-1 text-xs rounded-full ${
          result.status === 'completed' ? 'bg-green-100 text-green-700' : 
          result.status === 'running' ? 'bg-yellow-100 text-yellow-700' :
          'bg-gray-100 text-gray-700'
        }`}>
          {result.status}
        </span>
      </div>

      {result.status === 'completed' && (
        <>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="flex items-center space-x-1 mb-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Total Return</span>
              </div>
              <span className={`text-lg font-bold ${result.totalReturn > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {result.totalReturn > 0 ? '+' : ''}{result.totalReturn}%
              </span>
            </div>
            
            <div>
              <div className="flex items-center space-x-1 mb-1">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Win Rate</span>
              </div>
              <span className="text-lg font-bold text-gray-900">{result.winRate}%</span>
            </div>
            
            <div>
              <div className="flex items-center space-x-1 mb-1">
                <ArrowDownRight className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-gray-700">Max Drawdown</span>
              </div>
              <span className="text-lg font-bold text-red-600">{result.maxDrawdown}%</span>
            </div>
            
            <div>
              <div className="flex items-center space-x-1 mb-1">
                <Activity className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Total Trades</span>
              </div>
              <span className="text-lg font-bold text-gray-900">{result.totalTrades}</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              View Details
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </>
      )}

      {result.status === 'running' && (
        <div className="flex items-center justify-center py-8">
          <RefreshCw className="w-6 h-6 text-blue-600 animate-spin mr-2" />
          <span className="text-gray-600">Running backtest...</span>
        </div>
      )}
    </div>
  );
}

export default function BacktestPage() {
  const [selectedStrategy, setSelectedStrategy] = useState('');
  const [selectedPair, setSelectedPair] = useState('EUR/USD');
  const [startDate, setStartDate] = useState('2024-01-01');
  const [endDate, setEndDate] = useState('2024-12-31');
  const [initialBalance, setInitialBalance] = useState(10000);
  const [isRunning, setIsRunning] = useState(false);

  const [backtestResults, setBacktestResults] = useState([
    {
      id: 1,
      strategyName: "Scalping Pro",
      period: "Jan 2024 - Dec 2024",
      pair: "EUR/USD",
      status: "completed",
      totalReturn: 23.5,
      winRate: 73,
      maxDrawdown: 8.2,
      totalTrades: 342,
      createdAt: "2024-12-15"
    },
    {
      id: 2,
      strategyName: "Trend Following",
      period: "Jun 2024 - Dec 2024", 
      pair: "GBP/USD",
      status: "completed",
      totalReturn: 18.7,
      winRate: 65,
      maxDrawdown: 12.1,
      totalTrades: 156,
      createdAt: "2024-12-14"
    },
    {
      id: 3,
      strategyName: "Range Trading",
      period: "Oct 2024 - Dec 2024",
      pair: "USD/JPY", 
      status: "running",
      createdAt: "2024-12-16"
    }
  ]);

  const strategies = [
    'Scalping Pro',
    'Trend Following', 
    'Range Trading',
    'Breakout Hunter'
  ];

  const currencyPairs = [
    'EUR/USD',
    'GBP/USD',
    'USD/JPY',
    'USD/CHF',
    'AUD/USD',
    'USD/CAD'
  ];

  const handleRunBacktest = () => {
    if (!selectedStrategy) return;
    
    setIsRunning(true);
    
    // Simulate backtest running
    const newBacktest = {
      id: Date.now(),
      strategyName: selectedStrategy,
      period: `${startDate} - ${endDate}`,
      pair: selectedPair,
      status: "running",
      createdAt: new Date().toISOString().split('T')[0]
    };
    
    setBacktestResults(prev => [newBacktest, ...prev]);
    
    // Simulate completion after 5 seconds
    setTimeout(() => {
      setBacktestResults(prev => prev.map(result => 
        result.id === newBacktest.id 
          ? {
              ...result,
              status: "completed",
              totalReturn: (Math.random() * 40 - 10).toFixed(1),
              winRate: Math.floor(Math.random() * 30 + 50),
              maxDrawdown: (Math.random() * 20).toFixed(1),
              totalTrades: Math.floor(Math.random() * 300 + 100)
            }
          : result
      ));
      setIsRunning(false);
    }, 5000);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Backtest Engine</h1>
        <p className="text-gray-600">
          Test performa strategy trading dengan data historis
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Backtest Configuration */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">New Backtest</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Strategy
                </label>
                <select
                  value={selectedStrategy}
                  onChange={(e) => setSelectedStrategy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select strategy</option>
                  {strategies.map((strategy) => (
                    <option key={strategy} value={strategy}>
                      {strategy}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currency Pair
                </label>
                <select
                  value={selectedPair}
                  onChange={(e) => setSelectedPair(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {currencyPairs.map((pair) => (
                    <option key={pair} value={pair}>
                      {pair}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Initial Balance ($)
                </label>
                <input
                  type="number"
                  value={initialBalance}
                  onChange={(e) => setInitialBalance(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={handleRunBacktest}
                disabled={!selectedStrategy || isRunning}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Running...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Run Backtest
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Backtest Results */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Backtests</h2>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-1">
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Total Backtests</span>
                </div>
                <span className="text-2xl font-bold text-blue-900">{backtestResults.length}</span>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-900">Avg Return</span>
                </div>
                <span className="text-2xl font-bold text-green-900">
                  +{backtestResults
                    .filter(r => r.status === 'completed' && r.totalReturn)
                    .reduce((acc, r) => acc + parseFloat(r.totalReturn), 0)
                    .toFixed(1) / backtestResults.filter(r => r.status === 'completed').length || 0}%
                </span>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-1">
                  <Activity className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">Total Trades</span>
                </div>
                <span className="text-2xl font-bold text-purple-900">
                  {backtestResults
                    .filter(r => r.totalTrades)
                    .reduce((acc, r) => acc + r.totalTrades, 0)}
                </span>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="space-y-4">
            {backtestResults.map((result) => (
              <BacktestResult key={result.id} result={result} />
            ))}
          </div>

          {backtestResults.length === 0 && (
            <div className="text-center py-12">
              <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No backtests yet</h3>
              <p className="text-gray-600">Run your first backtest to see results here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}