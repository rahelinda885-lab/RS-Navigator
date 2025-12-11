// Financial & Operational Types

export enum PayerType {
  BPJS = 'BPJS Kesehatan',
  INSURANCE = 'Asuransi Swasta',
  PRIVATE = 'Pribadi/Umum',
  CORPORATE = 'Korporasi'
}

export enum InvoiceStatus {
  UNPAID = 'Belum Lunas',
  PARTIAL = 'Cicilan',
  PAID = 'Lunas',
  PENDING_CLAIM = 'Klaim Diproses',
  DENIED = 'Klaim Ditolak'
}

export interface Invoice {
  id: string;
  patientName: string;
  mrn: string; // Medical Record Number (Integration Key)
  date: string;
  amount: number;
  payerType: PayerType;
  status: InvoiceStatus;
  serviceUnit: string; // e.g., "IGD", "Rawat Inap"
}

export interface InventoryItem {
  id: string;
  name: string;
  category: 'Obat' | 'Alkes' | 'Bahan Habis Pakai';
  stock: number;
  unit: string;
  batchNumber: string;
  expiryDate: string;
  unitCost: number;
  status: 'Aman' | 'Menipis' | 'Expired';
}

export interface Asset {
  id: string;
  name: string;
  acquisitionDate: string;
  acquisitionCost: number;
  usefulLifeYears: number;
  currentBookValue: number;
  location: string;
}

export interface FinancialMetric {
  label: string;
  value: number;
  trend: number; // percentage
  trendUp: boolean; // is up good?
  description: string;
}

export interface NavItem {
  label: string;
  icon: any;
  path: string;
}
