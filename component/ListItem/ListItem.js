import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const ListItem = props => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem}>
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListItem;

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 20,
        backgroundColor: '#eee',
        margin: 5
    }
})