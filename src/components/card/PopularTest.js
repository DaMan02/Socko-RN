import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import textStyle from '../../assets/fonts/textStyle';
import Colors from '../../assets/Colors';

// props: name, sub, labs, rs, uri

class PopularTest extends React.Component {
    renderSub() {
        if (this.props.sub)
            return (
                <Text style={styles.sub}>{this.props.sub}</Text>
            )
    }
    renderDummy() {
        if (!this.props.sub)
            return (
                <View style={{height: 15}}></View>
            )
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={0.9} style={styles.main}>
                <Image source={this.props.uri}
                    style={styles.img} />
                <Text style={{ ...textStyle.bold, fontSize: 14 }}>{this.props.name}</Text>
                {this.renderSub()}
                <Text style={styles.sub}>Provided by {this.props.labs} labs</Text>
                {this.renderDummy()}
                <Text style={styles.rs}>₹ {this.props.rs}</Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    main: {
        marginTop: 6,
        marginBottom: 10,
        marginStart: 10,
        marginEnd: 10,
        elevation: 1,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        paddingEnd: 4,
        width: 160,
        paddingStart: 10,
        paddingTop: 10,
        paddingEnd: 10,
        paddingBottom: 4
    },
    img: {
        resizeMode: 'contain',
        height: 34,
        width: 34,
    },
    sub: {
        ...textStyle.light,
        fontSize: 11,
        color: Colors.fontLight,
    },
    rs: {
        ...textStyle.bold,
        fontSize: 16,
        marginTop: 10
    }
});

export default PopularTest;