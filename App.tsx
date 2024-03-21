import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SkiaFast } from './app/skia/SkiaFast';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Reanimated } from './app/reanimated/Reanimated';
import { ReanimatedJSON } from './app/reanimated-json/ReanimatedJSON';
import { WorkletAssign } from './app/use-worklet/WorkletAssign';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Skia"
          screenOptions={() => ({ unmountOnBlur: true })}>
          <Tab.Screen name="Skia" component={SkiaFast} />
          <Tab.Screen name="Reanimated" component={Reanimated} />
          <Tab.Screen name="Reanimated JSON" component={ReanimatedJSON} />
          <Tab.Screen name="Use Worklet" component={WorkletAssign} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
