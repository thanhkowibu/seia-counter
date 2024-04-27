import imageURL from "../../assets/bg.jpg";

export const BackGround = () => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none -z-50 brightness-50 object-top"
      style={{ backgroundImage: `url(${imageURL})` }}
    />
  );
};
