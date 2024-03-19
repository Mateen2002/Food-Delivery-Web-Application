import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { HeartIcon } from "@heroicons/react/solid";

function Footer({ admin }) {
  const router = useRouter();
  const gmailHandler = () => {
    window.open(
      "mailto:" +
      "piyushsati311999@gmail.com" +
      "?subject=" +
      " " +
      "&body=" +
      " ",
      "_self"
    );
  };
  return (
    <div className="bg-gray-800 py-8 px-6 text-gray-200  lg:text-base text-sm">
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center lg:space-x-8 space-x-4">
            <Link href="/">
              <span className="cursor-pointer hover:text-white">Home</span>
            </Link>
            {!admin ? (
              <Link href="/orders">
                <span className="cursor-pointer hover:text-white">Orders</span>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
