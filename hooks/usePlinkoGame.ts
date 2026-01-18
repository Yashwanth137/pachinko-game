import { useRef, useState, useEffect } from 'react';
import { Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  BOARD_WIDTH,
  PEG_ROWS,
  PEG_GAP_X,
  PEG_GAP_Y,
  BUCKETS,
  POWER_ROW,
  MAX_BALLS,
} from '../constants/game';

export function usePlinkoGame() {
  const ballX = useRef(new Animated.Value(BOARD_WIDTH / 2)).current;
  const ballY = useRef(new Animated.Value(0)).current;

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [ballsLeft, setBallsLeft] = useState(MAX_BALLS);
  const [dropping, setDropping] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('HIGH_SCORE').then(v => {
      if (v) setHighScore(Number(v));
    });
  }, []);

  const getPegXs = (row: number) => {
    const count = row + 1;
    const rowWidth = (count - 1) * PEG_GAP_X;
    const startX = (BOARD_WIDTH - rowWidth) / 2;
    return Array.from({ length: count }).map((_, i) => startX + i * PEG_GAP_X);
  };

  const dropBall = () => {
    if (dropping || ballsLeft === 0) return;
    setDropping(true);
    setBallsLeft(b => b - 1);

    let animations: any[] = [];
    let currentX = BOARD_WIDTH / 2;
    let hitPowerRow = false;

    for (let row = 0; row < PEG_ROWS; row++) {
      const pegXs = getPegXs(row);
      let nearest = pegXs.reduce((a, x, i) =>
        Math.abs(x - currentX) < Math.abs(pegXs[a] - currentX) ? i : a, 0
      );

      const dir = Math.random() > 0.5 ? 1 : -1;
      const next = Math.max(0, Math.min(pegXs.length - 1, nearest + dir));
      currentX = pegXs[next];

      if (row === POWER_ROW) hitPowerRow = true;

      animations.push(
        Animated.parallel([
          Animated.timing(ballY, {
            toValue: (row + 1) * PEG_GAP_Y,
            duration: 280,
            useNativeDriver: false,
          }),
          Animated.timing(ballX, {
            toValue: currentX,
            duration: 280,
            useNativeDriver: false,
          }),
        ])
      );
    }

    Animated.sequence(animations).start(() => {
      const bucketIndex = Math.floor(currentX / (BOARD_WIDTH / BUCKETS.length));
      const earned = BUCKETS[bucketIndex] * (hitPowerRow ? 2 : 1);

      setScore(prev => {
        const newScore = prev + earned;
        if (newScore > highScore) {
          setHighScore(newScore);
          AsyncStorage.setItem('HIGH_SCORE', String(newScore));
        }
        return newScore;
      });

      ballX.setValue(BOARD_WIDTH / 2);
      ballY.setValue(0);
      setDropping(false);
    });
  };

  const restart = () => {
    setScore(0);
    setBallsLeft(MAX_BALLS);
    ballX.setValue(BOARD_WIDTH / 2);
    ballY.setValue(0);
  };

  return {
    ballX,
    ballY,
    score,
    highScore,
    ballsLeft,
    dropBall,
    restart,
  };
}
