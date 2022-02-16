export default function plop(
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  //create your generators here

  plop.setGenerator('create-store', {
    description: 'Creates Redux Toolkit & Saga Boilerplate',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message:
          'This will create file for slice, initialState, selector, types and saga',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/store/{{name}}/{{name}}.slice.ts',
        templateFile: '.plop-templates/redux.slice.hbs',
      },
      {
        type: 'add',
        path: 'src/store/{{name}}/{{name}}.saga.ts',
        templateFile: '.plop-templates/redux.saga.hbs',
      },
      {
        type: 'add',
        path: 'src/store/{{name}}/{{name}}.selector.ts',
        templateFile: '.plop-templates/redux.selector.hbs',
      },
      {
        type: 'add',
        path: 'src/store/{{name}}/{{name}}.types.ts',
        templateFile: '.plop-templates/redux.types.hbs',
      },
      {
        type: 'add',
        path: 'src/store/{{name}}/{{name}}.initialState.ts',
        templateFile: '.plop-templates/redux.initialState.hbs',
      },
    ],
  });

  plop.setGenerator('create-page', {
    description: 'Creates Next Page',
    prompts: [],
    actions: [],
  });

  plop.setGenerator('create-module', {
    description: 'Creates module component along with the styled.tsx',
    prompts: [],
    actions: [],
  });
}
