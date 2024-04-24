import ListItem from "./ListItem"
import TitleAndDescriptionAndImageItem from "./TitleAndDescriptionItem"

import backArrowIcon from "../../assets/ic_previous_arrow.svg"
import frontArrowdIcon from "../../assets/ic_next_arrow.svg"

import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { CAR_LISTS } from "../utils/data"

const CarReview = ({carId, car}) => {

    function nextPath () {
    
        if (carId < (CAR_LISTS.length - 1)) {

            return `/car/${carId + 1}`
        } else {

            return "/car/0"
        }
    }

    function previousPath () {

        if (carId === 0) {

            return `/car/${CAR_LISTS.length - 1}`
        } else if (carId <= (CAR_LISTS.length - 1)) {

            return `/car/${carId - 1}`
        }
    }

    return(

        <section className="flex flex-col gap-5 px-1.5 container-margin">

            <div className="flex flex-col items-start gap-px">

                <img className="car-review-large-image"
                    src={car.image}
                    alt={car.title} />

                <h1 className="car-review-title-text mt-2">
                    {car.title}
                </h1>

                <h1 className="car-review-subtitle-text">
                    {car.price}
                </h1>

            </div>

            <div className="flex flex-col gap-2">

                {car.details.map((item, index) =>
                
                    (typeof item.description) === typeof "" ?
                    <TitleAndDescriptionAndImageItem key={index} {...item} /> :
                    <ListItem key={index} {...item} />
                )}

            </div>

            <div className="mt-5 flex px-2 py-1 justify-center items-center gap-2">

                <Link className="car-review-button"
                    reloadDocument
                    to={previousPath()}>

                    <img className="small-icon"
                        src={backArrowIcon}
                        alt="back arrow" />
                    
                    Prev
                </Link>

                <Link className="car-review-button"
                    reloadDocument
                    to={nextPath()}>

                    Next

                    <img className="small-icon"
                        src={frontArrowdIcon}
                        alt="front arrow" />
                </Link>

            </div>

        </section>
    )
}

CarReview.propTypes = {
    car: PropTypes.object,
    carId: PropTypes.number
}

CarReview.defaultProps = {
    car: {},
    carId: 0
}

export default CarReview