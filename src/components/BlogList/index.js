// Write your JS code here
import './index.css'

const BlogList = props => {
  const {itemDetails} = props
  const {title, description, publishedDate} = itemDetails
  return (
    <div>
      <li className="list-item">
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <p className="publishedDate">{publishedDate}</p>
      </li>
      <hr />
    </div>
  )
}
export default BlogList
