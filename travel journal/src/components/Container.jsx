import icon from "../../public/assets/icons8-place-marker-48.png"
import grandCanyonUrl from "../../public/assets/grandCanyon.jpeg"
import santaBarbaraUrl from "../../public/assets/santaBarbara.jpeg"
import mexicoCityUrl from "../../public/assets/mexicoCity.jpeg"
import bigBearUrl from "../../public/assets/bigBear.jpeg"
import lasVegasUrl from "../../public/assets/lasVegas.jpeg"
import madridUrl from "../../public/assets/madrid.jpeg"
import tulumURL from "../../public/assets/tulum.jpeg"
import sedonaURL from "../../public/assets/sedona.jpeg"
import antelopeURL from "../../public/assets/antelope.jpeg"
import horseshoeURL from "../../public/assets/horseshoe.jpeg"
import bryceURL from "../../public/assets/bryce.webp"
import ZionURL from "../../public/assets/zion.jpeg"
import valleURL from "../../public/assets/valle.jpeg"

let componentImage

function Container ( {item} ) { 

    switch (item.imageUrl) {
        case "santaBarbara":
            componentImage = santaBarbaraUrl
            break
        case "mexicoCity":
            componentImage = mexicoCityUrl
            break
        case "grandCanyon":
            componentImage = grandCanyonUrl
            break
        case "bigBear":
            componentImage = bigBearUrl
            break
        case "lasVegas":
            componentImage = lasVegasUrl
            break
        case "madrid":
            componentImage = madridUrl
            break
        case "tulum":
            componentImage = tulumURL
            break
        case "sedona":
            componentImage = sedonaURL
            break
        case "antelopeCanyon":
            componentImage = antelopeURL
            break
        case "horseshoe":
            componentImage = horseshoeURL
            break
        case "bryce":
            componentImage = bryceURL
            break
        case "zion":
            componentImage = ZionURL
            break
        case "valle":
            componentImage = valleURL
        default:
            componentImage = null
    }

    return (
        <div className="container">
            <div id="main-section-el">            

                <div className="wrap--img">
                    <img className="img" src={componentImage} alt={`${item.title}`}></img>
                </div>

                <div className="content">
                    <div className="dflex geo">  
                        <div className="wrap--location-icon">
                            <img className="location-icon" src={icon} alt="location icon"></img>
                        </div>  
                        <p className="location-name">{item.location}</p>
                        <a className="google-maps" target="_blank" href={item.googleMapsUrl}>View on Google Maps</a>
                    </div>

                    <h2 className="title">{item.title}</h2>
                    <p className="dates"> {`${item.startDate} - ${item.endDate}`} </p>
                    <p className="description">{item.description}</p>
                </div>
            </div>
            <hr className="hr"></hr>
        </div>
    )
}

export default Container