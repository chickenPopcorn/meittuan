import React from 'react';
import { Text } from 'react-native';
import RootScene from './screens/RootScene';

export default class App extends React.Component {

  render() {

    return (
      <RootScene />

    );
  }

}
Text.defaultProps.style = { fontFamily: 'System' }