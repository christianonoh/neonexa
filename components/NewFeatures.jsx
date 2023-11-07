import styles from "@/styles";
import Vrpano from '/public/icons/vrpano.svg'
import Headset from '/public/icons/headset.svg'
import Image from "next/image";

const imgArr = [Vrpano, Headset];

const NewFeatures = ({ title, index, subtitle }) => (
  <div
    key={title}
    className="mt-5 w-1/2"
  >
    <div className={`w-16 h-16 bg-[#323f5d] rounded-2xl mr-6 flex-none font-bold ${styles.flexCenter}`}>
      <Image
        src={imgArr[index]}
        alt={title}
        className="object-contain w-1/2 h-1/2"
      />
    </div>

    <h3 className="font-bold text-white text-lg mt-6 sm:mb-4 mb-2">
      {title}
    </h3>

    <p className="text-[#b0b0b0] font-normal">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
