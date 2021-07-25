import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({label}) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btnText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#fff',
    borderRadius: 28,
    width: 335,
    height: 44,
    paddingVertical: 9,
    paddingHorizontal: 116,
    marginTop: 'auto',
    alignSelf: 'center',
  },
  btnText: {
    color: '#056FDD',
    textAlign: 'center',
    fontSize: 22,
    lineHeight: 25,
  },
});

export default Button;
