import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as api from "../../api";
import screen from '../../common/screen';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';
import SpacingView from '../../widget/SpacingView';
import HomeGridView from './HomeGridView';
import HomeMenuView from './HomeMenuView';

type Props = {
    discount: Object,
}

type State = {

}
export default class HomeScene extends React.Component {

    constructor (props: Object) {
        super(props)
        this.state = {
            discounts: [],
        }
    }

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

    componentDidMount() {
        this.requestData();
    }

    requestData = async () => {
        try {
            // let response = await fetch(api.default.discount)
            // let json = await response.json()
            let json = api.default.discount
            this.setState({ discounts: json })
        } catch (error) {
            alert(error);
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <HomeMenuView
                    menuInfos={api.menuInfo}
                    onMenuSelected={(index) => {
                        alert(index);
                    }} />

                <SpacingView />
                <HomeGridView infos={this.state.discounts} />
                <SpacingView />
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
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderColor: color.border,
    }
});