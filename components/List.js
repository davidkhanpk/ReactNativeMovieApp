import React, { PureComponent } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from './Card';

class List extends PureComponent {
    
    render() {
        const { title, content } = this.props;
        return (
            <View style={styles.list}>
                <View>
                    <Text style={styles.text}>{title}</Text>
                </View>
                <View>
                    <FlatList data={content} horizontal={true} renderItem={({item}) => <Card item={item}></Card>} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        marginTop: 25
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 20
    }
})

export default List;