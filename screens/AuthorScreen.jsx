import {
    Alert,
    View,
    FlatList,
    RefreshControl,
    TouchableOpacity
} from 'react-native';
import React from "react";

import {Loading} from "../components/Loading";
import {Post} from "../components/Post";

import axios from "axios";





export const AuthorScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [items, setItems] = React.useState()

    const unsplashURL = 'https://api.unsplash.com/photos/?client_id=IPZv8nWHBTlmLdphQT0uGi8NcYOquGm6yzrllTQQiws'

    const fetchPosts = () => {
        setIsLoading(true)
        axios
            .get(unsplashURL)
            .then(( {data})=> {
                setItems(data)
            })
            .catch(err => {
                console.log(err)
                Alert.alert('error', 'error with getting articles')
                //alert('error with getting articles')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    React.useEffect(() => {
        fetchPosts()
    }, [])


    if(isLoading) {
        return <Loading/>
    }

    return (
        <View>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
                data={items}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('FullPost', {id: item.id , title: item.user.name})}>
                        <Post title={item.user.first_name} imageUrl={item.urls.small} author={item.user.last_name}/>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}


