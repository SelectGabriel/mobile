import react from "react";
import {View, Text, Button} from 'react-native'; 

export default function HomeScreen({navigation}) {
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Button title='Ir para Home2'
        onPress={()=>navigation.navigate('Home2')}
      />
      <Button title='Ir para Calculo de Medias!'
        onPress={()=>navigation.navigate('main')}
      />
      <Button title='Ir para Contador!'
        onPress={()=>navigation.navigate('counterScreen')}
      />
    </View>
  );
}