import Card from '../ui/Card';
import './productList.css';

function ProductList(props) {
    return <ul className='favoritesDisplay'>
        {props.products.map(product => (
         <Card 
             key={product.id}
             id={product.id}
             name={product.name}
             category={product.category}
             ingredients={product.ingredients}
             price={product.price}
             image={product.image}
         />
        ))} 
    </ul>
}

export default ProductList;