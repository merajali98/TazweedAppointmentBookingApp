import React from 'react'
import { useState } from "react";
import {
   StyleSheet,
   View,
   Text,
   Button,
   TextInput,
 } from 'react-native';
 import { 
   Colors, Header,
 } from 'react-native/Libraries/NewAppScreen';

 


export default function RejectedSellersList() {
    const  [userId,setUserId] = useState()
    const  [buyerId,setBuyerId] = useState()
    const  [buyerName,setBuyerName] = useState()
    const  [buyerAddress,setBuyerAddress] = useState()
    const [isLoaded,setIsLoaded]=useState(false)
  
  function buttonIsClicked(e){

    fetch('http://localhost:3010/buyers/'+userId, {
       method: 'GET'
    })
    .then(res=>res.json())
    .then((responseJson) => {
       console.log(responseJson);
       setBuyerId(responseJson._id)
       setBuyerName(responseJson.name)
       setBuyerAddress(responseJson.address)
       setIsLoaded(true)
    })
    .catch((error) => {
       console.error(error);
    });
    
  }
  
   if(isLoaded===false){
    return(
    <View style={styles.sectionContainer}>
            <Text>Enter Buyer Id</Text>
            <TextInput onChange={event=>setUserId(event.target.value)}></TextInput>
            <Button onClick={buttonIsClicked}></Button>
    </View>
    );

   }

     return (
        
          <View style={styles.sectionContainer}>
            <Text>Buyer Id:{buyerId}</Text>
            <Text>Buyer Name:{buyerName}</Text>
            <Text>Buyer Address:{buyeraddress}</Text>
         </View>  
      );
   
}
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
 