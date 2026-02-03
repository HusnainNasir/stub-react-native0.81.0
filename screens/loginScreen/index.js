import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Wrapper } from '../../components/base';
import { setUserData } from '../../store/mobileApi/auth.slice';
import { Colors, ScreenName } from '../../theme';

export const LoginScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.Auth);

    console.log(userData, 'userData');

    return (
        <Wrapper
            safeAreaView={true}
            edges={['top', 'bottom']}
            containerStyle={styles.container}>

            <Button
                title="Login"
                onPress={() => {
                     dispatch(setUserData({ email: 'test@test.com' }));
                    // navigation.navigate(ScreenName.SignupScreen);

                }}
            />
        </Wrapper>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
});