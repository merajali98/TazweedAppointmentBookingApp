import React from "react";
import { from } from 'rxjs';
import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardFooter from "components/Card/CardFooter.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import mobx from "mobx";

const useStyles = makeStyles(styles);
export default function RequestedBuyers() {
  const  [userId,setUserId] = useState()
  const  [bookedbuyersIdList,setBookedBuyersIdList] = useState([])
  const  [rejectedsellersIdList,setRejectedSellersIdList] = useState([])
  const  [bookedsellersIdList,setBookedSellersIdList] = useState([])
  const  [rejectedbuyersIdList,setRejectedBuyersIdList] = useState([])
  const  [buyersIdList,setBuyersIdList] = useState([])
  const [isLoaded,setIsLoaded]=useState(false)
  function buttonIsClicked(e){
    
    axios.get("http://localhost:3010/sellers/listofrequestedbuyers/"+userId)
    .then(res => {
      setBuyersIdList(res.data)
      setIsLoaded(true)
    })
    .catch(err=>console.log(err));
   
    getBookedBuyerList();
    getRejectedBuyerList();
  }

  function acceptButtonIsClicked(buyer){
    getBookedSellerList(buyer);
    updateBookedBuyerList(buyer);
    

    let randomBuyersIdList=buyersIdList;
    let requestedBuyersTosend=randomBuyersIdList.filter(i=> i!=buyer);

    var url="http://localhost:3010/sellers/listofrequestedbuyers/"+userId;
    axios.patch(url,{
      listofrequestedbuyers : requestedBuyersTosend
    },{
      headers: { 'Content-Type': 'application/json' 
    }
    })
    .then(res => {
      setBuyersIdList(requestedBuyersTosend)
    })
    .catch(err=>console.log(err));

    
    
  }
  
  function getBookedSellerList(buyer){
  
    axios.get("http://localhost:3010/buyers/listofbookedsellers/"+buyer)
    .then(res => {
      setBookedSellersIdList(res.data)
      let randomSellersIdList=res.data;
      console.log(randomSellersIdList)
      randomSellersIdList.push(userId);
      //let bookedbuyerstosend=randomBuyersIdList.filter((val, id, array) => {
       // return array.indexOf(val) == id;  
     //});
      //console.log(bookedbuyerstosend)
  
      var url="http://localhost:3010/buyers/listofbookedsellers/"+buyer;
      axios.patch(url,{
        listofbookedsellers : randomSellersIdList
      },{
        headers: { 'Content-Type': 'application/json' 
      }
      })
      .then(res => {
        console.log(res)
      })
      .catch(err=>console.log(err));

    })
    .catch(err=>console.log(err));



  }
  function getRejectedSellerList(buyer){
  
    axios.get("http://localhost:3010/buyers/listofrejectedsellers/"+buyer)
    .then(res => {
      setRejectedSellersIdList(res.data)
      let randomSellersIdList=res.data;
      console.log(randomSellersIdList)
      randomSellersIdList.push(userId);
      //let bookedbuyerstosend=randomBuyersIdList.filter((val, id, array) => {
       // return array.indexOf(val) == id;  
     //});
      //console.log(bookedbuyerstosend)
  
      var url="http://localhost:3010/buyers/listofrejectedsellers/"+buyer;
      axios.patch(url,{
        listofrejectedsellers : randomSellersIdList
      },{
        headers: { 'Content-Type': 'application/json' 
      }
      })
      .then(res => {
        console.log(res)
      })
      .catch(err=>console.log(err));
    })
    .catch(err=>console.log(err));



  }
  function getBookedBuyerList(){
  
    axios.get("http://localhost:3010/sellers/listofbookedbuyers/"+userId)
    .then(res => {
      setBookedBuyersIdList(res.data)
    })
    .catch(err=>console.log(err));
    
    
  }

  function getRejectedBuyerList(){
  
    axios.get("http://localhost:3010/sellers/listofrejectedbuyers/"+userId)
    .then(res => {
      setRejectedBuyersIdList(res.data)
    })
    .catch(err=>console.log(err));
    
  }
  function updateBookedBuyerList(buyer){

    let randomBuyersIdList=bookedbuyersIdList;
    randomBuyersIdList.push(buyer);
    //let bookedbuyerstosend=randomBuyersIdList.filter((val, id, array) => {
     // return array.indexOf(val) == id;  
   //});
    //console.log(bookedbuyerstosend)

    var url="http://localhost:3010/sellers/listofbookedbuyers/"+userId;
    axios.patch(url,{
      listofbookedbuyers : randomBuyersIdList
    },{
      headers: { 'Content-Type': 'application/json' 
    }
    })
    .then(res => {
      console.log(res)
    })
    .catch(err=>console.log(err));


  }

  function updateRejectedBuyerList(buyer){

    let randomBuyersIdList=rejectedbuyersIdList;
    randomBuyersIdList.push(buyer);
    //let bookedbuyerstosend=randomBuyersIdList.filter((val, id, array) => {
     // return array.indexOf(val) == id;  
   //});
    //console.log(bookedbuyerstosend)

    var url="http://localhost:3010/sellers/listofrejectedbuyers/"+userId;
    axios.patch(url,{
      listofrejectedbuyers : randomBuyersIdList
    },{
      headers: { 'Content-Type': 'application/json' 
    }
    })
    .then(res => {
      console.log(res)
    })
    .catch(err=>console.log(err));
  }

  function rejectButtonIsClicked(buyer){
    getRejectedSellerList(buyer);
    updateRejectedBuyerList(buyer);

    let randomBuyersIdList=buyersIdList;
    let requestedBuyersTosend=randomBuyersIdList.filter(i=> i!=buyer);

    var url="http://localhost:3010/sellers/listofrequestedbuyers/"+userId;
    axios.patch(url,{
      listofrequestedbuyers : requestedBuyersTosend
    },{
      headers: { 'Content-Type': 'application/json' 
    }
    })
    .then(res => {
      setBuyersIdList(requestedBuyersTosend)
    })
    .catch(err=>console.log(err));
  }

  const classes = useStyles();
  if(isLoaded===false) return(
    <GridContainer>
    <GridItem xs={12} sm={12} md={8}>
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Seller Details</h4>
        </CardHeader>
        <CardBody>
        <GridContainer>
            <GridItem xs={12} sm={6} md={8}>
              <p>Enter Seller id to fetch details</p>
              <input
                labelText="Enter Seller id "
                id="sellerid"
                formControlProps={{
                  fullWidth: true
                }}
              onChange={event=>setUserId(event.target.value)}/>
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
              <Button color="primary" onClick={buttonIsClicked}>Get Details</Button>
        </CardFooter>
      </Card>
    </GridItem>
  </GridContainer>
  );
  if(isLoaded===true && buyersIdList.length<=0 ) return("You have No Requested Buyers")

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>

          {buyersIdList.map(buyer=>(
           
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Requested Buyer</h4>
            </CardHeader>
            <CardBody>
          <h5>Buyer ID </h5>
          <p className={classes.cardCategory}>{buyer}</p>
            </CardBody>
            <CardFooter>
              <Button  color="success" onClick={() =>{const bookedBuyerId=buyer; acceptButtonIsClicked(bookedBuyerId);}}>Accept</Button>
              <Button  color="danger" onClick={()=>{const rejectedBuyerId=buyer;rejectButtonIsClicked(rejectedBuyerId)}}>Reject</Button>
            </CardFooter>
          </Card>
          ))}
        </GridItem>
      </GridContainer>
    </div>
  );
}
