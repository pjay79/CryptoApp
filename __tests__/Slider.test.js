import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Slider from '../app/components/Slider';

it('Slider renders correctly', () => {
  const tree = renderer.create(<Slider onSkip={() => console.log('SKIP')} onDone={() => console.log('DONE')} />);
  expect(tree).toMatchSnapshot();
});
