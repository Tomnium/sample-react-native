import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import CartCounter from '../../containers/Counter';
import {useNavigationState} from '@react-navigation/native';

export default OpenCart = (props) => {
  const navState = useNavigationState((state) => state);
  const {index, routes} = navState;
  if (routes[index].name !== 'Cart') {
    return (
      <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Cart')}>
          <Text
            style={{color: 'black', padding: 10, marginLeft: 10, fontSize: 20}}>
            Cart
          </Text>
          <CartCounter />
        </TouchableOpacity>
      </View>
    );
  } else {
    return null;
  }
};
