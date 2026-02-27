import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ChefHat } from 'lucide-react';

interface AppLogoProps {
  size?: 'small' | 'medium';
}

export default function AppLogo({ size = 'medium' }: AppLogoProps) {
  const iconSize = size === 'small' ? 26 : 32;
  const textSize = size === 'small' ? '1rem' : '1.15rem';

  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <Box
        sx={{
          width: iconSize,
          height: iconSize,
          borderRadius: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0059B3 0%, #003d7a 100%)',
          flexShrink: 0,
          color: '#fff',
        }}
      >
        <ChefHat size={size === 'small' ? 16 : 20} strokeWidth={2} />
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: textSize,
          color: 'text.primary',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        DineFlow
      </Typography>
    </Stack>
  );
}
