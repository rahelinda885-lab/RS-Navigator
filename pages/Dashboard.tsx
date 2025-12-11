import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  AreaChart, 
  Area 
} from 'recharts';
import { BrainCircuit, Sparkles, Loader2 } from 'lucide-react';
import { FINANCIAL_METRICS } from '../constants';
import { StatCard } from '../components/StatCard';
import { analyzeFinancialHealth } from '../services/geminiService';

const data = [
  { name: 'Jan', revenue: 4000, expense: 2400, amt: 2400 },
  { name: 'Feb', revenue: 3000, expense: 1398, amt: 2210 },
  { name: 'Mar', revenue: 2000, expense: 9800, amt: 2290 },
  { name: 'Apr', revenue: 2780, expense: 3908, amt: 2000 },
  { name: 'May', revenue: 1890, expense: 4800, amt: 2181 },
  { name: 'Jun', revenue: 2390, expense: 3800, amt: 2500 },
  { name: 'Jul', revenue: 3490, expense: 4300, amt: 2100 },
];

const Dashboard: React.FC = () => {
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateAnalysis = async () => {
    setIsLoading(true);
    const result = await analyzeFinancialHealth();
    setAiAnalysis(result);
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Dashboard Eksekutif</h2>
          <p className="text-slate-500">Ringkasan performa keuangan (Basis Akrual)</p>
        </div>
        <button 
          onClick={handleGenerateAnalysis}
          disabled={isLoading}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg disabled:opacity-70"
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
          {isLoading ? 'Menganalisis...' : 'Analisis AI Cerdas'}
        </button>
      </div>

      {/* AI Insight Panel */}
      {aiAnalysis && (
        <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-xl animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <BrainCircuit className="h-24 w-24 text-indigo-600" />
            </div>
            <h3 className="text-indigo-900 font-bold mb-3 flex items-center gap-2">
                <BrainCircuit className="h-5 w-5" />
                Analisis Keuangan Cerdas (IntegraCerdas AI)
            </h3>
            <div className="text-indigo-800 text-sm leading-relaxed whitespace-pre-line font-medium">
                {aiAnalysis}
            </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FINANCIAL_METRICS.map((metric, idx) => (
          <StatCard 
            key={idx}
            label={metric.label}
            value={metric.value}
            trend={metric.trend}
            trendUpIsGood={metric.trendUp}
            description={metric.description}
          />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue vs Expense */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Tren Pendapatan vs Beban</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={(val) => `${val/1000}M`} />
                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e2e8f0" />
                <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend />
                <Area type="monotone" dataKey="revenue" name="Pendapatan" stroke="#10b981" fillOpacity={1} fill="url(#colorRev)" strokeWidth={2} />
                <Area type="monotone" dataKey="expense" name="Beban" stroke="#ef4444" fillOpacity={1} fill="url(#colorExp)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Patient Volume / AR Aging Mock */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Komposisi Pendapatan per Unit</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                <Legend />
                <Bar dataKey="revenue" name="Rawat Inap" fill="#0f766e" radius={[4, 4, 0, 0]} />
                <Bar dataKey="amt" name="Rawat Jalan" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
