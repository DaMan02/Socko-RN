import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import textStyle from '../../assets/fonts/textStyle';
import Colors from '../../assets/Colors';
import { Rating } from 'react-native-ratings';

// props: name, rating, url

class Lab extends React.Component {
    render() {
        let rateInt = this.props.rating;
        rateInt = rateInt.toFixed(1)
        return (
            <TouchableOpacity activeOpacity={0.9} style={styles.main}>
                    <Image source={this.props.url}
                        style={styles.img} />
                    <Text style={{ ...textStyle.bold, fontSize: 14, marginBottom: 20 }}>{this.props.name}</Text>
                    <View style={styles.rate}>
                        <Text style={styles.rateText}>{rateInt}</Text>
                        <Rating
                            imageSize={14}
                            readonly
                            startingValue={this.props.rating}
                            style={styles.rating}
                        />
                    </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    rating: {
        padding: 2,
    },
    rate: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        flexDirection: 'row',
    },
    main: {
        marginTop: 6,
        marginBottom: 10,
        marginHorizontal: 8,
        elevation: 1,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingEnd: 4,
        width: 160,
        paddingStart: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    img: {
        resizeMode: 'contain',
        height: 40,
        width: 82,
    },
    rateText: {
        ...textStyle.bold,
        backgroundColor: Colors.darkgreen,
        paddingStart: 3,
        paddingEnd: 3,
        borderRadius: 4,
        fontSize: 11,
        color: 'white',
        marginEnd: 1
    }
});

export default Lab;