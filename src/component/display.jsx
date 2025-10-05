
import { useDispatch } from "react-redux";
import bagitems, { bagAction } from "../store/bagitem";
import { useSelector } from "react-redux";






   


const Display = ({ item }) => {


  const dispatch = useDispatch();
const bagitem = useSelector((state)=>
state.bag)
const finder = bagitem.indexOf(item.id)  >= 0; 
console.log(bagitem)
//  console.log(item.id,finder)
  const handleclick = ()=>
  {
  



 dispatch(bagAction.addtobag(item.id))

 
// console.log(bagitem)
  }

const handleremove  = ()=>
{

  dispatch(bagAction.removefrombag(item.id))
}





  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt={item.item_name} />
      
      <div className="rating">
        {item.rating?.stars ?? "No rating"} ⭐ | {item.rating?.count ?? 0}
      </div>

      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>

      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

{ finder?  <button type="button" className="btn btn-danger" onClick={handleremove}>Remove</button>:

  <button className="btn-add-bag" onClick={handleclick}> Add to bag
    </button>



}
    </div>
  );
};

export default Display;
