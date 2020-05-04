import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import SearchInput from '../../components/search/SearchInput';
import SearchChip from '../../components/search/SearchChip';
import Colors from '../../assets/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import textStyle from '../../assets/fonts/textStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderTitle from '../../components/title/HeaderTitle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TestDescription from '../../components/card/TestDesciption';
import LabTestListItem from '../../components/card/LabTestListItem';

const ICON_URL_TEMP = 'https://freedesignfile.com/upload/2017/08/telescope-icon-vector.png'

class LabTests extends React.Component {

  state = {
    searchTerm: ''
  }

  onBackPress() {
    this.props.navigation.goBack()
  }

  onChangeText(text) {
    this.setState({ searchTerm: text })
  }

  onSearchClear() {
    this.setState({ searchTerm: "" })
  }

  renderHeader() {
    return (
      <View style={styles.header}>
        <HeaderTitle title='Lab Tests' onBack={() => this.onBackPress()} />
        <SearchInput hint='Search Lab Tests'
          onChangeText={text => this.onChangeText(text)}
          value={this.state.searchTerm}
          onClear={() => this.onSearchClear()} />
        <ScrollView style={styles.chip} horizontal showsHorizontalScrollIndicator={false} >
          <SearchChip name='Dengue Antigen NS1' />
        </ScrollView>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}

        <View style={styles.subHead}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 14, marginTop: 14 }}>
            <Icon name="map-marker-radius" size={15} color={Colors.fontDark} />
            <Text style={styles.subText}>New Delhi</Text>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={{ flexDirection: 'row', alignItems: 'center', marginEnd: 14, marginTop: 14, paddingTop: 4, paddingEnd: 4, paddingStart: 4 }}>
            <Text style={styles.subText}>Filter</Text>
            <Icon name="filter" size={14} color={Colors.fontDark} />
          </TouchableOpacity>
        </View>
        <Text style={{ ...textStyle.regular, fontSize: 12, marginHorizontal: 30 }}>110008</Text>

        <ScrollView style={styles.body}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 8, marginBottom: 12 }}>
            <TestDescription title='Dengue Antigen NS1, IgG & IgM'
              desc='Molecular testing—a PCR test that detects the presence of the virus itself is generally considered the most reliable means of diagnosis....Positive IgM and IgG tests for dengue antibodies detected in an initial blood sample.' />
            <TestDescription title='Liver Function Test Liver function tests'
              desc='Liver Function Test Liver function tests, also referred to as a hepatic panel, These tests include prothrombin time (PT/INR), aPTT, albumin, bilirubin (direct and indirect),' />
          </ScrollView>

          <LabTestListItem
            iconUrl={{ uri: ICON_URL_TEMP }}
            labUrl={{ uri: 'https://content.jdmagicbox.com/comp/delhi/k6/011pxx11.xx11.171026144954.f9k6/catalogue/dr-lal-path-labs-home-collection-sultanpur-delhi-pathology-labs-z9om5wrwoe.jpg' }}
            likes='25' reviews='18' price='13,500' payable='7,800'
            addr1='CL House, 4/1-3,' addr2='Sri Aurobindo Marg,' addr3='Delhi 110016'
          />
          <LabTestListItem
            iconUrl={{ uri: ICON_URL_TEMP }}
            labUrl={{ uri: 'https://www.metropolisindia.com/wp-content/uploads/2016/09/r-v-metropolis-diagnostic-bangalore-1463053826-57346e020c2f1.png' }}
            likes='13' reviews='10' price='14,500' payable='8,000'
            addr1='CL House, 4/1-3,' addr2='Sri Aurobindo Marg,' addr3='Delhi 110016'
          />
          <LabTestListItem
            iconUrl={{ uri: ICON_URL_TEMP }}
            labUrl={{ uri: 'https://content.jdmagicbox.com/comp/delhi/k6/011pxx11.xx11.171026144954.f9k6/catalogue/dr-lal-path-labs-home-collection-sultanpur-delhi-pathology-labs-z9om5wrwoe.jpg' }}
            likes='25' reviews='18' price='13,500' payable='7,800'
            addr1='CL House, 4/1-3,' addr2='Sri Aurobindo Marg,' addr3='Delhi 110016'
          />
          <LabTestListItem
            iconUrl={{ uri: ICON_URL_TEMP }}
            labUrl={{ uri: 'https://content.jdmagicbox.com/comp/delhi/k6/011pxx11.xx11.171026144954.f9k6/catalogue/dr-lal-path-labs-home-collection-sultanpur-delhi-pathology-labs-z9om5wrwoe.jpg' }}
            likes='25' reviews='18' price='13,500' payable='7,800'
            addr1='CL House, 4/1-3,' addr2='Sri Aurobindo Marg,' addr3='Delhi 110016'
          />
          <LabTestListItem
            iconUrl={{ uri: ICON_URL_TEMP }}
            labUrl={{ uri: 'https://www.metropolisindia.com/wp-content/uploads/2016/09/r-v-metropolis-diagnostic-bangalore-1463053826-57346e020c2f1.png' }}
            likes='13' reviews='10' price='14,500' payable='8,000'
            addr1='CL House, 4/1-3,' addr2='Sri Aurobindo Marg,' addr3='Delhi 110016'
          />
          <LabTestListItem
            iconUrl={{ uri: ICON_URL_TEMP }}
            labUrl={{ uri: 'https://content.jdmagicbox.com/comp/delhi/k6/011pxx11.xx11.171026144954.f9k6/catalogue/dr-lal-path-labs-home-collection-sultanpur-delhi-pathology-labs-z9om5wrwoe.jpg' }}
            likes='25' reviews='18' price='13,500' payable='7,800'
            addr1='CL House, 4/1-3,' addr2='Sri Aurobindo Marg,' addr3='Delhi 110016'
          />
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: Colors.primary,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    height: hp('25%'),
    elevation: 4
  },
  chip: {
    marginTop: hp('3%')
  },
  subHead: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subText: {
    ...textStyle.bold,
    fontSize: 15,
    marginHorizontal: 3,
  },
  body: {
    backgroundColor: 'white',
    marginTop: 14,
  }
});

export default LabTests;