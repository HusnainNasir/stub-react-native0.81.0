import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Wrapper } from '../../../components/base';
import { Colors, Strings } from '../../../theme';

const ToolScreen = () => {
    return (
        <Wrapper
            safeAreaView={true}
            edges={['top', 'bottom']}
            header={true}
            title={Strings.MckessonSupplyManager}
            style={styles.container}>

            <Text>Tool</Text>
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ToolScreen;    