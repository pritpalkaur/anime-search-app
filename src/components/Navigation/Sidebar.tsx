// src/components/Navigation/Sidebar.tsx
import { Box, Drawer, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();

  return (
<Drawer
  variant="permanent"
  anchor="left"
  sx={{
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 240,
      boxSizing: 'border-box',
    },
  }}
>

      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Anime Search
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate('/login')} // ✅ Navigate to login
        >
          LOGIN
        </Button>
            <Link to="/products">Products</Link>

      
      </Box>
    </Drawer>
  );
};

export default Sidebar;