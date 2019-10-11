import React from 'react';

import './side-bar.styles.scss';

const SideBar = () => {
    return(
        <div className='side-bar col-md-2'>
          <h2>Filter</h2>
          <form action="">
          <ul className='filter-box'>
            <li>
              <h3><label htmlFor='roomType'>Room Type</label></h3>
              <select
                    name='roomType' 
                    id='roomType'
                    className='form-control'
                    >
                    <option value='shearhouse'>Shear House</option>
                    <option value='homestay'>Home Stay</option>
                </select>
            </li>
            <li>
              <h3>Size</h3>
              <ul>
                  <li>
                      <input
                          name='pet'
                          type='checkbox'
                          value='true'/>
                          1 bedroom
                  </li>
                  <li>
                      <input
                          name='pet'
                          type='checkbox'
                          value='true'/>
                          2 bedroom
                  </li>
                  <li>
                      <input
                          name='pet'
                          type='checkbox'
                          value='true'/>
                          3 bedroom
                  </li>
              </ul>
            </li>
          </ul>
          </form>
        </div>
    );
}

export default SideBar;