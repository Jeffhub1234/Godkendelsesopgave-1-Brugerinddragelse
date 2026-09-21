import React, { useState } from "react";
import {
  Text,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import styles from "../styles";

export default function CreateRunScreen({ navigation, addRun }) {
  // Formfelter til at oprette en ny løbetur.
  const [title, setTitle] = useState("");
  const [pace, setPace] = useState("");
  const [distance, setDistance] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [afterRun, setAfterRun] = useState("");
  const [description, setDescription] = useState("");

  // Validerer inputs og tilføjer den nye løbetur til oversigten.
  const createRun = () => {
    if (!title || !pace || !distance || !date || !location) {
      Alert.alert(
        "Mangler oplysninger",
        "Udfyld navn, tempo, distance, tidspunkt og lokation."
      );
      return;
    }

    const newRun = {
      id: Date.now().toString(),
      title,
      pace,
      distance,
      date,
      location,
      participants: 1,
      afterRun: afterRun || "Ingen planlagt aktivitet bagefter",
      organizer: "Dig",
      description:
        description || "En social løbetur oprettet af en bruger.",
    };

    addRun(newRun);

    Alert.alert(
      "Løbetur oprettet",
      "Din løbetur er nu tilføjet til oversigten.",
      [
        {
          text: "Se løbeturen",
          onPress: () => navigation.navigate("FindRuns"),
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={90}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>Opret en social løbetur</Text>
        <Text style={styles.subheading}>
          Gør tempoet tydeligt, så andre løbere kan se, om turen passer til dem.
        </Text>

        <Text style={styles.label}>Navn på løbetur</Text>
        <TextInput
          style={styles.input}
          placeholder="Fx Nørrebro Social Run"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Tempo</Text>
        <TextInput
          style={styles.input}
          placeholder="Fx 6:00–6:30 min/km"
          value={pace}
          onChangeText={setPace}
        />

        <Text style={styles.label}>Distance</Text>
        <TextInput
          style={styles.input}
          placeholder="Fx 5 km"
          value={distance}
          onChangeText={setDistance}
        />

        <Text style={styles.label}>Dato og tidspunkt</Text>
        <TextInput
          style={styles.input}
          placeholder="Fx tirsdag kl. 17:30"
          value={date}
          onChangeText={setDate}
        />

        <Text style={styles.label}>Lokation</Text>
        <TextInput
          style={styles.input}
          placeholder="Fx Nørrebroparken"
          value={location}
          onChangeText={setLocation}
        />

        <Text style={styles.label}>Social aktivitet efter løbet</Text>
        <TextInput
          style={styles.input}
          placeholder="Fx kaffe eller kage"
          value={afterRun}
          onChangeText={setAfterRun}
        />

        <Text style={styles.label}>Beskrivelse</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Beskriv løbeturen og hvem den passer til"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <Pressable style={styles.button} onPress={createRun}>
          <Text style={styles.buttonText}>Opret løbetur</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
