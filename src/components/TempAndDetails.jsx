import { FaTemperatureHigh } from "react-icons/fa"
import { formatToLocalTime, iconURLFromCode } from "../services/weatherService";

const TempAndDetails = ({ weather: { details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone } }) => {
    return (
        <div className="flex flex-col items-center justify-center py-8 space-y-6">
            <div className="text-cyan-200 text-2xl text-center">{details}</div>
            <div className="flex justify-around items-center w-full">
                <img src={iconURLFromCode(icon)} alt="" className="w-24 h-20" />
                <p className="text-5xl text-white">{`${temp.toFixed()}°`}</p>
                <div className="text-white font-extralight text-md">
                    <div className="text-sm flex items-center">
                        <FaTemperatureHigh />
                        <p>Real fell: <span>{`${feels_like.toFixed()}°`}</span></p>
                    </div>
                    <div className="text-sm flex items-center">
                        <FaTemperatureHigh />
                        <p>Humidity: <span>{`${humidity.toFixed()}%`}</span></p>
                    </div>
                    <div className="text-sm flex items-center">
                        <FaTemperatureHigh />
                        <p>Wind: <span>{`${speed.toFixed()}km/h`}</span></p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between text-white font-extralight text-sm">
                <div className=" flex items-center">
                    <FaTemperatureHigh />
                    <p className="pl-2">Rise: <span>{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span></p>

                </div>
                <p className="px-2">|</p>
                <div className="text-white flex items-center">
                    <FaTemperatureHigh />
                    <p className="pl-2">Set: <span>{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span></p>

                </div>
                <p className="px-2">|</p>
                <div className="text-white flex items-center">
                    <FaTemperatureHigh />
                    <p className="pl-2">High: <span>{`${temp_max.toFixed()}°`}</span></p>

                </div>
                <p className="px-2">|</p>
                <div className="text-white flex items-center">
                    <FaTemperatureHigh />
                    <p className="pl-2">Low : <span>{`${temp_min.toFixed()}°`}</span></p>
                </div>
            </div>
        </div>
    );
}

export default TempAndDetails;