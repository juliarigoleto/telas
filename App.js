// //npm install -g npm@10.5.0 (caso precise instalar de novo)

// //https://snack.expo.dev/  login:julia.rigoleto j.R!golet0

// import React from "react";
// import {View, Text} from "react-native"; // todos os componentes que forem utilizados tem que dar import antes (ex. botão)

// function App(){
//   return( // toda função deve ter return para retornar o desenho na tela
//   //view: tela ou fragmento de tela (retorna o desenho)
//   //text: vai escrever na tela
//     <View> 
//       <Text>Olá mundo!</Text>
//     </View>
//   )
// }

// // Depois de criar deve-se colocar o export 
// export default App; // poderia ter antes da function

// //export indica que a função será executado

// //export default app assim que alguém mandar executar o app, essa função será executada
// //depois do export pode ter outra função
// //o export também pde ser colocado na frente de uma função. Ex: export function app()

// //EXEMPLO CLASSE
// //extends: app tem todas as características de um componente
// //render: é uma função que renderiza tudo que está dentro das chaves (mostra na tela);  aparece sempre que tem uma classe, se for uma função usa o return
// //    HERANÇA: existe uma classe chamada componente, e a classe app vai ter tudo que essa classe componente tem
// //na imagem é obrigatório por altura e largura 
// //text curso entre chaves, esta atribuindo a variável e ele vai mostrar o que está atribuído à variável.

//exemplo 2
//em forma de classes 

import React, {Component} from "react";
import {View, Text, Image} from "react-native";

class App extends Component{ //pega as características do componente
  render(){ //quando usa classe é obrigado a renderizar, é oq faz mostrar na tela

      let curso = 'INFO';

      return( //obrigatório
        <View>
          <Text>Olá mundo!</Text>
          <Text>Exemplo!</Text>
          <Text style={{color: 'blue', fontSize:30, margin: 15}}>Meu exemplo!</Text>  {/*não precisa colocar unidade de medida pq reconhece sozinho*/}

          <Image source={{uri: 'coloca a url aqui'}} style={{width: 300, height:300}}/>
          {/*Image é OBRIGADO a informar a largura e a altura*/}
          <Text>{curso}</Text> {/*Para usar variáveis, colocá-las entre chaves */}

          {/*para chamar o componente*/}
          {/* <MinhaImage /> */}
          {/* Passando propriedades: a largura e a altura */}
          {/* <MinhaImage largura={400} altura{400} nome="Image 1"/> */}
          {/*posso chamar o mesmo componente várias vezes*/}
        </View> 
      );
  }
}
// para a imagem tem que ter o https
export default App;

//caso queira criar um componente para a img
//Não precisa colocar a view pq é um único componente

class MinhaImage extends Component{ // o que compõe a view, algo que pode ser reutilizado
  render(){                         // posso reutilizar um componente estilizando-o de várias formas

    let img = 'url da imagem';
    return(
      <View>
        {/*<Image source={{uri: img}} style={{width: 300, height:300}}/>  chama a variável, uma das formas de fazer*/}

        <Image source={{uri: img}} style={{width: this.props.largura, height:this.props.altura}}/> {/*Pega uma propriedade (PROPS) */}
          <Text> {this.props.mome}</Text>
      </View>
    );
  }

  //para a iamgem tem qu ter o https
  
}