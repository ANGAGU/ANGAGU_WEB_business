import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import CompanyQnATable from './index';

let container: HTMLElement;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
});

describe('CompanyQnATable Component', () => {
  it('renders component', () => {
    act(() => {
      render(<CompanyQnATable />, container);
    });
  });
});