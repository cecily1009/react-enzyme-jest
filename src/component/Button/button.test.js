import { italics } from 'prop-types/lib/ReactPropTypesSecret';
import React from 'react';
import { findByTestAttr, checkProps } from './../../../Utils/index';
import ShareButton from './index';

describe('ShareButton Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: '() => {}',
      };
      const propsError = checkProps(ShareButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});
