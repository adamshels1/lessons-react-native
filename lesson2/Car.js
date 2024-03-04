import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'

const Car = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={{ marginTop: 20, marginLeft: 20 }}>
            <Text style={{ fontWeight: '800', color: '#471471', fontSize: 20 }}>{item.name}</Text>
            <Text>speed: {item.speed}</Text>
            <Image source={{ uri: item.image }} style={{ width: 300, height: 200 }} />
        </View>
    </TouchableOpacity>
)

export default Car