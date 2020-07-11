import React,{Component} from 'react';
import { Scene , Router , Actions } from 'react-native-router-flux';
import SellersList from './views/SellersList';
import BookedSellersList from './views/ListofBookedSellers';
import RejectedSellersList from './views/ListofRejectSellers';
import Profile from './views/Profile';

export default function RouterComponent() {
    
    
    return(
    
        <Router sceneStyle={{ paddingTop:55 }}>
            <Scene key="BuyerDashboard" component={Profile} title="Buyer Profile"></Scene>
            <Scene key="BuyerDashboard" component={SellersList} title="View Sellers"></Scene>
            <Scene key="BuyerDashboard" component={BookedSellersList} title="Booked Appointments"></Scene>
            <Scene key="BuyerDashboard" component={RejectedSellersList} title="Rejected Appointments"></Scene>
        </Router>


    );




};
