import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "components/Table/Table.js";
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);
export default function UserProfile() {
  const  [userId,setUserId] = useState()
  const  [sellerId,setSellerId] = useState()
  const  [sellerName,setSellerName] = useState()
  const  [sellerAddress,setSellerAddress] = useState()
  const  [sellerAvailableFrom,setSellerAvailableFrom] = useState()
  const  [sellerAvailableTo,setSellerAvailableTo] = useState()
  const [isLoaded,setIsLoaded]=useState(false)
      
      function buttonIsClicked(e){
        axios.get("http://localhost:3010/sellers/"+userId)
        .then(res => {
          console.log(res.data)
          setSellerId(res.data._id)
          setSellerName(res.data.name)
          setSellerAddress(res.data.address)
          setSellerAvailableFrom(res.data.availablefrom)
          setSellerAvailableTo(res.data.availableto)
          setIsLoaded(true)
        
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
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Seller Details</h4>
            </CardHeader>
            <CardBody>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                  <CustomInput
                    labelText="Seller id "
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText={sellerId}
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                  <CustomInput
                    labelText="Seller Name "
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText={sellerName}
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                  <CustomInput
                    labelText="Seller Address "
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText={sellerAddress}
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                  <CustomInput
                    labelText="Available From "
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText={sellerAvailableFrom}
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                  <CustomInput
                    labelText="Available To "
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText={sellerAvailableTo}
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
