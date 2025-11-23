import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const LoginScreen = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log("name :: ", name);
    }, [name]);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>LogIn</Text>
            <TextInput
                placeholder="Enter username"
                style={styles.input}
                value={name}
                onChangeText={setName}
            />

            <TextInput
                placeholder="Enter password"
                style={styles.input}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => console.log("Submitted")} />
            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    headerText: {
        fontSize : 24, 
        textAlign : "center", 
        fontWeight : "bold", 
        color : "#222221"
    },
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#eee",
    },

    input: {
        width: "100%",
        padding: 16,
        marginVertical: 8,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        color: "#ccc",
        borderRadius: 8,
    },

    buttonContainer: {
        marginTop: 12,
        width: "100%",
    },
});
