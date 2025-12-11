import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AccountsReceivable from './pages/AccountsReceivable';
import Inventory from './pages/Inventory';
import FixedAssets from './pages/FixedAssets';
import FinancialReports from './pages/FinancialReports';
import { Bell, Search } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      <Sidebar />
      <div className="flex-1 md:ml-64 flex flex-col transition-all duration-300">
        {/* Top Header */}
        <header className="bg-white h-16 border-b border-slate-200 sticky top-0 z-40 px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="md:hidden">
                    {/* Mobile menu trigger placeholder */}
                    <div className="h-8 w-8 bg-slate-200 rounded"></div>
                </div>
                <div className="hidden sm:flex relative">
                    <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                        type="text" 
                        placeholder="Global Search..." 
                        className="pl-9 pr-4 py-1.5 text-sm bg-slate-100 border-transparent focus:bg-white border focus:border-primary rounded-full transition-all w-64 focus:outline-none"
                    />
                </div>
            </div>
            
            <div className="flex items-center gap-4">
                <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-rose-500 rounded-full border border-white"></span>
                </button>
                <div className="h-8 w-8 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                    <img src="https://picsum.photos/100/100" alt="User" className="h-full w-full object-cover" />
                </div>
            </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-7xl mx-auto animate-fade-in-up">
                {children}
            </div>
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ar" element={<AccountsReceivable />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/assets" element={<FixedAssets />} />
          <Route path="/reports" element={<FinancialReports />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
