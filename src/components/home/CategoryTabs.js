import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';

// The five top-level sections. Spread evenly across the full width.
export default function CategoryTabs({ categories, selectedId, onSelect }) {
  return (
    <View style={styles.container}>
      {categories.map((category) => {
        const selected = category.id === selectedId;
        return (
          <Pressable key={category.id} style={styles.tab} onPress={() => onSelect(category.id)}>
            <View style={[styles.iconCircle, selected && styles.iconCircleSelected]}>
              <Text style={styles.icon}>{category.icon}</Text>
            </View>
            <Text
              style={[styles.label, selected && styles.labelSelected]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {category.label}
            </Text>
            <View style={[styles.dot, selected && styles.dotSelected]} />
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingTop: 4,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircleSelected: {
    backgroundColor: colors.primaryTint,
    borderColor: colors.primary,
  },
  icon: {
    fontSize: 26,
  },
  label: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '500',
    color: colors.textMuted,
  },
  labelSelected: {
    color: colors.primary,
    fontWeight: '700',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginTop: 4,
    backgroundColor: 'transparent',
  },
  dotSelected: {
    backgroundColor: colors.primary,
  },
});
