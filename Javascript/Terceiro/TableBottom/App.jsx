import * as React from 'react';
import { Pressable,View,Text,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/native-stack';
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

const Drawer = createBottomTabNavigator();

const TabNavigator =() => {
  return (
    <Tab.Navigator>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="TelaA" component={TelaA} />
        <Tab.Screen name="TelaB" component={TelaB} />
        <Tab.Screen name="TelaC" component={TelaC} />
      </Tab.Navigator>
    </Tab.Navigator>
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
      <TabNavigator/>
    </NavigationContainer>
  )
}

export default App;
