import { Animated } from 'react-native';
import { styles } from '../styles/theme';

export function Ball({ x, y }: { x: Animated.Value; y: Animated.Value }) {
  return (
    <Animated.View
      style={[
        styles.ball,
        { transform: [{ translateX: x }, { translateY: y }] },
      ]}
    />
  );
}
