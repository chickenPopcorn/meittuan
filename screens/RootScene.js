import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import TabBarItem from '../widget/TabBarItem'
import HomeScene from '../scene/Home/HomeScene'
import NearbyScene from '../scene/Nearby/NearbyScene'
import OrderScene from '../scene/Order/OrderScene'
import MineScene from '../scene/Mine/MineScene'
import WebScene from '../scene/Web/WebScene'
import color from '../widget/color'

type Props = {
}
type State = {
}
export default class RootScene extends React.PureComponent {
    render() {
        return (
            <Navigator />
        )
    }
}

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScene,
    },
})


const NearbyStack = createStackNavigator({
    Nearby: {
        screen: NearbyScene,
    },
})


const OrderStack = createStackNavigator({
    Order: {
        screen: OrderScene,
    }
})


const MineStack = createStackNavigator({
    Mine: {
        screen: MineScene,
    },
})

const Tab = createBottomTabNavigator({
    Home: {
        screen: HomeStack,

        navigationOptions: () => ({
            tabBarLabel: "Home",
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../img/tabbar/tabbar_homepage.png')}
                    selectedImage={require('../img/tabbar/tabbar_homepage_selected.png')}

                />
            )
        })
    },

    Nearby: {
        screen: NearbyStack,

        navigationOptions: () => ({
            tabBarLabel: "Nearby",
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../img/tabbar/tabbar_merchant.png')}
                    selectedImage={require('../img/tabbar/tabbar_merchant_selected.png')}

                />
            )
        })
    },
    Order: {
        screen: OrderStack,

        navigationOptions: () => ({
            tabBarLabel: "Order",
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../img/tabbar/tabbar_order.png')}
                    selectedImage={require('../img/tabbar/tabbar_order_selected.png')}

                />
            )
        })
    },
    Mine: {
        screen: MineStack,

        navigationOptions: () => ({
            tabBarLabel: "Mine",
            tabBarIcon: ({ focused, tintColor }) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../img/tabbar/tabbar_mine.png')}
                    selectedImage={require('../img/tabbar/tabbar_mine_selected.png')}

                />
            )
        })
    },
},
    {
        tabBarOptions: {
            activeTintColor: color.primary,
            inactiveTintColor: color.gray,
            style: { backgroundColor: 'white' }
        }
    }
)

Tab.navigationOptions = {
    // Hide the header from AppNavigator stack
    header: null,
};

const Navigator = createStackNavigator({
    Tab: { screen: Tab },
    WebScene: { screen: WebScene }
}, {
        navigationOptions: {
            headerTintColor: 'red',
            backgroundColor: 'black',
            headerBackTitle: null,
        }
    })