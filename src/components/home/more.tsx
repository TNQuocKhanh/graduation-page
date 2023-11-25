import { FC } from 'react'
import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import MapIcon from '@mui/icons-material/Map';
import SchoolIcon from '@mui/icons-material/School';

const MoreInfo: FC = () => {
  return (
    <>
      <Box id="more" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 2, pb: { xs: 2, md: 4 } }}>
        <Container>
          <Box
            sx={{
              textAlign: { xs: 'center', md: 'center' },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 6}}>

              <MapIcon />
              &nbsp;
            <Typography variant="h2">
              MAP
            </Typography>
            </Box>
          </Box>
        </Container>
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Image src="/images/parking-map.png" width={600} height={600} alt="Hero img" />
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
        <Container>
          <Box
            sx={{
              textAlign: { xs: 'center', md: 'center' },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 6}}>

            <SchoolIcon />
            &nbsp;
            <Link
              href={
                'https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+S%C6%B0+ph%E1%BA%A1m+K%E1%BB%B9+thu%E1%BA%ADt+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.8506377,106.7693382,17z/data=!3m1!4b1!4m6!3m5!1s0x31752763f23816ab:0x282f711441b6916f!8m2!3d10.8506324!4d106.7719131!16s%2Fm%2F02pz17z?hl=vi-VN&entry=ttu'
              }
            >
              <Typography variant="h2" sx={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>
                HCMUTE
              </Typography>
            </Link>
            </Box>

          </Box>
        </Container>
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Image src="/images/hcmute-bg.jpeg" width={775} height={700} alt="Hero img" />
          </Box>
        </Container>
      </Box>
    </>
  )
}
export default MoreInfo
