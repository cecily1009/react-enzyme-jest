import { shallow } from 'enzyme';
import App from './App';
import { testStore, findByTestAttr } from './../Utils';
import React from 'react';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();

  return wrapper;
};

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Example title1',
          body: 'Some text',
        },
        {
          title: 'Example title2',
          body: 'Some text',
        },
        {
          title: 'Example title3',
          body: 'Some text',
        },
      ],
    };
    wrapper = setUp(initialState);
  });
  it('Should render without error', () => {
    const component = findByTestAttr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });
});