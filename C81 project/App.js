import * as React from 'react';
import { NavigationContainer } from '@react-navigation/bottom-tabs';

import DrawerNavigator from './navigation/drawer';

export default function App() {
  return (
    <NavigationContainer>
     <DrawerNavigator/>
    </NavigationContainer>
  );
}
