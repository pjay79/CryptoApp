import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../app/components/Header';

it('Header renders correctly', () => {
  const tree = renderer.create(<Header title="TEST" />);
  expect(tree).toMatchSnapshot();
});
