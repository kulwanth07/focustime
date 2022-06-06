import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/color';
import {RoundedButton} from '../components/RoundedButton'
import {spacing} from '../utils/sizes'

export const Focus = ({addSubject}) => {
  const [text, setText] = React.useState(null);
  console.log(text)
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style = {styles.textInput}
          label="What would you like to focus on ?"
          onChangeText={(text) => setText(text)}
        /> 
        <View style={styles.button}>
        <RoundedButton title = "+" size = {50} onPress = {() => addSubject(text)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },

  textInput : {
    flex: 1,
    marginRight:spacing.sm
  },
  
  button : {
    justifyContent : "center"
  },

  inputContainer: {    
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: "row"
  },

  text: {
    color: colors.white,
  },
});
