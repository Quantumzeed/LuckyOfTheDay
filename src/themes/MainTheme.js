import {StyleSheet, Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');
export const SIZE = 64;
export const ICON_SIZE = SIZE * 0.6;
export const SPACING = 12;

const s = width * 0.84; //* 0.68;

export const toturial2Spec = {
  ITEM_WIDTH: s,
  ITEM_HIGHT: s * 1.5,
  //ITEM_HIGHT: s,
  RADIUS: 18,
  SPACING,
  FULL_SIZE: s + SPACING * 2,
};

export const colors = {
  textDark: '#14478b',
  textLight: '#f8f9f8',
  forground: '#275ca5',
  forground2: '#f2b80e',
  forground3: '#dbeaf1',
  forground4: '#44a6a6',
  background: '#f27306',
  background2: '#d61503',
};

export default MainTheme = StyleSheet.create({
  header1: {
    fontSize: 25,
    fontWeight: '600',
    color: colors.forground4,
  },
  header2: {
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'italic',
    color: colors.forground2,
  },
  body: {
    fontSize: 16,
    color: colors.textDark,
  },
  card: {
    borderColor: colors.forground,
    borderWidth: 5,
    borderRadius: 10,
    padding: 20,
    width: '50%',
    height: 150,
  },
});
