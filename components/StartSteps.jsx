import styles from "@/styles";

const StartSteps = ({ index, feature }) => (
  <div key={index} className={`flex-row text-white text-lg font-normal mt-5 ${styles.flexCenter}`}>
    <p className={`w-16 h-16 bg-[#323f5d] rounded-2xl mr-6 flex-none font-bold ${styles.flexCenter}`}>
      {`0${index + 1}`}
    </p>
    <p className="text-[#b0b0b0] font-normal">
      {feature}
    </p>
  </div>
);

export default StartSteps;
