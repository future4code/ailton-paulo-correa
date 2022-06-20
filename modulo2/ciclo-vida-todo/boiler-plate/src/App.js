import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {
      localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))    
  }

  componentDidMount() {
    if(localStorage.getItem("tarefas")){
      const valorTarefas = localStorage.getItem("tarefas")
      const arrayConvertido = JSON.parse(valorTarefas)
      this.setState({
        tarefas: arrayConvertido
      })
    }
  }

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  criaTarefa = () => {
    const novaTarefa = [...this.state.tarefas];
    const filtroBoolean = this.state.filtro === "completas";
    novaTarefa.push({
      id: Date.now(),
      texto: this.state.inputValue,
      completa: filtroBoolean,
    });
    this.setState({
      tarefas: novaTarefa,
    });
  };

  selectTarefa = (id) => {
    const tarefaTrocaValor = this.state.tarefas
      .filter((item) => {
        return id === item.id;
      })
      .map((item) => {
        return { id: item.id, texto: item.texto, completa: !item.completa };
      });
    const arrayTarefa = this.state.tarefas.filter((item) => {
      return id !== item.id;
    });
    arrayTarefa.push(tarefaTrocaValor[0]);
    this.setState({ tarefas: arrayTarefa });
  };

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value,
    });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa key={tarefa.id}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto} 
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
