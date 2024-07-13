import ContainerBox from "../components/containers/ContainerBox"
import error from "../assets/images/error.png"
import YellowButton from "../components/buttons/YellowButton"


const PageNotFound = () => 
{
  return (
    <ContainerBox title="404 | Page Not Found!">
      <div className="h-screen flex justify-center items-center text-center">
        <div>
          <img className="lg:max-w-3xl w-full h-auto transition-transform duration-300 transform-gpu hover:scale-110 " src={error} alt="notFound" />
        
          <YellowButton to="/">Go Back to Home</YellowButton>
        </div>
      </div>
    </ContainerBox>
  )
}

export default PageNotFound