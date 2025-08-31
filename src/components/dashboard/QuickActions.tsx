interface QuickAction {
  icon: string;
  title: string;
  description: string;
  href: string;
}

const quickActions: QuickAction[] = [
  {
    icon: 'calendar_month',
    title: 'Schedule Appointment',
    description: 'Book your next visit',
    href: '/appointments/schedule'
  },
  {
    icon: 'assignment',
    title: 'Test Results',
    description: 'View recent results',
    href: '/patient-portal/results'
  },
  {
    icon: 'medication',
    title: 'Medications',
    description: 'Manage prescriptions',
    href: '/patient-portal/medications'
  },
  {
    icon: 'chat',
    title: 'Messages',
    description: 'Contact your care team',
    href: '/patient-portal/messages'
  }
];

export function QuickActions() {
  return (
    <div className="grid md:grid-cols-4 gap-6 mb-8">
      {quickActions.map((action, index) => (
        <a
          key={index}
          href={action.href}
          className="mayo-card p-6 hover:shadow-md transition-shadow cursor-pointer block"
        >
          <div className="w-12 h-12 bg-mayo-blue rounded-lg flex items-center justify-center text-white text-xl mb-4">
            <span className="material-symbols-outlined">{action.icon}</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
          <p className="text-sm text-gray-600">{action.description}</p>
        </a>
      ))}
    </div>
  );
}