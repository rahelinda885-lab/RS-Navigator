import React from 'react';
import { MOCK_ASSETS } from '../constants';
import { Calculator, MapPin, CalendarClock } from 'lucide-react';

const FixedAssets: React.FC = () => {
  return (
    <div className="space-y-6">
       <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Manajemen Aset Tetap</h2>
          <p className="text-slate-500">Pelacakan aset medis, non-medis, dan depresiasi otomatis</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_ASSETS.map(asset => {
            const depreciationPercentage = 100 - ((asset.currentBookValue / asset.acquisitionCost) * 100);
            return (
                <div key={asset.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded">{asset.id}</span>
                            <h3 className="text-lg font-bold text-slate-800 mt-2">{asset.name}</h3>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-slate-400">Nilai Buku Saat Ini</p>
                            <p className="text-lg font-bold text-primary">
                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(asset.currentBookValue)}
                            </p>
                        </div>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-2.5 mb-4">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${100-depreciationPercentage}%` }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 mb-6">
                        <span>Terdepresiasi: {depreciationPercentage.toFixed(1)}%</span>
                        <span>Sisa Umur: {Math.floor(asset.usefulLifeYears * (100 - depreciationPercentage) / 100)} Tahun</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm border-t border-slate-100 pt-4">
                        <div className="flex items-center gap-2 text-slate-600">
                            <CalendarClock className="h-4 w-4 text-slate-400" />
                            <span>Beli: {asset.acquisitionDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                            <MapPin className="h-4 w-4 text-slate-400" />
                            <span>{asset.location}</span>
                        </div>
                        <div className="col-span-2 flex items-center gap-2 text-slate-600">
                            <Calculator className="h-4 w-4 text-slate-400" />
                            <span>Biaya Perolehan: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(asset.acquisitionCost)}</span>
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default FixedAssets;
