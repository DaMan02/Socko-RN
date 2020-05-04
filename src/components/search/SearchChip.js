import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../assets/Colors';
import textStyle from '../../assets/fonts/textStyle';

// props: name, onClose

const ProfileIcon = (props) => (
    <View style={{
        justifyContent: 'flex-start',
        flexDirection: 'row'
    }}>
        <View style={styles.main}>
            <Text style={styles.text}>{props.name}</Text>
            <TouchableOpacity style={styles.searchIcon} activeOpacity={0.7} onPress={props.onClose}>
                <Icon name='close' size={12} color='white' />
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    main: {
        backgroundColor: Colors.primary,
        borderRadius: 14,
        alignItems: 'center',
        borderWidth: 0.6,
        height: 26,
        borderColor: Colors.lightGray,
        marginStart: 10,
        marginEnd: 10,
    },
    searchIcon: {
        position: 'absolute',
        top: -1,
        right: -6,
        justifyContent: 'center',
        padding: 1,
        backgroundColor: Colors.red,
        borderRadius: 40,
    },
    text: {
        ...textStyle.regular,
        color: Colors.lightGray,
        fontSize: 12,
        paddingStart: 10,
        paddingEnd: 10,
        paddingTop: 3,
        paddingBottom: 3
    }
});

export default ProfileIcon;