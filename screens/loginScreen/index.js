import React from 'react';
import { Button, Wrapper } from '../../components/base';
import { StyleSheet } from 'react-native';
import { Colors, ScreenName } from '../../theme';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <Wrapper
            safeAreaView={true}
            edges={['top', 'bottom']}
            containerStyle={styles.container}>

            <Button
                title="Login"
                onPress={() => { 
                    navigation.navigate(ScreenName.HomeScreen);
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
    },
});