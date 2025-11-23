import { useEffect, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const AnimeCard = () => {
    return (
        <View style={{
            flex: 1, flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            padding: 12,
            borderRadius: 10,
            marginBottom: 12,
            gap: 20
        }}>
            <Image
                style={{
                    width: "30%",
                    height: 150,
                    borderRadius: 10,
                }}
                source={require('../../assets/deathNote.jpg')}

            />
            <View style={{ flexDirection: "column", width: "40%" }} >
                <Text style={{ fontSize: 26, }}>
                    Death Note
                </Text>
                <Text style={{ fontsize: 14, color: "gray" }}>
                    an amazing anime about a boy getting a book from a god of deaths
                </Text>
            </View>
            <Text style={{ textAlign: "center", borderRadius: 4, color: "white", backgroundColor: "orange", padding: 1, fontSize: 14, width: "10%" }}>
                9/10
            </Text>
        </View>
    )

};

const SearchScreen = () => {
    const [name, setName] = useState("");
    // const [password, setPassword] = useState("");

    useEffect(() => {
        console.log("name :: ", name);
    }, [name]);

    return (
        <View style={styles.container}>
            <View style={{paddingHorizontal : 8,}}> 

            <TextInput
                placeholder="search anime"
                style={styles.input}
                value={name}
                onChangeText={setName}
                />
                </View>

            <ScrollView >
                <AnimeCard />
                <AnimeCard />
                <AnimeCard />
                <AnimeCard />
                <AnimeCard />
                <AnimeCard />
                <AnimeCard />
                <AnimeCard />
                <AnimeCard />
            </ScrollView>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    headerText: {
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
        color: "#222221"
    },
    container: {
        flex: 1,
        paddingHorizontal: 0,
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
