import Link from "../../Link/Link";
import { IoIosMenu } from "react-icons/io";

 


const NavBar = () => {
    const routes = [
        { id: 1, name: "Home", path: "/path/to/file1" },
        { id: 2, name: "About", path: "/path/to/file2" },
        { id: 3, name: "Service", path: "/path/to/file3" },
        { id: 4, name: "contact", path: "/path/to/file4" },
        { id: 5, name: "Course", path: "/path/to/file5" }
    ]


    return (
        <nav>
            <IoIosMenu className="text-xl"></IoIosMenu>
          
            <ul className="md:flex">
                {
                    routes.map(route =><Link key={route.id} route={route
                    }></Link> )
                }
            </ul>


        </nav>
    );
};

export default NavBar;