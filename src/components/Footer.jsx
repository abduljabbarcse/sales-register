import { 
  Box, 
  Typography, 
  Divider, 
  Link, 
  IconButton, 
  Container,
  Grid,
  useMediaQuery,
  TextField
} from '@mui/material';
import { 
  Facebook, 
  Twitter, 
  Instagram,
  Email,
  Phone,
  LocationOn 
} from '@mui/icons-material';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ 
      bgcolor: '#556B2F', 
      color: 'white',
      py: 4,
      px: 2,
      mt: 'auto'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Olive Finance
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Simplifying financial management for small businesses with intuitive tools and insights.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Quick Links
              </Typography>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1, opacity: 0.9 }}>Home</Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1, opacity: 0.9 }}>Features</Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1, opacity: 0.9 }}>Pricing</Link>
              <Link href="#" color="inherit" display="block" sx={{ opacity: 0.9 }}>FAQ</Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Contact Us
              </Typography>
              <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                <Email sx={{ mr: 1, fontSize: '1rem' }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  info@olivefinance.com
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                <Phone sx={{ mr: 1, fontSize: '1rem' }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box display="flex" alignItems="flex-start">
                <LocationOn sx={{ mr: 1, fontSize: '1rem', mt: 0.5 }} />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  123 Business Ave, Suite 100<br />
                  New York, NY 10001
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Connect With Us
              </Typography>
              <Box>
                <IconButton color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                  <Facebook />
                </IconButton>
                <IconButton color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                  <Twitter />
                </IconButton>
                <IconButton color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}>
                  <Instagram />
                </IconButton>
              </Box>
              <Typography variant="body2" sx={{ mt: 2, opacity: 0.9 }}>
                Subscribe to our newsletter
              </Typography>
              {!isMobile && (
                <TextField 
                  variant="outlined" 
                  size="small" 
                  placeholder="Your email" 
                  sx={{ 
                    mt: 1,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                      '&:hover fieldset': { borderColor: 'white' },
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                      '&::placeholder': { color: 'rgba(255,255,255,0.7)' }
                    }
                  }}
                />
              )}
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.2)', my: 2 }} />
        
        <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} Olive Finance. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;