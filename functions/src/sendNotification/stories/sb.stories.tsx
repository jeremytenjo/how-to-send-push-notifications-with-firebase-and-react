//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import FirebaseFunctionDashboard from '../../../../src/lib/components/firebase/FirebaseFunctionDashboard/FirebaseFunctionDashboard'

import Docs from './docs.mdx'

export default {
  title: 'functions/helloWorld',
  args: {},
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Template = () => {
  const payload = {
    name: 'Jeremy',
  }
  return <FirebaseFunctionDashboard functionName='helloWorld' payload={payload} />
}

export const Example = Template.bind({})
