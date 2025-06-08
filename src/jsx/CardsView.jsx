import '../css/CardView.css'

function ShopCard({ product }) {
    return (
        <div className="shop-card">
            <div className="card-header">
                <h3 className="card-title">{product.name}</h3>
                <span className="card-color">{product.color}</span>
            </div>
            <div className="card-image">
                <img src={product.img} alt={product.name}/>
            </div>
            <div className="card-footer">
                <span className="card-price">${product.price}</span>
                <button className="card-button">Add to cart</button>
            </div>
        </div>
    )
}

function CardsView({products}) {
    return (
        <div className="product-cards">
            {
                products.map(product => (
                    <ShopCard product={product}/>
                ))
            }
        </div>
    )
}

export default CardsView
