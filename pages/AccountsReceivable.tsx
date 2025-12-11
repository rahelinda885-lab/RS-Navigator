import React from 'react';
import { MOCK_INVOICES } from '../constants';
import { InvoiceStatus, PayerType } from '../types';
import { Filter, Search, FileCheck, AlertCircle } from 'lucide-react';

const AccountsReceivable: React.FC = () => {
  const getStatusColor = (status: InvoiceStatus) => {
    switch (status) {
      case InvoiceStatus.PAID: return 'bg-emerald-100 text-emerald-700';
      case InvoiceStatus.PENDING_CLAIM: return 'bg-blue-100 text-blue-700';
      case InvoiceStatus.DENIED: return 'bg-rose-100 text-rose-700';
      case InvoiceStatus.UNPAID: return 'bg-amber-100 text-amber-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Manajemen Piutang (AR)</h2>
          <p className="text-slate-500">Tracking klaim, penagihan, dan status pembayaran</p>
        </div>
        <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50">
                <Filter className="h-4 w-4" /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-teal-800">
                <FileCheck className="h-4 w-4" /> Buat Klaim Batch
            </button>
        </div>
      </div>

      {/* AR Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <AlertCircle className="h-6 w-6" />
              </div>
              <div>
                  <p className="text-sm text-slate-500">Klaim Pending BPJS</p>
                  <p className="text-xl font-bold">Rp 1.250.000.000</p>
              </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-center gap-4">
              <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
                  <AlertCircle className="h-6 w-6" />
              </div>
              <div>
                  <p className="text-sm text-slate-500">Piutang Pasien Umum</p>
                  <p className="text-xl font-bold">Rp 450.000.000</p>
              </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-200 flex items-center gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                  <FileCheck className="h-6 w-6" />
              </div>
              <div>
                  <p className="text-sm text-slate-500">Aging {'>'} 90 Hari</p>
                  <p className="text-xl font-bold">Rp 120.000.000</p>
              </div>
          </div>
      </div>

      {/* Invoice Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-semibold text-slate-700">Daftar Tagihan & Klaim Terakhir</h3>
            <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                    type="text" 
                    placeholder="Cari No. RM, Nama, atau ID Tagihan..." 
                    className="pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
                />
            </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">ID Tagihan</th>
                <th className="px-6 py-4">Pasien (MRN)</th>
                <th className="px-6 py-4">Tanggal</th>
                <th className="px-6 py-4">Unit Layanan</th>
                <th className="px-6 py-4">Penjamin</th>
                <th className="px-6 py-4 text-right">Jumlah</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_INVOICES.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-primary">{inv.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-800">{inv.patientName}</div>
                    <div className="text-xs text-slate-400">{inv.mrn}</div>
                  </td>
                  <td className="px-6 py-4">{inv.date}</td>
                  <td className="px-6 py-4">{inv.serviceUnit}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium border ${
                        inv.payerType === PayerType.BPJS ? 'bg-green-50 text-green-700 border-green-200' : 'bg-slate-50 text-slate-600 border-slate-200'
                    }`}>
                        {inv.payerType}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(inv.amount)}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(inv.status)}`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:text-teal-800 font-medium">Detail</button>
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

export default AccountsReceivable;
