import { NextRequest, NextResponse } from 'next/server';
import { User, RegisterData } from '@/types/auth';

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

function validateRegistrationData(data: RegisterData): string | null {
  const { email, password, firstName, lastName, dateOfBirth, phone } = data;

  if (!email?.trim() || !password?.trim() || !firstName?.trim() || 
      !lastName?.trim() || !dateOfBirth?.trim() || !phone?.trim()) {
    return 'All fields are required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address';
  }

  if (password.length < 8) {
    return 'Password must be at least 8 characters long';
  }

  if (!/^[a-zA-Z\s'-]{2,30}$/.test(firstName.trim())) {
    return 'First name must be 2-30 characters and contain only letters, spaces, hyphens, and apostrophes';
  }

  if (!/^[a-zA-Z\s'-]{2,30}$/.test(lastName.trim())) {
    return 'Last name must be 2-30 characters and contain only letters, spaces, hyphens, and apostrophes';
  }

  const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dobRegex.test(dateOfBirth)) {
    return 'Date of birth must be in YYYY-MM-DD format';
  }

  const dobDate = new Date(dateOfBirth);
  const now = new Date();
  const minAge = new Date(now.getFullYear() - 120, now.getMonth(), now.getDate());
  const maxAge = new Date(now.getFullYear() - 13, now.getMonth(), now.getDate());

  if (dobDate > maxAge || dobDate < minAge) {
    return 'Please enter a valid date of birth (must be at least 13 years old)';
  }

  const phoneRegex = /^[\d\s\-\(\)\+]{10,15}$/;
  if (!phoneRegex.test(phone.trim())) {
    return 'Please enter a valid phone number';
  }

  return null;
}

export async function POST(request: NextRequest) {
  try {
    let body: RegisterData;
    
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { message: 'Invalid JSON format' },
        { status: 400 }
      );
    }

    const validationError = validateRegistrationData(body);
    if (validationError) {
      return NextResponse.json(
        { message: validationError },
        { status: 400 }
      );
    }

    const { email, password, firstName, lastName, dateOfBirth, phone } = body;

    const existingUser = mockUsers.find(u => 
      u.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (existingUser) {
      return NextResponse.json(
        { message: 'An account with this email already exists' },
        { status: 409 }
      );
    }

    const newUserId = Math.max(...mockUsers.map(u => u.id), 0) + 1;
    const newPatientId = `PT${String(newUserId).padStart(3, '0')}`;

    const newUser: MockUser = {
      id: newUserId,
      email: email.trim().toLowerCase(),
      password: password.trim(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      dateOfBirth: dateOfBirth.trim(),
      phone: phone.trim(),
      patientId: newPatientId,
    };

    mockUsers.push(newUser);

    const token = `mock-jwt-token-${newUser.id}-${Date.now()}`;
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json({
      message: 'Registration successful',
      token,
      user: userWithoutPassword,
    }, { status: 201 });

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}