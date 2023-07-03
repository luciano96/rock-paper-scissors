import Scene1 from '../Scene1';

import '~/styles/globals.css';
import 'tailwindcss/dist/tailwind.min.css'

describe('<Scene1 />', () => {
  it('should render correctly', () => {
    cy.mount(<Scene1>Click me!</Scene1>)
    cy.get('div').should('contains.text', 'Hello Scene1')
  });
});
