import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import textStyle from '../../assets/fonts/textStyle';
import Colors from '../../assets/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// props: 

class LabTestListItem extends React.Component {
    state = {
        selected: false
    }

    onSelect() {
        this.setState({ selected: !this.state.selected })
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.top}>
                    <Image source={this.props.iconUrl}
                        style={styles.icon} />
                    <Image source={this.props.labUrl}
                        style={styles.img} />
                    <Icon name='heart' size={14} color={Colors.lightRed} />
                    <Text style={{ ...textStyle.regular, fontSize: 13 }}>{this.props.likes}</Text>
                    <View style={styles.divider}></View>
                    <Text style={{ flexDirection: 'row' }}>
                        <Text style={{ ...textStyle.bold, fontSize: 13 }}>Reviews</Text>
                        <Text style={{ ...textStyle.bold, fontSize: 13, color: Colors.lightGreen }}>{this.props.reviews}</Text>
                    </Text>
                </View>
                <Text style={{ ...styles.addr, marginTop: 3 }}>{this.props.addr1}</Text>
                <Text style={styles.addr}>{this.props.addr2}</Text>
                <Text style={styles.addr}>{this.props.addr3}</Text>

                <View style={styles.right}>
                    <Text
                        style={{
                            ...textStyle.semi_bold, color: Colors.lightRed, fontSize: 12,
                            textDecorationLine: 'line-through'
                        }}>
                        ₹ {this.props.price}</Text>
                    <Text style={{ ...textStyle.boldest, fontSize: 17 }}>₹ {this.props.payable}</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => this.onSelect()}
                        style={{
                            backgroundColor: this.state.selected ? Colors.lightGreen : Colors.primary,
                            borderRadius: 20,
                            paddingHorizontal: 18,
                            paddingVertical: 4,
                            marginTop: 10
                        }}>
                        <Text style={{ ...textStyle.boldest, color: 'white' }}>
                            {this.state.selected ? 'SELECTED' : 'SELECT'}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        marginTop: 6,
        marginBottom: 10,
        marginHorizontal: 10,
        elevation: 1,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingEnd: 10,
        paddingTop: 6,
        paddingBottom: 10,
        paddingHorizontal: 4
    },
    button: {

    },
    icon: {
        height: 30,
        width: 30,
        marginEnd: 4
    },
    img: {
        width: 100,
        height: 32,
        marginEnd: 4
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    addr: {
        ...textStyle.regular,
        marginStart: 32,
        fontSize: 12,
    },
    divider: {
        backgroundColor: Colors.fontDark,
        width: 1,
        height: 14,
        marginHorizontal: 4
    },
    right: {
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingEnd: 8,
        alignItems: 'flex-end',
        paddingTop: 6,
    }
});

export default LabTestListItem;