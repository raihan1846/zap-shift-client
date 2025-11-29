import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
const Coverage = () => {
    const position = [23.6850, 90.3563]
    const serviceCenters = useLoaderData();
    // console.log(serviceCenters);
    const mapRef = useRef()

    const handleSeacrch = e =>{
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenters.find(c=>c.district.toLowerCase().includes(location.toLowerCase()));
        if (district) {
            const coord = [district.latitude, district.longitude];
            // console.log(coord);
            mapRef.current.flyTo(coord, 14)
            
        }

    }
    return (
        <div>
            <h2 className="text5xl">We are available in 64 districts</h2>
            <div>
               <form onSubmit={handleSeacrch}>
                 <div className="join">
                    <div>
                        <label className="input validator join-item">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input type="text" placeholder="Search Your Location" name='location' />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                    <button className="btn btn-neutral join-item">Search</button>
                </div>
               </form>
            </div>
            <div className='border w-full h-[800px]'>
                <MapContainer center={position} zoom={8} scrollWheelZoom={false} className='h-[800px]' ref={mapRef}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        serviceCenters.map((center, index) => <Marker key={index} position={[center.latitude, center.longitude]}>
                            <Popup>
                                {
                                    center.district
                                }
                            </Popup>
                        </Marker>)
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;