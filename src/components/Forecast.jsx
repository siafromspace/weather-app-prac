import { iconURLFromCode } from "../services/weatherService";

const Forecast = ({ title, items }) => {
    return (
        <div className="flex flex-col space-y-4">
            <h1 className="text-white uppercase border-b-2 pb-2">{title}</h1>
            <div className="flex justify-between">
                {items.map((item, i) => {
                    return <div key={i} className="flex flex-col items-center text-white">
                        <p>{item.title}</p>
                        <img src={iconURLFromCode(item.icon)} alt="" className="w-20 h-20" />
                        <p>{`${item.temp.toFixed()}°`}</p>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Forecast;