import Scene3 from '../Scene3';

import '~/styles/globals.css';
import 'tailwindcss/dist/tailwind.min.css'

describe('<Scene3 />', () => {
  it('should render correctly', () => {
    cy.mount(<Scene3>Click me!</Scene3>)
    cy.get('div').should('contains.text', 'Hello Scene4')
  });
});
