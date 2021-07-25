import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../button/button';

import styles from '../styles';

const FirstSlide = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.slideTitle}>Love</Text>
        <Text style={[styles.slideDescription, {fontSize: 24, lineHeight: 28}]}>
          When will I meet my soulmate?{'\n'}When will I get married?
        </Text>
        <Text style={styles.slideText}>and others...</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.slideTitle}>Self</Text>
        <Text style={[styles.slideDescription, {fontSize: 24, lineHeight: 28}]}>
          What I am here to learn in life?{'\n'}Am I on the right path?
        </Text>
        <Text style={styles.slideText}>and others...</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.slideTitle}>Deily life</Text>
        <Text style={[styles.slideDescription, {fontSize: 24, lineHeight: 28}]}>
          What is going to happen next?{'\n'}Any insight for today?
        </Text>
        <Text style={styles.slideText}>and others...</Text>
      </View>
      <Button label="Awesome!" />
    </View>
  );
};

export default FirstSlide;
