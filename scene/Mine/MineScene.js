import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

type Props = {
}
type State = {
}
export default class MineScene extends React.Component {
    render() {
        return (
            <View>
                 <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
   style={{justifyContent:'center', alignItems: 'center', width: 400, height: 400}} />
                 <Text>Mine</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
});