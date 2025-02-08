export default function Entry(props){
    return(
        <>
            <article className="trip-entry">
                <div className="main-image-container">
                    <img 
                        className="main-image"
                        alt={props.entry_obj.img.alt}
                        src={props.entry_obj.img.src} 
                        />
                </div>
                <div className="info-container">
                    <img src="./src/images/location.png" className="location" alt="location map"  />
                    <span className="trip-gujarat">Gujarat India.</span>
                    <h2 className="title-entry">{props.entry_obj.title}</h2>
                    <p className="entry-text">{props.entry_obj.description}</p>
                </div>
            

            </article>
            <hr/>
        </>
    )
}