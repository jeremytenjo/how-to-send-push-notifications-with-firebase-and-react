//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import TextField from '../TextField'

import Docs from './docs.mdx'

export default {
  title: 'lib/components/Forms/TextField',
  args: {},
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Template = (args) => {
  return <TextField {...args} />
}

export const Example = Template.bind({})
// Example.args = {}
