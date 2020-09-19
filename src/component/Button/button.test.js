import React from 'react';
import { shallow, simulate } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../Utils/index';
import ShareButton from './index';

describe('ShareButton Component', () => {
  //check propTypes
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {},
      };
      const propsError = checkProps(ShareButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: mockFunc,
      };
      wrapper = shallow(<ShareButton {...props} />);
    });

    it('should render abutton', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });

    it('should emit callback onClick event', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
