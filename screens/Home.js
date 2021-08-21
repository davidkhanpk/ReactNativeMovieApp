import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { SliderBox} from 'react-native-image-slider-box'
import List from '../components/List';
import { getPopularMovies, getUpcomingMovies } from '../services/services'

const dimensions = Dimensions.get("screen");
const Home = () => {
    const [moviesImages, setMoviesImages] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]); 

    useEffect(() => {
        getUpcomingMovies().then(movies => {
            // console.log(movies[0])
            const moviesImagesArray = [];
            movies.forEach(movie => {
                moviesImagesArray.push(`https://image.tmdb.org/t/p/w500${movie.poster_path}`)
            });
            setMoviesImages(moviesImagesArray);
        }).catch(err => {
            setError(err);
        })

        getPopularMovies().then(movies => {
            setPopularMovies(movies)
        }).catch(err => {

        })
    }, [])

    return (
        <React.Fragment>
        <View style={styles.sliderContainer}>
            <SliderBox autoplay={true} circleLoop={true} dotStyle={styles.sliderStyle} images={moviesImages} sliderBoxHeight={dimensions.height / 1.5 } />
        </View>
        <View style={styles.carousel}>
            <List title="Popular Movies" content={popularMovies} />
        </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    sliderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sliderStyle: {
        height: 0
    }
})

export default Home;