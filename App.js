import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import Card from "./Components/Card";

const items = [
  {
    id: 1,
    aspectratio: 150 / 200,
    URL: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg',
  },
  {
    id: 2,
    aspectratio: 1,
    URL: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
  },
  {
    id: 3,
    aspectratio: 120 / 100,
    URL:'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
  },
  {
    id: 4,
    aspectratio: 200 / 150,
    URL:'https://upload.wikimedia.org/wikipedia/commons/3/3b/Johnny_Depp-2757_%28cropped%29.jpg',
  },
  {
    id: 5,
    aspectratio: 375 / 400,
    URL:'https://kenh14cdn.com/203336854389633024/2022/6/22/johnny-depp-amber-heard-trial-04122022-165585409506291899611.jpg',
  },
  {
    id: 6,
    aspectratio: 500 / 400,
    URL:'https://m.media-amazon.com/images/M/MV5BYTNlOGZhYzgtMmE3OC00Y2NiLWFhNWQtNzg5MjRhNTJhZGVmXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg',
  },
  {
    id: 7,
    aspectratio: 1040 / 500,
    URL:'https://upload.wikimedia.org/wikipedia/commons/e/e1/%D0%A2%D0%B8%D0%BC_%D0%9A%D1%83%D0%BA_%2802-09-2021%29.jpg',
  },
  {
    id: 8,
    aspectratio: 2 / 1,
    URL:'https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg',
  },
  {
    id: 9,
    aspectratio: 1,
    URL:'https://vcdn1-sohoa.vnecdn.net/2020/07/22/Zhang-Yiming-CEO-TikTok-2764-1595427101.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=Ujt6xHc3RqBRJtgWi9qgjA',
  },
  {
    id: 10,
    aspectratio: 375 / 400,
    URL:'https://media.2dep.vn/upload/thucquyen/2021/11/30/ceo-twitter-jack-dorsey-tu-chuc-sau-hon-15-nam-gan-bo-1638241379-2.jpg',
  },
  {
    id: 11,
    aspectratio: 1,
    URL:'data:image/jpeg;base64,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',
  },
];

const App = () => {
  const width = Dimensions.get("window").width / 2;
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Masonry View</Text>
      <ScrollView>
        <View style={{flexDirection:'row'}}>
          <View style={{marginRight:5}}> 
          {items
            .filter((_, i) => i % 2 === 0)
            .map(item => (
              <Card key={item.id} width={width} aspectratio={item.aspectratio} URL={item.URL} />
            ))}
          </View>
          <View style={{marginLeft:5}} >
          {items
            .filter((_, i) => i % 2 !== 0)
            .map(item => (
              <Card key={item.id} width={width} aspectratio={item.aspectratio} URL={item.URL} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    padding: 10,
    alignItems: "center",
  },
  text: {
    //Màu cho chữ:
    color: "black",
    //Canh chỉnh vị trí cho chữ:
    textAlign: "center",
    //Độ đậm nhạt cảu chữ:
    fontWeight: "bold",
    //Cỡ chữ:
    fontSize: 20,
    //
    marginBottom: 20,
  },
});