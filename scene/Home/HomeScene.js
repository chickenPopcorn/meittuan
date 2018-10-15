import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem'

type Props = {
}
type State = {
}
export default class HomeScene extends React.Component {
    static navigationOptions = () => ({
        headerStyle: { backgroundColor: color.primary },
        headerTitle: (
            <TouchableOpacity style={styles.searchBar}>
                <Image source={require('../../img/home/search_icon.png')}
                    style={styles.searchIcon} />
                <Text style={{ fontSize: 14 }}>Search</Text>
            </TouchableOpacity>
        ),
        headerLeft: (
            <NavigationItem title='City'
                titleStyle={{ color: 'white' }}
                onPress={() => { alert('test') }}
            />
        ),
        headerRight: (
            <NavigationItem
            icon={require("../../img/mine/icon_navigation_item_message_white.png")}/>
        ),

    });
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('WebScene', { url: 'https://www.google.com' })
                    }}>
                    <Text>Home Screen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.7,
        height: 30,
        borderRadius: 19,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    }

});