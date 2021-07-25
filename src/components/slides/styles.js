import {StyleSheet} from 'react-native';
import {windowWidth} from '../../../const';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 40,
  },
  container: {
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: windowWidth,
    height: '100%',
  },
  slideTitle: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '700',
  },
  slideDescription: {
    color: '#fff',
    fontSize: 38,
    lineHeight: 44,
    fontWeight: '700',
  },
  slideText: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '400',
  },
});

export default styles;
