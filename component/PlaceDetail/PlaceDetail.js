import { StyleSheet, Text, View, Modal, Button, Image } from 'react-native';
import React from 'react';

const PlaceDetail = props => {
    return (
        <Modal
            animationType={'fade'}
        >
            <View>
                <Image
                    source={props.place.image}
                    style={{ width: "100%", height: 200 }}
                />
                <Text
                    style={{ textAlign: 'center', fontSize: 30 }} >
                    {props.place.value}
                </Text>
                <View>
                    <Button
                        title='Add'
                        color='red'
                        onPress={props.handleeletItem(props.place.key)}
                    />
                    <Button
                        title='Close'
                        onPress={props.handleHideModal()}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default PlaceDetail;

const styles = StyleSheet.create({})