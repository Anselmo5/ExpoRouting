import * as React from 'react';
import { Text, View, StyleSheet, Pressable, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function AssetExample({navigation}) {

  const alerta = () => {
    alert("funcionou")
  }
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>      
      <View style={styles.textform}> 
        <Pressable  style={styles.text2}  onPress={() => navigation.navigate('EmAlta')}>
          <Text style={styles.text1} >Em Alta</Text>
        </Pressable>
        
      </View>

</View>
);
}

const styles = StyleSheet.create({
  
});