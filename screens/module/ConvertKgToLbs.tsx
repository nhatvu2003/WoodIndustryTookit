import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

const ConvertKgToLbs = () => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [isKgToLbs, setIsKgToLbs] = useState(true);

  const convertValue = (inputValue: number): string => {
    return isKgToLbs
      ? (inputValue * 2.20462262).toFixed(2)
      : (inputValue / 2.20462262).toFixed(2);
  };

  useEffect(() => {
    if (value !== '') {
      const inputValue = parseFloat(value);
      if (!isNaN(inputValue)) {
        setResult(convertValue(inputValue));
      } else {
        setResult('Lỗi nhập liệu');
      }
    } else {
      setResult(null);
    }
  }, [value, isKgToLbs]);

  const handleButtonPress = (buttonValue: string) => {
    if (buttonValue === 'DEL') {
      setValue('');
      setResult(null);
    } else if (buttonValue === '.' && (value === '' || value.includes('.'))) {
      return;
    } else if (!isNaN(parseFloat(buttonValue)) || buttonValue === '.') {
      setValue((prev) => prev + buttonValue);
    }
  };

  const toggleMode = () => {
    setIsKgToLbs((prev) => !prev);
    setValue('');
    setResult(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="transparent" />
      <View style={styles.display}>
        <Text style={styles.displayValue}>{value || '0'}</Text>
        {result !== null && (
          <Text style={styles.resultValue}>
            {result === 'Lỗi nhập liệu' ? result : `${result} ${isKgToLbs ? 'LBS' : 'KG'}`}
          </Text>
        )}
      </View>
      <View style={styles.buttonsContainer}>
        {['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', 'DEL'].map(
          (buttonValue, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.button, buttonValue === 'DEL' && styles.clearButton]}
              onPress={() => handleButtonPress(buttonValue)}
            >
              <Text
                style={[
                  styles.buttonText,
                  buttonValue === 'DEL' && styles.clearButtonText,
                ]}
              >
                {buttonValue}
              </Text>
            </TouchableOpacity>
          )
        )}
        <TouchableOpacity style={styles.toggleButton} onPress={toggleMode}>
          <Text style={styles.toggleButtonText}>
            {isKgToLbs ? 'Chuyển đổi sang KG' : 'Chuyển đổi sang LBS'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ConvertKgToLbs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  display: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    flex: 1,
  },
  displayValue: {
    fontSize: 48,
    color: '#616161',
  },
  resultValue: {
    fontSize: 24,
    color: '#616161',
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 5,
  },
  button: {
    width: (width - 40) / 3 - 10,
    height: (width - 40) / 3 - 10,
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 5,
    elevation: 5,
  },
  clearButton: {
    backgroundColor: '#d32f2f',
  },
  buttonText: {
    fontSize: 24,
    color: '#616161',
  },
  clearButtonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  toggleButton: {
    width: '100%',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    elevation: 5
  },
  toggleButtonText: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
