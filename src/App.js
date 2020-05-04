import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import StackNavigator from './screens/navigator/StackNavigator';

class App extends React.Component {

  render() {
    return (
      <PaperProvider>
        <StackNavigator />
      </PaperProvider>
    );
  }
};

export default App
