import react from "react";
import {View, SafeAreaView, StyleSheet, Text, StatusBar, FlatList} from "react-native";

const DATA = [
  {
    id: '1',
    title: 'First Item'
  },
  {
    id: '2',
    title: "Second item"
  },
  {
    id: '3',
    title: "Third item"
  }
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const Home2 = () => {
  return(
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      ></FlatList>
    </SafeAreaView>
  );
}

export default Home2();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  }
});
