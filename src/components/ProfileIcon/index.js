import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Icon from 'react-native-vector-icons/Octicons'
import Colors from '../../assets/Colors';

// props

const ProfileIcon = (props) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.main} onPress={props.onPress}>
        
            <Icon name='person' size={34} color={Colors.darkgray} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    main: {
        backgroundColor: Colors.lightGray,
        borderRadius: 50,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // logo: {
    //     alignSelf: 'center',
    //     // backgroundColor: Colors.lightGray,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     width: 46,
    //     height: 46,
    // }
});

export default ProfileIcon;