// import React from 'react'

// const RecommendationSideBar = () => {
//   return (
    
//        <div class="col-xl-3 col-lg-4 lg:d-none">
//               <div class="pr-30 lg:pr-0">
//                 <div class="sidebar -courses">
//                   <div class="sidebar__item">
//                     <div class="accordion js-accordion">
//                       <div class="accordion__item js-accordion-item-active is-active ">
//                         <div class="accordion__button items-center">
//                           <h5 class="sidebar__title">Category</h5>
//                           <div class="accordion__icon">
//                             <div class="icon icon-chevron-down"></div>
//                             <div class="icon icon-chevron-up"></div>
//                           </div>
//                         </div>
//                         <div
//                           class="accordion__content"
//                           style={{ maxHeight: "350px" }}
//                         >
//                           <div class="accordion__content__inner">
//                             <div class="sidebar-checkbox">
//                               <div class="sidebar-checkbox__item">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" checked="" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">All</div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">Art</div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">
//                                   Animation
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">
//                                   Design
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">
//                                   Photography
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">
//                                   Programming
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">
//                                   Writing
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                             </div>
//                             <div class="sidebar__more mt-15">
//                               <a
//                                 href="#"
//                                 class="text-14 fw-500 underline text-purple-1"
//                               >
//                                 Show more
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="sidebar__item">
//                     <div class="accordion js-accordion">
//                       <div class="accordion__item js-accordion-item-active is-active ">
//                         <div class="accordion__button items-center">
//                           <h5 class="sidebar__title">Ratings</h5>
//                           <div class="accordion__icon">
//                             <div class="icon icon-chevron-down"></div>
//                             <div class="icon icon-chevron-up"></div>
//                           </div>
//                         </div>
//                         <div
//                           class="accordion__content"
//                           style={{ maxHeight: "350px" }}
//                         >
//                           <div class="accordion__content__inner">
//                             <div class="sidebar-checkbox">
//                               <div class="sidebar-checkbox__item">
//                                 <div class="form-radio mr-10">
//                                   <div class="radio">
//                                     <input type="radio" checked="" />
//                                     <div class="radio__mark">
//                                       <div class="radio__icon"></div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title d-flex items-center">
//                                   <div class="d-flex x-gap-5 pr-10"></div>All
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-radio mr-10">
//                                   <div class="radio">
//                                     <input type="radio" />
//                                     <div class="radio__mark">
//                                       <div class="radio__icon"></div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title d-flex items-center">
//                                   <div class="d-flex x-gap-5 pr-10"></div>4.5
//                                   &amp; up
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-radio mr-10">
//                                   <div class="radio">
//                                     <input type="radio" />
//                                     <div class="radio__mark">
//                                       <div class="radio__icon"></div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title d-flex items-center">
//                                   <div class="d-flex x-gap-5 pr-10"></div>4.0
//                                   &amp; up
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-radio mr-10">
//                                   <div class="radio">
//                                     <input type="radio" />
//                                     <div class="radio__mark">
//                                       <div class="radio__icon"></div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title d-flex items-center">
//                                   <div class="d-flex x-gap-5 pr-10"></div>3.5
//                                   &amp; up
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-radio mr-10">
//                                   <div class="radio">
//                                     <input type="radio" />
//                                     <div class="radio__mark">
//                                       <div class="radio__icon"></div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title d-flex items-center">
//                                   <div class="d-flex x-gap-5 pr-10"></div>3.0
//                                   &amp; up
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                 
//                   <div class="sidebar__item">
//                     <div class="accordion js-accordion">
//                       <div class="accordion__item js-accordion-item-active is-active ">
//                         <div class="accordion__button items-center">
//                           <h5 class="sidebar__title">Price</h5>
//                           <div class="accordion__icon">
//                             <div class="icon icon-chevron-down"></div>
//                             <div class="icon icon-chevron-up"></div>
//                           </div>
//                         </div>
//                         <div
//                           class="accordion__content"
//                           style={{ maxHeight: "350px" }}
//                         >
//                           <div class="accordion__content__inner">
//                             <div class="sidebar-checkbox">
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-radio mr-10">
//                                   <div class="radio">
//                                     <input type="radio" checked="" />
//                                     <div class="radio__mark">
//                                       <div class="radio__icon"></div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">All</div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-radio mr-10">
//                                   <div class="radio">
//                                     <input type="radio" />
//                                     <div class="radio__mark">
//                                       <div class="radio__icon"></div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">Free</div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-radio mr-10">
//                                   <div class="radio">
//                                     <input type="radio" />
//                                     <div class="radio__mark">
//                                       <div class="radio__icon"></div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">Paid</div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="sidebar__item">
//                     <div class="accordion js-accordion">
//                       <div class="accordion__item js-accordion-item-active is-active  ">
//                         <div class="accordion__button items-center">
//                           <h5 class="sidebar__title">Level</h5>
//                           <div class="accordion__icon">
//                             <div class="icon icon-chevron-down"></div>
//                             <div class="icon icon-chevron-up"></div>
//                           </div>
//                         </div>
//                         <div
//                           class="accordion__content"
//                           style={{ maxHeight: "350px" }}
//                         >
//                           <div class="accordion__content__inner">
//                             <div class="sidebar-checkbox">
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" checked="" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">All</div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">
//                                   Beginner
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">
//                                   Intermediate
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">
//                                   Expert
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="sidebar__item">
//                     <div class="accordion js-accordion">
//                       <div class="accordion__item js-accordion-item-active is-active ">
//                         <div class="accordion__button items-center">
//                           <h5 class="sidebar__title">Languange</h5>
//                           <div class="accordion__icon">
//                             <div class="icon icon-chevron-down"></div>
//                             <div class="icon icon-chevron-up"></div>
//                           </div>
//                         </div>
//                         <div
//                           class="accordion__content"
//                           style={{ maxHeight: "350px" }}
//                         >
//                           <div class="accordion__content__inner">
//                             <div class="sidebar-checkbox">
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" checked="" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">All</div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">
//                                   English
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">
//                                   French
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">
//                                   German
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">
//                                   Italian
//                                 </div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                             </div>
//                             <div class="sidebar__more mt-15">
//                               <a
//                                 href="#"
//                                 class="text-14 fw-500 underline text-purple-1"
//                               >
//                                 Show more
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                
//                 </div>
//               </div>
//             </div>
    
//   )
// }

// export default RecommendationSideBar




// import React from 'react'

// const RecommendationSideBar = () => {
//   return (
    
//        <div class="col-xl-3 col-lg-4 lg:d-none">
//               <div class="pr-30 lg:pr-0">
//                 <div class="sidebar -courses">
//                   <div class="sidebar__item">
//                     <div class="accordion js-accordion">
//                       <div class="accordion__item js-accordion-item-active is-active ">
//                         <div class="accordion__button items-center">
//                           <h5 class="sidebar__title">Category</h5>
//                           <div class="accordion__icon">
//                             <div class="icon icon-chevron-down"></div>
//                             <div class="icon icon-chevron-up"></div>
//                           </div>
//                         </div>
//                         <div
//                           class="accordion__content"
//                           style={{ maxHeight: "350px" }}
//                         >
//                           <div class="accordion__content__inner">
//                             <div class="sidebar-checkbox">
//                               <div class="sidebar-checkbox__item">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" checked="" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">All</div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-checkbox">
//                                   <input type="checkbox" />
//                                   <div class="form-checkbox__mark">
//                                     <div class="form-checkbox__icon icon-check"></div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">Art</div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
                              
                             
                           
                             
//                             </div>
//                             <div class="sidebar__more mt-15">
//                               <a
//                                 href="#"
//                                 class="text-14 fw-500 underline text-purple-1"
//                               >
//                                 Show more
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
                 
//                   <div class="sidebar__item">
//                     <div class="accordion js-accordion">
//                       <div class="accordion__item js-accordion-item-active is-active ">
//                         <div class="accordion__button items-center">
//                           <h5 class="sidebar__title">Price</h5>
//                           <div class="accordion__icon">
//                             <div class="icon icon-chevron-down"></div>
//                             <div class="icon icon-chevron-up"></div>
//                           </div>
//                         </div>
//                         <div
//                           class="accordion__content"
//                           style={{ maxHeight: "350px" }}
//                         >
//                           <div class="accordion__content__inner">
//                             <div class="sidebar-checkbox">
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-radio mr-10">
//                                   <div class="radio">
//                                     <input type="radio" checked="" />
//                                     <div class="radio__mark">
//                                       <div class="radio__icon"></div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">All</div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-radio mr-10">
//                                   <div class="radio">
//                                     <input type="radio" />
//                                     <div class="radio__mark">
//                                       <div class="radio__icon"></div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">Free</div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                               <div class="sidebar-checkbox__item cursor">
//                                 <div class="form-radio mr-10">
//                                   <div class="radio">
//                                     <input type="radio" />
//                                     <div class="radio__mark">
//                                       <div class="radio__icon"></div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div class="sidebar-checkbox__title">Paid</div>
//                                 <div class="sidebar-checkbox__count"></div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                
                
                
//                 </div>
//               </div>
//             </div>
    
//   )
// }

// export default RecommendationSideBar


import React from 'react';

const RecommendationSideBar = ({ 
  categories, 
  selectedCategories, 
  selectedPrice, 
  onCategoryChange, 
  onPriceChange 
}) => {
  
  // Handle category change with proper logic
  // const handleCategoryChange = (categoryId) => {
  //   if (categoryId === 'all') {
  //     // If 'all' is selected, clear other selections
  //     onCategoryChange(['all']);
  //   } else {
  //     // Remove 'all' if it's selected and add the specific category
  //     let newSelection = selectedCategories.filter(cat => cat !== 'all');
      
  //     if (selectedCategories.includes(categoryId)) {
  //       // Remove the category if already selected
  //       newSelection = newSelection.filter(cat => cat !== categoryId);
  //       // If no categories left, select 'all'
  //       if (newSelection.length === 0) {
  //         newSelection = ['all'];
  //       }
  //     } else {
  //       // Add the category
  //       newSelection = [...newSelection, categoryId];
  //     }
      
  //     onCategoryChange(newSelection);
  //   }
  // };
  const handleCategoryChange = (categoryId) => {
    console.log('Clicked categoryId:', categoryId);
    console.log('Current selectedCategories:', selectedCategories);
  
    if (categoryId === 'all') {
      console.log('Selecting "all" - clearing other selections');
      onCategoryChange(['all']);
    } else {
      // Remove 'all' if selected and prepare new selection
      let newSelection = selectedCategories.filter(cat => cat !== 'all');
      console.log('Removed "all" from selection:', newSelection);
  
      if (selectedCategories.includes(categoryId)) {
        // Remove the category if already selected
        newSelection = newSelection.filter(cat => cat !== categoryId);
        console.log(`Removed category ${categoryId}, new selection:`, newSelection);
  
        // If no categories left, select 'all'
        if (newSelection.length === 0) {
          newSelection = ['all'];
          console.log('No categories left, defaulting to "all"');
        }
      } else {
        // Add the category
        newSelection = [...newSelection, categoryId];
        console.log(`Added category ${categoryId}, new selection:`, newSelection);
      }
  
      onCategoryChange(newSelection);
    }
  };
  

  return (
    <div className="col-xl-3 col-lg-4 lg:d-none">
      <div className="pr-30 lg:pr-0">
        <div className="sidebar -courses">
          {/* Category Filter */}
          <div className="sidebar__item">
            <div className="accordion js-accordion">
              <div className="accordion__item js-accordion-item-active is-active">
                <div className="accordion__button items-center">
                  <h5 className="sidebar__title">Category</h5>
                  <div className="accordion__icon">
                    <div className="icon icon-chevron-down"></div>
                    <div className="icon icon-chevron-up"></div>
                  </div>
                </div>
                <div
                  className="accordion__content"
                  style={{ maxHeight: "350px" }}
                >
                  <div className="accordion__content__inner">
                    <div className="sidebar-checkbox">
                      {/* All Categories Option */}
                      <div className="sidebar-checkbox__item cursor">
                        <div className="form-checkbox">
                          <input 
                            type="checkbox" 
                            checked={selectedCategories.includes('all')} 
                            onChange={() => handleCategoryChange('all')}
                          />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check"></div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">All</div>
                        <div className="sidebar-checkbox__count"></div>
                      </div>

                      {/* Dynamic Categories */}
                      {categories.map((category) => (
                        <div key={category._id} className="sidebar-checkbox__item cursor">
                          <div className="form-checkbox">
                            <input 
                              type="checkbox" 
                              checked={selectedCategories.includes(category._id)}
                              onChange={() => handleCategoryChange(category._id)}
                            />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check"></div>
                            </div>
                          </div>
                          <div className="sidebar-checkbox__title">{category.categoryName}</div>
                          <div className="sidebar-checkbox__count"></div>
                        </div>
                      ))}
                    </div>
                    {categories.length > 5 && (
                      <div className="sidebar__more mt-15">
                        <a
                          href="#"
                          className="text-14 fw-500 underline text-purple-1"
                        >
                          Show more
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price Filter */}
          <div className="sidebar__item">
            <div className="accordion js-accordion">
              <div className="accordion__item js-accordion-item-active is-active">
                <div className="accordion__button items-center">
                  <h5 className="sidebar__title">Price</h5>
                  <div className="accordion__icon">
                    <div className="icon icon-chevron-down"></div>
                    <div className="icon icon-chevron-up"></div>
                  </div>
                </div>
                <div
                  className="accordion__content"
                  style={{ maxHeight: "350px" }}
                >
                  <div className="accordion__content__inner">
                    <div className="sidebar-checkbox">
                      <div className="sidebar-checkbox__item cursor">
                        <div className="form-radio mr-10">
                          <div className="radio">
                            <input 
                              type="radio" 
                              name="price"
                              value="all"
                              checked={selectedPrice === 'all'}
                              onChange={(e) => onPriceChange(e.target.value)}
                            />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">All</div>
                        <div className="sidebar-checkbox__count"></div>
                      </div>
                      <div className="sidebar-checkbox__item cursor">
                        <div className="form-radio mr-10">
                          <div className="radio">
                            <input 
                              type="radio" 
                              name="price"
                              value="free"
                              checked={selectedPrice === 'free'}
                              onChange={(e) => onPriceChange(e.target.value)}
                            />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">Free</div>
                        <div className="sidebar-checkbox__count"></div>
                      </div>
                      <div className="sidebar-checkbox__item cursor">
                        <div className="form-radio mr-10">
                          <div className="radio">
                            <input 
                              type="radio" 
                              name="price"
                              value="paid"
                              checked={selectedPrice === 'paid'}
                              onChange={(e) => onPriceChange(e.target.value)}
                            />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                        </div>
                        <div className="sidebar-checkbox__title">Paid</div>
                        <div className="sidebar-checkbox__count"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationSideBar;

