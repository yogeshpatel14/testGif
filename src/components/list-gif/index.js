import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, FlatList, ScrollView} from 'react-native';

export default function ListOfGif(props) {
  const {listResult, onLoadMore} = props;
  const [listData, setListData] = useState([]);

  useEffect(() => {
    /**
     * api call for get list data
     */
    setListData(prev => (prev = listResult));
  }, [listResult]);

  const renderTableItem = (item, index) => {
    return (
      <Image
        key={index}
        style={Styles.imgGif}
        source={{
          uri: item,
        }}
      />
    );
  };

  const renderTable = () => {
    return (
      <FlatList
        data={listData}
        renderItem={({item, index}) => renderTableItem(item, index)}
        keyExtractor={(item, index) => index}
        numColumns={3}
        initialNumToRender={5} // how many item to display first
        onEndReachedThreshold={3} // so when you are at 5 pixel from the bottom react run onEndReached function
        onEndReached={() => {
          onLoadMore();
        }}
        // maxToRenderPerBatch={5}
      />
    );
  };

  return <View style={{flex: 1}}>{renderTable()}</View>;
}

const Styles = StyleSheet.create({
  viewMain: {
    width: '90%',
    height: 250,
    borderColor: '#cdcdcd',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 2,
    position: 'absolute',
    top: 65,
  },
  touchOpaItem: {
    borderBottomColor: '#cdcdcd',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    height: 35,
    marginTop: 5,
  },
  txtItem: {
    color: '#000',
    fontSize: 18,
  },
  imgGif: {
    width: 130,
    height: 280,
    marginLeft: 5,
    marginTop: 5,
    resizeMode: 'cover',
  },
});
