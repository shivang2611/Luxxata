// Site content and helpers, extracted from legacy/js/components.js.
// Images point at the WebP files written by scripts/optimize-images.mjs.
export const U = id => '/images/u/' + id + '.webp';
export const IMGMAP = [
  [/giza plateau|pyramids of giza/i,'1760446837269-fc36fea21678'],[/sphinx/i,'1568322445389-f64ac2515020'],[/guide with older/i,'1553913861-c0fddf2619ee'],
  [/children at the pyramids/i,'1705628080778-f86b2f90a114'],[/museum view to giza/i,'1761561044700-4262beec7d63'],
  [/students/i,'1662655558673-4e628102f545'],[/karnak/i,'1584719763904-2799b453ba8d'],[/tomb/i,'1711098288636-32ba6477e73d'],
  [/staircase/i,'1663192365280-3b02f48b36a9'],[/gallery detail/i,'1678640982613-70150a406d0a'],[/gem|museum/i,'1603639204058-a3a4120adef5'],
  [/guided walk/i,'1689876405589-666038511bf9'],[/sharm|terrace|lounge/i,'1709977346891-074c8a1589fb'],[/ship on the nile/i,'1684100096410-fd39cdff91a3'],[/felucca|nile cruise/i,'1770251693846-4167f4c049c6'],
  [/aswan/i,'1777924985270-77559b488014'],[/nile/i,'1774223147023-41a979c9fc7d'],[/luxor/i,'1662567819563-0a5bf182f3a8'],
  [/house reef/i,'1708711973477-1373f8eb65db'],[/reef|marine/i,'1663596679976-d8062b99c344'],[/boat deck/i,'1708711973253-2055a821d5e4'],
  [/room terrace|resort pool/i,'1584050671859-cb590a1e859c'],[/beach dinner/i,'1566288592686-d91a0b04e0e0'],[/sharm|terrace|lounge/i,'1709977346891-074c8a1589fb'],
  [/red sea coast/i,'1708711973477-1373f8eb65db'],[/hurghada|resort|beach/i,'1665643956022-ee053e925743'],[/siwa/i,'1566288623377-bbd84ce50eb1'],
  [/desert/i,'1714229718888-c084daa6836d'],[/cairo/i,'1568322445389-f64ac2515020']
];
export const IMG = s => { const m = IMGMAP.find(([re]) => re.test(s || '')); return U(m ? m[1] : '1760446837269-fc36fea21678'); };
export const B = '#000000', L = '#ABABAB', G = '#000000';
export const PL = {
  'Cairo & Giza': { stay: 'Nile-view five-star hotel, Zamalek or Giza', days: [
    ['Arrive in Cairo', 'Met in arrivals and driven privately to your hotel. The evening is yours.', 'Minimal', 'Evening'],
    ['The Pyramids of Giza', 'The plateau and the Sphinx with a private Egyptologist, early to beat the heat. Back by mid-afternoon.', 'c. 4 km · sand, uneven ground', 'Late afternoon'],
    ['The Grand Egyptian Museum', 'Timed entry, a guided morning through the galleries, lunch on site, then time to return alone.', 'c. 3 km · step-free galleries', 'Afternoon'],
    ['Old Cairo & Khan el-Khalili', 'Coptic and Islamic Cairo, ending in the Khan at dusk.', 'c. 5 km · cobbled lanes', 'Evening'],
    ['Cairo at leisure', 'A free day, with Saqqara and Dahshur available as an option.', 'Your choice', 'All day']] },
  'Nile cruise': { stay: 'Five-star Nile ship, outside cabin with window', days: [
    ['Fly to Luxor & embark', 'Short domestic flight, transfer to your ship, Luxor Temple at sunset.', 'c. 2 km', 'Evening'],
    ['Valley of the Kings', 'The West Bank before the crowds: royal tombs and Hatshepsut’s temple.', 'c. 5 km · steps into tombs', 'Afternoon on deck'],
    ['Karnak, then sail', 'The great hypostyle hall, then south towards Edfu.', 'c. 3 km', 'Afternoon'],
    ['Edfu & Kom Ombo', 'Two riverside temples, sailing between them.', 'c. 3 km', 'Most of the day'],
    ['Aswan & Philae', 'The island temple by boat, then disembark in Aswan.', 'c. 3 km', 'Afternoon']] },
  'Hurghada': { stay: 'Adults-friendly beach resort, sea-view room', days: [
    ['Transfer to the Red Sea', 'Fly or drive to the coast. Check in, then nothing at all.', 'Minimal', 'Afternoon'],
    ['On the Red Sea', 'Beach, pool and spa. Optional guided snorkel by boat.', 'Minimal', 'All day'],
    ['Snorkel day by boat', 'A guided snorkel on the reefs, with lunch aboard.', 'Swimming optional', 'Morning'],
    ['A slow day by the sea', 'Beach, spa or a sunset walk along the front.', 'Minimal', 'All day']] },
  'Red Sea resort': { stay: 'One selected all-inclusive resort, inclusions confirmed in writing', days: [
    ['Arrive at your resort', 'Private transfer from the airport to a resort chosen for your priorities.', 'Minimal', 'Afternoon'],
    ['Beach, pool and spa', 'Settle in. Beach, pool and spa, with an optional boat trip or desert dinner later in the stay.', 'Minimal', 'All day'],
    ['Boat day on the reef', 'An optional boat trip with snorkelling and lunch aboard.', 'Swimming optional', 'Morning'],
    ['Spa and sunset', 'A spa treatment, then dinner by the sea.', 'Minimal', 'Evening'],
    ['Desert dinner', 'An optional evening by 4×4 to a dinner under the stars.', 'Sand', 'Evening'],
    ['A free day', 'Nothing planned. A day trip to Luxor can be added.', 'Your choice', 'All day']] },
  'Sharm el-Sheikh': { stay: 'Boutique resort near Naama Bay', days: [
    ['Arrive in Sharm', 'Transfer to a base chosen for the evenings you want.', 'Minimal', 'Evening'],
    ['Ras Mohammed by boat', 'A full day on the reefs of the national park.', 'Swimming optional', 'Evening'],
    ['Old Market evening', 'Cafés, the Old Market and dinner by the water.', 'c. 2 km', 'Daytime'],
    ['Farsha evening', 'Featured mountain-lounge evening (adults only). Alternatives held for every party.', 'Rocky terraces', 'Daytime'],
    ['Coastal day', 'Beach club, or a desert sunset by 4×4.', 'Minimal', 'All day']] },
  'White Desert': { stay: 'Private desert camp, proper beds and dinner by fire', days: [
    ['Bahariya & the Black Desert', 'A long but scenic drive west, with stops.', 'c. 2 km', 'Evening'],
    ['The White Desert', 'Chalk formations at sunset, a night under the stars.', 'c. 4 km · sand', 'Night']] },
  'Siwa Oasis': { stay: 'Eco-lodge built in traditional kershef', days: [
    ['The road to Siwa', 'A full travel day, broken with rest stops and lunch on the coast.', 'Minimal', 'Evening'],
    ['Shali & Cleopatra’s spring', 'The old mud-brick town and a swim in the spring.', 'c. 3 km', 'Afternoon'],
    ['The Great Sand Sea', 'Dunes by 4×4, hot springs and sunset.', 'c. 2 km · sand', 'Morning'],
    ['Salt lakes & Fatnas island', 'A float in a salt lake, then sunset on Fatnas island.', 'c. 2 km', 'Evening'],
    ['Slow days in Siwa', 'Bikes, palm groves and salt lakes. Nothing scheduled.', 'Your choice', 'All day']] },
  'Marine base': { stay: 'Dive-friendly resort with house reef', days: [
    ['Arrive & check-in', 'Transfer, kit check and an easy house-reef session.', 'Minimal', 'Afternoon'],
    ['Guided reef sessions', 'Boat days matched to your level and certification.', 'Swimming', 'Afternoon'],
    ['Wreck or drift dive', 'A boat day to a wreck or drift site, matched to certification.', 'Swimming', 'Morning'],
    ['Marine park day', 'A full day at a protected reef, with lunch on the boat.', 'Swimming', 'All day'],
    ['Surface interval', 'Rest day: beach, spa or an optional desert dinner.', 'Minimal', 'All day'],
    ['A last dive', 'A relaxed final session, then kit return and packing.', 'Swimming', 'Morning']] },
  'Luxor': { stay: 'Group-suitable hotel, staff rooms adjacent', days: [
    ['Fly to Luxor', 'Arrive and settle. Evening workshop on the day ahead.', 'Minimal', 'Evening'],
    ['Karnak & the West Bank', 'Curriculum-led site visits with an education guide.', 'c. 5 km', 'Evening'],
    ['Valley of the Kings workshop', 'Tomb visits with a hands-on session on reading hieroglyphs.', 'c. 4 km · steps into tombs', 'Morning']] }
};
export const COLLS = [
  { id:'ancient', name:'Ancient Wonders', short:'Ancient', status:'Live', line:'Giza, temples and tombs, well routed.', ph:'Giza plateau at dawn', img:IMG('Giza plateau at dawn'), promise:'See the wonders you have imagined since childhood.', intro:'Giza, Luxor and Aswan in an order that makes sense, with the guiding to bring them to life.', full:true,
    suits:[{t:'First-time visitors',b:'You want the essential sights without guessing which belong in the route.'},{t:'Short-break travellers',b:'Four nights in Cairo can be enough, if planned well.'},{t:'Those who hate rushing',b:'Early starts only where the light or the crowds justify them.'}],
    preview:[{ratio:'4 / 5',ph:'4:5 · Sphinx detail', img:IMG('4:5 · Sphinx detail'),cap:'Giza before nine, ahead of the coaches.'},{ratio:'1 / 1',ph:'1:1 · Karnak columns', img:IMG('1:1 · Karnak columns'),cap:'The hypostyle hall in low sun.'},{ratio:'4 / 5',ph:'4:5 · Tomb interior', img:IMG('4:5 · Tomb interior'),cap:'Valley of the Kings, three tombs chosen for you.'}],
    guideQ:'A short Cairo trip, or a fuller historical route?', guide:[{label:'Option A · 4–5 nights',title:'Cairo, Giza & the GEM',pts:['Pyramids and the museum in depth','One base, no internal flights','Suits a first taste or a short break']},{label:'Option B · 7–8 nights',title:'Cairo, Luxor & Aswan',pts:['Adds the Nile and Upper Egypt','Cruise or hotel-based','Suits a once-in-a-lifetime first visit']}],
    pace:[{time:'07:00',t:'Breakfast, collected by your guide'},{time:'08:00',t:'Giza plateau before the crowds'},{time:'13:00',t:'Long lunch, back to the hotel'},{time:'Evening',t:'Free, or dinner on the Nile'}],
    quote:'We worried about missing something. We did not miss a thing — and never felt hurried.', quoteBy:'Sample review · First-time visitors', priceFrom:'From ₹1,60,000 pp', priceNote:'4–10 nights. Guiding, entrance fees and private transfers included. Flights from Delhi, Mumbai and Bengaluru quoted separately.', article:'First Egypt trip: which sights belong in your route?',
    faqs:[['Can we see everything in a week?','Seven nights covers Cairo, Luxor and Aswan comfortably. Abu Simbel adds a day.'],['Is a cruise or hotels better?','A cruise removes packing and transfers; hotels give more time at each site. The choice guide explains both.'],['When is it too hot?','June to August is very hot in Upper Egypt. Itineraries shift to early mornings in warmer months.']] },
  { id:'nile', name:'Nile Cruises', short:'Nile', status:'Live', line:'The river as the centrepiece.', ph:'Ship on the Nile at dusk', img:IMG('Ship on the Nile at dusk'), promise:'Egypt, seen slowly from the river.', intro:'Cairo and cruise combinations, with ships, cabins and sightseeing compared honestly.' },
  { id:'allinc', name:'All-Inclusive Escapes', short:'Beach', status:'Live', line:'Resort-led, with meal plans made clear.', ph:'Resort beach, morning', img:IMG('Resort beach, morning'), promise:'Time to switch off, with nothing left to guess.', intro:'One carefully chosen resort, meal plans explained in plain terms, excursions only if you want them.', full:true,
    suits:[{t:'Busy couples',b:'You want rest and very few decisions.'},{t:'Families',b:'Pools, kids’ clubs and short transfers.'},{t:'Add-on travellers',b:'A reset after Cairo or a cruise.'}],
    preview:[{ratio:'4 / 5',ph:'4:5 · Pool at dusk', img:IMG('4:5 · Pool at dusk'),cap:'The resort, chosen for its atmosphere.'},{ratio:'1 / 1',ph:'1:1 · Room terrace', img:IMG('1:1 · Room terrace'),cap:'Sea view, confirmed by room type.'},{ratio:'4 / 5',ph:'4:5 · Beach dinner', img:IMG('4:5 · Beach dinner'),cap:'Which restaurants are included.'}],
    guideQ:'What does the meal plan actually cover?', guide:[{label:'All-inclusive',title:'Main restaurant & bars',pts:['Buffet, local drinks','À la carte by reservation','Premium drinks extra']},{label:'Ultra all-inclusive',title:'Most restaurants & premium drinks',pts:['Wider à la carte access','Selected imported drinks','Some spa credit']}],
    pace:[{time:'08:30',t:'Late breakfast'},{time:'10:00',t:'Beach or pool'},{time:'16:00',t:'Spa, or nothing'},{time:'19:30',t:'Dinner by the sea'}],
    quote:'We knew exactly what was included before we arrived. No surprises.', quoteBy:'Sample review · Anniversary couple', priceFrom:'From ₹1,42,000 pp', priceNote:'5–7 nights. Meal plan stated in writing per resort. Flights from Delhi, Mumbai and Bengaluru quoted separately.', article:'What does all-inclusive include at your selected resort?',
    faqs:[['Are drinks included?','Local drinks usually are; premium brands vary. Each proposal lists them.'],['Can we add a day trip?','Yes — Luxor, snorkelling or a desert dinner can be added and priced.'],['Adults-only options?','Yes, adults-only resorts are available on request.']] },
  { id:'sharm', name:'Sharm After Sunset', short:'Sharm', status:'Live', line:'Coastal days, cafés and evenings out.', ph:'Sharm evening terrace', img:IMG('Sharm evening terrace'), promise:'Coastal days and evenings worth staying up for.', intro:'A Sharm base chosen for the evenings you want, with Farsha as a featured experience and alternatives for every party.' },
  { id:'desert', name:'Deserts & Oases', short:'Desert', status:'Live', line:'White Desert, Siwa and Fayoum.', ph:'White Desert formations', img:IMG('White Desert formations'), promise:'Landscapes beyond the familiar Egypt.', intro:'Geographically sensible journeys to the White Desert, Siwa or Fayoum, with comfort and travel time stated up front.' },

];
export const TRIP_IMGS = {"gem":["/images/u/1568322445389-f64ac2515020.webp","/images/u/1777189978576-08b21689fcc9.webp","/images/u/1710211288826-b7df3ab71588.webp","/images/u/1595979904086-471704dc0e81.webp"],"wonders":["/images/u/1705628080778-f86b2f90a114.webp","/images/u/1575501376367-6711b9b5756b.webp","/images/u/1584719763904-2799b453ba8d.webp","/images/u/1653806965178-9402cd880daa.webp"],"paradise":["/images/u/1628503218283-6ddeac69dfea.webp","/images/u/1778402153163-fc9a5fd0131a.webp","/images/u/1632944398987-494eebe663be.webp","/images/u/1738935457539-936fdb320c51.webp"],"reset":["/images/u/1665643956022-ee053e925743.webp","/images/u/1625232279628-0195f7f0fae5.webp","/images/u/1672421186833-5ecacbb76075.webp","/images/u/1566288623377-bbd84ce50eb1.webp"],"reefs":["/images/u/1589308945435-38c3f99b3824.webp","/images/u/1781605572700-fabe908df405.webp","/images/u/1581807307911-3502120a1cb5.webp","/images/u/1777552955794-77aa990a47df.webp"],"sharm":["/images/u/1642032669625-30d27b475a1f.webp"],"pace":["/images/u/1786454474815-f4c69aeab088.webp","/images/u/1707173149159-302e7c89889d.webp","/images/u/1716639154156-db53b75a22ad.webp","/images/u/1782938397688-da16c3e49c25.webp"],"young":["/images/u/1643667802197-ce810e01619d.webp","/images/u/1707172889437-dc6f210ea44a.webp","/images/u/1777715821806-0af9fbd5f3e6.webp"],"desert":["/images/u/1623674587543-9c7564de99d1.webp","/images/u/1778402502974-62d3c32b7111.webp","/images/u/1660151179218-aa39bf1e1b84.webp"],"siwa":["/images/u/1758720944577-559b852e8493.webp","/images/u/1535191059345-c16453b851b2.webp","/images/u/1652377170273-72152e714b96.webp"],"classroom":["/images/u/1775129893678-bdb7df941c7f.webp","/images/u/1523602152629-36bb9217a7b5.webp"]};
export const DESK = { [TRIP_IMGS.gem[0]]: '/images/gem-sphinx-desktop.webp', [TRIP_IMGS.reset[0]]: '/images/reset-1-desktop.webp', [TRIP_IMGS.reset[1]]: '/images/reset-2-desktop.webp', [TRIP_IMGS.reset[3]]: '/images/reset-4-desktop.webp' };
export const STOPS_OLD = { 'Cairo & Giza':[304,97,'r'], 'Nile cruise':[372,350,'l'], 'Luxor':[372,350,'l'], 'Hurghada':[470,372,'l'], 'Red Sea resort':[490,400,'l'], 'Marine base':[505,440,'l'], 'Sharm el-Sheikh':[440,212,'l'], 'White Desert':[225,250,'r'], 'Siwa Oasis':[40,115,'r'] };
TRIP_IMGS.best = ['/images/u/1705628080778-f86b2f90a114.webp', '/images/u/1575501376367-6711b9b5756b.webp', '/images/u/1782938397688-da16c3e49c25.webp', '/images/u/1738935457539-936fdb320c51.webp'];
TRIP_IMGS.feast = ['/images/u/1568322445389-f64ac2515020.webp', '/images/u/1786454474815-f4c69aeab088.webp', '/images/u/1778402153163-fc9a5fd0131a.webp', '/images/u/1584719763904-2799b453ba8d.webp'];
TRIP_IMGS.mystical = ['/images/u/1623674587543-9c7564de99d1.webp', '/images/u/1595979904086-471704dc0e81.webp', '/images/u/1758720944577-559b852e8493.webp', '/images/u/1535191059345-c16453b851b2.webp'];
TRIP_IMGS.oriental = ['/images/u/1643667802197-ce810e01619d.webp', '/images/u/1632944398987-494eebe663be.webp', '/images/u/1716639154156-db53b75a22ad.webp', '/images/u/1642032669625-30d27b475a1f.webp'];
TRIP_IMGS.sharm = ['/images/sharm-1.webp', '/images/sharm-2.webp', '/images/sharm-3.webp', '/images/sharm-4.webp'];
TRIP_IMGS.redsea = ['/images/u/1628503218283-6ddeac69dfea.webp', '/images/u/1665643956022-ee053e925743.webp', '/images/u/1625232279628-0195f7f0fae5.webp', '/images/u/1672421186833-5ecacbb76075.webp'];
TRIP_IMGS.young = ['/images/young-1.webp', '/images/young-2.webp'].concat(TRIP_IMGS.young.slice(2));
TRIP_IMGS.desert = [TRIP_IMGS.desert[0], '/images/desert-2.webp', TRIP_IMGS.desert[2], '/images/desert-4.webp'];
TRIP_IMGS.classroom = [TRIP_IMGS.classroom[0], TRIP_IMGS.classroom[1], '/images/classroom-3.webp'].concat(TRIP_IMGS.classroom.slice(3));
export const REV_PH = { 'Couple':'/images/u/1707665477765-0966a70d50a0.webp', 'Corporate trip':'/images/u/1758518731468-98e90ffd7430.webp', 'Group of friends':'/images/u/1741789596805-2ec6fffd2002.webp', 'Travelling with parents':'/images/u/1760722531515-a2b2d5013879.webp' };
export const TRIP_REVS = {
  gem: [['Couple','4.9','Three hours in the museum felt like twenty minutes. Every detail was handled.'],['Travelling with parents','4.8','Timed entry and a private guide meant no queues and no rushing for my father.'],['Group of friends','4.7','Giza early, the museum at our own pace. A short trip with nothing missed.']],
  wonders: [['Couple','4.9','Cairo, then the Nile. The cruise was the calm half of the trip we needed.'],['Travelling with parents','4.8','Lifts, short walks and long lunches. My parents enjoyed every day of it.'],['Corporate trip','4.7','Seven nights and one point of contact. Easy to run for a team of twelve.']],
  feast: [['Couple','4.8','Giza, the museum and then three quiet nights on the Nile. Short, but nothing felt skipped.'],['Travelling with parents','4.9','One ship, no repacking. Edfu and Karnak were easy at our pace.'],['Group of friends','4.7','A compact trip with the big sites covered. Well organised throughout.']],
  mystical: [['Couple','4.8','Giza, Alexandria and then the quiet of Siwa. A trip with real variety.'],['Group of friends','4.7','The Alexandria day was packed but well paced. Siwa at sunset was the highlight.'],['Travelling with parents','4.6','Long drives, but comfortable vehicles and good stops along the way.']],
  oriental: [['Couple','4.9','Giza, the Valley of the Kings and then three days by the sea. The pace suited us.'],['Group of friends','4.7','The quad and camel evening in Hurghada was a highlight after the temples.'],['Travelling with parents','4.7','Two nights in each place meant no constant packing. The drive to Hurghada was well planned.']],
  redsea: [['Couple','4.8','Two days of Giza and the museum, then three easy days in Sharm. Exactly the balance we wanted.'],['Group of friends','4.7','Farsha at sunset and a day on Tiran Island. Very little to organise ourselves.'],['Couple','4.6','Soft all inclusive meant no bills to think about. A relaxed finish to the trip.']],
  best: [['Couple','4.9','Cairo, a quiet Nile cruise and three days by the sea. Every transfer was handled.'],['Travelling with parents','4.8','Kom Ombo, Edfu and Luxor from the ship meant no hotel changes for my parents.'],['Group of friends','4.7','Giza and the museum, then Karnak, then a beach finish. Great variety.']],
  paradise: [['Couple','5.0','History first, then the Red Sea. We saw everything and still got to rest.'],['Group of friends','4.8','Pyramids, a Nile cruise and a beach finish. Everyone found something to love.'],['Travelling with parents','4.7','The pace was balanced. We never felt rushed from one place to the next.']],
  reset: [['Couple','4.8','The resort was exactly as described, down to which restaurants were included.'],['Travelling with parents','4.9','One resort, no packing and unpacking. Exactly the rest my parents wanted.'],['Group of friends','4.7','Beach, pool and a desert dinner. No planning needed from us.']],
  reefs: [['Group of friends','4.9','Reef sessions matched to each diver’s level. Nobody was left behind.'],['Couple','4.8','The house reef was right outside and the boat days were well run.'],['Corporate trip','4.7','A good team week. Briefings were clear and safety was taken seriously.']],
  sharm: [['Group of friends','4.8','Ras Mohammed by day, the Old Market by night. A great few days.'],['Couple','4.9','Quiet mornings and lovely evenings. Every dinner was booked before we arrived.'],['Corporate trip','4.6','An easy offsite. The evenings out were well chosen for a mixed group.']],
  pace: [['Travelling with parents','5.0','They asked what my parents could comfortably do, and planned around that.'],['Couple','4.8','Late starts and long lunches. Egypt without the rush.'],['Group of friends','4.7','Slow mornings, then the sites. We never felt hurried.']],
  young: [['Family with children','4.9','Our eight-year-old still talks about the pyramids. Short drives and a beach week made it easy.'],['Family with children','4.8','The guide turned the museum into a treasure hunt for the kids.'],['Family with children','4.7','Cairo, then the Red Sea. Well paced for children of different ages.']],
  desert: [['Group of friends','4.9','A night under the stars in the White Desert was the best part of the trip.'],['Couple','4.8','Proper beds and dinner by the fire in the middle of nowhere.'],['Corporate trip','4.7','A memorable offsite. The camp was comfortable and the drive well organised.']],
  siwa: [['Couple','4.9','Slow days, palm groves and the spring. Exactly the quiet we wanted.'],['Group of friends','4.8','The Great Sand Sea by 4×4 at sunset, then no schedule. Perfect.'],['Travelling with parents','4.7','The road is long but the stops were thoughtful. Siwa was worth it.']],
  classroom: [['School group','4.9','Our students used the worksheets at every site. The guides taught at their level.'],['School group','4.8','Staff rooms next door and a clear plan for each day. Teachers could relax.'],['School group','4.7','Safe, well organised and genuinely educational for forty students.']]
};
export const REVIEWS = [{ who:'Couple', img:'/images/u/1707665477765-0966a70d50a0.webp', rating:'4.9', stars:'★★★★★', dim:'', quote:'Every day was planned, and none of it felt rushed.' }, { who:'Corporate trip', img:'/images/u/1758518731468-98e90ffd7430.webp', rating:'4.8', stars:'★★★★★', dim:'', quote:'Easy for twenty colleagues, with no loose ends.' }, { who:'Group of friends', img:'/images/u/1741789596805-2ec6fffd2002.webp', rating:'4.7', stars:'★★★★', dim:'★', quote:'Private guides, great pace, and nobody got lost.' }, { who:'Travelling with parents', img:'/images/u/1760722531515-a2b2d5013879.webp', rating:'5.0', stars:'★★★★★', dim:'', quote:'A gentle pace for my parents, with rest built in.' }];
export const LENMAP = { short:'4–6 nights', mid:'7–8 nights', long:'9 nights +' };
export const TRIPS = [
  { id:'best', name:'Best of Egypt', dur:'8 nights', len:'mid', legs:[['Cairo & Giza',2],['Nile cruise',3],['Hurghada',3]], best:'First-time visitors & couples', pace:2, price:68400, colls:['ancient','nile','allinc'], ph:'Cairo, Nile cruise and Hurghada', img:IMG('Cairo, Nile cruise and Hurghada'), why:'Giza and the Grand Egyptian Museum, a three-night Nile cruise from Aswan to Luxor, then three nights on the Red Sea.', tags:{history:3,cruise:3,relax:2,first:3,couple:2,parents:2,mid:3},
    daysOv:[
      ['Cairo arrival','Met at Cairo International Airport by our representative, who assists with immigration and customs. Private transfer to your hotel.','Minimal','Evening','/images/best-src-image3.webp'],
      ['Pyramids, Sphinx & the Grand Museum','The Pyramids of Cheops, Chephren and Mykerinus and the Great Sphinx, then the Grand Egyptian Museum, the world’s largest archaeological museum.','c. 5 km · sand, uneven ground','Full day','/images/best-src-image8.webp'],
      ['Fly to Aswan & board the Nile cruise','Morning flight to Aswan (flight cost not included). The High Dam, then transfer to your cruise at around noon. Optional felucca ride around the Aswan islands.','Minimal','Afternoon','/images/best-src-image9.webp'],
      ['Kom Ombo, sailing north','Kom Ombo, the double temple of Sobek and Horus, then a day sailing on board. Optional 4am visit to Abu Simbel.','c. 2 km','Morning','/images/best-src-image13.webp'],
      ['Edfu, Esna Lock & Luxor','A horse carriage ride to the Temple of Horus at Edfu, the crossing of the Esna Lock, then Karnak and Luxor Temple.','c. 4 km','Most of the day','/images/best-src-image17.webp'],
      ['Valley of the Kings & on to Hurghada','Check out after breakfast. The Valley of the Kings and the Temple of Queen Hatshepsut, then a private transfer to Hurghada (about 3 hours). Optional sunrise hot air balloon over Luxor.','c. 4 km · steps into tombs','Morning','/images/best-src-image19.webp'],
      ['Hurghada, soft all inclusive','A day at leisure. Optional Paradise Island boat trip with snorkelling, lunch and soft drinks on the yacht.','Minimal','All day','/images/best-src-image22.webp'],
      ['Hurghada, soft all inclusive','A day at leisure. Optional desert safari with quad bikes, a camel ride and an oriental show, with dinner.','Minimal','All day','/images/best-src-image24.webp']
    ],
    depOv:['Hurghada to Cairo & depart','Check out and transfer by private car to Cairo, then on to Cairo International Airport for your departure flight (flight cost not included).','Minimal','Morning'],
    incl:['Two nights in Cairo, breakfast included','Three nights on a Nile cruise, full board','Three nights in Hurghada, soft all inclusive','Private arrival and departure transfers with meet and greet','Luxor to Hurghada and Hurghada to Cairo private transfers','Sightseeing with private AC vehicle, entrance fees and an English-speaking guide'],
    excl:['International and domestic flights','Meals not mentioned in the itinerary','Optional tours','Tips of USD 7 per person per day, paid at once on arrival','5% GST on the total cost','USD 25 one-time interbank remittance charge'],
    opt:['Felucca ride, Aswan','Abu Simbel at 4am','Hot air balloon, Luxor','Paradise Island trip','Desert safari, Hurghada'] },
  { id:'feast', name:'Feast of History', dur:'5 nights', len:'short', legs:[['Cairo & Giza',2],['Nile cruise',3]], best:'History lovers & first-time visitors', pace:2, price:42750, colls:['ancient','nile'], ph:'Giza and the Nile', img:IMG('Giza and the Nile'), why:'Giza and the Grand Egyptian Museum, then three nights on the Nile from Aswan to Luxor.', tags:{history:3,cruise:3,first:2,short:3,couple:1,parents:2},
    daysOv:[
      ['Cairo arrival','Met at Cairo International Airport by our representative, who assists with immigration and customs. Private transfer to your hotel.','Minimal','Evening','/images/best-src-image3.webp'],
      ['Pyramids, Sphinx & the Grand Museum','The Pyramids of Cheops, Chephren and Mykerinus and the Great Sphinx, then the Grand Egyptian Museum, the world’s largest archaeological museum.','c. 5 km · sand, uneven ground','Full day','/images/best-src-image8.webp'],
      ['Fly to Aswan & board the Nile cruise','Morning flight to Aswan (flight cost not included). The High Dam, then transfer to your cruise at around noon. Lunch and dinner on board.','Minimal','Afternoon','/images/best-src-image9.webp'],
      ['Kom Ombo, sailing north','Kom Ombo, the double temple of Sobek and Horus, with lunch and dinner on board. Optional 4am visit to Abu Simbel.','c. 2 km','Morning','/images/best-src-image13.webp'],
      ['Edfu, Esna Lock & Luxor','A horse carriage ride to the Temple of Horus at Edfu, the crossing of the Esna Lock, then Karnak and Luxor Temple.','c. 4 km','Most of the day','/images/best-src-image17.webp']
    ],
    depOv:['Valley of the Kings & depart from Luxor','Check out after breakfast. The Valley of the Kings and the Temple of Queen Hatshepsut, then transfer to Luxor airport for your departure. Optional sunrise hot air balloon over Luxor.','c. 4 km · steps into tombs','Morning','/images/best-src-image19.webp'],
    incl:['Two nights in Cairo, breakfast included','Three nights on a Nile cruise, full board','Private arrival and departure transfers with meet and greet','Sightseeing with private AC vehicle, entrance fees and an English-speaking guide'],
    excl:['International and domestic flights','Meals not mentioned in the itinerary','Optional tours','Tips of USD 7 per person per day, paid at once on arrival','5% GST on the total cost','USD 25 one-time interbank remittance charge'],
    opt:['Abu Simbel at 4am','Hot air balloon, Luxor'] },
  { id:'mystical', name:'Mystical Egypt', dur:'4 nights', len:'short', legs:[['Cairo & Giza',3],['Siwa Oasis',1]], best:'Curious travellers & history lovers', pace:2, price:34200, colls:['ancient','desert'], ph:'Cairo to Siwa', img:IMG('Cairo to Siwa'), why:'Giza, the Grand Egyptian Museum and Alexandria, then a night in the Siwa Oasis.', tags:{history:3,culture:2,nature:2,short:3,friends:1},
    daysOv:[
      ['Cairo arrival','Met at Cairo International Airport by our representative, who assists with immigration and customs. Private transfer to your hotel.','Minimal','Evening','/images/best-src-image3.webp'],
      ['Pyramids, Sphinx & the Grand Museum','The Pyramids of Cheops, Chephren and Mykerinus and the Great Sphinx, then the Grand Egyptian Museum, the world’s largest archaeological museum.','c. 5 km · sand, uneven ground','Full day','/images/best-src-image8.webp'],
      ['Alexandria day tour','A 2.5-hour drive to Alexandria. The Library of Alexandria, the Catacombs, Pompey’s Pillar and a photo stop at the Qaitbay Citadel, then back to Cairo by evening.','c. 3 km · steps in the Catacombs','Full day','/images/myst-src-image9.webp'],
      ['Cairo to Siwa Oasis','Check out and drive by private car to Siwa Oasis. Hotel check-in, dinner and overnight at a Siwa hotel or camp. Breakfast, lunch and dinner included.','Minimal','Afternoon','/images/myst-src-image12.webp']
    ],
    depOv:['Siwa sights & depart from Cairo','Amoun Temple, Shali (old Siwa) and the Oracle Temple of Alexander. Gebel el Mawta and Cleopatra’s Bath, lunch at a local restaurant, and sunset from Ein Fetnas. Then transfer to Cairo airport for your departure flight.','c. 3 km · sand and steps','Full day','/images/myst-src-image14.webp'],
    incl:['Three nights in Cairo, breakfast included','One night in Siwa Oasis, full board','Private arrival and departure transfers with meet and greet','Sightseeing with private AC vehicle, entrance fees and an English-speaking guide'],
    excl:['Egypt entry visa','International and domestic flights','Meals not mentioned in the itinerary','Personal expenses and optional tours','Tips of USD 7 per person per day, paid at once on arrival','5% GST on the total cost','USD 25 one-time interbank remittance charge'],
    opt:[] },
  { id:'oriental', name:'Oriental Escape', dur:'7 nights', len:'mid', legs:[['Cairo & Giza',2],['Luxor',2],['Hurghada',3]], best:'Couples & first-time visitors', pace:2, price:59850, colls:['ancient','allinc'], ph:'Cairo, Luxor and Hurghada', img:IMG('Cairo, Luxor and Hurghada'), why:'Giza and the museum, both banks of Luxor, then three nights on the Red Sea.', tags:{history:3,relax:2,first:2,couple:2,parents:1,mid:3},
    daysOv:[
      ['Cairo arrival','Met at Cairo International Airport by our representative, who assists with immigration and customs. Private transfer to your hotel. Optional 2-hour dinner cruise on the Nile with a folkloric show.','Minimal','Evening','/images/best-src-image3.webp'],
      ['Pyramids, Sphinx & the Grand Museum','The Pyramids of Cheops, Chephren and Mykerinus and the Great Sphinx, then the Grand Egyptian Museum, the world’s largest archaeological museum.','c. 5 km · sand, uneven ground','Full day','/images/best-src-image8.webp'],
      ['Fly to Luxor, West Bank','Morning flight to Luxor (flight cost not included). The Valley of the Kings, the Temple of Queen Hatshepsut and a photo stop at the Colossi of Memnon.','c. 4 km · steps into tombs','Full day','/images/best-src-image19.webp'],
      ['Luxor, East Bank','Karnak Temple, one of the largest religious complexes in the world, then Luxor Temple. Optional sunrise hot air balloon.','c. 4 km','Morning','/images/best-src-image17.webp'],
      ['Luxor to Hurghada','Check out after breakfast and drive by private car to Hurghada (about 4 hours). Hotel check-in, with dinner and overnight at the resort.','Minimal','Afternoon','/images/best-src-image22.webp'],
      ['Hurghada, soft all inclusive','A day at leisure. Optional Paradise Island boat trip with snorkelling, lunch and soft drinks on the yacht.','Minimal','All day','/images/orient-src-image17.webp'],
      ['Hurghada, soft all inclusive','A day at leisure. Optional desert safari with quad bikes, a camel ride and an oriental show, with dinner.','Minimal','All day','/images/best-src-image24.webp']
    ],
    depOv:['Hurghada to Cairo & depart','Check out and transfer by private car to Cairo (flight cost not included), then on to Cairo International Airport for your departure flight.','Minimal','Morning','/images/orient-src-image2.webp'],
    incl:['Two nights in Cairo, breakfast included','Two nights in Luxor, breakfast included','Three nights in Hurghada, soft all inclusive','Private arrival and departure transfers with meet and greet','Sightseeing with private AC vehicle, entrance fees and an English-speaking guide'],
    excl:['Egypt entry visa','International and domestic flights','Optional tours','Tips of USD 7 per person per day, paid to our representative at the first hotel','5% GST on the total cost','USD 25 one-time interbank remittance charge'],
    opt:['Nile dinner cruise, Cairo','Hot air balloon, Luxor','Paradise Island trip','Desert safari, Hurghada'] },
  { id:'redsea', name:'Red Sea Escape', dur:'5 nights', len:'short', legs:[['Cairo & Giza',2],['Sharm el-Sheikh',3]], best:'Couples & friends', pace:1, price:42750, colls:['sharm','allinc'], ph:'Cairo and Sharm', img:IMG('Cairo and Sharm'), why:'Giza and the museum, then three nights in Sharm el-Sheikh on a soft all inclusive basis.', tags:{relax:3,evenings:2,couple:2,friends:2,short:3},
    daysOv:[
      ['Cairo arrival','Met at Cairo International Airport by our representative, who assists with immigration and customs. Private transfer to your hotel.','Minimal','Evening','/images/best-src-image3.webp'],
      ['Pyramids, Sphinx & the Grand Museum','The Pyramids of Cheops, Chephren and Mykerinus and the Great Sphinx, then the Grand Egyptian Museum, the world’s largest archaeological museum.','c. 5 km · sand, uneven ground','Full day','/images/best-src-image8.webp'],
      ['Fly to Sharm el-Sheikh','Check out and fly to Sharm el-Sheikh (flight cost not included). Hotel check-in and dinner with soft drinks. Optional evenings at Farsha Café or Little Buddha in Naama Bay.','Minimal','Afternoon','/images/rse-src-image9.webp'],
      ['Sharm el-Sheikh, soft all inclusive','A day at leisure. Optional Tiran Island boat trip with snorkelling, lunch and soft drinks on the yacht.','Minimal','All day','/images/rse-src-image13.webp'],
      ['Sharm el-Sheikh, soft all inclusive','A day at leisure. Optional desert safari with quad bikes, a camel ride and an oriental show, with dinner.','Minimal','All day','/images/best-src-image24.webp']
    ],
    depOv:['Departure from Sharm el-Sheikh','Check out after breakfast and transfer to Sharm airport for your departure flight.','Minimal','Morning','/images/rse-src-image14.webp'],
    incl:['Two nights in Cairo, breakfast included','Three nights in Sharm el-Sheikh, soft all inclusive','Private arrival and departure transfers with meet and greet','Sightseeing with private AC vehicle, entrance fees and an English-speaking guide'],
    excl:['Egypt entry visa','International and domestic flights','Meals not mentioned in the itinerary','Personal expenses and optional tours','Tips of USD 7 per person per day, paid at once on arrival','5% GST on the total cost','USD 25 one-time interbank remittance charge'],
    opt:['Farsha Café evening','Little Buddha, Naama Bay','Tiran Island trip','Desert safari'] }
];
export const FRAMES = [
  { num:'01', short:'Pyramids', title:'Giza at first light', ph:'Pyramids of Giza', img:IMG('Pyramids of Giza'), coord:'29.98°N · 31.13°E' },
  { num:'02', short:'Museum', title:'The Grand Egyptian Museum', ph:'GEM interior', img:IMG('GEM interior'), coord:'29.99°N · 31.12°E' },
  { num:'03', short:'Nile', title:'Sailing to Aswan', ph:'Nile at Aswan', img:IMG('Nile at Aswan'), coord:'24.09°N · 32.90°E' },
  { num:'04', short:'Coast', title:'Red Sea reefs', ph:'Red Sea coast', img:IMG('Red Sea coast'), coord:'27.26°N · 33.81°E' },
  { num:'05', short:'Desert', title:'White Desert nights', ph:'White Desert', img:IMG('White Desert'), coord:'27.33°N · 28.17°E' }
];
export const STEPS = [
  { label:'Who is travelling?', opts:[['Just the two of us','Couple','couple'],['With my parents','Or for them','parents'],['Friends','Social group','friends']] },
  { label:'What should this holiday give you?', opts:[['Ancient wonders','Pyramids, temples','history'],['Museums & culture','The GEM in depth','culture'],['Switch off','Beach & resort','relax'],['Evenings out','Sharm nights','evenings'],['Desert & nature','Landscapes','nature'],['A Nile cruise','The river','cruise']] },
  { label:'How long do you have?', opts:[['Under a week','4–6 nights','short'],['About a week','7–8 nights','mid']] },
  { label:'When might you travel?', opts:[['Oct – Dec','Diwali & winter breaks',''],['Jan – Mar','Cool, clear',''],['Apr – Jun','Summer vacations',''],['Jul – Sep','Hot, coast best',''],['Not sure yet','We’ll advise','']] },
  { label:'What budget per person?', opts:[['Under ₹2 lakh','',''],['₹2 – 3.5 lakh','',''],['₹3.5 – 5 lakh','',''],['₹5 lakh +','',''],['Help me decide','','']] }
];
export const fmt = n => '₹' + n.toLocaleString('en-IN');
export const chip = (label, on, pick) => ({ label, pick, bg: on ? B : '#FFFFFF', fg: on ? '#FFFFFF' : B, bd: on ? B : L });


