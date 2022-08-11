import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addCart } from '../redux/action';

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {

        const getProduct = async () => {
            setLoading(true);

            const response = await fetch (`https://api.discogs.com/releases/${id}`);
            setProduct(await response.json());
            setLoading(false);
            console.log(response)
        }

        getProduct();

    }, [id]);

    const Loading = () => {
        return (
            <>
                <p className='loading'>Loading...</p>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
            {console.log(product)}
                <div className="col">
                {/* {product.images.foreach((image) => {
                    <div className='image'><img src={image} alt={product.title} /></div>})} */}
                </div>
                <div className="col">
                    <h2>{product.title}</h2>
                    <span>{product.styles}</span>
                    {/* <p>{product.tracklist}</p> */}
                    <p>{product.year}</p>
                    <button className='add' onClick={() => addProduct(product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                </div>
            </>
        )
    }

  return (
    <div className='container product'>
        <div className="row">
            {loading ? <Loading/> : <ShowProduct/>}
        </div>
    </div>
  )
}

export default Product
