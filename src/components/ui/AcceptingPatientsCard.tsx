'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

interface AcceptingPatientsCardProps {
  onClick?: () => void;
}

export const AcceptingPatientsCard: React.FC<AcceptingPatientsCardProps> = ({ onClick }) => {
  return (
    <Box 
      onClick={onClick}
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '2px solid rgba(107, 114, 128, 0.3)',
        px: 3,
        py: 1.5,
        borderRadius: 1,
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderColor: 'rgba(107, 114, 128, 0.4)'
        }
      }}
    >
      {/* Glowing green dot */}
      <Box 
        sx={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#10b981',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#10b981',
            opacity: 0.3,
            animation: 'pulse 2s infinite'
          }
        }}
      />
      <Typography
        sx={{
          color: '#6b7280',
          fontWeight: 'bold',
          fontSize: '1rem',
        }}
      >
        Accepting New Patients
      </Typography>
    </Box>
  );
};