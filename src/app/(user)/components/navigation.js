
import Link from "next/link";
export default function Navgation(){
    return <header>

        <div >
            <ul className="flex space-x-4 justify-center items-center font-bold text-xl mt-15">
                <li>
                    <Link href="/">Home</Link>

                </li>
                <li>
                    <Link href="/about">About</Link>
                    
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                    
                </li>
            </ul>
        </div>


    </header>
}