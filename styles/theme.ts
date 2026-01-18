import { StyleSheet } from 'react-native';
import { BOARD_WIDTH, BOARD_HEIGHT } from '../constants/game';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    alignItems: 'center',
    paddingTop: 40,
  },
  score: {
    fontSize: 22,
    fontWeight: '600',
    color: '#111827',
  },
  subText: {
    color: '#6B7280',
    marginTop: 4,
  },
  board: {
    width: BOARD_WIDTH,
    height: BOARD_HEIGHT,
    backgroundColor: '#FFF',
    borderRadius: 18,
    marginVertical: 16,
    elevation: 6,
    overflow: 'hidden',
  },
  ball: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#EF4444',
    position: 'absolute',
    zIndex: 10,
  },
  peg: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#9CA3AF',
    position: 'absolute',
  },
  powerPeg: {
    backgroundColor: '#FBBF24',
  },
  buckets: {
    flexDirection: 'row',
    width: BOARD_WIDTH,
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
  },
  bucket: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '#E5E7EB',
  },
  bucketText: {
    fontWeight: '600',
    color: '#374151',
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 24,
    gap: 12,
  },
  primaryBtn: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 26,
    paddingVertical: 14,
    borderRadius: 28,
    elevation: 4,
  },
  secondaryBtn: {
    backgroundColor: '#6B7280',
    paddingHorizontal: 26,
    paddingVertical: 14,
    borderRadius: 28,
    elevation: 4,
  },
  btnText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
});
