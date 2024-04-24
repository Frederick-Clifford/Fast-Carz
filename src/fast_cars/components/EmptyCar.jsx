import searchErrorIcon from "../../assets/ic_search_error.svg"

import { EMPTY_CAR_BUTTON_TEXT, EMPTY_CAR_SUBJECT_TEXT, EMPTY_CAR_TITLE_TEXT } from "../utils/data"

const EmptyCar = () => {

    return(

        <section className="container-margin">

            <div className="flex flex-col justify-center items-center gap-1 px-3 ss:px-0">

                <img className="search-error-image"
                    src={searchErrorIcon}
                    alt="search error" />

                <h1 className="title-text text-black mt-2">
                    {EMPTY_CAR_TITLE_TEXT}
                </h1>

                <p className="subject-text text-black text-center ss:max-w-[600px]">
                    {EMPTY_CAR_SUBJECT_TEXT}
                </p>

                <button className="rounded-button mt-2"
                    onClick={() =>
                         history.go(-1)
                    }>
                    {EMPTY_CAR_BUTTON_TEXT}
                </button>

            </div>

        </section>
    )
}

export default EmptyCar