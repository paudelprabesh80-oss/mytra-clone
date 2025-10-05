import Bagitem from "../src/component/bagitem"
import Bagsummary from "../src/component/bagsummary"
import { useSelector } from "react-redux"

const Bag = ()=>
{

const siteitems = useSelector((state)=>
state.items

)

const bagitems = useSelector((state)=>
  state.bag
)

const bagfounditem = siteitems.filter((siteitem)=>
  bagitems.includes(siteitem.id)

)





return (
  <>




    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {bagfounditem.map((item)=>
          (
<Bagitem key={item.id}  item={item}/>

          ))}
          
        </div>
          
       <Bagsummary/>

      </div>
    </main>

    </>
)

}
export default Bag