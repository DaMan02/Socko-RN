import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Colors from '../../assets/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderTitle from '../../components/title/HeaderTitle';
import CartTestItem from '../../components/card/CartTestItem';
import Icon from 'react-native-vector-icons/MaterialIcons'
import textStyle from '../../assets/fonts/textStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Promocode from '../../components/card/Promocode';
import Schedule from '../../components/button/Schedule';

class Cart extends React.Component {

  onBackPress() {
    this.props.navigation.goBack()
  }

  renderHeader() {
    return (
      <View style={styles.header}>
        <HeaderTitle title='Cart' onBack={() => this.onBackPress()} />
      </View>
    )
  }

  renderLabTestCard(name, addr) {
    return (
      <View style={styles.labtest}>
        <Text style={{ ...textStyle.boldest, fontSize: 18, marginTop: 10, marginStart: 14 }}>{name}</Text>
        <View style={{ flexDirection: 'row', marginStart: 14 }}>
          <Icon name='location-on' size={12} color={Colors.fontLightest} />
          <Text style={{ ...textStyle.light, fontSize: 11, maxWidth: wp('60%') }}>
            {addr}</Text>
        </View>
        <CartTestItem title='Liver Function Test' sub='These tests include prothrombin time(PT/INR)'
          price='8,000' />
        <CartTestItem title='Anti Cardiolipin IgM Antibody' sub='These tests include prothrombin time(PT/INR)'
          price='1,000' />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>

          <TouchableOpacity activeOpacity={0.7} style={{ alignItems: 'flex-end', marginEnd: 20, marginTop: 10 }}>
            <Text style={{ ...textStyle.regular, color: Colors.lightRed, fontSize: 17 }}>Change Lab</Text>
          </TouchableOpacity>

          <ScrollView showsVerticalScrollIndicator={false}>
            {this.renderLabTestCard('Metropolis', 'Block A, No 12, Sriram Gateway Building, Ambattur, Chennai')}
          </ScrollView>

          <Promocode price='500' code='SOCKO50' />

          <View style={styles.mrp}>
            <View>
              <Text style={styles.leftPrice}>M.R.P Total</Text>
              <Text style={styles.rightPrice}>₹ 8,000</Text>
            </View>
            <View>
              <Text style={styles.leftPrice}>Price Discount</Text>
              <Text style={styles.rightPrice}>- ₹ 500</Text>
            </View>
            <View>
              <Text style={styles.leftPrice}>Coupon Discount</Text>
              <Text style={styles.rightPrice}>- ₹ 550</Text>
            </View>
            <View style={{backgroundColor: '#fafafa', marginHorizontal: 6, marginVertical: 12}}>
              <Text style={styles.leftPriceTotal}>TOTAL</Text>
              <Text style={styles.rightPriceTotal}>₹ 6950</Text>
            </View>
            <View style={{backgroundColor: '#f5fbf6', marginHorizontal: 6, marginVertical: 12}}>
              <Text style={{...styles.leftPriceTotal, color: Colors.lightGreen}}>TOTAL SAVINGS</Text>
              <Text style={{...styles.rightPriceTotal, color: Colors.lightGreen}}>₹ 550</Text>
            </View>
          </View>

          <Schedule labs='1' top={hp('14%')} onPress={() => console.log('clicked')}/>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  mrp: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 20
  },
  header: {
    backgroundColor: Colors.primary,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    height: hp('8%'),
    elevation: 4
  },
  labtest: {
    marginHorizontal: 14,
    marginVertical: 10,
    paddingBottom: 12,
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 8
  },
  leftPrice: {
    ...textStyle.regular,
    fontSize: 15,
    paddingVertical: 7,
    marginStart: 20
  },
  leftPriceTotal: {
    ...textStyle.semi_bold,
    fontSize: 17,
    paddingVertical: 4,
    marginStart: 16
  },
  rightPrice: {
    ...textStyle.bold,
    fontSize: 17,
    position: 'absolute',
    right: 20,
    paddingVertical: 7
  },
  rightPriceTotal: {
    ...textStyle.boldest,
    fontSize: 20,
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    right: 16,
    paddingVertical: 4,
  }
});

export default Cart;