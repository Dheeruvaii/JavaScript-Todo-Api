import React from "react";
import logo from "../assets/logo192.png";

const ImgComponent = ({ img, times, css }) => {
  const id = '';
  const loopArray = Array.from({ length: times }, (_, index) => index + 1);

  return (
    <>
      {Object.values(loopArray).map((item) => {
        if (item === id) {
          return (
            <div
              key={item}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ...css,
              }}
            >
              {item}
              <img
                src={img || logo}
                style={{
                  height: "100px",
                  width: "100px",
                }}
                alt="Logo"
              />
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default ImgComponent;
// import React from "react";
// // import Logo from "../assets/logo192.png"

// const ImgComponent = ({ img, times, css }) => {
//   // return ;
//   const index = times;
//   const id = 8;
//   const loopArray = Array.from({ length: times }, (_, index) => index + 1);
//   // console.log(Object.values(loopArray), "loopArray");
//   return (
//     <>
//       {Object.values(loopArray).map((item) => {
//         if (item === id) {
//           return (
//             <div style={css}>
//               {item}
//               <img
//                 src={img}
//                 style={{
//                   height: "100px",
//                   width: "100px",
//                   // marginBottom: "200px",
//                 }}
//               />
//             </div>
//           );
//         }
//       })}
//     </>
//   );
// };

// export default ImgComponent;
