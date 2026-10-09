// Sample data for the customer home screen.
// Replace with Firestore reads (src/services) once stores are onboarded.

export const currentUser = {
  name: 'Chandu',
  address: 'Last House, Sai Street, Perecherla, Andhra Pradesh',
};

export const categories = [
  { id: 'daily-kirana', label: 'Daily Kirana', icon: '🛒', listTitle: 'Kirana stores near you' },
  { id: 'bulk-orders', label: 'Bulk Orders', icon: '📦', listTitle: 'Wholesale & bulk suppliers' },
  { id: 'palle-ruchulu', label: 'పల్లె రుచులు', icon: '🍃', listTitle: 'Homemade village flavours' },
  { id: 'local-eats', label: 'Local Eats', icon: '🍛', listTitle: 'Top restaurants to explore' },
  { id: 'sos-help', label: 'SOS Help', icon: '🧰', comingSoon: true },
];

export const subCategories = {
  'daily-kirana': [
    { id: 'atta-rice', label: 'Atta & Rice', icon: '🌾' },
    { id: 'dal', label: 'Dal & Pulses', icon: '🫘' },
    { id: 'oil', label: 'Oil & Ghee', icon: '🫙' },
    { id: 'dairy', label: 'Milk & Dairy', icon: '🥛' },
    { id: 'veggies', label: 'Vegetables', icon: '🥦' },
    { id: 'snacks', label: 'Snacks', icon: '🍪' },
  ],
  'bulk-orders': [
    { id: 'rice-bags', label: 'Rice Bags', icon: '🌾' },
    { id: 'oil-tins', label: 'Oil Tins', icon: '🛢️' },
    { id: 'party', label: 'Party Packs', icon: '🎉' },
    { id: 'catering', label: 'Catering', icon: '🍽️' },
    { id: 'office', label: 'Office Supply', icon: '🏢' },
  ],
  'palle-ruchulu': [
    { id: 'pickles', label: 'Pickles', icon: '🥭' },
    { id: 'podi', label: 'Podi', icon: '🌶️' },
    { id: 'sweets', label: 'Sweets', icon: '🍬' },
    { id: 'honey', label: 'Honey', icon: '🍯' },
    { id: 'millets', label: 'Millets', icon: '🌾' },
  ],
  'local-eats': [
    { id: 'fried-rice', label: 'Fried Rice', icon: '🍚' },
    { id: 'pizza', label: 'Pizzas', icon: '🍕' },
    { id: 'cakes', label: 'Cakes', icon: '🎂' },
    { id: 'ice-cream', label: 'Ice Cream', icon: '🍨' },
    { id: 'idli', label: 'Idli', icon: '🥟' },
    { id: 'biryani', label: 'Biryani', icon: '🍛' },
  ],
};

export const stores = [
  // Bulk Orders
  { id: 's4', categoryId: 'bulk-orders', name: 'Annapurna Wholesale', icon: '📦', rating: 4.4, ratingCount: 38, distanceKm: 3.1, description: 'Rice, Oil, Pulses in bulk', meta: 'Min order ₹2,000', eta: 'SAME DAY', offer: '5% OFF', veg: true },
  { id: 's5', categoryId: 'bulk-orders', name: 'Ravi Caterers', icon: '🍽️', rating: 4.6, ratingCount: 52, distanceKm: 2.7, description: 'Functions, Parties, Office meals', meta: 'From ₹180 per plate', eta: '1 DAY NOTICE', offer: null, veg: false },

  // Palle Ruchulu
  { id: 's6', categoryId: 'palle-ruchulu', name: 'Ammamma Pickles', icon: '🥭', rating: 4.8, ratingCount: 96, distanceKm: 1.2, description: 'Avakaya, Gongura, Tomato pickle', meta: 'Homemade', eta: '30-40 MINS', offer: 'FLAT ₹50 OFF', veg: true },
  { id: 's7', categoryId: 'palle-ruchulu', name: 'Palle Podi House', icon: '🌶️', rating: 4.5, ratingCount: 41, distanceKm: 1.9, description: 'Kandi podi, Karam podi, Sweets', meta: 'Homemade', eta: '30-40 MINS', offer: null, veg: true },

  // Local Eats
  { id: 's8', categoryId: 'local-eats', name: 'Subbayya Gari Butta Bhojanam', icon: '🍛', rating: 4.6, ratingCount: 5, distanceKm: 2.1, description: 'Authentic Andhra Meals, Podi, Sweets', meta: '₹400 for two', eta: '25-30 MINS', offer: 'FLAT ₹75 OFF', veg: true },
  { id: 's9', categoryId: 'local-eats', name: 'Sai Ram Biryani Point', icon: '🍗', rating: 4.3, ratingCount: 88, distanceKm: 1.4, description: 'Biryani, Fried Rice, Chinese', meta: '₹350 for two', eta: '20-25 MINS', offer: '20% OFF', veg: false },
  { id: 's10', categoryId: 'local-eats', name: 'Sweet Spot Bakery', icon: '🎂', rating: 3.9, ratingCount: 27, distanceKm: 3.3, description: 'Cakes, Pastries, Ice Cream', meta: '₹250 for two', eta: '30-35 MINS', offer: null, veg: true },
];
