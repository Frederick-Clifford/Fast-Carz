import Background from "../components/Background"
import CarItemCard from "../components/CarItemCard"
import { CARS, HOME_SUBJECT_TEXT_FIRST_PART, HOME_SUBJECT_TEXT_SECOND_PART, HOME_TITLE_TEXT_FIRST_PART, HOME_TITLE_TEXT_SECOND_PART } from "../utils/data"

const HomePage = () => {
    
    return(

        <section className="px-3 container-margin">

            <Background />

            <div className="flex flex-col items-center ss:items-start gap-5">

                <div className="flex flex-col gap-1">

                    <h1 className="title-text text-center ss:text-start bg-text-text-shadow">
                        
                        <span>
                            {HOME_TITLE_TEXT_FIRST_PART}
                        </span>

                        <br />

                        <span>
                            {HOME_TITLE_TEXT_SECOND_PART}
                        </span>
                    </h1>

                    <p className="subject-text text-center ss:text-start bg-text-text-shadow">
                        
                        <span>
                            {HOME_SUBJECT_TEXT_FIRST_PART}
                        </span>

                        <br className="hidden xs:block" />

                        <span>
                            {HOME_SUBJECT_TEXT_SECOND_PART}
                        </span>
                    </p>

                </div>

                <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-2 px-2 py-4 bg-opacity-35 bg-white rounded-md">

                    {CARS.map((item) =>
                    
                    <CarItemCard key={item.id} {...item} />
                    )}

                </div>

            </div>

        </section>
    )

}

export default HomePage