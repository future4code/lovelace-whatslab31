import logo from './logo.svg';
import './App.css';
/* import styled from 'styled-components' */




class AppPrincipal extends React.Components {
  state = {
    mensagens = [],
    valorInputUsuario: "",
    valorInputMensagem:""
  }

  onChangeUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value })
  }

  onChangeMensagem = (event) => {
    
  }


  render() {
    return (
    <div>
      <input 
      value = {this.state.valorInputUsuario}
      placeholder = {"Usuário"}
      onChange = {this.onChangeUsuario}
            
      />
      <input 
      value = {this.state.valorInputMensagem}
      placeholder = {"Mensagem"}
      onChange = {this.onChangeMensagem}
            
      />
    </div>  
    )
  }
}


export default App;


class App extends React.Component {
  state = {
    posts: arrayPosts,
    userName: "",
    userPhoto: "",
    postPhoto: ""
  };

  changeUserName = (event) => {
   ;
  };

  changeUserPhoto = (event) => {
    this.setState({ userPhoto: event.target.value });
  };

  changePostPhoto = (event) => {
    this.setState({ postPhoto: event.target.value });
  };

  addNewPost = () => {
    const newPost = {
      nomeUsuario: this.state.userName,
      fotoUsuario: this.state.userPhoto,
      fotoPost: this.state.postPhoto
    };

    this.setState({
      posts: [...this.state.posts, newPost],
      userName: "",
      userPhoto: "",
      postPhoto: ""
    });
  };

  render() {
    const componentesPost = this.state.posts.map((p) => {
      return (
        <Post
          nomeUsuario={p.nomeUsuario}
          fotoUsuario={p.fotoUsuario}
          fotoPost={p.fotoPost}
        />
      );
    });

    return (
      <AppContainer>
        <FormContainer>
          <input
            placeholder={"Nome do Usuário"}
            value={this.state.userName}
            onChange={this.changeUserName}
          />
          <input
            placeholder={"Foto do Usuário"}
            value={this.state.userPhoto}
            onChange={this.changeUserPhoto}
          />
          <input
            placeholder={"Foto do Post"}
            value={this.state.postPhoto}
            onChange={this.changePostPhoto}
          />
          <button onClick={this.addNewPost}>Criar Post</button>
        </FormContainer>
        {componentesPost}
      </AppContainer>
    );
  }
}

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
