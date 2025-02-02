import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {title, category, image} = productData

  return (
    <li className="product-item">
      <img src={image} alt="product" className="thumbnail" />
      <h1 className="title">{title}</h1>
      <p className="brand">by {category}</p>
    </li>
  )
}
export default ProductCard
