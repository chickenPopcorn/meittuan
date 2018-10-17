import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
}
type State = {
}
export default class MineScene extends React.Component {
    render() {
        return (
            <View>
                <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
                    style={{ justifyContent: 'center', alignItems: 'center', width: 400, height: 400 }} />
                <Text>Mine</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
});