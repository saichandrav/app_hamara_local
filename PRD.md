# Hamara Local — Product Requirements Document

| | |
|---|---|
| **Product** | Hamara Local (Expo / React Native + Firebase) |
| **Version** | 0.1 (draft) |
| **Date** | 7 Oct 2026 |
| **Status** | Draft, open for review |

---

## 1. Overview

Hamara Local is a hyperlocal shopping app. Customers order groceries and daily essentials from nearby sources and get them delivered quickly. Orders are fulfilled by two kinds of sellers:

- **Local stores**: independent neighbourhood shops listed on the platform. The shop owner manages their own catalogue, prices and stock.
- **Dark stores**: delivery-only warehouses run with Hamara Local. A store partner operates each one. Hamara Local controls the catalogue and pricing, and the partner handles stock, picking and packing.

Delivery partners take orders to customers. Admins run the platform, and customer support handles customer issues.

### 1.1 Goals

1. One app codebase that serves all six roles, each with its own login and screens.
2. A reliable order flow from cart to doorstep, visible in real time to everyone involved.
3. Every role can do its job without asking an admin to make changes for them.

### 1.2 Non-goals (v1)

- Payments other than cash on delivery and UPI (no wallets, cards or EMI).
- Multiple cities. Launch in a single city.
- Seller payouts handled inside the app. Settlements are reported in the app but paid outside it.

---

## 2. Roles

| # | Role | Who they are | How they get an account | Platform |
|---|------|--------------|-------------------------|----------|
| 1 | **User** (customer) | Anyone buying from the app | Signs up with phone OTP | Mobile |
| 2 | **Admin** | Hamara Local operations team | Created by another admin | Web (mobile view only) |
| 3 | **Store Owner** | Owner of an independent local shop | Applies in the app; admin approves after KYC | Mobile |
| 4 | **Customer Support** | Hamara Local support agents | Created by admin | Web |
| 5 | **Delivery Partner** | Rider who delivers orders | Applies in the app; admin approves after KYC | Mobile |
| 6 | **Store Partner** | Operator of a Hamara Local dark store | Created by admin and assigned to one dark store | Mobile / tablet |

Each account has exactly one role. If one person needs two roles, they use two accounts.

---

## 3. Authentication & Login

### 3.1 Login methods

| Role | Login method | Self sign-up |
|------|--------------|--------------|
| User | Phone number + OTP | Yes |
| Store Owner | Phone number + OTP | Yes, then waits for approval |
| Delivery Partner | Phone number + OTP | Yes, then waits for approval |
| Store Partner | Phone number + OTP | No (admin invites) |
| Customer Support | Email + password | No (admin creates) |
| Admin | Email + password, 2-step verification | No (admin creates) |

### 3.2 Login flow

1. The app opens and plays the intro animation.
2. **Role picker** screen: "I'm a customer" is the main button. Below it is a smaller "Partner & staff login" link that opens the other roles.
3. The person signs in with the method for their role (table above).
4. The app reads the person's role and account status from the server.
   - Status `active`: open that role's home screen.
   - Status `pending`: show "Application under review".
   - Status `rejected` or `suspended`: show the reason and a support contact.
5. If someone signs in with the wrong role (for example, a customer's number on the delivery login), show "This account is registered as a Customer" and offer to switch.

### 3.3 Security rules

- The role is stored as a **Firebase Auth custom claim** and set only by a Cloud Function, never by the app. A copy is kept on `users/{uid}` for display.
- Firestore security rules check the custom claim on every read and write.
- Admin and support sessions sign out automatically after 12 hours of inactivity.

---

## 4. Features by Role

Priority: **P0** = needed for launch, **P1** = soon after launch, **P2** = later.

### 4.1 User (customer)

| Feature | Priority |
|---------|----------|
| Phone OTP sign-up and login | P0 |
| Save delivery addresses, use current location | P0 |
| Home: categories, search, nearby stores, offers | P0 |
| Product listing and detail (price, stock, which store) | P0 |
| Cart (items from one store per order) | P0 |
| Checkout with cash on delivery or UPI | P0 |
| Live order tracking (status + rider on map) | P0 |
| Order history and reorder | P1 |
| Rate order and delivery | P1 |
| Help: raise a ticket about an order, chat with support | P1 |
| Coupons and referral | P2 |

### 4.2 Admin

| Feature | Priority |
|---------|----------|
| Dashboard: orders today, revenue, active riders, open tickets | P0 |
| Approve or reject store owner and delivery partner applications (view KYC documents) | P0 |
| Create, edit and suspend accounts of every role | P0 |
| Create dark stores and assign store partners | P0 |
| Master catalogue and pricing for dark stores | P0 |
| Set delivery zones, delivery fees and store service areas | P0 |
| View and step in on any order (reassign rider, cancel, refund) | P0 |
| Coupons and banners | P1 |
| Reports: sales by store, rider payouts, settlement export (CSV) | P1 |
| Activity log of admin actions | P1 |

### 4.3 Store Owner

| Feature | Priority |
|---------|----------|
| Apply: shop details, location, KYC (ID, GST/FSSAI, bank details) | P0 |
| Manage own catalogue: add products, photos, prices | P0 |
| Update stock, mark items out of stock | P0 |
| Open/close the shop, set opening hours | P0 |
| New-order alert (sound + notification); accept or reject | P0 |
| Mark order packed and ready for pickup | P0 |
| Order history and daily sales summary | P1 |
| Settlement statements | P1 |

### 4.4 Customer Support

| Feature | Priority |
|---------|----------|
| Ticket queue: filter by status, priority, age | P0 |
| Look up a customer by phone or order ID | P0 |
| See full order detail and timeline | P0 |
| Reply to the customer (in-app chat) | P0 |
| Actions: cancel order, refund up to a set limit, add a note | P0 |
| Contact the store or rider on an order | P1 |
| Pass a ticket to an admin | P1 |
| Ready-made reply templates | P2 |

Support cannot change catalogue, prices, accounts or settings.

### 4.5 Delivery Partner

| Feature | Priority |
|---------|----------|
| Apply: personal details, vehicle, driving licence, ID, bank details | P0 |
| Go online / offline | P0 |
| Receive delivery requests with pickup and drop distance; accept or decline | P0 |
| Navigate to store, then to customer (opens Google Maps) | P0 |
| Status updates: reached store → picked up → delivered | P0 |
| Delivery OTP from the customer to confirm handover | P0 |
| Collect cash on delivery and record it | P0 |
| Location shared every 10 seconds while on a delivery | P0 |
| Earnings today / this week, trip history | P1 |
| Raise an issue (customer unreachable, wrong address) | P1 |

### 4.6 Store Partner (dark store)

| Feature | Priority |
|---------|----------|
| Login assigned to one dark store | P0 |
| New-order queue with alert | P0 |
| Pick list: items grouped by shelf location, mark each item picked | P0 |
| Mark order packed and ready for pickup | P0 |
| Report missing or damaged item (support handles the customer) | P0 |
| Receive stock: record quantities that arrive | P0 |
| Stock levels and low-stock alerts | P1 |
| Shift summary: orders packed, average packing time | P1 |

Store partners **cannot** change prices or the catalogue. Admin manages those for dark stores.

---

## 5. Order Lifecycle

```
placed → accepted → packing → ready_for_pickup → rider_assigned
       → picked_up → delivered
```

At any step before `picked_up`, an order can move to `cancelled`.

| Status | Set by | What happens |
|--------|--------|--------------|
| `placed` | User | Store owner or store partner is alerted |
| `accepted` | Store owner / Store partner | Customer sees "Order confirmed" |
| `packing` | Store owner / Store partner | |
| `ready_for_pickup` | Store owner / Store partner | Nearest online rider gets the request |
| `rider_assigned` | Delivery partner (accepts) | Customer sees rider name and location |
| `picked_up` | Delivery partner | |
| `delivered` | Delivery partner (after OTP) | Customer is asked to rate |
| `cancelled` | User (before `accepted`), store, support, admin | Refund starts if paid by UPI |

- If a store does not accept within **3 minutes**, the order is cancelled automatically and the customer is told.
- If no rider accepts within **5 minutes**, admins get an alert so they can assign one by hand.

---

## 6. Data Model (Firestore)

| Collection | Key fields |
|------------|-----------|
| `users/{uid}` | name, phone, email, role, status, createdAt |
| `addresses/{id}` | userId, label, line1, geo (lat/lng), isDefault |
| `stores/{id}` | type (`local` \| `dark`), name, ownerId / partnerIds, geo, serviceRadiusKm, isOpen, hours, status |
| `products/{id}` | storeId (or `master` for dark stores), name, category, price, mrp, images, unit |
| `inventory/{storeId_productId}` | storeId, productId, qty, shelfLocation |
| `orders/{id}` | userId, storeId, riderId, items[], totals, paymentMethod, paymentStatus, status, statusHistory[], deliveryOtp, address |
| `riders/{uid}` | isOnline, currentLocation, activeOrderId, vehicle |
| `applications/{id}` | uid, role, documents[], status, reviewedBy, note |
| `tickets/{id}` | orderId, userId, assignedTo, status, priority, messages (subcollection) |
| `auditLogs/{id}` | actorId, action, target, timestamp |

The KYC documents and product images are stored in Firebase Storage.

### 6.1 Access by role (summary)

| Data | User | Store Owner | Store Partner | Delivery | Support | Admin |
|------|------|-------------|---------------|----------|---------|-------|
| Own profile | RW | RW | R | RW | R | RW |
| Products | R | RW (own store) | R | – | R | RW |
| Inventory | R (in stock / not) | RW (own store) | RW (assigned store) | – | R | RW |
| Orders | R (own) | R / update status (own store) | R / update status (assigned store) | R / update status (assigned) | R / cancel / refund | RW |
| Tickets | RW (own) | – | – | – | RW | RW |
| Applications | – | RW (own) | – | RW (own) | – | RW |

R = read, W = write, – = no access.

---

## 7. App Structure

This follows the existing `src/` layout. Each role gets its own screen folder, and login sends the person to their role's screens.

```
App.js                         ← intro animation → RootNavigator
src/
  navigation/
    RootNavigator.js           ← picks a stack based on the signed-in role
    AuthStack.js               ← role picker, OTP, email login, pending screen
    UserStack.js
    AdminStack.js
    StoreOwnerStack.js
    SupportStack.js
    DeliveryStack.js
    StorePartnerStack.js
  screens/
    auth/                      ← RolePickerScreen, PhoneLoginScreen, OtpScreen, EmailLoginScreen, PendingApprovalScreen
    user/
    admin/
    storeOwner/
    support/
    delivery/
    storePartner/
  components/                  ← shared UI (buttons, cards, order status pill, IntroAnimation)
  services/
    firebase.js
    auth.js                    ← sign-in, sign-out, read role claim
    orders.js, products.js, stores.js, tickets.js, riders.js
  context/
    AuthContext.js             ← current user, role, status
  hooks/                       ← useAuth, useOrder, useRiderLocation
  constants/
    colors.js
    roles.js                   ← ROLES = { USER, ADMIN, STORE_OWNER, SUPPORT, DELIVERY, STORE_PARTNER }
    orderStatus.js
functions/                     ← Firebase Cloud Functions: set role claims, order timeouts, rider assignment, notifications
firestore.rules
```

### 7.1 Technology

| Area | Choice |
|------|--------|
| App | Expo (React Native), Expo web for admin and support |
| Navigation | React Navigation (native stack + bottom tabs) |
| Auth | Firebase Authentication (phone OTP, email/password) + custom claims |
| Database | Cloud Firestore with live updates |
| Files | Firebase Storage |
| Server logic | Firebase Cloud Functions |
| Notifications | Expo Notifications (via FCM / APNs) |
| Maps | react-native-maps; Google Maps app for turn-by-turn directions |
| Payments | UPI payment gateway (Razorpay or Cashfree, to be decided) |

---

## 8. Non-functional Requirements

- **Speed:** app opens to the home screen in under 3 seconds on a mid-range Android phone. Order status changes reach every screen within 2 seconds.
- **Devices:** Android 9+ and iOS 15+. Admin and support work in Chrome on a laptop.
- **Poor networks:** screens show cached data when offline. Actions taken while offline are retried, with a clear "not sent yet" label.
- **Languages:** English and Hindi at launch.
- **Privacy:** riders and stores see only the customer's first name and a masked phone number. KYC documents are visible only to admins.
- **Monitoring:** crash reporting (Firebase Crashlytics) and an audit log of every admin and support action.

---

## 9. Release Plan

| Phase | Scope |
|-------|-------|
| **M1: Foundation** | Navigation structure, login for all 6 roles, role claims, Firestore rules, role picker |
| **M2: Order flow** | User browse, cart, checkout (cash on delivery); store owner and store partner order handling; delivery partner flow with OTP |
| **M3: Operations** | Admin approvals, account management, dark store setup, catalogue; support tickets and order actions |
| **M4: Launch polish** | UPI payments, notifications, live rider map, ratings, Hindi |
| **Post-launch** | P1 and P2 items, reports, coupons |

---

## 10. Success Metrics

| Metric | Target (first 3 months) |
|--------|-------------------------|
| Average time from order to delivery | Under 30 minutes |
| Orders accepted by the store within 3 minutes | 95% |
| Orders cancelled | Under 5% |
| Support tickets resolved within 24 hours | 90% |
| Repeat customers (2+ orders in 30 days) | 30% |

---

## 11. Open Questions

1. **Store owner vs store partner:** this document assumes store owners run their own independent shops and store partners run Hamara Local dark stores with central pricing. Is that correct?
2. Can one cart contain items from both a local store and a dark store, or is it one store per order (assumed here)?
3. Are admin and customer support web-only, or do they need the mobile app too?
4. Who assigns riders: automatically to the nearest rider (assumed here), or manually by the store or admin?
5. How do riders get paid: per delivery, per kilometre, or a fixed salary?
6. Which UPI payment provider should we use?
7. Which city and which areas are we launching in?
