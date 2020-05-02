import React from 'react';

const component = (props) => {

    if (props.data > 5 ) {
        return (         
            <p>The Length is good.</p>           
        );
        }else{
            return (         
                <p>The Length is Short.</p>  
            );  

    }


   

} 

export default component
