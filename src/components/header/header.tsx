import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { Menu, Close } from '@mui/icons-material'
import Image from 'next/image'

const AuthNavigation: FC = () => {
  return (
    <Box sx={{ '& button:first-child': { mr: 2 } }}>
      <Image src="/images/hcmute.png" width={100} height={100} alt="Hero img" />
      &nbsp;&nbsp;&nbsp;
      <Image src="/images/fit.png" width={100} height={100} alt="Hero img" />
    </Box>
  )
}

const Header: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false)
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  return (
    <Box
      sx={{ backgroundColor: 'background.paper' }}
      style={{
        backgroundColor: 'aliceblue',
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        boxShadow: '0 3px 5px rgba(57, 63, 72, 0.3)',
      }}
    >
      <Container sx={{ py: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Image src="/images/myLogo.png" width={100} height={100} alt="Hero img" />
          <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
            <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
              <Menu />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },

              transition: (theme) => theme.transitions.create(['top']),
              ...(matchMobileView && {
                py: 6,
                backgroundColor: 'background.paper',
                zIndex: 'appBar',
                position: 'fixed',
                height: { xs: '100vh', md: 'auto' },
                top: visibleMenu ? 0 : '-120vh',
                left: 0,
              }),
            }}
          >
            <Box /> {/* Magic space */}
            <AuthNavigation />
            {visibleMenu && matchMobileView && (
              <IconButton
                sx={{
                  position: 'fixed',
                  top: 10,
                  right: 10,
                }}
                onClick={() => setVisibleMenu(!visibleMenu)}
              >
                <Close />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
