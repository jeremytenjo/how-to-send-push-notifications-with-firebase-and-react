//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import useSnackbar, { SnackbarProvider } from '../Snackbar'

import Docs from './docs.mdx'

export default {
  title: 'lib/components/Snackbar',
  args: {},
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Provider = ({ children }) => {
  return <SnackbarProvider>{children}</SnackbarProvider>
}

const Child = () => {
  const snackbar = useSnackbar()

  const trigger = () => {
    snackbar.show({
      message: `This is a snackbar`,
    })
  }

  return (
    <div>
      <button onClick={trigger}>Show</button>
    </div>
  )
}

const Template = () => {
  return (
    <Provider>
      <Child />
    </Provider>
  )
}

export const Example = Template.bind({})
// Example.args = {}
