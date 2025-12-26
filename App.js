import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FAF3F0' }}>
        <ActivityIndicator size="large" color="#EBC7E6" />
        <Text style={{ marginTop: 10, color: '#9CA986', fontStyle: 'italic' }}>Loading Magic... ✨</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#FAF3F0' },
          headerTintColor: '#5F4B4B',
          contentStyle: { backgroundColor: '#FAF3F0' },
          headerTitleStyle: { fontWeight: '300' }
        }}
      >
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Sanctuary 🦢' }} />
            <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Preferences 🌸' }} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}