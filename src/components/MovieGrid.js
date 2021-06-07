import React, { Component, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import MovieDetails from "../views/MovieDetails";

import { useNavigation } from '@react-navigation/native';

const MovieGrid = (props) => {

  //const { navigation } = props;
  const navigation = useNavigation();
  state = { photos: [] };

  

  var photo = {
    uri: `https://www.api3.digimovieplex.com/${props.movie.txt_banner1}`,
    //type: 'image/jpeg',
    //name: 'photo.jpeg',
  };
  //console.log(photo.uri)

  var mov = [];
  mov.push(photo.uri);
  //console.log(mov.toString())

  var video = {
    uri: `https://www.api3.digimovieplex.com/${props.movie.txt_trailer1}`,
    //type: 'image/jpeg',
    //name: 'photo.jpeg',
  };
  //console.log(photo.uri)

  var movVideo = [];
  movVideo.push(video.uri);

  let Image_Http_URL = { uri: mov.toString() };

  let video_Http_URL = { uri: movVideo.toString() };

  let newMovie = props.movie;

     MovieDetailPage = ()=>{

    // let movie=props.movie;
     //let movieKey=props.movie.num_movie_id

     console.log(`tapped ${props.movie.num_movie_id}`);

     /* navigation.navigate('MovieDetails', {
       key:movieKey, movie:movie,

     });
   */
    
       navigation.navigate("MovieDetails", {
        movie: props.movie,

        movieUrl:  video_Http_URL 
      })
     
    /*  return(
     <View>
        <MovieDetails  key={props.movie.num_movie_id} movie={props.movie}/>
     </View>
      
     )
      */
   }
   


  

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
      }}
    >
      <View style={styles.buttonStack}>
        <TouchableOpacity style={styles.button} onPress={MovieDetailPage}>
          <Image
            source={Image_Http_URL}
            resizeMode="stretch"
            style={styles.image}
            width="100%"
          />

          <View style={styles.detail}>
            <Text style={styles.title}>{props.movie.txt_movie_title}</Text>
            <Text style={styles.shortFilm}>
              {" "}
              {props.movie.category} : {props.movie.txt_movie_rating}
            </Text>
            <Text style={styles.bengali}>{props.movie.language}</Text>

            <Text style={styles.ticket19}>
              Price: Rs.{props.movie.num_movie_price_inr}/-
            </Text>
          </View>
          <View style={styles.rect}>
            <Text style={styles.buyTickets}>BUY TICKETS</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    flex: 1,

    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    marginTop: 2,

    borderRadius: 5,
    flex: 1.3,
  },
  title: {
    flex: 2.2,

    color: "rgba(255,255,255,1)",

    fontSize: 18,
    marginTop: 3,

    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
  shortFilm: {
    flex: 1.5,

    color: "rgba(255,255,255,1)",
    justifyContent: "center",

    fontSize: 13,

    marginTop: 4,
    marginLeft: 8,

    textAlign: "center",
  },
  bengali: {
    flex: 1.5,

    color: "rgba(255,255,255,1)",

    marginTop: 5,

    textAlign: "center",
  },
  ticket19: {
    flex: 1.5,

    color: "rgba(255,255,255,1)",
    height: 35,

    marginTop: 5,

    textAlign: "center",
  },
  rect: {
    flex: 0.3,

    backgroundColor: "rgba(208,2,27,1)",
    marginTop: 2,

    borderRadius: 5,
    alignContent: "center",
  },
  buyTickets: {
    alignContent: "center",
    textAlign: "center",

    fontWeight: "bold",

    color: "rgba(255,255,255,1)",
  },
  buttonStack: {
    width: 190,
    height: 320,
    padding: 8,
    marginTop: 5,
    backgroundColor: "#282c34",
    borderRadius: 8,
  },
  detail: {
    flex: 2,
    width: "100%",
    height: "100%",
  },
});

export default MovieGrid;
