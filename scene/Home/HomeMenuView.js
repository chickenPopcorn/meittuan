import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HomeMenuItem from './HomeMenuItem';
import screen from '../../common/screen';
import PageControl from 'react-native-page-control';
import color from '../../widget/color'


type Props = {
    menuInfos: array<Object>,
    onMenuSelected: Function,
}
type State = {
    currentPage: number,
}
export default class HomeMenuView extends React.PureComponent<Props, State> {
    constructor(props: Object){
        super(props)
        this.state = {
            currentPage: 0
        }
    }

    onScroll = (e) => {
        let x = e.nativeEvent.contentOffset.x
        let currentPage = Math.round(x/ screen.width)
        if (this.state.currentPage != currentPage) {
            this.setState({currentPage: currentPage});
        }
        
    }

    render() {
        let { menuInfos, onMenuSelected } = this.props
        let pageCount = Math.ceil(menuInfos.length / 10);
        let menuElements = menuInfos.map((info, index) => (
            <HomeMenuItem key={index}
                title={info.title}
                icon={info.icon}
                onPress={() => {
                    onMenuSelected(index)
                 }}
            />
        ))

        let menuViews = [];
        for (let i = 0; i < pageCount; i++) {
            let elementsPerPage = menuElements.slice(i * 10, i * 10 + 10);
            let menuView = (
                <View key={i} style={styles.itemsView}>
                    {elementsPerPage}
                </View>
            )
            menuViews.push(menuView)
        }

        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={this.onScroll}
                >
                    {menuViews}
                </ScrollView>
                <PageControl
                    style={styles.pageControl}
                    numberOfPages={pageCount}
                    currentPage={this.state.currentPage}
                    pageIndicatorTintColor='gray'
                    currentPageIndicatorTintColor={color.primary}
                />
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },

    itemsView: {

        flexDirection: 'row',
        width: screen.width,
        flexWrap: 'wrap',
    },
    pageControl: {
        margin: 10
    }
});