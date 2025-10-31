import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { db } from '../firebase/config';
import DynamicForm from '../Components/DynamicForm';
import Post from '../Components/Post';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    db.collection("posts").onSnapshot(
      (docs) => {
        let posts = [];
        docs.forEach((doc) =>
          posts.push({
            id: doc.id,
            data: doc.data(),
          })
        );
        this.setState({ posts: posts });
      },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>

        <View style={styles.formWrapper}>
          <DynamicForm />
        </View>

        <FlatList  style={styles.listContent}
          data={this.state.posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Post postData={item.data} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#000000ff",
  },
  formContainer: {
    flex: 1,
    marginVertical: 15,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  formWrapper: {
    marginBottom: 20, 
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});

export default Home;

