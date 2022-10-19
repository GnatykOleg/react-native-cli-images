import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import ImagesList from './src/components/ImagesList';
import DetailImage from './src/components/DetailImage';

const MainStack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="ImagesList">
          <MainStack.Screen name="ImagesList" component={ImagesList} />
          <MainStack.Screen name="DetailImage" component={DetailImage} />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
