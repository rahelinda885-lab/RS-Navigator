import React from 'react';
import { MOCK_INVENTORY } from '../constants';
import { AlertTriangle, CheckCircle, PackageSearch } from 'lucide-react';

const Inventory: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Manajemen Inventaris & Farmasi</h2>
          <p className="text-slate-500">Kontrol stok, pelacakan batch, dan kadaluwarsa obat</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white shadow-lg shadow-emerald-200">
            <h3 className="font-semibold text-emerald-50 mb-1">Total Nilai Persediaan</h3>
            <p className="text-3xl font-bold">Rp 2.4 M</p>
            <p className="text-xs text-emerald-100 mt-2 opacity-80">Update Real-time</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
             <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <h3 className="font-semibold text-slate-700">Peringatan Stok Menipis</h3>
             </div>
             <p className="text-2xl font-bold text-slate-800">12 <span className="text-sm font-normal text-slate-500">Item</span></p>
             <button className="text-sm text-primary mt-2 hover:underline">Lihat Item</button>
        </div>
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
             <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="h-5 w-5 text-rose-500" />
                <h3 className="font-semibold text-slate-700">Kedaluwarsa {'<'} 90 Hari</h3>
             </div>
             <p className="text-2xl font-bold text-slate-800">5 <span className="text-sm font-normal text-slate-500">Batch</span></p>
             <button className="text-sm text-primary mt-2 hover:underline">Tindakan Diperlukan</button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
            <PackageSearch className="h-5 w-5 text-slate-400" />
            <h3 className="font-semibold text-slate-700">Daftar Inventaris</h3>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                    <tr>
                        <th className="px-6 py-4">Kode Item</th>
                        <th className="px-6 py-4">Nama Barang</th>
                        <th className="px-6 py-4">Kategori</th>
                        <th className="px-6 py-4">Batch No.</th>
                        <th className="px-6 py-4">Exp. Date</th>
                        <th className="px-6 py-4 text-right">Stok</th>
                        <th className="px-6 py-4 text-right">Nilai Satuan</th>
                        <th className="px-6 py-4">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {MOCK_INVENTORY.map(item => (
                        <tr key={item.id} className="hover:bg-slate-50">
                            <td className="px-6 py-4 font-mono text-xs text-slate-500">{item.id}</td>
                            <td className="px-6 py-4 font-medium text-slate-800">{item.name}</td>
                            <td className="px-6 py-4">{item.category}</td>
                            <td className="px-6 py-4 font-mono text-xs">{item.batchNumber}</td>
                            <td className="px-6 py-4 text-slate-600">{item.expiryDate}</td>
                            <td className="px-6 py-4 text-right font-medium">{item.stock} {item.unit}</td>
                            <td className="px-6 py-4 text-right text-slate-600">
                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(item.unitCost)}
                            </td>
                            <td className="px-6 py-4">
                                {item.status === 'Aman' && <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full"><CheckCircle className="h-3 w-3"/> Aman</span>}
                                {item.status === 'Menipis' && <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full"><AlertTriangle className="h-3 w-3"/> Menipis</span>}
                                {item.status === 'Expired' && <span className="inline-flex items-center gap-1 text-xs font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded-full"><AlertTriangle className="h-3 w-3"/> Expired</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
