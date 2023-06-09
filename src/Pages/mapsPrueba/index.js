import React, { useEffect } from "react";
import BarraIniciar from "../Barras/BarraIniciar";
import { Loader } from "@googlemaps/js-api-loader";

//initMap();

const Mapas = () => {
  let map;

  async function initMap() {
    const loader = new Loader({
      apiKey: "AIzaSyAILKjLT8vFaOXb3Tdgcz1TDEATap44Qfg",
      libraries: ["maps"],
    });

    await loader.load();
    const google = window.google;

    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

  useEffect(() => {
    initMap();
  }, []);

  return (
    <div>
      <BarraIniciar />
      <div id="map"></div>
    </div>
  );
};

export default Mapas;