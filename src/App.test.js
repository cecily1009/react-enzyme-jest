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

  it('updateState function should update state as expected', () => {
    const classInstance = wrapper.instance();
    classInstance.updateState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it('returnsVal function should increase num by 1', () => {
    const classInstance = wrapper.instance();

    const result = classInstance.returnsVal(3);
    expect(result).toBe(4);
  });
});
