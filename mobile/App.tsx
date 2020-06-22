import React from "react";
import { StatusBar } from "react-native";

import { AppLoading } from "expo";
import Routes from "./src/routes";
import * as Font from "expo-font";

// import { useFonts } from "@use-expo/font";
// import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
// import { Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";

let customFonts = {
  Roboto_400Regular: require("./src/assets/fonts/Roboto-Regular.ttf"),
  Roboto_500Medium: require("./src/assets/fonts/Roboto-Medium.ttf"),
  Ubuntu_700Bold: require("./src/assets/fonts/Ubuntu-Bold.ttf"),
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  // export default function App() {
  //   const [fontsLoaded] = useFonts({
  //     Roboto_400Regular,
  //     Roboto_500Medium,
  //     Ubuntu_700Bold,
  //   });

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Routes />
        </>
      );
    }
  }
}
