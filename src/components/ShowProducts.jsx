import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';



const ShowProducts = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

      const getProducts = async () => {

          const response = await fetch("https://api.discogs.com/users/Bruit-Sourd/inventory?key=AjwJBCceNoPPgVzCgzAq&secret=muurfnkYzpAePcqLypjxfUzveMsKLuYJ", {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            }
          });
              setData(await response.json());
      }

      getProducts();

  }, []);
console.log(data)
  data.listings.map((product) => {
    return (
      <>
        <div key={product.release.id} className='album'>
          <div className="thumbnail"><img src={product.release.thumbnail} alt="cover"/></div>
          <div className="description">{product.release.description}</div>
          <div className='original_price'>{Math.round(((product.original_price.value)-(product.original_price.value * 0.08)*1.2))}€</div>
          <div className="card-footer">
              <Link to={`/products/${product.release.id}`} className='buyNow'>Buy Now</Link>
          </div>
        </div>
      </>
    )
  })
}

export default ShowProducts