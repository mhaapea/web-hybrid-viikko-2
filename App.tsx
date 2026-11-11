import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Modal, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.container}>
      <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {setModalVisible(false)
          }}>
        <View style={styles.modalView}>
          <Text style={styles.text}>This is modal...</Text>
          <Pressable onPress={() =>
            setModalVisible(false)}>
            <Text style={styles.text}>Close</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>Show modal message</Text>
      </Pressable>
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
  modalView: {
    margin: 20,
    backgroundColor: "lightblue",
    padding: 35,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
