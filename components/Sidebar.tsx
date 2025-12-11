import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, LogOut } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-slate-900 text-slate-50 min-h-screen fixed left-0 top-0 z-50">
      <div className="p-6 border-b border-slate-800 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg">
          <Activity className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight">SIA-SIMRS</h1>
          <p className="text-xs text-slate-400">IntegraCerdas v1.0</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800/50">
          <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold">
            AD
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium truncate">Admin Keuangan</p>
            <p className="text-xs text-slate-400 truncate">Finance Dept.</p>
          </div>
          <LogOut className="h-4 w-4 text-slate-400 cursor-pointer hover:text-white" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
