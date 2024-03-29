import React, { useState } from 'react'
import { View, Text, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"

import COLORS from '../components/Colors'
import Button from '../components/Button'

import { FIREBASE_AUTH } from '../config/firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(`Success! Response:\n ${response}`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginVertical: 12,
            color: COLORS.black
          }}>
            Create Account
          </Text>

          <Text style={{
            fontSize: 16,
            color: COLORS.black
          }}>Connect with your friend today!</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8
          }}>Email address</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput
              placeholder='Enter your email address'
              placeholderTextColor={COLORS.black}
              onChangeText={setEmail}
              keyboardType='email-address'
              style={{
                width: "100%"
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8
          }}>Mobile Number</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 22
          }}>
            <TextInput
              placeholder='+1'
              placeholderTextColor={COLORS.black}
              keyboardType='numeric'
              style={{
                width: "12%",
                borderRightWidth: 1,
                borderLeftColor: COLORS.grey,
                height: "100%"
              }}
            />

            <TextInput
              placeholder='Enter your phone number'
              placeholderTextColor={COLORS.black}
              onChangeText={setPhoneNumber}
              keyboardType='numeric'
              style={{
                width: "80%"
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8
          }}>Password</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput
              placeholder='Enter your password'
              placeholderTextColor={COLORS.black}
              secureTextEntry={hidePassword}
              onChangeText={setPassword}
              style={{
                width: "100%"
              }}
            />

            <TouchableOpacity
              onPress={() => setHidePassword(!hidePassword)}
              style={{
                position: "absolute",
                right: 12
              }}
            >
              {
                hidePassword ? (
                  <Ionicons name="eye-off" size={24} color={COLORS.black} />
                ) : (
                  <Ionicons name="eye" size={24} color={COLORS.black} />
                )
              }

            </TouchableOpacity>
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          marginVertical: 6
        }}>
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />

          <Text>I agree to the terms and conditions</Text>
        </View>

        <Button
          title="Sign Up"
          filled
          onPress={handleSignup}
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
        />

        <View style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 22
        }}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account</Text>
          <Pressable
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{
              fontSize: 16,
              color: COLORS.primary,
              fontWeight: "bold",
              marginLeft: 6
            }}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Signup;