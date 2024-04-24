import { useParams } from "react-router-dom";
import CarReview from "../components/CarReview";
import EmptyCar from "../components/EmptyCar";
import { CAR_LISTS } from "../utils/data";

const CarPage = () => {

    let {carId} = useParams()

    if (carId <= (CAR_LISTS.length - 1)) {

        carId = Number(carId)

        return(<CarReview carId={carId} car={CAR_LISTS[carId]}/>)
    } else {

        return(<EmptyCar />)
    }

}

export default CarPage