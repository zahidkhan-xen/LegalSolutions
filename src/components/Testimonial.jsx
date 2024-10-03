// import { SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/react"; // Import Swiper modules
// import Swiper from 'swiper';
// import { Navigation} from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import SnippetCards from './SnippetCards'; // Adjust the path as necessary

// const snippets = [
//   { title: "Snippet 1", description: "Description for snippet 1." },
//   { title: "Snippet 2", description: "Description for snippet 2." },
//   { title: "Snippet 3", description: "Description for snippet 3." },
//   // Add more snippets as needed
// ];

// const SnippetSlider = () => {
//   return (
//     <div className="flex flex-row items-center py-10 space-x-8">
//       <Swiper
//         modules={[Navigation, Autoplay]}
//         spaceBetween={10}
//         slidesPerView={3}
//         navigation
//         autoplay={{ delay: 6000, disableOnInteraction: false }}
//         loop
//         breakpoints={{
//           // When the screen width is >= 0px (mobile), show 1 slide
//           0: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           // When the screen width is >= 640px (tablet and larger), show 2 slides
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//           },
//           // When the screen width is >= 1024px (desktop), show 3 slides
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//           },
//         }}
//       >
//         {snippets.map((snippet, index) => (
//           <SwiperSlide key={index}>
//             <SnippetCards
//               title={snippet.title}
//               description={snippet.description}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default SnippetSlider;
