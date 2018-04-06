import React from 'react';
import App from './App';
import { shallow, mount, configure } from 'enzyme';
import { Button } from "react-native";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({
  adapter: new Adapter()
})

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  console.log(rendered.children[0].props.accessibilityComponentType);
  expect(rendered).toBeTruthy();
});
it('has a button', () => {
  const onPressSpy = jest.fn();
  const renderedComponent = mount(<Button onPress = {onPressSpy} title="Button" />);
  renderedComponent.find('button').first().props().onPress();
  console.log(renderedComponent);
  expect(onPressSpy).toHaveBeenCalled();
});
