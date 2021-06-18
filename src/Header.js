import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

export default class Header extends React.Component {
    render() {
        return(
            <View style={styles.header}>
                <Text>
                    This is Header
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        height: '6%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
    }
})