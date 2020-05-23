/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { useMutation } from "@apollo/react-hooks";
import { Text, StyleSheet, View } from "react-native";
import { SignIn } from "../../api/auth.graphql";
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { actionLogin } from '../../store/actions';
import { Input, KeyboardStaticAvoid, Button } from '../../components'

const mapDispatchToProps = {
    loginAction: actionLogin
};

export const Auth = compose(connect(null, mapDispatchToProps))(({ navigation, loginAction }: Props) => {
    const [login, setLogin] = React.useState(''); // teacher819
    const [password, setPassword] = React.useState(''); // 1111
    const [signIn, { loading, error, data }] = useMutation(SignIn);

    useEffect(() => {
        if (data) {
            console.log('______');
            console.log('loading', loading);
            console.log('error', error);
            console.log('data', data);
            console.log('______');
            loginAction({ ...data, ...{ isLogin: true } });
        }

    }, [data])

    function submit() {
        signIn({ variables: { login, password } });
    };

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
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    }
})
