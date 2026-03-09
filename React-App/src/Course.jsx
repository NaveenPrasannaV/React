import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


const course1 = "HTML";


function Course(props){

    const [purchased, setPurchased] = useState(false);

    function BuyCourse(discount){
        console.log(props.name," Course purchased for $", props.price," with a discount of",discount);
       setPurchased(true);

    }

    return (
        props.name && <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <span>{props.price}</span>
            <span> $</span>
            <p>Ratings: {props.rating}</p>
            <button onClick={() => BuyCourse(20)}>Buy Now</button>
            <button onClick={() => props.delete(props.id)}>Delete</button>
            <p>{purchased? "Already purchased" : "Get it now"}</p>
        </div>
    );


}

Course.PropTypes = {
    name : PropTypes.string,
    rating : PropTypes.number,
    show : PropTypes.bool
}

export default Course;