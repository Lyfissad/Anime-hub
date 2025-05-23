import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="bg-gradient-to-b from-vibeBlack to-darkCrim w-full py-12">
  <div className="phone:grid phone:grid-cols-1 minitab:grid minitab:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
    {/* Navigation Section */}
    <div className="phone:flex phone:space-x-20 phone:mx-auto minitab:block">
      <h3 className="text-text-pri font-semibold font-headings mb-4">Navigation</h3>
      <ul className="text-text-mute font-playful phone:text-sm space-y-6">
        <li>Browse Popular</li>
        <li>Browse Categories</li>
        <li>Release Calendar</li>
      </ul>
    </div>
    <hr className="minitab:hidden mx-auto border-px border-lightGray w-[20rem]"></hr>

    {/* Contact Us Section */}
    <div className="phone:flex phone:space-x-20 phone:mx-auto minitab:block">
      <h3 className="text-text-pri font-semibold font-headings mb-4">Contact Us</h3>
      <ul className="text-text-mute font-playful text-sm space-y-6">
        <li className="flex items-center">
          <FaYoutube className="mr-7" /> YouTube
        </li>
        <li className="flex text-md items-center">
          <FaFacebookSquare className="mr-7" /> Facebook
        </li>
        <li className="flex items-center">
          <FaInstagram className="mr-7" /> Instagram
        </li>
      </ul>
    </div>
    <hr className="minitab:hidden mx-auto border-px border-lightGray w-[20rem]"></hr>

    {/* Anime Hub Section */}
    <div className="phone:flex phone:space-x-20 phone:mx-auto minitab:block">
      <h3 className="text-text-pri font-semibold font-headings mb-4">Anime Hub</h3>
      <ul className="text-text-mute font-playful phone:text-sm pc:text-md space-y-6">
        <li>About Us</li>
        <li>Help Center</li>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>AdChoices</li>
        <li>Press Inquiries</li>
        <li>Get the App</li>
        <li>Redeem Gift Cards</li>
        <li>Index 2025: 72/100</li>
      </ul>
    </div>
  </div>
  <hr className="minitab:hidden mx-auto border-px border-lightGray w-[20rem]"></hr>

  {/* Footer Bottom */}
  <div className="mt-12 text-center">
    <h2 className="text-text-mute font-stretched text-3xl">SONY PICTURES</h2>
    <p className="text-text-mute font-playful text-sm mt-2">@ Anime Hub, LLC</p>
  </div>
</div>


    )
}


{/* <div>
            <div className="mx-auto mt-12 font-playful gap-y-2 grid place-items-center">
                    <img src="Upset.png" alt="angry girl" className="size-65" />
                <h1 className="font-headings text-text-pri text-lg">
                    Still Looking for something to watch?
                </h1>
                <h3 className="text-text-mute font-playful text-lg mb-2">
                    Check out our library
                </h3>
                <button 
                    className="w-[21rem] h-[3rem] border-3 border-crimAccent rounded-sm text-crimAccent font-headings">
                        VIEW ALL
                </button>
                <div className="bg-gradient-to-b from-vibeBlack to-darkCrim w-full">
                <div className="phone:grid minitab:flex place-items-center w-full">
                    <div className="phone:flex minitab:flex minitab:flex-col minitab:items-start items-center my-12 mx-auto space-x-14">
                        <p className="text-text-pri font-semibold font-headings">Navigation</p>
                        <div className="font-playful text-sm font-light text-text-mute">
                                <ul className="space-y-5">
                                    <li>Browse Popular</li>
                                    <li>Browse Categories</li>
                                    <li>Release Calender</li>
                                </ul>
                        </div>
                    </div>

                    <hr className="minitab:hidden border-px border-lightGray w-[20rem]"></hr>
                    <div className="phone:flex minitab:flex minitab:flex-col minitab:items-start items-center my-12 mx-auto space-x-20">
                        <p className="text-text-pri font-semibold font-headings">Contact Us</p>
                        <div className="font-playful font-light text-sm text-text-mute">
                                <ul className="space-y-5 relative right-6">
                                    <li className="flex"><FaYoutube  className="size-5 relative top-[2px] mr-3"/>Youtube</li>
                                    <li className="flex"><FaFacebookSquare  className="size-5 relative top-[2px] mr-3"/>Facebook</li>
                                    <li className="flex"><FaInstagram  className="size-5 relative top-[2px] mr-3"/>Instagram</li>
                                </ul>
                        </div>
                    </div>


                    <hr className="minitab:hidden border-px border-lightGray w-[20rem]"></hr>
                    <div className="phone:flex minitab:flex minitab:flex-col minitab:items-start items-center my-12 mx-auto space-x-14">
                        <p className="text-text-pri font-semibold font-headings">Anime Hub</p>
                        <div className="font-playful font-light text-sm text-text-mute">
                                <ul className="space-y-5 relative left-1">
                                    <li className="flex">About us</li>
                                    <li className="flex">Help Center</li>
                                    <li className="flex">Terms of services</li>
                                    <li className="flex">Privacy Policy</li>
                                    <li className="flex">AdChoices</li>
                                    <li className="flex">Press inquiries</li>
                                    <li className="flex">Get the App</li>
                                    <li className="flex">Redeem Gift Cards</li>
                                    <li className="flex">Index 2025:72/100</li>
                                </ul>
                        </div>
                    </div>
                    <hr className="minitab:hidden border-px border-lightGray w-[20rem]"></hr>
                </div>
                <div className="mt-10 pb-10 text-center">
                <h2 className="text-text-mute font-stretched text-3xl mt-4">SONY PICTURES</h2>
                <h2 className="text-text-mute font-playful mb-4 text-sm">@ Anime Hub,LLC</h2>
                </div>
                </div>
            </div>
</div> */}