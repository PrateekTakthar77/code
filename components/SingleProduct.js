import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './redux/action';

import { SliderBox } from "react-native-image-slider-box";
const images = [
    require('../images/Logo.png'),
    require('../images/Logo.png'),
    require('../images/Logo.png'),
]

const SingleProduct = ({ navigation }) => {
    const dispatch = useDispatch();
    const { activeItem } = useSelector((state) => state.reducer);

    const handlePress = (activeItem) => {
        dispatch(addToCart(activeItem));
        navigation.navigate('cart');
    };

    return (
        <View>
            <ScrollView>
                <View style={{ height: 280, width: 200, marginTop: 30,justifyContent:'center' }}>
                    <SliderBox images={images} sliderBoxHeight={300} dotColor="#eec06b" inactiveDotColor="black" autoplay={false} autoplayInterval={1000} circleLoop={true} />
                </View>
                <View style={{ marginTop: 50, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#ECC440', padding: 20, marginRight: 20, marginLeft: 20, marginBottom: 20 }}>
                    <Text style={{ color: 'black' }}>Size-</Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'white', backgroundColor: 'black', padding: 1 }}>2.5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: 'black' }}>3.0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: 'black' }}>3.5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={{ color: 'black' }}>4.0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: 'black' }}>4.5</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'black', padding: 20, marginRight: 20, marginLeft: 20 }}>
                    <Text style={{ color: '#ecc440' }}>Ratings</Text>
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#ecc440' }}>⭐</Text>
                        <Text style={{ color: '#ecc440' }}>⭐</Text>
                        <Text style={{ color: '#ecc440' }}>⭐</Text>
                        <Text style={{ color: '#ecc440' }}>⭐</Text>
                        <Text style={{ color: '#ecc440' }}>⭐</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#ecc440' }}>4.5</Text>
                </View>
                <TouchableOpacity onPress={() => handlePress(activeItem)}>
                    <View style={styles.loginbutton}>
                        <Text style={styles.logintext}>ADD TO CART</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ borderTopWidth: 1, borderTopColor: '#808080', marginTop: 20, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginRight: 20, marginLeft: 20 }}>
                    <Text style={{ color: 'black' }}>Product specification</Text>
                    <Text style={{ color: 'black' }}>↓</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default SingleProduct;

const styles = StyleSheet.create({
    loginbutton: {
        backgroundColor: "#eec06b",
        padding: 15,
        marginTop: 20,
        alignItems: "center",
        borderRadius: 80,
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 75,
    },
    logintext: {
        fontSize: 15,
        color: "black",
    },
});