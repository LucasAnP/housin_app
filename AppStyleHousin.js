import { Dimensions, PixelRatio} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const _fontSizeSet = (size) => {
  const scale = WINDOW_WIDTH / 320;
  const newSize = size * scale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

const _colors = {
  primary: '#FF572D',
  secondary:'#F1F5F8',

  inputColor:'#C4C4C4',

  lightPrimary:'#FF8669',

  textSub:'#807D7D',
  textGray:'#ACB3AF',

  textDarkGray:'#69626D',

  grayBack:'#D3D3D3',

  grayIce:'#E6E6F2'
};
const _fontSet = {
  xxlarge: _fontSizeSet(36),
  xlarge: _fontSizeSet(30),
  large: _fontSizeSet(22),
  middle: _fontSizeSet(18),
  normal: _fontSizeSet(16),
  small: _fontSizeSet(14),
  xsmall: _fontSizeSet(12),
  xxsmall: _fontSizeSet(10),
};

const lightColors={
  mainThemeBackgroundColor:_colors.primary,
  minLinearThemeBackground:_colors.lightPrimary,
  secondThemeBackgroundColor:_colors.secondary,

  cardBackgroundColor:_colors.grayIce,

  grayBackground:_colors.grayBack,

  buttonColor:_colors.lightPrimary,
  inputColor:_colors.inputColor,

  whiteText: _colors.secondary,
  themeText: _colors.primary,
  textDarkGray:_colors.textDarkGray,

  subText: _colors.textSub,
  subTextGray:_colors.textGray,


}
const darkColors={
  mainThemeBackgroundColor:_colors.primary,
  minLinearThemeBackground:_colors.lightPrimary,
  secondThemeBackgroundColor:_colors.secondary,

  cardBackgroundColor:_colors.grayIce,

  grayBackground:_colors.grayBack,

  buttonColor:_colors.lightPrimary,
  inputColor:_colors.inputColor,

  whiteText: _colors.secondary,
  themeText: _colors.primary,
  textDarkGray:_colors.textDarkGray,

  subText: _colors.textSub,
  subTextGray:_colors.textGray
}

const _colorSet = {
  light: lightColors,
  dark: darkColors
}
const AppStyles = {
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
  lightColors,
  darkColors,
  colorSet:_colorSet,
  fontSet: _fontSet,
}

export default AppStyles;
