import {View, Text, ScrollView, StyleSheet, Button, Alert, TouchableOpacity} from 'react-native';
import React from 'react';
import BirthRemind from './Components/BirthRemind';
const App = () => {
  return (
    <ScrollView >
    <BirthRemind/>
    </ScrollView>
  );
};


export default App;


// <View style={ViewStyle.container1}>
//         <Text style={ViewStyle.container1}>Hello Programmers</Text>
//       </View>
//       <View style={ViewStyle.container2}>
//         <Text style={ViewStyle.container}>Hello Noobs</Text>
//       </View>
//       {/* <Button color={"black"}   title='Click Me' onPress={()=>{Alert.alert("Hello")}} /> */}
//       <TouchableOpacity onPress={() => Alert.alert('Button pressed')} style={ViewStyle.button}>
//       <Text style={ViewStyle.text}>Press me</Text>
//     </TouchableOpacity>