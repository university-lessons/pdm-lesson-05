import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ClassComponent from "./src/components/ClassComponent";
import FunctionComponent from "./src/components/FunctionComponent";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderMyComponent: true,
    };

    //exemplo da videoaula: descomentar para demonstrar componentDidMount e componentWillUnmount
    // setTimeout(() => {
    //   this.setState({
    //     renderMyComponent: false,
    //   });
    // }, 4000);
  }

  render() {
    if (this.state.renderMyComponent)
      return (
        <View style={styles.container}>
          <ClassComponent />
          <FunctionComponent />
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <Text>(No Component)</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
