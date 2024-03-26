//npm install -g npm@10.5.0 (caso precise instalar de novo)

//https://snack.expo.dev/

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
//o export também pde ser colocado na frente de uma função. Ex: export function app()

//EXEMPLO CLASSE
//extends: app tem todas as características de um componente
//render: é uma função que renderiza tudo que está dentro das chaves (mostra na tela);  aparece sempre que tem uma classe, se for uma função usa o return
//    HERANÇA: existe uma classe chamada componente, e a classe app vai ter tudo que essa classe componente tem
//na imagem é obrigatório por altura e largura 
//text curso entre chaves, esta atribuindo a variável e ele vai mostrar o que está atribuído à variável.