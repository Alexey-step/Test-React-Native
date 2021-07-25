import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../button/button';

import styles from '../styles';

const SecondSlide = () => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 60}}>
        <Text style={styles.slideTitle}>You have</Text>
        <Text style={styles.slideDescription}>
          millions of{'\n'}questions...
        </Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.slideTitle}>We have</Text>
        <Text style={styles.slideDescription}>answers in the{'\n'}stars!</Text>
      </View>
      <Button label="Cool!" />
    </View>
  );
};

export default SecondSlide;
