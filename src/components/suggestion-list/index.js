import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {API_CALL_SEARCH_AUTOSUGGESTION_GIF} from '../../api';
import {TENOR_KEY} from '../../constants';
import {AUTOCOMPLETE} from '../../services';
import {getResultList} from './presenter-suggestion';

export default function ListOfGif(props) {
  const {txtQuery, onSelectSuggestionItem} = props;
  const [listData, setListData] = useState([]);

  useEffect(() => {
    /**
     * api call for get suggestion
     */
    if (txtQuery && txtQuery.length > 0) {
      let strUrl =
        AUTOCOMPLETE + '?q=' + txtQuery + '&key=' + TENOR_KEY + '&limit=6';
      API_CALL_SEARCH_AUTOSUGGESTION_GIF(strUrl)
        .then(res => {
          setListData(prev => (prev = getResultList(res)));
        })
        .catch(err => {
          alert(err);
        });
    } else {
      setListData(preview => (preview = []));
    }
  }, [txtQuery]);

  const renderRowItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => onSelectSuggestionItem(item)}
        key={index}
        style={Styles.touchOpaItem}>
        <Text style={Styles.txtItem}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderRow = () => {
    if (listData && listData.length > 0) {
      return listData.map((item, index) => renderRowItem(item, index));
    }
  };

  return <View style={Styles.viewMain}>{renderRow()}</View>;
}

const Styles = StyleSheet.create({
  viewMain: {
    width: '90%',
    // height: 250,
    borderColor: '#cdcdcd',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 2,
    // position: 'absolute',
    // top: 65,
  },
  touchOpaItem: {
    borderBottomColor: '#cdcdcd',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    height: 45,
    marginTop: 5,
  },
  txtItem: {
    color: '#000',
    fontSize: 18,
  },
});
