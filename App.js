import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
import  RestaurantDetails from "./src/screens/RestaurantDetails";
import { useEffect } from 'react';
import { saveApiKey} from  "./src/storage/secureStore";
import Constants from "expo-constants";

const Stack = createStackNavigator();
 
export default function App() {
  const { apiKey } = Constants.expoConfig.extra;

  useEffect(() => {
    saveApiKey(apiKey); 
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Business Search" }}>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="RDetails" component={RestaurantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
