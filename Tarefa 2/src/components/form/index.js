import react,{useState} from "react";
import { Text, TextInput, View, Button } from "react-native";
import ResultMedia from "../result";

export default function Form(){
  const [nota1, setNota1] = useState(null);
  const [nota2, setNota2] = useState(null);
  const [messageMedia, setMessageMedia] = useState("Preencha os dados");
  const [media, setMedia] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function mediaCalculator(){
    return setMedia(((parseFloat(nota1)+parseFloat(nota2))/2));
  }

  function validationMedia(){
    if(nota1 != null && nota2 != ""){
      mediaCalculator();
      setMessageMedia("Sua media eh igual: ");
      setTextButton("Calcular Novamente");
      return;
    }
    setMedia(null);
    setTextButton("Calcular");
    setMessageMedia("Preencha os dados");
  }

  return(
    <View>
      <View>
        <Text>Nota 1</Text>
        <TextInput
          onChangeText={setNota1}
          value={nota1}
          placeholder="Ex. 9.7"
          inputMode="numeric" 
        />
        <Text>Nota 2</Text>
        <TextInput
          onChangeText={setNota2}
          value={nota2}
          placeholder="Ex. 7.3"
          inputMode="numeric"
        />
        <Button 
          onPress={()=>validationMedia()}
          title={textButton}
        />
        <ResultMedia messageResultMedia={messageMedia} Media={media}></ResultMedia>
      </View>
    </View>
  );
}