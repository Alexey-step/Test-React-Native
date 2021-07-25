import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../button/button';

import styles from '../styles';

const ThirdSlide = () => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.slideTitle,
          {fontSize: 38, lineHeight: 44, marginBottom: 30},
        ]}>
        How it works
      </Text>
      <Text style={[styles.slideDescription, {marginBottom: 30}]}>
        Share birth details
      </Text>
      <Text style={[styles.slideDescription, {marginBottom: 30}]}>
        Ask a question
      </Text>
      <Text style={[styles.slideDescription, {marginBottom: 30}]}>
        An astrologer will{'\n'}make a predication
      </Text>
      <Text style={[styles.slideDescription, {marginBottom: 30}]}>
        Get your answer
      </Text>
      <Button label="Try now!!" />
    </View>
  );
};

export default ThirdSlide;
