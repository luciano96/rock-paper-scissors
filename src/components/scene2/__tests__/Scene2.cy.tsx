import Scene2 from '../Scene2';

import '~/styles/globals.css';
import 'tailwindcss/dist/tailwind.min.css'

describe('<Scene2 />', () => {
  it('should render correctly', () => {
    cy.mount(<Scene2>Click me!</Scene2>)
    cy.get('div').should('contains.text', 'Hello Scene2')
  });
});
