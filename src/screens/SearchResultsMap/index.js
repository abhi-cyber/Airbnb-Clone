import { View, FlatList, ViewToken } from 'react-native';
import React, { useState,useEffect, useRef } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/Custom';
import PostCarouselItem from '../../components/PostCarouselItem'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const SearchResultsMap = () => {

  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const flatList = useRef();

  const map = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70});

  // The below const syncs the marker with the bottom carousel and on changing the slider the marker will change too.
  const onViewChanged = useRef(({viewableItems}) => {
    if(viewableItems.length > 0){
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id)
    }
  });

  const width = useWindowDimensions().width;

  useEffect( () => {
    if (!selectedPlaceId || !flatList){
      return;
    }
    const index = places.findIndex(place => place.id === selectedPlaceId)
    flatList.current.scrollToIndex({index})

    const selectedPlace = places[index]
    const region ={
      latitude: selectedPlace.coordinate.latitude,
      latitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    }
    map.current.animateToRegion(region);
  }, [selectedPlaceId])

  return (
    <View style={{width: '100%', height: '100%' }}>
        <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map(place=> 
        <CustomMarker 
          coordinate={place.coordinate}
          price={place.newPrice}
          isSelected={place.id === selectedPlaceId}
          onPress={() => setSelectedPlaceId(place.id)}
        />)}
      </MapView>

      <View style={{position: "absolute", bottom: 10}}>
          <FlatList 
          ref={flatList}
            data={places}
            renderItem={({item}) => <PostCarouselItem post={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            // The below 3 lines brings the next card to the center
            snapToInterval={width - 60}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
            viewabilityConfig={viewConfig.current}
            onViewableItemsChanged={onViewChanged.current}
          />
      </View>
    </View>
  )
}

export default SearchResultsMap;