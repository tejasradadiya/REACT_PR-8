import React, { useEffect, useState, useRef } from 'react';
   const MovieSearch = () => {
      const [search, setSearch] = useState('');
      const [recoed, setRecord] = useState(JSON.parse(localStorage.getItem('Data')) || []);
      const resultsRef = useRef();
  

      let data = [
         {
             id: 4,
             name: "365 Days",
             image: "assets/image/movie/365 Days.jpg",
             link: "https://vegamovies.im/search/365+days",
             rank: "⭐⭐⭐⭐⭐"
         }, {
             id: 5,
             name: "Fast X",
             image: "assets/image/movie/fast x.jpg",
             link: "https://vegamovies.im/search/Fast+X",
             rank: "⭐⭐⭐⭐"
         }, {
             id: 6,
             name: "Elysium",
             image: "assets/image/movie/elysium.jpg",
             link: "https://vegamovies.im/search/elysium",
             rank: "⭐⭐⭐⭐⭐"
         },
         {
            id: 28,
            name: "Vikram-vedha",
            image: "assets/image/movie/vikram_vedha.jpg",
            link: "https://www.jiocinema.com/movies/vikram-vedha/3744709",
            rank: "⭐"
        },
        {
            id: 29,
            name: "Tubelight",
            image: "assets/image/movie/tubelight.webp",
            link: "https://www.hotstar.com/in/movies/tubelight/1000194295",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 30,
            name: "Judwaa-2",
            image: "assets/image/movie/judwaa2.jpg",
            link: "https://www.hotstar.com/in/movies/judwaa-2/1770016732",
            rank: "⭐⭐⭐⭐⭐"
        }, 
         {
            id: 1,
            name: "Ms Dhoni",
            image: "assets/image/movie/Ms dhoni.webp",
            link: "https://www.hotstar.com/in/movies/ms-dhoni-the-untold-story/1770003314",
            rank: "⭐⭐⭐⭐⭐"
        },
        {
            id: 2,
            name: "Luka chuppi",
            image: "assets/image/movie/luka chuppi.avif",
            link: "https://www.jiocinema.com/movies/luka-chuppi/3494266",
            rank: "⭐⭐⭐⭐"
        },
        {
            id: 3,
            name: "Chhichhore",
            image: "assets/image/movie/Chhichhore.jpg",
            link: "https://www.hotstar.com/in/movies/chhichhore/1260012713",
            rank: "⭐⭐⭐⭐⭐"

        },
         
         {
             id: 10,
             name: "Desi boyz",
             image: "assets/image/movie/desi boyz.avif",
             link: "https://www.jiocinema.com/movies/desi-boyz/3489698",
             rank: "⭐"
         },
         {
             id: 11,
             name: "Gulaam-chor",
             image: "assets/image/movie/gulaam-chor.webp",
             link: "https://www.jiocinema.com/movies/gulaam-chor-gujarati/3761356",
             rank: "⭐⭐⭐⭐⭐"
         },
         {
             id: 12,
             name: "Housefull-4",
             image: "assets/image/movie/housefull.jpg",
             link: "https://www.hotstar.com/in/movies/housefull-4/1260014263",
             rank: "⭐⭐⭐⭐⭐"
         },
         {
             id: 13,
             name: "IB71",
             image: "assets/image/movie/IB71.jpg",
             link: "https://www.hotstar.com/in/movies/ib71/1260143875",
             rank: "⭐⭐⭐⭐⭐"
         },
         {
            id: 7,
            name: "Brahmastra",
            image: "assets/image/movie/brahmastra.jpg",
            link: "https://www.hotstar.com/in/movies/brahmastra-part-one-shiva/1260110227",
            rank: "⭐⭐⭐⭐ "
        },
        {
         id: 20,
         name: "Rocketry",
         image: "assets/image/movie/rocketry.avif",
         link: "https://www.jiocinema.com/movies/rocketry-the-nambi-effect/3502258",
         rank: "⭐⭐⭐⭐⭐"
     }, {
         id: 21,
         name: "Sita Raman",
         image: "assets/image/movie/sita ramm.jpg",
         link: "https://www.hotstar.com/in/movies/sita-ramam/1260123526",
         rank: "⭐⭐⭐⭐⭐"
     }, {
         id: 22,
         name: "Mission Mangal",
         image: "assets/image/movie/mission Mangal.jpg",
         link: "https://www.hotstar.com/in/movies/mission-mangal/1260011536?filters=content_type%3Dmovie",
         rank: "⭐⭐⭐⭐⭐"
     },
        {
            id: 8,
            name: "Cars",
            image: "assets/image/movie/cars.jpg",
            link: "https://www.hotstar.com/in/movies/cars/1260017229",
            rank: "⭐⭐⭐⭐⭐"
        },
        {
            id: 9,
            name: "Cuttputlli",
            image: "assets/image/movie/Cuttputlli.jpg",
            link: "https://www.hotstar.com/in/movies/cuttputlli/1260110758",
            rank: "⭐⭐⭐"
        },
          {
             id: 19,
             name: "Ramprasad ki Tehrvi",
             image: "assets/image/movie/ramprasad ki tehrvi.avif",
             link: "https://www.jiocinema.com/movies/ramprasad-ki-tehrvi/3487309",
             rank: "⭐⭐⭐⭐⭐"
         },
         {
            id: 14,
            name: "Joker",
            image: "assets/image/movie/joker.jpg",
            link: "https://www.jiocinema.com/movies/joker/3744591",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 15,
            name: "Jolly L.L.B 2",
            image: "assets/image/movie/jollyllb2.webp",
            link: "https://www.hotstar.com/in/movies/jolly-llb-2/1770015403",
            rank: "⭐⭐⭐⭐"
        }, {
            id: 16,
            name: "Lion King",
            image: "assets/image/movie/lionking.jpg",
            link: "https://www.hotstar.com/in/movies/the-lion-king/1260014782",
            rank: "⭐⭐⭐⭐⭐"
        }, 
         {
             id: 24,
             name: "Stree",
             image: "assets/image/movie/stree.webp",
             link: "https://www.hotstar.com/in/movies/stree/1000223587",
             rank: "⭐⭐"
         }, {
             id: 25,
             name: "Super-30",
             image: "assets/image/movie/Super-30.jpg",
             link: "https://www.hotstar.com/in/movies/super-30/1260009172",
             rank: "⭐⭐⭐⭐⭐"
         }, 
         {
            id: 17,
            name: "Oblivion",
            image: "assets/image/movie/oblivion.webp",
            link: "https://www.jiocinema.com/movies/oblivion/3762665",
            rank: "⭐⭐⭐⭐⭐"
        }, {
            id: 18,
            name: "Past",
            image: "assets/image/movie/past.webp",
            link: "https://www.hotstar.com/in/movies/the-past/1260012989",
            rank: "⭐⭐⭐"
        },
         {
             id: 26,
             name: "Titanic",
             image: "assets/image/movie/Titanic.webp",
             link: "https://www.hotstar.com/in/movies/titanic/1770001166",
             rank: "⭐⭐⭐⭐⭐"
         }, {
             id: 27,
             name: "Veerappan",
             image: "assets/image/movie/Veerappan.webp",
             link: "https://www.hotstar.com/in/movies/veerappan/1770015477",
             rank: "⭐⭐⭐⭐⭐"
         },  {
             id: 31,
             name: "Avatar",
             image: "assets/image/movie/Avatar.jpg",
             link: "https://www.hotstar.com/in/movies/avatar-the-way-of-water/1260142021",
             rank: "⭐⭐⭐⭐⭐"
         }
      ]
      let session = [
         {
             id: 101,
             name: "Apaharan-2",
             image: "assets/image/Session/apaharan-2.webp",
             link: "https://www.jiocinema.com/tv-shows/apharan/3498603",
             rank: "⭐⭐⭐⭐"
         }, {
            id: 102,
            name: "Asur-2",
            image: "assets/image/Session/asur2.webp",
            link: "https://www.jiocinema.com/tv-shows/asur/3500240",
            rank: "⭐⭐⭐⭐⭐"
         }, {
            id: 103,
            name: "Big Boss",
            image: "assets/image/Session/bbott-grand-finale.webp",
            link: "https://www.jiocinema.com/tv-shows/bigg-boss-ott/3499624",
            rank: "⭐⭐⭐⭐"
         }, {
            id: 104,
            name: "Crackdown",
            image: "assets/image/Session/crackdown.webp",
            link: "https://www.jiocinema.com/tv-shows/crackdown/3500235",
            rank: "⭐⭐⭐⭐⭐"
         }, {
            id: 105,
            name: "Taali",
            image: "assets/image/Session/taali-3x4-imdb-1693813361112.webp",
            link: "https://www.jiocinema.com/tv-shows/taali/3813489",
            rank: "⭐⭐⭐⭐"
         }, {
            id: 106,
            name: "Khatron ke khiladi",
            image: "assets/image/Session/rohit.webp",
            link: "https://www.jiocinema.com/tv-shows/khatron-ke-khiladi/3499776",
            rank: "⭐⭐⭐"
         }, {
            id: 107,
            name: "Humble politiciann nograj",
            image: "assets/image/Session/Humble politiciann nograj.jpg",
            link: "https://www.jiocinema.com/tv-shows/humble-politiciann-nograj/3500325",
            rank: "⭐⭐⭐"
         }, {
            id: 108,
            name: "Kaalkoot",
            image: "assets/image/Session/kaalkoot.webp",
            link: "https://www.jiocinema.com/tv-shows/kaalkoot/3780287",
            rank: "⭐⭐⭐⭐⭐"
         }, {
            id: 109,
            name: "Rafuchakkar",
            image: "assets/image/Session/rafuchakkar.webp",
            link: "https://www.jiocinema.com/tv-shows/rafuchakkar/3761992",
            rank: "⭐⭐⭐⭐⭐"
         },
      ]
      // combine data [ session and movie data mix ]
      const combinedData = [...data, ...session];
      // search method 
      useEffect(() => {
        localStorage.setItem('Data', JSON.stringify(combinedData));
         let nameserch = combinedData.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
         });
        setRecord(nameserch);

         if (resultsRef.current) {
            resultsRef.current.scrollIntoView({ behavior: 'smooth' });
            document.documentElement.style.scrollPaddingTop = '150px';
         }
      }, [search]);
      const handleInputChange = (e) => {
        setSearch(e.target.value);
      }
      // search data close

      // Botton to top button start
      document.addEventListener('DOMContentLoaded', function () {
        const goTopButton = document.querySelector('.go-top');

         window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                goTopButton.classList.add('active');
            } else {
                goTopButton.classList.remove('active');
            }
         });

         goTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
         });
      });

    return(
      <>
         <div className="mouseCursor cursor-outer"></div>
         <div className="mouseCursor cursor-inner"><span>Drag</span></div>

         <div id="loading">
         <div id="loading-center">
            <div id="loading-center-absolute">
               <div className="loading-logo">
                  <svg
                  id="camera-loader"
                  width="85.708488"
                  height="100"
                  fill="white">
                 <defs
                    id="defs12" />
                 <path
                   id="camera-body"
                    d="M 51.5625 0 C 50.667739 -0.00962983 49.756943 0.05800477 48.84375 0.1875 C 41.018415 1.2971691 35.117198 7.3376842 33.8125 14.71875 C 30.504071 7.9918491 23.138091 3.8277945 15.3125 4.9375 C 5.573576 6.3185261 -1.1937811 15.321773 0.1875 25.0625 C 1.030765 31.00916 4.7245026 35.850708 9.6875 38.40625 L 10.59375 44.84375 L 41.21875 40.5 C 42.618434 40.301472 43.966737 41.101389 44.15625 42.4375 C 44.34576 43.773612 43.274684 44.957723 41.875 45.15625 L 11.25 49.5 L 12.40625 57.6875 C 12.593105 59.005185 13.837018 59.937079 15.15625 59.75 L 64.25 52.78125 C 65.567815 52.594377 66.499355 51.348937 66.3125 50.03125 L 63.5625 30.78125 C 67.618077 26.946961 69.843395 21.259142 69 15.3125 C 67.748216 6.4849658 60.211858 0.09304631 51.5625 0 z M 51.28125 3.75 C 58.168631 3.6506107 64.22589 8.6859174 65.21875 15.6875 C 66.295328 23.279482 61.029156 30.329715 53.4375 31.40625 C 45.84552 32.482829 38.795329 27.18573 37.71875 19.59375 C 36.641441 11.998855 41.938942 4.9828747 49.53125 3.90625 C 50.124347 3.8221462 50.697574 3.7584222 51.28125 3.75 z M 17.5625 8.53125 C 24.449868 8.4318561 30.507144 13.46718 31.5 20.46875 C 32.576577 28.060719 27.310389 35.110969 19.71875 36.1875 C 12.126783 37.264077 5.0765804 31.966969 4 24.375 C 2.9226914 16.780121 8.2202041 9.7641225 15.8125 8.6875 C 16.405598 8.603395 16.978824 8.5396714 17.5625 8.53125 z M 79.71875 27.46875 L 66.9375 33.65625 L 68.53125 44.8125 L 82.53125 47.21875 L 79.71875 27.46875 z M 41.71875 41.0625 C 41.582761 41.058251 41.422178 41.073761 41.28125 41.09375 L 8.15625 45.78125 L 7.90625 44.09375 L 2.78125 43.9375 L 4 52.53125 L 8.875 50.9375 L 8.625 49.25 L 41.78125 44.5625 C 42.908673 44.40259 43.699053 43.493996 43.5625 42.53125 C 43.443014 41.688847 42.670671 41.092246 41.71875 41.0625 z M 51.53125 57.21875 L 28.625 60.4375 C 28.625117 63.279515 28.625057 61.501735 28.625 64.34375 L 30.90625 64.34375 L 32.40625 64.34375 L 17.21875 97.46875 C 16.804629 98.371268 17.19123 99.429629 18.09375 99.84375 C 18.996268 100.25787 20.054629 99.87127 20.46875 98.96875 L 36.34375 64.34375 L 38.28125 64.34375 L 38.28125 98.21875 C 38.28125 99.211743 39.069507 100 40.0625 100 C 41.055493 100 41.875 99.211743 41.875 98.21875 L 41.875 64.34375 L 43.6875 64.34375 L 59.71875 98.96875 C 60.136118 99.869771 61.192729 100.26112 62.09375 99.84375 C 62.994771 99.426382 63.386118 98.338521 62.96875 97.4375 L 47.65625 64.34375 L 49.09375 64.34375 L 51.53125 64.34375 L 51.53125 57.21875 z " />
                 <path
                    id="reel-1"
                    d="m 17.763265,10.60917 c -1.849868,0 -3.349902,1.500036 -3.349902,3.349902 0,1.849868 1.500034,3.34863 3.349902,3.34863 1.849865,0 3.348629,-1.498762 3.348629,-3.34863 0,-1.849866 -1.498764,-3.349902 -3.348629,-3.349902 z m -8.0539896,5.851215 c -1.849868,0 -3.3499023,1.500032 -3.3499023,3.349898 0,1.849866 1.5000343,3.349897 3.3499023,3.349897 1.8498656,0 3.3498996,-1.500031 3.3498996,-3.349897 0,-1.849866 -1.500034,-3.349898 -3.3498996,-3.349898 z m 16.1016246,0 c -1.849868,0 -3.3499,1.500032 -3.3499,3.349898 0,1.849866 1.500032,3.349897 3.3499,3.349897 1.849865,0 3.348629,-1.500031 3.348629,-3.349897 0,-1.849866 -1.498764,-3.349898 -3.348629,-3.349898 z m -13.023579,9.460259 c -1.849867,0 -3.3498994,1.500032 -3.3498994,3.349902 0,1.849865 1.5000324,3.348629 3.3498994,3.348629 1.849867,0 3.3499,-1.498764 3.3499,-3.348629 0,-1.84987 -1.500033,-3.349902 -3.3499,-3.349902 z m 9.950613,0 c -1.849866,0 -3.348629,1.500032 -3.348629,3.349902 0,1.849865 1.498763,3.348629 3.348629,3.348629 1.849865,0 3.349901,-1.498764 3.349901,-3.348629 0,-1.84987 -1.500036,-3.349902 -3.349901,-3.349902 z">
                   <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      dur="2s"
                      begin="0"
                      from="0 17.66 22.74"
                      to="360 17.66 22.74"
                      repeatCount="indefinite" />
                 </path>
                 <path
                    id="reel-2"
                    d="m 51.483904,5.8171007 c -1.849872,0 -3.349908,1.5000388 -3.349908,3.3499074 0,1.8498709 1.500036,3.3486359 3.349908,3.3486359 1.849868,0 3.348635,-1.498765 3.348635,-3.3486359 0,-1.8498686 -1.498767,-3.3499074 -3.348635,-3.3499074 z M 43.4299,11.668326 c -1.849872,0 -3.349908,1.500034 -3.349908,3.349904 0,1.849869 1.500036,3.349903 3.349908,3.349903 1.849869,0 3.349906,-1.500034 3.349906,-3.349903 0,-1.84987 -1.500037,-3.349904 -3.349906,-3.349904 z m 16.101654,0 c -1.849871,0 -3.349907,1.500034 -3.349907,3.349904 0,1.849869 1.500036,3.349903 3.349907,3.349903 1.849867,0 3.348635,-1.500034 3.348635,-3.349903 0,-1.84987 -1.498768,-3.349904 -3.348635,-3.349904 z m -13.023602,9.460276 c -1.849871,0 -3.349907,1.500034 -3.349907,3.349908 0,1.849869 1.500036,3.348635 3.349907,3.348635 1.849869,0 3.349905,-1.498766 3.349905,-3.348635 0,-1.849874 -1.500036,-3.349908 -3.349905,-3.349908 z m 9.950632,0 c -1.849872,0 -3.348637,1.500034 -3.348637,3.349908 0,1.849869 1.498765,3.348635 3.348637,3.348635 1.849867,0 3.349905,-1.498766 3.349905,-3.348635 0,-1.849874 -1.500038,-3.349908 -3.349905,-3.349908 z">
                   <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      dur="3.6s"
                      begin="0"
                      from="0 51.4 17.7"
                      to="360 51.4 17.7"
                      repeatCount="indefinite" />
                 </path>
                  </svg>
               </div>
               <div className="loading_text">
                  <span className="loading_text_words">L</span>
                  <span className="loading_text_words">O</span>
                  <span className="loading_text_words">A</span>
                  <span className="loading_text_words">D</span>
                  <span className="loading_text_words">I</span>
                  <span className="loading_text_words">N</span>
                  <span className="loading_text_words">G</span>
                </div>
            </div>
         </div>  
         </div>

         <div className="back-to-top-wrapper">
            <button id="back_to_top" type="button" className="back-to-top-btn">
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 6L6 1L1 6" stroke="currentColor" strokewidth="1.5" strokelinecap="round" strokelinejoin="round"/>
                </svg>               
            </button>
         </div>

         <div className="search-area">
         <div className="search-inner p-relative">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <div className="search-wrapper">
                        <div className="search-close">
                           <button className="search-close-btn">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M11 1L1 11" stroke="currentColor" strokewidth="1.5" strokelinecap="round" strokelinejoin="round"></path>
                                 <path d="M1 1L11 11" stroke="currentColor" strokewidth="1.5" strokelinecap="round" strokelinejoin="round"></path>
                              </svg>
                           </button>
                          </div>
                        <div className="search-content pt-35">
                           <h3 className="heading text-center mb-30">Hi! How can we help You?</h3>
                           <div className="d-flex justify-content-center px-5">
                              <div className="search w-100 p-relative">
                                 <input type="text" className="search-input" placeholder="Search..."/>
                                 <a href="#" className="search-icon">
                                 <i className="fa fa-search"></i>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </div>

         <div className="search-overlay"></div>

         <div className="offcanvas__area">
         <div className="offcanvas__close">
            <button className="offcanvas__close-btn offcanvas-close-btn">
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 1L1 11" stroke="currentColor" strokewidth="1.5" strokelinecap="round" strokelinejoin="round"></path>
                  <path d="M1 1L11 11" stroke="currentColor" strokewidth="1.5" strokelinecap="round" strokelinejoin="round"></path>
               </svg>
            </button>
         </div>
         <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
               <div className="offcanvas__top mb-40">
                  <div className="offcanvas__logo">
                     <a href="index.html">
                        <img src="assets/img/logo/logo.png" alt="logo"/>
                     </a>
                  </div>
               </div>

               <div className="tp-main-menu-mobile fix d-xl-none mb-30"></div>
               
               <div className="offcanvas__contact d-none d-xl-block">
                  <div className="offcanvas__text mb-30">
                     <p>The design readable content of a page hen looking at its layout The point our of using Movie template</p>
                  </div>
                  <div className="offcanvas__gallery mb-30">
                     <h4 className="offcanvas__title">Gallery</h4>
                     <div className="tp-project-details-widget-gallery">
                        <div className="tp-project-details-thumb fix">
                           <a className="popup-image" href="assets/img/hero/img-1.jpg"><img src="assets/img/play/project/img-6.jpg" alt=""/></a>
                        </div>
                        <div className="tp-project-details-thumb fix">
                           <a className="popup-image" href="assets/img/hero/img-2.jpg"><img src="assets/img/play/project/img-7.jpg" alt=""/></a>
                        </div>
                        <div className="tp-project-details-thumb fix">
                           <a className="popup-image" href="assets/img/hero/img-3.jpg"><img src="assets/img/play/project/img-8.jpg" alt=""/></a>
                        </div>
                        <div className="tp-project-details-thumb fix">
                           <a className="popup-image" href="assets/img/hero/img-2.jpg"><img src="assets/img/play/project/img-9.jpg" alt=""/></a>
                        </div>
                        <div className="tp-project-details-thumb fix">
                           <a className="popup-image" href="assets/img/hero/img-4.jpg"><img src="assets/img/play/project/img-10.jpg" alt=""/></a>
                        </div>
                        <div className="tp-project-details-thumb fix">
                           <a className="popup-image" href="assets/img/hero/img-3.jpg"><img src="assets/img/play/project/img-11.jpg" alt=""/></a>
                        </div>
                        <div className="tp-project-details-thumb fix">
                           <a className="popup-image" href="assets/img/hero/img-2.jpg"><img src="assets/img/play/project/img-12.jpg" alt=""/></a>
                        </div>
                        <div className="tp-project-details-thumb fix">
                           <a className="popup-image" href="assets/img/hero/img-1.jpg"><img src="assets/img/play/project/img-13.jpg" alt=""/></a>
                        </div>
                        <div className="tp-project-details-thumb fix">
                           <a className="popup-image" href="assets/img/hero/img-3.jpg"><img src="assets/img/play/project/img-14.jpg" alt=""/></a>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="offcanvas-info mb-30">
                  <h4 className="offcanvas__title">Contacts</h4>
                  <div className="offcanvas__contact-content d-flex">
                     <div className="offcanvas__contact-content-icon">
                        <i className="fa-sharp fa-solid fa-location-dot"></i>
                     </div>
                     <div className="offcanvas__contact-content-content">
                        <a href="https://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1">86 Road Broklyn Street, 600 </a>
                     </div>
                  </div>
                  <div className="offcanvas__contact-content d-flex">
                     <div className="offcanvas__contact-content-icon">
                        <i className="fa-solid fa-envelope"></i>
                     </div>
                     <div className="offcanvas__contact-content-content">
                        <a href="cdn-cgi/l/email-protection#82ece7e7e6eae7eef2c2e1edeff2e3ecfbace1edef"> <span className="__cf_email__" data-cfemail="327c5757565a575e4272515d5f42535c4b1c515d5f">[email&#160;protected]</span>  </a>
                     </div>
                  </div>
                  <div className="offcanvas__contact-content d-flex">
                     <div className="offcanvas__contact-content-icon">
                        <i className="fa-solid fa-phone"></i>
                     </div>
                     <div className="offcanvas__contact-content-content">
                        <a href="tel:01310-069824"> +92 666 888 0000</a>
                     </div>
                  </div>
               </div>
               <div className="offcanvas__social">
                  <a className="icon facebook" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="icon twitter" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="icon youtube" href="#"><i className="fab fa-youtube"></i></a>
                  <a className="icon linkedin" href="#"><i className="fab fa-linkedin"></i></a>
               </div>
            </div>
         </div>
         </div>

         <div className="body-overlay"></div>

         {/* header */}

         <header className="tp-header-area p-relative tp-header-height">
               <div className="tp-header-top d-none d-xl-block">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xxl-6 col-xl-8">
                           <div className="tp-header-top-info">
                              <ul>
                                 <li>
                                    <a href="cdn-cgi/l/email-protection#6801060e07280d10090518040d460b0705"><span><i className="fa-solid fa-envelope"></i></span><span className="__cf_email__" data-cfemail="10797e767f507568717d607c753e737f7d">[email&#160;protected]</span></a>
                                 </li>
                                 <li>
                                    <a href="https://www.google.com/maps/search/6391+Elgin+St,+Wilmington,+DE,+USA/@39.7298967,-75.5645038,13z/data=!3m1!4b1" target="_blank"><span><i className="fa-sharp fa-solid fa-location-dot"></i></span>6123 Los angles, 1922</a>
                                 </li>
                                 <li>
                                    <a href="tel:555-0129"><span><i className="fa-solid fa-phone"></i></span>(629) 555-0129</a>
                                 </li>
                              </ul> 
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-4">
                           <div className="tp-header-top-right d-flex justify-content-end align-items-center">
                              <div className="header-social d-xl-block d-none">
                                 <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                 <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                 <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                 <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="header-sticky" className="tp-header-main p-relative">
                  <div className="container">
                     <div className="tp-header-box">
                        <div className="row align-items-center">
                           <div className="col-xl-2 col-6">
                              <div className="tp-header-main-left p-relative d-flex justify-content-xl-center">
                                 <div className="tp-header-logo">
                                    <a href="index.html">
                                       <img src="assets/img/logo/logo.png" alt=""/>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-8 d-none d-xl-block">
                              <div className="tp-main-menu-area d-flex align-items-center justify-content-center">
                                 <div className="tp-main-menu">
                                    <nav className="tp-main-menu-content">
                                       <ul>
                                          <li className="has-dropdown">
                                             <a href="index.html">Home</a>
                                             <ul className="submenu">
                                                <li><a href="index.html">Home 1</a></li>
                                                <li><a href="index-2.html">Home 2</a></li>
                                                <li><a href="index-3.html">Home 3</a></li>
                                             </ul>
                                          </li>
                                          <li><a href="about.html">About Us</a></li>
                                          <li className="has-dropdown">
                                             <a href="index.html">Pages</a>
                                             <ul className="submenu">
                                                <li><a href="service.html">Service</a></li>
                                                <li><a href="service-details.html">Service Details</a></li>
                                                <li><a href="project.html">Projects</a></li>
                                                <li><a href="project-details.html">Project Details</a></li>
                                                <li><a href="team.html">Team</a></li>
                                                <li><a href="team-details.html">Team Details</a></li>
                                                <li><a href="faq.html">Faq</a></li>
                                             </ul>
                                          </li>
                                          <li className="has-dropdown"><a href="blog.html">Blog</a>
                                             <ul className="submenu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                             </ul>
                                          </li>
                                          <li><a href="contact.html">Contact</a></li>
                                       </ul>
                                    </nav>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-2 col-6">
                              <div className="tp-header-main-right d-flex align-items-center justify-content-end">
                                 <div className="tp-header-contact d-none d-xl-block z-index-1">
                                    <div className="tp-header-contact-search search-open-btn d-none d-xxl-block">
                                       <div className="header-search-box">
                                          <input
                                             className='p-1 m-4'
                                             type="text"
                                             value={search}
                                             onChange={handleInputChange}
                                             placeholder="Search..."
                                          />
                                          {/* <span><i className="far fa-search"></i></span> */}
                                       </div>
                                    </div>
                                 </div>
                                 <div className="tp-header-hamburger-btn offcanvas-open-btn">
                                    <button className="hamburger-btn">
                                       <span></span>
                                       <span></span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
         </header>

         <main className="tp-page-wrapper">
    
            <section className="tp-hero-area pt-180 pb-90">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-7">
                        <div className="tp-hero-title-wrapper mb-50 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                           <h3 className="tp-hero-title">The ultimate <br/> driving machine</h3>
                        </div>
                     </div>
                     <div className="col-lg-5">
                        <div className="tp-hero-title-wrapper mb-50 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                           <p>It is a long established fact that a reader will distracted by the design readable content of a page hen looking at its layout The point our of using Movie template</p>
                           <div className="tp-hero-btn">
                              <a className="tp-btn" href="project.html">Load More</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <section class="br-td-area">
                <div class="br-td-container">
                    <div class="container">
                        <div class="main-title">
                            <div class="title">
                                <h3 class="site-title">All</h3>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="br-td-content content-row row  justify-content-center mx-auto align-items-center">
                                {data.map(({ id, link, image, name, rank }) => (
                                    <div className="br-td-content col-4 text-center  position-relative" key={id}>
                                        <div className='my-3'>
                                            <div className="br-td-img">
                                                <a href={link} target="_blank" rel="noopener noreferrer">
                                                    <img src={image} className='' alt={name} />
                                                </a>
                                                <div className="overlay">
                                                    <div className="text">{name}</div>
                                                </div>
                                            </div>
                                            <div className="actors-name-date">
                                                <h5 className="lg-f">{name}</h5>
                                                <span className="total-movie md-f ">{rank}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
               </section>
            </section>

            <section className="tp-screenshot-arae pb-85">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="tp-screenshot-title-wrapper text-center mb-55 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                           <h3 className="tp-section-title">Creating unforgettable moments <br/> on the big screen</h3>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-lg-6">
                        <div className="tp-screenshot-thumb wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" data-tilt="" data-tilt-perspective="2000">
                           <a className="popup-image" href="assets/img/screenshot/img-1.jpg">
                              <img src="assets/img/screenshot/img-1.jpg" alt=""/>
                           </a>
                        </div>
                        <div className="tp-screenshot-thumb wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" data-tilt="" data-tilt-perspective="2000">
                           <a className="popup-image" href="assets/img/screenshot/img-2.jpg">
                              <img src="assets/img/screenshot/img-2.jpg" alt=""/>
                           </a>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="tp-screenshot-thumb wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s" data-tilt="" data-tilt-perspective="2000">
                           <a className="popup-image" href="assets/img/screenshot/img-3.jpg">
                              <img src="assets/img/screenshot/img-3.jpg" alt=""/>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <div className="tp-brand-area pt-80 pb-50" data-bg-color="#E27614">
    <div className="container">
       <div className="row">
          <div className="col-lg-3">
             <div className="tp-brand-thumb text-center text-lg-start mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                <img src="assets/img/brand/img-1.png" alt=""/>
             </div>
          </div>
          <div className="col-lg-3">
             <div className="tp-brand-thumb text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                <img src="assets/img/brand/img-2.png" alt=""/>
             </div>
          </div>
          <div className="col-lg-3">
             <div className="tp-brand-thumb text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                <img src="assets/img/brand/img-3.png" alt=""/>
             </div>
          </div>
          <div className="col-lg-3">
             <div className="tp-brand-thumb text-lg-end text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                <img src="assets/img/brand/img-4.png" alt=""/>
             </div>
          </div>
       </div>
    </div>
            </div>

            <section className="tp-about-area fix pt-120 pb-120">
    <div className="container">
       <div className="row">
          <div className="col-lg-6">
             <div className="tp-about-title-wrapper pt-150 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                <h3 className="tp-section-title">Creating unforgettable moments on the big Movie screen</h3>
                <p>It is a long established fact that a reader will distracted by the readable content of a page hen looking at its layout.The point of using Lorem Ipsum</p>
             </div>
             <div className="tp-about-btn">
                <a href="about.html" className="tp-btn-2">Load More</a>
             </div>
          </div>
          <div className="col-lg-6">
             <div className="tp-about-thumb-wrapper p-relative wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                <div className="tp-about-thumb-shape">
                   <span></span>
                </div>
                <div className="tp-about-thumb" data-tilt="" data-tilt-perspective="2000">
                   <img src="assets/img/about/img-1.jpg" alt=""/>
                   <div className="tp-about-thumb-play-btn effect">
                      <a className="tp-play-btn popup-video" href="https://www.youtube.com/watch?v=go7QYaQR494">
                      <i className="fa-solid fa-play"></i></a>
                   </div>
                </div>
                <div className="tp-about-thumb-counter d-flex align-items-center">
                   <div className="tp-about-thumb-counter-icon">
                      <img src="assets/img/about/icon-1.svg" alt=""/>
                   </div>
                   <div className="tp-about-thumb-counter-content">
                      <h4 className="tp-about-thumb-counter-title"><span className="purecounter" data-purecounter-duration="4" data-purecounter-end="7"></span>k+</h4>
                      <p>Hours worked done</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
            </section>

            <section className="tp-counter-area pb-90">
    <div className="container">
       <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
             <div className="tp-counter-item text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                <div className="tp-counter-item-icon">
                   <img src="assets/img/counter/img-1.png" alt=""/>
                </div>
                <div className="tp-counter-item-content">
                   <h4 className="tp-counter-item-title"><span className="purecounter" data-purecounter-duration="3" data-purecounter-end="200"></span>+</h4>
                   <p>Team member</p>
                </div>
             </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
             <div className="tp-counter-item text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                <div className="tp-counter-item-icon">
                   <img src="assets/img/counter/img-2.png" alt=""/>
                </div>
                <div className="tp-counter-item-content">
                   <h4 className="tp-counter-item-title"><span className="purecounter" data-purecounter-duration="3" data-purecounter-end="20"></span>+</h4>
                   <p>Winning award</p>
                </div>
             </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
             <div className="tp-counter-item text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                <div className="tp-counter-item-icon">
                   <img src="assets/img/counter/img-3.png" alt=""/>
                </div>
                <div className="tp-counter-item-content">
                   <h4 className="tp-counter-item-title"><span className="purecounter" data-purecounter-duration="2" data-purecounter-end="10"></span>k+</h4>
                   <p>Complete project</p>
                </div>
             </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
             <div className="tp-counter-item text-center mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                <div className="tp-counter-item-icon">
                   <img src="assets/img/counter/img-4.png" alt=""/>
                </div>
                <div className="tp-counter-item-content">
                   <h4 className="tp-counter-item-title"><span className="purecounter" data-purecounter-duration="4" data-purecounter-end="500"></span>+</h4>
                   <p>Client review</p>
                </div>
             </div>
          </div>
       </div>
    </div>
            </section>

            <div className="tp-video-play-area pt-60 pb-55" data-background="assets/img/play/bg.png">
    <div className="container-fluid">
       <div className="tp-video-play-slider">
          <div className="tp-video-play-active swiper-container">
             <div className="swiper-wrapper">
                <div className="swiper-slide">
                   <div className="tp-video-play-item p-relative">
                      <div className="tp-video-play-thumb" data-tilt="" data-tilt-perspective="2000">
                         <img src="assets/img/play/img-1.jpg" alt=""/>
                         <div className="tp-video-play-content">
                            <p>Adventure / 182 Mins</p>
                            <a href="project-details.html">Highway</a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="swiper-slide">
                   <div className="tp-video-play-item p-relative">
                      <div className="tp-video-play-thumb" data-tilt="" data-tilt-perspective="2000">
                         <img src="assets/img/play/img-2.jpg" alt=""/>
                         <div className="tp-video-play-content">
                            <p>Adventure / 182 Mins</p>
                            <a href="project-details.html">Stallion</a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="swiper-slide">
                   <div className="tp-video-play-item p-relative">
                      <div className="tp-video-play-thumb" data-tilt="" data-tilt-perspective="2000">
                         <img src="assets/img/play/img-3.jpg" alt=""/>
                         <div className="tp-video-play-content">
                            <p>Adventure / 182 Mins</p>
                            <a href="project-details.html">Samurai</a>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="swiper-slide">
                   <div className="tp-video-play-item p-relative">
                      <div className="tp-video-play-thumb" data-tilt="" data-tilt-perspective="2000">
                         <img src="assets/img/play/img-4.jpg" alt=""/>
                         <div className="tp-video-play-content">
                            <p>Adventure / 182 Mins</p>
                            <a href="project-details.html">Dark</a>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
            </div>

            <section className="tp-trailer-area pt-120 pb-120">
    <div className="container">
       <div className="row">
          <div className="col-lg-6">
             <div className="tp-trailer-thumb-wrapper p-relative pt-100 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                <div className="tp-trailer-shape">
                   <img src="assets/img/trailer/shape.png" alt=""/>
                </div>
                <div className="tp-trailer-thumb text-end p-relative z-index-1" data-tilt="" data-tilt-perspective="2000">
                   <img src="assets/img/trailer/img-1.jpg" alt=""/>
                   <div className="tp-trailer-thumb-play-btn">
                      <a className="tp-play-btn popup-video" href="https://www.youtube.com/watch?v=go7QYaQR494">
                      <i className="fa-solid fa-play"></i></a>
                   </div>
                </div>
                <div className="tp-trailer-shape-2">
                   <span></span>
                </div>
             </div>
          </div>
          <div className="col-lg-6">
             <div className="tp-trailer-title-wrapper pt-100 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                <h3 className="tp-section-title">Creating unforgettable moments on the big screen</h3>
                <p>It is a long established fact that a reader will distracted by the readable content of a page hen looking at its layout.The point of using Lorem Ipsum</p>
                <div className="tp-trailer-btn">
                   <a className="tp-btn-2" href="about.html">Load More</a>
                </div>
             </div>
          </div>
       </div>
    </div>
            </section>

            <section className="tp-blog-area pt-30 pb-90">
    <div className="container">
       <div className="row">
          <div className="col-lg-4 col-md-6">
             <div className="tp-blog-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                <div className="tp-blog-item-thumb">
                   <a href="blog-details.html"><img src="assets/img/blog/img-1.jpg" alt=""/></a>
                </div>
                <div className="tp-blog-content">
                   <div className="tp-blog-content-info d-flex">
                      <span><i className="fa-regular fa-user"></i> <a href="#">By admin</a></span>
                      <span><a href="#"><i className="fa-regular fa-calendar-days"></i> 10 March 2023</a></span>
                   </div>
                   <h4 className="tp-blog-title"><a href="blog-details.html">If you are going to use a passage is of you need to be sure</a></h4>
                   <div className="tp-blog-content-btn p-relative text-end">
                      <a href="blog-details.html">Read More <i className="fa-regular fa-arrow-right"></i></a>
                   </div>
                </div>
             </div>
          </div>
          <div className="col-lg-4 col-md-6">
             <div className="tp-blog-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                <div className="tp-blog-item-thumb">
                   <a href="blog-details.html"><img src="assets/img/blog/img-2.jpg" alt=""/></a>
                </div>
                <div className="tp-blog-content">
                   <div className="tp-blog-content-info d-flex">
                      <span><i className="fa-regular fa-user"></i> <a href="#">By admin</a></span>
                      <span><a href="#"><i className="fa-regular fa-calendar-days"></i> 10 March 2023</a></span>
                   </div>
                   <h4 className="tp-blog-title"><a href="blog-details.html">Various versions have evolved over the years sometimes</a></h4>
                   <div className="tp-blog-content-btn p-relative text-end">
                      <a href="blog-details.html">Read More <i className="fa-regular fa-arrow-right"></i></a>
                   </div>
                </div>
             </div>
          </div>
          <div className="col-lg-4 col-md-6">
             <div className="tp-blog-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                <div className="tp-blog-item-thumb">
                   <a href="blog-details.html"><img src="assets/img/blog/img-3.jpg" alt=""/></a>
                </div>
                <div className="tp-blog-content">
                   <div className="tp-blog-content-info d-flex">
                      <span><i className="fa-regular fa-user"></i> <a href="#">By admin</a></span>
                      <span><a href="#"><i className="fa-regular fa-calendar-days"></i> 10 March 2023</a></span>
                   </div>
                   <h4 className="tp-blog-title"><a href="blog-details.html">Many desktop publishing packages and web page editors now</a></h4>
                   <div className="tp-blog-content-btn p-relative text-end">
                      <a href="blog-details.html">Read More <i className="fa-regular fa-arrow-right"></i></a>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
            </section>

            <section className="tp-cta-area pt-80 p-relative" data-bg-color="#E27614">
    <div className="tp-cta-overlay include-bg" data-background="assets/img/cta/bg.png"></div>
    <div className="tp-cta-shape d-none d-md-block">
       <img src="assets/img/cta/img-1.jpg" alt=""/>
    </div>
    <div className="container">
       <div className="row align-items-center">
          <div className="col-md-8">
             <div className="tp-cta-contact p-relative">
                <h4 className="tp-cta-title"><a href="tel:+1234-56789"><span><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M23.1891 5.76507C23.3176 5.28484 23.6316 4.87532 24.0621 4.62656C24.4925 4.37779 25.0041 4.31015 25.4844 4.4385C27.9084 5.07001 30.1202 6.33672 31.8915 8.108C33.6627 9.87928 34.9294 12.091 35.5609 14.5151C35.6304 14.7547 35.6513 15.0058 35.6225 15.2536C35.5937 15.5015 35.5157 15.741 35.3931 15.9583C35.2705 16.1756 35.1057 16.3663 34.9085 16.5191C34.7113 16.6719 34.4856 16.7839 34.2445 16.8483C34.0035 16.9128 33.752 16.9285 33.5049 16.8945C33.2577 16.8606 33.0198 16.7776 32.8051 16.6506C32.5903 16.5235 32.4032 16.3548 32.2545 16.1545C32.1058 15.9541 31.9985 15.7261 31.9391 15.4838C31.4734 13.6982 30.5401 12.0691 29.2352 10.7642C27.9304 9.45937 26.3012 8.52603 24.5156 8.06038C24.0354 7.93182 23.6259 7.61781 23.3771 7.18738C23.1284 6.75695 23.0607 6.24535 23.1891 5.76507ZM36.8516 27.4338C36.5536 29.702 35.4402 31.7841 33.7193 33.2914C31.9984 34.7987 29.7877 35.628 27.5 35.6244C14.7484 35.6244 4.37501 25.251 4.37501 12.4994C4.37147 10.2118 5.20077 8.00106 6.70804 6.28015C8.21531 4.55924 10.2975 3.44584 12.5656 3.14788C13.2339 3.06667 13.9106 3.20291 14.4954 3.5364C15.0803 3.8699 15.5421 4.38292 15.8125 4.99944L19.1109 12.3635C19.1145 12.3732 19.1186 12.3826 19.1234 12.3916C19.3262 12.8654 19.4086 13.382 19.3633 13.8953C19.318 14.4086 19.1465 14.9028 18.8641 15.3338C18.8239 15.3966 18.7795 15.4566 18.7313 15.5135L15.7531 19.0619C16.8563 21.0682 18.9563 23.1494 20.9859 24.251L24.4719 21.2823C24.5278 21.2354 24.5863 21.1916 24.6469 21.151C25.0794 20.8608 25.5779 20.6838 26.0966 20.6363C26.6153 20.5888 27.1376 20.6723 27.6156 20.8791L27.6438 20.8916L35 24.1869C35.6164 24.4576 36.1292 24.9194 36.4627 25.5042C36.7962 26.089 36.9325 26.7655 36.8516 27.4338ZM33.0531 27.4244L26.4906 24.4854L22.9859 27.4651C22.9309 27.5128 22.8729 27.5571 22.8125 27.5979C22.362 27.8966 21.8417 28.0733 21.3025 28.1109C20.7632 28.1484 20.2235 28.0454 19.7359 27.8119C16.6922 26.3432 13.6594 23.3307 12.1875 20.3119C11.9534 19.8266 11.8489 19.289 11.8839 18.7513C11.9189 18.2136 12.0924 17.6941 12.3875 17.2432C12.4282 17.1804 12.4731 17.1203 12.5219 17.0635L15.5156 13.5135L12.575 6.95101C11.3116 7.22943 10.1814 7.93153 9.37192 8.94077C8.56248 9.95001 8.1225 11.2057 8.12501 12.4994C8.13121 17.6361 10.1745 22.5606 13.8067 26.1928C17.4388 29.825 22.3633 31.8682 27.5 31.8744C28.7946 31.878 30.0513 31.4385 31.0615 30.629C32.0718 29.8195 32.7745 28.6887 33.0531 27.4244ZM22.7547 13.9791C23.5215 14.2208 24.2187 14.6438 24.7871 15.2123C25.3556 15.7808 25.7786 16.478 26.0203 17.2448C26.14 17.6252 26.3778 17.9576 26.6992 18.1936C27.0207 18.4296 27.409 18.557 27.8078 18.5573C27.9991 18.557 28.1892 18.5281 28.3719 18.4713C28.8444 18.3218 29.2384 17.9914 29.468 17.5522C29.6975 17.113 29.7439 16.6008 29.5969 16.1276C29.174 14.785 28.4335 13.5643 27.4382 12.569C26.443 11.5737 25.2222 10.8332 23.8797 10.4104C23.6434 10.3311 23.3937 10.2997 23.1452 10.3181C22.8966 10.3364 22.6542 10.4041 22.4321 10.5173C22.2101 10.6304 22.0128 10.7866 21.8518 10.9769C21.6908 11.1672 21.5694 11.3876 21.4946 11.6254C21.4198 11.8631 21.3932 12.1134 21.4163 12.3615C21.4393 12.6097 21.5117 12.8508 21.629 13.0706C21.7463 13.2905 21.9063 13.4848 22.0996 13.6421C22.2929 13.7995 22.5156 13.9167 22.7547 13.9869V13.9791Z" fill="#2B2B5E"/>
                   </svg></span> Get a Consultation Call Us  +1234-56789 </a></h4>
             </div>
          </div>
          <div className="col-md-4">
             <div className="tp-cta-btn p-relative text-start text-md-end">
                <a className="tp-btn" href="contact.html">Contact Us</a>
             </div>
          </div>
       </div>
    </div>
            </section>


         </main>
 
         <footer className="tp-footer-area pt-90 p-relative z-index-1" data-bg-color="#0F172A">
            <div className="tp-footer-main-area">
               <div className="container">
                  <div className="tp-footer-border">
                     <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                           <div className="tp-footer-widget tp-footer-col-1 mb-50">
                              <div className="tp-footer-logo">
                              <a href="index.html"> <img src="assets/img/logo/logo.png" alt=""/></a>
                              </div>
                              <div className="tp-footer-widget-content">
                                 <p>Lorem Ipsum is simply is dumi omy is text Loremo Ipsum is simply is out no our o dummy text.Lorem Ipsum</p>
                                 <div className="tp-footer-widget-social">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                           <div className="tp-footer-widget tp-footer-col-2 mb-50">
                              <h3 className="tp-footer-widget-title">Links</h3>
                              <div className="tp-footer-widget-content">
                                 <ul>
                                    <li><a href="#">Credit industrys</a></li>
                                    <li><a href="#">Credit Consulting</a></li>
                                    <li><a href="#">Business Credit industry</a></li>
                                    <li><a href="#">Finance industry</a></li>
                                 </ul>
                              </div>
                           </div> 
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                           <div className="tp-footer-widget tp-footer-col-3 mb-50">
                              <h3 className="tp-footer-widget-title">CONTACT INFO</h3>
                              <div className="tp-footer-widget-content">
                                 <div className="tp-footer-widget-contact">
                                    <div className="tp-footer-widget-contact-inner">
                                       <a href="https://www.google.com/maps" target="_blank">Old city Street,Usa <br/> 1212 New york-3500</a>
                                    </div>
                                    <div className="tp-footer-widget-contact-inner">
                                       <a className="contact-title" href="tel:123456765"><i className="fa-solid fa-phone"></i> (+888) 123 456 765</a>
                                    </div>
                                    <div className="tp-footer-widget-contact-inner">
                                       <a className="contact-title" href="cdn-cgi/l/email-protection#a1c8cfc7cee1c4d9c0ccd1cdc48fc2cecc"><i className="fa-solid fa-envelope"></i> <span className="__cf_email__" data-cfemail="c9a0a7afa6a7a8a4ac89a4a8a0a5e7aaa6a4">[email&#160;protected]</span></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-5 col-md-6">
                           <div className="tp-footer-widget tp-footer-col-4 mb-50">
                              <h3 className="tp-footer-widget-title">NEWSLETTER</h3>
                              <div className="tp-footer-widget-content">
                                 <div className="tp-footer-widget-input">
                                    <form action="index.html">
                                       <input type="email" placeholder="Your Email Here"/>
                                       <button>
                                          <span><i className="fa-regular fa-arrow-right-long"></i></span>
                                       </button>
                                    </form>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-footer-copyright-area p-relative">
               <div className="container">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="tp-footer-copyright-inner">
                           <p>© Dhora 2023 | All Rights Reserved</p>
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="tp-footer-copyright-inner text-lg-end">
                           <a href="#">Privacy</a>
                           <a href="#">Terms</a>
                           <a href="#">Sitemap</a>
                           <a href="#">Help</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
       
      </>
    )

}

export default MovieSearch;
