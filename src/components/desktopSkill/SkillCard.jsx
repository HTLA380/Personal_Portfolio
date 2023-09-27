import { useStore } from "../store";

const SkillCard = ({ children, id }) => {
  const InViewFeature = useStore((state) => state.inViewFeature);

  return (
    <div
      id={id}
      className={`absolute bg-gradient-to-br flex items-center justify-center text-black rounded-2xl inset-0 transition-opacity  ${
        InViewFeature === id ? "opacity-100" : "opacity-0"
      } `}>
      {children}
    </div>
  );
};

export default SkillCard;
