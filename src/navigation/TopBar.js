import { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native"

// const styles = {}
const TopBar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    return (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20, height: 60, backgroundColor: "orange", width: "100%", padding: 10 }}>

            <Text style={{ fontSize: 16, color: "white", marginRight: 20 }} onPress={() => setMenuVisible(!menuVisible)}>menu</Text>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>AnimeLogo</Text>
            <Text style={{ fontSize: 16, color: "white", marginLeft: "auto" }}>dots</Text>
            <Modal
                transparent
                visible={menuVisible}
                animationType="fade"
                onRequestClose={() => setMenuVisible(false)}
            >
                <View
                    style={styles?.overlay}
                    onPress={() => setMenuVisible(false)}
                    activeOpacity={1}
                >
                    <View style={styles?.menu}>
                        <View
                            onPress={() => {
                                setMenuVisible(false);
                                navigation.navigate("Settings");
                            }}
                        >
                            <Text style={styles?.menuItem}>Settings</Text>
                        </View>

                        <View
                            onPress={() => {
                                setMenuVisible(false);
                                navigation.navigate("About");
                            }}
                        >
                            <Text style={styles?.menuItem}>About</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

    )
}
export default TopBar;

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        justifyContent: "space-between",
        elevation: 4,
    },
    logo: {
        width: 120,
        height: 40,
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-end",
        paddingTop: 70,
        paddingRight: 10,
        backgroundColor: "rgba(0,0,0,0.1)",
    },
    menu: {
        backgroundColor: "#fff",
        paddingVertical: 10,
        width: 150,
        borderRadius: 8,
        elevation: 5,
    },
    menuItem: {
        padding: 12,
        fontSize: 16,
    },
});