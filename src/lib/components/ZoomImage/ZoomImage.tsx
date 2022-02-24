import React from 'react'
import Box from '@mui/material/Box'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export type ZoomImageProps = {
  src: string
  alt: string
  loading?: 'eager' | 'lazy' | undefined
  sx?: object
}

export default function ZoomImage({
  src,
  alt,
  loading = 'lazy',
  sx = {},
}: ZoomImageProps) {
  return (
    <Wrapper>
      <Zoom>
        <Box
          component='img'
          src={src}
          alt={alt}
          loading={loading}
          sx={{
            ...sx,
          }}
        />
      </Zoom>
    </Wrapper>
  )
}

const Wrapper = ({ children }) => {
  return <Box>{children}</Box>
}
