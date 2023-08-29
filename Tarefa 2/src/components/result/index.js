import react from "react";
import {View, Text} from "react-native";

export default function ResultMedia(props){
  return(
    <View>
      <Text>{props.messageResultMedia}{props.Media}</Text>
    </View>
  );
}