import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { widthPercentageToDP } from 'react-native-responsive-screen';
import textStyle from '../../assets/fonts/textStyle';

// props: title, onPress

const ButtonWithIcon = (props) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.main} onPress={props.onPress}>
            <Image source={require('../../assets/images/upload_prescription.png')}
                        style={styles.icon} />
            <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        borderRadius: 4,
        width: 220,
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 1,
        padding: 2,
        marginTop: 20,
        marginBottom: 20
    },
    icon: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: 20,
        marginStart: 10,
        height: 20,
        marginEnd: 6
    },
    text: {
        ...textStyle.bold
    }
});

export default ButtonWithIcon;