import { View } from 'react-native';
import { styles } from '../styles/theme';
import { PEG_ROWS, PEG_GAP_Y, PEG_GAP_X, BOARD_WIDTH, POWER_ROW } from '../constants/game';

export function Board() {
  return (
    <View style={styles.board}>
      {Array.from({ length: PEG_ROWS }).map((_, row) => {
        const count = row + 1;
        const rowWidth = (count - 1) * PEG_GAP_X;
        const startX = (BOARD_WIDTH - rowWidth) / 2;

        return Array.from({ length: count }).map((_, i) => (
          <View
            key={`${row}-${i}`}
            style={[
              styles.peg,
              {
                left: startX + i * PEG_GAP_X,
                top: (row + 1) * PEG_GAP_Y,
              },
              row === POWER_ROW && styles.powerPeg,
            ]}
          />
        ));
      })}
    </View>
  );
}
