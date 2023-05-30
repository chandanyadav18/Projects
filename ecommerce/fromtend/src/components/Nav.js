import React, { useEffect } from 'react';
import { Link,useNavigate} from 'react-router-dom';
 const navigate=useEffect()
const Nav=() =>{
    const log=()=>{
    const auth=localStorage.getItem('user');
    localStorage.clear()
    navigate('/singup')
      
    }
    
return(
<div>
 { auth ?<ul className="hav-ul">
<li><Link to="/">Products</Link></li>
<li><Link to="/add">Add Product</Link></li>
<li><Link to="/update">Update Product</Link></li>
<li><Link to="/profile">Profile</Link></li>
<li><Link  onclick={logout}to="/singup">Logout</Link></li>

</ul>
:
<ul className='nav-right'>
    <li><Link to="/signup">sing up</Link></li>
<li><Link to="/login">login</Link></li>
</ul>

}

</div>
)
}

export default Nav
