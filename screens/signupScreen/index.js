import React from 'react';
import { Button, Text, Wrapper } from '../../components/base';
import { StyleSheet } from 'react-native';
import { Colors, ScreenName } from '../../theme';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const navigation = useNavigation();
    return (
        <Wrapper
            safeAreaView={true}
            edges={['top', 'bottom']}
            containerStyle={styles.container}>

           <Text>Signup</Text>
        </Wrapper>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
});