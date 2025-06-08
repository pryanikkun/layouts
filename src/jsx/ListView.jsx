import '../css/ListView.css'

function ShopItem({ product }) {
    return (
        <div className="shop-item">
            <div className="item-image">
                <img src={product.img} alt={product.name}/>
            </div>
            <div className="item-title">{product.name}</div>
            <div className="item-color">{product.color}</div>
            <div className="item-price">${product.price}</div>
            <button className="item-button">Add to cart</button>
        </div>
    )
}

function ListView({products}) {
    return (
        <div className="list-view">
            {
                products.map(
                    product => (
                        <ShopItem product={product}/>
                    )
                )
            }
        </div>
    )
}

export default ListView
