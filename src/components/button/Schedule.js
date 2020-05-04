import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { widthPercentageToDP } from 'react-native-responsive-screen';
import textStyle from '../../assets/fonts/textStyle';
import Colors from '../../assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons'

// props: labs, onPress

const Schedule = (props) => (
    <TouchableOpacity activeOpacity={0.8} style={{...styles.main, marginTop: props.top}} onPress={props.onPress}>
        <Text style={styles.text1}>{props.labs} Labs selected</Text>
        <View style={{flexDirection: 'row', paddingEnd: 16}}>
            <Text style={styles.text2}>SCHEDULE </Text>
            <Icon name='arrow-forward' size={20} color='white'/>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        borderRadius: 8,
        width: widthPercentageToDP('94%'),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.lightBlue,
        elevation: 1,
        paddingHorizontal: 2,
        paddingVertical: 14,
        marginTop: 20,
        marginBottom: 28
    },
    text1: {
        ...textStyle.regular,
        color: 'white',
        fontSize: 16,
        paddingStart: 16
    },
    text2: {
        ...textStyle.boldest,
        color: 'white',
        fontSize: 16
    }
});

export default Schedule;