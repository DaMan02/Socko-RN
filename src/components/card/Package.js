import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import textStyle from '../../assets/fonts/textStyle';
import Colors from '../../assets/Colors';

// props: title, desc, sub

const Package = (props) => (
    <View style={styles.main}>
        <Image source={props.url}
            style={styles.img} />
        <View >
            <View>
                <Text style={{ flexDirection: 'row' }}>
                    <Text style={styles.title1}>{props.title1}</Text>
                    <Text style={styles.title2}> {props.title2}</Text>
                </Text>
                <Text style={styles.sub}>No of tests: {props.sub}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.bookContainer}>
                <Text style={styles.book}>BOOK NOW</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 10,
        marginEnd: 14,
        marginStart: 14,
        elevation: 1,
        backgroundColor: '#f3f6fb',
        borderRadius: 8,
        paddingTop: 24,
        paddingEnd: 10,
        paddingBottom: 24
    },
    title1: {
        ...textStyle.bold,
        fontSize: 17,
        marginTop: 8,
    },
    sub: {
        ...textStyle.regular,
        fontSize: 12,
        width: 200
    },
    title2: {
        ...textStyle.regular,
        fontSize: 18,
        marginTop: 8
    },
    img: {
        resizeMode: 'contain',
        height: 54,
        width: 54,
        marginStart: 10,
        marginEnd: 14,
        // alignSelf: 'center',
    },
    bookContainer: {
        alignSelf: 'flex-end',
        marginTop: 10,
        marginEnd: 6,
        borderRadius: 20,
        borderWidth: 1,
        paddingStart: 8,
        paddingEnd: 8,
        paddingTop: 3,
        paddingBottom: 3,
        borderColor: Colors.primaryText
    },
    book: {
        ...textStyle.bold,
        fontSize: 14,
        color: Colors.primaryText,
    }
});

export default Package;