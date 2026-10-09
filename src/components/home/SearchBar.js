import { Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

export default function SearchBar({ value, onChangeText, placeholder, vegOnly, onToggleVeg }) {
  return (
    <View style={styles.row}>
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color={colors.textMuted} />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          returnKeyType="search"
        />
        {value ? (
          <Pressable onPress={() => onChangeText('')} hitSlop={8}>
            <Ionicons name="close-circle" size={18} color={colors.textMuted} />
          </Pressable>
        ) : null}
      </View>

      <View style={styles.vegToggle}>
        <Text style={styles.vegLabel}>VEG</Text>
        <Switch
          value={vegOnly}
          onValueChange={onToggleVeg}
          trackColor={{ false: colors.border, true: colors.primaryLight }}
          thumbColor={colors.white}
          style={styles.switch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    height: 46,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
  },
  vegToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 46,
    paddingLeft: 12,
    paddingRight: 4,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  vegLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.text,
  },
  switch: {
    transform: [{ scale: 0.85 }],
  },
});
