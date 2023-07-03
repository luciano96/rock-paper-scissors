import type { NodePlopAPI } from "plop";

import { component, hook } from "./generators";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (plop: NodePlopAPI) {
  component(plop);
  hook(plop);
}
