import { Button, Image, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View>
      <TextInput placeholder="Add new todo" />
      <Button title="Add Todo" />
      <View>
        <Text>Show completed todos</Text>
        <Switch />
      </View>

      <View>
            <Text>Homework</Text>
            <Image source={{uri: "https://blog.acceleratelearning.com/hubfs/bigstock-education-childhood-people--123704072.jpg"}} style={{width: 200, height: 200}}/>
      </View>

      <TouchableOpacity>
        <Text>Clear all todos</Text>
      </TouchableOpacity>
    </View>
  )
} 