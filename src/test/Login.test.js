import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Login from '../components/Login';

Enzyme.configure({ adapter: new EnzymeAdapter() });


describe('Login component', () => {
  let wrapper;
  const login = jest.fn();
  const setup = () => shallow(<Login onSubmit={login} />);
  const findByAttr = (wrapper, val) => wrapper.find(val);

  beforeEach(() => {
    wrapper = setup();
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders email input', () => {
    const input = findByAttr(wrapper, '#email');
    expect(input.length).toBe(1);
  });
  
  it('renders password input', () => {
    const input = findByAttr(wrapper, '#password');
    expect(input.length).toBe(1);
  });

  it('renders submit button', () => {
    const button = findByAttr(wrapper, '[type="submit"]');
    expect(button.length).toBe(1);
  });
});
