import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quotes';

test('Snapshot test for Quote component', () => {
  const component = renderer.create(<Quote />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('If it renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
