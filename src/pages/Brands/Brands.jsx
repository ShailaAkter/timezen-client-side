import { Link } from "react-router-dom";
import ContainerBox from "../../components/containers/ContainerBox";
import useBrands from "../../hooks/useBrands";

const Brands = () => 
{
  const brands = useBrands();

  return (
  <ContainerBox title= "TIMEZEN - Watch Brands">
    <h1>All Brands</h1>
    <div className="grid grid-cols-12">
        <div className="col-span-3">
            {
                brands?.map(brand => 
                    <button key={brand._id}>
                        <Link to={`/brand/${brand.slug}`}>
                            {brand.name}
                        </Link>
                    </button>
                )
            }
        </div>
        <div className="col-span-9">

        </div>
    </div>
  </ContainerBox>
  )
}

export default Brands