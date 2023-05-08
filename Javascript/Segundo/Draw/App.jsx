import * as React from 'react';
import { Pressable,View,Text,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/native-stack';
import App from '../../Primeiro/Navegation/ButtonLink/App';

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

const Drawer = createDrawerNavigator();

const DrawerNavigator =() => {
  return (
    <Drawer.Navigator>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="TelaA" component={TelaA} />
        <Drawer.Screen name="TelaB" component={TelaB} />
        <Drawer.Screen name="TelaC" component={TelaC} />
      </Drawer.Navigator>
    </Drawer.Navigator>
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

const App = () =>{
  return(
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}

export default App;
