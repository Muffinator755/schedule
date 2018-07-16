import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
       return (
             <div className='library-course'>
                <label className='library-course_title'>Problem Solving</label>
                {/* icon component */}
                {/* arrow component */}
                {/* action button component*/}
                <div className='library-course_description'>
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis tortor sed mi malesuada mattis. Duis rutrum sed dolor eu consequat. Aliquam egestas convallis eros vel tempor. Donec viverra congue ultrices. Maecenas sollicitudin leo lectus, ac posuere tortor fringilla et. Etiam fermentum quam at odio sodales cursus.</p>
                </div>
             </div>
         );
     }
}

export default LibraryCourse;