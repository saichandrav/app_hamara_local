import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

export default function LocationHeader({ name, address, onPressLocation, onPressMenu }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.location} onPress={onPressLocation}>
        <View style={styles.nameRow}>
          <Ionicons name="location-sharp" size={18} color={colors.primary} />
          <Text style={styles.name}>{name}</Text>
          <Ionicons name="chevron-down" size={16} color={colors.text} />
        </View>
        <Text style={styles.address} numberOfLines={1}>
          {address}
        </Text>
      </Pressable>

      <Pressable style={styles.menuButton} onPress={onPressMenu} hitSlop={8}>
        <Ionicons name="menu" size={22} color={colors.text} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  location: {
    flex: 1,
    marginRight: 12,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  address: {
    marginTop: 2,
    marginLeft: 22,
    fontSize: 13,
    color: colors.textMuted,
  },
  menuButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
