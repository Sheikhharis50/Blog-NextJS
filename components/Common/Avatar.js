import Image from "next/image";

const getImageSize = (size) => {
  switch (size) {
    case "s":
      return 50;
    case "m":
      return 100;
    default:
      return 50;
  }
};

const Avatar = ({ classes, size = "s", src = "/images/dummy-user.jpg" }) => {
  const imgsize = getImageSize(size);

  return (
    <div className={classes}>
      <Image src={src} alt="Avatar Picture" width={imgsize} height={imgsize} />
    </div>
  );
};

export default Avatar;
