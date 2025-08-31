import Link from 'next/link';
import { User } from '@/types/auth';

interface ProfileSummaryProps {
  user: User;
}

export function ProfileSummary({ user }: ProfileSummaryProps) {
  const profileFields = [
    { label: 'Name', value: `${user.firstName} ${user.lastName}` },
    { label: 'Email', value: user.email },
    { label: 'Phone', value: user.phone },
    { 
      label: 'Date of Birth', 
      value: new Date(user.dateOfBirth).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    }
  ];

  return (
    <div className="mayo-card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h3>
      <div className="space-y-3">
        {profileFields.map((field, index) => (
          <div key={index}>
            <p className="text-sm text-gray-600">{field.label}</p>
            <p className="font-medium text-gray-900">{field.value}</p>
          </div>
        ))}
      </div>
      <Link 
        href="/patient-portal/profile" 
        className="inline-block mt-4 text-mayo-blue hover:text-mayo-blue-dark font-medium"
      >
        Edit Profile →
      </Link>
    </div>
  );
}