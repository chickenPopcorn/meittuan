import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';
import * as api from "../../api";
import HomeMenuView from './HomeMenuView';
import screen from '../../common/screen';

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
                icon={require("../../img/mine/icon_navigation_item_message_white.png")} />
        ),

    });
    

    render() {
        return (
            <View>
                <HomeMenuView
                    menuInfos={api.menuInfo}
                    onMenuSelected={(index) => {
                        alert(index);
                     }} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        width: screen.width * 0.7,
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