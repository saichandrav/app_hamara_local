import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { colors } from '../../constants/colors';

export default function FilterChips({ filters, activeIds, onToggle }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {filters.map((filter) => {
        const active = activeIds.includes(filter.id);
        return (
          <Pressable
            key={filter.id}
            style={[styles.chip, active && styles.chipActive]}
            onPress={() => onToggle(filter.id)}
          >
            <Text style={[styles.label, active && styles.labelActive]}>{filter.label}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  chipActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryTint,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  labelActive: {
    color: colors.primary,
  },
});
