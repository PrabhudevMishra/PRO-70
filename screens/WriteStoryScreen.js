import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";

export default class WriteStoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={require("../assets/write.png")}
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
          <Text style={{ textAlign: "center", fontSize: 30 }}>
            Write your story
          </Text>
        </View>

        <TextInput style={styles.StoryTitleBox} placeholder={"Story Title"}/>
        <TextInput style={styles.StoryAuthorBox} placeholder={"Author"}/>
        <TextInput style={styles.WriteStoryBox} placeholder={"Write your story...."} multiline = {true}/>


        <View>
          <TouchableOpacity style={styles.SubmitButton}>
            <Text style={{ fontWeight: "bold" }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 400 },
  displayText: {
    fontSize: 15,
    textDecorationLine: "underline",
  },
  SubmitButton: {
    backgroundColor: "yellow",
    width: 60,
    borderWidth: 1.5,
    marginTop: 500,
    alignSelf: "center",
    textAlign: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 10,
  },
  inputView: {
    flexDirection: "row",
    margin: 20,
  },
  StoryTitleBox: {
    width: 200,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    alignSelf: "center",
    marginTop: 20
  },

  StoryAuthorBox: {
    width: 200,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    alignSelf: "center",
    marginTop: 20
  },

  WriteStoryBox: {
    width: 300,
    height: 200,
    borderWidth: 1.5,
    fontSize: 20,
    alignSelf: "center",
    marginTop: 20
  },
});
