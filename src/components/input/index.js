// @flow

import React, { useRef, useState } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Icon } from '../icons';

type IProps = {
  value: string;
  onChange: (x: string) => void;
  placeholder: string;
  multiline: boolean;
  secureTextEntry: boolean;
  name: string;
  keyboardType: string;
  camera: boolean;
  isCountryCode: boolean;
  cameraCallback: () => void;
  header: boolean | string;
  iconLeft: any;
  style: any;
  maxLength: number;
  inputStyles: any;
}

export const Input = (props) => {
  const inputRef = useRef<TextInput>(TextInput);
  const {
    value,
    onChange,
    placeholder,
    multiline,
    keyboardType = 'default',
    style = {},
    inputStyles = {},
    isCountryCode = false,
    secureTextEntry = false,
    header = false,
    iconLeft = false,
    ...params
  } = props;

  return (
    <>
      {header && <Text style={styles.header}>{header}</Text>}
      <View style={{ ...styles.container, ...style }}>
        {/* {iconLeft && (
          <Icon style={styles.icon} icon={iconLeft} width={15} height={15} />
        )} */}
        {params.maxLength && <Text style={styles.len}>{`${value.length}/${params.maxLength}`}</Text>}
        <TextInput
          ref={inputRef}
          style={{ ...styles.input, ...inputStyles }}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={'gray'}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          selectionColor={'black'}
          underlineColorAndroid="transparent"
          keyboardType={keyboardType}
          // fromRight={!!currency}
          {...params}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    borderRadius: 10,
    borderWidth: 1,
    // borderColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    width: '100%',
    color: '#000',  //colors.black,
    fontSize: 18,
  },
  modalButton: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-start',
    width: 34,
    height: 22,
    marginTop: -20
  },
  icon: { position: 'absolute', left: 20, top: 12 },
  header: {
    // ...appStyles.text18,
    marginTop: 21,
    // color: colors.blue,
    width: '100%',
    marginBottom: 7
  },
  len: {
    position: 'absolute',
    right: 20,
    alignSelf: 'center',
    // ...appStyles.text18,
    height: 15,
    // color: colors.gray
  }
});
