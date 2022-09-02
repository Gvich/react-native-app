import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import {AuthorScreen} from "./AuthorScreen";
import {FullImageScreen} from "./FullImageScreen";

const Stack = createNativeStackNavigator()

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={AuthorScreen} options={{title: "Authors"}}/>
                <Stack.Screen name='FullPost' component={FullImageScreen} options={{title: "Image"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
