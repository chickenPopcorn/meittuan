import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

type Props = {
    normalIamge: any,
    selectedImage: any,
    focused: boolean,
    tintColor: any,
}
type State = {
}
export default class TabBarItem extends PureComponent {
    render() {
        let { normalImage, selectedImage, focused, tintColor } = this.props;
        return (
            <Image source={focused ? selectedImage : normalImage}
                style={{ width: 25, height: 25, tintColor: tintColor }}
            />
        )
    }
}
const styles = StyleSheet.create({
});