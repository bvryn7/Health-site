import { TestResult } from '@/types/medical';

const mockTestResults: TestResult[] = [
  {
    id: '1',
    testName: 'Complete Blood Count (CBC)',
    date: '2024-12-01',
    status: 'normal',
    category: 'lab'
  },
  {
    id: '2',
    testName: 'Lipid Panel',
    date: '2024-11-28',
    status: 'follow-up',
    category: 'lab'
  }
];

const statusConfig = {
  normal: {
    className: 'bg-green-100 text-green-800',
    label: 'Normal'
  },
  abnormal: {
    className: 'bg-red-100 text-red-800',
    label: 'Abnormal'
  },
  pending: {
    className: 'bg-gray-100 text-gray-800',
    label: 'Pending'
  },
  'follow-up': {
    className: 'bg-yellow-100 text-yellow-800',
    label: 'Follow-up'
  }
};

export function TestResultsList() {
  return (
    <div className="mayo-card p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Test Results</h2>
      <div className="space-y-4">
        {mockTestResults.map((result) => (
          <div
            key={result.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <p className="font-medium text-gray-900">{result.testName}</p>
              <p className="text-sm text-gray-600">
                {new Date(result.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
            <div className="flex items-center">
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusConfig[result.status].className}`}>
                {statusConfig[result.status].label}
              </span>
              <button className="ml-3 text-mayo-blue hover:text-mayo-blue-dark text-sm font-medium">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}