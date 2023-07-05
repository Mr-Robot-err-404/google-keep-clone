import Image from "next/image"

export default function Nav() {
    return (
        <nav className="flex w-full h-14 sm:h-16 border-b border-b-gray-600 sticky">
            <div className="flex justify-start items-center h-full ml-2 md:ml-3 w-12">
                <div className="flex justify-center w-12 h-12 hover:bg-slate-700 rounded-full cursor-pointer">
                    <Image src={"/menu-icon.svg"} alt="Menu Icon" width={20} height={20}/>
                </div>
            </div>
            <div className="flex items-center mx-1">
                <Image src={"/keep-icon.png"} alt="Logo" width={50} height={40}/>
            </div>
            <div className="flex justify-center w-full h-full items-center text-white text-lg">
                <h2 className="text-white text-lg">Google Keep Clone</h2>
            </div>
        </nav>
    )
}