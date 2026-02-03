import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Wrapper } from '../../../components/base';
import { Colors, Strings } from '../../../theme';

const OrderScreen = () => {
    return (
        <Wrapper
            safeAreaView={true}
            edges={['top', 'bottom']}
            header={true}
            title={Strings.MckessonSupplyManager}
            style={styles.container}>

            <Text>Order</Text>
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

export default OrderScreen;