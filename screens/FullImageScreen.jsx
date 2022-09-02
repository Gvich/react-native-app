import React from "react";
import {Alert, View} from "react-native";

import {Loading} from "../components/Loading";
import {PostImage} from "../components/PostImage";

import axios from "axios";



export const FullImageScreen = ({ route, navigation}) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [data, setData] = React.useState()
    const {id, title} = route.params


    React.useEffect(()=> {
        navigation.setOptions({
            title,
        })

        setIsLoading(true)

        axios
            .get(`https://api.unsplash.com/photos/${id}/?client_id=IPZv8nWHBTlmLdphQT0uGi8NcYOquGm6yzrllTQQiws`)
            .then(( {data})=> {
                setData(data)
            })
            .catch(err => {
                console.log(err)
                Alert.alert('error', 'error with getting post')
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, [])

    if(isLoading) {
        return <Loading/>
    }


    return (
        <View style={{padding: 20}}>
            <PostImage imageUrl={data.urls.small}/>
        </View>
    );
};


