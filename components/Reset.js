import { StyleSheet, View, Pressable, Text } from 'react-native';
//npmimport FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react'
export default function Reset({ label, theme, setSeconds }) {
  
  const handlePress =()=> {
setSeconds(0)}
  
  if (theme === "primary") {
    return (
      <View
      style={[
        styles.buttonContainer,
        { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
      ]}>
      <Pressable
        style={[styles.button, { backgroundColor: '#fff' }]}
        onPress={handlePress}>
        <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
      </Pressable>
    </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>    
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
 
  buttonLabel: {
    color: '#fff',
    fontSize: 30,
  },
});
