import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Footer() {
  return (
    <Box sx={{ borderTop: 1, borderColor: 'grey.400', py: 2 }}>
      <Typography variant="body2" component="div" sx={{ textAlign: 'center' }}>
        Rrea Client 2（ React.js + TS + MUI ）- v1.0.0 BY lian
      </Typography>
    </Box>
  )
}
