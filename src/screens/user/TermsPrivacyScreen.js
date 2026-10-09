import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import { LAST_UPDATED, privacyContent, termsContent } from '../../data/infoContent';
import InfoSection from '../../components/common/InfoSection';

const TABS = [
  { id: 'terms', label: 'Terms of Use', sections: termsContent },
  { id: 'privacy', label: 'Privacy Policy', sections: privacyContent },
];

export default function TermsPrivacyScreen() {
  const [tabId, setTabId] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === tabId);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.switcher}>
        {TABS.map((t) => {
          const active = t.id === tabId;
          return (
            <Pressable
              key={t.id}
              style={[styles.switchItem, active && styles.switchItemActive]}
              onPress={() => setTabId(t.id)}
              accessibilityRole="tab"
              accessibilityState={{ selected: active }}
            >
              <Text style={[styles.switchText, active && styles.switchTextActive]}>{t.label}</Text>
            </Pressable>
          );
        })}
      </View>

      <Text style={styles.updated}>Last updated {LAST_UPDATED}</Text>

      {tab.sections.map((section) => (
        <InfoSection key={section.title} section={section} />
      ))}

      <Text style={styles.footer}>Questions? Reach us anytime through Help & Support in the app.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  content: {
    paddingTop: 16,
    paddingBottom: 32,
  },
  switcher: {
    flexDirection: 'row',
    marginHorizontal: 16,
    padding: 4,
    borderRadius: 14,
    backgroundColor: colors.primaryTint,
  },
  switchItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  switchItemActive: {
    backgroundColor: colors.white,
  },
  switchText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textMuted,
  },
  switchTextActive: {
    color: colors.primary,
  },
  updated: {
    marginTop: 12,
    marginHorizontal: 20,
    fontSize: 13,
    color: colors.textMuted,
  },
  footer: {
    marginTop: 20,
    marginHorizontal: 24,
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 19,
    color: colors.textMuted,
  },
});
