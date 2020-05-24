/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { useMutation } from "@apollo/react-hooks";
import { Text, StyleSheet, Image } from "react-native";
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
        if (data && !data.school) {
            loginAction({ ...data, ...{ isLogin: true } });
        }
    }, [data]);

    async function submit() {
        await signIn({variables: {login, password}});
    }

    return (
        <KeyboardStaticAvoid fullheight contentContainerStyle={styles.container}>
            <Image source={require('../../logo/logo2.png')} />
            <Text style={{ fontSize: 30, marginBottom: 20, color: '#137cbd' }}>Авторизація</Text>
            <Input
                style={{ borderColor: '#137cbd' }}
                placeholder={"Ваш пароль"}
                value={login}
                onChange={setLogin}
            />
            <Input
                style={{ borderColor: '#137cbd' }}
                placeholder={"Ваш логін"}
                value={password}
                onChange={setPassword}
                secureTextEntry={true}
            />
            <Button
                buttonStyle={{
                    borderColor: '#137cbd',
                    marginBottom: 10,
                }}
                textStyle={{
                    color: '#137cbd',
                    fontSize: 18
                }}
                text={'Увійти в аккаунт'}
                onPress={submit}
            />
            <Text style={{ color: 'red' }}>{error? error.message.split(': ')[1] : ''}</Text>
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
});
