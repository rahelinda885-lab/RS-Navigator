import React from 'react';
import { FileText, Download, Printer } from 'lucide-react';

const FinancialReports: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Laporan Keuangan</h2>
          <p className="text-slate-500">Neraca, Laba Rugi, dan Arus Kas (Standar SAK)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
              { title: 'Laporan Posisi Keuangan (Neraca)', desc: 'Aset, Liabilitas, dan Ekuitas per periode.' },
              { title: 'Laporan Laba Rugi Komprehensif', desc: 'Pendapatan operasional vs beban.' },
              { title: 'Laporan Arus Kas', desc: 'Aktivitas Operasi, Investasi, Pendanaan.' },
              { title: 'Analisis Rasio Keuangan', desc: 'Likuiditas, Solvabilitas, Rentabilitas.' },
              { title: 'Laporan Realisasi Anggaran', desc: 'Realisasi vs Target Anggaran Tahunan.' },
              { title: 'Catatan atas Laporan Keuangan', desc: 'Detail kebijakan akuntansi & penjelasan pos.' },
          ].map((report, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/50 hover:shadow-md transition-all group">
                  <div className="h-10 w-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <FileText className="h-5 w-5 text-slate-500 group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">{report.title}</h3>
                  <p className="text-sm text-slate-500 mb-6 min-h-[40px]">{report.desc}</p>
                  
                  <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">
                          <Printer className="h-4 w-4" /> Cetak
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-800 text-white rounded-lg text-sm font-medium hover:bg-slate-700">
                          <Download className="h-4 w-4" /> PDF
                      </button>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};

export default FinancialReports;
