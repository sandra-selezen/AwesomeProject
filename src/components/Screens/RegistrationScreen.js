import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native';
import bgImage from '../../../assets/images/bg-image.jpg';

export const RegistrationScreen = () => {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }

  return (
    <ImageBackground source={bgImage} style={styles.image}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.container}>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 32 : 78 }}>
              <TextInput style={styles.input} placeholderTextColor={'#BDBDBD'} placeholder='Логін' onFocus={() => setIsShowKeyboard(true)} />
              <TextInput style={styles.input} placeholderTextColor={'#BDBDBD'} placeholder='Адреса електронної пошти' keyboardType='email-address' onFocus={() => setIsShowKeyboard(true)} />
              <TextInput style={styles.input} placeholderTextColor={'#BDBDBD'} placeholder='Пароль' secureTextEntry={true} onFocus={() => setIsShowKeyboard(true)} />
              <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={keyboardHide}><Text style={styles.btnTitle}>Зареєструватися</Text></TouchableOpacity>
              <Text style={styles.loginBtn}>Вже є акаунт? Увійти</Text>
            </View>
          </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  container: {
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginBottom: 32,
    fontSize: 30,
    textAlign: 'center',
  },
  form: {
    rowGap: 16,
  },
  input: {
    padding: 16,
    fontSize: 16,
    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 8,
  },
  button: {
    marginTop: 27,
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },
  btnTitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
  loginBtn: {
    fontSize: 16,
    textAlign: 'center',
    color: '#1B4371',
  }
});