import { View, Text } from 'react-native';

export default function HomeScreen() {
  const hour = 24
  // new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 18) {
    greeting = 'Good afternoon';
  } else if (hour < 24) {
    greeting = 'Good evening';
  } else {
    greeting = "Hello"
  }

  console.log('Hour is:', hour);
  console.log('Greeting is:', greeting);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{greeting}, Yash 👋</Text>
    </View>
  );
}
