import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../assets/images/Logo-1.png'
import Image from 'next/image'
function Footer() {
    return (
        <Box mt="80px" bgcolor="#ff3f4">
            <Stack gap='40px' alignItems="center" px="40px" pt="24px">
                <Image src={Logo} alt="logo" width="200px" height="40px" />
                <Typography variant="h5" mt="20px" pb="40px">
                    jjkcncsckcncnskcnkcnknckcns
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer
