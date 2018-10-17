import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import screen from '../../common/screen';
import color from '../../widget/color';
import { Heading2, Heading3 } from '../../widget/Text';


type Props = {
    info: Object,

}
type State = {

}
export default class HomeGridItem extends React.PureComponent<Props, State> {
    render() {
        let { info } = this.props;
        let title = info.maintitle;
        let color = info.typeface_color;
        let subtitle = info.deputytitle;
        let imageUrl = info.imageurl;


        return (
            <TouchableOpacity style={styles.container}>
                <View>
                    <Heading2 style={{ color: color }}>{title}</Heading2>
                    <Heading3>{subtitle}</Heading3>
                </View>
                <Image style={styles.icon} source={{ uri: imageUrl }} resizeMode="contain"></Image>
            </TouchableOpacity >
        )
    }
}
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 2 - StyleSheet.hairlineWidth,
        height: screen.width / 4,
        backgroundColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderColor: color.border,
    },
    icon: {
        width: screen.width / 5,
        height: screen.width / 5,
        marginLeft: 10,

    }
});