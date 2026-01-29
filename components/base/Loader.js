import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';
import { Colors } from '../../theme';

export const Loader = props => {
  const {loading} = props;

  if (!loading) {
    return null;
  }


  return (
    <Modal
      keyboardShouldPersistTaps="handled"
      transparent={true}
      animationType={'fade'}
      visible={loading}>
      <View
        style={[styles.modalBackground, {backgroundColor: 'rgba(0,0,0, .3)'}]}>
        <ActivityIndicator
          size={'large'}
          animating={loading}
          color={Colors.white}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
