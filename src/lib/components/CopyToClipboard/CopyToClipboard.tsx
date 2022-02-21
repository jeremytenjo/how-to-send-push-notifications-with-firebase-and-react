import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { CopyToClipboard as ReactCopyToClipboard } from 'react-copy-to-clipboard'

import Tooltip from '../Tooltip/Tooltip'

type CopyToClipboardProps = {
  children?: any
  text?: string
  onCopy?: (text: string) => string
  tooltip?: any
  sx?: object
}

/**
 * {@link https://github.com/nkbt/react-copy-to-clipboard#usage|Docs}
 * @example
 *  <CopyToClipboard text={props.text} onCopy={onCopy}>
        Copy this text
      </CopyToClipboard>
 */
export default function CopyToClipboard({
  children,
  text,
  onCopy = () => '',
  tooltip = 'Copy to clipboard',
  sx = {},
}: CopyToClipboardProps) {
  const [tooltipText, setTooltipText] = useState('')
  const [showTooltip, setShowTooltip] = useState(false)

  const handleCopy = (text) => {
    setTooltipText('Copied to clipboard!')
    onCopy(text)
  }

  const onMouseEnter = () => {
    setShowTooltip(true)
    setTooltipText(tooltip)
  }

  return (
    <Box
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => setShowTooltip(false)}
      sx={{ cursor: 'pointer', width: 'fit-content', ...sx }}
    >
      <Tooltip text={tooltipText} visible={showTooltip}>
        <ReactCopyToClipboard text={text} onCopy={handleCopy}>
          {children}
        </ReactCopyToClipboard>
      </Tooltip>
    </Box>
  )
}
