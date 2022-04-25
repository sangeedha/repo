import Home from '../Rcomponents/home'
import {connect} from 'react-redux'
import { addToCart } from '../Rservices/action1/action1'
const mapStateToProps=state=>({
    data:state.cardItems

})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:(data)=>dispatch(addToCart(data))
} )
//console.warn("from homeconatiner", data)
export default connect(mapStateToProps, mapDispatchToProps)(Home)