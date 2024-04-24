import PropTypes from "prop-types"

const ListItem = ({title, description}) => {

    return(
        
        <div className="flex flex-col gap-1">

            <h1 className="car-review-subtitle-text">
                {title}
            </h1>

            <p className="car-review-subject-text">
                {description.text}
            </p>

            <ul className="list-disc pl-5">

                {description.items.map((item, index) => 

                    <li className="my-1 car-review-subject-text" key={index}>
                        {item}
                    </li>
                )}

            </ul>

        </div>
    )

}

ListItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.object
}

ListItem.defaultProps = {
    title: "Unknown",
    description: {text: "Unknown",
                  items: ["Unknown", "Unknown", "Unknown"]}
}

export default ListItem