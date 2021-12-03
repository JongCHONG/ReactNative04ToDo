import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native'
import ListModal from './components/ListModal'

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [list, setList] = useState(null)

  const handleSetList = (e) => {
    console.log(e)
    // setList([...list], setList(e))
  }

  console.log(list)
  return (
    <View style={styles.container}>
      {isModalVisible &&  
        <Modal
          animationType="slide"
          transparent={true}
        >
          <ListModal setList={handleSetList} />
          <TouchableOpacity 
            onPress={() => setIsModalVisible(false)}
          >
            <Text>Hide Modal</Text>
          </TouchableOpacity>
        </Modal>
      }
      <Button 
        title="Add a list" 
        onPress={() => setIsModalVisible(true)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
