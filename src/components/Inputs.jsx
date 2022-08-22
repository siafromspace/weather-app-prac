import { useState } from "react";
import { FaSearch, FaLocationArrow } from "react-icons/fa"
import { toast } from "react-toastify";

const Inputs = ({ setQuery, units, setUnits }) => {
    const [city, setCity] = useState("")

    const handleSearchClick = () => {
        if (city !== "") {
            setQuery({ q: city })
        }
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            toast.info("Fetching users location")
            navigator.geolocation.getCurrentPosition((position) => {
                toast.success("Location fetched!")
                let lat = position.coords.latitude
                let lon = position.coords.longitude
                setQuery({ lat, lon })
            })
        }
    }

    const handleUnitsChange = (e) => {
        const selectedUnit = e.target.name
        if (units !== selectedUnit) setUnits(selectedUnit)
    }

    return (
        <div className="flex justify-between text-white my-4 font-extralight items-center">
            <div className="w-3/4 flex space-x-4">
                <input type="text" placeholder="search for city..." className="first-letter:uppercase h-10 w-72 p-4 focus:outline-none text-black" value={city} onChange={(e) => setCity(e.target.value)} />
                <button className="transition ease-out hover:scale-125" onClick={handleSearchClick}><FaSearch size={20} /></button>
                <button className="transition ease-out hover:scale-125" onClick={handleLocationClick}><FaLocationArrow size={20} /></button>
            </div>
            <div className="flex flex-row space-x-2 items-center">
                <button name="metric" className="transition ease-out hover:scale-125" onClick={handleUnitsChange} >°C</button>
                <p>|</p>
                <button name="imperial" className="transition ease-out hover:scale-125" onClick={handleUnitsChange} >°F</button>
            </div>
        </div >
    );
}

export default Inputs;