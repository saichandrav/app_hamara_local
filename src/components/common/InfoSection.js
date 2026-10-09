import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';

// A titled card of paragraphs and/or bullet points. Section: { title, body?, bullets? }.
export default function InfoSection({ section }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{section.title}</Text>
      {section.body?.map((text) => (
        <Text key={text} style={styles.body}>
          {text}
        </Text>
      ))}
      {section.bullets?.map((text) => (
        <View key={text} style={styles.bulletRow}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={[styles.body, styles.bulletText]}>{text}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 12,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  body: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 21,
    color: colors.textMuted,
  },
  bulletRow: {
    flexDirection: 'row',
  },
  bulletDot: {
    marginTop: 8,
    width: 16,
    fontSize: 14,
    lineHeight: 21,
    color: colors.primary,
  },
  bulletText: {
    flex: 1,
  },
});
