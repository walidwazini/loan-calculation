// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet, Text, View,
  TextInput, ImageBackground, TouchableOpacity
} from 'react-native';
import { AppLoading } from "expo"
import Header from './src/Header'

import { useFonts, Comfortaa_600SemiBold, Comfortaa_300Light } from '@expo-google-fonts/comfortaa'; 

export default function App() {

  let [fontsLoaded, error] = useFonts ({
    Comfortaa_600SemiBold,
    Comfortaa_300Light,
  })
if (!fontsLoaded) {
  return <AppLoading />
}
  

  // If it appears on the UI, must be made global scope
  const [propertyPrice, setPrice] = useState(0)
  const [downPayment, setDownPayment] = useState(0)
  const [interestRate, setInterest] = useState(0) // useState(4.2)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [year, setYear] = useState(35)

  const calculateLoan = () => {
    const year = 35
    let dp = downPayment * propertyPrice
    let amount = propertyPrice - dp
    let annualInterest = (interestRate / 100)
    let discount =
      (Math.pow((1 + annualInterest), year) - 1) / (annualInterest * (Math.pow(1 + annualInterest, year)))
    let yearlyPayment = amount / discount
    let monthlyPaymentTemp = yearlyPayment / 12
    setMonthlyPayment(monthlyPaymentTemp)

    console.log(monthlyPayment)
    console.log(yearlyPayment)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loan Calculator</Text>
      <View style={{ flexDirection: "column" }}>
        <View >
          <Text>Enter Property Price</Text>
          <TextInput placeholder="Enter Property Price" keyboardType="numeric"
            style={styles.input}
            value={propertyPrice} onChangeText={val => { setPrice(val) }} />
        </View>
        <View>
          <Text>Enter Downpayment (%)</Text>
          <TextInput placeholder="Enter Downpayment (%)" keyboardType="numeric"
            style={styles.input}
            value={downPayment} onChangeText={val => { setDownPayment(val) }} />
        </View>
        <View>
          <Text>Enter Interest Rate (%)</Text>
          <TextInput placeholder="Enter Interest Rate" keyboardType="numeric"
            style={styles.input}
            value={interestRate} onChangeText={val => { setInterest(val) }} />
        </View>
        <View>
          <Text>Enter Tenure Year</Text>
          <TextInput placeholder="Enter Tenure Year" keyboardType="numeric"
            style={styles.input}
            value={year} onChangeText={val => { setYear(val) }} />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={calculateLoan} >
        <Text style={styles.buttonText}>Calculate Now </Text>
      </TouchableOpacity>
      <View>
        <Text>
          {monthlyPayment}
        </Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily:"Comfortaa_600SemiBold",
    fontSize: 20,
    fontWeight:"300",
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#DDDDDD",
    marginTop: 40,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 25,
    color: "#FF3A3A",
    fontFamily: 'BalooTammudu2-Medium',
  },
  input: {
    height: 40,
    margin: 6,
    borderColor: "blue",
    borderWidth: 1,
  }
});
