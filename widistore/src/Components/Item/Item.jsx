import "./Item.css"

export default function Item({ item }) {
   

    return (
        <div className="itemContainer">
            <div className="itemImgContainer"><img className="itemImg" src={item.img} alt={item.nombre} />
            </div>
            <div className="itemDetails">
                <h3 className="itemMarca">{item.marca}</h3>
                <h3 className="itemModelo">{item.nombre}</h3>
                <h3 className="itemMl">{item.ml}</h3>
                <h3 className="itemPrecio">${item.precio}</h3>
            </div>
            <div className='addToCartButton' 
           >Comprar</div>
        </div>
    )
}

