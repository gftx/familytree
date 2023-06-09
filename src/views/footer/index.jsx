import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minWidth: '100vw',
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          minWidth: '100vw'
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary"  sx={{ textAlign: 'center' }}>
            {'Copyright © made by '}
            <Link color="inherit" target='_blank' href="https://github.com/gftx">
              Anton Ivanov
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}