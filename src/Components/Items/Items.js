import './Items.css';

const Items = ( { items }) => {
  return (
    <div className="item-container">
        {items.map((foodItem) => {
            const {id, title, image, description, price} = foodItem;
            return (
                <section key={id} className="food-item">
                    <img className='image' src={image} alt={title} />
                    <div className="content">
                        <div className="header">
                            <h2>{title}</h2>
                            <h4>${price}</h4>
                        </div>
                        <p className='desc'>{description}</p>
                    </div>
                </section>
            )
        
    })}
    </div>
  )
}

export default Items