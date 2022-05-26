import { StyleSheet, View, Button, TextInput } from 'react-native';
import React from 'react';

const InputPlace = props => {
    return (
        <View style={styles.inputView}>
            <TextInput
                style={{ width: '85%', borderBottomWidth: 1, borderColor: 'green' }}
                placeholder='add new place....'
                value={props.inputValue}
                onChangeText={text => props.setInputValue(text)}
            />
            <Button
                title='add'
                onPress={() => {
                    if (props.inputValue !== "") {
                        props.setPlaceList(
                            [...props.placeList,
                            {
                                key: Math.random().toString(),
                                value: props.inputValue,
                                image: { uri: "https://statemag.state.gov/wp-content/uploads/2021/02/0321POM-29.jpg" }
                            }
                            ]
                        );
                        props.setInputValue("");
                    }
                }}
            />
        </View>
    )
}

export default InputPlace;

const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        justifyContent: 'space-between',
    }
})