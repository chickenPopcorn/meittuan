import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
}
type State = {
}
export default class MyClass extends React.Component {
    constructor (props: Object) {
        super(props)
        alert(this.props.navigation.state.params.url)
    }
    render() {
        return (
            <View><Text>1231321</Text></View>
        )
    }
}
const styles = StyleSheet.create({
});