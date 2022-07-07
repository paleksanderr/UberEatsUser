import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    iconContainer: {
        position: "absolute",
        top: 40,
        left: 10,
    },
    image: {
        width: Dimensions.get("screen").width,
        aspectRatio: 5 / 3,
    },
    menuTitle: {
       marginTop:10,
       fontSize: 20,
       letterSpacing: 0.4,
       fontWeight: "700",
    },
    page: {
        flex: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: "600",
        marginVertical: 10,
    },
    subTitle: {
        color: "#525252",
        fontSize: 15,
    },
    titleContainer: {
        margin: 10,
    },
});