import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import RunDetailsScreen from "./screens/RunDetailsScreen";
import CreateRunScreen from "./screens/CreateRunScreen";
import { initialRuns } from "./data/runs";

const Stack = createNativeStackNavigator();

export default function App() {
  // Gemmer alle løbeture i appen og opdateres, når en ny tur oprettes.
  const [runs, setRuns] = useState(initialRuns);

  // Tilføjer en ny løbetur til toppen af listen.
  const addRun = (newRun) => {
    setRuns((currentRuns) => [newRun, ...currentRuns]);
  };

  return (
    <NavigationContainer>
      {/* Navigation mellem oversigt, detaljer og opretning af løbeture */}
      <Stack.Navigator
        initialRouteName="FindRuns"
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="FindRuns" options={{ title: "Find løbeture" }}>
          {(props) => <HomeScreen {...props} runs={runs} />}
        </Stack.Screen>

        <Stack.Screen
          name="RunDetails"
          component={RunDetailsScreen}
          options={{ title: "Detaljer" }}
        />

        <Stack.Screen name="CreateRun" options={{ title: "Opret løbetur" }}>
          {(props) => <CreateRunScreen {...props} addRun={addRun} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
