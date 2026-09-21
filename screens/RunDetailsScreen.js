import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

import styles from "../styles";

export default function RunDetailsScreen({ route }) {
  // Henter den valgte løbetur fra navigationen.
  const { run } = route.params;

  // Holder styr på, om brugeren har valgt at deltage i løbeturen.
  const [joined, setJoined] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.detailBox}>
        <Text style={styles.detailTitle}>{run.title}</Text>

        <Text style={styles.detailText}>
          🏃 Tempo: {run.pace}
        </Text>
        <Text style={styles.detailText}>
          📏 Distance: {run.distance}
        </Text>
        <Text style={styles.detailText}>
          🕒 {run.date}
        </Text>
        <Text style={styles.detailText}>
          📍 {run.location}
        </Text>
        <Text style={styles.detailText}>
          👥 {run.participants} deltagere
        </Text>
        <Text style={styles.detailText}>
          🙋 Arrangør: {run.organizer}
        </Text>
        <Text style={styles.detailText}>
          ☕ {run.afterRun}
        </Text>

        <Text style={styles.description}>{run.description}</Text>

        {/* Skifter mellem "Deltag" og "Forlad" ved klik */}
        <Pressable
          style={styles.button}
          onPress={() => setJoined(!joined)}
        >
          <Text style={styles.buttonText}>
            {joined ? "Forlad løbetur" : "Deltag i løbetur"}
          </Text>
        </Pressable>

        {joined && (
          <Text style={styles.joinedMessage}>
            Du deltager nu i løbeturen ✓
          </Text>
        )}
      </View>
    </View>
  );
}
