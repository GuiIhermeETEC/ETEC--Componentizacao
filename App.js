import * as React from 'react';
import {View,Text} from 'react-native';
import styles from './src/estilo/estilo';
import Header from './src/estilo/components/header';
import Box from './src/estilo/components/box';
import Footer from './src/estilo/components/footer';
export default function App() {
  return (
    <View style={styles.container}>

<Header></Header>
<Box></Box>
<Footer></Footer>
       
      
    </View>
  );
}

