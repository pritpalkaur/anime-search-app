import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Drawer, Typography, Button } from '@mui/material';
import Sidebar from './components/Navigation/Sidebar';
import Login from './components/Pages/Login';
import Products from './components/Pages/Products';
import PrivateRoute from './components/Navigation/PrivateRoute';

function App() {
  return (
    <Box sx={{ display: 'flex' ,color: 'black'  }}>
      <Sidebar />
      <Routes>
        <Route path="/Login" element={<Login />} />
         <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      />

      </Routes>
    </Box>

  );
}

export default App;
