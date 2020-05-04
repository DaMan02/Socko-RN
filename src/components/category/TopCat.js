import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import textStyle from '../../assets/fonts/textStyle';
import { heightPercentageToDP } from 'react-native-responsive-screen';

// props: name, onClose

const TopCat = (props) => (
    <TouchableOpacity style={styles.main} activeOpacity={0.9}>
            <Image source={props.uri}
                style={styles.img} />
        <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    main: {
        marginHorizontal: heightPercentageToDP('1'),
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
        elevation: 1,
        paddingVertical: 14,
        marginBottom: 10,
        width: heightPercentageToDP('18%')
    },
    img: {
        height: 60,
        width: 60,
    },
    text: {
        ...textStyle.bold,
        marginTop: 2,
        textAlign: 'center'
    }
});

export default TopCat;