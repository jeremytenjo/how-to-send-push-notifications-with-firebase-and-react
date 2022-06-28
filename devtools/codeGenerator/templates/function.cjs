// https://github.com/jeremytenjo/super-code-generator/tree/master#component-type-properties
const files = [
  {
    path: ({ name }) => `${name}.ts`,
    template: ({ name, helpers }) => `type ${helpers.changeCase.capitalCase(
      name
    )}Props = {name: string}
    
    export default function ${name}({name}: ${helpers.changeCase.capitalCase(
      name
    )}Props) {}`,
  },
];

const template = {
  type: "Function",
  files,
};

module.exports = {
  files,
  template,
};
