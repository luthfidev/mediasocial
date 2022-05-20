import React from 'react';
import { View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, TextArea} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddPost = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Ionicons name="ios-image-outline" color="black" size={100} />
      </View>
      <View style={styles.wrapForm}>
        <TextArea h={20} placeholder="Caption" w="75%" maxW="300" />
      </View>
      <Button colorScheme="success" style={{marginTop: 30}}>
        Post
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
    // borderTopLeftRadius: 38,
    // borderTopRightRadius: 38,
    marginTop: 30,
  },
  wrapForm: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    width: 300,
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
  },
});

export default AddPost;
