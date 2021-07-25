import React, {useState} from 'react';
import {SafeAreaView, StatusBar, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FirstSlide from '../slides/first-slide/first-slide';
import SecondSlide from '../slides/second-slide/second-slide';
import ThirdSlide from '../slides/third-slide/third-slide';
import Pagination from '../pagination/pagination';
import styles from './app.styles';

const App = () => {
  const [active, setActive] = useState(0);

  const handleScroll = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (active !== slide) {
      setActive(slide);
    }
  };
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 1.0, y: 1.0}}
      colors={['#6B73FF', '#000DFF']}
      style={styles.linearGradient}>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.safe}>
        <Image
          style={styles.logo}
          source={require('../../../assets/img/logo.png')}
        />
        <ScrollView
          horizontal
          pagingEnabled
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
          style={styles.section}>
          <SecondSlide />
          <FirstSlide />
          <ThirdSlide />
        </ScrollView>
        <Pagination active={active} />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default App;
