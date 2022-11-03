import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsTwitch, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const iconsStyles = "w-6 h-6 fill-gray-500 hover:fill-gray-700 hover:scale-110 transition-transform cursor-pointer";
const itemsStyles = "text-white cursor-pointer "

export const MobileNavbar = () => {
    return (
        <div className="bg-red-300 relative">
            <div className="absolute top-0 right-0 bg-black w-2/4 h-screen p-4">

                <div>
                    <form >
                        <div className="flex gap-1 justify-start flex-1 border-solid rounded-md border-white border w-full h-9 items-center p-1">
                            <input
                                type="text"
                                placeholder="search for..."
                                className="border-none outline-none bg-transparent w-full text-xs focus:text-sm transition-all"
                            />
                            <BsSearch className="fill-white text-white" />
                        </div>
                    </form>
                </div>

                <ul>
                    <li>
                        <Link to={"/"} className={itemsStyles}>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to={"/"} className={itemsStyles}>
                            About
                        </Link>
                    </li>

                    <li>
                        <Link to={"/"} className={itemsStyles}>
                            Last Post
                        </Link>
                    </li>

                    <li>
                        <Link to={"/"} className={itemsStyles}>
                            News
                        </Link>
                    </li>

                    <li>
                        <Link to={"/"} className={itemsStyles}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

