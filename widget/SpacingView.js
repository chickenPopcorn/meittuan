import React from 'react';
import { StyleSheet, View } from 'react-native';
import color from '../widget/color';


type Props = {

}
type State = {

}
export default class SpacingView extends React.PureComponent<Props, State> {
    render() {
        return (
            <View style={styles.container} />
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: 14,
        backgroundColor: color.paper
    }
});