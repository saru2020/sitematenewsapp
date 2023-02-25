import { getNews } from "../api";
import { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, AppState, TouchableOpacity } from "react-native";
import type NewsType from "../utils/types";
import { Colors } from "react-native/Libraries/NewAppScreen";
import News from "../utils/types";
import { NewsDetail } from "./NewsDetail";
import { SearchBar } from "react-native-elements";

export const NewsList = (navigation) => {
    const [news, setNews] = useState([]);
    const [searchText, setSearchText] = useState();

    useEffect(() => {
        
        if (AppState.currentState == 'active') {
            console.log('app is active');
            // fetchNews();
        }
        else {
            console.log('app is NOT active');
            // setTimeout(() => {
            //     console.log('AppState.currentState: ', AppState.currentState);
                
            //     fetchNews();
            // }, 2000);
        }
    }, [])

    const fetchNews = async (query) => {
        console.log('fetchNews - query: ', query);
        if (!query.length) {
            setNews([])
            return
        }
        
        const data = await getNews(query)
        setNews(data)
    };

    const Item = (item, onPress) => {
        <View>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.newsCard}>
                <Text style={styles.text}>{ item.title }</Text>
            </View>
        </TouchableOpacity>
        </View>
    }

    // function renderNews(item: MovieType) {
    //     console.log('item.title: ', item.title);
    //     return (<Item 
    //         item={item}
    //         onPress={() => {
    //             console.log('item: ', item.title);
    //         }}/>)
    // }
    const renderNews = ({item}: MovieType) => (
        // <Item 
        // item={item}
        // onPress={() => {
        //     console.log('item: ', item.title);
        // }}/>
        <TouchableOpacity onPress={() => onPress(item)}>
            <View style={styles.newsCard}>
                <Text style={styles.text}>{ item.title }</Text>
            </View>
        </TouchableOpacity>
    );

    const onPress = (item) => {
        console.log('item: ', item.title);
        console.log('navigation: ', navigation);
        
        navigation.navigation.navigate('NewsDetail', {item: item})
    }

    const searchFunction = (text) => {
        setSearchText(text)
        console.log('text: ', text);
        fetchNews(text)
    }

    return (
        <View>
            <SearchBar
                placeholder="Search Here..."
                lightTheme
                round
                value={searchText}
                onChangeText={(text) => searchFunction(text)}
                onSearchButtonPress={()=>console.log(`User typed ${searchText}`)}
                autoCorrect={false}
            />
            <FlatList 
            style={styles.list}
            data={news} 
            renderItem={renderNews}
            keyExtractor={(item) => item.url.toString()}
            />
        </View>
    )
    
}

const styles = StyleSheet.create({
    list: {
        // backgroundColor: 'red'
    },
    newsCard: {
        padding: 20,
        backgroundColor: '#E88675',
        borderWidth:10
    },
    text: {
        color: '#111111'
    }
})