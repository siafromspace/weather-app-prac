import { formatToLocalTime } from "../services/weatherService";

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
    return (
        <div className="flex flex-col space-y-4 text-white items-center">
            <p className="font-extralight text-xl">{formatToLocalTime(dt, timezone)}</p>
            <p className="text-3xl font-bold">{`${name}, ${country}`}</p>
        </div>
    );
}

export default TimeAndLocation;