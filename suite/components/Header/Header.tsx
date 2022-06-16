import { NextPage } from "next";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";

const Header: NextPage = () => {
    return (
        <div className="flex justify-between m-4">
            <Image src={logo} width={100}/>
			<button className="border-black border p-3 rounded-md">Request Beta Access</button>
        </div>
    );
};
export default Header;
