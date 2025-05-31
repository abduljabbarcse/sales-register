import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery 
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';

const Header = ({ user }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#556B2F', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Box display="flex" alignItems="center">
          <Avatar 
            src="https://picsum.photos/50/50?grayscale" 
            sx={{ 
              mr: 2, 
              bgcolor: 'white',
              width: 40,
              height: 40
            }} 
          />
          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            sx={{ 
              textDecoration: 'none', 
              color: 'white',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: isMobile ? '1.1rem' : '1.25rem'
            }}
          >
            Olive Finance
          </Typography>
        </Box>
        
        {user ? (
          isMobile ? (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => navigate('/dashboard')}>Dashboard</MenuItem>
                <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
                <MenuItem onClick={() => navigate('/logout')}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Box display="flex" alignItems="center">
              <Typography variant="subtitle1" sx={{ mr: 2, color: 'white' }}>
                {user.name.split(' ')[0]}
              </Typography>
              <Avatar sx={{ 
                bgcolor: 'white', 
                color: '#556B2F',
                width: 36,
                height: 36,
                mr: 2
              }}>
                {user.name.charAt(0).toUpperCase()}
              </Avatar>
            </Box>
          )
        ) : (
          <Box>
            <Button 
              color="inherit" 
              component={Link} 
              to="/login"
              size={isMobile ? 'small' : 'medium'}
              sx={{ 
                mr: 1,
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Login
            </Button>
            <Button 
              variant="outlined" 
              color="inherit"
              component={Link} 
              to="/register"
              size={isMobile ? 'small' : 'medium'}
              sx={{
                borderColor: 'white',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Register
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;