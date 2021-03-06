import React from 'react'; 

const Store = (props) => {
    return (
        <div className="ui card">
            <a href={`/store/${props.store.id}`}>
            <div className="content">
                <div className="header">{props.store.name}</div>
                <div className="meta">{props.store.location}</div>
                <div className="description">
                    Rating: {props.store.avg_rating}
                    <br></br>
                    Offers: {props.store.ice_cream_count} Flavors
                </div>
            </div>
            </a>
        </div>
    )
}

export default Store