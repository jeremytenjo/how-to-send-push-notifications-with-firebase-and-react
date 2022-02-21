import React from 'react'
import Box from '@mui/material/Box'

import Link from '../../Link/Link'

export type HeaderProps = { title: string; tutorialLink: string }

export default function Header({ title, tutorialLink }: HeaderProps) {
  const tutLink = `https://jeremytenjo.com/tutorials/${tutorialLink}`
  return (
    <Box component='header' sx={{ mb: '100px', textAlign: 'center' }}>
      <h1>{title}</h1>
      <Box>
        Follow tutorial {` `}
        <Link href={tutLink} newTab>
          here
        </Link>
      </Box>
    </Box>
  )
}
