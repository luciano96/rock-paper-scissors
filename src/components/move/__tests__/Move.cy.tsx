import Move from '../Move';

import '~/styles/globals.css';
import 'tailwindcss/dist/tailwind.min.css'

describe('<Move />', () => {
  it('should render correctly', () => {
    cy.mount(<Move>Click me!</Move>)
    cy.get('div').should('contains.text', 'Hello Move')
  });
});
