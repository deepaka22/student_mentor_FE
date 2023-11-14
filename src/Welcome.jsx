const Welcome = ()=>{

    const stackStyling = {
        color : "red",
    }

    return(


    <div className="mt-4 text-center">
       <h1 className="mb-3"> Thank you for Using Students-Mentor Application </h1> 
       <h3>stacks used </h3>
<h3 style={stackStyling} className="mt-4 mb-2">  
    <i><marquee width="50%" direction="left" height="30%">
     Mongodb ,Express.js, React, Bootstap
    </marquee>
    </i></h3>

    </div>
)
}

export default Welcome;