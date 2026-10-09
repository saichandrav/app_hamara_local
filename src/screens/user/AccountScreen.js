import { Alert, Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';
import { currentUser } from '../../data/homeData';
import ProfileHeader from '../../components/profile/ProfileHeader';
import QuickActions from '../../components/profile/QuickActions';
import MenuSection from '../../components/profile/MenuSection';

const comingSoon = (feature) => () => Alert.alert(feature, 'This is coming soon.');

export default function AccountScreen({ navigation }) {
  const quickActions = [
    { id: 'orders', icon: 'receipt-outline', label: 'Orders', onPress: () => navigation.navigate('Orders') },
    { id: 'favourites', icon: 'heart-outline', label: 'Favourites', onPress: comingSoon('Favourites') },
    { id: 'help', icon: 'chatbubbles-outline', label: 'Help', onPress: comingSoon('Help & Support') },
  ];

  const accountItems = [
    { id: 'addresses', icon: 'location-outline', label: 'Saved addresses', subtitle: currentUser.address, onPress: comingSoon('Saved addresses') },
    { id: 'payments', icon: 'card-outline', label: 'Payment methods', subtitle: 'UPI, Cash on delivery', onPress: comingSoon('Payment methods') },
    { id: 'notifications', icon: 'notifications-outline', label: 'Notifications', onPress: comingSoon('Notifications') },
    { id: 'language', icon: 'language-outline', label: 'Language', subtitle: 'English', onPress: comingSoon('Language') },
  ];

  const partnerItems = [
    { id: 'store', icon: 'storefront-outline', label: 'List your store', subtitle: 'Sell to customers near you', onPress: comingSoon('List your store') },
    { id: 'delivery', icon: 'bicycle-outline', label: 'Become a delivery partner', subtitle: 'Earn on your own schedule', onPress: comingSoon('Delivery partner') },
  ];

  const moreItems = [
    { id: 'support', icon: 'help-circle-outline', label: 'Help & Support', onPress: comingSoon('Help & Support') },
    { id: 'about', icon: 'information-circle-outline', label: 'About Hamara Local', onPress: () => navigation.navigate('About') },
    { id: 'terms', icon: 'document-text-outline', label: 'Terms & Privacy', onPress: () => navigation.navigate('TermsPrivacy') },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Profile</Text>

        <ProfileHeader
          name={currentUser.name}
          phone={currentUser.phone}
          onEdit={comingSoon('Edit profile')}
        />

        <QuickActions actions={quickActions} />

        <MenuSection title="Account" items={accountItems} />
        <MenuSection title="Partner with us" items={partnerItems} />
        <MenuSection title="More" items={moreItems} />

        <Pressable style={styles.logout} onPress={comingSoon('Log out')}>
          <Ionicons name="log-out-outline" size={20} color={colors.offer} />
          <Text style={styles.logoutText}>Log out</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  content: {
    paddingBottom: 32,
  },
  pageTitle: {
    marginTop: 8,
    marginHorizontal: 16,
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 24,
    marginHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.offer,
  },
});
