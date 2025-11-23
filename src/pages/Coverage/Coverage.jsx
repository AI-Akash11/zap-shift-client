import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { BiSearch } from "react-icons/bi";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (e)=>{
    e.preventDefault();

    const location = e.target.location.value;
    const district = serviceCenters.find(c=> c.district.toLowerCase().includes(location.toLowerCase()))

    if(district){
        const coord = [district.latitude, district.longitude]

        mapRef.current.flyTo(coord,11);
    }
  }
  return (
    <div className="p-5 md:p-20  bg-white rounded-2xl space-y-8 md:space-y-12 mb-10 md:mb-20">
      <h2 className="text-3xl md:text-5xl font-bold">We are available in 64 districts</h2>
      <div className="relative">
        <form onSubmit={handleSearch}>
            <label className="input border-r-0">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="location" type="search" className="grow" placeholder="Search" />

        </label>
        <button className="btn btn-primary text-secondary font-semibold md:text-xl border-l-0 absolute left-60 md:left-76"><BiSearch/> Search</button>
        </form>
      </div>

      <hr className="opacity-20"/>
      <p className="text-2xl md:text-3xl font-semibold text-secondary">
        We deliver almost all over Bangladesh
      </p>
      <div className="w-full h-[600px] rounded-2xl overflow-hidden">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="h-[600px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>City: {center.city}</strong> <br />
                Service Area: {center.covered_area.join(", ")}.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
