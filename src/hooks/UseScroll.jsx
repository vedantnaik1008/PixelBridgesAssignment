// import { useEffect, useState } from "react";

// const UseScroll = () => {
//     const [translateY, setTranslateY] = useState(false);
//     const MAX_SCROLL_HEIGHT = 30; // Increased threshold for better responsiveness

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollTop = window.scrollY;

//             // Only update state if scroll position crosses threshold
//             if (
//                 (currentScrollTop > MAX_SCROLL_HEIGHT && !translateY) ||
//                 (currentScrollTop <= MAX_SCROLL_HEIGHT && translateY)
//             ) {
//                 setTranslateY(currentScrollTop > MAX_SCROLL_HEIGHT);
//             }

//             // Prevent scrolling beyond MAX_SCROLL_HEIGHT
//             if (currentScrollTop > MAX_SCROLL_HEIGHT) {
//                 window.scrollTo({
//                     top: MAX_SCROLL_HEIGHT,
//                     behavior: 'instant'
//                 });
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
//     console.log(translateY);
//   return {translateY, setTranslateY}
// }

// export default UseScroll
