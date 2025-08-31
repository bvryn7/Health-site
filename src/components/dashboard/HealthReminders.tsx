import { HealthReminder } from '@/types/medical';

const mockReminders: HealthReminder[] = [
  {
    id: '1',
    title: 'Annual Physical',
    description: 'Due: January 2025',
    dueDate: '2025-01-15',
    priority: 'high',
    status: 'pending'
  },
  {
    id: '2',
    title: 'Flu Vaccination',
    description: 'Recommended',
    dueDate: '2024-12-31',
    priority: 'medium',
    status: 'pending'
  },
  {
    id: '3',
    title: 'Mammogram',
    description: 'Completed: Nov 2024',
    dueDate: '2024-11-15',
    priority: 'low',
    status: 'completed'
  }
];

const priorityConfig = {
  high: 'bg-mayo-blue',
  medium: 'bg-yellow-500',
  low: 'bg-green-500'
};

export function HealthReminders() {
  return (
    <div className="mayo-card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Reminders</h3>
      <div className="space-y-3">
        {mockReminders.map((reminder) => (
          <div key={reminder.id} className="flex items-start">
            <div className={`flex-shrink-0 w-2 h-2 ${priorityConfig[reminder.priority]} rounded-full mt-2`} />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{reminder.title}</p>
              <p className="text-xs text-gray-600">{reminder.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}