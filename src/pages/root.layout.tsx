import React from 'react'
import Box from '@mui/material/Box'

import { SnackbarProvider } from '../lib/components/Snackbar/Snackbar'
import LinkToPortfolio from '../lib/components/LinkToPortfolio/LinkToPortfolio'

export default function ShellLayout({ children }) {
  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      <SnackbarProvider>
        <main>{children}</main>
        <LinkToPortfolio />
      </SnackbarProvider>
    </Box>
  )
}
