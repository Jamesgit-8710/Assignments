import axios from "axios";

const whetherApi = "https://api.tomorrow.io/v4/timelines?location=30.704649,-76.717873&fields=temperature&timesteps=1h&units=metric&apikey=pXCdNfncwqEco07ak4kN7xzVPNm0pcNs";

const fetch = (()=> axios.get(whetherApi))




export default WhetherService;