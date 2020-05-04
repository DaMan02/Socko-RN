import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Colors from '../../assets/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchInput from '../../components/search/SearchInput';
import SearchChip from '../../components/search/SearchChip';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonWithIcon from '../../components/button/ButtonWithIcon';
import textStyle from '../../assets/fonts/textStyle';
import TitleText from '../../components/title/TitleText';
import LabTest from '../../components/card/LabTest';
import Package from '../../components/card/Package';
import Lab from '../../components/card/Lab';
import PopularTest from '../../components/card/PopularTest';
import TopCat from '../../components/category/TopCat';
import BannerAd from '../../components/banner/BannerAd';
import Const from '../../helpers/Const'

class Landing extends React.Component {

    state = {
        searchTerm: '',
        data: [],
        bannerImages: []
    }

    onChangeText(text) {
        this.setState({ searchTerm: text })
    }

    onSearchClear() {
        this.setState({ searchTerm: '' })
    }

    componentDidMount() {

        let home_url = Const.apis.HOME_ASSETS

        fetch(home_url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data: responseJson.data })
                this.setState({ bannerImages: responseJson.data.banners })
                // alert(JSON.stringify(responseJson.data))
            })
            .catch((error) => {
                // this.setState({loading: false})
                if (error)
                    console.warn(error);
            });
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/images/logo.png')}
                        style={styles.logo} />
                    <Image source={require('../../assets/images/loc_white.png')}
                        style={styles.loc} />
                    <Text style={styles.locName}>Chennai</Text>
                    <Image source={require('../../assets/images/user.png')}
                        style={styles.user} />
                </View>
                <SearchInput hint='Search'
                    onChangeText={text => this.onChangeText(text)}
                    value={this.state.searchTerm}
                    onClear={() => this.onSearchClear()} />
                <ScrollView style={styles.chip} horizontal showsHorizontalScrollIndicator={false} >
                    <SearchChip name='Dengue Antigen NS1' />
                    <SearchChip name='Glycosylated Hemoglobin' />
                    <SearchChip name='Dengue Antigen NS1' />
                </ScrollView>
            </View>
        )
    }

    showLabTests() {
        this.props.navigation.push('LabTests')
    }

    renderTopLabs(item) {
        return (
            <Lab name={item.labName} rating={item.labRatings}
                url={{ uri: item.labLogo }} />
        )
    }

    renderPackage(item) {
        return (
            <Package
                title1={item.packageName}
                // title2='Comprehensive'
                url={{ uri: item.packageAppIcon }}
                sub={item.packageNoOfTests} />
        )
    }

    renderTopCat(item) {
        return (
            <TopCat uri={{ uri: item.categoryImage }}
                name={item.categoryName} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                <ScrollView style={{ marginTop: -18 }} showsVerticalScrollIndicator={false}>
                    <Image source={require('../../assets/images/offer_banner.png')}
                        style={styles.banner} />
                    <ButtonWithIcon title='UPLOAD PRESCRIPTION' />

                    <TitleText name='Frequently Booked Lab Test' />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <LabTest
                            title='Renal Funtion Test'
                            sub='Available @ 4 Certified Lab'
                            tests='3'
                            price='850' />
                        <LabTest
                            title='Blood Sugar Fasting'
                            sub='Selected from bioline'
                            tests='2'
                            price='120' />
                        <LabTest
                            title='Renal Funtion Test'
                            sub='Available @ 4 Certified Lab'
                            tests='3'
                            price='850' />
                    </ScrollView>

                    <TitleText name='Health Packages' />
                    <FlatList style={styles.list}
                        data={this.state.data.packages}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => this.renderPackage(item)}
                        keyExtractor={item => item.packageID}
                    />

                    <TitleText name='Top Labs' clickableText='VIEW ALL' />
                    <FlatList style={styles.list}
                        data={this.state.data.labs}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => this.renderTopLabs(item)}
                        keyExtractor={item => item.labID}
                        removeClippedSubviews={true} // Unmount components when outside of window 
                        initialNumToRender={4} // Reduce initial render amount
                        maxToRenderPerBatch={1} // Reduce number in each render batch
                        updateCellsBatchingPeriod={100} // Increase time between renders
                        windowSize={7} // Reduce the window size
                    />

                    <TitleText name='Popular Lab Tests' clickableText='VIEW ALL' onClick={() => this.showLabTests()} />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <PopularTest name='Diabetes Screening' rs='519'
                            labs='10' uri={require('../../assets/images/Diabetes.png')} />
                        <PopularTest name='Corona Virus- Sars'
                            sub='COVID-19' rs='4,500'
                            labs='5' uri={require('../../assets/images/Virus_icon.png')} />
                        <PopularTest name='Kidnay Function'
                            sub='Renal Funtion' rs='400'
                            labs='12' uri={require('../../assets/images/Kidney_function.png')} />
                    </ScrollView>

                    <TitleText name='Deals And Offers' />
                    <BannerAd images={this.state.bannerImages} />

                    <TitleText name='Top Categories' />
                    <ScrollView style={styles.topCat} horizontal showsHorizontalScrollIndicator={false}>
                        <FlatList style={styles.list}
                            data={this.state.data.testCategories}
                            numColumns={3}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => this.renderTopCat(item)}
                            keyExtractor={item => item.categoryID}
                            removeClippedSubviews={true} // Unmount components when outside of window 
                            initialNumToRender={21} // Reduce initial render amount
                            maxToRenderPerBatch={1} // Reduce number in each render batch
                            updateCellsBatchingPeriod={100} // Increase time between renders
                            windowSize={7} // Reduce the window size
                        />
                    </ScrollView>
                    {/* <TopCat uri={require('../../assets/images/Fever.png')}
                                name='Fever' />
                            <TopCat uri={require('../../assets/images/Pregnancy.png')}
                                name='Pregnancy' />
                            <TopCat uri={require('../../assets/images/Heart.png')}
                                name='Heart' />
                        </ScrollView>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <TopCat uri={require('../../assets/images/Bones.png')}
                                name='Bones & Joints' />
                            <TopCat uri={require('../../assets/images/Alcohol.png')}
                                name='Alcoholism' />
                            <TopCat uri={require('../../assets/images/Allergies.png')}
                                name='Allergy' />
                        </ScrollView>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <TopCat uri={require('../../assets/images/Poor_nutrition.png')}
                                name='Poor Nutrition' />
                            <TopCat uri={require('../../assets/images/Anaemia.png')}
                                name='Anaemia' />
                            <TopCat uri={require('../../assets/images/Infections.png')}
                                name='Infections' />
                        </ScrollView>
                        <TopCat uri={require('../../assets/images/Std.png')}
                            name='STD' /> 
                    </ScrollView> */}

                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: Colors.primary,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        height: hp('29%'),
        elevation: 4
    },
    logo: {
        alignSelf: 'flex-start',
        resizeMode: 'contain',
        width: 38,
        marginStart: 16,
        marginTop: 14,
        height: 38,
        marginBottom: 10
    },
    loc: {
        alignSelf: 'flex-start',
        resizeMode: 'contain',
        width: 14,
        marginStart: 28,
        marginTop: 26,
        height: 14,
    },
    locName: {
        ...textStyle.regular,
        marginTop: 24,
        color: 'white',
        textAlign: 'center',
        marginStart: 4,
    },
    chip: {
        marginTop: hp('3%')
    },
    user: {
        position: 'absolute',
        top: 20,
        right: 20,
        height: 30,
        width: 30
    },
    banner: {
        // marginTop: -10,
        resizeMode: 'stretch',
        height: hp('29%'),
        width: wp('100%'),
    },
    topCat: {
        marginTop: 6,
        marginBottom: 40
    }
});

export default Landing;