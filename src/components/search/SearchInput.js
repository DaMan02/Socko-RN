import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from "react-native";
import Colors from '../../assets/Colors';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import textStyle from '../../assets/fonts/textStyle';

// props: onChangeText, value, hint, onClear

const SearchInput = (props) => (
    <View style={styles.search}>
         <Image source={require('../../assets/images/Search.png')}
                        style={styles.img} />
        <TextInput
            style={styles.searchbar}
            onChangeText={text => props.onChangeText(text)}
            value={props.value}
            placeholder={props.hint}
            autoCapitalize='words'
            textAlign='left'
        />
        <TouchableOpacity style={styles.searchIcon} activeOpacity={0.7} onPress={props.onClear}>
         <Icon name='cancel' size={18} color={Colors.darkgray} />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    searchIcon: {
        position: 'absolute',
        right: 12,
        padding: 4
    },
    searchbar: {
        fontSize: 16,
        marginStart: 10,
        marginEnd: 40,
    },
    img: {
        resizeMode: 'contain',
        height: 15,
        width: 15
    },
    search: {
        backgroundColor: Colors.lightGray,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 14,
        paddingEnd: 14,
        marginStart: widthPercentageToDP('6%'),
        marginEnd: widthPercentageToDP('6%'),
        borderRadius: 26,
        elevation: 1
    },
});

export default SearchInput;