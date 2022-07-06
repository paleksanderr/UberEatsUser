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
    page: {
        flex: 1,
    },
    title: {
        fontSize: 35,
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