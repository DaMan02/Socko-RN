import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import textStyle from '../../assets/fonts/textStyle';
import Colors from '../../assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

// props: title, desc

const TestDescription = (props) => (
    <View style={styles.main}>
        <TouchableOpacity activeOpacity={0.6} style={styles.close} onPress={() => props.onClose}>
            <Icon name="close" size={16} color={Colors.darkgray} />
        </TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.desc}>{props.desc}</Text>
    </View>
)

const styles = StyleSheet.create({
    main: {
        marginTop: 6,
        marginBottom: 10,
        marginHorizontal: 8,
        elevation: 1,
        backgroundColor: 'white',
        borderRadius: 6,
        paddingEnd: 10,
        paddingStart: 10,
        paddingTop: 10,
        paddingBottom: 10,
        maxWidth: 272
    },
    title: {
        ...textStyle.bold,
        maxWidth: 238,
        fontSize: 12
    },
    desc: {
        ...textStyle.light,
        fontSize: 11,
        textAlign: 'justify'
    },
    close: {
        position: 'absolute',
        top: 10,
        right: 10
    }
});

export default TestDescription;