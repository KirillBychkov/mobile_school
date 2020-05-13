// @flow
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from '../icons';

export const Button = ({
  onPress,
  text,
  icon = false,
  buttonStyle = {},
  textStyle = {}
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.button, ...buttonStyle }}
    >
      {!!icon && <Icon icon={icon} width={20} height={20} />}
      <Text style={{ ...styles.text, ...textStyle }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
  }
});
