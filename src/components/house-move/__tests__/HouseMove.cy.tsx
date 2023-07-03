import HouseMove from '../HouseMove';

import '~/styles/globals.css';
import 'tailwindcss/dist/tailwind.min.css'

describe('<HouseMove />', () => {
  it('should render correctly', () => {
    cy.mount(<HouseMove>Click me!</HouseMove>)
    cy.get('div').should('contains.text', 'Hello HouseMove')
  });
});
