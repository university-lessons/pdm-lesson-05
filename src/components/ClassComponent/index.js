import React from "react";
import { AppState, Text, View } from "react-native";

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  // Montagem do componente (executa uma vez só)
  componentDidMount() {
    console.log("mount");

    console.log("Fetch API!");

    AppState.addEventListener("change", this.handleChange);
  }

  // Desmontagem do componente (quando ele sai da tela)
  componentWillUnmount() {
    console.log("unmount");

    AppState.removeEventListener("change", this.handleChange);
  }

  // evento que monitora as mudanças do AppState (ativo ou background)
  handleChange = () => {
    console.log(AppState.currentState);
  };

  render() {
    return (
      <>
        <Text>ClassComponent: LifeCycle</Text>
      </>
    );
  }
}
