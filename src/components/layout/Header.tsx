'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { IconButton, AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { PersonOutline, Search, Menu, Close } from '@mui/icons-material';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { text: 'Home', href: '/', icon: <Search /> },
    { text: 'Services', href: '/services', icon: <Search /> },
    { text: 'Our Team', href: '/our-team', icon: <PersonOutline /> },
    { text: 'Patient Portal', href: '/patient-portal', icon: <PersonOutline /> },
    { text: 'Request Appointment', href: '/appointments', icon: <Search /> },
    { text: 'New Patients', href: '/new-patients', icon: <PersonOutline /> },
    { text: 'Contact', href: '/contact', icon: <Search /> },
  ];

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        color: 'black'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1200px', mx: 'auto', width: '100%' }}>
        {/* Logo */}
        <Typography 
          variant="h6" 
          component={Link}
          href="/"
          sx={{ 
            fontWeight: 'bold',
            color: 'black',
            textDecoration: 'none',
            '&:hover': { color: '#4b5563' }
          }}
        >
          A+ Family Medicine
        </Typography>
        
        {/* Navigation Items */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          {/* Request Appointment */}
          <Typography
            component={Link}
            href="/appointments"
            sx={{
              color: 'black',
              textDecoration: 'none',
              fontWeight: 500,
              '&:hover': { color: '#4b5563' }
            }}
          >
            Request appointment
          </Typography>
          
          {/* Log in */}
          <Box 
            component={Link}
            href="/patient-portal"
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              color: 'black',
              textDecoration: 'none',
              '&:hover': { color: '#4b5563' }
            }}
          >
            <PersonOutline sx={{ mr: 1, fontSize: 20 }} />
            <Typography>Log in</Typography>
          </Box>
          
          {/* Search */}
          <IconButton sx={{ color: 'black', '&:hover': { color: '#4b5563' } }}>
            <Search />
          </IconButton>
          
          {/* Hamburger Menu */}
          <IconButton 
            sx={{ color: 'black', '&:hover': { color: '#4b5563' } }}
            onClick={handleMenuToggle}
          >
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMenuToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      >
        <Box sx={{ p: 2, borderBottom: '1px solid #e5e7eb' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              A+ Family Medicine
            </Typography>
            <IconButton onClick={handleMenuToggle} sx={{ color: 'black' }}>
              <Close />
            </IconButton>
          </Box>
        </Box>
        
        <List sx={{ pt: 0 }}>
          {menuItems.map((item, index) => (
            <ListItem 
              key={index}
              component={Link}
              href={item.href}
              onClick={handleMenuToggle}
              sx={{
                '&:hover': { backgroundColor: '#f3f4f6' },
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <ListItemIcon sx={{ color: 'black', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text}
                sx={{ 
                  '& .MuiTypography-root': { 
                    fontWeight: 500,
                    color: 'black'
                  }
                }}
              />
            </ListItem>
          ))}
        </List>
        
        <Box sx={{ mt: 'auto', p: 2, borderTop: '1px solid #e5e7eb' }}>
          <Typography variant="body2" sx={{ color: '#6b7280', textAlign: 'center' }}>
            Call us: (616) 285-6450
          </Typography>
        </Box>
      </Drawer>
    </AppBar>
  );
};