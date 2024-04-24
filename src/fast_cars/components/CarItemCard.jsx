import { Link } from "react-router-dom"
import { HOME_CARD_BUTTON_TEXT } from "../utils/data"

import PropTypes from "prop-types"

const CarItemCard = ({id, name, image}) => {

    return(
        
        <div className="relative w-[270px] h-[200px] rounded-xl">

            <img className="w-full h-full object-cover rounded-xl"
                src={image}
                alt={name} />

            <div className="bg-white absolute bottom-2 left-1 right-1 rounded-md p-1 flex items-center justify-start gap-0.5">

                <h1 className="flex-1 cursor-default card-text">
                    {name}
                </h1>

                <Link className="rounded-button"
                    reloadDocument
                    to={`/car/${id}`}>
                    {HOME_CARD_BUTTON_TEXT}
                </Link>
            </div>

        </div>
    )

}

CarItemCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.any
}

CarItemCard.defaultProps = {
    id: 0,
    name: "Unknown",
    image: "Unknown"
}

export default CarItemCard