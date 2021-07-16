import './App.css';
import React from "react";




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
      valorInputMensagem: ""
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
        <h1>TESTE</h1>
        <div>{listaDeMensagens}</div>
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
        <button onClick={this.adicionaMensagem}>Adicionar</button>
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
