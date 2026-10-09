import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';
import { categories, currentUser, stores, subCategories } from '../../data/homeData';
import LocationHeader from '../../components/home/LocationHeader';
import CategoryTabs from '../../components/home/CategoryTabs';
import SearchBar from '../../components/home/SearchBar';
import SubCategoryList from '../../components/home/SubCategoryList';
import FilterChips from '../../components/home/FilterChips';
import StoreCard from '../../components/home/StoreCard';

const FILTERS = [
  { id: 'offers', label: '🏷️ Offers', test: (s) => Boolean(s.offer) },
  { id: 'rating', label: '⭐ Rating 4.0+', test: (s) => s.rating >= 4 },
  { id: 'nearby', label: '📍 Under 2 km', test: (s) => s.distanceKm < 2 },
];

export default function HomeScreen() {
  const [categoryId, setCategoryId] = useState(categories[0].id);
  const [query, setQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

  const category = categories.find((c) => c.id === categoryId);
  const categoryHasStores = stores.some((s) => s.categoryId === categoryId);

  const visibleStores = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filterTests = FILTERS.filter((f) => activeFilters.includes(f.id)).map((f) => f.test);

    return stores.filter(
      (s) =>
        s.categoryId === categoryId &&
        (!vegOnly || s.veg) &&
        (!q || `${s.name} ${s.description}`.toLowerCase().includes(q)) &&
        filterTests.every((test) => test(s)),
    );
  }, [categoryId, query, vegOnly, activeFilters]);

  const toggleFilter = (id) =>
    setActiveFilters((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

  if (category.comingSoon) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.topSection}>
          <LocationHeader name={currentUser.name} address={currentUser.address} />
          <CategoryTabs categories={categories} selectedId={categoryId} onSelect={setCategoryId} />
        </View>
        <View style={styles.comingSoon}>
          <Text style={styles.comingSoonIcon}>{category.icon}</Text>
          <Text style={styles.comingSoonTitle}>Coming Soon</Text>
        </View>
      </SafeAreaView>
    );
  }

  const header = (
    <View>
      <View style={styles.topSection}>
        <LocationHeader name={currentUser.name} address={currentUser.address} />
        <CategoryTabs categories={categories} selectedId={categoryId} onSelect={setCategoryId} />
        <SearchBar
          value={query}
          onChangeText={setQuery}
          placeholder={`Search in ${category.label}`}
          vegOnly={vegOnly}
          onToggleVeg={setVegOnly}
        />
      </View>

      <View style={styles.section}>
        <SubCategoryList items={subCategories[categoryId]} />
      </View>

      <View style={styles.section}>
        <FilterChips filters={FILTERS} activeIds={activeFilters} onToggle={toggleFilter} />
      </View>

      <Text style={styles.listTitle}>{category.listTitle}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList
        data={visibleStores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StoreCard store={item} />}
        ListHeaderComponent={header}
        ListEmptyComponent={
          <Text style={styles.empty}>
            {categoryHasStores
              ? 'Nothing matches yet. Try clearing a filter.'
              : `No ${category.label} stores near you yet. Coming soon!`}
          </Text>
        }
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  topSection: {
    backgroundColor: colors.background,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  section: {
    marginTop: 16,
  },
  listTitle: {
    marginTop: 24,
    marginBottom: 12,
    marginHorizontal: 16,
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  listContent: {
    paddingBottom: 24,
  },
  comingSoon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  comingSoonIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  comingSoonTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
  },
  empty: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 14,
    color: colors.textMuted,
  },
});
