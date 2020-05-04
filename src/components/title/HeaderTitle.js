import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import textStyle from '../../assets/fonts/textStyle';
import Icon from 'react-native-vector-icons/Ionicons';

// props: title, onBack

const HeaderTitle = (props) => (
    <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={styles.back} activeOpacity={0.5} onPress={props.onBack}>
            <Icon name='md-arrow-back' size={20} color='white' />
        </TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
    </View>
);

const styles = StyleSheet.create({
    title: {
        ...textStyle.regular,
        color: 'white',
        fontSize: 15,
        marginTop: 10,
        marginStart: 10,
        marginBottom: 8
    },
    back: {
        marginVertical: 8,
        marginEnd: 10,
        marginStart: 18,
        padding: 4
    }
});

export default HeaderTitle;