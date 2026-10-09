import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../constants/colors';
import UserTabs from './UserTabs';
import AboutScreen from '../screens/user/AboutScreen';
import TermsPrivacyScreen from '../screens/user/TermsPrivacyScreen';

const Stack = createNativeStackNavigator();

// Bottom tabs at the root, with detail pages pushed on top of them.
export default function UserStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.primary,
        headerTitleStyle: { color: colors.text, fontWeight: '700' },
        headerShadowVisible: false,
        headerStyle: { backgroundColor: colors.surface },
        headerBackButtonDisplayMode: 'minimal',
      }}
    >
      <Stack.Screen name="Tabs" component={UserTabs} options={{ headerShown: false }} />
      <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About Hamara Local' }} />
      <Stack.Screen name="TermsPrivacy" component={TermsPrivacyScreen} options={{ title: 'Terms & Privacy' }} />
    </Stack.Navigator>
  );
}
