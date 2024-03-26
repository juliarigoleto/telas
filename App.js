//npm install -g npm@10.5.0 (caso precise instalar de novo)

import React from "react";
import {View, Text} from "react-native"; // todos os componentes que forem utilizados tem que dar import antes (ex. botão)

function App(){
  return( // toda função deve ter return para retornar o desenho na tela
  //view: tela ou fragmento de tela (retorna o desenho)
  //text: vai escrever na tela
    <View> 
      <Text>Olá mundo!</Text>
    </View>
  )
}

// Depois de criar deve-se colocar o export 
export default App; // poderia ter antes da function

//export indica que a função será executado
//export default app assim que alguém mandar executar o app, essa função será executada
//depois do export pode ter outra função