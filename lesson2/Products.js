import React, { useState } from 'react';
import { View, Text, FlatList, Image, Touchable, TouchableOpacity, Platform } from 'react-native'
import Car from './Car'

const cars = [
    { name: 'mers', speed: 220, image: 'https://cdn.motor1.com/images/mgl/jvjqN/s1/mercedes-e-klasse-2020.jpg' },
    { name: 'bmw', speed: 240, image: 'https://www.borusanotomotiv.com/Uploads/2023%20Bas%C4%B1n%20B%C3%BCltenleri/5)%20May%C4%B1s/25.05.2023/yeni-bmw-5-serisi.jpg' },
    { name: 'toyta', speed: 230, image: 'https://scene7.toyota.eu/is/image/toyotaeurope/Yeni-Toyota-Corolla-1:Medium-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0' },
]

const Products = () => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <View>
            <Text>Platform: {Platform.OS}</Text>
            <Text>Cars</Text>

            {Platform.OS === 'ios' && (
                <Text>Products in cart: {cart.length}</Text>
            )}


            <TouchableOpacity onPress={clearCart}>
                <Text>clear cart</Text>
            </TouchableOpacity>

            <FlatList
                data={cars}
                renderItem={({ item }) => <Car item={item} onPress={() => addToCart(item)} />}
                keyExtractor={(item) => item.name}
            />

            {/* <Car
                item={cars[1]}
                color='blue'
            /> */}


        </View>
    )
}

export default Products;