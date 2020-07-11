import React from 'react'
import { useState } from "react";
import { Table, Row } from 'react-native-table-component';
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
  const  [sellersIdList,setSellersIdList] = useState([])
  const [isLoaded,setIsLoaded]=useState(false)
  function buttonIsClicked(e){

    fetch('http://localhost:3010/buyers/listofbookedsellers/'+userId, {
       method: 'GET'
    })
    .then(res=>res.json())
    .then((responseJson) => {
       console.log(responseJson);
       setSellersIdList(responseJson)
       setIsLoaded(true)
    })
    .catch((error) => {
       console.error(error);
    });
    
  }
  
  
   function createList(seller){
    let ListofSeller=[
        "Seller ID",
         seller
    ]

    return ListofSeller;


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
   if(isLoaded===true && sellersIdList.length<=0 ) return("You have No Booked Sellers");

     return (
        
          <View style={styles.sectionContainer}>
            <Table>
              {sellersIdList.map(seller=>(
                <Row data={createList(seller)} />
                
              ))}  
            </Table>
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
 