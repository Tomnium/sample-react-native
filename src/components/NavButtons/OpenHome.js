import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigationState} from '@react-navigation/native';

export default OpenHome = (props) => {
  const navState = useNavigationState((state) => state);
  const {index, routes} = navState;
  if (routes[index].name !== 'Home') {
    return (
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text
            style={{color: 'black', padding: 10, marginLeft: 10, fontSize: 20}}>
            Home
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return null;
  }
};
