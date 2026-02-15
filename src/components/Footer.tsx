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
                        Monday - Friday 7.30 am - 8.00 pm <br />
                        Saturday - Sunday & Public Holidays 9.00 am - 6.00 pm <br />
                        After hours: Please contact the hotel directly <br /><br />
                        </p>
                        {/* Social media*/}
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <p className="text-sm text-gray-400 space-y-3">
                            <a 
                                href="" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                <span className="text-sm">Facebook</span>
                            </a>

                            <a 
                                href="" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-300 hover:text-black transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                                </svg>
                                <span className="text-sm">TikTok</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}