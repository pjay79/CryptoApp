import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../app/components/Button';

it('Button renders correctly', () => {
  const tree = renderer.create(<Button title="TEST" onPress={() => console.log('BUTTON PRESSED')} />);
  expect(tree).toMatchSnapshot();
});
