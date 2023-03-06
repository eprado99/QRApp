import React from 'react';


import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


const HomeScreen = ({ navigation }) => {
  
  return (
  <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Generacion de QR para Nuevo Amanecer
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('StudentList')}>
          <Text style={styles.buttonTextStyle}>
            Lista de estudiantes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('QRScanner')}>
          <Text style={styles.buttonTextStyle}>
            Escanear codigo QR
          </Text>
        </TouchableOpacity>

        
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#51D8C7',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#51D8C7',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});