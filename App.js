import { View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./test/Test2";
import InputText from "./test/InputText";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "#333333",
        }}
      >
        <LittleLemonHeader />
        <WelcomeScreen />
        {/* <Login /> */}

        {/* <MenuItems /> */}
      </View>
      <View
        style={{
          backgroundColor: "#333333",
        }}
      >
        {/* <LittleLemonFooter /> */}
      </View>
    </>
  );
}
