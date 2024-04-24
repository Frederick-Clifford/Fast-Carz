import car from "../../assets/cars/background_image/high_way_one.png"

const Background = () => {

    return(

        <>

            <img className="-z-50 fixed inset-0 w-full h-full object-center object-cover"
                src={car}
                alt="car" />

        </>

    )

}

export default Background