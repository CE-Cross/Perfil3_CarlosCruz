import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import APIScreen from "../screens/APIScreen";
import Perfil from "../screens/Perfil";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Perfil">
                <Stack.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        title: "Perfil"
                    }}
                />

                <Stack.Screen
                    name="APIScreen"
                    component={APIScreen}
                    options={{
                        title: "APIScreen"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;