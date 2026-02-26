import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1400, mx: 'auto', width: '100%' }}>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        This page is under construction.
      </Typography>
    </Box>
  );
}
