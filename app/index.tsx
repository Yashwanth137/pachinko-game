import { View, Text } from 'react-native';
import { styles } from '../styles/theme';
import { Ball } from '../components/Ball';
import { Board } from '../components/Board';
import { Buckets } from '../components/Buckets';
import { Controls } from '../components/Controls';
import { usePlinkoGame } from '../hooks/usePlinkoGame';

export default function Index() {
  const {
    ballX,
    ballY,
    score,
    highScore,
    ballsLeft,
    dropBall,
    restart,
  } = usePlinkoGame();

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>
      <Text style={styles.subText}>High Score: {highScore}</Text>
      <Text style={styles.subText}>Balls Left: {ballsLeft}</Text>

      <View>
        <Board />
        <Ball x={ballX} y={ballY} />
      </View>

      <Buckets />
      <Controls onDrop={dropBall} onRestart={restart} />
    </View>
  );
}
