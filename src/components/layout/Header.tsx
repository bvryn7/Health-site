'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { IconButton, AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { PersonOutline, Search, Menu, Close, Phone, Home, MedicalServices, Group, CalendarToday, PersonAdd, ContactMail } from '@mui/icons-material';
import { AcceptingPatientsCard } from '../ui/AcceptingPatientsCard';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { text: 'Home', href: '/', icon: <Home /> },
    { text: 'Services', href: '/services', icon: <MedicalServices /> },
    { text: 'Our Team', href: '/our-team', icon: <Group /> },
    { text: 'Patient Portal', href: '/patient-portal', icon: <PersonOutline /> },
    { text: 'Request Appointment', href: '/appointments', icon: <CalendarToday /> },
    { text: 'New Patients', href: '/new-patients', icon: <PersonAdd /> },
    { text: 'Contact', href: '/contact', icon: <ContactMail /> },
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
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1200px', mx: 'auto', width: '100%', py: 2, minHeight: '80px', px: { xs: 2, sm: 3 } }}>
        {/* Logo */}
        <Box
          component={Link}
          href="/"
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            '&:hover': { opacity: 0.8 }
          }}
        >
          <Box
            component="img"
            src="/a_plus_family_medicine.png" 
            alt="A+ Family Medicine Logo" 
            sx={{ 
              height: { xs: '50px', sm: '60px' }, 
              width: 'auto',
              maxWidth: { xs: '180px', sm: '250px' }
            }}
          />
        </Box>
        
        {/* Center content between logo and right items */}
        <Box sx={{ 
          display: { xs: 'none', sm: 'flex' }, 
          alignItems: 'center', 
          flex: { sm: 1 }, 
          justifyContent: 'center',
          mx: { sm: 2, md: 4 }
        }}>
          <AcceptingPatientsCard />
        </Box>

        {/* Navigation Items */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, sm: 3, md: 4 } }}>
          {/* Call Phone Number */}
          <Box 
            component="a"
            href="tel:616-285-6450"
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              backgroundColor: '#4A3B53',
              px: { xs: 2, sm: 3 },
              py: { xs: 1.2, sm: 1.5 },
              borderRadius: 1,
              cursor: 'pointer',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: '#3d3146'
              }
            }}
          >
            <Phone sx={{ color: 'white', fontSize: { xs: 18, sm: 20 } }} />
            <Typography
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                display: { xs: 'none', sm: 'block' }
              }}
            >
              Call 616-285-6450
            </Typography>
            <Typography
              sx={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                display: { xs: 'block', sm: 'none' }
              }}
            >
              Call
            </Typography>
          </Box>
          
          {/* Patient Portal */}
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
            <PersonOutline sx={{ mr: 1, fontSize: 24 }} />
            <Typography sx={{ fontSize: '1.1rem' }}>Patient Portal</Typography>
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
            <Box
              component="img"
              src="/a_plus_family_medicine.png"
              alt="A+ Family Medicine Logo"
              sx={{
                height: '40px',
                width: 'auto',
                maxWidth: '150px'
              }}
            />
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
                color: 'inherit',
                cursor: 'pointer'
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