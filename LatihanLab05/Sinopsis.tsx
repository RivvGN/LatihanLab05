import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { Card } from "react-native-paper";

const Sinopsis = ({ navigation }) => {
    const dataArray = [
        {
            title: "Naruto Shippuden",
            image: require("./assets/NarutoLab02.jpg"),
            text: "Dua setengah tahun setelah berlatih bersama Jiraiya, Naruto Uzumaki kembali ke Konoha dengan tekad kuat untuk menyelamatkan sahabatnya, Sasuke Uchiha, yang bergabung dengan Orochimaru demi kekuatan. Di tengah ancaman Akatsuki, organisasi kriminal yang mengincar Bijuu, Naruto dan teman-temannya menghadapi pertempuran sengit, mengungkap rahasia besar dunia ninja, serta takdirnya sebagai Jinchuriki Kyubi. Perjalanan Naruto menuju kedewasaan membawanya pada pertarungan epik yang akan menentukan masa depan dunia shinobi.",
        },
        {
            title: "One Piece",
            image: require("./assets/LuffyLab02.jpg"),
            text: "Di dunia penuh lautan, Gol D. Roger, Raja Bajak Laut, mengungkapkan sebelum kematiannya bahwa hartanya, One Piece, tersembunyi di Grand Line. Ini memicu era bajak laut. Monkey D. Luffy, pemuda yang bisa meregang seperti karet akibat Buah Iblis, bercita-cita menjadi Raja Bajak Laut. Ia berlayar, mengumpulkan kru, dan menghadapi berbagai tantangan demi menemukan One Piece dan mencapai impiannya.",
        },
        {
            title: "Demon Slayer",
            image: require("./assets/TanjiroLab02.jpg"),
            text: "Di era Taisho, Tanjiro Kamado, seorang pemuda baik hati, mendapati keluarganya dibantai oleh iblis, dan adiknya, Nezuko, berubah menjadi iblis. Bertekad membalas dendam dan menyembuhkan Nezuko, Tanjiro bergabung dengan Korps Pembasmi Iblis. Dalam perjalanannya, ia menghadapi iblis kuat, berlatih keras, dan bertemu teman-teman baru seperti Zenitsu dan Inosuke, sambil mencari cara mengalahkan Muzan Kibutsuji, raja iblis yang bertanggung jawab atas penderitaannya.",
        },
        {
            title: "Sword Art Online",
            image: require("./assets/KiritoLab02.jpg"),
            text: "Pada tahun 2022, ribuan pemain terjebak dalam game VRMMORPG Sword Art Online (SAO) tanpa bisa keluar. Sang pencipta game, Akihiko Kayaba, mengumumkan bahwa satu-satunya cara untuk bebas adalah menyelesaikan semua 100 lantai Aincrad, tetapi jika mereka mati dalam game, mereka juga mati di dunia nyata. Kirito, seorang pemain solo berbakat, berjuang melewati dunia virtual ini, bertemu sekutu seperti Asuna, dan menghadapi berbagai tantangan demi bertahan hidup dan mengakhiri permainan mematikan ini.",
        },
        {
            title: "Solo Leveling",
            image: require("./assets/ChaHaeInLab02.jpg"),
            text: "Di dunia di mana Gate yang menghubungkan manusia dengan monster muncul, para Hunter bertugas membasmi mereka. Sung Jin-Woo, seorang Hunter peringkat E—terlemah di dunia—berjuang keras demi keluarganya. Namun, setelah selamat dari Dungeon Ganda yang mematikan, ia mendapatkan System, sebuah kekuatan misterius yang memungkinkannya menjadi lebih kuat tanpa batas. Dari yang terlemah, Jin-Woo mulai naik peringkat, menghadapi monster, konspirasi dunia Hunter, dan rahasia di balik kekuatannya.",
        },
        {
            title: "A Condition Called Love",
            image: require("./assets/HananoiLab02.jpg"),
            text: "Hotaru Hinase, seorang gadis SMA yang tak pernah terlalu memikirkan cinta. Suatu hari, ia bertemu Hananoi-kun, seorang siswa tampan namun intens yang tiba-tiba menyatakan cinta padanya setelah sebuah pertemuan tak terduga. Awalnya ragu, Hotaru perlahan mulai memahami perasaan dan dinamika cinta melalui hubungan mereka. Namun, Hananoi-kun memiliki sisi emosional yang rumit, membuat perjalanan cinta mereka penuh dengan pertumbuhan, keraguan, dan kehangatan yang perlahan berkembang.",
        },
        {
            title: "Rascal Does Not Dream of Bunny Girl Senpai",
            image: require("./assets/MaiSakurajimaLab02.jpg"),
            text: "Sakuta Azusagawa, seorang siswa SMA yang mengalami fenomena aneh bernama Sindrom Pubertas, di mana emosi dan masalah psikologis remaja mewujud secara supernatural. Suatu hari, ia bertemu Mai Sakurajima, seniornya yang merupakan aktris terkenal, tetapi anehnya, orang lain tidak bisa melihatnya saat ia mengenakan kostum bunny girl. Berusaha memahami dan membantu Mai, Sakuta terlibat dalam berbagai kasus Sindrom Pubertas yang dialami gadis-gadis di sekitarnya, sambil perlahan memahami arti cinta dan perasaan yang sebenarnya.",
        },
        {
            title: "Kuroko's Basketball",
            image: require("./assets/KurokoLab02.jpg"),
            text: "Kuroko no Basket mengikuti Seirin High, tim basket SMA yang bercita-cita menjadi yang terbaik di Jepang. Mereka merekrut Kagami Taiga, pemain berbakat yang kembali dari Amerika, serta Kuroko Tetsuya, mantan anggota misterius dari Generation of Miracles, tim legendaris SMP. Meski tidak mencolok dan memiliki fisik lemah, Kuroko ahli dalam misdirection dan assist yang luar biasa. Bersama Kagami, ia bertekad mengalahkan mantan rekan setimnya dari Generation of Miracles dan membawa Seirin menuju puncak.",
        },
        {
            title: "Josee, The Tiger and The Fish",
            image: require("./assets/JoseeLab02.jpg"),
            text: "Tsuneo, seorang mahasiswa yang bercita-cita belajar di luar negeri, dan Josee, seorang gadis berbakat namun pemarah yang tidak bisa berjalan sejak lahir. Awalnya, Tsuneo hanya bekerja sebagai pengasuh Josee, tetapi seiring waktu, hubungan mereka berkembang. Josee mulai membuka hatinya terhadap dunia luar, sementara Tsuneo belajar melihat kehidupan dari perspektif yang berbeda. Bersama, mereka menghadapi tantangan, impian, dan perasaan yang tumbuh di antara mereka.",
        },
        {
            title: "Apothecary Diaries",
            image: require("./assets/MaoMaoLab02.jpg"),
            text: "Maomao, seorang apoteker cerdas yang diculik dan dijual sebagai pelayan di istana kekaisaran. Berusaha tetap rendah hati, ia menyembunyikan keahliannya, tetapi kecerdasannya menarik perhatian Jinshi, seorang pejabat berpengaruh. Karena pengetahuannya tentang racun dan obat-obatan, Maomao mulai menyelesaikan misteri dan konspirasi di dalam istana. Dengan sikap sinis namun tajam, ia perlahan mengungkap rahasia yang tersembunyi di balik kehidupan para selir dan pejabat kekaisaran.",
        },
      ];

  return (
    <View style={styles.mainContainer}>
        <ScrollView style={styles.scrollContainer}>
            {dataArray.map((data, index) => (
            <Card key={index} style={styles.card}>
                <Card.Content style={styles.cardContent}>
                <Text style={styles.cardTitle}>{data.title}</Text>
                <View style={styles.imageContainer}>
                    <Image source={data.image} style={styles.image} />
                </View>
                <Text style={styles.text}>{data.text}</Text>
                </Card.Content>
            </Card>
            ))
            }
        </ScrollView>
        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Userlist")}>
            <Text style={styles.ButtonText}>Ke Userlist</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        flex: 1
    },
    scrollContainer: {
        flex: 1, 
        backgroundColor: '#1e1e1e',
        paddingVertical: 20,
    },
    card: {
        margin: 20,
        borderRadius: 10,
        backgroundColor: "#D3D3D3",
        elevation: 5,
    },
    cardContent: {
        padding: 20,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    imageContainer: {
        alignItems: "center",
        marginBottom: 10,
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "#00ffff",
    },
    text: {
        textAlign: 'justify',
        marginBottom: 20,
    },
    Button: {
        backgroundColor: "blue",
        padding: 15,
        borderRadius: 5,
        margin: 10,
        alignSelf: 'center',
    },
    ButtonText: {
        color: "white",
        fontWeight: "bold",
    },
});

export default Sinopsis;