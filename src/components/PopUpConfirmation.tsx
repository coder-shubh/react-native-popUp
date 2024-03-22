import React from 'react';
import Colors from '../assets/colors';
import { useCommonImports } from '../imports/index';


interface PopUpConfirmationProps {
  visible: boolean;
  onClose: () => void;
  press: () => void;
  title: string;
  subTitle: string;
  theme?: 'dark' | 'light';
  animation: 'fade' | 'slide' | 'none';
  leftButtonName: string;
  rightButtonName: string;
}

const PopUpConfirmation: React.FC<PopUpConfirmationProps> = ({
  visible,
  onClose,
  press,
  title,
  subTitle,
  theme = 'light',
  animation = 'none',
  leftButtonName = 'NO',
  rightButtonName = 'YES',
}) => {
    const {View, TouchableOpacity, StyleSheet,MaterialIcons,Text,Modal } = useCommonImports();

  const darkStyles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.modalBackground,
    },
    modal: {
      backgroundColor: Colors.primary_theme_background,
      borderRadius: 10,
      padding: 20,
      width: '80%',
      alignItems: 'center',
      alignSelf: 'center',
      elevation: 40,
      borderColor: Colors.white,
      borderWidth: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    title: {
      fontSize: 16,
      marginBottom: 10,
      color: Colors.white,
      textAlign: 'left',
      alignSelf: 'flex-start',
      fontWeight: '700',
    },
    message: {
      fontSize: 14,
      textAlign: 'center',
      marginBottom: 20,
      color: Colors.text,
      // alignSelf: 'flex-start'
    },
    closeButton: {
      height: 20,
      width: 20,
      alignItems: 'center',
      top: -4,
      position: 'relative',
    },
    closeIcon: {
      width: '100%',
      height: '100%',
      color:
        theme == 'light' ? Colors.primary_theme_background : Colors.OuterLine,
    },
    buttonsContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    button: {
      backgroundColor: Colors.buttonPrimaryColor,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 15,
      width: '45%',
    },
    buttonText: {
      color: Colors.white,
      fontSize: 18,
      textAlign: 'center',
    },
    buttonCancel: {
      borderColor: Colors.buttonPrimaryColor,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 15,
      borderWidth: 1,
      width: '45%',
    },
  });

  const lightStyles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.modalBackground,
    },
    modal: {
      backgroundColor: Colors.white,
      borderRadius: 10,
      padding: 20,
      width: '80%',
      alignItems: 'center',
      alignSelf: 'center',
      elevation: 40,
      borderColor: Colors.primary_theme_background,
      borderWidth: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    title: {
      fontSize: 16,
      marginBottom: 10,
      color: Colors.primary_theme_background,
      textAlign: 'left',
      alignSelf: 'flex-start',
      fontWeight: '700',
    },
    message: {
      fontSize: 14,
      textAlign: 'center',
      marginBottom: 20,
      color: Colors.primary_theme_background,
      // alignSelf: 'flex-start'
    },
    closeButton: {
      height: 20,
      width: 20,
      alignItems: 'center',
      top: -4,
      position: 'relative',
    },
    closeIcon: {
      width: '100%',
      height: '100%',
      color:
        theme == 'light' ? Colors.primary_theme_background : Colors.OuterLine,
    },
    buttonsContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
    },
    button: {
      backgroundColor: Colors.buttonPrimaryColor,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 15,
      width: '45%',
    },
    buttonText: {
      color: Colors.primary_theme_background,
      fontSize: 18,
      textAlign: 'center',
      fontWeight: '700',
    },
    buttonCancel: {
      borderColor: Colors.buttonPrimaryColor,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 15,
      borderWidth: 1,
      width: '45%',
    },
  });
  const styles = theme === 'dark' ? darkStyles : lightStyles;

  return (
    <Modal
      animationType={animation}
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <MaterialIcons
                name={'closecircleo'}
                size={20}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.message}>{subTitle}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={onClose}
              activeOpacity={0.5}>
              <Text style={styles.buttonText}>{leftButtonName}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.5}
              onPress={press}>
              <Text style={[styles.buttonText, {color: '#fff'}]}>
                {rightButtonName}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PopUpConfirmation;
