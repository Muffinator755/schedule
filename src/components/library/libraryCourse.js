import React, { Component } from 'react';

import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
       return (
             <div className='library-course'>
                <label className='library-course__title'>Problem Solving</label>
                { Icon('fas fa-check', 'library-course__icon') }
                {/* arrow component */}
                {/* action button component*/}
                <div className='library-course__description'>
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis tortor sed mi malesuada mattis. Duis rutrum sed dolor eu consequat. Aliquam egestas convallis eros vel tempor. Donec viverra congue ultrices. Maecenas sollicitudin leo lectus, ac posuere tortor fringilla et. Etiam fermentum quam at odio sodales cursus.</p>
                </div>
             </div>
         );
     }
}

export default LibraryCourse;