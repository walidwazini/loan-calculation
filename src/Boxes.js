import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

export default class Boxes extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>
                    This is Boxes
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})