myData = [
[50.0668858,19.9136192, 'aleja Adama Mickiewicza 30, 30-059 Kraków, Poland'],
[52.2394019,21.0150792, 'Krakowskie Przedmieście 5, 00-068 Warszawa, Poland'],
[30.018923,31.499674, 'Parcel 8, 74 S El-Teseen St, NEW CAIRO, Cairo, محافظة القاهرة‬ 11835, Egypt'],
[33.4515401,-112.0645774, '641 E Van Buren St, Phoenix, AZ 85709, USA'],
[38.0399391,23.8030901, 'Monumental Plaza, Building C, 1st Floor, Leof. Kifisias 44, Marousi 151 25, Greece'],
[28.3639976,75.5869681, 'VidyaVihar Campus, Pilani, Rajasthan 333031, India'],
[6.8931574,3.7105118, 'Ilishan Remo Ogun State Nigeria, ILISHAN REMO, Nigeria'],
[25.2677203,82.9912582, 'Kabir Colony, Banaras Hindu University Campus, Varanasi, Uttar Pradesh 221005, India'],
[12.9503249,77.5020564, 'Jnana Bharathi, Bengaluru, Karnataka 560056, India'],
[31.549841,-97.1143146, '1301 S University Parks Dr, Waco, TX 76798, USA'],
[39.9619537,116.3662615, '19 Xinjiekou Outer St, BeiTaiPingZhuang, Haidian Qu, Beijing Shi, China, 100875'],
[53.8930389,27.5455567, 'praspiekt Niezaliežnasci 4, Minsk, Belarus'],
[44.8184339,20.4575676, 'Studentski trg 1, Beograd, Serbia'],
[42.5030333,-89.0309048, '700 College St, Beloit, WI 53511, USA'],
[53.8930389,27.5455567, 'praspiekt Niezaliežnasci 4, Minsk, Belarus'],
[31.262218,34.801461, 'אוניברסיטת ב-גוריון בנגב, ת.ד 653, Beer Sheva, 8499000, Israel'],
[10.6779085,78.7445488, 'Palkalaiperur, Tiruchirappalli, Tamil Nadu 620024, India'],
[42.3504997,-71.1053991, 'Boston, MA 02215, USA'],
[35.3050053,-120.6624942, 'San Luis Obispo, CA 93407, USA'],
[34.1821786,-117.3235324, '5500 University Pkwy, San Bernardino, CA 92407, USA'],
[51.5210038,-0.1746353, '25 Paddington Green, London W2 1NB, UK'],
[40.8075355,-73.9625727, '116th St & Broadway, New York, NY 10027, USA'],
[52.0743967,-0.6293078, 'College Rd, Cranfield MK43 0AL, UK'],
[50.1030364,14.3912841, 'Zikova 1903/4, 166 36 Praha 6, Czechia'],
[43.7044406,-72.2886935, 'Hanover, NH 03755, USA'],
[37.3195396,-122.0450548, '21250 Stevens Creek Blvd, Cupertino, CA 95014, USA'],
[51.37759,7.49462, 'Universitätsstraße 11, 58084 Hagen, Germany'],
[48.4331922,35.0427966, 'Haharina Ave, 72, Dnipropetrovsk, Dnipropetrovsk Oblast, Ukraine, 49000'],
[38.4308451,27.1369785, 'Kültür Mahallesi, Cumhuriyet Blv No:144, 35220 Konak/İzmir, Turkey'],
[39.9566127,-75.1899441, '3141 Chestnut St, Philadelphia, PA 19104, USA'],
[30.2849185,-97.7340567, 'Austin, TX 78712, USA'],
[36.0014258,-78.9382286, 'Durham, NC 27708, USA'],
[45.786447,4.764139, '23 Avenue Guy de Collongue, 69130 Écully, France'],
[48.7654688,2.288493, 'Grande Voie des Vignes, 92290 Châtenay-Malabry, France'],
[36.1048749,-79.5038882, '100 Campus Drive, Elon, NC 27244, USA'],
[55.4884307,8.4467103, 'Spangsbjerg Kirkevej 103, 6700 Esbjerg, Denmark'],
[-2.1481458,-79.9644885, 'Km 30., Vía Perimetral 5, Guayaquil, Ecuador'],
[51.2473822,6.7916469, 'Münsterstraße 156, 40476 Düsseldorf, Germany'],
[47.7239467,13.0864957, 'Urstein Süd 1, 5412 Salzburg, Austria'],
[-23.6956454,-46.5468501, 'Av. Pereira Barreto, 400 - Baeta Neves, São Bernardo do Campo - SP, 09634-050, Brazil'],
[45.2461012,19.8516968, 'Trg Dositeja Obradovića 6, Novi Sad 106314, Serbia'],
[40.7542444,-73.4282131, '2350 Broadhollow Rd, Farmingdale, NY 11735, USA'],
[-19.8690878,-43.9663841, 'Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG, 31270-901, Brazil'],
[26.3739379,-80.1015277, '777 Glades Rd, Boca Raton, FL 33431, USA'],
[42.7793667,-72.0560856, '40 University Dr, Rindge, NH 03461, USA'],
[26.1535593,91.6630313, 'Gopinath Bordoloi Nagar, Guwahati, Assam 781014, India'],
[38.8315541,-77.3120885, '4400 University Dr, Fairfax, VA 22030, USA'],
[38.8977953,-77.0129087, '600 New Jersey Ave NW, Washington, DC 20001, USA'],
[33.753068,-84.3852819, 'Atlanta, GA 30302, USA'],
[42.9097484,-85.7630885, 'Grandville, MI, USA'],
[50.8748542,4.7077677, 'Andreas Vesaliusstraat 13, 3000 Leuven, Belgium'],
[21.0056183,105.8433475, '1 Đại Cồ Việt, Lê Đại Hành, Hai Bà Trưng, Hà Nội, Vietnam'],
[31.7945578,35.2414009, 'Jerusalem'],
[17.445388,78.3482302, 'Gachibowli, Hyderabad, Telangana 500032, India'],
[26.5123388,80.2329, 'Kalyanpur, Kanpur, Uttar Pradesh 208016, India'],
[59.3954769,24.6643815, 'Raja 4, 12616 Tallinn, Estonia'],
[39.1766135,-86.513017, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[45.4376934,12.3223365, 'Santa Croce, 191, 30135 Venezia VE, Italy'],
[41.8348731,-87.6270059, '3300 S Federal St, Chicago, IL 60616, USA'],
[41.500374,-88.178946, '1215 Houbolt Rd, Joliet, IL 60431, USA'],
[12.9914929,80.2336907, 'Indian Institute Of Technology, Chennai, Tamil Nadu, India'],
[22.3149274,87.3105311, 'IIT Kharagpur, Kharagpur, West Bengal 721302, India'],
[23.8143819,86.4412022, 'Sardar Patel Nagar, Dhanbad, Jharkhand 826004, India'],
[39.1766135,-86.513017, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[39.1766135,-86.513017, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[14.7168891,-17.4556996, 'Allees Khalifa Ababacar Sy, Dakar, Senegal'],
[39.106401,-76.951581, '15319 Briarcliff Manor Way, Burtonsville, MD 20866, USA'],
[18.487876,-69.962292, 'Av. de Los Próceres 49, Santo Domingo 10602, Dominican Republic'],
[17.445388,78.3482302, 'Gachibowli, Hyderabad, Telangana 500032, India'],
[52.2766124,104.2777287, 'ul. Karla Marksa, 1, Irkutsk, Irkutskaya oblast, Russia, 664003'],
[22.5015762,88.3666091, 'Prince Anwar Shah Road, Poddar Nagar, Jadavpur, Kolkata, West Bengal 700032, India'],
[17.4946257,78.3921576, 'Kukatpally, Hyderabad, Telangana 500085, India'],
[28.540214,77.1661949, 'New Mehrauli Road, Munirka, New Delhi, Delhi 110067, India'],
[32.4950392,35.9912257, 'Ar Ramtha, Irbid, Jordan'],
[39.1974437,-96.5847249, 'Manhattan, KS 66506, USA'],
[2.7402008,101.7081373, 'KL International​ Airport (KUL), 64000 Sepang, Selangor, Malaysia'],
[42.290035,-85.598145, '1200 Academy St, Kalamazoo, MI 49006, USA'],
[54.898991,23.912825, 'K. Donelaičio g. 73, Kaunas 44249, Lithuania'],
[54.898991,23.912825, 'K. Donelaičio g. 73, Kaunas 44249, Lithuania'],
[55.790447,49.1214349, 'Kremlyovskaya St, 18, Kazan, Respublika Tatarstan, Russia, 420000'],
[41.1490629,-81.3414649, '800 E Summit St, Kent, OH 44240, USA'],
[49.9958165,36.241777, 'Marshala Bazhanova St, 13, Kharkiv, Kharkiv Oblast, Ukraine, 61000'],
[13.6517367,100.4949226, '126 Pracha Uthit Rd, Khwaeng Bang Mot, Khet Thung Khru, Krung Thep Maha Nakhon 10140, Thailand'],
[50.4488824,30.4572542, 'Peremohy Ave, 37, Kyiv, Ukraine, 03056'],
[50.4488824,30.4572542, 'Peremohy Ave, 37, Kyiv, Ukraine, 03056'],
[50.443718,30.5138183, 'Tarasa Shevchenko Blvd, 14, Kyiv, Ukraine, 01601'],
[46.4667708,-80.9742332, '935 Ramsey Lake Rd, Sudbury, ON P3E 2C6, Canada'],
[10.4999879,-66.931549, '#68 1020, Calle Matapalo, Caracas 1020, Distrito Capital, Venezuela'],
[51.7537146,19.4517176, 'Stefana Żeromskiego 116, 90-924 Łódź, Poland'],
[49.8406108,24.0225099, 'Universytetska St, 1, Lviv, Lviv Oblast, Ukraine, 79000'],
[42.701848,-84.4821719, '220 Trowbridge Rd, East Lansing, MI 48824, USA'],
[13.0660293,80.2831719, 'Navalar Nagar, Chepauk, Triplicane, Chennai, Tamil Nadu 600005, India'],
[53.4218295,58.9813841, 'pr. Lenina, 38, Magnitogorsk, Chelyabinskaya oblast, Russia, 455000'],
[34.304073,48.8452846, 'Hamadan Province, ملایر، University Blvd, Iran'],
[39.4145456,-81.4491067, '215 5th St, Marietta, OH 45750, USA'],
[24.4335115,54.6176592, 'Masdar City,Khalifa City A,Opp - Airport Road Home WTC AUH - Abu Dhabi - United Arab Emirates'],
[44.8195126,20.459315, 'Studentski trg 16, Beograd 105104, Serbia'],
[42.701848,-84.4821719, '220 Trowbridge Rd, East Lansing, MI 48824, USA'],
[39.8899947,32.7803278, 'Üniversiteler Mahallesi, Eskişehir Yolu No:1, 06800 Çankaya/Ankara, Turkey'],
[37.9542949,-91.7740414, '1870 Miner Circle, Rolla, MO 65409, United States'],
[-37.9015913,145.1155133, 'Monash, VIC, Australia'],
[-37.9114731,145.1344641, 'Wellington Rd, Clayton VIC 3800, Australia'],
[-38.311211,146.429409, 'Northways Rd, Churchill VIC 3842, Australia'],
[25.6515649,-100.28954, 'Av. Eugenio Garza Sada 2501 Sur, Tecnológico, 64849 Monterrey, N.L., Mexico'],
[55.649567,37.6638742, 'Kashira Highway, 31, Moskva, Russia, 115409'],
[55.9294231,37.5185145, 'Institutskiy per., 9, Dolgoprudnyy, Moskovskaya oblast, Russia, 141701'],
[55.7039349,37.5286696, 'ul. Leninskiye Gory, 1, Moskva, Russia, 119991'],
[22.2534697,84.9011321, 'Sector - 2, Rourkela, Odisha 769008, India'],
[40.7295134,-73.9964609, 'New York, NY 10003, USA'],
[21.1468555,79.050062, 'Amravati Road, Ram Nagar, Nagpur, Maharashtra 440033, India'],
[1.3483099,103.6831347, '50 Nanyang Ave, Singapore 639798'],
[31.3961507,75.5353566, 'N.I.T. Post Office, G T Road, Jalandhar, Punjab 144011, India'],
[25.0173405,121.5397518, 'No. 1, Section 4, Roosevelt Rd, Da’an District, Taipei City, Taiwan 10617'],
[-12.024022,-77.0481441, 'Av. Túpac Amaru s/n, Rimac, Lima 25, Perú, Av. Tupac Amaru 210, Rímac Lima 25, Peru'],
[41.773016,-88.1434895, '30 N Brainard St, Naperville, IL 60540, USA'],
[42.3398067,-71.0891717, '360 Huntington Ave, Boston, MA 02115, USA'],
[42.0564594,-87.675267, '633 Clark St, Evanston, IL 60208, USA'],
[55.1372019,36.6064735, 'Студенческий городок, 1, Obninsk, Kaluzhskaya oblast, Russia, 249034'],
[36.8855515,-76.3067676, '5115 Hampton Blvd, Norfolk, VA 23529, USA'],
[42.2586823,-121.7836222, '3201 Campus Dr, Klamath Falls, OR 97601, USA'],
[19.4445363,-70.683252, 'Autopista Duarte Km 1 1/2, Santiago De Los Caballeros 51000, Dominican Republic'],
[35.8012314,51.5028533, 'Tehran Province, تهران، اتوبان ارتش کوی نفت, خیابان نخل، Iran'],
[40.7982133,-77.8599084, 'Old Main, State College, PA 16801, USA'],
[45.4781071,9.2272764, 'Piazza Leonardo da Vinci, 32, 20133 Milano MI, Italy'],
[44.4386064,26.0494925, 'Splaiul Independenței 313, București 060042, Romania'],
[45.7537285,21.2251368, 'Piața Victoriei 2, Timișoara 300006, Romania'],
[12.0219328,79.8574832, 'Kalapet, Puducherry, 605014, India'],
[-33.4411279,-70.6407933, 'Av Libertador Bernardo OHiggins 340, Santiago, Región Metropolitana, Chile'],
[45.5110182,-122.6831836, '1825 SW Broadway, Portland, OR 97201, USA'],
[39.7738832,-86.1763393, '420 University Blvd, Indianapolis, IN 46202, USA'],
[12.9237077,77.4986878, 'Mysuru Road, R. V. Vidyanikethan Post, Bengaluru, Karnataka 560059, India'],
[42.730172,-73.678803, '110 8th St, Troy, NY 12180, USA'],
[41.0815079,-74.1746234, '505 Ramapo Valley Rd, Mahwah, NJ 07430, USA'],
[43.0861017,-77.6705143, '1 Lomb Memorial Dr, Rochester, NY 14623, USA'],
[10.7285151,79.0184082, 'Thirumalaisamudram, Thanjavur, Tamil Nadu 613401, India'],
[59.941894,30.2989199, 'University Embankment, 7/9, Sankt-Peterburg, Russia, 199034'],
[59.9295233,30.2965598, 'Bolshaya Morskaya ul., 67, Sankt-Peterburg, Russia, 190000'],
[60.007357,30.372899, 'Politekhnicheskaya ul., 29, Sankt-Peterburg, Russia, 195251'],
[37.721897,-122.4782094, '1600 Holloway Ave, San Francisco, CA 94132, USA'],
[37.3351874,-121.8810715, '1 Washington Sq, San Jose, CA 95192, USA'],
[31.0252201,121.4337784, '800 Dongchuan Rd, Minhang Qu, China, 200240'],
[35.7036366,51.351593, 'Tehran, Azadi Avenue، Iran'],
[10.408363,-66.8755735, 'Sartenejas, Caracas, Miranda, Venezuela'],
[49.2780937,-122.9198833, '8888 University Dr, Burnaby, BC V5A 1S6, Canada'],
[54.7848868,32.0462608, 'ul. Przhevalskogo, 4, Smolensk, Smolenskaya oblast, Russia, 214000'],
[38.3393866,-122.6741812, '1801 E Cotati Ave, Rohnert Park, CA 94928, USA'],
[47.2247678,39.7285959, 'Bolshaya Sadovaya ul., 105, Rostov, Rostovskaya oblast, Russia, 344006'],
[44.4332166,26.1009718, 'Strada Ion Ghica 13, București 030167, Romania'],
[37.4274745,-122.169719, '450 Serra Mall, Stanford, CA 94305, USA'],
[-22.8184393,-47.0647206, 'Cidade Universitária Zeferino Vaz - Barão Geraldo, Campinas - SP, 13083-970, Brazil'],
[43.450851,-76.543438, '7060 New York 104, Oswego, NY 13126, USA'],
[-33.9328078,18.864447, 'Stellenbosch Central, Stellenbosch, 7600, South Africa'],
[42.0590153,-71.0806276, '320 Washington St, North Easton, MA 02357, USA'],
[59.438742,24.771645, 'Narva mnt 25, 10120 Tallinn, Estonia'],
[59.395884,24.671431, 'Ehitajate tee 5, 12616 Tallinn, Estonia'],
[61.4497952,23.8586408, 'Korkeakoulunkatu 10, 33720 Tampere, Finland'],
[30.7924391,30.9991409, 'El-Gaish, Tanta Qism 2, Tanta, Gharbia Governorate, Egypt'],
[32.7474661,-97.3278753, '1500 Houston St, Fort Worth, TX 76102, USA'],
[46.769299,23.585613, 'Strada Memorandumului 28, Cluj-Napoca 400114, Romania'],
[32.7767783,35.0231271, 'Haifa, 3200003, Israel'],
[32.1133141,34.8043877, 'Tel Aviv-Yafo, Israel'],
[31.7691587,35.1937099, 'יעקב שרייבום 26, ירושלים, 9103501, Israel'],
[56.9508098,24.1163132, 'Raiņa bulvāris 19, Centra rajons, Rīga, LV-1586, Latvia'],
[53.4668498,-2.2338837, 'Oxford Rd, Manchester M13 9PL, UK'],
[-25.7676588,28.1992637, '1 Preller St, Muckleneuk, Pretoria, 0002, South Africa'],
[38.053147,-84.4936508, '300 N Broadway, Lexington, KY 40508, USA'],
[42.4074843,-71.1190232, '419 Boston Ave, Medford, MA 02155‎, USA'],
[37.8718992,-122.2585399, 'Berkeley, CA 94720, USA'],
[34.068921,-118.4451811, 'Los Angeles, CA 90095, USA'],
[32.8800604,-117.2340135, '9500 Gilman Dr, La Jolla, CA 92093, USA'],
[40.1019523,-88.2271615, 'Champaign, IL, USA'],
[46.8186613,-92.0835669, '1049 University Dr, Duluth, MN 55812, USA'],
[-25.7676588,28.1992637, '1 Preller St, Muckleneuk, Pretoria, 0002, South Africa'],
[-34.5998875,-58.3730695, 'Calle Viamonte 430, 1053 Buenos Aires, Argentina'],
[41.406498,2.1945432, 'Rambla del Poblenou, 156, 08018 Barcelona, Spain'],
[34.0223519,-118.285117, 'Los Angeles, CA 90007, USA'],
[43.076592,-89.4124875, 'Madison, WI 53706, USA'],
[10.49065,-66.8919913, 'Caracas, Capital District, Venezuela'],
[40.4478246,-3.7285872, 'Av. Séneca, 2, 28040 Madrid, Spain'],
[6.2468468,-75.5617397, 'Colombia #41-70, Medellín, Antioquia, Colombia'],
[19.4369695,-99.1353464, 'Calle Republica de Cuba 79, Centro Histórico, 06060 Ciudad de México, CDMX, Mexico'],
[9.9986861,-84.1111858, 'Heredia Province, Heredia, Costa Rica'],
[4.6381938,-74.0840464, 'Cra 45, Bogotá, Colombia'],
[-16.500656,-68.134299, 'Colombia 154, La Paz, Bolivia'],
[-34.5998875,-58.3730695, 'Calle Viamonte 430, 1053 Buenos Aires, Argentina'],
[38.9940439,-3.9204979, 'Avda. Camilo José Cela, s/n, 13071 Ciudad Real, Cdad. Real, Spain'],
[4.6028443,-74.0648433, 'Cra. 1 #18a-12, Bogotá, Colombia'],
[10.1732454,-64.6525884, 'Via Alterna, Puerto La Cruz, Anzoátegui, Venezuela'],
[14.5841461,-90.5554114, 'Ciudad Universitaria, 11 Av, Guatemala 01012, Guatemala'],
[41.6569271,-4.7140547, 'C/Plaza de Santa Cruz, 8, 47002 Valladolid, Spain'],
[4.8615787,-74.0325368, 'Campus Universitario, autopista norte de Bogota km 7, Puente Del Comun, Chía, Cundinamarca, Colombia'],
[14.603762,-90.489248, '18 Avenida 11-95, Guatemala 01015, Guatemala'],
[-7.1367475,-34.8455092, 'Cidade Universitária, s/n - Castelo Branco III, João Pessoa - PB, 58051-900, Brazil'],
[-27.6003609,-48.5195857, 'Campus Reitor João David Ferreira Lima, s/n - Trindade, Florianópolis - SC, 88040-900, Brazil'],
[-30.0338411,-51.2185702, 'Av. Paulo Gama, 110 - Farroupilha, Porto Alegre - RS, 90040-060, Brazil'],
[-22.9541412,-43.1753638, 'Av. Pedro Calmon, 550 - Cidade Universitária, Rio de Janeiro - RJ, 21941-901, Brazil'],
[38.7368192,-9.138705, 'Av. Rovisco Pais 1, 1049-001 Lisboa, Portugal'],
[-23.5613991,-46.7307891, 'Butantã, São Paulo - State of São Paulo, 05508-090, Brazil'],
[41.5598965,-8.3966231, 'R. da Universidade, 4710-057 Braga, Portugal'],
[-7.7713847,110.3774998, 'Bulaksumur, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281, Indonesia'],
[39.481059,-0.341067, 'Camí de Vera, s/n, 46022 València, Valencia, Spain'],
[50.6696875,4.6155909, 'Place de lUniversité 1, 1348 Louvain-la-Neuve, Belgium'],
[53.3053439,-6.220654, 'University College Dublin, Stillorgan Rd, Belfield, Dublin 4, Ireland'],
[48.14966,11.5678602, 'Arcisstraße 21, 80333 München, Germany'],
[41.076655,-81.5113386, '302 E Buchtel Ave, Akron, OH 44325, USA'],
[53.5232189,-113.5263186, '116 St & 85 Ave, Edmonton, AB T6G 2R3, Canada'],
[52.3558182,4.9557263, '1098 XH Amsterdam, Netherlands'],
[36.0678324,-94.1736551, 'Fayetteville, AR 72701, USA'],
[37.968196,23.7786871, 'Athens 157 72, Greece'],
[44.8184339,20.4575676, 'Studentski trg 1, Beograd, Serbia'],
[52.4508168,-1.9305135, 'Birmingham B15 2TT, UK'],
[-34.5998875,-58.3730695, 'Calle Viamonte 430, 1053 Buenos Aires, Argentina'],
[52.2042666,0.1149085, 'The Old Schools, Trinity Ln, Cambridge CB2 1TN, UK'],
[35.654866,-97.471463, '100 N University Dr, Edmond, OK 73034, USA'],
[41.7886079,-87.5987133, '5801 S Ellis Ave, Chicago, IL 60637, USA'],
[39.1329219,-84.5149504, '2600 Clifton Ave, Cincinnati, OH 45220, USA'],
[40.007581,-105.2659417, 'Boulder, CO 80309, USA'],
[41.8077414,-72.2539805, 'Storrs, CT 06269, USA'],
[32.8481339,-96.9216857, '1845 E Northgate Dr, Irving, TX 75062, USA'],
[47.5535039,21.6214756, 'Debrecen, Egyetem tér 1, 4032 Hungary'],
[39.6779504,-75.7506114, 'Newark, DE 19716, USA'],
[49.5978804,11.0045507, 'Schloßplatz 4, 91054 Erlangen, Germany'],
[51.8777259,0.9472069, 'Wivenhoe Park, Colchester CO4 3SQ, UK'],
[38.5685418,-7.910526, 'R. Romão Ramalho 59, 7000-671 Évora, Portugal'],
[29.6436325,-82.3549302, 'Gainesville, FL 32611, USA'],
[57.6981719,11.971878, '405 30 Gothenburg, Sweden'],
[54.0949653,13.374584, 'Domstraße 11, 17489 Greifswald, Germany'],
[53.5665641,9.9846195, '20146 Hamburg, Germany'],
[21.296939,-157.8171118, '2500 Campus Rd, Honolulu, HI 96822, USA'],
[60.1726348,24.9510419, 'Yliopistonkatu 4, 00100 Helsinki, Finland'],
[8.4910464,4.5951506, '1515, Unilorin Staff Quarters, Amodu Bello Way, Ilorin, Nigeria'],
[9.6838304,80.0233331, 'Puliyadi Ln, Kokuvil East, Sri Lanka'],
[38.9543439,-95.2557961, '1450 Jayhawk Blvd, Lawrence, KS 66045, USA'],
[8.503333,76.947513, 'Senate House Campus, Palayam, Thiruvananthapuram, Kerala 695034, India'],
[51.5229378,-0.1308206, 'Senate House, Malet St, Bloomsbury, London WC1E 7HU, UK'],
[36.719939,-4.4161214, 'Av. de Cervantes, 2, 29016 Málaga, Spain'],
[3.1201068,101.6545492, 'Jalan Universiti, 50603 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia'],
[53.4668498,-2.2338837, 'Oxford Rd, Manchester M13 9PL, UK'],
[42.2780436,-83.7382241, '500 S State St, Ann Arbor, MI 48109, USA'],
[38.9403808,-92.3277375, 'Columbia, MO 65211, USA'],
[6.796877,79.9017781, 'Bandaranayake Mawatha, Katubedda, Moratuwa 10400, Sri Lanka'],
[19.0711224,72.8559959, 'Kalina, Santacruz East, Mumbai, Maharashtra 400098, India'],
[40.8201966,-96.7004763, '1400 R St, Lincoln, NE 68588, USA'],
[40.8201966,-96.7004763, '1400 R St, Lincoln, NE 68588, USA'],
[41.2907035,-72.9616437, '300 Boston Post Rd, West Haven, CT 06516, USA'],
[-33.917347,151.2312675, 'Sydney NSW 2052, Australia'],
[41.7055716,-86.2353388, 'Notre Dame, IN 46556, USA'],
[35.2058936,-97.4457137, '660 Parrington Oval, Norman, OK 73019, USA'],
[45.4231064,-75.6831329, '75 Laurier Ave E, Ottawa, ON K1N 6N5, Canada'],
[51.7548164,-1.2543668, 'Oxford OX1 3BD, UK'],
[45.406766,11.8774462, 'Via 8 Febbraio 1848, 2, 35122 Padova PD, Italy'],
[45.1878756,9.1562335, 'Corso Str. Nuova, 65, 27100 Pavia PV, Italy'],
[39.9522188,-75.1932137, 'Philadelphia, PA 19104, USA'],
[37.9416261,23.6530238, 'Karaoli & Dimitriou St. 80, Πειραιάς 185 34, Greece'],
[-25.7545492,28.2314476, 'Elandspoort 357-Jr, Pretoria, 0132, South Africa'],
[40.9613376,-5.6669251, '37008 Salamanca, Spain'],
[-23.5613991,-46.7307891, 'Butantã, São Paulo - State of São Paulo, 05508-090, Brazil'],
[43.856883,18.4188848, 'Obala Kulina bana 7/II, Sarajevo 71000, Bosnia and Herzegovina'],
[34.0223519,-118.285117, 'Los Angeles, CA 90007, USA'],
[-33.9328078,18.864447, 'Stellenbosch Central, Stellenbosch, 7600, South Africa'],
[58.3810843,26.7198659, 'Ülikooli 18, 50090 Tartu, Estonia'],
[35.7022849,51.3957114, 'Tehran Province, Tehran, District 16, Azar St، Enghelab Square, Iran'],
[30.2849185,-97.7340567, 'Austin, TX 78712, USA'],
[30.2849185,-97.7340567, 'Austin, TX 78712, USA'],
[43.6628917,-79.3956564, '27 Kings College Cir, Toronto, ON M5S, Canada'],
[48.5294782,9.043774, 'Geschwister-Scholl-Platz, 72074 Tübingen, Germany'],
[52.2410326,6.8524128, 'Drienerlolaan 5, 7522 NB Enschede, Netherlands'],
[40.7649368,-111.8421021, '201 Presidents Cir, Salt Lake City, UT 84112, USA'],
[48.2131855,16.3600504, 'Universitätsring 1, 1010 Wien, Austria'],
[52.2403463,21.0186012, 'Krakowskie Przedmieście 26/28, 00-927 Warszawa, Poland'],
[47.6553351,-122.3035199, 'Seattle, WA 98105, USA'],
[47.7589,-122.1906495, '18115 Campus Way NE, Bothell, WA 98011, USA'],
[43.4722854,-80.5448576, '200 University Ave W, Waterloo, ON N2L 3G1, Canada'],
[30.5469345,-87.2160218, '11000 University Pkwy, Pensacola, FL 32514, USA'],
[43.076592,-89.4124875, 'Madison, WI 53706, USA'],
[31.4789841,74.2661627, 'Canal Bank Rd, Lahore, Pakistan'],
[-26.191716,28.032858, '1 Jan Smuts Avenue, Braamfontein, Johannesburg, 2001, South Africa'],
[54.7223235,25.3357359, 'Saulėtekio al. 11, Vilnius 10221, Lithuania'],
[54.6825757,25.2876469, 'Universiteto g. 3, Vilnius 01513, Lithuania'],
[37.5489872,-77.4534286, '907 Floyd Ave, Richmond, VA 23284, USA'],
[37.2283843,-80.4234167, 'Blacksburg, VA 24061, USA'],
[18.4638871,73.8679719, '666, Upper Indiranagar, Bibvewadi, Pune, Maharashtra 411037, India'],
[52.2403463,21.0186012, 'Krakowskie Przedmieście 26/28, 00-927 Warszawa, Poland'],
[46.7319225,-117.1542121, 'Pullman, WA, USA'],
[42.3591388,-83.0665462, '42 W Warren Ave, Detroit, MI 48202, USA'],
[41.1924454,-111.9418739, '3848 Harrison Blvd, Ogden, UT 84408, USA'],
[31.9037541,34.8080315, 'Herzl St 234, Rehovot, Israel'],
[40.6848059,-111.8698679, '4001 S 700 E #700, Salt Lake City, UT 84107, USA'],
[39.1493644,-84.4745119, '3800 Victory Pkwy, Cincinnati, OH 45207, USA'],
[30.5877119,31.4827891, 'Shaibet an Nakareyah, Markaz El-Zakazik, Ash Sharqia Governorate 44519, Egypt'],
[33.6851641,73.0545042, 'Ashfaq Ahmed Road, H-8/2، Islamabad 44000, Pakistan'],
[33.4535383,-112.0731216, '411 N Central Ave, Phoenix, AZ 85004, USA'],
[39.1974437,-96.5847249, 'Manhattan, KS 66506, USA'],
[40.4478246,-3.7285872, 'Av. Séneca, 2, 28040 Madrid, Spain'],
[38.28923,21.785369, 'Panepistimioupoli Patron, Patra 265 04, Greece'],
[45.406766,11.8774462, 'Via 8 Febbraio 1848, 2, 35122 Padova PD, Italy'],
[36.1447034,-86.8026551, '2201 West End Ave, Nashville, TN 37235, USA']
];
