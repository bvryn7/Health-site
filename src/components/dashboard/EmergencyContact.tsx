const emergencyContacts = [
  {
    type: 'Emergency',
    number: '911',
    className: 'font-semibold text-error'
  },
  {
    type: 'A+ Family Medicine',
    number: '(616) 285-6450',
    className: 'font-semibold'
  },
  {
    type: 'Patient Portal Support',
    number: 'support@aplusfamilymed.com',
    className: 'font-semibold'
  }
];

export function EmergencyContact() {
  return (
    <div className="mayo-card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
      <div className="space-y-3">
        {emergencyContacts.map((contact, index) => (
          <div key={index}>
            <p className={contact.className}>{contact.type}</p>
            {contact.type === 'Technical Support' ? (
              <a 
                href={`mailto:${contact.number}`}
                className="text-sm text-gray-600 hover:text-mayo-blue"
              >
                {contact.number}
              </a>
            ) : (
              <p className="text-sm text-gray-600">{contact.number}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}