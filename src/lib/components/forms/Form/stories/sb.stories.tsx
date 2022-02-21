//https://storybook.js.org/docs/react/writing-docs/docs-page
import React from 'react'

import Form from '../Form'
import Textfield from '../../fields/TextField/TextField'
import Select from '../../fields/Select/Select'

import Docs from './docs.mdx'

export default {
  title: 'lib/components/Forms/Form',
  args: {},
  // https://storybook.js.org/docs/react/writing-docs/docs-page#remixing-docspage-using-doc-blocks
  parameters: {
    docs: {
      page: Docs,
    },
  },
}

const Template = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  const options = [
    {
      label: 'Season 1',
      value: 1,
    },
  ]

  return (
    <Form onSubmit={onSubmit}>
      <Textfield name='test-textfield' />
      <Select label='Season' name='selected_season' options={options} />
    </Form>
  )
}

export const Example = Template.bind({})
// Example.args = {}
