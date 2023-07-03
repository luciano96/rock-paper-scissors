/* eslint-disable */
import type { NodePlopAPI } from "plop";

const templatesPath = "generators/templates/hook.ts.hbs";
export default (plop: NodePlopAPI) => {
  plop.setGenerator("hook", {
    description: "Generate a custom hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Hook name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}.ts",
        templateFile: `${templatesPath}`,
      },
    ],
  });
};
