import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function SearchBar(props) {
  const {txtValue, onChangeTxt} = props;
  return (
    <View style={Styles.viewMain}>
      <TextInput
        style={Styles.txtInput}
        placeholder="search"
        placeholderTextColor="#cdcdcd"
        value={txtValue}
        onChangeText={onChangeTxt}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  viewMain: {
    width: '90%',
    height: 50,
    borderColor: '#cdcdcd',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
    borderEndColor: '#AAAAAA',
    borderEndWidth: 2,
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 2,
    justifyContent: 'center',
  },
  txtInput: {
    textAlign: 'center',
    fontSize: 18,
    height: 40,
    color: '#000',
  },
});
