import fastCarzIcon from "../../assets/ic_fast_carz.svg"
import { NAV_BAR_TITLE_TEXT } from "../utils/data"

const NavBar = () => {

    return (
        
        <nav className="cursor-text z-50 h-[50px] flex justify-start bg-primary-color fixed items-center gap-2 md:gap-3 p-2 inset-x-0 top-0 nav-bar">

            <img className="w-[35px] h-[35px] object-contain"
                src={fastCarzIcon}
                alt="fast carz" />

            <h1 className="nav-bar-text">
                {NAV_BAR_TITLE_TEXT}
            </h1>

        </nav>
    )

}

export default NavBar