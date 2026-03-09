import { useEffect, useState } from "react";
import CSS from "./assets/css.png";
import HTML from './assets/html.png'
import JS from './assets/js.png'
import Course from "./Course";
import REACT from "./assets/react.png";
import { func } from "prop-types";

function CourseList(){

    const [dummy, setDummy] = useState(true);

    const [courseList, setCourseList] = useState([
        {
            id : 1,
            name : "HTML + CSS + JS",
            price : 499,
            image : HTML,
            rating : 4.5
        },
        {
            id : 2,
            name : "HTML + CSS",
            price : 399,
            image : CSS,
            rating : 4.5
        },
        {
            id : 3,
            name : "JS",
            price : 199,
            image : JS,
            rating : 4.8
        },
        {
            id : 4,
            name : "React",
            price : 699,
            image :REACT,
            rating: 4.5
        }
    ]);

    function handleDelete(id){
        console.log(id);
        setCourseList(courseList.filter((course) => (course.id!=id)));
    }

    useEffect(() => {
        console.log("use effect called in CourseList");
        console.log(dummy);
    } , [dummy, courseList] );

   courseList.sort((x,y) => (x.price-y.price));

    const courseMap = courseList.filter((course) => (course.price>0)).map( (course) => (
                                                                    <Course 
                                                                        key={course.id} 
                                                                        name={course.name} 
                                                                        price={course.price} 
                                                                        image={course.image} 
                                                                        rating={course.rating} 
                                                                        delete={handleDelete}
                                                                        id = {course.id}
                                                                    />));

    return(
        <>
            <>{courseMap}</>
            <button onClick={() => { setDummy(false); } }>Dummy Button</button>
        </>
    );

}

export default CourseList