import React from 'react'
import { ComponentMeta } from '@storybook/react'

import HomePage from '../HomePage'

import Docs from './docs'

export default {
  title: 'Pages/Home Page',
  component: HomePage,
  args: {},
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: () => <Docs />,
    },
  },
} as ComponentMeta<typeof HomePage>

const Template = (args) => {
  return (
    <>
      <HomePage {...args} />
    </>
  )
}

export const Example = Template.bind({})
