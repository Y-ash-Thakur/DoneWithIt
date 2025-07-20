import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Text >Hello Yash 😀</Text>
      <View style={{width: 200, height: 70, backgroundColor: 'dodgerblue'}}></View>
      <TouchableHighlight onPress={() => {console.log("Image Tapped")}}>
      <Image
      source={{
                        width: 200,
                        height: 300,
                        uri: "https://picsum.photos/200/300"}} />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
  },
});