import Image from "next/image";
import Link from "next/link";

export default function Footer () {
    return (
        <footer className="w-full border-b border-gray-20 bg white">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        {/* Hotel Alert */}
                        <h3 className="text-lg font-semibold mb-4">Hotel Alert</h3>
                        <p className="text-sm text-gray-400">
                        2% percent credit card fee.<br /><br />

                        Hotel parking is subject to availability.<br /><br />

                        “Tampering with the smoke detectors or fire alarm system may cause a fire alarm activation and will result in a call out service charge of $250.00 +GST and a fire department service charge of $1000.00 + GST. Please contact our front office before taking action by yourself if anything you are unsure of.”
                        </p>
                    </div>

                    <div>
                        {/* Contact */}
                        <h3 className="text-lg font-semibold mb-4">Contact details</h3>
                        <p className="text-sm text-gray-400">
                        Alexander Inn <br />
                        21 Alpers Avenue, Newmarket 1023, Auckland, New Zealand<br /><br />

                        Freephone (NZ only)<br />
                        0508 116 688<br /><br />

                        Internationally<br />
                        0064 9 281 2788
                        </p>
                    </div>

                    <div>
                        {/* Hours */}
                        <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                        <p className="text-sm text-gray-400">
                        Office hours<br />
                        Monday - Friday 7.30 am - 8.00 pm <br />
                        Saturday - Sunday & Public Holidays 9.00 am - 6.00 pm <br />
                        After hours: Please contact the hotel directly
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}