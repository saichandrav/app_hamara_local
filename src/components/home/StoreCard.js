import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/colors';

export default function StoreCard({ store, onPress }) {
  const [liked, setLiked] = useState(false);

  return (
    <Pressable style={styles.card} onPress={() => onPress?.(store)}>
      <View style={styles.banner}>
        <Text style={styles.bannerIcon}>{store.icon}</Text>

        <Pressable style={styles.heart} onPress={() => setLiked((v) => !v)} hitSlop={8}>
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            size={20}
            color={liked ? colors.offer : colors.text}
          />
        </Pressable>

        {store.offer ? (
          <View style={styles.offerBadge}>
            <Ionicons name="pricetag" size={12} color={colors.white} />
            <Text style={styles.offerText}>{store.offer}</Text>
          </View>
        ) : null}

        <View style={styles.etaBadge}>
          <Text style={styles.etaText}>{store.eta}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.name} numberOfLines={1}>
          {store.name}
        </Text>
        <View style={styles.metaRow}>
          <View style={styles.ratingPill}>
            <Ionicons name="star" size={11} color={colors.white} />
            <Text style={styles.ratingText}>{store.rating.toFixed(1)}</Text>
          </View>
          <Text style={styles.muted}>
            ({store.ratingCount}) · {store.distanceKm} km
          </Text>
        </View>
        <Text style={styles.description} numberOfLines={1}>
          {store.description} · {store.meta}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  banner: {
    height: 140,
    backgroundColor: colors.primaryTint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerIcon: {
    fontSize: 64,
  },
  heart: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerBadge: {
    position: 'absolute',
    left: 12,
    bottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: colors.offer,
  },
  offerText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.white,
  },
  etaBadge: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: colors.white,
  },
  etaText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.text,
  },
  body: {
    padding: 14,
    gap: 4,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  ratingPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    backgroundColor: colors.rating,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.white,
  },
  muted: {
    fontSize: 13,
    color: colors.textMuted,
  },
  description: {
    fontSize: 13,
    color: colors.textMuted,
  },
});
