import userImage2 from "../../../assets/images/image2.png";
import userImage3 from "../../../assets/images/image3.png";


const AvatarStack = () => {
  return (
    <div className="flex -space-x-2">
      <div
        className="size-7 rounded-full border-2 border-white dark:border-gray-900 bg-cover"
        style={{
          backgroundImage:`url(${userImage2})`
        }}
      />

      <div
        className="size-7 rounded-full border-2 border-white dark:border-gray-900 bg-cover"
        style={{
          backgroundImage:`url(${userImage3})`
        }}
      />

      <div className="size-7 rounded-full border-2 border-white dark:border-gray-900 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-500">
        +12
      </div>
    </div>
  );
};

export default AvatarStack;
