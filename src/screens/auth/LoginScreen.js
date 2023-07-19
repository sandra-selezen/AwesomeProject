import React, { useState, useEffect } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import bgImage from '../../../assets/images/bg-image.jpg';

const initialState = {
  email: '',
  password: '',
}

export const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    const onChangeOrientation = () => {
      const width = Dimensions.get('window').width;
      console.log('width', width);
    }
    const setupOrientation = Dimensions.addEventListener('change', onChangeOrientation);
    return () => {
      setupOrientation.remove();
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onSubmitForm = () => {
    setIsShowKeyboard(false);
    console.log(formData);
    setFormData(initialState);
    keyboardHide();
  };

  return (
    <ImageBackground source={bgImage} style={styles.image}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{ ...styles.container, paddingBottom: isShowKeyboard ? 32 : 78 }}>
            <Text style={styles.title}>Увійти</Text>
            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <TextInput style={styles.input} placeholderTextColor={'#BDBDBD'} placeholder='Адреса електронної пошти' keyboardType='email-address' onFocus={() => setIsShowKeyboard(true)} value={formData.email} onChangeText={(value) => setFormData((prevState) => ({ ...prevState, email: value }))} />
                <TextInput style={styles.input} placeholderTextColor={'#BDBDBD'} placeholder='Пароль' secureTextEntry={true} onFocus={() => setIsShowKeyboard(true)} value={formData.password} onChangeText={(value) => setFormData((prevState) => ({ ...prevState, password: value }))} />
              </View>
              <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={onSubmitForm}><Text style={styles.btnTitle}>Зареєструватися</Text></TouchableOpacity>
              <Text style={styles.loginBtn}>Вже є акаунт? Увійти</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
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
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    textAlign: 'center',
  },
  // form: {
  //   rowGap: 16,
  // },
  inputGroup: {
    marginBottom: 43,
    rowGap: 16,
  },
  input: {
    padding: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 8,
  },
  button: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },
  btnTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
  loginBtn: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#1B4371',
  }
});