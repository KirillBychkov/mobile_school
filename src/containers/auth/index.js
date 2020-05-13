/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useMutation } from "@apollo/react-hooks";
import { Text, StyleSheet, View } from "react-native";
import { SignIn } from "../../api/auth.graphql";
import { Input, KeyboardStaticAvoid, Button } from '../../components'


export const Auth = () => {
    const [login, setLogin] = React.useState('myschool');
    const [password, setPassword] = React.useState('11111111');
    const [signIn, { loading, error, data }] = useMutation(SignIn);

    function submit() {
        signIn({ variables: { login, password } });
    };

    console.log('______');
    console.log('loading', loading);
    console.log('error', error);
    console.log('data', data);
    console.log('______');

    return (
        <KeyboardStaticAvoid fullheight contentContainerStyle={styles.container}>
            <Text>Auth</Text>
            <Input
                value={login}
                onChange={setLogin}
            />
            <Input
                value={password}
                onChange={setPassword}
            />
            <Button text={'Submit'} onPress={submit} />
        </KeyboardStaticAvoid>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    }
})
