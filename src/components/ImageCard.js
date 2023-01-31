import React from "react";

const ImageCard = ({ image }) => {
const desc = image.description;
  const res = desc.substr(0, 40);
  return (
    <div className="bg-white rounded-lg overflow-hidden mx-auto w-48 m-4 space-x-0 sm:w-64">
      <img src={image.image} alt="" className="w-full h-36 md:h-48 object-contain p-2 my-5 rounded-md"/>
      <div className="px-6 py-8">
        <div className="font-bold text-indigo-400 text-lg mb-3">
          {image.name}
        </div>
        <div className="text-indigo-400">
          <ul>
            <li>
              {res}...
            </li>
            <li className="text-base">
              <strong>{image.price}</strong>    
            </li>
            <li className="text-md">
              <strong>Rp.{image.price},-</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
