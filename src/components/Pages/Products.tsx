import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

interface Product {
  id: number;
  Name: string;
  Price: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<{ products: Product[] }>('http://127.0.0.1:8000/products')
      .then((res) => {
        console.log('Fetched products:', res.data.products);
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  const handleCreate = () => {
    console.log('Create button clicked');
    // TODO: Show modal or navigate to create form
  };

  const handleUpdate = (id: number) => {
    console.log('Update product:', id);
    // TODO: Show modal or navigate to update form
  };

  const handleDelete = (id: number) => {
    console.log('Delete product:', id);
    // TODO: Call DELETE endpoint and refresh list
  };

  return (
    <Box
      sx={{
        marginLeft: '240px',
        minHeight: '100vh',
        bgcolor: '#28149aff',
        p: 4,
      }}
    >
      <Typography variant="h4" gutterBottom color="white">
        Product List
      </Typography>

      <Button
        variant="contained"
        color="success"
        sx={{ mb: 2 }}
        onClick={handleCreate}
      >
        Create New Product
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price ($)</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.Name}</TableCell>
                <TableCell>{product.Price}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ mr: 1 }}
                    onClick={() => handleUpdate(product.id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Products;