import React from 'react'
import Box from '@mui/material/Box'

import Link from '../Link/Link'

export default function LinkToPortfolio() {
  return (
    <Wrapper>
      💫 Find more tutorials at{' '}
      <Link
        href='https://jeremytenjo.com/tutorials'
        newTab
        sx={{
          color: 'primary.main',
        }}
      >
        jeremytenjo.com
      </Link>
    </Wrapper>
  )
}

const Wrapper = ({ children }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        fontSize: '14px',
      }}
    >
      {children}
    </Box>
  )
}
