import { useEffect, useState } from "react";
import Course from "./Course";
import loading from "../../data/assets/loading.gif";
import useFetch from "./useFetch";

function CourseList(){

    const [courseList, dummy, error] = useFetch('http://localhost:3000/courses');

    function handleDelete(id){
        console.log(id);
        setCourseList(courseList.filter((course) => (course.id!=id)));
    }

   //courseList.sort((x,y) => (x.price-y.price));

    if(!courseList){
        return(
            <>
                {!error && <img src={loading} alt="Loading..." style={{width: "200px", height: "200px"}}/>}
                {error && <p>{error}</p>}
            </>
        )
   }
 

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

//npx json-server --watch data/dummyData.json --port 3000 --static .data