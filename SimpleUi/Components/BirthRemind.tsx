import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Notification} from 'react-native-notifications';
import moment from 'moment';

const BirthRemind = () => {
  const [friend, setFriend] = useState([]);
  const [name, setName] = useState('');
  const [bday, setBday] = useState('');

  const saveFriends =()=>{

  }
  const renderFriendItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.name}</Text>
      <Text>{moment(item.birthday).format('MMMM D')}</Text>
    </View>
  );

  return (
    <View style={{flex: 1, padding: 10 ,margin:10}}>
      <View>
        <Text> Add Friends</Text>
        <TextInput 
        value={name}
        onChangeText={setName}
        placeholder="Name..." 
        style={{borderWidth:1,borderColor:"#ccc",padding:10 , 
        width:300,marginTop:10 }}
        />
        <TextInput 
        value={bday}
        onChangeText={setBday}
        placeholder="Birthday...(YYYY-MM-DD) "  
        style={{borderWidth:1,borderColor:"#ccc",padding:10 , 
        width:300,marginTop:10 }}
        />
        <TouchableOpacity onPress={saveFriends}
        style={{backgroundColor:"yellowgreen",width:100 , height:40 ,flex:1}}
        >
            <Text  style={{ alignItems:"center" ,textAlign:"center",justifyContent:"center" ,
            padding:10 ,}}>Save</Text>


        </TouchableOpacity>
      </View>
      <View>
        <Text>Friends </Text>
        {
            friend.length === 0 ? (
                <Text>No Friends Yet</Text>
            ):(
               <FlatList
               data ={friend}
               renderItem={renderFriendItem}
               keyExtractor={(item)=>item.id.toString()}
               />
            )
        }
      </View>
    </View>
  );
};

export default BirthRemind;
