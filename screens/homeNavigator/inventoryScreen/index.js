import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Wrapper } from '../../../components/base';
import { Colors, Strings } from '../../../theme';

const InventoryScreen = () => {
    return (
        <Wrapper
            safeAreaView={true}
            header={true}
            title={Strings.MckessonSupplyManager}
            edges={['top', 'bottom']}
            style={styles.container}>

            <Text>Inventory</Text>
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

export default InventoryScreen;