import { StyleSheet } from 'react-native';
import Colors from '../Colors';

export default StyleSheet.create({
  regular: {
    fontSize: 14,
    fontFamily:'Nunito-Regular',
    color: Colors.fontDark
  },
  bold: {
    fontSize: 14,
    fontFamily:'Nunito-Bold',
    color: Colors.fontDark,
  },
  boldest: {
    fontSize: 15,
    fontFamily:'Nunito-ExtraBold',
    color: Colors.fontDark,
  },
  semi_bold: {
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
    color: Colors.fontDark
  },
  light: {
    fontSize: 14,
    fontFamily:'Nunito-Light',
    color: Colors.fontLight
  },
  lightest: {
    fontSize: 14,
    fontFamily:'Nunito-Light',
    color: Colors.fontLightest
  },
});