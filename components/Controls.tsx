import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/theme';

export function Controls({ onDrop, onRestart }: any) {
  return (
    <View style={styles.actionRow}>
      <TouchableOpacity style={styles.primaryBtn} onPress={onDrop}>
        <Text style={styles.btnText}>Drop Ball</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryBtn} onPress={onRestart}>
        <Text style={styles.btnText}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
}
