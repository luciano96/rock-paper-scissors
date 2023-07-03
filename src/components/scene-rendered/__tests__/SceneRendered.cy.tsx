import SceneRendered from '../SceneRendered';

import '~/styles/globals.css';
import 'tailwindcss/dist/tailwind.min.css'

describe('<SceneRendered />', () => {
  it('should render correctly', () => {
    cy.mount(<SceneRendered>Click me!</SceneRendered>)
    cy.get('div').should('contains.text', 'Hello SceneRendered')
  });
});
