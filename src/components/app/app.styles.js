import {StyleSheet} from 'react-native';
import {windowWidth, windowHeight} from '../../../const';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  safe: {
    flex: 1,
  },
  logo: {
    marginBottom: 40,
    marginLeft: 20,
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 15,
    height: 15,
    borderRadius: 10,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: '#ffffff',
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    width: windowWidth,
    height: windowHeight,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    lineHeight: 35,
  },
});

export default styles;
