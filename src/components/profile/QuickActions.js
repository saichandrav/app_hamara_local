import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

// Row of equal-width shortcut tiles, e.g. Orders / Favourites / Addresses.
export default function QuickActions({ actions }) {
  return (
    <View style={styles.row}>
      {actions.map((action) => (
        <Pressable key={action.id} style={styles.tile} onPress={action.onPress}>
          <Ionicons name={action.icon} size={24} color={colors.primary} />
          <Text style={styles.label}>{action.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
  },
  tile: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
});
