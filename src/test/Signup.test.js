import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Signup from '../components/Signup';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Signup component', () => {
  it('Renders component without crashing', () => {
    const wrapper = shallow(<Signup />);
    expect(wrapper).toBeTruthy();
  });
  
  it('Renders signup button', () => {
    const wrapper = shallow(<Signup />);
    const button = wrapper.find('[type="button"]');
    expect(button.length).toBe(1);
  });
})
