import { NextRequest, NextResponse } from 'next/server';
import { User } from '@/types/auth';

interface MockUser extends User {
  password: string;
}

const mockUsers: MockUser[] = [
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

interface LoginRequest {
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    let body: LoginRequest;
    
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { message: 'Invalid JSON format' },
        { status: 400 }
      );
    }

    const { email, password } = body;

    if (!email?.trim() || !password?.trim()) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    const user = mockUsers.find(u => 
      u.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (!user || user.password !== password) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const token = `mock-jwt-token-${user.id}-${Date.now()}`;
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      message: 'Login successful',
      token,
      user: userWithoutPassword,
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}