import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import InputPlace from './InputPlace/InputPlace';
import PlaceList from './PlaceList/PlaceList';
import PlaceDetail from './PlaceDetail/PlaceDetail';

const MainComponent = () => {
    const [inputValue, setInputValue] = useState("");
    const [placeList, setPlaceList] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);

    const handleSelectedPlace = key => {
        const place = placeList.find(place => {
            return (place.key === key);
        })
        setSelectedPlace(place);
    }

    const handleHideModal = () => {
        setSelectedPlace(null);
    }

    const handleeletItem = key => {
        setPlaceList(
            placeList.filter(place => place.key !== key)
        );
        setSelectedPlace(null);
    }

    let placeDetail = null;
    if (selectedPlace !== null) {
        placeDetail = <PlaceDetail
            place={selectedPlace}
            handleHideModal={handleHideModal}
            handleeletItem={handleeletItem}
        />
    }

    return (
        <View style={styles.container}>
            {placeDetail}
            <InputPlace
                inputValue={inputValue}
                setInputValue={setInputValue}
                placeList={placeList}
                setPlaceList={setPlaceList}
            />
            <PlaceList placeList={placeList} handleSelectedPlace={handleSelectedPlace} />
        </View >
    )
}

export default MainComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})