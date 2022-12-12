import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { DismissKeyboardView } from '../../components/DismissKeyboard';
import { FullScreenSpinner } from '../../components/FullScreenSpinner';
import { useLoginMutation } from '../../services/AuthService';
import { loginUser } from './authSlice';
import { useDispatch } from 'react-redux';



export const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();


    const passData = async () => {
        if (email && password) {
            if (password.length < 6) {
                alert('Password must be at least 6 characters long');
            } else {
                try {
                    const loginData = await login({ email: email, password: password }).unwrap();

                    dispatch(loginUser(loginData));

                } catch (err) {
                    alert(err);
                }
            }

        } else if (email && !password) {
            alert('Please enter a valid password');
        } else if (!email && password) {
            alert('Please enter a valid email address');
        } else {
            alert('Please meet all requirements');
        };
    }


    return (
        <FullScreenSpinner spinner={isLoading}>
            <DismissKeyboardView>
                <View style={styles.container}>
                    <Image source={require('../../assets/images/png/login_bg.jpeg')} style={styles.image}></Image>
                    <Text style={styles.title}>Login</Text>
                    <Input title='Email'
                        placeholder='Enter your email address'
                        autoComplete='email'
                        value={email}
                        onChangeText={userEmail => setEmail(userEmail)} />
                    <Input title='Password'
                        placeholder='Enter your password'
                        autoComplete='email'
                        value={password}
                        onChangeText={userpassword => setPassword(userpassword)} />

                    <TouchableOpacity style={styles.button} onPress={passData} >
                        <Text style={[styles.text, {
                            fontSize: 18,
                            color: 'white',
                            top: 0,
                            alignSelf: 'center'
                        }]}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                </View>

            </DismissKeyboardView>
        </FullScreenSpinner>
    );
};

