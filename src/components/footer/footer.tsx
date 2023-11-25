import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Footer: FC = () => {
  return (
    <Box
      id='footer'
      component="footer"
      sx={{ backgroundColor: 'aliceblue', py: { xs: 6, md: 2 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            mb: 2,
          }}
        >
          <Typography variant="h5" color="initial">
          Hope to see you
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            mb: 2,
          }}
        >
          <Typography variant="h5" color="initial">
            Copyright ©2023 CuteK aka QuocKhanh
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            mb: 2,
          }}
        >
          <Typography variant="h6" color="initial" sx={{fontStyle: 'italic'}}>
            Contact: 0966230556 
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
