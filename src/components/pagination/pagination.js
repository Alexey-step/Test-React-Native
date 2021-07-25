import React from 'react';
import {Text, View} from 'react-native';
import styles from './pagination.styles';
import {dotArr} from '../../../const';

const Pagination = ({active}) => {
  return (
    <View style={styles.pagination}>
      {dotArr.map((item, i) => (
        <Text
          key={item + i}
          style={
            i === active ? styles.paginationActiveDot : styles.paginationDot
          }>
          ⬤
        </Text>
      ))}
    </View>
  );
};

export default Pagination;
