/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import * as ImagePicker from 'react-native-image-picker';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

import Home from '../screens/home';
import Profile from '../screens/profile/Profile';
import Post from '../screens/post';
import AddPost from '../screens/post/AddPost';
import CardView from '../components/CardView';

import TakeImages from '../screens/post/TakeImages';

import {openModal} from '../redux/slices/PostSlice';
import {useSelector, useDispatch} from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarBottom = ({children, onPress}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const post = useSelector(state => state.post);

  const toggle = () => {
    dispatch(openModal());
    console.log(post.open);
  };
  return (
    <View>
      <TouchableOpacity
        style={{
          top: -30,
          justifyContent: 'center',
          alignContent: 'center',
          ...styles.shadow,
        }}
        // onPress={() => navigation.navigate('TakeImages')}
        onPress={toggle}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45',
          }}>
          {children}
        </View>
      </TouchableOpacity>
      <TakeImages />
    </View>
  );
};

const TabBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 80,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        screenOptions={{
          cardOverlayEnabled: true,
          // ...TransitionPresets.ModalPresentationIOS,
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons
                name="home"
                color="red"
                size={35}
                style={{color: focused ? '#e32f45' : '#748c94'}}
              />
              {/* <Text style={{color: focused ? '#e32f45' : '#748c94'}}>Home</Text> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={CardView}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign name="plus" color="white" size={30} />
          ),
          tabBarButton: props => <CustomTabBarBottom {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Ionicons
                name="person-circle-outline"
                color="red"
                size={40}
                style={{color: focused ? '#e32f45' : '#748c94'}}
              />
              {/* <Text style={{color: focused ? '#e32f45' : '#748c94'}}>Home</Text> */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TabBottom"
        component={TabBottom}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
