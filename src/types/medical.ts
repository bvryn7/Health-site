export interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  appointmentType: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface TestResult {
  id: string;
  testName: string;
  date: string;
  status: 'normal' | 'abnormal' | 'pending' | 'follow-up';
  category: 'lab' | 'imaging' | 'screening';
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  prescribedBy: string;
  startDate: string;
  endDate?: string;
  status: 'active' | 'completed' | 'discontinued';
}

export interface HealthReminder {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'completed' | 'overdue';
}