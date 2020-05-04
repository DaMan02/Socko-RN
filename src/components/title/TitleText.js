import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import textStyle from '../../assets/fonts/textStyle';
import Colors from '../../assets/Colors';

// props: name, clickableText, onClick

const TitleText = (props) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.text}>{props.name}</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={props.onClick}>
            <Text style={{...styles.text, color: Colors.primaryText}}>{props.clickableText}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    text: {
        ...textStyle.bold,
        fontSize: 14,
        marginStart: 14,
        marginEnd: 14,
        marginTop: 10,
        marginBottom: 10
    },
});

export default TitleText;