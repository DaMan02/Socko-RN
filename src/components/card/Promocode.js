import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import textStyle from '../../assets/fonts/textStyle';
import Colors from '../../assets/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { widthPercentageToDP } from 'react-native-responsive-screen';

// props: code, price

class Promocode extends React.Component {

    state = {
        visible: true
    }

    render() {
        if (!this.state.visible) return (<View></View>)
        return (
            <View style={styles.main}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/images/star.png')} style={styles.img} />
                    <View>
                        <Text style={{ flexDirection: 'row' }}>
                            <Text style={{ ...textStyle.semi_bold, fontSize: 15 }}>You Saved </Text>
                            <Text style={{ ...textStyle.boldest, color: Colors.lightGreen, fontSize: 16 }}>₹ {this.props.price}</Text>
                        </Text>
                        <Text style={{ flexDirection: 'row', maxWidth: widthPercentageToDP('70%') }}>
                            <Text style={{ ...textStyle.boldest, fontSize: 16 }}>{this.props.code}</Text>
                            <Text style={{ ...textStyle.regular, color: Colors.fontLight, fontSize: 15 }}> Applied Offer</Text>
                        </Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.remove} onPress={() => this.setState({ visible: false })}>
                    <Text style={{ ...textStyle.semi_bold, color: Colors.lightRed }}>REMOVE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
     marginVertical: 20
    },
    img: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginStart: 16,
        marginEnd: 10,
        alignSelf: 'center'
    },
    remove: {
        position: 'absolute',
        alignSelf: 'flex-end',
        top: 22,
        right: 16     
    }
});

export default Promocode;