import userImage from "../../assets/images/image1.png";

const UserProfile = () => {
  return (
    <div className="p-4 border-t border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-3 p-2">
        <div
          className="bg-center bg-cover rounded-full size-10 border-2 border-primary"
          style={{
            backgroundImage:`url(${userImage})`
          }}
        ></div>

        <div className="flex flex-col">
          <p className="text-sm font-bold text-navy dark:text-white">Tracy Nyono</p>
          <p className="text-xs text-slate-custom">Executive Director</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
