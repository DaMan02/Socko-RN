import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import textStyle from '../../assets/fonts/textStyle';
import Colors from '../../assets/Colors';

// props: title, desc, sub

const LabTest = (props) => (
    <View style={styles.main}>
        <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/images/lab_icon.png')}
                style={styles.img} />
            <View>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.sub}>{props.sub}</Text>
                <Text style={styles.text}>Inlcudes {props.tests} Tests</Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 28 }}>
            <Text style={{ ...textStyle.bold, fontSize: 16, marginStart: 10 }}>₹ {props.price}</Text>
            <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.book}>BOOK NOW</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    main: {
        marginTop: 6,
        marginBottom: 10,
        marginHorizontal: 10,
        elevation: 1,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingEnd: 10,
        paddingTop: 6,
        paddingBottom: 10
    },
    title: {
        ...textStyle.bold,
        fontSize: 16,
        marginTop: 8
    },
    sub: {
        ...textStyle.light,
        fontSize: 13
    },
    text: {
        ...textStyle.lightest,
        fontSize: 12,
        marginTop: 4
    },
    img: {
        resizeMode: 'contain',
        height: 26,
        width: 26,
        marginStart: 10,
        marginEnd: 14,
        marginTop: 15
    },
    book: {
        ...textStyle.bold,
        fontSize: 16,
        color: Colors.primaryText,
        marginEnd: 1
    }
});

export default LabTest;