import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import {API_CALL_SEARCH_AUTOSUGGESTION_GIF} from '../../api';
import ListOfGif from '../../components/list-gif';
import {getListGifFromResponse} from '../../components/list-gif/presenter-list';
import SearchBar from '../../components/search-bar';
import SuggestionList from '../../components/suggestion-list';
import {TENOR_KEY} from '../../constants';
import {SEARCH} from '../../services';

export default function Home() {
  const [txtSearch, setTxtSearch] = useState('');
  const [selectedSuggestion, setSelectedSuggestion] = useState('');
  const [isShowSuggestion, setIsShowSuggestion] = useState(false);
  const [listData, setListData] = useState([]);
  // const [nextPage, setNextPage] = useState('-1');

  const refListData = useRef([]);
  const nextPage = useRef('-1');

  async function initLoadData() {
    await setListData([]);
    nextPage.current = '-1';
    refListData.current = [];
    apiCallForGetGifList();
  }

  const apiCallForGetGifList = async () => {
    if (String(nextPage.current) !== '0') {
      let strUrl =
        SEARCH +
        '?q=' +
        txtSearch +
        '&key=' +
        TENOR_KEY +
        '&limit=10&pos=' +
        (String(nextPage.current) === '-1' ? '0' : nextPage.current);
      console.log('str url---', strUrl);
      API_CALL_SEARCH_AUTOSUGGESTION_GIF(strUrl)
        .then(res => {
          nextPage.current = res.next;
          console.log('str url---', refListData.current.length);
          if (refListData.current.length > 0) {
            console.log('enter in if---');
            let listResult = refListData.current;
            const finalData = listResult.concat(getListGifFromResponse(res));
            refListData.current = finalData;
            setListData(prev => (prev = finalData));
          } else {
            console.log('enter in else---');
            refListData.current = getListGifFromResponse(res);
            setListData(prev => (prev = getListGifFromResponse(res)));
          }
        })
        .catch(err => {
          alert(err);
        });
    }
  };

  const renderSuggestionList = () => {
    if (txtSearch.length > 0 && isShowSuggestion) {
      return (
        <SuggestionList
          txtQuery={txtSearch}
          onSelectSuggestionItem={e => {
            setSelectedSuggestion(e);
            setTxtSearch(e);
            initLoadData();
            setIsShowSuggestion(false);
          }}></SuggestionList>
      );
    }
  };

  const renderTableOfGif = () => {
    return (
      <ListOfGif
        listResult={listData}
        onLoadMore={() => {
          console.log('load more');
          apiCallForGetGifList();
        }}
      />
    );
  };

  async function onChangeTextField(e) {
    await setTxtSearch(e);
    setIsShowSuggestion(true);
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <SearchBar onChangeTxt={onChangeTextField} txtValue={txtSearch} />
      {renderSuggestionList()}
      {renderTableOfGif()}
    </View>
  );
}
