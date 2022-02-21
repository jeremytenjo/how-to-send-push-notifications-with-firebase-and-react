//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'
import Alert from '@mui/material/Alert'

import Docs from './docs.mdx'

export default {
  title: 'lib/components/Alert',
  args: {
    children: 'Hello snackbar!',
  },
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Template = (args: any) => {
  return <Alert {...args} />
}

export const Example = Template.bind({})
// Example.args = {}
