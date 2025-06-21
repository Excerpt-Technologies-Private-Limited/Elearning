// import React from 'react'

// const MobileRecommendationSideBar = ({isOpen}) => {
//   return (
//     <div className={`accordion__content hidden lg:block transition-all duration-500 overflow-hidden`}
//     style={isOpen ? { maxHeight: "1800px" } : { maxHeight: "0px" }}>
//                 <div class="sidebar -courses px-30 py-30 rounded-8 bg-light-3 mb-50">
//                   <div class="row x-gap-60 y-gap-40">
//                     <div class="col-xl-3 col-lg-4 col-sm-6">
//                       <div class="sidebar__item">
//                         <h5 class="sidebar__title">Category</h5>
//                         <div class="sidebar-checkbox">
//                           <div class="sidebar-checkbox__item">
//                             <div class="form-checkbox">
//                               <input type="checkbox" checked="" />
//                               <div class="form-checkbox__mark">
//                                 <div class="form-checkbox__icon icon-check"></div>
//                               </div>
//                             </div>
//                             <div class="sidebar-checkbox__title">All</div>
//                             <div class="sidebar-checkbox__count"></div>
//                           </div>
//                           <div class="sidebar-checkbox__item cursor">
//                             <div class="form-checkbox">
//                               <input type="checkbox" />
//                               <div class="form-checkbox__mark">
//                                 <div class="form-checkbox__icon icon-check"></div>
//                               </div>
//                             </div>
//                             <div class="sidebar-checkbox__title">Art</div>
//                             <div class="sidebar-checkbox__count"></div>
//                           </div>
                         
//                         </div>
//                         <div class="sidebar__more mt-15">
//                           <a
//                             href="#"
//                             class="text-14 fw-500 underline text-purple-1"
//                           >
//                             Show more
//                           </a>
//                         </div>
//                       </div>
//                     </div>
                 
                   
//                     <div class="col-xl-3 col-lg-4 col-sm-6">
//                       <div class="sidebar__item">
//                         <h5 class="sidebar__title">Price</h5>
//                         <div class="sidebar-checkbox">
//                           <div class="sidebar-checkbox__item cursor">
//                             <div class="form-radio mr-10">
//                               <div class="radio">
//                                 <input type="radio" checked="" />
//                                 <div class="radio__mark">
//                                   <div class="radio__icon"></div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="sidebar-checkbox__title">All</div>
//                             <div class="sidebar-checkbox__count"></div>
//                           </div>
//                           <div class="sidebar-checkbox__item cursor">
//                             <div class="form-radio mr-10">
//                               <div class="radio">
//                                 <input type="radio" />
//                                 <div class="radio__mark">
//                                   <div class="radio__icon"></div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="sidebar-checkbox__title">Free</div>
//                             <div class="sidebar-checkbox__count"></div>
//                           </div>
//                           <div class="sidebar-checkbox__item cursor">
//                             <div class="form-radio mr-10">
//                               <div class="radio">
//                                 <input type="radio" />
//                                 <div class="radio__mark">
//                                   <div class="radio__icon"></div>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="sidebar-checkbox__title">Paid</div>
//                             <div class="sidebar-checkbox__count"></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                   
                  
                   
//                   </div>
//                 </div>
//               </div>
//   )
// }

// export default MobileRecommendationSideBar


//code snippet
import React from 'react';

const MobileRecommendationSideBar = ({
  isOpen,
  categories,
  selectedCategories,
  selectedPrice,
  onCategoryChange,
  onPriceChange
}) => {
  return (
    <div 
      className={`accordion__content hidden lg:block transition-all duration-500 overflow-hidden`}
      style={isOpen ? { maxHeight: "1800px" } : { maxHeight: "0px" }}
    >
      <div className="sidebar -courses px-30 py-30 rounded-8 bg-light-3 mb-50">
        <div className="row x-gap-60 y-gap-40">
          {/* Category Filter */}
          <div className="col-xl-6 col-lg-6 col-sm-6">
            <div className="sidebar__item">
              <h5 className="sidebar__title">Category</h5>
              <div className="sidebar-checkbox">
                {/* All Categories Option */}
                <div className="sidebar-checkbox__item">
                  <div className="form-checkbox">
                    <input 
                      type="checkbox" 
                      checked={selectedCategories.includes('all')} 
                      onChange={() => onCategoryChange('all')}
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
                        onChange={() => onCategoryChange(category._id)}
                      />
                      <div className="form-checkbox__mark">
                        <div className="form-checkbox__icon icon-check"></div>
                      </div>
                    </div>
                    <div className="sidebar-checkbox__title">{category.
categoryName}</div>
                    <div className="sidebar-checkbox__count"></div>
                  </div>
                ))}
              </div>
              {categories.length > 3 && (
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

          {/* Price Filter */}
          <div className="col-xl-6 col-lg-6 col-sm-6">
            <div className="sidebar__item">
              <h5 className="sidebar__title">Price</h5>
              <div className="sidebar-checkbox">
                <div className="sidebar-checkbox__item cursor">
                  <div className="form-radio mr-10">
                    <div className="radio">
                      <input 
                        type="radio" 
                        name="mobile-price"
                        checked={selectedPrice === 'all'}
                        onChange={() => onPriceChange('all')}
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
                        name="mobile-price"
                        checked={selectedPrice === 'free'}
                        onChange={() => onPriceChange('free')}
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
                        name="mobile-price"
                        checked={selectedPrice === 'paid'}
                        onChange={() => onPriceChange('paid')}
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
  );
};

export default MobileRecommendationSideBar;
