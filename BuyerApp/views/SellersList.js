import React from 'react'
import { useState } from "react";
import { Table, Row, Rows } from 'react-native-table-component';
import {
   StyleSheet,
   View,
   Text,
   Button,
 } from 'react-native';
 import { 
   Colors,
 } from 'react-native/Libraries/NewAppScreen';

 


export default function SellerList() {
   const  [sellersList,setsellersList] = useState([])
   const  [searchSellersList,setsearchSellersList] = useState([])
   const  [requestedBuyersList,setrequestedBuyersList] = useState([])
   const  [userId,setUserId] = useState()
   const  [isLoaded,setIsLoaded] = useState(false)

  function searchSellerWithId(event){
      let randomList=sellersList.filter(seller=>seller.includes(event.target.value))
      setsearchSellersList(randomList);



  }
  function updaterequestedBuyerList(sellerId){

    fetch('http://localhost:3010/sellers/listofbookedbuyers/'+sellerId, {
       method: 'GET'
    })
    .then(res=>res.json())
    .then((responseJson) => {
       console.log(responseJson);
       setrequestedBuyersList(responseJson)
    })
    .then(res=>{

              let randomBuyersIdList=requestedBuyersList;
              randomBuyersIdList.push(userId);
              fetch('http://localhost:3010/sellers/listofrequestedbuyers/'+sellerId, {
              method: 'PATCH',
              headers: { 'Content-Type':'application/json' },
              body:{

                listofrequestedbuyers:randomBuyersIdList
                
              }
            })
            .then(res=>res.json())
            .then((responseJson) => {
              console.log(responseJson);
              console.log("Request Sent")
            })
            .catch((error) => {
              console.error(error);
            });

    })
    .catch((error) => {
       console.error(error);
    });
  
    
    
  }
 function sendButtonIsClicked(sellerId){
  updaterequestedBuyerList(sellerId);
    alert('Request sent to'+sellerId);

  }
  function buttonIsClicked(){
    fetch('http://localhost:3010/sellers', {
       method: 'GET'
    })
    .then(res=>res.json())
    .then((responseJson) => {
       console.log(responseJson);
       setsellersList(responseJson);
       searchSellersList(responseJson);
       setIsLoaded(true);
    })
    .catch((error) => {
       console.error(error);
    });
   

  }
  
   function createList(seller){
    let availableFrom,availableTo;
    if(seller.availablefrom!=null && seller.availablefrom!=undefined){
      availableFrom=seller.availablefrom.substring(0,10);

    }
    if(seller.availableto!=null && seller.availableto!=undefined){
      availableTo=seller.availableto.substring(0,10);

    }
    if(seller.availablefrom==null && seller.availablefrom==undefined){
      availableFrom="NA";

    }
    if(seller.availableto==null && seller.availableto==undefined){
      availableTo="NA";

    }
    let ListofSeller=[
        seller._id,
        seller.name,
        seller.address,
        availableFrom,
        availableTo

    ]

    return ListofSeller;


   }
   let headerdata=[
        "id",
        "name",
        "Address",
        "Available From",
        "Available To"

   ]
   if(isLoaded===false){
    return(
    <View style={styles.sectionContainer}>
            <Text>Enter Buyer Id</Text>
            <TextInput onChange={event=>{setUserId(event.target.value)}}></TextInput>
            <Button onClick={buttonIsClicked}></Button>
    </View>
    );

   }
   if(isLoaded==true && searchSellersList.length<=0){ return(<Text>No Search Results are matched</Text>)}

      return (
        
          <View style={styles.sectionContainer}>
            <TextInput onChange={event=>searchSellerWithId(event)}></TextInput>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={headerdata} />
              {searchSellersList.map(seller=>(
                <Row data={createList(seller)} >
                  <Button onClick={() =>{const bookedSellerId=seller._id; sendButtonIsClicked(bookedSellerId);}} ></Button>
                </Row>
                
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
