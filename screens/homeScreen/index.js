import React from 'react';
import { Button, Wrapper } from '../../components/base';
import { StyleSheet } from 'react-native';
import { Colors, ScreenName } from '../../theme';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <Wrapper
            safeAreaView={true}
            edges={['top', 'bottom']}
            containerStyle={styles.container}>

            <Button
                title="Home"
                onPress={() => { 
                    navigation.navigate(ScreenName.LoginScreen);
                }}
            />
        </Wrapper>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
});