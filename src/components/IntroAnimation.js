import { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  useAnimatedValue,
  useWindowDimensions,
  View,
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { colors } from '../constants/colors';

// The PNG is cropped tight to the lettering with even padding, so centring
// the image box centres the logo itself.
const LOGO = require('../../assets/images/logo.png');
const { width: LOGO_W, height: LOGO_H } = Image.resolveAssetSource(LOGO);
const LOGO_RATIO = LOGO_W / LOGO_H;

// Short brand intro that covers the whole screen (~2s):
// 1. logo wipes in left-to-right and a shine sweeps across the letters,
// 2. onAppReady fires so the app can mount behind the still-opaque overlay,
// 3. after a short hold the overlay zooms and fades out, then onFinish fires.
export default function IntroAnimation({ onAppReady, onFinish }) {
  const { width: screenWidth } = useWindowDimensions();
  const logoWidth = Math.min(screenWidth * 0.8, 420);
  const logoHeight = logoWidth / LOGO_RATIO;

  const reveal = useAnimatedValue(0);
  const shine = useAnimatedValue(0);
  const exit = useAnimatedValue(0);
  const started = useRef(false);
  const running = useRef(null);

  useEffect(() => () => running.current?.stop(), []);

  // Start only once the logo has loaded, so the native splash never hands
  // over to an empty frame.
  const start = () => {
    if (started.current) return;
    started.current = true;
    SplashScreen.hide();

    running.current = Animated.sequence([
      Animated.timing(reveal, {
        toValue: 1,
        duration: 700,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(shine, {
        toValue: 1,
        duration: 550,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      }),
    ]);
    running.current.start(({ finished }) => {
      if (!finished) return;
      onAppReady?.();

      running.current = Animated.sequence([
        Animated.delay(300),
        Animated.timing(exit, {
          toValue: 1,
          duration: 400,
          easing: Easing.in(Easing.cubic),
          useNativeDriver: true,
        }),
      ]);
      running.current.start(({ finished: done }) => done && onFinish?.());
    });
  };

  // Clip window slides in from the left while the image counter-slides,
  // so the logo itself stays still and appears to be painted on.
  const clipX = reveal.interpolate({ inputRange: [0, 1], outputRange: [-logoWidth, 0] });
  const imageX = reveal.interpolate({ inputRange: [0, 1], outputRange: [logoWidth, 0] });
  const enterScale = reveal.interpolate({ inputRange: [0, 1], outputRange: [0.92, 1] });

  const shineX = shine.interpolate({
    inputRange: [0, 1],
    outputRange: [-logoWidth * 0.3, logoWidth * 1.1],
  });

  const exitScale = exit.interpolate({ inputRange: [0, 1], outputRange: [1, 1.25] });
  const exitOpacity = exit.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });

  return (
    <Animated.View style={[styles.container, { opacity: exitOpacity }]}>
      <Animated.View
        style={{
          width: logoWidth,
          height: logoHeight,
          transform: [{ scale: Animated.multiply(enterScale, exitScale) }],
        }}
      >
        <Animated.View style={[styles.clip, { transform: [{ translateX: clipX }] }]}>
          <Animated.Image
            source={LOGO}
            resizeMode="contain"
            onLoadEnd={start}
            style={{ width: logoWidth, height: logoHeight, transform: [{ translateX: imageX }] }}
          />
        </Animated.View>

        {/* Translucent white bar: invisible on the white background,
            reads as a highlight where it passes over the green letters. */}
        <View style={styles.clip} pointerEvents="none">
          <Animated.View
            style={[
              styles.shine,
              {
                height: logoHeight * 1.6,
                top: -logoHeight * 0.3,
                transform: [{ translateX: shineX }, { rotate: '20deg' }],
              },
            ]}
          />
        </View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    // Stay above every native view (tab bar, screens) on both platforms.
    zIndex: 1000,
    elevation: 1000,
  },
  clip: {
    ...StyleSheet.absoluteFill,
    overflow: 'hidden',
  },
  shine: {
    position: 'absolute',
    width: 28,
    backgroundColor: 'rgba(255,255,255,0.55)',
  },
});
