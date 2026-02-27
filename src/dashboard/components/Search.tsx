import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function Search() {
  return (
    <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search here"
        sx={{ flexGrow: 1, pr: 0.5 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'text.secondary' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                px: 0.8,
                py: 0.2,
                fontSize: '0.7rem',
                fontWeight: 500,
                lineHeight: 1.4,
                whiteSpace: 'nowrap',
              }}
            >
              ⌘+K
            </Typography>
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
  );
}
