import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { widthPercentageToDP } from 'react-native-responsive-screen';

class BannerAd extends React.Component {
    state = {
        images: []
    }

    componentDidMount(){
        console.disableYellowBox = true;
    }

    render() {

        this.props.images.forEach(e => {
            this.state.images.push(e.bannerAppIcon)
            console.log('banner icon: ' + e.bannerAppIcon)
        });
        return (
            <View style={styles.container}>
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={130}
                    onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
                    dotColor='white'
                    inactiveDotColor='#E2E2E2'
                    dotStyle={styles.dot}
                    // autoplay
                    // circleLoop
                    resizeMode='stretch'
                    parentWidth={widthPercentageToDP('100%')}
                    imageLoadingColor='white'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        marginBottom: 8
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 15,
        marginHorizontal: -8
    }
});

export default BannerAd;