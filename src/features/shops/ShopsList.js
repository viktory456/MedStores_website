import React, {useEffect, useState} from 'react'
import { useSelector } from "react-redux";
import { useGetShopsQuery} from '../api/shopsSlice'
import Shop from './Shop';



const ShopsList = () => {

    const { data:shops, isLoading:isLoadingShops, isSuccess:isSuccessShops, isError, error } = useGetShopsQuery('getShops')

    let contentShops;
    if (isLoadingShops) {
      contentShops = <p>"Loading..."</p>;
    } else if (isSuccessShops) {
      contentShops = shops.ids.map(shopId => <Shop key={shopId} shopId={shopId}/>)
    } 

 
        
    return(

        <div className='shopsMenu'>
          <h2 className='shopsTitle'>Shops:</h2>
          {contentShops}
        </div>


    );
}

export default ShopsList






