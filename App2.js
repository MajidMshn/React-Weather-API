import React, { useState } from 'react';
import Info from './Info';
import Weather from './Weather';
import axios from 'axios';
import Swal from 'sweetalert2';



const App2 = () => {
    const [city, setCity] = useState('');
    const [info, setInfo] = useState([]);
    const [icon, setIcon] = useState('');

    const [loading, setLoading] = useState(false);
    const convertDate = (item) => {
        return (new Date(item * 1000).toLocaleString("fa", {
            hour: "2-digit", minute: "2-digit",
            second: "2-digit"
        }))
    }
    const getData = async () => {
        setLoading(true);
        try {

            const { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd20d14798c81ad1ecb0c2d5be70b497&units=metric`);
            setIcon(data.weather[0].icon);


            setInfo(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            Swal.fire({
                title: 'خطا !',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'باشه'
            })
        }
    }


    return (
        <div >
            <Weather getData={getData} setCity={setCity} city={city}>
                <Info convertDate={convertDate} info={info} loading={loading} icon={icon} />
            </Weather>
        </div>
    )
}
export default App2;
