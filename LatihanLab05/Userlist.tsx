import React, { useState } from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";
import { Card, Text, Avatar, Provider as PaperProvider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Userlist = ({ navigation }) => {
    const [expandedCard, setExpandedCard] = useState(null);

    const dataAnime = [
        { id: 0, name: "Rivaldy Gunawan", anime: "00000061924", image: require("./assets/RivaldyLab02.jpg"), gender: "male", message: "Saya adalah seorang mahasiswa!" },
        { id: 1, name: "Naruto", anime: "Naruto Shippuden", image: require("./assets/NarutoLab02.jpg"), gender: "male", message: "Aku akan menjadi Hokage, Dattebayo!" },
        { id: 2, name: "Luffy", anime: "One Piece", image: require("./assets/LuffyLab02.jpg"), gender: "male", message: "Aku akan menjadi Raja Bajak Laut!" },
        { id: 3, name: "Tanjiro", anime: "Demon Slayer", image: require("./assets/TanjiroLab02.jpg"), gender: "male", message: "Aku akan melindungi Nezuko!" },
        { id: 4, name: "Kirito", anime: "Sword Art Online", image: require("./assets/KiritoLab02.jpg"), gender: "male", message: "Aku akan menyelesaikan game ini!" },
        { id: 5, name: "Cha Hae In", anime: "Solo Leveling", image: require("./assets/ChaHaeInLab02.jpg"), gender: "female", message: "Kenapa Sung Jin Woo tidak bau?" },
        { id: 6, name: "Hananoi", anime: "A Condition Called Love", image: require("./assets/HananoiLab02.jpg"), gender: "male", message: "Hotaru Hinase sangat Imut!" },
        { id: 7, name: "Mai Sakurajima", anime: "Rascal Does Not Dream of Bunny Girl Senpai", image: require("./assets/MaiSakurajimaLab02.jpg"), gender: "female", message: "Setelah mendengarnya berkali-kali, Aku sudah bosan mendengarnya." },
        { id: 8, name: "Kuroko", anime: "Kuroko's Basketball", image: require("./assets/KurokoLab02.jpg"), gender: "male", message: "Aku akan menjadi bayangan yang paling kuat!" },
        { id: 9, name: "Josee", anime: "Josee, The Tiger and The Fish", image: require("./assets/JoseeLab02.jpg"), gender: "female", message: "Aku ingin melihat dunia yang luas!" },
        { id: 10, name: "Maomao", anime: "Apothecary Diaries", image: require("./assets/MaoMaoLab02.jpg"), gender: "female", message: "Sebenarnya, Jinshi itu siapa?" }
    ];

    const toggleExpand = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
    <PaperProvider>
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.title}>Berikut merupakan data diri saya dan list anime:</Text>
                {dataAnime.map((data) => (
                    <Card key={data.id} style={styles.card}>
                        <Card.Content style={styles.cardContent}>
                            <View style={styles.images}>
                                <Avatar.Image size={80} source={data.image} />
                            </View>
                            <View style={styles.textContainer}>
                            <View style={styles.nameContainer}>
                                <Text style={styles.name}>{data.name}</Text>
                                <Icon name={data.gender === "male" ? "gender-male" : "gender-female"}
                                size={20} color={data.gender === "male" ? "blue" : "pink"} style={styles.genderIcon}
                                />
                            </View>
                            <Text style={styles.anime}>{data.anime}</Text>
                            </View>

                            <TouchableOpacity onPress={() => toggleExpand(data.id)}>
                                <Icon name="cog-outline" size={30} color="#D3D3D3" style={styles.icon} />
                            </TouchableOpacity>
                        </Card.Content>

                        {expandedCard === data.id && (
                        <View style={styles.expandedContent}>
                            <Text style={styles.expandedText}>{data.message}</Text>
                        </View>
                        )}
                    </Card>
                    )
                )
            }
            </ScrollView>
            <TouchableOpacity style={styles.sinopsisButton} onPress={() => navigation.navigate("Sinopsis")}>
            <Text style={styles.sinopsisButtonText}>Ke Sinopsis</Text>
            </TouchableOpacity>
        </View>
    </PaperProvider>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center"
    },

    images: {
        borderWidth: 3,
        borderColor: "#00ffff",
        borderRadius: 50
    },

    scrollView: {
        flexGrow: 1,
        paddingVertical: 20
     },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginBottom: 20
    },

    card: {
        backgroundColor: "#1e1e1e",
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        elevation: 5
    },

    cardContent: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15
    },

    textContainer: {
        flex: 1,
        marginLeft: 15
    },

    nameContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#00ffff"
    },

    genderIcon: {
        marginLeft: 5
    },

    anime: {
        fontSize: 14,
        color: "#29ABE2"
    },

    icon: {
        marginLeft: 10
    },

    expandedContent: {
        backgroundColor: "#333",
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },

    expandedText: {
        color: "white",
        fontSize: 16,
        textAlign: "center"
    },

    sinopsisButton: {
        backgroundColor: "blue",
        padding: 15,
        borderRadius: 5,
        margin: 10,
        alignSelf: 'center',
    },

    sinopsisButtonText: {
        color: "white",
        fontWeight: "bold",
    }
});

export default Userlist;