import { NavLink } from "react-router-dom"
import {motion} from 'framer-motion'
import useBrands from "../../../hooks/useBrands"

const BrandSubCategory = () => 
{
  const brands = useBrands();
  console.log(brands);

  return (
    <motion.div 
    className="absolute bg-white shadow-lg rounded p-4 w-[250px] h-[auto] "
    initial={{x:-50, opacity:0}}
    animate={{x:-25, opacity:1, transition:{duration:0.5}}}>
        <ul>
            {
              brands?.map(brand =>
              (
                <li key={brand._id} className="p-2 w-full">
                <NavLink className="text-slate-900 hover:text-yellow-700" to= {`/brand/${brand.slug}`}>
                  {brand.name}
                </NavLink>
              </li>
              ))
            } 
        </ul>
    </motion.div>
  )
}

export default BrandSubCategory