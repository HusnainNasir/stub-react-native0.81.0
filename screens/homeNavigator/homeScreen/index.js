import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Wrapper } from '../../../components/base';
import { Colors, Strings } from '../../../theme';

const HomeScreen = () => {
    return (
        <Wrapper
            header={true}
            title={Strings.MckessonSupplyManager}
            safeAreaView={true}
            edges={['top', 'bottom']}
            style={styles.container}>

            <Text>Home</Text>


        </Wrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
});

export default HomeScreen;