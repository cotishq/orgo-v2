import SectionHeading from './SectionHeading';
import { MapPin, Phone, Mail } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import markerIconShadow from "leaflet/dist/images/marker-shadow.png"

// Fix for default marker icon
const customIcon = new Icon({
    iconUrl: markerIconPng,
    shadowUrl: markerIconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

export default function LocationMap() {
    const address = "202, Ambegaon Valley, Oppo.Swami Narayan Mandir, Near CCD, Amebgaon KH. Pune , Maharashtra - 411046";
    const position: [number, number] = [18.4552, 73.8370]; // Coordinates for Ambegaon Khurd, Pune

    return (
        <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    subtitle="Find Us"
                    title="Our Location"
                    description="Visit our facility to see our automation solutions in action. We are conveniently located in Pune."
                />

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="grid lg:grid-cols-3">
                        {/* Contact Info Sidebar */}
                        <div className="bg-gray-50 p-8 lg:p-10 space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 mb-1">Address</p>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                202, Ambegaon Valley,<br />
                                                Oppo. Swami Narayan Mandir,<br />
                                                Near CCD, Ambegaon KH,<br />
                                                Pune, Maharashtra - 411046
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 mb-1">Phone</p>
                                            <a href="tel:+917709278809" className="text-gray-600 hover:text-primary transition-colors">
                                                +91 7709278809
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 mb-1">Email</p>
                                            <a href="mailto:hr@orgogroup.in" className="text-gray-600 hover:text-primary transition-colors">
                                                hr@orgogroup.in
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-200">
                                <p className="text-sm text-gray-500 mb-4">
                                    Planning a visit? Give us a call beforehand to schedule a tour of our facility.
                                </p>
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-xl text-center hover:bg-gray-50 transition-colors"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="lg:col-span-2 h-[400px] lg:h-auto min-h-[400px] relative z-0">
                            <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="w-full h-full">
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position} icon={customIcon}>
                                    <Popup>
                                        <div className="font-semibold text-gray-900">OrGo Group</div>
                                        <div className="text-sm text-gray-600">Ambegaon Valley, Pune</div>
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
