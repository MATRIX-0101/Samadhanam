// import React, { useState } from 'react';
// import prob from './solutions.json';

// import img1 from "../assets/solution/anger.jpg"
// import img2 from "../assets/solution/greed.PNG"
// import img3 from "../assets/solution/confusion.jpg"
// import img4 from "../assets/solution/lackofmotivation.jpg"
// import img5 from "../assets/solution/depression.jpg"
// import img6 from "../assets/solution/pride.jpeg"
// import img7 from "../assets/solution/fear.jpg"
// import img8 from "../assets/solution/controlledmind.jpg"
// import img9 from "../assets/solution/lonliness.jpg"
// import img10 from "../assets/solution/lazy.jpg"
// import img11 from "../assets/solution/discrimination.jpg"
// import img12 from "../assets/solution/peace.jpg"
// import img13 from "../assets/solution/hopeless.jpg"
// import img14 from "../assets/solution/forgetfulness.jpg"
// import img15 from "../assets/solution/forgiveness.jpg"
// import img16 from "../assets/solution/envy.jpg"
// import img17 from "../assets/solution/lossofsomeoneloved.jpg"
// import img18 from "../assets/solution/lust.jpg"
// import img19 from "../assets/solution/temptation.jpg"
// import img20 from "../assets/solution/feelsinful.JPG"

// export default function Solutions() {
//     const [isOpen, setIsOpen] = useState({});

//     const toggleSolution = (problemId) => {
//         setIsOpen(prevState => ({
//             ...prevState,
//             [problemId]: !prevState[problemId]
//         }));
//     };

//     const images = [
//         img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
//         img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
//     ];

//     return (
//         <div className="py-10 bg-gradient-to-r from-teal-200 via-teal-100 to-blue-100">
//             <div className="mb-10 px-4 mx-2 md:mx-10 bg-white p-5 rounded-xl shadow-lg">
//                 <div className="text-center text-black font-serif h-20 flex items-center justify-center text-3xl rounded-t-lg">
//                     Solutions To Your Daily Problems
//                 </div>
//                 <div className="flex flex-wrap justify-center">
//                     {prob.problems.map((problem, index) => {
//                         const { id, name, solutions } = problem;
//                         return (
//                             <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 m-5 transform transition-transform duration-300 hover:scale-105" key={id}>
//                                 <div className="relative flex flex-col text-gray-700 bg-white rounded-xl shadow-md overflow-hidden">
//                                     <div className="relative overflow-hidden rounded-t-xl" style={{height: "220px"}}>
//                                         <img className="w-full" src={images[index]} alt="profile-picture" />
//                                     </div>
//                                     <div className="p-6 text-center">
//                                         <h4 className="mb-2 text-2xl font-semibold text-blue-gray-900">{name}</h4>
//                                         <div className="flex flex-col">
//                                             <button onClick={() => toggleSolution(id)} className="bg-gradient-to-r from-teal-400 to-teal-600 hover:bg-gradient-to-r from-teal-600 to-teal-800 text-white px-4 py-2 rounded-md mb-2 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">Solutions</button>
//                                             {isOpen[id] && (
//                                                 <div className="text-center mt-2">
//                                                     {solutions.map((solution) => (
//                                                         <div key={solution.no}>
//                                                             <a href={solution.link} className="block py-2 text-teal-500 hover:underline hover:text-teal-700">{solution.source}</a>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import prob from './solutions.json';

import img1 from "../assets/solution/anger.jpg"
import img2 from "../assets/solution/greed.PNG"
import img3 from "../assets/solution/confusion.jpg"
import img4 from "../assets/solution/lackofmotivation.jpg"
import img5 from "../assets/solution/depression.jpg"
import img6 from "../assets/solution/pride.jpeg"
import img7 from "../assets/solution/fear.jpg"
import img8 from "../assets/solution/controlledmind.jpg"
import img9 from "../assets/solution/lonliness.jpg"
import img10 from "../assets/solution/lazy.jpg"
import img11 from "../assets/solution/discrimination.jpg"
import img12 from "../assets/solution/peace.jpg"
import img13 from "../assets/solution/hopeless.jpg"
import img14 from "../assets/solution/forgetfulness.jpg"
import img15 from "../assets/solution/forgiveness.jpg"
import img16 from "../assets/solution/envy.jpg"
import img17 from "../assets/solution/lossofsomeoneloved.jpg"
import img18 from "../assets/solution/lust.jpg"
import img19 from "../assets/solution/temptation.jpg"
import img20 from "../assets/solution/feelsinful.JPG"

export default function Solutions() {
    const [isOpen, setIsOpen] = useState({});
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setShowContent(true);
    }, []);

    const toggleSolution = (problemId) => {
        setIsOpen(prevState => ({
            ...prevState,
            [problemId]: !prevState[problemId]
        }));
    };

    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
        img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
    ];

    return (
        <div className={`py-10 ${showContent ? 'slide-in' : ''}`}>
            <div className="mb-10 px-4 mx-2 md:mx-10 bg-white p-5 rounded-xl shadow-lg">
                <div className="text-center text-black font-serif h-20 flex items-center justify-center text-3xl rounded-t-lg">
                    Solutions To Your Daily Problems
                </div>
                <div className="flex flex-wrap justify-center">
                    {prob.problems.map((problem, index) => {
                        const { id, name, solutions } = problem;
                        return (
                            <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 m-5 transform transition-transform duration-300 hover:scale-105 ${showContent ? 'slide-in' : ''}`} key={id}>
                                <div className="relative flex flex-col text-gray-700 bg-white rounded-xl shadow-md overflow-hidden">
                                    <div className="relative overflow-hidden rounded-t-xl" style={{height: "220px"}}>
                                        <img className="w-full" src={images[index]} alt="profile-picture" />
                                    </div>
                                    <div className="p-6 text-center">
                                        <h4 className="mb-2 text-2xl font-semibold text-blue-gray-900">{name}</h4>
                                        <div className="flex flex-col">
                                            <button onClick={() => toggleSolution(id)} className="bg-gradient-to-r from-teal-400 to-teal-600 hover:bg-gradient-to-r from-teal-600 to-teal-800 text-white px-4 py-2 rounded-md mb-2 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">Solutions</button>
                                            {isOpen[id] && (
                                                <div className="text-center mt-2">
                                                    {solutions.map((solution) => (
                                                        <div key={solution.no}>
                                                            <a href={solution.link} className="block py-2 text-teal-500 hover:underline hover:text-teal-700">{solution.source}</a>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


