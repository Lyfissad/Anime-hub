


export default function Footer(){
    return(
        <div>
            <div className="mx-auto my-12 font-playful gap-y-2 grid place-items-center">
                    <img src="src/assets/Upset.png" alt="angry girl" className="size-65" />
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
                <div className="flex my-12 mx-auto space-x-20">
                    <p className="text-text-pri font-semibold font-headings">Navigation</p>
                    <div className="font-playful font-light text-text-mute">
                            <ul className="space-y-5">
                                <li>Browse Popular</li>
                                <li>Browse Categories</li>
                                <li>Release Calender</li>
                            </ul>
                    </div>
                </div>
                <hr className="border-px border-lightGray w-[20rem]"></hr>
            </div>
        </div>
    )
}