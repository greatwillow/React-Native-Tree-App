import React from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native'
const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(142, 68, 173)'
    },
    heading: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white'
    }
})
const Heading = ({title}) => (
    <Text style={styles.heading}>
        {title}
    </Text>
)
export const TestApp = () => (
    <View style={styles.page}>
        <Heading title='Stateless' />
    </View>
)
