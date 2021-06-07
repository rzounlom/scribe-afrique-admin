import App from '../containers/app';
import { mount } from 'enzyme';
import { findByDataAttr, checkProps } from '../../test/testUtils';
import Root from '../../Root';

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return mount(
    <Root>
      <App {...setupProps} />
    </Root>
  );
};

test('renders without error', () => {
  const wrapper = setup({ success: false });
  const component = findByDataAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

test('does not throw warnings with expected props', () => {
  const expectedProps = { success: false };
  checkProps(App, expectedProps);
});
