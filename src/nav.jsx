import { NavLink } from "react-router-dom"
import logo from './assets/a.svg'
import l from './assets/z.svg'

function Nav() {

    return (
        <>
 <br /><hr /> 
            <nav>
                <div className="flex gap200">
                    <h1>Sahil</h1>
                    <div>
                        <input type="search" name="" id="" placeholder="Enter A Product Name" className="search" />
                    </div>

                    <div>
                        <img src={logo} alt="" srcset=""  className="big"/>
                    </div>
                    <div>
                        <img src={l} alt="" srcset=""  className="big"/>
                    </div>
                </div>
            </nav>
            <br /><hr />






            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">  HOME   </NavLink>
                        </li>

                        <li>
                            <NavLink to="/men"> MEN'S </NavLink>
                        </li>

                        <li>
                            <NavLink to="/women"> WOMEN'S    </NavLink>
                        </li>

                        <li>
                            <NavLink to="/perfume">  PERFUME   </NavLink>
                        </li>

                        <li>
                            <NavLink to="/offers">  OFFERS   </NavLink>
                        </li>

                        <li>
                            <NavLink to="/jewellery">  JEWELLERY   </NavLink>
                        </li>

                        <li>
                            <NavLink to="/blog">  BLOG   </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Nav