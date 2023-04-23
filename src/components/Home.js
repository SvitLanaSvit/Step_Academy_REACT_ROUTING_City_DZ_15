import {Link, Outlet} from 'react-router-dom'
import '../App.js'

export default function Home(){
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/city-info">City Info</Link>
                        </li>
                        <li>
                            <Link to="/famous-attraction">Famous Attraction</Link>
                        </li>
                        <li>
                            <Link to="/other-attractions">Other Attractions</Link>
                        </li>
                        <li>
                            <Link to="city-photo">City Photo</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}
