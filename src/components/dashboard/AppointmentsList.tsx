import Link from 'next/link';
import { Appointment } from '@/types/medical';

const mockAppointments: Appointment[] = [
  {
    id: '1',
    doctorName: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    appointmentType: 'Annual Checkup',
    date: '2024-12-15',
    time: '2:30 PM',
    status: 'upcoming'
  },
  {
    id: '2',
    doctorName: 'Dr. Michael Chen',
    specialty: 'Dermatology',
    appointmentType: 'Skin Check',
    date: '2024-12-22',
    time: '10:00 AM',
    status: 'upcoming'
  }
];

export function AppointmentsList() {
  return (
    <div className="mayo-card p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
      <div className="space-y-4">
        {mockAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <p className="font-medium text-gray-900">
                {appointment.doctorName} - {appointment.specialty}
              </p>
              <p className="text-sm text-gray-600">{appointment.appointmentType}</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">
                {new Date(appointment.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
              <p className="text-sm text-gray-600">{appointment.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <Link 
        href="/appointments/schedule" 
        className="inline-block mt-4 text-mayo-blue hover:text-mayo-blue-dark font-medium"
      >
        Schedule New Appointment →
      </Link>
    </div>
  );
}