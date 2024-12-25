const configObserver={rootMargin:"-50px -50px -50px -50px",threshold:[0,.25,.75,1]},addActivesHome=document.querySelectorAll(".add-active-js"),observerAddActivesHome=new InterdivObserver(e=>{e.forEach(e=>{0<e.interdivRatio?e.target.classList.add("active"):e.target.classList.contains("loader")||e.target.classList.remove("active")})},configObserver);function reveal(){for(var e=document.querySelectorAll(".ani"),t=0;t<e.length;t++){var s=window.innerHeight;e[t].getBoundingClientRect().top<s-50&&e[t].classList.add("active")}}function cscrollAddClass(e,s){$(e).each(function(){var e=this;let t=$(e).offset().top;($(e).hasClass("custom-fadeInUpBig")||$(e).hasClass("custom-bounceInUp"))&&(t=$(e).offset().top-2e3),(t=$(e).hasClass("custom-fadeInDownBig")||$(e).hasClass("custom-bounceInDown")?$(e).offset().top+2e3:t)<$(window).scrollTop()+$(window).height()/10*8&&$(e).addClass(s)})}function cbindImageAnimations(){cscrollAddClass(".scr-item","active"),$(window).on("scroll",function(){cscrollAddClass(".scr-item","active")})}function showSpinnerAni(){document.querySelectorAll(".spinner-ani-js").forEach(e=>{e.classList.add("is-loading")})}function removeSpinnerAni(){document.querySelectorAll(".spinner-ani-js").forEach(e=>{e.classList.remove("is-loading")})}async function fetchListCourses(e,t){try{showSpinnerAni();var s=await fetch(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:t});if(s.ok)return await s.json();throw new Error("Network response was not ok.")}catch(e){throw console.log("There was a problem with the fetch operation:",e),e}finally{removeSpinnerAni(),lessonSwiper()}}function getListCourses(){var e=new URLSearchParams;e.append("action","mona_ajax_get_list_courses");fetchListCourses("/wp-admin/admin-ajax.php?mona-ajax",e).then(e=>{var e=e.data,t=e&&e.errors&&e.errors[0];t?console.log("error.message",t.message):renderListCourses(e)}).catch(e=>{console.log("Error fetching data:",e)})}function formatTime(e){e=parseInt(e,10);return[Math.floor(e/3600),Math.floor(e/60)%60,e%60].map(e=>e<10?"0"+e:e).filter((e,t)=>"00"!==e||0<t).join(":")}function floorProducts(e){return 10*Math.floor(e/10)}function renderListCourses(e){var t=document.querySelector(".total-products-js"),s=document.querySelectorAll(".floor-total-products-js");const o=e.total_products;t.innerHTML=o,0<s.length&&s.forEach(e=>{e.innerHTML=floorProducts(o),e.classList.remove("is-loading")});t=document.querySelector(".lesson-list-js"),s=e.categories.map((e,t)=>{let s=e.lesson.total;return 0<e.sub_categories.length&&e.sub_categories.forEach(e=>{s+=e.lesson.total}),`
    <div class="swiper-slide">
      <div class="lesson-box brd-16">
        <div class="inner">
          <div class="hd d-flex">
            <div class="num">${t<9?"0"+(t+1):t+1}</div>
            <p class="tt txt-upper">${e.name}</p>
          </div>
          <div class="info d-flex">
            <div class="quantity d-flex"> <span class="txt fw-400">Số lượng bài: </span><span class="total posts fw-600">${s} bài </span></div>
            <div class="time d-flex"> <span class="txt fw-400">Thời lượng :</span><span class="total time fw-600">${formatTime(e.total_time)}</span>
            </div>
          </div>
          <div class="lesson-vd swiperItemVideo">
          ${0<e.sub_categories.length?e.sub_categories.map(e=>`
                <div class="lesson-vd-wr">
                  <div class="name-lesson">${e.name}</div>
                  <div class="lesson-vd-list">
                    ${e.lesson.products.map(e=>{var t="https://khanhhung.academy/learn",s=document.querySelector(".user-login");let o;return`
                        <a href="${o=s?t+"/study/"+e.url_key:t+"/auth/?redirect="+e.url_key}" class="lesson-vd-it">
                          <span class="inner d-flex">
                            <span class="vd brd-8">
                              <span class="img">
                                <img class="swiper-lazy swiper-lazy-loaded" src="${e.image.url}" alt="" loading="lazy">
                              </span>
                            </span>
                            <span class="content">
                              <span class="tt"> 
                                <span class="tt-link">${e.name}</span>
                              </span>
                              <span class="lesson-vd-footer">
                                <span class="tag-list">
                                  ${e.tags?e.tags.map(e=>`
                                    <span class="tag-item tag-important"><img class="icon"
                                                        src="${currtDomain}/template/assets/images/tag/tag-important.png"
                                                        alt="">${e.name}</span>
                                    `).join(""):""}
                                </span>
                                <span class="time d-flex">
                                  <span class="ic">
                                    <img src="${currtDomain}/template/assets/images/home/ic-clock.png" alt="">
                                  </span>
                                  <span class="total-time">${e.time?formatTime(e.time):"0:00"}</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </a>
                      `}).join("")}
                  </div>
                </div>
              `).join(""):`
                <div class="lesson-vd-wr">
                <div class="lesson-vd-list">
                  ${e.lesson.products.map(e=>{var t="https://khanhhung.academy/learn",s=document.querySelector(".user-login");let o;return`
                        <a href="${o=s?t+"/study/"+e.url_key:t+"/auth/?redirect="+e.url_key}" class="lesson-vd-it">
                          <span class="inner d-flex">
                            <span class="vd brd-8">
                              <span class="img">
                                <img class="swiper-lazy swiper-lazy-loaded" src="${e.image.url}" alt="" loading="lazy">
                              </span>
                            </span>
                            <span class="content">
                              <span class="tt"> 
                                <span class="tt-link">${e.name}</span>
                              </span>
                              <span class="lesson-vd-footer">
                                <span class="tag-list">
                                  ${e.tags?e.tags.map(e=>`
                                    <span class="tag-item tag-important"><img class="icon"
                                                        src="${currtDomain}/template/assets/images/tag/tag-important.png"
                                                        alt="">${e.name}</span>
                                    `).join(""):""}
                                </span>
                                <span class="time d-flex">
                                  <span class="ic">
                                    <img src="${currtDomain}/template/assets/images/home/ic-clock.png" alt="">
                                  </span>
                                  <span class="total-time">${e.time?formatTime(e.time):"0:00"}</span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </a>
                    `}).join("")}
                </div>
                </div>
              `} 
          </div>
        </div>
      </div>
      <div class="arrow-group-wr">
        <div class="arrow-group">
          <div class="arrow"><img src="${currtDomain}/template/assets/images/home/arrow-right.png" alt="">
          </div>
        </div>
      </div>
    </div>
    `}).join("");t&&(t.innerHTML=s)}function lessonSwiper(){var e=document.querySelector(".swiperLessonHome");e&&new Swiper(e,{slidesPerView:"auto",speed:800,lazy:!0})}async function fetchColleague(e,t){try{var s=await fetch(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:t});if(s.ok)return await s.json();throw new Error("Network response was not ok.")}catch(e){throw console.log("There was a problem with the fetch operation:",e),e}}function apppendData(e){e=JSON.parse(e.data.contents[0].content).reverse();const r=document.querySelectorAll(".colleague-success-item-js");e.forEach(t=>{var e,s,o,n;"DUONG"==t.check_code&&(e=r[4].querySelector(".date-release-js"),r[4].querySelector(".num-sell-js"),s=r[4].querySelector(".payback-js"),o=r[4].querySelector(".revenue-js"),e.innerHTML=t.start_date,s.innerHTML=t.first_day_revenue,o.innerHTML=t.revenue),"TDTC"==t.check_code&&(e=r[0].querySelector(".date-release-js"),s=r[0].querySelector(".num-sell-js"),o=r[0].querySelector(".payback-js"),n=r[0].querySelectorAll(".revenue-js"),e.innerHTML=t.start_date,s.innerHTML=t.total_order,o.innerHTML=t.first_day_revenue,n.forEach(e=>{e.innerHTML=t.revenue})),"TDA"==t.check_code&&(e=r[3].querySelector(".date-release-js"),s=r[3].querySelector(".num-sell-js"),o=r[3].querySelector(".payback-js"),n=r[3].querySelector(".revenue-js"),e.innerHTML=t.start_date,s.innerHTML=t.total_order,o.innerHTML=t.payback_time,n.innerHTML=t.revenue_per_month),"QTA"==t.check_code&&(e=r[2].querySelector(".date-release-js"),s=r[2].querySelector(".num-sell-js"),o=r[2].querySelector(".payback-js"),n=r[2].querySelector(".revenue-js"),e.innerHTML=t.start_date,s.innerHTML=t.total_order,o.innerHTML=t.payback,n.innerHTML=t.revenue_per_month)})}function getApiColleague(){var e=new URLSearchParams;e.append("action","mona_ajax_get_colleague");fetchColleague("/wp-admin/admin-ajax.php?mona-ajax",e).then(e=>{var e=e.data,t=e&&e.errors&&e.errors[0];t?console.log("error.message",t.message):apppendData(e)}).catch(e=>{console.log("Error fetching data:",e)})}function showSpinnerComing(){document.querySelector(".spinner-coming-js").classList.add("is-loading")}function removeSpinnerComing(){document.querySelector(".spinner-coming-js").classList.remove("is-loading")}async function fetchComingSoon(e,t){try{showSpinnerComing();var s=await fetch(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},body:t});if(s.ok)return await s.json();throw new Error("Network response was not ok.")}catch(e){throw console.log("There was a problem with the fetch operation:",e),e}finally{removeSpinnerComing(),swiperComingSoon()}}function apppendDataComingSoon(e){var e=JSON.parse(e.data.contents[0].content),t=document.querySelector(".coming-soon-list-js");t&&(e=e.map(e=>`
      <div class="item swiper-slide"> 
        <div class="wrap">
          <div class="img"> <img src="${e.img}" alt=""></div>
          <div class="content"> 
            <div class="title">${e.title}</div>
            <div class="tag-list"> 
              <div class="tag-item tag-pro"><img class="icon" src="${currtDomain}/template/assets/images/tag/tag-pro.svg" alt="">PRO</div>
              <div class="tag-item tag-bundle"><img class="icon" src="${currtDomain}/template/assets/images/tag/tag-cm-gift.svg" alt="">Đã đăng ký E-Learning Bundle</div>
            </div>
            <div class="release"> 
              <div class="lb">Ngày ra mắt khóa học:</div>
              <div class="dt">${e.date_release}</div>
            </div>
            ${e.list_content}
          </div>
        </div>
      </div>
    `).join(""),t.innerHTML=e)}function getApiComingSoon(){var e=new URLSearchParams;e.append("action","mona_ajax_get_coming_soon");fetchComingSoon("/wp-admin/admin-ajax.php?mona-ajax",e).then(e=>{var e=e.data,t=e&&e.errors&&e.errors[0];t?console.log("error.message",t.message):apppendDataComingSoon(e)}).catch(e=>{console.log("Error fetching data:",e)})}function swiperComingSoon(){let e=3;window.innerWidth<1201&&(e=2),window.innerWidth<601&&(e=1);new Swiper(".swiper-common-data-js .swiper",{slidesPerView:"auto",slidesPerGroup:e,speed:800,navigation:{nextEl:".swiper-common-data-js .slider-navi-common-next",prevEl:".swiper-common-data-js .slider-navi-common-prev"}})}addActivesHome.forEach(e=>{observerAddActivesHome.observe(e)}),reveal(),window.addEventListener("scroll",reveal),cbindImageAnimations(),getListCourses(),getApiColleague(),getApiComingSoon();import{tsParticles}from"https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm";import{loadFull}from"https://cdn.jsdelivr.net/npm/tsparticles@3.0.3/+esm";async function loadParticles(e){await loadFull(tsParticles),await tsParticles.load({options:e})}const totalDuration=10,emittersLifeCount=totalDuration/.5,configs={fullScreen:{zIndex:1},particles:{number:{value:0},color:{value:["#00FFFC","#FC00FF","#fffc00"]},shape:{type:["circle","square"],options:{}},opacity:{value:{min:0,max:1},animation:{enable:!0,speed:5,startValue:"max",destroy:"min"}},size:{value:{min:2,max:4}},links:{enable:!1},life:{count:1},move:{enable:!0,gravity:{enable:!0,acceleration:10},speed:{min:10,max:20},decay:.1,direction:"none",straight:!1,outModes:{default:"destroy",top:"none"}},rotate:{value:{min:0,max:360},direction:"random",move:!0,animation:{enable:!0,speed:60}},tilt:{direction:"random",enable:!0,move:!0,value:{min:0,max:360},animation:{enable:!0,speed:60}},roll:{darken:{enable:!0,value:25},enable:!0,speed:{min:15,max:25}},wobble:{distance:30,enable:!0,move:!0,speed:{min:-15,max:15}}},emitters:{life:{count:emittersLifeCount,duration:.1,delay:.4},rate:{delay:.1,quantity:150},size:{width:0,height:0}}},configObserverTsparticles={rootMargin:"-200px -200px -200px -200px",threshold:[0,.25,.75,1]},tsparticles=document.querySelector("#tsparticles");let isOne=!0;const observerTsparticles=new InterdivObserver(e=>{e.forEach(e=>{0<e.interdivRatio&&isOne&&(loadParticles(configs),isOne=!1)})},configObserverTsparticles);observerTsparticles.observe(tsparticles);let speedGrids=[];const gridWidth=document.querySelectorAll(".customer-intro-grid-js");function getWidthGrid(){document.querySelectorAll(".getWidthGrid").forEach((e,t)=>{e.style=`--width:${e.getBoundingClientRect().width}px; --speedGrid:${speedGrids[t]}s`})}gridWidth.forEach(e=>{e=e.clientWidth/50;speedGrids.push(e)}),getWidthGrid(),window.addEventListener("resize",()=>{getWidthGrid()});const clBlock=document.querySelectorAll(".collapse-block");function getHeight(){var e=document.querySelectorAll(".getHeight");e&&e.forEach(e=>{e.style=`--height:${e.getBoundingClientRect().height}px`})}function getWidth(){var e=document.querySelectorAll(".getWidth");e&&e.forEach(e=>{e.style=`--width:${e.getBoundingClientRect().width}px`})}clBlock&&clBlock.forEach(e=>{const s=e.querySelectorAll(".collapse-body"),o=e.querySelectorAll(".collapse-item");s&&($(s[0]).slideDown(),s[0].parentElement.classList.add("active")),e.querySelectorAll(".collapse-head").forEach(t=>{t.addEventListener("click",()=>{s.forEach(e=>{$(e).slideUp()}),o.forEach(e=>{$(e).removeClass("active")});var e=t.parentElement.querySelector(".collapse-body");"none"==e.style.display||""==e.style.display?($(e).slideDown(),$(t.parentElement).addClass("active")):($(e).slideUp(),$(t.parentElement).removeClass("active"))})})}),$(document).ready(function(){var e=$(".form-sign .group input");$(".form-sign .group .place");e.each(function(){$(this).on("focus",function(){$(this).parents(".group").find(".place").addClass("active")})}),e.each(function(){$(this).on("blur",function(){1<=$(this).val().length?$(this).parents(".group").find(".place").addClass("active"):$(this).parents(".group").find(".place").removeClass("active")})}),e.each(function(){$(this).on("input",function(){1<=$(this).val().length?$(this).parents(".group").find(".place").addClass("active"):$(this).parents(".group").find(".place").removeClass("active")})})}),getHeight(),getWidth(),window.addEventListener("resize",()=>{getHeight(),getWidth()});let Gal=document.querySelectorAll(".gallery"),noThumbs=document.querySelector(".web-demo-cate-btn .button");noThumbs=noThumbs&&!1,Gal.forEach(e=>{lightGallery(e,{selector:".gallery__img",exThumbImage:"data-src",autoplayControls:!1,flipHorizontal:!1,flipVertical:!1,rotate:!1,share:!1,fullScreen:!1,actualSize:!1,download:!1,thumbnail:!1,plugins:[lgThumbnail],mobileSettings:{controls:!0,showCloseIcon:!0}})});const playMessage="MONA-PLAY-VIDEO",pauseMessage="MONA-PAUSE-VIDEO",unmuteMessage="MONA-UNMUTE-VIDEO",muteMessage="MONA-MUTE-VIDEO",videoUrl="https://video.monamedia.net";function pauseAllVideos(){document.querySelectorAll(".iframe-video-js").forEach(e=>{e.contentWindow.postMessage(pauseMessage,videoUrl)})}function playVideoInIframe(e){e&&(e=e.contentWindow)&&(e.postMessage(muteMessage,videoUrl),e.postMessage(playMessage,videoUrl))}pauseAllVideos(),window.addEventListener("load",()=>{document.querySelectorAll(".web-video-js").forEach(e=>{const t=e.querySelector(".web-play-js"),s=e.querySelector(".poster-js");function o(){s&&(s.style.transition="opacity 0.5s ease-in-out, top 0.5s ease-in-out",s.style.top="-100%",s.style.opacity=0),t&&(t.classList.add("hidden"),t.style.top="-100%"),pauseAllVideos(),playVideoInIframe(e.querySelector(".iframe-video-js"))}t&&t.addEventListener("click",o),s&&s.addEventListener("click",o)}),window.addEventListener("message",e=>{var t,s;e.origin===videoUrl&&(t=document.querySelector(`iframe[src="${videoUrl}"]`))&&e.data===playMessage&&(s=t.contentWindow)&&(s.postMessage(muteMessage,videoUrl),s.postMessage(playMessage,videoUrl))})});const project=document.querySelector(".swiper-project-content"),isBannerSwiper=(project&&new Swiper(project,{effect:"coverflow",slidesPerView:2.4,spaceBetween:20,centeredSlides:!0,loop:!0,slideToClickedSlide:!0,speed:800,coverflowEffect:{rotate:20,stretch:50,depth:80,modifier:1},breakpoints:{768:{loop:!0,slidesPerView:2.4,coverflowEffect:{rotate:20,stretch:100,depth:100,modifier:1}},900:{slidesPerView:2.8,coverflowEffect:{rotate:20,stretch:100,depth:160,modifier:1}},1728:{slidesPerView:3.3,coverflowEffect:{rotate:25,stretch:100,depth:140,modifier:1}}}}),document.querySelectorAll(".banner-intro-swiper-js"));if(isBannerSwiper.forEach(e=>{new Swiper(e.querySelector(".swiper-container "),{effect:"coverflow",slidesPerView:1.8,spaceBetween:20,initialSlide:2,centeredSlides:!0,slideToClickedSlide:!0,speed:800,lazy:!0,coverflowEffect:{rotate:0,stretch:109,depth:250,modifier:1},breakpoints:{380:{coverflowEffect:{stretch:104}},768:{slidesPerView:2,coverflowEffect:{stretch:112}},1200:{slidesPerView:2.2,coverflowEffect:{stretch:102}},1729:{slidesPerView:2,coverflowEffect:{stretch:168}}}})}),600<window.innerWidth){const S0=document.querySelectorAll(".swiper-common-js"),T0=(S0.forEach(e=>{var t=e.querySelector(".swiper"),s=e.querySelector(".slider-navi-common-prev"),o=e.querySelector(".slider-navi-common-next"),e=e.querySelector(".slideGroup");new Swiper(t,{slidesPerView:"auto",speed:800,slidesPerGroup:e?3:1,navigation:{nextEl:o,prevEl:s}})}),document.querySelector(".swiper-colleague-js"));if(T0){const $0=T0.querySelector(".swiper"),_0=T0.querySelector(".slider-navi-common-prev"),ab=T0.querySelector(".slider-navi-common-next"),bb=new Swiper($0,{slidesPerView:"auto",speed:800,centeredSlides:!0,slidesPerGroup:1,initialSlide:1,navigation:{nextEl:ab,prevEl:_0}})}}const swiperSlider=document.querySelector(".bne-sp-slider");var bneSlider;swiperSlider&&(bneSlider=new Swiper(".swiper-bne",{slidesPerView:"auto",autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".bne-sp-slider .swiper-pagination",clickable:!0}}));const swiperBneAni=document.querySelector(".bneAni-block");swiperBneAni&&(bneSlider=new Swiper(".swiper-bneAni",{slidesPerView:"auto",spaceBetween:8,navigation:{nextEl:".bneAni-block .swiper-button-next",prevEl:".bneAni-block .swiper-button-prev"},pagination:{el:".bneAni-block .swiper-pagination",clickable:!0}}));let tab=document.querySelectorAll(".tabJS");tab&&tab.forEach(e=>{let s=e.querySelectorAll(".tabBtn"),o=e.querySelectorAll(".tabPanel");if(0!==s.length&&o.length===s.length){s[0].classList.add("active"),o[0].classList.add("open");for(let t=0;t<s.length;t++){function n(e){e.preventDefault();for(let e=0;e<s.length;e++)s[e].classList.remove("active"),o[e].classList.remove("open");s[t].classList.add("active"),o[t].classList.add("open")}s[t].addEventListener("click",n)}}});const btnForms=document.querySelectorAll(".login-icon-js"),btnFormIcon=document.querySelector(".login-icon-js .icon"),layoutForm=document.querySelector(".banner-login-wrap-js"),allCoursesToggles=(btnForms.forEach((s,e)=>{s.onclick=()=>{var e=s.closest(".banner-login-box-js");e&&(e.classList.toggle("hide"),$(e).find(".banner-login-wrap-js").stop().slideToggle())};var t=s.nextElementSibling.querySelectorAll(".banner-login-wrap-tt-js");t&&t.forEach(e=>{var t=s.clientHeight;e.setAttribute("style",`--sticky:${t/10+.8}rem`)})}),document.querySelectorAll(".all-courses-toggle-js"));function lessNumIdentity(e){e.querySelectorAll('.banner-login-item:not([type-video="pro"])').forEach((e,t)=>{e.querySelector(".quantity-js").innerText=t=(t+=1)<10?"0"+t:t});e=e.querySelector(".banner-login-viewall-js");e.classList.remove("less"),e.innerText="Xem toàn bộ"}function moreNumIdentity(e){e.querySelectorAll(".banner-login-item").forEach((e,t)=>{e.querySelector(".quantity-js").innerText=t=(t+=1)<10?"0"+t:t});e=e.querySelector(".banner-login-viewall-js");e.classList.add("less"),e.innerText="Thu gọn"}function handleNumIdentity(){document.querySelectorAll(".banner-login-box-js").forEach(e=>{e.querySelectorAll(".banner-login-wrap-js").forEach(e=>{e.querySelectorAll('.banner-login-item:not([type-video="pro"])').forEach((e,t)=>{e.querySelector(".quantity-js").innerText=t=(t+=1)<10?"0"+t:t});const s=e.querySelector(".banner-login-viewall-js");s.onclick=()=>{let t=s.closest(".banner-login-wrap-js");t&&t.querySelectorAll('[type-video="pro"]').forEach(e=>{$(e).stop().slideToggle(()=>{($(e).is(":visible")?moreNumIdentity:lessNumIdentity)(t),toggleAllCourses(t)})})}})})}function toggleAllCourses(e){e=e.closest(".all-courses-parent-js");if(e){let t=e.querySelector(".all-courses-ipt");e.querySelectorAll('.banner-login-item[type-video="pro"]').forEach(e=>{$(e).is(":visible")||(t.checked=!1)})}}allCoursesToggles.forEach(o=>{o.onclick=()=>{var e=o.querySelector(".all-courses-ipt"),t=(e.checked=!e.checked,o.closest(".all-courses-parent-js"));let s=t.querySelectorAll(".banner-login-wrap-js");t&&1==e.checked&&(t.querySelectorAll('.banner-login-wrap-js[type-video="pro"]').forEach(e=>{$(e).slideDown()}),t.querySelectorAll('[type-video="pro"]').forEach(e=>{$(e).slideDown(()=>{s.forEach(e=>{moreNumIdentity(e)})})})),t&&0==e.checked&&(t.querySelectorAll('.banner-login-wrap-js[type-video="pro"]').forEach(e=>{$(e).slideUp()}),t.querySelectorAll('[type-video="pro"]').forEach(e=>{$(e).slideUp(()=>{s.forEach(e=>{lessNumIdentity(e)})})}))}}),handleNumIdentity();