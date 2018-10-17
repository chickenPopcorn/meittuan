import React from 'react';
import { StyleSheet, View } from 'react-native';
import color from '../../widget/color';
import HomeGridItem from './HomeGridItem';

type Props = {
    infos: Array<Object>,
}

export default class HomeGridView extends React.PureComponent<Props> {
    static defaultProps = {
        infos: []
    }

    render() {
        return (
            <View style={styles.gridContainer}>
                {this.props.infos.map((info, index) => (
                    <HomeGridItem
                        key={index}
                        info={info}
                    />
                ))}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderColor: color.border,
    }
});