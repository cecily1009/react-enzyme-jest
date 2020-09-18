import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from './../../../Utils';
import ListItem from './index';

const setUp = (props = {}) => {
  const component = shallow(<ListItem {...props} />);
  return component;
};

describe('ListItem component', () => {
  describe('checking propTypes', () => {
    it('should not throw a warining', () => {
      const expectedProps = {
        title: 'title 1',
        desc: 'example text',
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'title 1',
        desc: 'example text',
      };
      wrapper = setUp(props);
    });

    it('Should render without error', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });
    it('Should render title', () => {
      const title = findByTestAttr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });
    it('Should render content', () => {
      const content = findByTestAttr(wrapper, 'componentDesc');
      expect(content.length).toBe(1);
    });
  });

  describe('Should NOT render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Some text',
      };
      wrapper = setUp(props);
    });

    it('Component is not rendered', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
