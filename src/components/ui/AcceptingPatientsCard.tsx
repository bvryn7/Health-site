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
        gap: { xs: 0.5, sm: 1 },
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '2px solid rgba(107, 114, 128, 0.3)',
        px: { xs: 1.5, sm: 2, md: 3 },
        py: { xs: 1, sm: 1.2, md: 1.5 },
        borderRadius: 1,
        cursor: 'pointer',
        minWidth: 0, // Prevents flex item from growing
        flexShrink: 1, // Allows shrinking
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderColor: 'rgba(107, 114, 128, 0.4)'
        }
      }}
    >
      {/* Glowing green dot */}
      <Box 
        sx={{
          width: { xs: 6, sm: 8 },
          height: { xs: 6, sm: 8 },
          borderRadius: '50%',
          backgroundColor: '#10b981',
          position: 'relative',
          flexShrink: 0, // Prevents dot from shrinking
          '&::before': {
            content: '""',
            position: 'absolute',
            top: { xs: '-1.5px', sm: '-2px' },
            left: { xs: '-1.5px', sm: '-2px' },
            width: { xs: 9, sm: 12 },
            height: { xs: 9, sm: 12 },
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
          fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
          whiteSpace: { xs: 'nowrap', sm: 'normal' },
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          minWidth: 0, // Allows text to shrink
        }}
      >
        Accepting New Patients
      </Typography>
    </Box>
  );
};