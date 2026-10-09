// Copy for the About and Terms & Privacy pages.
// Draft wording: have the Terms and Privacy text reviewed before launch.

export const LAST_UPDATED = '9 October 2026';

export const aboutContent = {
  tagline: 'Your neighbourhood, delivered.',
  sections: [
    {
      title: 'Who we are',
      body: [
        'Hamara Local is a hyperlocal shopping app. We connect you with the kirana stores, home cooks, restaurants and suppliers already in your area, so you can order daily essentials and get them delivered quickly.',
      ],
    },
    {
      title: 'How it works',
      bullets: [
        'Local stores: independent neighbourhood shops that manage their own products, prices and stock.',
        'Hamara Local stores: delivery-only stores run with our partners, stocked with everyday items at fixed prices.',
        'Delivery partners from your area bring your order to your door, and you can follow it live.',
      ],
    },
    {
      title: 'What you can order',
      bullets: [
        'Daily Kirana: groceries, dairy, vegetables and snacks',
        'Bulk Orders: wholesale packs, catering and office supplies',
        'పల్లె రుచులు: homemade pickles, podis, sweets and millets',
        'Local Eats: meals from restaurants near you',
      ],
    },
    {
      title: 'Why local',
      body: [
        'Every order supports a shop or a family business in your own town. We want the stores you already trust to grow with you.',
      ],
    },
  ],
};

export const termsContent = [
  {
    title: 'Using Hamara Local',
    bullets: [
      'You need a valid mobile number to create an account. You are responsible for activity on your account.',
      'Please give accurate delivery addresses and contact details so partners can reach you.',
      'Do not misuse the app, place fake orders or harass stores and delivery partners. We may suspend accounts that do.',
    ],
  },
  {
    title: 'Orders and prices',
    bullets: [
      'Products are sold by the store you order from. Prices, stock and offers are set by that store, except at Hamara Local stores where we set them.',
      'An order is confirmed only once the store accepts it. A store may decline an order if items are unavailable.',
      'Delivery times shown in the app are estimates and can change with traffic, weather or demand.',
    ],
  },
  {
    title: 'Payments',
    bullets: [
      'We accept cash on delivery and UPI.',
      'For cash on delivery, please pay the delivery partner the amount shown in the app.',
    ],
  },
  {
    title: 'Cancellations and refunds',
    bullets: [
      'You can cancel an order free of charge until the store accepts it.',
      'If an item is missing, damaged or wrong, report it through Help & Support within 24 hours of delivery.',
      'Approved refunds for UPI payments go back to the original payment method.',
    ],
  },
  {
    title: 'Liability',
    bullets: [
      'Stores are responsible for the quality, labelling and safety of the products they sell.',
      'Hamara Local provides the platform that connects you with stores and delivery partners.',
    ],
  },
];

export const privacyContent = [
  {
    title: 'What we collect',
    bullets: [
      'Account details: your name, phone number and, if you add one, your email.',
      'Delivery addresses and your location while you use the app, to show nearby stores and deliver orders.',
      'Order history, payment status and messages you send to support.',
      'Basic device and crash information, to keep the app working well.',
    ],
  },
  {
    title: 'How we use it',
    bullets: [
      'To show stores near you, process orders and deliver them.',
      'To send order updates and, if you allow it, offers.',
      'To help you when you contact support and to prevent fraud.',
    ],
  },
  {
    title: 'Who we share it with',
    bullets: [
      'Stores and delivery partners see only your first name, a masked phone number and the delivery address for your order.',
      'Payment providers process UPI payments. We never store your UPI PIN.',
      'We do not sell your personal data.',
    ],
  },
  {
    title: 'Your choices',
    bullets: [
      'You can update your profile and saved addresses at any time.',
      'You can turn off location access and notifications in your phone settings.',
      'To delete your account and data, contact us through Help & Support.',
    ],
  },
];
