import React from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
} from "react-native";

import styles from "../styles";

export default function HomeScreen({ navigation, runs }) {
  return (
    <View style={styles.screen}>
      {/* Overskrift og intro til startskærmen */}
      <Text style={styles.heading}>Løbeture nær dig</Text>
      <Text style={styles.subheading}>
        Find en social løbetur, der passer til dit tempo.
      </Text>

      {/* Går til skærmen, hvor brugeren kan oprette en ny løbetur */}
      <Pressable
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("CreateRun")}
      >
        <Text style={styles.secondaryButtonText}>+ Opret løbetur</Text>
      </Pressable>

      {/* Vis alle løbeture i en liste */}
      <FlatList
        data={runs}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() =>
              navigation.navigate("RunDetails", { run: item })
            }
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.importantText}>Tempo: {item.pace}</Text>
            <Text style={styles.cardText}>Distance: {item.distance}</Text>
            <Text style={styles.cardText}>{item.date}</Text>
            <Text style={styles.cardText}>📍 {item.location}</Text>
            <Text style={styles.cardText}>
              👥 {item.participants} deltagere
            </Text>
            <Text style={styles.cardText}>☕ {item.afterRun}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
