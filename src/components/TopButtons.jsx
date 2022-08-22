const TopButtons = ({ setQuery }) => {

    const cities = [
        {
            id: 1,
            title: "London"
        },
        {
            id: 2,
            title: "Sydney"
        },
        {
            id: 3,
            title: "Tokyo"
        },
        {
            id: 4,
            title: "Toronto"
        },
        {
            id: 5,
            title: "Paris"
        }
    ]
    return (
        <div className="flex justify-around text-white text-xl font-bold my-4">
            {cities.map(city => {
                return <button key={city.id} onClick={() => setQuery({ q: city.title })}>{city.title}</button>
            })}
        </div>
    );
}

export default TopButtons;