import App from '../containers/app';
import { shallow } from 'enzyme';
import { findByDataAttr, checkProps } from '../../test/testUtils';

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

test('renders without error', () => {
  const wrapper = setup({ success: false });
  const component = findByDataAttr(wrapper, 'component-app');
  expect(component.exists()).toBe(true);
});

test('does not throw warnings with expected props', () => {
  const expectedProps = { success: false };
  checkProps(App, expectedProps);
});
