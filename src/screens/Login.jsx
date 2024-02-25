import React, { useState } from 'react'
import { View, Text, Pressable, TextInput, TouchableOpacity, KeyboardAvoidingView  } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from 'expo-checkbox';

import COLORS from '../components/Colors'
import Button from '../components/Button'

// firebase
import { FIREBASE_AUTH, FIREBASE_GOOGLE_PROVIDER } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [hidePassword, setHidePassword] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = signInWithEmailAndPassword(auth, email, password);
      console.log(`Success! Response:\n ${response}`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginWithGoogle = async () => {
    setLoading(true);
    try {
      const response = signInWithPopup(auth, email, password);
      console.log(`Success! Response:\n ${response}`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await(auth);
    } catch (err) {
      console.error(err);
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
            Welcome Back! 👋
          </Text>

          <Text style={{
            fontSize: 16,
            color: COLORS.black
          }}>Glad to see you here (again).</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8
          }}>Email address</Text>

          <KeyboardAvoidingView behavior='padding'>
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
                autoCapitalize='none'
                keyboardType='email-address'
                onChangeText={setEmail}
                style={{
                  width: "100%"
                }}
              />
            </View>
          </KeyboardAvoidingView>
        </View>

        <KeyboardAvoidingView behavior='padding'>
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
              autoCapitalize='none'
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
        </KeyboardAvoidingView>

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

          <Text>Remember Me</Text>
        </View>

        <Button
          title="Login"
          filled
          onPress={handleLogin}
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
          <Text style={{ fontSize: 16, color: COLORS.black }}>Don't have an account?</Text>
          <Pressable
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={{
              fontSize: 16,
              color: COLORS.primary,
              fontWeight: "bold",
              marginLeft: 6
            }}>Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Login;