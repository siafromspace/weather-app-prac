import { DateTime } from "luxon"

const API_KEY = "a37987a1eaa5df7a7e586c81911898ef"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })

    return fetch(url).then(res => res.json())
}

const formatCurrentWeather = (data) => {
    const {
        coord: { lon, lat },
        main: {
            feels_like,
            temp,
            temp_min,
            temp_max,
            humidity
        },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data

    const { main: details, description, icon } = weather[0]

    return { lon, lat, feels_like, temp, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, description, icon, speed }
}

const formatForecastWeather = (data) => {
    let { timezone, hourly, daily } = data
    daily = daily.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, "ccc"),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    })
    hourly = hourly.slice(1, 6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    })
    return { timezone, hourly, daily }
}

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy '| Local Time:' hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)



const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData("weather", searchParams).then(formatCurrentWeather)

    const { lat, lon } = formattedCurrentWeather

    const formattedForecastWeather = await getWeatherData("onecall", {
        lat,
        lon,
        exclude: 'current,minutely,alerts',
        units: searchParams.units
    }).then(formatForecastWeather)

    return { ...formattedCurrentWeather, ...formattedForecastWeather }
}

const iconURLFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData
export { formatToLocalTime, iconURLFromCode }