import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegister = () => {
    if (!validateEmail(email)) {
      setMessage("Invalid email format");
      setSuccess(false);
    } 
    else if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
      setSuccess(false);
    } 
    else if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      setSuccess(false);
    } 
    else {
      setMessage("Registration Successful!");
      setSuccess(true);
    }
  };

  const isDisabled = !email || !password || !confirmPassword;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {message ? (
        <Text style={[styles.message, success ? styles.success : styles.error]}>
          {message}
        </Text>
      ) : null}

      <TouchableOpacity
        style={[styles.button, isDisabled && styles.disabledButton]}
        onPress={handleRegister}
        disabled={isDisabled}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  message: {
    marginBottom: 12,
    textAlign: "center",
    fontSize: 14,
  },
  error: {
    color: "red",
  },
  success: {
    color: "green",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: "#94a3b8",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});