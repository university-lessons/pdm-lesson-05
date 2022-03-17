import React from "react";
import { AppState, Text, View } from "react-native";

export default function FunctionComponent() {
  // componentDidMount não existe em Hooks, aqui fazemos um efeito colateral sem parâmetros [] (ele roda uma vez só!)
  React.useEffect(() => {
    console.log("[Function/Hook] mount");
    console.log("[Function/Hook] Fetch API!");

    AppState.addEventListener("change", handleChange);

    // componentWillUnmount não existe em Hooks, mas podemos implementar uma função de retorno (ela só será executada no unmount)
    return () => {
      console.log("[Function/Hook] unmount");
      AppState.removeEventListener("change", handleChange);
    };
  }, []);

  // evento do AppState, igual ao do componente classe.
  const handleChange = () => {
    console.log("[Function/Hook] " + AppState.currentState);
  };

  return (
    <>
      <Text>FunctionComponent: LifeCycle</Text>
    </>
  );
}
