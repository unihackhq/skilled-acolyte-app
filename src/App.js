import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text>Hello UNIHACK!</Text>;
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
});

AppRegistry.registerComponent('app', () => App);
