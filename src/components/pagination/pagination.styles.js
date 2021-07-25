import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 110,
    left: 147,
  },
  paginationDot: {
    color: 'rgba(255, 255, 255, 0.1)',
    margin: 3,
  },
  paginationActiveDot: {
    color: 'white',
    margin: 3,
    fontSize: 18,
  },
});

export default styles;
