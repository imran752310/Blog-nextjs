
import Image from "next/image";
import img1 from "../../../public/blog1.jpg";


export default  function Page() {




  return (
    <div className="w-[85%] m-auto py-44">
      <Image
        src={img1}
        alt="Blog Image"
        className="w-full h-[1000px] sm:h-64 object-cover"
        width={400}
        height={400}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 uppercase pt-20">
      Mastering React for Modern Web Development
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui
        doloribus accusantium dignissimos ex dolores quos fugiat, sequi dicta,
        commodi itaque ipsa reiciendis. Fuga commodi fugiat doloremque fugit,
        neque iste.
      </p>
    </div>
  );
}

