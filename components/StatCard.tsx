import React from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: number;
  trend: number;
  trendUpIsGood: boolean;
  description: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, trend, trendUpIsGood, description }) => {
  const isPositiveTrend = trend > 0;
  const isGoodState = trendUpIsGood ? isPositiveTrend : !isPositiveTrend;
  
  const formattedValue = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
    notation: value > 1000000000 ? 'compact' : 'standard'
  }).format(value);

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">{label}</p>
          <h3 className="text-2xl font-bold text-slate-900">{formattedValue}</h3>
        </div>
        <div className={`p-2 rounded-lg ${isGoodState ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
          <TrendingUp className="h-5 w-5" />
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-xs">
        <span className={`flex items-center font-semibold ${isGoodState ? 'text-emerald-600' : 'text-rose-600'}`}>
          {isPositiveTrend ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
          {Math.abs(trend)}%
        </span>
        <span className="text-slate-400">vs bulan lalu</span>
      </div>
      <p className="text-xs text-slate-400 mt-2 border-t pt-2 border-slate-100">{description}</p>
    </div>
  );
};
