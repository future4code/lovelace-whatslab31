import './App.css';
import React from "react";
import styled from 'styled-components'


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
    
  `

  const Base = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black ;
    height: 100vh;
    justify-content: space-around;

    h1 {
      color: white ;
      background-color: #00d27f;
      border-radius: 5px;
    }
  ` 
  const Adicionar = styled.div`
  ` 


class App extends React.Component {
  state = {
    mensagens: [{usuario: "aaaaab", mensagem:"ashaushauhs" }],
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


  render() {

    const listaDeMensagens = this.state.mensagens.map((mensagem) => {
      return (
        <p>
          {mensagem.usuario} : {mensagem.mensagem}
        </p>
      );

    });


    return (
      <div>
        <Base>
          <h1>Zapenu</h1>
          <BlocoDeMensagens>{listaDeMensagens}</BlocoDeMensagens>
          <Adicionar>
           <input
           value={this.state.valorInputUsuario}
           onChange={this.onChangeUsuario}
           placeholder={"Usuário"}
           
           />
           <input
           value={this.state.valorInputMensagem}
           onChange={this.onChangeMensagem}
           placeholder={"Mensagem"}
           />
          <button type="submit" onClick={this.adicionaMensagem}>Adicionar</button>
          </Adicionar>
        </Base>
      </div>
    )
  }
}


export default App;


//   changeUserPhoto = (event) => {
//     this.setState({ userPhoto: event.target.value });
//   };

//   changePostPhoto = (event) => {
//     this.setState({ postPhoto: event.target.value });
//   };



//   render() {
//     const componentesPost = this.state.posts.map((p) => {
//       return (
//         <Post
//           nomeUsuario={p.nomeUsuario}
//           fotoUsuario={p.fotoUsuario}
//           fotoPost={p.fotoPost}
//         />
//       );
//     });

//     return (
//       <AppContainer>
//         <FormContainer>
//           <input

//           />
//           <button onClick={this.addNewPost}>Criar Post</button>
//         </FormContainer>
//         {componentesPost}
//       </AppContainer>
//     );
//   }
// }

/* const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 180px;
  width: 240px;
  border: 1px solid gray;
  margin: 20px;
  padding: 30px;
`; */
