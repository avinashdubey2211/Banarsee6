import React from 'react'
import Home from '../../Pages/Home/Home'
import NewArrivals from '../../Pages/New-Arrivals/NewArrivals'
import Best_Selling from '../../Pages/Best_Selling/Best_Selling'
import Cutton_Silk_Sarees from '../../Pages/Cutton-Silk-Sarees/Cutton_Silk_Sarees'
import Banner from '../../Pages/Banner/Banner'
import BrowseByFabric from '../../Pages/ BrowseByFabric / BrowseByFabric '
import SoftAiryComfortable from '../../Pages/ SoftAiryComfortable/ SoftAiryComfortable'
import Review from '../../Pages/Review/Review'
import ReviewSection from '../../Pages/ReviewSection/ReviewSection'

const index = () => {
  return (
   <>
    <Home/>
    <NewArrivals/>
    <Best_Selling/>
    <Cutton_Silk_Sarees/>
    <Banner/>
    <BrowseByFabric/>
    <SoftAiryComfortable/>
    <Review/>
    <ReviewSection/>
   </>
  )
}

export default index