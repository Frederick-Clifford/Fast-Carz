import { NO_IMAGE } from "../utils/data"

import PropTypes from "prop-types"

const TitleAndDescriptionAndImageItem = ({title, description, image}) => {

    return(
        
        <div className="flex flex-col gap-1">

            <h1 className="car-review-subtitle-text">
                {title}
            </h1>

            <p className="car-review-subject-text">
                {description}
            </p>

            {(image === NO_IMAGE) ? 
                <img className="hidden" src="" alt="" />
                :
                <img className="car-review-medium-image"
                    src={image}
                    alt="car" />
            }

        </div>

    )

}

TitleAndDescriptionAndImageItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.any
}

TitleAndDescriptionAndImageItem.defaultProps = {
    title: "Unknown",
    description: "Unknown",
    image: "Unknown"
}

export default TitleAndDescriptionAndImageItem