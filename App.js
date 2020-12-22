import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { BalsamiqSans_700Bold_Italic } from '@expo-google-fonts/balsamiq-sans';
import AppLoading from 'expo-app-loading';

// import { useFonts} from 'expo-font';

const Divider = () => (
<View style={ styles.divider } />
);

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    BalsamiqSans_700Bold_Italic,
    'Chrismas_bell': require('./assets/Christmas-Bell-Personal-Use.otf')
  });

  if ( !fontsLoaded ){
    return <AppLoading />
  }

  return (
    <View style={styles.container}>

<Text style={{ fontFamily: 'Chrismas_bell', fontSize: 30, marginTop:10}}>My Chrismas Bell Font</Text>
      
      <Divider />

      <Text style={{ fontFamily: 'BalsamiqSans_700Bold_Italic', fontSize: 30}}>My Balsamiq Sans 700 Bold Italic from Google</Text>
      
      <Divider />
      
      <Text style={{ fontFamily: 'Roboto_400Regular', fontSize: 30}}>My Roboto 400 Regular from Google</Text>

      <Divider />

      <View style={{flexDirection:'row'}}>
      <Ionicons name="cafe" size={30} color="green" />
      <Text style={{ marginLeft: 10, marginTop: 5 }}>Open up App.js to start working on your app!</Text>
      </View>

      <Divider />

      
      <FontAwesome5 name="btc" size={30} color="red" />
     

      <Divider />
      <Text>Open up App.js to start working on your app!</Text>

      <Divider />

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    padding: 20
  },
  divider: {
    borderBottomColor: '#777777',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '100%'
  }
});
