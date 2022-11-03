import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsTwitch, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const iconsStyles = "w-6 h-6 fill-gray-500 hover:fill-gray-700 hover:scale-110 transition-transform cursor-pointer";
const itemsStyles = "text-gray-600 hover:text-gray-800 cursor-pointer "

export const Navbar = () => {
  return (
    <div className="flex w-screen h-9 justify-between p-8 mb-8 ">

      <div>
        <ul className="flex gap-8 justify-start flex-1">
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

      <div>
        <ul className="hidden lg:flex gap-5 justify-start flex-1">
          <li>
            <a href="#">
              <BsFacebook className={iconsStyles} />
            </a>
          </li>
          <li>
            <a href="#">
              <BsInstagram className={iconsStyles} />
            </a>
          </li>
          <li>
            <a href="#">
              <BsTwitter className={iconsStyles} />
            </a>
          </li>
          <li>
            <a href="#">
              <BsYoutube className={iconsStyles} />
            </a>
          </li>
          <li>
            <a href="#">
              <BsTwitch className={iconsStyles} />
            </a>
          </li>
        </ul>
      </div>

      <div>
        <form >
          <div className="flex gap-1 justify-start flex-1 border-solid rounded-md border-gray-500 border w-full h-9 items-center p-1">
            <input
              type="text"
              placeholder="search for..."
              className="border-none outline-none bg-none w-52 text-xs focus:text-sm transition-all"
            />
            <BsSearch />
          </div>
        </form>
      </div>

    </div>
  )
}

