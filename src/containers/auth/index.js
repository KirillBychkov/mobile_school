/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useMutation } from "@apollo/react-hooks";
import { Text } from "react-native";
import { SignIn } from "../../api/auth.graphql";

export const Home: () => React$Node = () => {
    const [login, setLogin] = useState('school');
    const [password, setPassword] = useState('1111');
    const [signIn, { loading, error, data }] = useMutation(SignIn);

    const submit = async (e: any) => {
        e.preventDefault();
        try {
            await signIn({ variables: { login, password } });
        } catch {}
    };

    console.log('______');
    console.log('loading', loading);
    console.log('error', error);
    console.log('data', data);
    console.log('______');

    return (
        <>
            <Text>Auth</Text>
        </>
    )
};
