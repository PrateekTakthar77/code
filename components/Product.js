import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'
import { setActiveItem } from './redux/action';

// TODO: GET THE PRODUCTS FROM STORE
const Product = ({ navigation }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const getAPIDATA = async () => {
    const url = "https://jwells-bliss-deploy2.up.railway.app/api/products";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }

  useEffect(() => {
    getAPIDATA();
  }, []);

  const handlePress = (item) => {
    dispatch(setActiveItem(item));
    navigation.navigate('Single');
  };

  // const handleAddToCart = (item) => {
  //   dispatch(addToCart(item))
  //   // console.log(item)
  // }

  // const cartData = useSelector((state) => state.reducer);
  // const [cartItems, setCartItems] = useState(0);

  // useEffect(() => {
  //   setCartItems(cartData.length)
  //   console.log(`hello`, cartData);
  // });

  // console.log(cartData)
  // const handleRemoveFromCart = (item) => {
  //   dispatch(removeFromCart(item))
  // console.warn('item')
  // }

  return (
    <View>
      <ScrollView>
      {
        data.length ?
          data.map((item, index) =>
              <View key={index}  style={{ margin: 30, flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <TouchableOpacity onPress={() => handlePress(item)} style={{ backgroundColor: 'black', borderRadius: 20, justifyContent: 'space-evenly', marginRight: 20 }}>
                  <View style={{flexDirection:''}}>
                  <Image style={{ height: 200, width: 150, }} source={require('../images/Logo.png')} />
                  <Text style={{ marginBottom: .5, width: 150, color: 'white', backgroundColor: '#ECC440', borderRadius: 20, textAlign: 'center', }}>{item?.name}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ) : null
        }
      </ScrollView>
    </View >
  )
}

export default Product

// const styles = StyleSheet.create({})