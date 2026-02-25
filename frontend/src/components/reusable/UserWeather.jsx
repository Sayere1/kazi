import {WiDaySunny} from "react-icons/wi";

const UserWeather = () => {
  return (
    <div className="p-0.5 border-t border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-3 p-2">

        {/* Weather Icon */}
        <div
          className="bg-center bg-cover rounded-full size-10 border-2 border-primary"
        >
            <WiDaySunny size={36} color="gold" />
        </div>

        {/* Weather Info */}
        <div className="flex flex-col">
          <p className="text-sm font-bold text-navy dark:text-white">
            Berlin • 3°
          </p>

          <p className="text-xs text-slate-custom">
            Saturday • 17:31 • Cloudy
          </p>

          <div className="flex gap-3 mt-1 text-[11px] text-slate-500 dark:text-slate-300">
            <span>Humidity: 72%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserWeather;