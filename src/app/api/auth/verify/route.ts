import { NextRequest, NextResponse } from 'next/server';

const mockUsers = [
  {
    id: 1,
    email: 'patient@example.com',
    password: 'password123',
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1985-06-15',
    phone: '555-123-4567',
    patientId: 'PT001',
  },
  {
    id: 2,
    email: 'jane.smith@example.com',
    password: 'secure456',
    firstName: 'Jane',
    lastName: 'Smith',
    dateOfBirth: '1990-03-22',
    phone: '555-987-6543',
    patientId: 'PT002',
  },
];

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { message: 'No token provided' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const tokenMatch = token.match(/mock-jwt-token-(\d+)-/);
    
    if (!tokenMatch) {
      return NextResponse.json(
        { message: 'Invalid token format' },
        { status: 401 }
      );
    }

    const userId = parseInt(tokenMatch[1]);
    const user = mockUsers.find(u => u.id === userId);

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      );
    }

    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      valid: true,
      user: userWithoutPassword,
    });

  } catch {
    return NextResponse.json(
      { message: 'Token verification failed' },
      { status: 401 }
    );
  }
}