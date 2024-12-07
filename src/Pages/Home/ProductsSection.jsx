// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import EquipmentCard from '../../components/EquipmentCard';

// const ProductsSection = () => {

//     const equipments = useLoaderData();
//     // console.log (equipments)

//     // //
//     // const loadedCategories = useLoaderData();
//     // const [categories, setCategories] = useState(loadedCategories);

//     return (
//         <div className='w-11/12 mx-auto my-10'>

//             {/* <div className='my-10 '>
//                 <div className='text-3xl font-bold mb-5 text-center'>Sports Categories: {categories.length}</div>

//                 <div className='grid grid-cols-6 gap-3 '>
//                     {
//                         categories.map(category => <button className='btn btn-accent transition-transform transform hover:-translate-y-2'>{category.
//                             category_name} </button>)
//                     }
//                 </div>
//             </div> */}

//             <div className='text-3xl font-bold text-center'>All Products: {equipments.length}</div>
//             <div className='lg:grid grid-cols-3 gap-5 my-5'>
//                 {
//                     equipments.map(singleEquipment => <EquipmentCard
//                         key={singleEquipment._id}
//                         singleEquipment={singleEquipment}
//                     ></EquipmentCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default ProductsSection;

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../../components/EquipmentCard';
import SportsCategories from './SportsCategories';

const ProductsSection = () => {

    const equipments = useLoaderData();

    return (
        <div className='w-11/12 mx-auto my-10'>

            <SportsCategories></SportsCategories>

            <div className='text-3xl font-bold text-center'>All Products: {equipments.length}</div>
            <div className='lg:grid grid-cols-3 gap-5 my-5'>
                {
                    equipments.map(singleEquipment => <EquipmentCard
                        key={singleEquipment._id}
                        singleEquipment={singleEquipment}
                    ></EquipmentCard>)
                }
            </div>
        </div>
    );
};

export default ProductsSection;