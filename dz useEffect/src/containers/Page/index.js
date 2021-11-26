import { useState, useEffect } from "react";
import axios from "axios";

function Page() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState("");
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   // if (!isLoading) {
  //   //   return;
  //   // }

  //   setTimeout(() => {
  //     setData(`Well Come! - ${counter} - ${Math.random()}`);
  //     setIsLoading(false);
  //     setCounter(counter + 1);
  //   }, 2000);
  // }, [counter]);

  const [planet, setPlanet] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dataPlanet = async () => {
      let inf = await axios.get("https://swapi.dev/api/planets/3/");
      setPlanet(
        `Ifo about planet:   ${inf.data.name},  Rotation_period:${inf.data.rotation_period}, Orbital_period:${inf.data.orbital_period}, Climate ${inf.data.climate}`
      );
      setIsLoading(false);
      console.log(inf.data);
    };

    dataPlanet();
  }, []);

  return <>{isLoading ? <i>Loadin...</i> : planet}</>;
  // return <div>{planet}</div>;
}

export default Page;
