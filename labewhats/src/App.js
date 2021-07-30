import './App.css';
import React from "react";
import styled from 'styled-components'
import Titulo from "./components/Titulo"

  const BlocoDeMensagens = styled.div`
    border: 1px solid black ;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 80vw;
    height: 80vh;
    padding: 15px;
    box-sizing: border-box;
    background-image: url("https://i.redd.it/qwd83nc4xxf41.jpg");
    
  `

  const Base = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black ;
    height: 100vh;
    justify-content: space-around;


  ` 
  const Adicionar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  ` 

/*   const TituloDoZapson = styled.div`
      color: white ;
      background-color: #74d600;
      border: 1px solid black;
      border-radius: 5px;
      width: 80vW;
      text-align: center;
  ` */
  const InputsonUsuario = styled.input`
    width: 125px;
    border-radius: 15px;
    height: 30px;
    margin: 2vw;
  `
  const InputsonMensagem = styled.input`
    width: 40vw;
    border-radius: 15px;
    height: 30px;
    margin-right: 2vw;
  `
class App extends React.Component {
  state = {
    mensagens: [],
    valorInputUsuario: "",
    valorInputMensagem: ""
  }

  adicionaMensagem = () => {

    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    };
    const novasMensagens = [...this.state.mensagens, novaMensagem];

    this.setState({
      mensagens: novasMensagens,
      valorInputMensagem: "",
      
    });


  };


  onChangeUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value })
  }

  onChangeMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value })
  }

  onKeyPress = (e) => {
    if(e.which === 13) {
    this.adicionaMensagem();
  }
}

  render() {

    const listaDeMensagens = this.state.mensagens.map((mensagem) => {
      return (
        <p>
          <strong>{mensagem.usuario}</strong> : {mensagem.mensagem}
        </p>
      );

    });
  

    return (
      <div>
        <Base>
          <Titulo />
          <BlocoDeMensagens>{listaDeMensagens}</BlocoDeMensagens>
          <Adicionar>
           <InputsonUsuario
           value={this.state.valorInputUsuario}
           onChange={this.onChangeUsuario}
           placeholder={"Usuário"}
          
           />
           <InputsonMensagem
           value={this.state.valorInputMensagem}
           onChange={this.onChangeMensagem}
           placeholder={"Mensagem"}
           onKeyPress={this.onKeyPress}
           />
          <button onClick={this.adicionaMensagem}>Adicionar</button>
          </Adicionar>
        </Base>
      </div>
    )
  }
}


export default App;


