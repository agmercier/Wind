import { Platform } from 'react-native';
import colors from './colors';


export default {
    colors,
    text: {
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: colors.white,
    fontSize: 18,   
    }
}