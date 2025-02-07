export default function Entry(props){
    return(
        <>
            <article className="trip-entry">
                <div className="main-image-container">
                    <img 
                        className="main-image"
                        src={props.img.src} 
                        alt={props.img.alt}
                    />
                </div>
                <div className="info-container">
                    <img src="./src/images/location.png" className="location" alt="location map"  />
                    <span className="trip-gujarat">Gujarat India.</span>
                    <h2 className="title-entry">{props.title}</h2>
                    <p className="entry-text">{props.description}</p>
                </div>
            

            </article>
            <hr/>
        </>
    )
}