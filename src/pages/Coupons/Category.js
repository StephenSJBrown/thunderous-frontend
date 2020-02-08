import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Header from '../../components/Header'
import LoadingIndicator from '../../components/LoadingIndicator'
import Coupon from '../../components/Coupon'

const Category = ({ category }) => {

    const [stores, setStores] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // Api to pull all the coupons and respective stores for their category, utilising the {category} passed in, and setStores to result 
    // {'store-name':'mcdonalds',
    // 'store-logo':'someurl',
    // 'coupons':[{'category':'',"coupon-name":'McRabbit Meal', 'coupon-deal':25, 'coupon-points':250},
    // {'category':'',"coupon-name":'McRabbit Meal', 'coupon-deal':25, 'coupon-points':250}]

    return (
        <>
            <Header/>
            {isLoading
                ? <LoadingIndicator/>
                : <>
                    {stores.map(store => (
                        <Store name={store.name}/>
                        store.coupons.map(coupon => (
                            <Coupon name={coupon.name} deal={coupon.deal} points={coupon.points} />
                        ))
                    ))}
                </>
            }
        </>
    )
}

export default Category