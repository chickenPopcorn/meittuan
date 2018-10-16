import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import screen from '../../common/screen';


type Props = {
    titile: string,
    icon: any,
    onPress: Function,
}
type State = {

}
export default class HomeMenuItem extends React.Component {
    render() {
        let {title, icon, onPress} = this.props
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image style={styles.icon}
                    source={icon}
                />
                <Text>{title}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width:  screen.width / 5,
        height:  screen.width / 5,
    },
    icon: {
        width:  screen.width / 9,
        height:  screen.width / 9,
        margin: 5,
    }
});