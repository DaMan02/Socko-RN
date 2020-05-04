import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import textStyle from '../../assets/fonts/textStyle';
import Colors from '../../assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP } from 'react-native-responsive-screen';

// props: title, sub

class CartTestItem extends React.Component {

    state = {
        visible: true
    }

    render() {
        if (!this.state.visible)  return (<View></View>)
            return (
                <View style={styles.main}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.sub}>{this.props.sub}</Text>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4, padding: 2 }}
                        activeOpacity={0.5} onPress={() => this.setState({ visible: false })}>
                        <View style={styles.searchIcon}>
                            <Icon name='close' size={12} color='white' />
                        </View>
                        <Text style={styles.remove}>REMOVE</Text>
                    </TouchableOpacity>

                    <View style={styles.price}>
                        <Text style={{ ...textStyle.bold, fontSize: 12, color: Colors.fontLight }}>Price</Text>
                        <Text style={{ flexDirection: 'row' }}>
                            <Text style={{ ...textStyle.bold, fontSize: 12, color: Colors.fontLight }}>₹ </Text>
                            <Text style={{ ...textStyle.boldest, fontSize: 18 }}>{this.props.price}</Text>
                        </Text>
                    </View>
                </View>
            )
    }
}

const styles = StyleSheet.create({
    main: {
        marginHorizontal: 12,
        paddingEnd: 10,
        paddingTop: 6,
    },
    price: {
        position: 'absolute',
        alignSelf: 'flex-end',
        alignItems: 'center',
        paddingEnd: 8,
        alignItems: 'flex-end',
        paddingTop: 16,
    },
    title: {
        ...textStyle.bold,
        fontSize: 16,
        color: Colors.fontLight,
        marginTop: 8
    },
    sub: {
        ...textStyle.light,
        fontSize: 11,
        maxWidth: widthPercentageToDP('70%')
    },
    remove: {
        ...textStyle.semi_bold,
        fontSize: 12,
        color: Colors.lightRed,
        marginStart: 6
    },
    searchIcon: {
        backgroundColor: Colors.lightRed,
        borderRadius: 40,
        height: 14,
        width: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default CartTestItem;