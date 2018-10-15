import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ViewPropTypes, Image} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

type Props = {
    title: string,
    titleStyle?: ViewPropTypes.style,
    onPress?: Function,
    icon: any,
    iconStyle?: ViewPropTypes.style,
}
type State = {
}
export default class NavigationItem extends React.Component {
    render() {
        let { title, titleStyle, icon, iconStyle, onPress } = this.props
        let titleElement = title && (
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        )
        let iconElement = icon && (
            <Image source={icon} style={[styles.icon, iconStyle]}/>
        )
        return (
            <TouchableOpacity onPress={onPress} style={styles.container}>

                {titleElement}
                {iconElement}
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        color: '#333333',
        margin: 8
    },
     icon: {
         width: 27,
         height: 27,
         margin: 8
     }
});