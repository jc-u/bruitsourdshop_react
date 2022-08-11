import ShowProducts from './ShowProducts';

const Products = () => {

  return (
    <div className='products'>
        <div className="container">
            <div className="row rowTitle">
                <div className="col">
                    <h1 className='title'>Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row productsRow">
                <div className="col">
                    {<ShowProducts/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
