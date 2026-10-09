import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import { aboutContent } from '../../data/infoContent';
import InfoSection from '../../components/common/InfoSection';
import { expo } from '../../../app.json';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="Hamara Local"
        />
        <Text style={styles.tagline}>{aboutContent.tagline}</Text>
      </View>

      {aboutContent.sections.map((section) => (
        <InfoSection key={section.title} section={section} />
      ))}

      <Text style={styles.version}>Version {expo.version}</Text>
    </ScrollView>
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
  hero: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 12,
  },
  logo: {
    width: 240,
    height: 32,
  },
  tagline: {
    marginTop: 10,
    fontSize: 14,
    color: colors.textMuted,
  },
  version: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 13,
    color: colors.textMuted,
  },
});
