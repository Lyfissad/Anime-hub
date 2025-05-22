import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer(){
    return(
        <div>
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
                <div className="grid place-items-center bg-gradient-to-b w-full from-vibeBlack to-darkCrim">
                    <div className="flex my-12 mx-auto space-x-14">
                        <p className="text-text-pri font-semibold font-headings">Navigation</p>
                        <div className="font-playful text-sm font-light text-text-mute">
                                <ul className="space-y-5">
                                    <li>Browse Popular</li>
                                    <li>Browse Categories</li>
                                    <li>Release Calender</li>
                                </ul>
                        </div>
                    </div>
                    <hr className="border-px border-lightGray w-[20rem]"></hr>
                    <div className="flex my-12 mx-auto space-x-20">
                        <p className="text-text-pri font-semibold font-headings">Contact Us</p>
                        <div className="font-playful font-light text-sm text-text-mute">
                                <ul className="space-y-5">
                                    <li className="flex"><FaYoutube  className="size-5 relative top-[2px] mr-3"/>Youtube</li>
                                    <li className="flex"><FaFacebookSquare  className="size-5 relative top-[2px] mr-3"/>Facebook</li>
                                    <li className="flex"><FaInstagram  className="size-5 relative top-[2px] mr-3"/>Instagram</li>
                                </ul>
                        </div>
                    </div>
                    <hr className="border-px border-lightGray w-[20rem]"></hr>
                    <div className="flex my-12 mx-auto space-x-20">
                        <p className="text-text-pri font-semibold font-headings">Anime Hub</p>
                        <div className="font-playful font-light text-sm text-text-mute">
                                <ul className="space-y-5">
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
                    <hr className="border-px border-lightGray w-[20rem]"></hr>
                    <h2 className="text-text-mute font-stretched text-3xl mt-4">SONY PICTURES</h2>
                    <h2 className="text-text-mute font-playful mb-4 text-sm">@ Anime Hub,LLC</h2>
                </div>
            </div>
        </div>
    )
}