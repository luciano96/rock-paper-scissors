/* eslint-disable */
import type { NodePlopAPI } from 'plop';

const destinationPath = 'src/components/{{kebabCase componentName}}';
const templatesPath = 'generators/templates';
const componentTemplatesPath = `${templatesPath}/component`;

export default (plop: NodePlopAPI) => {
    plop.setGenerator('component', {
        description: 'Create a new component',
        prompts: [
            {
                type: 'input',
                name: 'componentName',
                message: 'What is the name of the component?',
            },
        ],
        actions: () => [
            {
                type: 'add',
                path: `${destinationPath}/{{pascalCase componentName}}.tsx`,
                templateFile: `${componentTemplatesPath}/component.tsx.hbs`,
            },
            {
                type: 'add',
                path: `${destinationPath}/index.ts`,
                templateFile: `${componentTemplatesPath}/index.ts.hbs`,
            },
            {
                type: 'add',
                path: `${destinationPath}/{{pascalCase componentName}}.types.ts`,
                templateFile: `${componentTemplatesPath}/types.ts.hbs`,
            },
            {
                type: 'add',
                path: `${destinationPath}/__tests__/{{pascalCase componentName}}.cy.tsx`,
                templateFile: `${componentTemplatesPath}/test.tsx.hbs`,
            },
        ],
    });
};
