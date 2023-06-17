import { Platform, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import bgImage from '../../../assets/images/bg-image.jpg';

export const RegistrationScreen = () => {
  console.log(Platform.OS);
  return (
    <ImageBackground source={bgImage} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholderTextColor={'#BDBDBD'} placeholder='Логін' />
          <TextInput style={styles.input} placeholderTextColor={'#BDBDBD'} placeholder='Адреса електронної пошти' keyboardType='email-address' />
          <TextInput style={styles.input} placeholderTextColor={'#BDBDBD'} placeholder='Пароль' secureTextEntry={true} />
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.button}><Text style={styles.btnTitle}>Зареєструватися</Text></TouchableOpacity>
        <Text style={styles.loginBtn}>Вже є акаунт? Увійти</Text>
      </View>
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
    paddingLeft: 16,
    paddingRight: 16,
    flex: 0.7,
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
    marginBottom: 43,
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