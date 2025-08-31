'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { AppointmentsList } from '@/components/dashboard/AppointmentsList';
import { TestResultsList } from '@/components/dashboard/TestResultsList';
import { ProfileSummary } from '@/components/dashboard/ProfileSummary';
import { HealthReminders } from '@/components/dashboard/HealthReminders';
import { EmergencyContact } from '@/components/dashboard/EmergencyContact';
import { AuthManager } from '@/lib/auth';
import { apiClient } from '@/lib/api';
import { User } from '@/types/auth';

export default function PatientDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      const token = AuthManager.getToken();
      
      if (!token) {
        AuthManager.redirectToLogin();
        return;
      }

      try {
        const response = await apiClient.verifyToken(token);
        setUser(response.user);
      } catch {
        AuthManager.redirectToLogin();
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-8">
        <div className="mayo-container">
          {/* Welcome Header */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome back, {user.firstName}
                </h1>
                <p className="text-gray-600 mt-1">
                  Patient ID: {user.patientId}
                </p>
              </div>
              <button
                onClick={AuthManager.logout}
                className="mayo-button-outline"
              >
                Sign Out
              </button>
            </div>
          </div>

          <QuickActions />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <AppointmentsList />
              <TestResultsList />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ProfileSummary user={user} />
              <HealthReminders />
              <EmergencyContact />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}