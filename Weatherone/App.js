// import { StatusBar } from 'expo-status-bar';
// import React from "react";
// import { StyleSheet, Text, View 2} from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello HAERIM!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 25,
//     color: 'black',
//   },
// });

import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, ActivityIndicator, StyleSheet, ScrollView } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const API_KEY = "76d2de370ab254f16d417f710fb39b92";

export default function App() {
  const [city, setCity] = useState("Loading...")
  const [days, setDays] = useState([]);
  const [ok, setOK] = useState(true);
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOK(false);
    }
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 })
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`)
    const json = await response.json();
    setDays(json.daily);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return <View style={styles.container}>
    <View style={styles.city}>
      <Text style={styles.cityName}>{city}</Text>
    </View>
    <ScrollView
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      ContentContainerStyle={styles.weather}
    >
      {days.length === 0 ? (
        <View style={styles.day}>
          <ActivityIndicator
            color="white"
            style={{ marginTop: 10 }}
            size="large"
          />
        </View>
      ) : (
        days.map((day, index) =>
          <View key={index} style={styles.day}>
            <Text style={styles.temp}>
              {parseFloat(day.temp.day).toFixed(1)}
            </Text>
            <Text style={styles.description}>{day.weather[0].main}</Text>
            <Text style={styles.tinyText}>{day.weather[0].description}</Text>
          </View>
        )
      )}
    </ScrollView>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",

  },
  weather: {

  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 50,
    fontSize: 178,

  },
  description: {
    marginTop: -30,
    fontSize: 60,
  },
  tinyText: {
    fontSize: 20,
  },
}); 
