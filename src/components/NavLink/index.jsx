import { Link } from 'react-router-dom'

export function NavLink({url, children}){
return(
    <Link to={url} >
        {children}
    </Link>
)
}
