import * as React from 'react';
import { Pressable,View,Text,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.contaienr}>
      <Pressable title="Go to Details" onPress={() => navigation.navigate('TelaA')} style={styles.btn}>
        <Text style={styles.font}> Play Go</Text>
      </Pressable>
    </View>
  );
}

function TelaA({ navigation }) {
  return (
    <View style={styles.contaienr}>
      <Pressable title="Go to Details" onPress={() => navigation.navigate('TelaA')} style={styles.btn}>
        <Text style={styles.font}> TelaC</Text>
      </Pressable>
    </View>
  );
}


function TelaB({ navigation }) {
  return (
    <View style={styles.contaienr}>
      <Pressable title="Go to Details" onPress={() => navigation.navigate('TelaA')} style={styles.btn}>
        <Text style={styles.font}> TelaA</Text>
      </Pressable>
    </View>
  );
}



function TelaC({ navigation }) {
  return (
    <View style={styles.contaienr}>
      <Pressable title="Go to Details" onPress={() => navigation.navigate('TelaA')} style={styles.btn}>
        <Text style={styles.font}> TelaB</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TelaA" component={TelaA} />
        <Stack.Screen name="TelaB" component={TelaB} />
        <Stack.Screen name="TelaC" component={TelaC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  contaienr:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  btn:{

  },
  font:{
    fontSize:20,
    marginTop:350,
  }

})

export default App;
