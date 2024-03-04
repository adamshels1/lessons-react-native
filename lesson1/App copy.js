/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';


const App: () => Node = () => {

  

  const test2 = 'Kema' //переменная
  const test = () => alert('ok') //функция
  const obj = {
    name: 'AAA',
    age: 17
  }
  const arr = ['book 1', 'book 2', 'book 3']

  return (
    <SafeAreaView>

      <TouchableOpacity onPress={test}>

        <View style={{ backgroundColor: 'blue', width: 300, height: 100, marginTop: 100 }}>
          <Text style={styles.hello}>Hello {1+2}</Text>
        </View>

      </TouchableOpacity>

      {arr.map(item=> {
        return <Text>{item}</Text>
      })}


      <ActivityIndicator size='large' />

      <Image
        style={{ width: 100, height: 100, marginTop: 100 }}
        resizeMode='contain'
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hello: { color: 'red', fontSize: 40, fontWeight: 'bold' }
});

export default App;
