import { Invoice, InvoiceStatus, PayerType, InventoryItem, Asset, FinancialMetric } from './types';
import { 
  LayoutDashboard, 
  Receipt, 
  Package, 
  Building2, 
  PieChart, 
  Stethoscope 
} from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Dashboard Eksekutif', icon: LayoutDashboard, path: '/' },
  { label: 'Manajemen Piutang (AR)', icon: Receipt, path: '/ar' },
  { label: 'Inventaris & Farmasi', icon: Package, path: '/inventory' },
  { label: 'Aset Tetap', icon: Building2, path: '/assets' },
  { label: 'Laporan Keuangan', icon: PieChart, path: '/reports' },
];

export const MOCK_INVOICES: Invoice[] = [
  { id: 'INV-2023-001', patientName: 'Budi Santoso', mrn: 'MR-9921', date: '2023-10-24', amount: 4500000, payerType: PayerType.BPJS, status: InvoiceStatus.PENDING_CLAIM, serviceUnit: 'Rawat Inap' },
  { id: 'INV-2023-002', patientName: 'Siti Aminah', mrn: 'MR-1102', date: '2023-10-25', amount: 120000, payerType: PayerType.PRIVATE, status: InvoiceStatus.PAID, serviceUnit: 'Farmasi' },
  { id: 'INV-2023-003', patientName: 'John Doe', mrn: 'MR-4432', date: '2023-10-25', amount: 15000000, payerType: PayerType.INSURANCE, status: InvoiceStatus.PENDING_CLAIM, serviceUnit: 'Bedah' },
  { id: 'INV-2023-004', patientName: 'Rina Wati', mrn: 'MR-3321', date: '2023-10-26', amount: 750000, payerType: PayerType.PRIVATE, status: InvoiceStatus.UNPAID, serviceUnit: 'Radiologi' },
  { id: 'INV-2023-005', patientName: 'Ahmad Dahlan', mrn: 'MR-8821', date: '2023-10-26', amount: 2500000, payerType: PayerType.BPJS, status: InvoiceStatus.DENIED, serviceUnit: 'Rawat Jalan' },
];

export const MOCK_INVENTORY: InventoryItem[] = [
  { id: 'DRG-001', name: 'Paracetamol 500mg', category: 'Obat', stock: 5000, unit: 'Tablet', batchNumber: 'BTC-992', expiryDate: '2025-12-01', unitCost: 500, status: 'Aman' },
  { id: 'DRG-002', name: 'Amoxicillin 500mg', category: 'Obat', stock: 120, unit: 'Tablet', batchNumber: 'BTC-112', expiryDate: '2023-11-15', unitCost: 1200, status: 'Menipis' },
  { id: 'MED-003', name: 'Spuit 5ml', category: 'Alkes', stock: 1000, unit: 'Pcs', batchNumber: 'BTC-555', expiryDate: '2026-01-01', unitCost: 2000, status: 'Aman' },
  { id: 'DRG-004', name: 'Ceftriaxone Inj', category: 'Obat', stock: 10, unit: 'Vial', batchNumber: 'BTC-331', expiryDate: '2023-10-01', unitCost: 25000, status: 'Expired' },
];

export const MOCK_ASSETS: Asset[] = [
  { id: 'AST-001', name: 'MRI Machine Siemens', acquisitionDate: '2020-01-15', acquisitionCost: 15000000000, usefulLifeYears: 10, currentBookValue: 9500000000, location: 'Radiologi' },
  { id: 'AST-002', name: 'Ambulance Toyota HiAce', acquisitionDate: '2021-06-10', acquisitionCost: 650000000, usefulLifeYears: 5, currentBookValue: 390000000, location: 'Logistik' },
  { id: 'AST-003', name: 'USG 4D Mindray', acquisitionDate: '2022-02-20', acquisitionCost: 800000000, usefulLifeYears: 8, currentBookValue: 650000000, location: 'Poli Kandungan' },
];

export const FINANCIAL_METRICS: FinancialMetric[] = [
  { label: 'Total Pendapatan (Accrual)', value: 4520000000, trend: 12.5, trendUp: true, description: 'Pendapatan diakui saat layanan diberikan.' },
  { label: 'Piutang Usaha (AR)', value: 1250000000, trend: 5.2, trendUp: false, description: 'Klaim BPJS & Asuransi menunggu bayar.' },
  { label: 'Arus Kas Operasional', value: 850000000, trend: 8.1, trendUp: true, description: 'Kas bersih dari aktivitas operasional.' },
  { label: 'Biaya Operasional', value: 2100000000, trend: -2.3, trendUp: true, description: 'Efisiensi biaya obat dan logistik.' },
];
