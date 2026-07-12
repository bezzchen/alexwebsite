export const navItems = [
  { label: "Rooms", href: "/rooms" },
  { label: "News", href: "/news" },
  { label: "Facilities", href: "/facilities" },
  { label: "Location", href: "/location" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const contactDetails = {
  name: "Alexander Inn",
  address: "21 Alpers Avenue, Newmarket 1023, Auckland, New Zealand",
  freephone: "0508 116 688",
  international: "0064 9 281 2788",
  mapQuery: "21+Alpers+AvenueEpsom,+Auckland+1023,+New+Zealand",
  facebook: "https://www.facebook.com/share/17ygrrQX23/",
};

export const officeHours = [
  "Monday - Friday 7.30 am - 8.00 pm",
  "Saturday - Sunday & Public Holidays 9.00 am - 6.00 pm",
  "After hours: Please contact the hotel directly",
];

export const hotelAlert = [
  "2% percent credit card fee.",
  "Hotel parking is subject to availability.",
  "Tampering with the smoke detectors or fire alarm system may cause a fire alarm activation and will result in a call out service charge of $250.00 +GST and a fire department service charge of $1000.00 + GST. Please contact our front office before taking action by yourself if anything you are unsure of.",
];

export const homeIntro = [
  "Our upmarket rooms and suites located at Newmarket offer high quality modern decor and luxury beds.",
  "We have quiet rooms with double glazing, marble tiled bathrooms, balconies and sun seats to relax on, a quiet night's sleep, and yet only a four-minute flat walk from your accommodation to the bustling fashion and shopping capital of Newmarket, Auckland and the many chic cafes and restaurants, just a stroll away.",
  "Remuera, Epsom, Sky City Casino, Vector Arena, The Museum and Domain, Alexandra Park Raceway, Public Hospitals and Parnell Art Galleries are all a five-minute drive. We are en-route and only 13km from the Auckland International Airport.",
];

export const homeHighlights = [
  {
    title: "Quiet Newmarket Rooms",
    text: "Double glazing, marble tiled bathrooms, modern decor, luxury beds, balconies, and sun seats in selected rooms.",
  },
  {
    title: "Walkable Auckland Base",
    text: "A four-minute flat walk to Newmarket shopping, cafes, restaurants, cinemas, and public transport links.",
  },
  {
    title: "Easy Arrivals",
    text: "Free onsite parking is available subject to availability, with the airport approximately 13km away.",
  },
];

export const facilities = {
  essential: [
    "Free onsite parking for all our guests - subject to availability - no reservations",
    "Convenient central Auckland location",
    "All rooms have Free Wi-Fi Broadband 24/7",
    "Self-contained stylishly decorated rooms & suites",
    "Spa Suites available",
    "All our rooms are serviced daily",
    "10-minute drive to the central city",
    "10-minute walk to City Link buses",
    "10-minute walk to the Newmarket train station",
    "Enroute to the airport (30 min drive)",
    "5-minute walk to Auckland's fashion capital, restaurants, cafes & cinemas",
  ],
  reception: [
    "Lobby/Reception",
    "Reception hours Monday - Friday 7.30 am - 8.00 pm",
    "Reception hours Saturday, Sunday and Public Holiday 8.00 am - 6.00 pm",
    "Mandarin and English-speaking staff",
    "Photocopy, Scanner and postal/courier service available, charges will apply",
    "Safety deposit box at reception",
    "Safe security key card entry to the lobby and rooms",
    "Lifts/Elevator",
    "Wheelchair accessible (through car park)",
    "Stairway",
  ],
  onRequest: [
    "Toothbrush set",
    "Soap",
    "Shavers",
    "Port-a-cot",
    "Highchair",
    "Baby Bath",
    "Laundry service",
    "Hair dryer",
  ],
  checkIn: [
    "Check In 2pm - 8pm Monday - Friday",
    "Check In 2pm - 6 pm Saturday - Sunday and Public Holidays",
    "Check Out is 10am",
  ],
};

export const roomTypes = [
  {
    name: "Upmarket Rooms",
    image: "/images/2.jpg",
    description: "Modern rooms with high quality decor, luxury beds, double glazing, and everything needed for a quiet Auckland stay.",
    features: ["Luxury beds", "Double glazing", "Daily servicing"],
  },
  {
    name: "Self-contained Suites",
    image: "/images/3.jpg",
    description: "Stylishly decorated suites designed for longer stays, relaxed mornings, and easy access to central Auckland.",
    features: ["Kitchen facilities", "Marble tiled bathrooms", "Free Wi-Fi"],
  },
  {
    name: "Spa Suites",
    image: "/images/4.jpg",
    description: "A more indulgent stay option with the same practical comforts, central location, and quiet room setting.",
    features: ["Spa option", "Sun seats", "Central location"],
  },
  {
    name: "Accessible Stays",
    image: "/images/5.jpg",
    description: "Wheelchair access is available through the car park, with lift access and secure key card entry.",
    features: ["Wheelchair access", "Lift access", "Secure entry"],
  },
];

export const discoverCards = [
  {
    title: "Our Facilities",
    href: "/facilities",
    image: "/images/1.jpg",
    text: "Parking, Wi-Fi, serviced rooms, guest support, and practical extras for a smooth stay.",
  },
  {
    title: "Our Rooms",
    href: "/rooms",
    image: "/images/2.jpg",
    text: "Quiet, modern rooms and suites with luxury beds in the heart of Newmarket.",
  },
];

export const locationIntro = [
  "Alexander Inn is conveniently situated at 21 Alpers Avenue, Newmarket, Auckland Central, New Zealand. Read on for the directions to reach our accommodation by various means of transport.",
  "When driving, please note that Alpers Avenue is a one-way street.",
];

export const locationQuickFacts = [
  "1 minute drive from the main arterial route to State Highway 1 and central Auckland City",
  "15 minutes' drive to the central city",
  "Enroute to the airport (30 mins drive)",
  "10 minutes' walk to the train station in Newmarket",
  "10 minutes' walk to Auckland's fashion capital, restaurants, cafes and cinemas",
  "5 min walk to the city link bus system",
];

export type LocationCard = {
  title: string;
  distance: string;
  travel: string;
  description: string;
  featured?: boolean;
  home?: boolean;
};

export const locationCardSections: { title: string; intro: string; cards: LocationCard[] }[] = [
  {
    title: "Major Attractions",
    intro: "Family days, waterfront visits, and Auckland landmarks with practical drive estimates from 21 Alpers Avenue.",
    cards: [
      {
        title: "Auckland Zoo",
        distance: "8.5 km",
        travel: "15-20 min drive",
        description: "Native wildlife, conservation work, and family-friendly animal exhibits near Western Springs.",
      },
      {
        title: "Auckland Stardome Observatory",
        distance: "5.0 km",
        travel: "10-15 min drive",
        description: "Planetarium shows, night-sky sessions, and astronomy exhibits beside One Tree Hill.",
      },
      {
        title: "Kelly Tarlton's Antarctic Encounter",
        distance: "6.5 km",
        travel: "12-18 min drive",
        description: "Aquarium tunnels, penguin encounters, and sea-life displays along Tamaki Drive.",
      },
      {
        title: "New Zealand National Maritime Museum",
        distance: "5.2 km",
        travel: "12-18 min drive",
        description: "Waterfront museum tracing Aotearoa New Zealand's maritime stories and harbour history.",
      },
      {
        title: "Mount Smart Stadium",
        distance: "7.5 km",
        travel: "15-20 min drive",
        description: "Large-scale concerts, sports fixtures, and entertainment events in Penrose.",
      },
    ],
  },
  {
    title: "City Centre & Shopping",
    intro: "Newmarket shopping is close on foot, while central-city icons and waterfront dining are an easy drive.",
    cards: [
      {
        title: "Auckland City, Sky Tower",
        distance: "4.1 km",
        travel: "10-15 min drive",
        description: "Auckland's skyline landmark with observation decks, dining, and central-city connections.",
        featured: true,
        home: true,
      },
      {
        title: "Westfield Shopping Centre",
        distance: "700 m",
        travel: "8-10 min walk",
        description: "Newmarket fashion, dining, rooftop restaurants, cinema access, and everyday essentials.",
        featured: true,
        home: true,
      },
      {
        title: "Woolworths Supermarket",
        distance: "750 m",
        travel: "8-10 min walk",
        description: "A convenient Newmarket grocery stop for snacks, supplies, and longer-stay basics.",
      },
      {
        title: "Event Cinemas",
        distance: "800 m",
        travel: "10 min walk",
        description: "Modern movie theatres beside Newmarket shopping and casual dining options.",
      },
      {
        title: "Princes Wharf",
        distance: "5.4 km",
        travel: "12-18 min drive",
        description: "Harbour views, waterfront restaurants, ferry access, and downtown evening plans.",
      },
      {
        title: "Mission Bay",
        distance: "7.0 km",
        travel: "12-18 min drive",
        description: "Beachfront dining, relaxed promenade walks, and Waitemata Harbour views.",
      },
    ],
  },
  {
    title: "Sports & Entertainment Venues",
    intro: "Event venues across Greenlane, Kingsland, Penrose, and the CBD are within straightforward driving range.",
    cards: [
      {
        title: "ASB Showground",
        distance: "3.0 km",
        travel: "6-10 min drive",
        description: "Exhibitions, shows, and large public events near Greenlane and Epsom.",
      },
      {
        title: "One Tree Hill",
        distance: "4.5 km",
        travel: "10-15 min drive",
        description: "Historic volcanic parkland with walking tracks, open lawns, and city views.",
      },
      {
        title: "Ellerslie Racecourse",
        distance: "4.2 km",
        travel: "8-12 min drive",
        description: "Racing, corporate events, and conference facilities close to Greenlane.",
      },
      {
        title: "Eden Park",
        distance: "5.0 km",
        travel: "12-18 min drive",
        description: "New Zealand's national stadium for rugby, cricket, concerts, and major fixtures.",
        featured: true,
        home: true,
      },
      {
        title: "Spark Arena",
        distance: "3.8 km",
        travel: "8-12 min drive",
        description: "Central Auckland arena for concerts, international acts, sports, and large events.",
        home: true,
      },
    ],
  },
  {
    title: "Medical Facilities",
    intro: "Specialist clinics and major hospitals are close enough for appointments, family visits, and medical travel.",
    cards: [
      {
        title: "Greenlane Hospital",
        distance: "2.3 km",
        travel: "5-8 min drive",
        description: "Specialist outpatient services and clinical care near the Greenlane corridor.",
      },
      {
        title: "Mercy Ascot Hospital Epsom",
        distance: "1.8 km",
        travel: "5-8 min drive",
        description: "Private healthcare, appointments, and specialist services close to Epsom.",
      },
      {
        title: "Ascot Hospital",
        distance: "3.5 km",
        travel: "8-12 min drive",
        description: "Private surgical and medical care within easy reach of Newmarket.",
      },
      {
        title: "Auckland Hospital",
        distance: "2.4 km",
        travel: "6-10 min drive",
        description: "Major public hospital beside Auckland Domain and the central medical precinct.",
        featured: true,
      },
    ],
  },
  {
    title: "Educational Institutions",
    intro: "A practical base for campus visits, school events, interviews, and family appointments.",
    cards: [
      {
        title: "University of Auckland",
        distance: "3.1 km",
        travel: "8-12 min drive",
        description: "Central city campus for university visits, study, conferences, and appointments.",
        featured: true,
        home: true,
      },
      {
        title: "Dilworth",
        distance: "1.7 km",
        travel: "5 min drive",
        description: "Independent boys' school in Epsom, a short drive from Alpers Avenue.",
      },
      {
        title: "Diocesan School for Girls",
        distance: "1.3 km",
        travel: "15-18 min walk",
        description: "Independent girls' school near Epsom and Remuera.",
      },
      {
        title: "St Cuthbert's College",
        distance: "2.2 km",
        travel: "5-8 min drive",
        description: "Independent girls' college on Market Road with quick access from Newmarket.",
      },
      {
        title: "Epsom Girls Grammar School",
        distance: "1.1 km",
        travel: "14 min walk",
        description: "Public girls' high school close to Newmarket, Epsom, and the Domain side of town.",
      },
      {
        title: "Auckland Grammar School",
        distance: "1.6 km",
        travel: "5 min drive",
        description: "Public boys' high school beside Auckland Domain and central transport links.",
      },
      {
        title: "Auckland Museum & Domain",
        distance: "2.0 km",
        travel: "5-8 min drive",
        description: "Museum, war memorial, Wintergardens, and open parkland above Newmarket.",
        featured: true,
        home: true,
      },
    ],
  },
  {
    title: "Recommended Accommodation",
    intro: "Accommodation options from the source card set, adjusted around Alexander Inn as the Newmarket base.",
    cards: [
      {
        title: "Hobson Lodge",
        distance: "4.8 km",
        travel: "10-15 min drive",
        description: "Budget accommodation option closer to the CBD and Aotea precinct.",
      },
      {
        title: "Alexander Inn",
        distance: "0 km",
        travel: "You are here",
        description: "Your Newmarket base at 21 Alpers Avenue, close to shopping, hospitals, schools, and transport.",
        featured: true,
      },
    ],
  },
];

export const homeLocationCards = locationCardSections.flatMap((section) =>
  section.cards.filter((card) => card.home),
);

export const transportDirections = [
  {
    title: "By Car",
    body: [
      "Quality Suites Alexander Inn is at 21 Alpers Avenue, Newmarket. It is a one-way street, so you will have to enter from the Broadway (southern end) of the road or Manukau Road or Great South Road and we are on the right-hand side of the street.",
      "From State Highway 1 (Motorway) Heading North: Exit the motorway at Market Road. Turn left at the top of the off ramp following the Epsom sign to traffic lights (100 metres). Turn right into Great South Road. Drive down Great South Road to the next major intersection with lights (about 1km) and drive straight through the lights (with Honda Cars on your right-hand side) and you are now in Alpers Avenue. The motel is on the right-hand side of the street, and we have a red coloured sign.",
      "From State Highway 1 (Motorway) Heading South: Exit the motorway at Gillies Avenue. Turn left at bottom of off ramp, and then very first right-hand road into Mortimers Pass. At the traffic lights at the bottom of Mortimers Pass turn right into Broadway. Drive approx 200m. Turn right at the traffic lights (Honda should be on your right) into Alpers Avenue. The motel is on the right-hand side of the street, and we have a red colored sign.",
    ],
  },
  {
    title: "By Train",
    body: ["We are 10-minute walk to the Newmarket train station."],
  },
  {
    title: "By Bus",
    body: ["Walk 10 minutes to the Westfield Mall from the motel and you are on the main central city bus loop with leaves every 10 minutes."],
  },
  {
    title: "By Taxi",
    body: ["We are 15-30 minutes from the airport by taxi and about 15 minutes from the city."],
  },
];

export const newsItems = [
  {
    title: "Auckland stays in the heart of Newmarket",
    tag: "Location",
    image: "/images/0.jpg",
    description: "Stay close to Newmarket shopping, cafes, restaurants, public hospitals, Parnell galleries, and central Auckland transport.",
  },
  {
    title: "Quiet rooms after busy city days",
    tag: "Rooms",
    image: "/images/3.jpg",
    description: "Double glazing, luxury beds, daily servicing, and self-contained room options make Alexander Inn a calm base for work or leisure.",
  },
  {
    title: "Practical arrival details",
    tag: "Guest info",
    image: "/images/1.jpg",
    description: "Reception hours, onsite parking availability, and after-hours details are available before you arrive.",
  },
];

export const reviews = [
  {
    meta: "October 23 2023",
    quote: "Excellent clean hotel, your house keeping are very good. Great location and made to welcome. Good luck with your plants you were planting.",
  },
  {
    meta: "October 22 2023",
    quote: "Overall, everything was great. Good shower pressure nice and quiet, street wasn't loud unless the window open (Room 18), was a lovely stay. Good for the price paid.",
  },
  {
    meta: "May 7th 2022",
    quote: "Easy parking and close to mall. Easy check in. Room was spacious. Lift available at the property. Close to mall. Free parking.",
  },
  {
    meta: "July 1st 2022",
    quote: "Excellent place to stay, clean, affordable, close to all specialist medical centres, great staff. Front office lady was super friendly and helpful. Parking was easy and accessible. Room was large, clean and comfortable. Soft bed and crisp bed sheets!",
  },
  {
    meta: "Sept 2021 Room 9",
    quote: "To management of Quality Suites - COVID 19 message. Hi/Bula Vinaka, Namaste - Quality Suites Management. My name is Reena Narayan. I have been deployed from Waikato Public Health Unit to help out with COVID 19 response. I just want to say Thank you for your help and support during Level 4 lockdown from your customer services team. You are Awesome! I want to say out loud that, I really enjoyed my stay in your room 9. Your accommodation facility reminded me of my fathers properties back in Fiji, same setting and very tidy. In addition, we always like to acknowledge and appreciate nice or healthy living space by just looking after it. To conclude please continue doing what you doing under COVID 19 restrictions. Good work! Well done for taking all the measures to eliminate the spread of COVID 19. Love your hard work and an Excellent Customer Services during Lockdown. Rated 10/10. Once again many thanks for having me and am looking forward to booking accommodation with you in the near future for my families. Kia kaha Auckland see you again later!",
  },
  {
    meta: "August 2019 Room 17",
    quote: "Had a fantastic sleep and loved it here. I was quiet and good value and luxiouriously comfy. Thank you Katz.",
  },
  {
    meta: "August 2019 Room 26",
    quote: "Very happy with our stay here last night. Thank you for making it a very easy check in considering reception was closed by the time we got there. It was a lovely clean warm room and comfortable bed. Really enjoyed our stay and will definitely be coming here again and recommending it to friends. Katrina T",
  },
  {
    meta: "20th September 2018",
    quote: "My employer booked for my accommodation for my work trip. I didn't expect the room to be as cosy as this. The room was very homey. I would consider booking again for my personal trips to Auckland. Five out of 5 - Room 3",
  },
  {
    meta: "October 2017",
    quote: "Amazing comfortable room, really good facilities. All the staff were really nice and friendly. I would definitely stay here again and would recommend them to others. We had a great stay - Room 25",
  },
  {
    meta: "October 2017",
    quote: "Separate receptacles for recycling in kitchen/bathroom - Room 16",
  },
  {
    meta: "28th September 2017",
    quote: "Overall, great experience would definitely come back! Feels incredibly spacious for the size and love the seating options, power plugs and facilities. Minor points: no viewer indoor, no way of locking from inside of the room, poor lighting in bathroom as steamed up and took forever to all clear, poor range sky channels.",
  },
  {
    meta: "August 2017",
    quote: "We were very well looked after the rooms are lovely and clean and smell nice, the room service is excellent. The suites are quiet and beds are comfortable. We were extremely well looked after by all staff. Suggestions: The utensil drawer could do with a tin opener and some sharper knives for cutting and meal prep. Also the kettle leaks when you pour. Room 12",
  },
  {
    meta: "27th August 2016",
    quote: "Lovely room, clean, relaxing, everything you need. Great location and great customer service. Room 28",
  },
  {
    meta: "19th May 2016",
    quote: "Spacious, clean, modern room with attention to detail. Bathroom modern, tiled, spacious with free standing, good pressure shower. Kitchen has everything you need plus oven. Overall this motel is one of the best in Auckland",
  },
  {
    meta: "March 2016",
    quote: "Just a one night stopover in Auckland but would definitely stay here for any future stays. Top spot, very courteous staff - Room 28",
  },
  {
    meta: "14th March 2016",
    quote: "As a wheelchair user I have been thoroughly impressed with the access in the motel and our room. The bathroom is lovely and spacious with plenty of room to manage in. The staff are welcoming and friendly, especially the room attendants. Thank you for a wonderful stay. Pancake breakfast was excellent! Erin Inwood",
  },
  {
    meta: "12th March 2016",
    quote: "Very nice clean tidy room. Wheelchair access was excellent. Breakfast was excellent. The taps were a little weak on flow, making ablutions difficult! Room 10",
  },
  {
    meta: "8th October 2015",
    quote: "Beautiful spacious super clean room. Delicious food! Definitely love to come back again! Luxurious relaxing stay. Room 12",
  },
  {
    meta: "13 August 2015",
    quote: "Quality Suites Alexander Inn gave me a beautiful home away from home while on business. The modern rooms with great attention to detail were a lovely place to stay and a nice space to relax in after full days of meetings. Would definitely return to Quality Suites Alexander Inn - an idea for improvement would be bath robes, travelling for only a few days is hard to fit in a robe in a carry on bag, would make the experience more luxorious. Room 17",
  },
  {
    meta: "24 July 2015",
    quote: "A very clean, comfortable and friendly stay. I would come again. Oh and affordable for value as well. Warm & cosy. PS. The plunger coffee was great and the padding on the wonderful bed and excellent touch. Most comfortable bed ever at an overnight stay. No traffic noise due to double glazing. Room 22",
  },
  {
    meta: "June 2015",
    quote: "We really enjoyed our stay. Our room was well catered for and we felt our son was more than welcomed. We will stay again. Room 20",
  },
  {
    meta: "8th June 2015",
    quote: "Great experience. Love that they accommodated my young son without any hassles. From Andrew Surgenor",
  },
  {
    meta: "7th May 2015",
    quote: "Decided to stay here 3 weeks ago when coming to Auckland to visit family and friends, and chose it because of the excellent reviews. Usually we book a hotel in the CBD however we had no particular reason to need to stay right there, and I was sick of seeing the exorbitant parking costs of the 5 star hotels. Quality Suites Alexander Inn fitted the bill perfectly for us with free undercover parking. We asked for a quiet room, and that is just we got, right at the back of the complex. The room was more of an apartment with a kitchenette with a full scale oven that I'm sure had never been used. It was spcacious, modern and spotless with a gorgeous bathroom that would rival any 5 star hotel. On our way out we saw inside some of the vacated rooms and it seems the size and shape of the rooms vary quite a bit. We will definitely stay here another time. Just a 5 minute walk and you're right in the heart of Newmarket. From Gillyflower5",
  },
  {
    meta: "4th April 2015",
    quote: "Nice comfortable accommodation with good service. Good parking at the Inn and also handy for buses into the city. Handy to the trendy Parnell Shops and restaurants. The Auckland water front is a must to visit. From Jenni1949",
  },
  {
    meta: "April 2015",
    quote: "Excellent stay - very clean and comfortable. Which was exactly what I was looking for just to relax and have a peaceful sleep. From Ivana Vaea",
  },
  {
    meta: "March 2015",
    quote: "Stayed one night in Newmarket to attend the Eagles concert. The motel is close enough to go to Nuffield Street for lunch and to and from train station. Large comfortable room with all that we needed. Love the bed with the windows closed it was very quiet. We stayed in Room 11 - 1st floor away from the road. Definitely stay if we needed a base in Auckland. From Kiwisue629",
  },
  {
    meta: "March 2015",
    quote: "The people that run the hotel are just delightful and so accommodating and helpful. From Margaret Gott",
  },
  {
    meta: "February 2015",
    quote: "Kitchen facilities were excellent, as was WIFI. Our room was spotlessly clean and very comfortable. Picked up the coast to coast footpath and walked into Auckland centre via Mount Eden and Auckland Domain, brilliant 2 hour walk. From Susan",
  },
  {
    meta: "January 2015",
    quote: "My family have stayed here a number of times. We have always found the service to be of the highest quality and the staff particularly friendly. From Maree Hood",
  },
  {
    meta: "10th November 2014",
    quote: "Recommended. I will be definitely returning. Enjoyed our stay, warm and friendly atmosphere. Unfortunately only 4 star - Should be 5 star. Room was excellent, it had everything we needed. Hygiencily 100%. Quiet location, rested well. Motel Family is ECO-Friendly - from William Ruru.",
  },
  {
    meta: "June 2014",
    quote: "To Lillian, Uini and all staff, Thank you very much for looking after me so well these last 4 months. All the very best. Ed Butler",
  },
  {
    meta: "March 2014",
    quote: "Room 9 is a wonderful room to stay in. Very quiet, with comfortable beds and lovely and clean. My children and I had a perfect nights sleep and everyone was very happy. Thank you JM",
  },
  {
    meta: "Alexander Inn - Room 17",
    quote: "Excellent stay for 3 nights at Alexander Inn - Room 17. Clean, comfortable and everything I needed. The most comfortable bed I have slept in away from home. Lillian on reception was extremely helpful and friendly - nothing was too much trouble. Highly recommended and would definitely stay again.",
  },
  {
    meta: "19th March 2013",
    quote: "Good morning - I have returned to Masterton after staying in Auckland at the Alexander Inn on Thursday night. I would to thank you for making our stay very enjoyable and for your generosity in letting us leave our car in your car park all day on Friday. We were shopping for a wedding and to not have to worry about moving the car was a considerable help. We did appreciate it and your friendly service. Ruth Eckford",
  },
  {
    meta: "8th September 2013",
    quote: "Enjoyed our stay! Room spotless best we have ever stayed in! Staff very pleasant. Thank you KBS",
  },
  {
    meta: "1st Feb 2013 - Room 1",
    quote: "Rooms are lovely, clean and modern. People friendly and helpful. Great here free parking too - The Qualmark star grading system influenced our decision to stay here.",
  },
  {
    meta: "Room 3",
    quote: "What a wonderful way to start our NZ holiday. The king sized bed was ideal for mature couples like us (who need good lumber support) with its luxurious coveralet & plenty of room to get lost in. The appointments were spotlessly clean with options to dine in if required. In short we were very impressed. Congratulations to the staff who ensure its standards are maintained. We certainly will be back. Regards, Jocelyn & Dan Teka Gold Coast - PS I'm so thrilled to say that the photographs on the internet are exactly what you get, not a 10 year old photo.",
  },
  {
    meta: "Room 10",
    quote: "Suitably impressed - excellent, topgrade, very clean! Quiet, would recommend this - decor excellent.",
  },
  {
    meta: "1/11/12 - Room 15",
    quote: "Fantastic stay the beds are the best we have had in a motel. Very clean & super quiet. Fabulous location. Andrea & Garry Foot",
  },
  {
    meta: "23/10/12 - Room 21",
    quote: "As with previous occasions staying here. The hospitality, welcome, room cleanliness, preparation is excellent I have no hesitation to return and recommend to others of my experience of Alexander Inn. Location close to city, hospitals, motorways, airport, restaurants, & quiet situation adds to my reason to choose Alexander Inn. Robin Sisson - Tauranga",
  },
  {
    meta: "6/10/12 - Room 25",
    quote: "Loved the place and the staff - Sydney Gustafen",
  },
  {
    meta: "7/8/12 - Room 3",
    quote: "Perfect for a business stay - Double glazed windows ensured absolute quietness, spotless clean - C.Hickey",
  },
  {
    meta: "1 & 2/7/12 - Room 6",
    quote: "Next time I need to stay at a motel in New market I will stay at Alexander Inn. It had everything I required and is close to the shops only walking distance away. I also liked the style of the room and felt warm and comfortable, the pillows and bed were amazing. I will be recommending Alexander Inn to colleagues, friends and family. Kellie Hodgson",
  },
];
