import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RegistrationScreen } from './src/components/Screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
