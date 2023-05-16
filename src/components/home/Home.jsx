import React, { useEffect } from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductHomepage } from '../reduxx/store/homepageSlice'
import { addhomeitem } from '../reduxx/store/showprodutdetailsSlice'
import { cartitems } from '../reduxx/store/showprodutdetailsSlice'

const Home = () => {

  const dispatch = useDispatch()
  const { homepageitem } = useSelector((state) => state.homepagedata)


  useEffect(() => {
    dispatch(getProductHomepage())
  }, [])

  const homedetalisitem = (ele) => {
    dispatch(addhomeitem(ele));
  }
  const addtocartitem = (ele) => {
    dispatch(cartitems(ele));
  }

  return (
    <>
      <div className='homedtails'>
        <h2>Home page</h2>
       
      </div>
      <div className='homepagediv'>

        {

          homepageitem && homepageitem.map((ele, i) => {
            return (
              <>
                <div className='cardcontent' key={ i }>
                  <img src={ ele.image } alt="" />

                  <h2> { ele.category }</h2>
                  <p>price : $ { ele.price } </p>

                  <div className='buttondiv'>
                    <button onClick={ () => homedetalisitem(ele) }><NavLink to={ `/${i}` }> details </NavLink></button>

                    <button onClick={ () => addtocartitem(ele) }>add to cart</button>
                  </div>

                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Home
