import { View, Text } from 'react-native';
import { styles } from '../styles/theme';
import { BUCKETS } from '../constants/game';

export function Buckets() {
  return (
    <View style={styles.buckets}>
      {BUCKETS.map((b, i) => (
        <View key={i} style={styles.bucket}>
          <Text style={styles.bucketText}>{b}</Text>
        </View>
      ))}
    </View>
  );
}
