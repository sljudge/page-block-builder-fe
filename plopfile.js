module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component/Component.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/Component/ComponentStory.js.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/Component/index.js.hbs'
      }
    ]
  });
  plop.setGenerator('block', {
    description: 'Create a page section block',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your block name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/blocks/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Block/Block.js.hbs'
      },
      {
        type: 'add',
        path: 'src/blocks/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/Block/Blockstory.js.hbs'
      },
      {
        type: 'add',
        path: 'src/blocks/{{pascalCase name}}/index.ts',
        templateFile: 'templates/Block/index.js.hbs'
      }
    ]
  });
};
