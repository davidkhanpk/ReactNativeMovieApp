import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text } from 'react-native';

const placeholderImage = require("../assets/images/placeholder")
class Card extends React.PureComponent {
    render() {
        const { item } = this.props;
        return (
            <TouchableOpacity style={styles.container}>
                <Image resizeMode="cover" style={styles.image} source={ item.poster_path ? {uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`} : placeholderImage } />
                {!item.poster_path && <Text style={styles.movieName}>{item.title}</Text>}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({ 
    container: {
        padding: 5,
        position: 'relative',
        alignItems: "center",
        height: 100
    },
    movieName: {
        position: "absolute",
        width: 100,
        top: 20,
        textAlign: "center",
    },  
    image: {
        height: 200,
        width: 120,
        borderRadius: 20
    }
})

export default Card;