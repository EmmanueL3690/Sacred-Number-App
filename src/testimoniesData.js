const testimoniesData = {
//   // === H Solutions ===
//   "1H": { 
//     id: "1H",
//     title: "Section One - 1H",
//     content: "Ewu nla ti yio sele. Aare yoo se enikan, sugbon yoo gbadun",
//     category: "Warning & Leadership",
//   },
//   "2H": {
//     id: "2H",
//     title: "Section Two - 2H",
//     content: "Nkan ti o lo lowo re yoo pada. Onibeere yo ma se inawo anadanu",
//     category: "Financial Recovery",
//   },
//   "3H": {
//     id: "3H",
//     title: "Section Three - 3H",
//     content:
//       "Yoo ri ore ni ojo kewa osu ti n bo, ki o beloun ki ewu nla masele si o",
//     category: "Friendship & Protection",
//   },
//   "4H": {
//     id: "4H",
//     title: "Section Four - 4H",
//     content: "Mura tori wahala ota. Dukia wa kan nbe nita, ki a gba",
//     category: "Enemy Warning & Wealth",
//   },
//   "5H": {
//     id: "5H",
//     title: "Section Five - 5H",
//     content: "Ko belorun lori omo, enikan yoo saare, sugbon ko ni ku",
//     category: "Child Protection & Safety",
//   },
//   "6H": {
//     id: "6H",
//     title: "Section Six - 6H",
//     content: "Enikan yoo ku, ki a ma losi ibe",
//     category: "Death Warning",
//   },
//   "7H": {
//     id: "7H",
//     title: "Section Seven - 7H",
//     content: "Iyawo re yoo ko sile, Obinrin kan nje ni bebe iku",
//     category: "Marriage & Relationship",
//   },
//   "8H": {
//     id: "8H",
//     title: "Section Eight - 8H",
//     content:
//       "Ija adugbo ti yoo kan iwo papa. Ki onibeere yi se saara lori iku",
//     category: "Community Conflict",
//   },
//   "9H": {
//     id: "9H",
//     title: "Section Nine - 9H",
//     content:
//       "Ma paya irorun nbo, inawo tabi fifo nkan to robe lorun ki awon ota maa",
//     category: "Peace & Enemy Protection",
//   },
//   "1@4": {
//     "id": "1@4",
//     "title": "Section One - 1@4",
//     "content": "oyun nbo. Olokiki ni idile baba, won mo doro duro de nile baba",
//     "category": "Family & Childbirth"
//   },
//   "2@4": {
//     "id": "2@4",
//     "title": "Section One - 2@4",
//     "content": "obinrin/omo. YOO MA RI IDUNNU LARIN OMO BABA RE, PAPA ORO TO JEMO OWO, OMO RE KAN YOO MA FEWO, OKUNRIN NI OMO NA",
//     "category": "Family & Wealth"
//   },
//   "3@4": {
//     "id": "3@4",
//     "title": "Section One - 3@4",
//     "content": "yoo fe obinrin alarisi ki sora fun amubo (amubo ndalamu). Onibeere yoo fe obinrin kan o dara/Amubo, AWON AGBALAGBA NI IDILE BABA NDA LAAMU",
//     "category": "Marriage & Warnings"
//   },
//   "4@4": {
//     "id": "4@4",
//     "title": "Section One - 4@4",
//     "content": "se sara fun oku orun, ipejo lori oro kan, NI IDILE BABA, ALAYO, YOO RI IDUNNU NINU GBOGBO ADAWOLE",
//     "category": "Spiritual & Family"
//   },
//   "5@4": {
//     "id": "5@4",
//     "title": "Section One - 5@4",
//     "content": "Iwo yoo ko obinrin/okunrin kan sile, YOO RI SE NINU OMO BABA RE",
//     "category": "Marriage"
//   },
//   "6@4": {
//     "id": "6@4",
//     "title": "Section One - 6@4",
//     "content": "Aisowo lowo, nkan ko dara, ENIKAN YOO SARE NI IDILE BABA...",
//     "category": "Wealth & Warning"
//   },
//   "7@4": {
//     "id": "7@4",
//     "title": "Section One - 7@4",
//     "content": "AWON AJE ILE BABA NDA ALANIYAN LAAMU, KO MURA",
//     "category": "Enemies & Warning"
//   },
//   "8@4": {
//     "id": "8@4",
//     "title": "Section One - 8@4",
//     "content": "mojuto ara re ati omo. Obinrin kan nbe ni emi wa kama fe...",
//     "category": "Health & Family"
//   },
//   "9@4": {
//     "id": "9@4",
//     "title": "Section One - 9@4",
//     "content": "Iyawo re yoo ko o, hunhun n be larin ololufe meji be lori aseri...",
//     "category": "Marriage & Family"
//   },
//   "10@4": {
//     "id": "10@4",
//     "title": "Section One - 10@4",
//     "content": "Obinrin/okunrin yoo mafi se faari. A o fe obinrin/okunrin to yodi...",
//     "category": "Marriage & Childbirth"
//   },
//   "11@4": {
//     "id": "11@4",
//     "title": "Section One - 11@4",
//     "content": "Obinrin kan wuwa lati fe, o dara. ALANIYAN NRI IDIWO LATI IDILE BABA",
//     "category": "Marriage & Family"
//   },
//   "12@4": {
//     "id": "12@4",
//     "title": "Section One - 12@4",
//     "content": "Ao fe obinrin dudu kan, odara. ILE DADA NI SUGBON AWON YOO MA BA SOTA SUGBON YOO JERI WON",
//     "category": "Marriage & Enemies"
//   },
//   "13@4": {
//     "id": "13@4",
//     "title": "Section One - 13@4",
//     "content": "Ikosile laarin ololufe meji... Ikosile yio bi asasi dukia yio pare.",
//     "category": "Divorce & Wealth"
//   },
//   "14@4": {
//     "id": "14@4",
//     "title": "Section One - 14@4",
//     "content": "Ijaya wa fun o, sora fun sina. Iyawo wa ko gba wa gbo no trust.",
//     "category": "Enemies & Marriage"
//   },
//   "15@4": {
//     "id": "15@4",
//     "title": "Section One - 15@4",
//     "content": "Yoo je eniti yoo gbe ogo idile Baba ga nipase ise ijoba",
//     "category": "Destiny & Government"
//   },
//   "16@4": {
//     "id": "16@4",
//     "title": "Section One - 16@4",
//     "content": "Yio ma ri oun ibinu, ko sora pelu dukia ile obi, meeting nile baba...",
//     "category": "Wealth & Warning"
//   },
//   "4,1": {
//     "id": "4,1",
//     "title": "Section Two - 4,1",
//     "content": "Ko mura ki elomiran ma je ore nkan ti anse lowo",
//     "category": "Enemies & Warning"
//   },
//   "4,2": {
//     "id": "4,2",
//     "title": "Section Two - 4,2",
//     "content": "Ki o mura tori amubo aya, ati ase yori",
//     "category": "Marriage Warning"
//   },
//   "4,3": {
//     "id": "4,3",
//     "title": "Section Two - 4,3",
//     "content": "Won yoo mu oro eni ti ara re ko yawa aye lowa nibe",
//     "category": "Enemies"
//   },
//   "4,4": {
//     "id": "4,4",
//     "title": "Section Two - 4,4",
//     "content": "omo kekere tabi obinrin yoo sawa",
//     "category": "Family"
//   },
//   "4,6": {
//     "id": "4,6",
//     "title": "Section Two - 4,6",
//     "content": "Aanu olorun wa fun o mura tori ota",
//     "category": "Enemies & Prayer"
//   },
//   "4,7": {
//     "id": "4,7",
//     "title": "Section Two - 4,7",
//     "content": "Obinrin eletan kan nbo sora",
//     "category": "Enemies"
//   },
//   "4,8": {
//     "id": "4,8",
//     "title": "Section Two - 4,8",
//     "content": "Won yoo fun lo binrin lati ipase ore re",
//     "category": "Marriage & Warning"
//   },
//   "4,9": {
//     "id": "4,9",
//     "title": "Section Two - 4,9",
//     "content": "Ki o mura ki o le ba eniyan gbe",
//     "category": "Enemies & Warning"
//   },
//   "4,10": {
//     "id": "4,10",
//     "title": "Section Two - 4,10",
//     "content": "Ki oma ja si ogun (dukia)",
//     "category": "Wealth & Conflict"
//   },
//   "4,11": {
//     "id": "4,11",
//     "title": "Section Two - 4,11",
//     "content": "Obirin ti o ba sun nbo",
//     "category": "Marriage"
//   },
//   "4,14": {
//     "id": "4,14",
//     "title": "Section Two - 4,14",
//     "content": "Obirin ka yoo ta o lore okere ni yoo ti wa",
//     "category": "Marriage & Help"
//   },
//   "4,15": {
//     "id": "4,15",
//     "title": "Section Two - 4,15",
//     "content": "Obirin kan nbo ti yoo je owo re run",
//     "category": "Marriage & Warning"
//   },
//   "4A": {
//     "id": "4A",
//     "title": "Special Section - 4A",
//     "content": "Awon Ota ti o farapamo wa lara ore re ti won yoo ma ko ibanuje okan ba o...",
//     "category": "Enemies & Destiny"
//   },
//   "4b": {
//     "id": "4b",
//     "title": "Special Section - 4b",
//     "content": "Ebun opolo. Olopolo pipe ni ogbon lati fi yanju oro to ba ta koko alanu...",
//     "category": "Wisdom & Destiny"
//   },
//   "LINE ONE / TWO": {
//     "id": "LINE ONE / TWO",
//     "title": "Line One / Two",
//     "content": "Collection of journey & warning outcomes from 1,4 to 16,4",
//     "category": "Journeys & Warnings"
//   },

//   // === A Solutions ===
//   "1A": {
//     id: "1@1",
//     title: "Section One - 1A",
//     content:
//       "Oro obinrin, ki Olorun bo asiri, on nwa nkan lo si ibikan, onse iranlowo fun enikan. Emi Onibeere yoo gun",
//     category: "Women & Support",
//   },
//   "2A": {
//     id: "1A",
//     title: "Section Two - 2A",
//     content:
//       "Alakala, ounje oju orun, alawada, timo fi eeyan se yeye, ti ko serious, ro eyan pin. A le da ni imoran pe ko ma se tiata",
//     category: "Guidance & Behavior",
//   },
//   "3A": {
//     id: "3A",
//     title: "Section Three - 3A",
//     content:
//       "Oro Awe, oro obinrin kan nbe ni emi re, o nro pe nkan kolo dede, awon agba nse",
//     category: "Tradition & Women",
//   },
//   "4A": {
//     id: "4A",
//     title: "Section Four - 4A",
//     content:
//       "O n ri awon nkankan ti ndun mo ninu, yala ninu ile tabi nita. Ki o ma te aso funfun sori bed re to ba fe sun",
//     category: "Household & Protection",
//   },
//   "5A": {
//     id: "5A",
//     title: "Section Five - 5A",
//     content: "Ironu nipa omo, irin ajo lilo, o fe kuro nibikan bo si ibikan",
//     category: "Children & Travel",
//   },
//   "6A": {
//     id: "6A",
//     title: "Section Six - 6A",
//     content:
//       "Ohun ibinu. Aare okan nda onibeere laamu. Nurse arun kan ninu ara. N gbero lati ra nkan bi irin, ero",
//     category: "Health & Anger",
//   },
//   "7A": {
//     id: "7A",
//     title: "Section Seven - 7A",
//     content:
//       "Owa ninu ibanuje airi owo na. Ao ma la alakala. Awon agba ndaamu, awon aje ntele kakiri. Won ko jeki oni isinmi",
//     category: "Wealth & Struggles",
//   },
//   "8A": {
//     id: "8A",
//     title: "Section Eight - 8A",
//     content: "Nkan ibanuje, ipaya. Aifi okan bale nbe fun onibere",
//     category: "Fear & Worry",
//   },
//   "9A": {
//     id: "9A",
//     title: "Section Nine - 9A",
//     content:
//       "Okan onibere gba igbe, ironu to jinna ti eyan ti gba gbe ra. Ironu ti ma sori eyan kodo ti o le fa iku lojiji",
//     category: "Deep Thoughts & Danger",
//   },
//   "10A": {
//     id: "10A",
//     title: "Section Ten - 10A",
//     content:
//       "Ko gbadura tori aare, okan re kun fun ironu. Alaniyan nfi okan si aran se kan, ore",
//     category: "Prayer & Worry",
//   },
//   "11A": {
//     id: "11A",
//     title: "Section Eleven - 11A",
//     content:
//       "Royiroyi, ibi ti o fi kan te si adua ko le dara. Okan re wa lori nkankan. O nri irorun sugbon irorun yen ko po",
//     category: "Dreams & Limited Relief",
//   },
//   "12A": {
//     id: "12A",
//     title: "Section Twelve - 12A",
//     content:
//       "Ota po, yoo ri iwosi, sora fun ibinu papa lori owo. Onibere ore diedie ni wole fun",
//     category: "Enemies & Wealth",
//   },
//   "13A": {
//     id: "13A",
//     title: "Section Thirteen - 13A",
//     content:
//       "Nkan ibinu, ti okan ko, ki ise ma dojuru. Alaniyan ngbero moto nla jeep lati ra",
//     category: "Plans & Anger",
//   },
//   "14A": {
//     id: "14A",
//     title: "Section Fourteen - 14A",
//     content:
//       "(Alfa, aladua, oni mimo) Aya onibere nja aya lori ogun to fe se. Yio je eniti Olorun fun lebun",
//     category: "Religion & Conflict",
//   },
//   "15A": {
//     id: "15A",
//     title: "Section Fifteen - 15A",
//     content:
//       "Oni gbese lorun ti npalaya, oni gbese lorun ti o npa laya. Ma se lo aso to riri, aso alakowe",
//     category: "Debt & Burden",
//   },
//   "16A": {
//     id: "16A",
//     title: "Section Sixteen - 16A",
//     content:
//       "Inu bibi abiju, igbona okan, oro ti a nba o leru, yio dara. Okan eni kun fun ero orisirisi",
//     category: "Anger & Mixed Emotions",
//   },
//   "17A": {
//     id: "17A",
//     title: "Section Seventeen - 17A",
//     content: "1@5 and 6: Oyun ibeji / oyun ti ko ni se see se",
//     category: "Pregnancy",
//   },
//   "18A": {
//     id: "18A",
//     title: "Section Eighteen - 18A",
//     content:
//       "1&2 1,1: Eti yio ba adawole re. Yio maa gbero nkan kan ko ni seese. Yio ri wahala die, ko be Olorun",
//     category: "Warnings & Challenges",
//   },
//   "19A": {
//     id: "19A",
//     title: "Section Nineteen - 19A",
//     content: "1&2,2,1: Yio maa banuje lori awon isesi kan agbaana",
//     category: "Sadness",
//   },
//   "20A": {
//     id: "20A",
//     title: "Section Twenty - 20A",
//     content:
//       "1&2,3,1: Nkan re yio maa baje loju emi re. Adura gidiidi. Ko be Olorun fun aseyori rere",
//     category: "Prayer & Success",
//   },
//   "21A": {
//     id: "21A",
//     title: "Section Twenty-One - 21A",
//     content: "1&2,4,1: Aare yio see. Awon Agba ti pin aran re",
//     category: "Destiny",
//   },
//   "22A": {
//     id: "22A",
//     title: "Section Twenty-Two - 22A",
//     content: "1&2,5,1: Omo yio je adanwo fun un",
//     category: "Children & Trials",
//   },
//   "23A": {
//     id: "23A",
//     title: "Section Twenty-Three - 23A",
//     content: "1&2,6,1: Ko mase ba enian da owo po, yio run yio padaanu dukia",
//     category: "Wealth & Warning",
//   },
//   "24A": {
//     id: "24A",
//     title: "Section Twenty-Four - 24A",
//     content: "1&2,7,1: Ko sora fun ole. Ko loni ibelorun fun aseyori rere",
//     category: "Caution & Theft",
//   },
//   "25A": {
//     id: "25A",
//     title: "Section Twenty-Five - 25A",
//     content:
//       "1&2,8,1: Emi kukuru nbe fun. Ko si aseyori kankan. Ko be Olorun gidigidi",
//     category: "Short Life Warning",
//   },
//   "26A": {
//     id: "26A",
//     title: "Section Twenty-Six - 26A",
//     content:
//       "1&2,9,1: Owo jijo, ai ni akojo. Ko be Olorun ki ijanba ma baa see",
//     category: "Wealth & Loss",
//   },
//   "27A": {
//     id: "27A",
//     title: "Section Twenty-Seven - 27A",
//     content:
//       "1&2,10,1: Oore jinna si alaniyan. Yi ki o gbiyanju lati toju ara",
//     category: "Kindness & Health",
//   },
//   "28A": {
//     id: "28A",
//     title: "Section Twenty-Eight - 28A",
//     content: "1&2,11,1: Ki alufaa sora fun sina, ki ifaseyin ma baa de baa",
//     category: "Religious Caution",
//   },
//   "29A": {
//     id: "29A",
//     title: "Section Twenty-Nine - 29A",
//     content:
//       "1&2,12,1: Owo kan nbo wa sugbon ki o be Olorun ki o le baa tewo",
//     category: "Wealth & Prayer",
//   },
//   "30A": {
//     id: "30A",
//     title: "Section Thirty - 30A",
//     content:
//       "1&2,14,1: Irin ajo to dara to si mu idunnu lowo. Ori rere ni irin ajo",
//     category: "Travel & Joy",
//   },
//   "31A": {
//     id: "31A",
//     title: "Section Thirty-One - 31A",
//     content: "1&2,15,1: Ko sora fun gbese. Ki alufaa baa be Olorun",
//     category: "Debt & Caution",
//   },
//   "32A": {
//     id: "32A",
//     title: "Section Thirty-Two - 32A",
//     content:
//       "1&2,16,1: Aise deede nbe fun lori dukia ati awon omo. Ki o se adua",
//     category: "Wealth & Children",
//   },
//   "33A": {
//     id: "33A",
//     title: "Section Thirty-Three - 33A",
//     content:
//       "Nkan re yoo ma fale, eti lori adawole, sora tori ki ota ma be si ile. Ajosepo pelu eletan obinrin ati okunrin...",
//     category: "Enemies & Relationships",
//   },
//   "34A": {
//     id: "34A",
//     title: "Section Thirty-Four - 34A",
//     content:
//       "O je eda ti ko nini ore otito ti yoo wa pelu lo titi. O ma tete fura tabi ri asise eniyan maa nronun ipa iwa...",
//     category: "Friendship & Truth",
//   },
//    // === B Solutions ===
// "1B": {
//   id: "1B",
//   title: "Section One - 1B",
//   content:
//     "Yoo ma saroye owo, idiwo nipa arisiki. Eda to special to mu ori owo waye, o sise ko sise yoo lowo laye, ko ni ise kan pato, yoo ma rowo lona iyanu. Agbero, arobo, gbogbo ibi to ba ya si ona ni ma je, ti ko bawa lowo, a je wipe, won ndi lowo. Ao wo, ile kefa ati ikesan (oju on igbesi aye) ti aba bad star, idi ti ko fi lowo niyen.",
//   category: "Wealth & Obstacles",
// },
// "2B": {
//   id: "2B",
//   title: "Section Two - 2B",
//   content:
//     "Yoo ni dukia pupo. Ti a bari pe ko ni dukia, a je pe aye ba nfin ara. Ao wo ibi ti won ti bafinra, irawo to wa nile ti a ba ri (2@2 ati 2@6). Won joko le asiki re, won ti block account re, ori ko fo arun ailowo lowo. Ti o ba je 2@2 lo da duro o dara, yoo ni dukia. Ti 2@6 nikan ba da duro, arun ailowo lowo nse.",
//   category: "Wealth & Blockages",
// },
// "3B": {
//   id: "3B",
//   title: "Section Three - 3B",
//   content:
//     "Agbana, aje ndi lowo. Ki onibeere sora fun awon obinrin. Ija emi okunkun won ti bo ogo re mole, yoo ma fa idiwo sinu aye re. Eti lori adehun awon eeyan, ti o ba fe se nkan yoo ma leti KO FI AKARA SE SARA (3@2 ati 3@3 ko ri se rara).",
//   category: "Wealth & Spiritual Battle",
// },
// "4B": {
//   id: "4B",
//   title: "Section Four - 4B",
//   content: "Lori oro owo yoo ma ri idunnu.",
//   category: "Wealth & Happiness",
// },
// "5B": {
//   id: "5B",
//   title: "Section Five - 5B",
//   content:
//     "Agbaana nkan yoo njade. Owo ko duro lowo onibeere, ona la, owo ti nwole ko duro.",
//   category: "Finances & Instability",
// },
// "6B": {
//   id: "6B",
//   title: "Section Six - 6B",
//   content:
//     "Agbaana. Ise eni nse are, okan re ko bale, nkan slow.",
//   category: "Work & Delays",
// },
// "7B": {
//   id: "7B",
//   title: "Section Seven - 7B",
//   content:
//     "Okuta nbe lori nkan ti fi se oro aje, yala on sowo ni ko ni ta tabi on sise ijoba. To ba sise ijoba yoo ma gba salary, owo miran ko ni wole ni bi kibi. Awon eleye nda onibeere laa mu.",
//   category: "Wealth & Government Work",
// },
// "8B": {
//   id: "8B",
//   title: "Section Eight - 8B",
//   content:
//     "Belorun ki o ma ri oran ti wa nawo. Eru nba onibere nipa owo, okan re ko bale nipa oro olowo de.",
//   category: "Finances & Fear",
// },
// "9B": {
//   id: "9B",
//   title: "Section Nine - 9B",
//   content:
//     "Ise ti dojuru, agbaana. Owo tabi dukia yoo jade lowo onibere. Ti a ba ri 9@13 o confirm agbaana. 8@5 omo yoo sick, ibe ni nawo si. 8@3, iyawo yoo sick, iyawo ni nawo si. 8@6, ao wo ile ise ibi ti a ba ti ri irawo ti ko da bi 3,6,7,8, ibe ni nawo si. Most of time oro dada ni ma nso nile omo iya won. Awole ina, omi wole omi, ategun wole ategun, ile wole ile. O le so dada o le ma so dada. Fun apere, 7@3,7@7 nidi eleyi e se sara fun awon agbalagba. Agba ndaamu lati mo nkan ti yoo fi se sara. Ao wo ile kefa 6, ti a ba omi nkan olomi ni yoo fi se sara bi minerals, osan, eso ti oni omi ninu. O nrỌnu, owo ko duro. 9@5 omo ni nawo le lori. 9@6 ise ni gba owo danu lowo re.",
//   category: "Finances & Family Health",
// },
// "10B": {
//   id: "10B",
//   title: "Section Ten - 10B",
//   content:
//     "Arisiki owo nbo lopolopo. Yoo lola ti yoo po.",
//   category: "Wealth & Prosperity",
// },
// "11B": {
//   id: "11B",
//   title: "Section Eleven - 11B",
//   content:
//     "Ogun to gbe pamo ko ma lo. Owo yoo pariwo lowo wa laipe, okiki owo eni yoo han si aye. KO FI EWA SE SARA KI OWO LE JI DADA.",
//   category: "Wealth & Fame",
// },
// "12B": {
//   id: "12B",
//   title: "Section Twelve - 12B",
//   content:
//     "Obinrin ti yoo fe o nbo. Aranse mbo wa ni ibi ise wa. Ore to po yoo wole fun. To ba tun wa nile keta ore to po gan yoo wole.",
//   category: "Women & Blessings",
// },
// "13B": {
//   id: "13B",
//   title: "Section Thirteen - 13B",
//   content:
//     "Yoo ma ri owo dada. Inu ko dun, nkan fe jalo. Onibeere yoo ri owo to opo lodun yi.",
//   category: "Wealth & Emotions",
// },
// "14B": {
//   id: "14B",
//   title: "Section Fourteen - 14B",
//   content:
//     "O se ajoo ti nje dada. Obinrin yio koo sile, sora fun sina. Ogun yoo sise fun o, ona yoo la.",
//   category: "Marriage & Progress",
// },
// "15B": {
//   id: "15B",
//   title: "Section Fifteen - 15B",
//   content:
//     "Yoo ri owo ati oro to po, oro yi yoo wa lati ipase ise oba tabi oselu.",
//   category: "Wealth & Politics",
// },
// "16B": {
//   id: "16B",
//   title: "Section Sixteen - 16B",
//   content:
//     "O ni owo pupo. Ao lowo laye yi, ona ti owo yoo gba mo wole yoo po. Ao lo wo ile Kesan. Ti a ba 3,6,7,8,@9 owo yoo lo, awon ota yoo gba owo na danu.",
//   category: "Wealth & Enemies",
// },
// "17B": {
//   id: "2AA",
//   title: "Section Two Extension - 2AA",
//   content:
//     "Arin ota ni o wa, ogun idile, ejo riro pelu eni. Won ti fi ogun buburu kan danwo ri sugbon o segun won. Won yoo ma ba owo je mo lowo. Ota po ti yoo ma fa asedanu, wahala ti yoo gbe owo lo, jibiti. Ki eni eleni majise re, ki ole ma ja o. Wahala ati idiwo yio wa fun o. Sara: agbado, adie ati agbon ni sara. Apa aimu dele ni ko je ki a mo pe olongbon nsode. Asedanu, ki eleni ma jise re. Sora pelu ija ina, mojuto alare papa iwo tori are. Ife ati ibanikegbe yoo waye loni, ife si omo, aya, oko, obi, ore. Oro isekuse loni sora. Iwa lile, ajosepo lorisirisi, ounje adidun, aso to dara, imototo.",
//   category: "Enemies & Family Conflicts",
// },
// "18B": {
//   id: "2AB",
//   title: "Section Two Extension - 2AB",
//   content:
//     "O je eda, ti ko nini ore otito ti yoo wa pelu re lo titi. O ma tete fura tabi ri asise eniyan. Maa nronun ipa iwa ti eniyan le hu. Ko beru lati so otito, o ma nse gbogbo nkan re lona toto toye, laarin ebi, ore ati ni gbogbo ibi. O nbi ebun opolo, emi sise nkan titun ti kowo po tabi nkan atijo ka fi opolo gbe kale lati fi ba igba mu. Ironu jinle ati opolo ti kowopo wa fun. O ni agbekale oro ti o ma soro fun eniyan lati le tete ronu lo si ibe. Ise ti o ba fi opolo ori gbe kale tabi tete ti a fi opolo ori ta, ti ki se teteti a fi owo, yoo ma je ju ise agbara lo. Iwa agidi, tinu mi ni nse, aigbaimoran, aini iberu lati koju enikeni paapa to ba je lori otito. Inakuna nigba miran, idiju gbesan. Obinrin ti o ko wulo ati okunrin ti ko wulo ni fife. AISAN: Oju, Iba, Aisan arariro, Ikoinuriru, otutu inu egun, ejeriru. ISE: Nurse, Electrical work, Olopa, Hotel, Ojise olorun, Akowe, Labe ijoba, oja tita lorisirisi, nkan oso ile, ounje tita, Eja, Mineral, Perfume, Make up.",
//   category: "Character & Career",
// },

// // === C Solutions ===
// "1C": {
//   id: "1C",
//   title: "Section One - 1C",
//   content:
//     "Ki okan ko ma papo sona kan, pelu eti lori adehun awon eeyan. Iyigi ni. A so fun pe enikan fe fe o. Ao wo ile keje; ti irawo to wa nibe ba dara, ao so pe o dara. Papa to baje Alaika 2, to je ina, ao so pe o ti bimo ri tabi ki omo to bi ku tabi ki oyun baje lara re ri. Ti aba ti ri bayi 1@3, ka lo wo ile keje 7; nkan ti aba bani be ni yoo so bi igbeyawo na yoo se ri.",
//   category: "Marriage & Destiny",
// },
// "2C": {
//   id: "2C",
//   title: "Section Two - 2C",
//   content:
//     "Aladehun ko ni mu adehun se. A tun le tu si iyawo fe seyin. Ti a ba tun leri 6@5, idaduro latusi, ile omo doti tabi igba to seyun won ko ko oyun, untan lo fa idaduro ti 2@3 ati 6@5 ba wa papo.",
//   category: "Delays & Childbirth",
// },
// "3C": {
//   id: "3C",
//   title: "Section Three - 3C",
//   content:
//     "On reti nkankan tori yori si etan tabi jibiti. Ti a ba ri 3@3 ati 3@2 papo, onibere ko ri se rara. A tun le tu 3@3 to ba daduro, a tun le tu si pe o njeri pe obinrin ki se alagbere. To ba ni oko to ba mo okunrin mistake ni. Awon agba ni idile iya won nda laamu. To baje, okunrin iyawo eni yi ki se alagbere ninu abuda re, o wa le ma se awokose awon miran. Alagbere obinrin 3@13 ati 13@3; fun okunrin alagbere 1@7, 13@3 ati 3@13. Ti a ri 3@3 pelu 3@6, wahala ti poju. Irawo ile 3 ati 7 la fi mo igbeyawo to dara. Omi ati erupe dara, ina ati ategun o dara; gbogbo iyoku ko dara. Irawo ile keta 3 ka bi po mo nkan to wa ni ketala 13. To ba bi good star, o dara; to ba bi bad star, ko dara. Ao mu irawo to wa nile iyawo ati ile oko po to bawi.",
//   category: "Marriage & Infidelity",
// },
// "4C": {
//   id: "4C",
//   title: "Section Four - 4C",
//   content:
//     "Idaamu lori ise/obinrin kan re ti o ni omi lara, to mora ferefe ni mo no nile yi. Yoo ma jowu pupo. To ba je okunrin, iyawo eni yi ojowu; to ba je obinrin, ojowu ni. (Irawo pase, ibi meji tabi meta ti soro papo ti ojorawon, 4@3 ojowu binrin, 5@7).",
//   category: "Jealousy & Work",
// },
// "5C": {
//   id: "5C",
//   title: "Section Five - 5C",
//   content:
//     "Enikan yoo fun loogun. Obinrin ti yoo mo paro oko alafe gbejusile iyawo, yoo peji, yoo kola. To ba je okunrin, iyawo re yoo mo paro oko, yoo leji kola.",
//   category: "Deception & Relationships",
// },
// "6C": {
//   id: "6C",
//   title: "Section Six - 6C",
//   content:
//     "Adura onibere yoo gba. Iyawo alagidi ni. Ao bi lere pe se omo Osun ni iyawo tabi Ekiti.",
//   category: "Marriage & Prayer",
// },
// "7C": {
//   id: "7C",
//   title: "Section Seven - 7C",
//   content:
//     "Alakala, awon agba ndaa laamu. Okunrin yoo ko iyawo, or vice versa. Obinrin pupa kan ni mo nile yi: (1) awon agba ni idile iya, (2) iyawo alaniyan eyan pupa ni, (3) alaniyan nta epo, ata tabi aso.",
//   category: "Marriage & Family Issues",
// },
// "8C": {
//   id: "8C",
//   title: "Section Eight - 8C",
//   content:
//     "Alakala, ti yoo ni ipaya ninu ati idaamu ninu. Ti eyan bani oyun tabi nwa oyun, o le ba oyun je tabi fa idaduro. O tun le tumo si iya iyawo ba omo re joko nile oko, tabi aunt iyawo ko fe. O ma tumo si oko ati iyawo won nja, ti okan ninu won ma se epe.",
//   category: "Pregnancy & Family Conflict",
// },
// "9C": {
//   id: "9C",
//   title: "Section Nine - 9C",
//   content:
//     "Yoo dun lori nkan ti o nbanje si. Ore nbo. Aranse gbigba adura nbe fun wa.",
//   category: "Blessings & Prayer",
// },
// "10C": {
//   id: "10C",
//   title: "Section Ten - 10C",
//   content:
//     "Alaboyun kan re to yodi yokun ni mo nile yi. Se eyin ni a bi eeyan yin kan, ki a mojuto.",
//   category: "Pregnancy & Care",
// },
// "11C": {
//   id: "11C",
//   title: "Section Eleven - 11C",
//   content:
//     "Sora fun are alagbeka. To ba je okunrin, fun iyawo eni; to ba je obinrin, oun gangan ni. Ironu to le fa isoriko. Ko si maa binnu. Adura to lagbara ni ojutu.",
//   category: "Health & Warnings",
// },
// "12C": {
//   id: "12C",
//   title: "Section Twelve - 12C",
//   content:
//     "Obinrin: yala iyawo tabi ale. O kuru, ko ga, o dudu. Obinrin ko mojuto ibujoko re. Aranse nbo lati odo Olorun. Sora fun ore nitori akoba.",
//   category: "Women & Prophecy",
// },
// "13C": {
//   id: "13C",
//   title: "Section Thirteen - 13C",
//   content:
//     "Iyawo eniyi nse sina. Bi eniyan ba seleri fun o, ko ni muse. Iyawo wa yoo ko wa sile. Ti aba ri 13@3 ati 3@13, alagbere ni obinrin. Ti a ba ri 14@3 ati 14@7, won ko fe ki obinrin ridi joko nile oko. Ti a ba ri 8@8 tabi 6@8, ao wo oju on; ti a ba ba 8@9 tabi 6@9, ogun ti yoo seku pa ni. Ti good star ba wa, yoo sise; bad star, ko ni sise.",
//   category: "Marriage & Betrayal",
// },
// "14C": {
//   id: "14C",
//   title: "Section Fourteen - 14C",
//   content:
//     "Won sa ogun si obinrin ko ma ridi joko nile oko. To ba fe mo boya yoo sise tabi ko ni sise, kawo ile kefa ati ile kesan. Good star — yoo sise; bad star — ko ni sise. (14@6 — asasi lati ibi ise, 14@9 — accident).",
//   category: "Marriage & Misfortune",
// },
// "15C": {
//   id: "15C",
//   title: "Section Fifteen - 15C",
//   content:
//     "Yoo fe obinrin kan alalubarika ti yoo je oloselu tabi onise oba. Fun okunrin, iyawo re yoo ni fe si aso alakowe ni wiwo, ko nifesi aso ibile.",
//   category: "Marriage & Prestige",
// },
// "16C": {
//   id: "16C",
//   title: "Section Sixteen - 16C",
//   content:
//     "Ti o ba je obinrin, yoo ma la alakala to je mo emi okunkun, ti yoo ma mu ibanuje wa. Ti a ba ni ile keje 16@7, okunrin yoo je elejo tabi alagidi. Sora pelu oro enu. Ota ati awon agba le fa ituka. Ti a ba 7,8,9 ni ile kesan.",
//   category: "Spiritual & Family Conflicts",
// },

// // === C Line One/Two ===
// "1,3C": {
//   id: "1,3C",
//   title: "Line One/Two - 1,3C",
//   content:
//     "Owo nla kan nbo. Yio duro lowo ko fi se nkan to dara.",
//   category: "Money & Blessings",
// },
// "2,3C": {
//   id: "2,3C",
//   title: "Line One/Two - 2,3C",
//   content:
//     "Owo ti yio fi gbo tara re nbo (bukata). Asiri yio bo.",
//   category: "Needs & Protection",
// },
// "3,3C": {
//   id: "3,3C",
//   title: "Line One/Two - 3,3C",
//   content:
//     "Owo kan nbo, yio si lo bee. Ko bori re. Ko si se saara ki nkan tonfe le tee lowo. Nfa nkan mo iyawo.",
//   category: "Money & Sacrifice",
// },
// "4,3C": {
//   id: "4,3C",
//   title: "Line One/Two - 4,3C",
//   content:
//     "Owo re yio maa roke. Ko kun fun ibelorun. Iyonu lorisirisi ni ko ma se.",
//   category: "Finances & Satisfaction",
// },
// "5,3C": {
//   id: "5,3C",
//   title: "Line One/Two - 5,3C",
//   content:
//     "Irin ajo yio yoju. Ko se adura tori eeti. Eti nba nkan kan lowo re.",
//   category: "Travel & Warnings",
// },
// "8,3C": {
//   id: "8,3C",
//   title: "Line One/Two - 8,3C",
//   content:
//     "Abosi laarin oko si iyawo.",
//   category: "Marriage & Betrayal",
// },
// "12,3C": {
//   id: "12,3C",
//   title: "Line One/Two - 12,3C",
//   content:
//     "Won yii fi irin ajo kan lo. Oore ni wa o minbo lati ibe.",
//   category: "Travel & Blessings",
// },
// "13,3C": {
//   id: "13,3C",
//   title: "Line One/Two - 13,3C",
//   content:
//     "Mase gba iyawo. Sora fun sina. Yio lu oogun.",
//   category: "Marriage & Warning",
// },
// "14,3C": {
//   id: "14,3C",
//   title: "Line One/Two - 14,3C",
//   content:
//     "Mase lo si irin ajo. Yio padanu owo re, irin ajo yen ko dara.",
//   category: "Travel & Loss",
// },
// "15,3C": {
//   id: "15,3C",
//   title: "Line One/Two - 15,3C",
//   content:
//     "Won yio fi oja kan/iso kan loo. Yio jere pupo nibe.",
//   category: "Business & Profit",
// },
// "16,3C": {
//   id: "16,3C",
//   title: "Line One/Two - 16,3C",
//   content:
//     "Oro ife tori obinrin pupo. Ko ma ba padanu emi re.",
//   category: "Love & Danger",
// },

// // === Extra Sections ===
// "3A.C": {
//   id: "3A.C",
//   title: "Extra Section - 3A.C",
//   content:
//     "Lehin opolopo wahala adun ni oro re yoo jasi. Ise yoo te o lowo ati igbesi aye to rewa. Ota idile po fun o, sora ija pelu won. Olorun yoo fi o bori awon ota re. Wa ri ore lati odo eniyan pataki kan, yio mu o de ipo pataki. Owo nbo, ore nbo. Igbega si ipo ola.",
//   category: "Success & Enemies",
// },
// "3b.C": {
//   id: "3b.C",
//   title: "Extra Section - 3b.C",
//   content:
//     "O je olotito, sugbon aye tabi awon eniyan ko ni gba o laaye lati so otito. Won yoo ma gba oro re sodi. Ota po ti yoo ma jowu re. Ma fi inu han ore. O ma nse nkan meji lekansoso. Ma nronu jinle ki o to se nkan. AISAN: Arariro, inudidun, ipalaran, oyin oju. ISE: Teacher, Agbe, Tewetegbo sise, Nurse, Doctor, Owo sise.",
//   category: "Truth & Struggles",
// },
//   "1D": {
//     "id": "1D",
//     "title": "Section One - 1D",
//     "content": "Oyun nbo. Olokiki ni idile baba, won mo doro duro de nile baba",
//     "category": "Family & Childbirth"
//   },
//   "2D": {
//     "id": "2D",
//     "title": "Section Two - 2D",
//     "content": "Obinrin/omo. Yoo ma ri idunnu larin omo baba re, paapa oro to jemo owo. Omo re kan yoo ma fewo, okunrin ni omo na.",
//     "category": "Children & Wealth"
//   },
//   "3D": {
//     "id": "3D",
//     "title": "Section Three - 3D",
//     "content": "Yoo fe obinrin alarisi, ki o sora fun amubo (amubo ndalamu). Onibeere yoo fe obinrin kan o dara/Amubo. Awon agbalagba ni idile baba nda laamu.",
//     "category": "Marriage & Family Challenges"
//   },
//   "4D": {
//     "id": "4D",
//     "title": "Section Four - 4D",
//     "content": "Se sara fun oku orun, ipejo lori oro kan ni idile baba. Alayo, yoo ri idunnu ninu gbogbo adawole.",
//     "category": "Spiritual Rites & Happiness"
//   },
//   "5D": {
//     "id": "5D",
//     "title": "Section Five - 5D",
//     "content": "Iwo yoo ko obinrin/okunrin kan sile. Yoo ri se ninu omo baba re.",
//     "category": "Relationships & Family"
//   },
//   "6D": {
//     "id": "6D",
//     "title": "Section Six - 6D",
//     "content": "Aisowo lowo, nkan ko dara. Enikan yoo sare ni idile baba. Ti aba fe mo boya okunrin tabi obinrin, omode tabi agbalagba, ao ni ko toka si irawo kan nile. Irawo to ba bi la fi mo iru eniti yoo sare.",
//     "category": "Wealth & Misfortune"
//   },
//   "7D": {
//     "id": "7D",
//     "title": "Section Seven - 7D",
//     "content": "Awon aje ile baba nda alaniyan laamu. Ko mura.",
//     "category": "Spiritual Attack"
//   },
//   "8D": {
//     "id": "8D",
//     "title": "Section Eight - 8D",
//     "content": "Mojuto ara re ati omo. Obinrin kan nbe ni emi wa kama fe. Ti baba ba nbe, ko toju baba, ko ma sick. To ba ti ku, ko se sara.",
//     "category": "Health & Family"
//   },
//   "9D": {
//     "id": "9D",
//     "title": "Section Nine - 9D",
//     "content": "Iyawo re yoo ko o. Hunhun nbe larin ololufe meji, be lori aseri lori aburu. Iyawo wa nse ako si wa. Awon ebi nronu nipa re. Ao wo ile kesan (9). Ti a ba ba irawo to da nibe, ironu to dara ni. Irawo ti ko dara, ironu ti ko da ni.",
//     "category": "Marriage & Emotional Issues"
//   },
//   "10D": {
//     "id": "10D",
//     "title": "Section Ten - 10D",
//     "content": "Obinrin/okunrin yoo mafi se faari. A o fe obinrin/okunrin to yodi yokun to mora kan o dara. Oyun nbo. Ologo omo ti ma nna owo sile baba re, se dada fun ebi.",
//     "category": "Childbirth & Prosperity"
//   },
//   "11D": {
//     "id": "11D",
//     "title": "Section Eleven - 11D",
//     "content": "Obinrin kan wuwa lati fe, o dara. Alaniyan nri idiwo lati idile baba.",
//     "category": "Marriage & Obstacles"
//   },
//   "12D": {
//     "id": "12D",
//     "title": "Section Twelve - 12D",
//     "content": "Ao fe obinrin dudu kan, o dara. Ile dada ni, sugbon awon yoo ma ba sota. Sugbon yoo jeri won.",
//     "category": "Marriage & Enemies"
//   },
//   "13D": {
//     "id": "13D",
//     "title": "Section Thirteen - 13D",
//     "content": "Ikosile laarin ololufe meji. 14=9 Ikosile yio bi asasi, dukia yio pare. 13@9 Aori obinrin ti oti ko oko sile.",
//     "category": "Separation & Loss"
//   },
//   "14D": {
//     "id": "14D",
//     "title": "Section Fourteen - 14D",
//     "content": "Ko sora ni idile baba re ki won ma sa ogun si. Ijaya wa fun o, sora fun sina. Iyawo wa ko gba wa gbo, no trust.",
//     "category": "Marriage & Conflict"
//   },
//   "15D": {
//     "id": "15D",
//     "title": "Section Fifteen - 15D",
//     "content": "Yoo je eniti yoo gbe ogo idile baba ga nipase ise ijoba.",
//     "category": "Leadership & Success"
//   },
//   "16D": {
//     "id": "16D",
//     "title": "Section Sixteen - 16D",
//     "content": "Yoo ma ri oun ibinu. Ko sora pelu dukia ile obi, meeting ni ile baba. Ao wo ile kesan. Ti a ba ba irawo to da (4,5,10,15) oro to da ni. Ti a ba ba irawo ti ko da (3,6,7,8) oro ti ko da ni / meeting awon eeyan buruku lori eyan nibi ti eyan ti nsise.",
//     "category": "Wealth & Danger"
//   },
//   "41D": {
//     "id": "41D",
//     "title": "Section Forty-One - 41D",
//     "content": "Ko mura ki elomiran ma je ore nkan ti anse lowo.",
//     "category": "Wealth & Betrayal"
//   },
//   "42D": {
//     "id": "42D",
//     "title": "Section Forty-Two - 42D",
//     "content": "Ki o mura tori amubo aya, ati ase yori.",
//     "category": "Marriage Challenges"
//   },
//   "43D": {
//     "id": "43D",
//     "title": "Section Forty-Three - 43D",
//     "content": "Won yoo mu oro eni ti ara re ko yawa, aye lowa nibe.",
//     "category": "Reputation & Gossip"
//   },
//   "44D": {
//     "id": "44D",
//     "title": "Section Forty-Four - 44D",
//     "content": "Omo kekere tabi obinrin yoo sawa.",
//     "category": "Children & Family"
//   },
//   "45D": {
//     "id": "45D",
//     "title": "Section Forty-Five - 45D",
//     "content": "Aanu olorun wa fun o. Mura tori ota.",
//     "category": "Protection & Enemies"
//   },
//   "46D": {
//     "id": "46D",
//     "title": "Section Forty-Six - 46D",
//     "content": "Obinrin eletan kan nbo, sora.",
//     "category": "Deception & Women"
//   },
//   "48D": {
//     "id": "48D",
//     "title": "Section Forty-Eight - 48D",
//     "content": "Won yoo fun lo binrin lati ipase ore re.",
//     "category": "Relationships & Friends"
//   },
//   "49D": {
//     "id": "49D",
//     "title": "Section Forty-Nine - 49D",
//     "content": "Ki o mura ki o le ba eniyan gbe.",
//     "category": "Partnership & Caution"
//   },
//   "410D": {
//     "id": "410D",
//     "title": "Section Four Hundred Ten - 410D",
//     "content": "Ki oma ja si ogun (dukia).",
//     "category": "Wealth & Conflict"
//   },
//   "411D": {
//     "id": "411D",
//     "title": "Section Four Hundred Eleven - 411D",
//     "content": "Obirin ti o ba sun nbo.",
//     "category": "Marriage & Relationships"
//   },
//   "414D": {
//     "id": "414D",
//     "title": "Section Four Hundred Fourteen - 414D",
//     "content": "Obirin kan yoo ta o lore, okere ni yoo ti wa.",
//     "category": "Relationship & Foreign Connection"
//   },
//   "415D": {
//     "id": "415D",
//     "title": "Section Four Hundred Fifteen - 415D",
//     "content": "Obirin kan nbo ti yoo je owo re run.",
//     "category": "Marriage & Financial Loss"
//   },
//   "4DA": {
//     "id": "4DA",
//     "title": "Section 4DA",
//     "content": "Awon ota ti o farapamo wa lara ore re ti won yoo ma ko ibanuje okan ba o. Ti won fi oju jo ore sugbon ota ni won. Sora ki won o ma da o leru nu. Oore kan nbo wa lati owo okunrin nla kan, eyi ti o wa nipo ola. Awon ota re yio ma gbero lati ko wahala ba ore na to ba de, tabi ki won dena ore yi lati ma wa. Ti o ba ti nkuro ninu wahala kan, ni o ma bo sinu omiran. Okan re ko papo si ona kan. Ero buruku wa si inu okan re. Wahala emi okunkun ti nda irin ajo re lamu ti ko je ki aseyori. Ti o ba fe se nkan emi okunkun, yoo ma so wipe ko ni sese. Yoo ma ko iberu sinu okan re to je wipe ni ipari ko ni si aseyori kankan. Anadanu, wahala asenu, wahala poju owo to nri. Fi ireke ati aadun se sara.",
//     "category": "Enemies & Spiritual Struggle"
//   },
//   "4DB": {
//     "id": "4DB",
//     "title": "Section 4DB",
//     "content": "Ebun opolo. Olopolo pipe ni ogbon lati fi yanju oro to ba ta koko alanu. Awon eniyan yoo feran re, olotito eda ni o, alaanu eda, oga ninu ohun ti o ba nse, onitiju eda, oloju ona ti ki tete gbagbe nkan. Ebun irina lati ri ohun ti o ba fe sele loju aye tabi loju orun. Ma nfi ara re si ipo owo, ko fe arinfin lati odo omokekere. O je gbajumo ti yoo mo eyin nla, olokiki eniyan ni. O ma nwa bi ile aye re yoo ti dara, o feran afara we. Nigba miran, ti inu re ba dun ni aro, to ba di ale inu re maa nbaje. Ti o ba wo bi irinajo aye re nse nlo, eniti o ni ifarada ti oni itiju, suru, ti o ma fi owo pamo ti enikan kan ko ni mosi. O ma ronu jinle, ero okan re yato si ti elomiran. Yoo ri orisirisi iri pelu eniyan, ko ni je ki o fegba eniyan gbo. Olori re nibikibi. Sora fun jibiti, agidi okan, ti inu mi ni se. Ki eeyan ma gba imoran.",
//     "category": "Gift & Wisdom"
//   },
//   "LINE_ONE_TWO": {
//     "id": "LINE_ONE_TWO",
//     "title": "Line One / Two",
//     "content": [
//       "1, 4D - Irin ajo ti yio la abuku lo igbese ti ko dara to",
//       "2, 4D - Yio lo si ibikan, kosi ni ri nkan tonwa lo mubo. Yio rii – ko ni rii mubo",
//       "3, 4D - Atajare lori oja re lasiko yi, Adawole ti yio dara",
//       "5, 4D - Eti yio ba nkan to fe se, Eti wa fun",
//       "6, 4D - Adawole ko ni seese. Eti yio ba nkan to ngbero",
//       "7, 4D - Irin ajo ti ko dara rara",
//       "9, 4D - Yio gburo owo kan, owo na yio si tee lowo",
//       "10, 4D - Won yio se abosi sii lori dukia kan tabi ki on na se si enia",
//       "11, 4D - Saara fun awon omo wewe. Ona yio wa la fun",
//       "13, 4D - Ijamba motor yio sele sii, adura pelu saara",
//       "12, 4D - Mase rin irin ajo lasiko yi, ko dara to",
//       "12, 4D - Ko soro gidigidi ori aare na kan nbo, ironu yii baa ko fi aso orin re jeun se saa",
//       "14, 4D - Ona yio sii fun. Ko se saara dada",
//       "15, 4D - Yio foju kan obinrin kan o dara, o le fee",
//       "16, 4D - Enikan yio se aare iku. Ko mura gidigidi"
//     ],
//     "category": "Journeys & Warnings"
//   },


// // === E Solutions ===
// "1E": {
//   id: "1E",
//   title: "Section One - 1E",
//   content:
//     "Amojuto alaboyun. Agan ti o wa lara wa yoo bimo. A ri oyun nile, lati confirm boya oyun tabi ki se oyun: ile kerin 4 ti ina (1,2,9,16). Ti a wo ile kefa 6 ti aba omi (4,5,6,13). Ile omo ngbona. Ina ati ina NO, ina ati afefe NO, ina ati erupe NO, afefe ati afefe NO, omi ati afefe NO. ✅ Omi ati omi YES, omi ati erupe YES, erupe ati erupe YES.",
//   category: "Pregnancy & Childbirth",
// },
// "2E": {
//   id: "2E",
//   title: "Section Two - 2E",
//   content:
//     "A o ma se inawo lori omo/oyun. Omo yoo ma fewo, ojukokoro.",
//   category: "Children & Finances",
// },
// "3E": {
//   id: "3E",
//   title: "Section Three - 3E",
//   content:
//     "Yoo bimo ti yoo je eniyan pataki. Onibere yoo bi omo obinrin laipe yi.",
//   category: "Pregnancy & Blessings",
// },
// "4E": {
//   id: "4E",
//   title: "Section Four - 4E",
//   content:
//     "Mase ya eniyan ni nkan ko ni dapada. Omo onibere yoo po gan. Omo yoo ni ojukokoro, yoo ma fewo.",
//   category: "Children & Warning",
// },
// "5E": {
//   id: "5E",
//   title: "Section Five - 5E",
//   content:
//     "Onibere yoo bi omo okunrin kan ti yoo lola.",
//   category: "Pregnancy & Destiny",
// },
// "6E": {
//   id: "6E",
//   title: "Section Six - 6E",
//   content:
//     "Omo kan yoo sare elegbe omo omi ni. Ti o ba le lati loyun le omo, iya ni idaduro. Ile omo to doti le fa idaduro.",
//   category: "Pregnancy & Delay",
// },
// "7E": {
//   id: "7E",
//   title: "Section Seven - 7E",
//   content:
//     "Yoo ma la alakala, aisan fe se. A o bi omo binrin kan.",
//   category: "Children & Health",
// },
// "8E": {
//   id: "8E",
//   title: "Section Eight - 8E",
//   content:
//     "Omo kan yoo sare. Eru/ipaya biba lori omo. Won yoo ma fi omo se idaamu.",
//   category: "Children & Fear",
// },
// "9E": {
//   id: "9E",
//   title: "Section Nine - 9E",
//   content:
//     "Iyawo re nse nkan osu lowo. Omo binrin kan re ti nse nkan osu lowo.",
//   category: "Women & Health",
// },
// "10E": {
//   id: "10E",
//   title: "Section Ten - 10E",
//   content:
//     "Iyawo re yoo looyun/ti loyun, ma seyun. Lati confirm boya oyun tabi ki se oyun: ile kerin 4 ti ina (1,2,9,16). Ti a wo ile kefa 6 ti aba omi (4,5,6,13). Ile omo ngbona. Ina ati ina NO, ina ati afefe NO, ina ati erupe NO, afefe ati afefe NO, omi ati afefe NO. ✅ Omi ati omi YES, omi ati erupe YES, erupe ati erupe YES.",
//   category: "Pregnancy & Confirmation",
// },
// "11E": {
//   id: "11E",
//   title: "Section Eleven - 11E",
//   content:
//     "Iyawo re yoo bimo. Oni daduro. Emere. Oro enikan ndun wa lokan.",
//   category: "Pregnancy & Trials",
// },
// "12E": {
//   id: "12E",
//   title: "Section Twelve - 12E",
//   content:
//     "Eniti o nwa omo ni egbe wa yoo bimo.",
//   category: "Children & Fulfillment",
// },
// "13E": {
//   id: "13E",
//   title: "Section Thirteen - 13E",
//   content:
//     "A ko gbodo se oyun.",
//   category: "Pregnancy & Warning",
// },
// "14E": {
//   id: "14E",
//   title: "Section Fourteen - 14E",
//   content:
//     "Obinrin yio loyun ti yio fee baje. Yoo maa re je. Adura fun oyun. Obinrin kan yoo loyun fun wa.",
//   category: "Pregnancy & Risk",
// },
// "15E": {
//   id: "15E",
//   title: "Section Fifteen - 15E",
//   content:
//     "Yoo bimo kan ti yio lola. Ao bi omo pupo laye.",
//   category: "Pregnancy & Prosperity",
// },
// "16E": {
//   id: "16E",
//   title: "Section Sixteen - 16E",
//   content:
//     "Yoo ri owo ti yoo po. Omo wa yoo po, won yoo yaa re.",
//   category: "Children & Wealth",
// },

// // === E Line One/Two ===
// "5,7E": {
//   id: "5,7E",
//   title: "Line One/Two - 5,7E",
//   content:
//     "Ki o belorun arun inu.",
//   category: "Health",
// },
// "5,8E": {
//   id: "5,8E",
//   title: "Line One/Two - 5,8E",
//   content:
//     "Oye jije ki o mura ko le bosi.",
//   category: "Wisdom & Preparation",
// },
// "5,9E": {
//   id: "5,9E",
//   title: "Line One/Two - 5,9E",
//   content:
//     "Obirin to ti bimo ri ni yoo koko fe ki o to le ni.",
//   category: "Marriage & Women",
// },
// "5,10E": {
//   id: "5,10E",
//   title: "Line One/Two - 5,10E",
//   content:
//     "O nwa omo o ri.",
//   category: "Children & Fulfillment",
// },
// "5,11E": {
//   id: "5,11E",
//   title: "Line One/Two - 5,11E",
//   content:
//     "O nreti enikan ti yoo ba omu nkan wa, o nbo wa.",
//   category: "Expectation & Visitors",
// },
// "5,12E": {
//   id: "5,12E",
//   title: "Line One/Two - 5,12E",
//   content:
//     "Awon kan ndaruko re bo lati okere.",
//   category: "Name & Reputation",
// },

// // === Extra Section - 5E1 ===
// "5E1": {
//   id: "5E1",
//   title: "Extra Section - 5E1",
//   content:
//     "Alejo nbo fun o tabi iwo papa yio lo si idale kan ti yio mu ere, inu didun ati ayo wa. Obinrin yoo ma se nkan ife si o lati fi gba owo re. Won yoo sa ogun si o. Gbogbo nkan to fe le te owo re. Fi aso funfun toro. Ife ati ibanikegbe yoo waye loni. Iwa lile sora. Ajosepo orisirisi, ounje adidun, aso to dara, imototo.",
//   category: "Visitors & Blessings",
// },

// // === Extra Section - 5A2 ===
// "5A2": {
//   id: "5A2",
//   title: "Extra Section - 5A2",
//   content:
//     "Ebun opolo. Olopolo pipe ni ogbon lati fi yanju oro to ba ta koko. Olotito eda ni o, alaanu eda. Oga ninu ohun ti o ba nse. Ebun irin asi ohun ti o ba fese leya. O ma nwa bi ile aye re yoo ti dara. Sora fun jibiti, agidiokan. Ma gba imoran. ISE: Electrical, hotel business, Akowe, Agbe sise, Nurse, Ounje sise ta, Pharmacy. AISAN: Oruyoo, inuriru, iba orikere, arariro, eyin didun, ito sugar.",
//   category: "Wisdom & Gifts",
// },

// // === E Line One/Two (1,5E - 16,5E) ===
// "1,5E": {
//   id: "1,5E",
//   title: "Line One/Two - 1,5E",
//   content: "Yio jere oja lati okeere.",
//   category: "Business & Profit",
// },
// "2,5E": {
//   id: "2,5E",
//   title: "Line One/Two - 2,5E",
//   content: "Won yio fi oja kan loo, yio si jere nibe.",
//   category: "Trade & Gain",
// },
// "3,5E": {
//   id: "3,5E",
//   title: "Line One/Two - 3,5E",
//   content: "Eti yio ba irin ajo to fe rin. Eti nbe fun un.",
//   category: "Travel & Warning",
// },
// "4,5E": {
//   id: "4,5E",
//   title: "Line One/Two - 4,5E",
//   content: "Mase da owo po pelu eniyan. Da owo se funrarare.",
//   category: "Finances & Independence",
// },
// "5,5E": {
//   id: "5,5E",
//   title: "Line One/Two - 5,5E",
//   content: "Yio rin irin ajo sugbon ko se saara ko le ri ohun tonfe. Idena fun orisiki.",
//   category: "Travel & Delay",
// },
// "6,5E": {
//   id: "6,5E",
//   title: "Line One/Two - 6,5E",
//   content: "Atajere lori oja.",
//   category: "Business & Profit",
// },
// "7,5E": {
//   id: "7,5E",
//   title: "Line One/Two - 7,5E",
//   content: "Abosi yio waiye lori irin ajo kan to fe rin.",
//   category: "Journey & Betrayal",
// },
// "8,5E": {
//   id: "8,5E",
//   title: "Line One/Two - 8,5E",
//   content: "Owo kan yio tee lowo laipe.",
//   category: "Money & Gain",
// },
// "10,5E": {
//   id: "10,5E",
//   title: "Line One/Two - 10,5E",
//   content: "Owo njade lowo re gan-an. Ko sora ki okowo re ma baa run.",
//   category: "Money & Warning",
// },
// "11,5E": {
//   id: "11,5E",
//   title: "Line One/Two - 11,5E",
//   content: "Yio lo si ibikan, yio ri owo mubo nibe.",
//   category: "Travel & Money",
// },
// "12,5E": {
//   id: "12,5E",
//   title: "Line One/Two - 12,5E",
//   content: "Ko lo si ibi ti o fe lo, oore wa nibe.",
//   category: "Blessings & Journey",
// },
// "12,5E-2": {
//   id: "12,5E-2",
//   title: "Line One/Two - 12,5E (Ijamba)",
//   content: "Mase lo si irin ajo bayi tori ijamba oko.",
//   category: "Travel & Danger",
// },
// "13,5E": {
//   id: "13,5E",
//   title: "Line One/Two - 13,5E",
//   content: "Irin ajo yen ko dara. Mose lo.",
//   category: "Travel & Warning",
// },
// "14,5E": {
//   id: "14,5E",
//   title: "Line One/Two - 14,5E",
//   content: "Awon agba ndaa laamu. Ko se iyonu/oore nibe fun ni okeere.",
//   category: "Elders & Conflict",
// },
// "15,5E": {
//   id: "15,5E",
//   title: "Line One/Two - 15,5E",
//   content: "Mase sin gbese.",
//   category: "Debt & Warning",
// },
// "16,5E": {
//   id: "16,5E",
//   title: "Line One/Two - 16,5E",
//   content: "Ko rin irin ajo toripe oore nbe fun lati okeere.",
//   category: "Travel & Blessing",
// },

// // === F Solutions ===
// "1F": {
//   id: "1F",
//   title: "Section One - 1F",
//   content:
//     "Iyemeji lori oyun. Aarun yoo ma dawa lamu. Alaafia ko kun to lara ara nfe isinmi. Be Olorun ko ma ri are, o need lati rest, ko ma lo sick, emi ti wa nile are.",
//   category: "Health & Rest",
// },
// "2F": {
//   id: "2F",
//   title: "Section Two - 2F",
//   content:
//     "Ninawo si are. Onibere nwa oyun, won joko le asiki. Aisi owo nda ile re ru. Ao wo ile kesan. Ti a ba humura (7@9). Gbogbo ore to fewo le won gba danu (12@12). Awon ti won je elemi okunkun (15@11). Ao wo to ba se adua, adua re yoo gba (2@2 ati 2@6 = aisan ailowo lowo nse o). ORI KO FO, EDO KO DUN, ARE AILOWO LOWO NSE.",
//   category: "Pregnancy & Financial Struggles",
// },
// "3F": {
//   id: "3F",
//   title: "Section Three - 3F",
//   content:
//     "Ko belorun ko ma ri idaamu lenu ise. To ba je onise owo, mo lo mo bo. Ko mo lo bere pe se ise tefe se mo. Onise osu won yoo gbe ogun ti nibise. Dojule, kosi owo lowo. 6@6 → osu meji si asiko yi wahala yoo ba ise to nse.",
//   category: "Work & Delay",
// },
// "4F": {
//   id: "4F",
//   title: "Section Four - 4F",
//   content:
//     "Ko si owo lowo re, asiri wa ko nitu. Yoo ri ayo nibi ise re.",
//   category: "Work & Joy",
// },
// "5F": {
//   id: "5F",
//   title: "Section Five - 5F",
//   content:
//     "Yoo ri wahala die. O nronu lori oro kan tabi irin ajo lilo. Owo ko si lowo. Asiri re konitu. Ise ti alaniyan nse ona re ni sugbon ko rise.",
//   category: "Travel & Worry",
// },
// "6F": {
//   id: "6F",
//   title: "Section Six - 6F",
//   content:
//     "Are yoo se o ti yoo po. Gbogbo nkan ti o nse lo ja bue. Nkan ko lo dede. O wa stand still. Osu meji si asiko yi wahala yoo sele si ise re tabi owo re → setback.",
//   category: "Setback & Health",
// },
// "7F": {
//   id: "7F",
//   title: "Section Seven - 7F",
//   content:
//     "Are yoo se oko re. To ba je obinrin, nkan ko lo dede fun oko. Asiri kantu. Ki a so ra. Umura ile kefa. Bi won fun laajo ko sise. Bo se adua, ko sise. Won yoo ko wahala ba ise re. Onise owo yoo ma le ise kiri. Daamu foro lori ise. Won nba ajo je mo lara. Ko lo we owo aje kuro lara.",
//   category: "Marriage & Work",
// },
// "8F": {
//   id: "8F",
//   title: "Section Eight - 8F",
//   content:
//     "Aisan yiyo lenu. Alaare yoo ku. Ki a mura. Won ndalamu nibi ise. Won ko feran re. Won soro re laida. Ona di. Aroka, aifin lokan bale lenu ise. Awon ota lo yika nibi ise. Ko sora. Ko si igbadun. Pakaleke wa nibe.",
//   category: "Enemies & Health",
// },
// "9F": {
//   id: "9F",
//   title: "Section Nine - 9F",
//   content:
//     "O yun fe baje ki a mura. Ma se je adeja. Iya onibere yoo sare ka bi lere pe iya re nko. Iya kan re to ru ti ebi npa. Ti o ba ni iya, ko toju iya re. Ebi npa. To ba ti ku, ko se sara fun.",
//   category: "Mother & Care",
// },
// "10F": {
//   id: "10F",
//   title: "Section Ten - 10F",
//   content:
//     "Enikan yoo looyun nitosi re. Oyun sunmo bayi. Alaboyun ti o wa lara wa, ki amojuto. To ba nise lowo, ao ki ku orire. Ti ko ba nise lowo, yoo pada jana ti yoo rise nibi ise ijoba, ile ise, ile owo. Ko ni problem kankan.",
//   category: "Pregnancy & Fortune",
// },
// "11F": {
//   id: "11F",
//   title: "Section Eleven - 11F",
//   content:
//     "Iyawo re yoo loyun. Aladehun yoo silka. Eniyi ni ipenija owo. Bi igba ti won ti lekun mole owo re, won ndi owo lowo. 11 bawa ni 6 nikan ti ko si nile, won ndi lowo. Ao ni ko lo ra eran, akuko adie tabi pepeye, ko pa ko fi eje re ra owo bi 30 minutes.",
//   category: "Pregnancy & Sacrifice",
// },
// "12F": {
//   id: "12F",
//   title: "Section Twelve - 12F",
//   content:
//     "Ko fi okan bale. Won ko le daduro nibi ise. Nkan burukukon ko le sele si lenu ise. Iyawo re yoo loyun. Alaare to wa legbe wa yoo gbadun.",
//   category: "Work & Children",
// },
// "13F": {
//   id: "13F",
//   title: "Section Thirteen - 13F",
//   content:
//     "Ise alaniyan duro dada. Kosi owo lowo. Omi wole omi. O le so dada. Ogun nje fun alaniyan.",
//   category: "Work & Struggles",
// },
// "14F": {
//   id: "14F",
//   title: "Section Fourteen - 14F",
//   content:
//     "Won nsasi. Ojo Wednesday ni won sa ogun yi. Wednesday na la gbodo ba je. Won sa si nibi ise. Ko rojutu oro ara re nibi ise.",
//   category: "Enemies & Day Warning",
// },
// "15F": {
//   id: "15F",
//   title: "Section Fifteen - 15F",
//   content:
//     "Eni yi nse ise ijoba tabi ko je oloselu.",
//   category: "Politics & Government Work",
// },
// "16F": {
//   id: "16F",
//   title: "Section Sixteen - 16F",
//   content:
//     "Awon aje nse meeting le lori. Eleda re wa ninu okunkun awon aje. Ki o toju ara tori aisan. Meeting lori re nibi ise.",
//   category: "Witchcraft & Health",
// },

// // === Extra Sections ===
// "6F1": {
//   id: "6F1",
//   title: "Extra Section - 6F1",
//   content:
//     "Sora fun ejo. Mase ba enia du nkan po tabi ja. Ni suuru ninu ohun gbogbo, igbese aye re yio dara. Ibanuje yio di ayo. Ranti awon oku orun re. Bi o ba fi okan re bale ona re yio dara. Emi buruku kan wa ni ibiti o kori si. Sora ki o ma ma bi ala buruku. Oro isiti. Eko kiko loni tabi lo eko ti a ni fun anfani eniyan. Ise riran si ibomiran tabi ki won ran ise si o.",
//   category: "Warnings & Education",
// },
// "6F2": {
//   id: "6F2",
//   title: "Extra Section - 6F2",
//   content:
//     "Ebun opolo. Olopolo pipe ni ogbon lati fi yanju oro. Awon eniyan yoo feran re. Olotito eda, alaanu eda. Oga ninu ohun ti o ba nse. Ebun irina lati ri ohun to ba sele loju aye tabi orun. Gbajumo, olokiki eniyan ni. Sora fun jibiti, agidi okan. ISE: Electrical, hotel, Akowe, Agbe, Adie sisin, Oluko, Ounje sise, Pharmacy. AISAN: Oru yoo ma fa aisan, inuriru, iba orikerike, ara riro, eyin didunki. Sugar ati ito sugar.",
//   category: "Wisdom & Skills",
// },

// // === F Line One/Two (1,6F – 16,6F) ===
// "1,6F": {
//   id: "1,6F",
//   title: "Line One/Two - 1,6F",
//   content: "Eniyi gbodo maa se suuru lopolopo. Ibinu.",
//   category: "Patience & Character",
// },
// "2,6F": {
//   id: "2,6F",
//   title: "Line One/Two - 2,6F",
//   content: "Atajere lori oja. Aje yori lori adawole.",
//   category: "Business & Profit",
// },
// "3,6F": {
//   id: "3,6F",
//   title: "Line One/Two - 3,6F",
//   content:
//     "Mura si adawole. Yio yori sir ere. Irin ajo yio dara. Obinrin kan yio maa naa lowo.",
//   category: "Business & Travel",
// },
// "4,6F": {
//   id: "4,6F",
//   title: "Line One/Two - 4,6F",
//   content: "Ko se adura daradara tori aseti.",
//   category: "Prayer & Warning",
// },
// "5,6F": {
//   id: "5,6F",
//   title: "Line One/Two - 5,6F",
//   content: "Eri okan yio maa je lori. Ihuwasi kan.",
//   category: "Character & Behavior",
// },
// "6,6F": {
//   id: "6,6F",
//   title: "Line One/Two - 6,6F",
//   content: "Isegun ota wa fun. Yio la laipe. Ko se aseta dada. Ola ti de bayi.",
//   category: "Victory & Enemies",
// },
// "7,6F": {
//   id: "7,6F",
//   title: "Line One/Two - 7,6F",
//   content: "Owo kan nbo fun tabi oore kan nbo. Ko sora ko ma je eedi.",
//   category: "Money & Warning",
// },
// "8,6F": {
//   id: "8,6F",
//   title: "Line One/Two - 8,6F",
//   content: "Yio se abosi si enikan. Yio si yii lowo.",
//   category: "Betrayal & Money",
// },
// "9,6F": {
//   id: "9,6F",
//   title: "Line One/Two - 9,6F",
//   content:
//     "Saara fun oku. Owo nbo fun sugbon ko se saara fun orisa kan nile won.",
//   category: "Ritual & Money",
// },
// "10,6F": {
//   id: "10,6F",
//   title: "Line One/Two - 10,6F",
//   content: "O nba enikan ja. Enikan nparo mo o.",
//   category: "Conflict & Lies",
// },
// "11,6F": {
//   id: "11,6F",
//   title: "Line One/Two - 11,6F",
//   content: "Irin ajo to lore ninu.",
//   category: "Travel & Blessing",
// },
// "12,6F": {
//   id: "12,6F",
//   title: "Line One/Two - 12,6F",
//   content: "Ona di moo. Ko se asina/adura. Ko maase sin gbese.",
//   category: "Obstacles & Debt",
// },
// "13,6F": {
//   id: "13,6F",
//   title: "Line One/Two - 13,6F",
//   content:
//     "Awon agba nfe gba nkan laro re. Ko se iyonu ki oore le tee lowo.",
//   category: "Elders & Fortune",
// },
// "14,6F": {
//   id: "14,6F",
//   title: "Line One/Two - 14,6F",
//   content: "Accident ko ni saara. Mase rin irin ajo titi ojo.",
//   category: "Travel & Accident",
// },
// "15,6F": {
//   id: "15,6F",
//   title: "Line One/Two - 15,6F",
//   content: "Ori irin ni oore re wa. Ko rin irin ajo.",
//   category: "Travel & Fortune",
// },
// "16,6F": {
//   id: "16,6F",
//   title: "Line One/Two - 16,6F",
//   content:
//     "Ifaseyin tori aare okan. Irewesi okan to nfa ifa seyin.",
//   category: "Heart & Delay",
// },

// // === G Solutions ===
// "1G": {
//   id: "1G",
//   title: "Section One - 1G",
//   content:
//     "Obinrin/okunrin alaroye. Sora fun ija, iyigi kan re. Nkan ti a so ni ile keta lao so nile keje. Okunrin ija. O fe fe iyawo. To ba se okunrin ao wo 1@3.",
//   category: "Marriage & Conflict",
// },
// "2G": {
//   id: "2G",
//   title: "Section Two - 2G",
//   content:
//     "Ninawo lori obinrin ti ko ni wulo fun yoo feran owo pupo. O ronu ju, ibanuje lori owo. O ti seyun fun yan ri tabi ki omo ti ku fun ri. O ti bimo ri, okunrin ni.",
//   category: "Money & Past Childbirth",
// },
// "3G": {
//   id: "3G",
//   title: "Section Three - 3G",
//   content:
//     "Iyawo/oko feran re. Sora ki awon ota ma ye si arin yin. Okiki re yoo kan laye. Onibere yoo ri obinrin kan o dara. Oko ti ki se alagbere.",
//   category: "Marriage & Enemies",
// },
// "4G": {
//   id: "4G",
//   title: "Section Four - 4G",
//   content:
//     "Sora ki ise ma dojuru. Onibere yori obinrin to lomi lara die, to mora pupa die, o dara. Ti ara re yoo gbona. Okunrin to lara die, ara yoo gbona.",
//   category: "Work & Love",
// },
// "5G": {
//   id: "5G",
//   title: "Section Five - 5G",
//   content:
//     "Obinrin/okunrin yoo ko sile. O fe gbe igbese lori oro kan, mura. A o ri obinrin kan ni ori irin. Okunrin to peji, to kola (1-1), tabi okunrin ti obinrin ko ni ridi joko lodo re. Afegbejusile, ti a ba ba bayala nile iyawo, iyawo to mora, sanra die ti yoo ma jowu. 5@7 bawa papo mo 4@3. Owu jije le ma jeki obinrin joko nile oko. Okunrin naa yoo ma paro iyawo bi igba ti eyan nparo aso. To ba se obinrin ni, oko yoo ma paro iyawo.",
//   category: "Marriage & Lies",
// },
// "6G": {
//   id: "6G",
//   title: "Section Six - 6G",
//   content:
//     "Obinrin kan nro ejo wa kiri. Ede ayide tin lo lowo ti o le jasi ikosile. Iyawo/oko alagidi ni. Pami nku. Ao bi lere pe se omo Osun ni iyawo tabi Ekiti.",
//   category: "Divorce & Trouble",
// },
// "7G": {
//   id: "7G",
//   title: "Section Seven - 7G",
//   content:
//     "Yoo fe obinrin to fi won ma fa mo rawon lowo. A o fe obinrin ti ko si ni ile oko. Okunrin pupa kan ni mo nwo nile. Awon agbalagba ni idile iya. Iyawo alaniyan eyan pupa ni. Alaniyan nta epo, ata tabi aso.",
//   category: "Marriage & Family",
// },
// "8G": {
//   id: "8G",
//   title: "Section Eight - 8G",
//   content:
//     "Yoo fe obinrin kan ti yoo buru onifari. Onibere yoo fe obinrin kan. Oko ni iya kan tabi aunt kan ti ko fe ki iyawo duro lodo re. Oko ati iyawo yoo ma ja. Se epe, ao bi pe tani ma sepe ti oro ba sele. O ni iyawo nile. Iya re tabi aunt re yoo ma gbogun ti iyawo. Won yoo ma ja fi ara won sepe. Epe ti won nfi ara won se yi yoo se, nitori awon nbe ti won nfi ase sori epe na. Bi ti 8@3.",
//   category: "Marriage & Family Conflict",
// },
// "9G": {
//   id: "9G",
//   title: "Section Nine - 9G",
//   content:
//     "Ki a ma se ko oko/iyawo. To ba je okunrin, o fe ko iyawo, ao wo ile kesan 9. Ti daili ba wa nibe, ko ni lo. Bo lo yoo pada. To ba se arija ni yoo lo.",
//   category: "Marriage & Travel",
// },
// "10G": {
//   id: "10G",
//   title: "Section Ten - 10G",
//   content:
//     "Obinrin kan to yodi yokun yoo fe fewa o dara (fun okunrin). Okunrin to yodi yokun fe fewa. Iyawo re/oko re eeyan kukuru ni yoo yokun. Yoo yodi alasiki ni.",
//   category: "Marriage & Character",
// },
// "11G": {
//   id: "11G",
//   title: "Section Eleven - 11G",
//   content:
//     "Yoo fe obinrin onitiju kan, ko si ibalopo loko laya. Bi ki won pa eeyan ti ao fe obinrin. Yoo leewa bi emere. Okunrin yen obinrin meji lo date papo, tabi kape iyawo meji loni nile.",
//   category: "Marriage & Secrets",
// },
// "12G": {
//   id: "12G",
//   title: "Section Twelve - 12G",
//   content:
//     "Yoo sapejuwe obinrin, yala iyawo tabi ale. O kuru, ko ga, o dudu. Obinrin ko mojuto ibujoko re. Obinrin naa yoo ma fi se faari. Aori obinrin kan, oni apa lese osi.",
//   category: "Marriage & Appearance",
// },
// "13G": {
//   id: "13G",
//   title: "Section Thirteen - 13G",
//   content:
//     "Oko nse agbore (13@7 ati 1@9, yoo ba obinrin sun ni ojo naa). Iyawo wa yoo kowa sile.",
//   category: "Adultery & Divorce",
// },
// "14G": {
//   id: "14G",
//   title: "Section Fourteen - 14G",
//   content:
//     "Won ko fe ko ni iyawo nile. Okunrin/oko yoo se ogun iferan si yin. Oko fe fun iyawo logun je. Ao wo ile iku 8, ile kejo ati ile ota 12. Ti a ba ba good star, ogun to le seku pa ni. To ba je bad star, ko le pa. O le je ti ife. Ile ota bad star kii se ota. Good star ota ni. 14@7 to ba jade fun obinrin, oko fe fun logun je. Ti a ba fe mo iru ogun, ao se bi a se fun okunrin. Ile kejo 8 ati ile kejila 12. Ti a ba good star, beeni yoo sise. Bad star ko ni sise.",
//   category: "Love Charm & Danger",
// },
// "15G": {
//   id: "15G",
//   title: "Section Fifteen - 15G",
//   content:
//     "To ba je obinrin, yoo fe okunrin kan alalubarika ti yoo je oloselu tabi onise ijoba.",
//   category: "Marriage & Politics",
// },
// "16G": {
//   id: "16G",
//   title: "Section Sixteen - 16G",
//   content:
//     "Yoo fe okunrin elejo, alagidi. To ba je obinrin, onibere baje. To ba je okunrin, yoo je elejo alagidi. Obinrin (16@1, 16@3, 16@7, 16@10). Opo ejo nbo.",
//   category: "Marriage & Court Cases",
// },

// // === Extra Sections ===
// "7G1": {
//   id: "7G1",
//   title: "Extra Section - 7G1",
//   content:
//     "Awon aje nse idaamu. Aisan to jemo inu ati ori fifo, oju. Asiri bibo lori gbese. Toju emi re tori ota. Oro ejo ti yoo jemo oye, dukia. Sora ki won ti o lu eniyan buruku. Oro etan larin okunrin si obinrin. Wa ni lari laye sugbon wa ri idaamu die. Ki e ma sika, ki o ma ja tabi soro lile. Eniyan pataki ni o. Wa ma gbayi nibikibi ti o ba lo. Olori ti won yoo ma bowo fun ni o. Sora fun iwa igberaga, enu didan bale. O ko gbodo ba inu je. Obi ifin bo eleda re.",
//   category: "Enemies & Warning",
// },
// "7G2": {
//   id: "7G2",
//   title: "Extra Section - 7G2",
//   content:
//     "O je olotito sugbon aye tabi awon eniyan koni gba o laye lati so otito. Won yoo ma ti si iro pipa. Otito yoo je ki awon eniyan korira re. Won yoo ma gba oro re sodi. Wa fe ma da se nkan tire. Ise si re yoo ma yato si ti elomiran. Wa agidi okan. Wa korira. Iyanje tabi ki enikan ma lo owo agbara lati pase leyan lori lona ti ko to. O je eniti ara re ko bale yoo ma se nkan pelu asise. Inu re ma sa dede baje. Ti o ba ronu lori bi nkan se nlo pelu re, ti ko te lorun, ero okan re ma nyi pada lojiji. Isele ojiji, ore ojiji, isubu ojiji. Ore ma nyoju nigbati o ba ti so ireti nu. O je alanu eda to lawo to bani o, ti yoo se ore fun eniti yoo lo owo tabi anfani na dada. Ma nronu jinle ko to se nkan. Ota po ti yoo ma jowu re. Ma fi inu han ore. O ma nko irinmeji bona po. Lakan soso. O ma nse nkan meji lekansoso. O ma nro ti elomiran mo tire. O ma se iwadi nkanju bi o fi ye lo, ti o le fa ikorira tabi ota. O ki wa iparun fun eniyan. Feran oso le sise tabi wa ni ayika to mo toni toni. AISAN: Arariro, inudidun, inurirun, ipalaran ibi ija (accident), arawiwo, oyioju. ISE: Teacher, Agbe, Tewetegbo sise, Egbo igi tita, Nkan osin, Aso reran, Nurse, Doctor, Owo sise.",
//   category: "Truth & Struggles",
// },

// // === G Line One/Two (1GG – 16GG) ===
// "1GG": { id: "1GG", title: "Line One/Two - 1GG", content: "Ona owo di moo. Ko ni ibelorun gidi.", category: "Money & Delay" },
// "2GG": { id: "2GG", title: "Line One/Two - 2GG", content: "Ona owo kan si sile fun. Ko sora fun ejo.", category: "Money & Warning" },
// "3GG": { id: "3GG", title: "Line One/Two - 3GG", content: "Awon aje nfe tire sugbon ko ma sun gbagbe ra.", category: "Enemies & Fortune" },
// "4GG": { id: "4GG", title: "Line One/Two - 4GG", content: "Yio rin irin ajo kan sugbon ko sora fun ore.", category: "Travel & Friends" },
// "5GG": { id: "5GG", title: "Line One/Two - 5GG", content: "Abosi yio waiye sii lori irin ajo. Ko ma dara de ore.", category: "Travel & Betrayal" },
// "6GG": { id: "6GG", title: "Line One/Two - 6GG", content: "Yio gburo owo kan. Yio pe die koto tee lowo. Adura.", category: "Money & Patience" },
// "7GG": { id: "7GG", title: "Line One/Two - 7GG", content: "Ota ndaa laamu. Ko mura gidi. Isoro ni ko maa se.", category: "Enemies & Trouble" },
// "8GG": { id: "8GG", title: "Line One/Two - 8GG", content: "Mase feto si omo bibi. Yio bimo topo.", category: "Children & Warning" },
// "9GG": { id: "9GG", title: "Line One/Two - 9GG", content: "Yio so owo nu. Ko sora fun jibiti.", category: "Money & Fraud" },
// "10GG": { id: "10GG", title: "Line One/Two - 10GG", content: "Ifa seyin nbe fun.", category: "Spiritual Delay" },
// "11GG": { id: "11GG", title: "Line One/Two - 11GG", content: "Aladehun ko ni sika. Ko se saara epo pupa.", category: "Sacrifice & Purity" },
// "12GG": { id: "12GG", title: "Line One/Two - 12GG", content: "Iyonu ni ko maa se. Awon eliye ndaa laamu.", category: "Trouble & People" },
// "13GG": { id: "13GG", title: "Line One/Two - 13GG", content: "Owo nbo fun lopolopo sugbon yio ri wahala die. Adura.", category: "Money & Prayer" },
// "14GG": { id: "14GG", title: "Line One/Two - 14GG", content: "Ona si funun. Ko maa se sara dada. Ona ti la fun.", category: "Opportunity & Care" },
// "15GG": { id: "15GG", title: "Line One/Two - 15GG", content: "Oju omo yio pon on.", category: "Children & Future" },
// "16GG": { id: "16GG", title: "Line One/Two - 16GG", content: "Awon eleiye yio maa daa laamu. Iyonu gidigidi.", category: "Enemies & Fear" },

// // === G Line Variations ===
// "7,1G": {
//   id: "7,1G",
//   title: "Line Variation - 7,1G",
//   content: "Amodi nse enikan yoo nawo pupo ki oto san.",
//   category: "Money & Debt",
// },
// "7,8G": {
//   id: "7,8G",
//   title: "Line Variation - 7,8G",
//   content: "Ori owo lati idale wa ti yoo po.",
//   category: "Wealth & Fortune",
// },

// // === H Solutions ===
// "1H": {
//   id: "1H",
//   title: "Section One - 1H",
//   content:
//     "Sora to ri iku ojiji. Gbogbo nkan to le fa iku ojiji ko sora. Ti aba ri 8@8, 4@4, 11@11 ati 5@12 ko iku ni. 8-iku, 4-aso funfun, 11-posi, 5-sare. 1@8, 14@9 accident to le fa iku. 14@9 ba daduro setback ifasehin ko ni nibi accident. 14@3 iyawo fe pa tabi fun logun je. 14@6 ibi iseni won ti fe pa/sa ogun si.",
//   category: "Death & Accident",
// },
// "2H": {
//   id: "2H",
//   title: "Section Two - 2H",
//   content: "Inu re yoo ma kun gburugbu. Awon aje ti gbe nkan si nikun.",
//   category: "Witchcraft & Stomach",
// },
// "3H": {
//   id: "3H",
//   title: "Section Three - 3H",
//   content:
//     "Ala wo lo la to jemo ija, tabi ta lo nbaja, tabi ba se gbolohun aso. Belorun ki ota ma reyin re.",
//   category: "Dream & Enemies",
// },
// "4H": {
//   id: "4H",
//   title: "Section Four - 4H",
//   content: "Ko so enu re, ko ma ma soro inu re sita. Kole ni aseyorii.",
//   category: "Speech & Failure",
// },
// "5H": {
//   id: "5H",
//   title: "Section Five - 5H",
//   content:
//     "Ko belorun lori omo. Enikan yoo saare sugbon ko ni ku. Ko mura ko ma ba.",
//   category: "Children & Fear",
// },
// "6H": {
//   id: "6H",
//   title: "Section Six - 6H",
//   content:
//     "Enikan yoo ku, ki a ma lo si ibe. Ko belorun ki won ma fi are da gunle.",
//   category: "Death & Illness",
// },
// "7H": {
//   id: "7H",
//   title: "Section Seven - 7H",
//   content:
//     "Obinrin kan nje ni bebe iku. Won fe fi ese da alaniyan tabi fi stroke se.",
//   category: "Death & Stroke",
// },
// "8H": {
//   id: "8H",
//   title: "Section Eight - 8H",
//   content:
//     "Ma ba yan ja tori iku ojiji. Ki onibere yi se saara tori iku ojiji. Ti a ba ri 8@8, 4@4, 11@11, 5@12: 8-iku, 4-aso funfun, 11-posi, 5-sare. Sora fun ija, ibinu, wahala, oran ti ko mowo mese ma di le lori.",
//   category: "Sudden Death & Conflict",
// },
// "9H": {
//   id: "9H",
//   title: "Section Nine - 9H",
//   content:
//     "Inawo tabi fifo nkan to re. Be Olorun ki awon ota ma so o di elemi kukuru tabi alare. Awon eeyan yoo ma niife wa. (9@8 ati 9@13 npase, ki alaniyan mura ajalu ti yoo sele, ti eyan yoo ma ta dukia ti yoo sora re di agbaana). Ki onibere ma fi ironu se ara re lese.",
//   category: "Enemies & Loss",
// },
// "10H": {
//   id: "10H",
//   title: "Section Ten - 10H",
//   content:
//     "Ki o sora ko wa owo dele iku. Ko mo se ogun owo, iku re, owo re. Ko duro ti Olorun.",
//   category: "Money & Death",
// },
// "11H": {
//   id: "11H",
//   title: "Section Eleven - 11H",
//   content:
//     "Ka sora fun ija nitori akoba. Sora ki awon emere ma da emi re legbodo.",
//   category: "Enemies & Spirit Children",
// },
// "12H": {
//   id: "12H",
//   title: "Section Twelve - 12H",
//   content:
//     "Ki onibere ma fa wahala, ma se jagidijagan. Eti yoo maa ba ohun to fe se. Won yoo ma wadi wa kiri.",
//   category: "Conflict & Trouble",
// },
// "13H": {
//   id: "13H",
//   title: "Section Thirteen - 13H",
//   content: "Asiki yio yoju sora – eran. Ki a se saara nkan eleje.",
//   category: "Sacrifice & Meat",
// },
// "14H": {
//   id: "14H",
//   title: "Section Fourteen - 14H",
//   content:
//     "Ka bi alaniyan lere pe se ese ko ma dun. Ese left ko mu ku riri. To ba ni ko dun oun ko mura ko ma te ogun mole. To ba o ndun, oun ot te ogun mole ni yen. Ki a ma da ise po pelu eeyan.",
//   category: "Enemies & Illness",
// },
// "15H": {
//   id: "15H",
//   title: "Section Fifteen - 15H",
//   content:
//     "Adua lori aisan kan ni gbigba adua ti npaya si. Yoo di arugbo laye – long-life.",
//   category: "Prayer & Long Life",
// },
// "16H": {
//   id: "16H",
//   title: "Section Sixteen - 16H",
//   content: "Arugbo kan yio ku. Ki won ma pejo aburu lori re.",
//   category: "Death & Elder",
// },

// // === H Line One / Two (1HH – 16HH) ===
// "1HH": { id: "1HH", title: "Line One/Two - 1HH", content: "Ona ma la funnu lori ohun gbogbo.", category: "Path & Success" },
// "2,8HH": { id: "2,8HH", title: "Line One/Two - 2,8HH", content: "Owo yio duro lowo re. Ko se adura.", category: "Money & Prayer" },
// "3HH": { id: "3HH", title: "Line One/Two - 3HH", content: "Irorun lori ohun gbogbo. Awon agba yio maa yonu sii.", category: "Ease & Elders" },
// "4HH": { id: "4HH", title: "Line One/Two - 4HH", content: "Otutu ife. Onmuu o nife si enikan.", category: "Love & Affection" },
// "5HH": { id: "5HH", title: "Line One/Two - 5HH", content: "Yio bimo ti yio po. Ko mase feto somo bibi.", category: "Children & Fertility" },
// "6HH": { id: "6HH", title: "Line One/Two - 6HH", content: "Alaisàn yio gbadun. Ko se saara eran.", category: "Health & Sacrifice" },
// "7HH": { id: "7HH", title: "Line One/Two - 7HH", content: "Oju omo npon.", category: "Children & Vision" },
// "8HH": { id: "8HH", title: "Line One/Two - 8HH", content: "Onwa obinrin/okunrin. O nife si obinrin/okunrin.", category: "Love & Desire" },
// "9HH": { id: "9HH", title: "Line One/Two - 9HH", content: "Yoo rin irin ajo. Yoo se ori re lajo.", category: "Travel & Fortune" },
// "10HH": { id: "10HH", title: "Line One/Two - 10HH", content: "Ona di moo. Asina ni ko maa se. Adura.", category: "Obstruction & Prayer" },
// "11HH": { id: "11HH", title: "Line One/Two - 11HH", content: "Yio so yigi loko/febinrin.", category: "Marriage & Trouble" },
// "12HH": { id: "12HH", title: "Line One/Two - 12HH", content: "Idunnu lori ise ti onse.", category: "Work & Joy" },
// "13HH": { id: "13HH", title: "Line One/Two - 13HH", content: "Owo kan nbo. Yio si lo lese kese. Adura/Aajo.", category: "Money & Prayer" },
// "14HH": { id: "14HH", title: "Line One/Two - 14HH", content: "Ipaya wa.", category: "Fear & Trouble" },
// "15HH": { id: "15HH", title: "Line One/Two - 15HH", content: "Awon agba ndaa laamu. Ko se iyonu.", category: "Elders & Relief" },
// "16HH": { id: "16HH", title: "Line One/Two - 16HH", content: "Yio travel. Mase ba eniyan ja.", category: "Travel & Peace" },

// // === H Subsections ===
// "8HA": {
//   id: "8HA",
//   title: "Subsection - 8HA",
//   content:
//     "Are ti yoo le pupo. Obinrin yoo se ore fun. Lilo si ibomiran tabi nibi ise miran tabi ki o lo gbe ibomiran. Belorun ole ara ati emi. Ituka oko, iyawo, tabi egbe. Ki o gbadura tori ibujoko (ko si oko nile tabi iyawo). Iku oko tabi iyawo. Awon kan dipo fun ibi, won nbinu re. Oro iwo ati iyawo re, won yoo se ogun nitori yin. Eniyan gigun kan yoo se lore. Mase ba eniyan lo fila ati kainkain. O tana waje. Eniyan gigun kan yoo se lore, o nwa owo, ko ma yorisi aisan. Oro isiti: sora fun iwa aifarabale. Woran woran loni. Ki o si gba imoran awon asaju. Gbiyanju lati je alatunse ki o ma je baseje loni. Sora fun obinrin/okunrin. Sora fun iwa palapala. Ma gbekele adehun awon eniyan. Ki o ma du emi re lorekore. Won yoo ma wa isubu re. Sora fun jibiti tabi wahala ti yoo gbe owo lo. Awon ti eko lero si ni yoo ma se aburu fun yin. Ki o so enu re, ki o ma ba fenu ko. Ki o oyun ma ba baje tabi so di arun. Irin ajo wa lese re.",
//   category: "Illness & Conflict",
// },
// "8HB": {
//   id: "8HB",
//   title: "Subsection - 8HB",
//   content:
//     "O je onitiju eda ti inu re dara, ti o feran alaafia, ti o ni ifarada igba kigba to de. Feran irepo, ko feran lati maa yoju si nkan ti kokan. O ni ebun ogbon ati oye tio n lo lati fi yanju oro ti o ba se koko. Feran orin, nife ile kiko. Elemi gigun, olofin toto, alanu eda ni. Awon eniyan yoo maa yan je. O maa n fa eniyan goke. O maa n je ibanuje fun ti ko ba si owolowo re lati fi se iranlowo fun eniyan. O maa n fi arani re lati ran elomiran lowo. O korira gbese tabi ra nkan win. O ko rira ki eniyan so rare di bukata si lorun. Okan re maa n wa lorin kan ti o bafe se tabi pinnu lori nkan kan. Nkan ti yoo yi ipinu re pada yoo le die. Igbese aye re yoo kun fun orisirisi ikuna, isoro, aini ifoya, airise ati wahala. Ati awon eniyan kan ti yoo maa je sababi buruku sinu aye won. Okan re naa lora lati gba yangbo tabi lati sun mo eniyan pelu iriri ti o ti ri pelu awon eniyan. Aisan: eti didun, efori, jedi, kuruna, eyin didun, inurirun, arariro, ona ofun didun, ejeriru. Sora pelu ounje lode. Ise: ile kiko, alagbase, agbe, oluko, iwe iroyin, ounje sise ta, eso tita, nkan oso ara ile ati oso ara, mineral tita, mechanic.",
//   category: "Personality & Occupation",
// },
// // === I Solutions ===
// "1I": {
//   id: "1I",
//   title: "Section One - 1I",
//   content:
//     "Eti lori nkan to fe se. Emi fe ri irin ajo ti yoo ba ijakule pade. Ti a ba fe mo nkan ti yoo sele, 1@9 → 1+9=8 inksu ijakule, bi emaru, sisubu, didide. To je process, nkan yoo leti. Ko se sara, ko se adua ki irinajo na ko le dun.",
//   category: "Journey & Delay",
// },
// "2I": {
//   id: "2I",
//   title: "Section Two - 2I",
//   content:
//     "Eti lori adawole. Eeti yoo ma ohun ti a ba nse. 9@1 ati 2@9 → 2+9=7. Awon agba ndiwo nfa eti. Olorun yoo so oro dayo, erin.",
//   category: "Hearing & Elders",
// },
// "3I": {
//   id: "3I",
//   title: "Section Three - 3I",
//   content:
//     "Idamu aye. Ategun loju ona. Yoo ma damu koto jeun, koto ri, koto lo. Gbogbo ona ni yoo di.",
//   category: "Confusion & Blockage",
// },
// "4I": {
//   id: "4I",
//   title: "Section Four - 4I",
//   content: "Irinajo kan yoo waye. Yoo ri idunnu nibe.",
//   category: "Travel & Joy",
// },
// "5I": {
//   id: "5I",
//   title: "Section Five - 5I",
//   content:
//     "Irinajo ti yoo jasi rere. Kiku ro nibikan si ibikan. Enikan sunmo ti yoo ti sibi dada ilu oyinbo. Agbega kan nbo fun onibere.",
//   category: "Journey & Promotion",
// },
// "6I": {
//   id: "6I",
//   title: "Section Six - 6I",
//   content:
//     "Fitina ati idamu ti okan ko. Gbogbo nkan lo ma slow gan. Gbogbo nkan ti awon egbe re ti se yoo tun wa lenu re.",
//   category: "Delay & Setback",
// },
// "7I": {
//   id: "7I",
//   title: "Section Seven - 7I",
//   content:
//     "Oro ibinu. Aje ndi lowo. Gbogbo ore ti nbo wa fun alaniyan won gba danu, won block re. Obinrin kan pupa yoo ma dina mowa.",
//   category: "Conflict & Blockage",
// },
// "8I": {
//   id: "8I",
//   title: "Section Eight - 8I",
//   content:
//     "Ka ma travel, ko dara. Ona di. Won ti gbe igi dana igbesi aye re ati je yoo nira. Atina yoo nira, ona ye ti di.",
//   category: "Journey Blockage",
// },
// "9I": {
//   id: "9I",
//   title: "Section Nine - 9I",
//   content:
//     "O fe rin irin ajo. Sora tori idiwo lona. Ori owo pupo, sora pelu irin kurin. A o lo si irinajo laipe yi ti yoo je mo opo ero. Irinajo kan nbo wa fun onirin ajo. Ka wo ile mefa 6, ti irawo to wa nibe ba da, ko ma lo o dara.",
//   category: "Travel & Fortune",
// },
// "10I": {
//   id: "10I",
//   title: "Section Ten - 10I",
//   content: "Yoo rin irin ajo ti yoo ri owo nibe.",
//   category: "Travel & Money",
// },
// "11I": {
//   id: "11I",
//   title: "Section Eleven - 11I",
//   content:
//     "Owo yoo bere sini wole bayi. Enikan nwa alaniyan bo moto. Car ni yoo gbe wa.",
//   category: "Wealth & Vehicle",
// },
// "12I": {
//   id: "12I",
//   title: "Section Twelve - 12I",
//   content:
//     "Ore yoo wole fun alaniyan. Ona ati travel o dara. Ore nbo.",
//   category: "Friends & Journey",
// },
// "13I": {
//   id: "13I",
//   title: "Section Thirteen - 13I",
//   content:
//     "Onibere ni moto nla yala jeep tabi trailer ti nwa fun ra re, tabi ko je trailer driver. Ki o ma se ja. Ore nbo. A o ri owo kan gba.",
//   category: "Vehicle & Money",
// },
// "14I": {
//   id: "14I",
//   title: "Section Fourteen - 14I",
//   content:
//     "Setback fun alaniyan. Won nse abosi onibere yi. Accident, etii, setback. Ifasehin.",
//   category: "Accident & Setback",
// },
// "15I": {
//   id: "15I",
//   title: "Section Fifteen - 15I",
//   content:
//     "Won yio pesin lopolopo. Oga lenu, won yoo promote re sibi to da. Ona travel o dara.",
//   category: "Promotion & Journey",
// },
// "16I": {
//   id: "16I",
//   title: "Section Sixteen - 16I",
//   content:
//     "Ko wa isora, ki won ma ti kuro nibi nkan daradara. Ona ati travel dii. Ki a ma lo. Irinajo ti yoo ni opo ero ninu, ko sora fun ejo.",
//   category: "Journey & Lawsuit",
// },

// // === I Subsections ===
// "9IA": {
//   id: "9IA",
//   title: "Subsection - 9IA",
//   content:
//     "Be Olorun ki awon ota ma ti o lu wahala ti yoo pe ki o to bo ninu re tabi sinu ofin (koto). Aye ti yoo wa ninu ironu ati ibanuje ti ko ni agbara kankan lati yoo ara re afi Olorun Oba nikan. O wa ninu ibanuje airi oluranlowo kankan. Ero kan yoo wa sinu okan re lati gbawe tabi se itore aanu tori aye ti o wa. O ma nla ala orisirisi. To ba ji ni aro o ma ngba gbese. Akojopo ninu ile fun nkan ti o sonu/tabi ija o. Won pejo won nsoro nkankan, oro na si buru larin yin tabi ki awon elomiran puro ole mo o. Mura ki o ma muti olopa dani. Loni wa ri apere orisirisi nkan, ero okan re ko ni duro si oju kan soso. Sora fun iwa ole ati oroju. Ma se gbagbe oro to ba se koko. Iwa obinrin.",
//   category: "Enemies & Trouble",
// },
// "9IB": {
//   id: "9IB",
//   title: "Subsection - 9IB",
//   content:
//     "O je eda ti ko nini ore otito ti yoo wa pelu re lo titi. O ma tete fura tabi ri asise eniyan, maa nronun ipa iwa ti eniyan le hu. Ko beru lati so otito. O ma nse gbogbo nkan re lona toto toye laarin ebi, ore ati ni bi gbogbo. O nbi ebun opolo, emi sise nkan titun ti kowo po tabi nkan atijo ka fi opolo gbe kale lati fi ba igba mu. Ironu jinle ati opolo ti ko wopo wa fun. O ni agbekale oro ti o ma soro fun eniyan lati le tete ronu lo si ibe. Ise ti o ba fi opolo ori gbe kale tabi tete ti a fi opolo ori ta ti ki se teteti a fi owo yoo ma je ju ise agbara lo. Iwa agidi, tinu mi ni nse, aigbaimoran, aini iberu lati koju enikeni paapaa to ba je lori otito. Inakuna nigba miran, idiju gbesan, obinrin ti o ko wulo ati okunrin ti ko wulo ni fife. Aisan: oju, iba, aisan arariro, ikoinuriru, otutu inu egun, ejeriru. Ise: Nurse, Electrical work, Olopa, Hotel, Ojise Olorun, Akowe, Labe ijoba, Oja tita lorisirisi, nkan oso ile, ounje tita, eja, mineral, perfume, make-up.",
//   category: "Personality, Sickness & Work",
// },

// // === I Line Two (2,9II – 16,9II) ===
// "2,9II": {
//   id: "2,9II",
//   title: "Line Two - 2,9II",
//   content: "Awon agba ndaa. Laamu lori arisiki. Adura ati iyonu.",
//   category: "Elders & Relief",
// },
// "3,9II": {
//   id: "3,9II",
//   title: "Line Two - 3,9II",
//   content: "Owo re njo. Owo ko ni kojosii lowo. Adura ati aajo.",
//   category: "Money & Prayer",
// },
// "4,9II": {
//   id: "4,9II",
//   title: "Line Two - 4,9II",
//   content: "Owo kan nba fun un sugbon ko ni duro lowo.",
//   category: "Money & Loss",
// },
// "5,9II": {
//   id: "5,9II",
//   title: "Line Two - 5,9II",
//   content: "Ko mase rin irin ajo. Ko ni ri nkan. Yi o nwa lo mubo.",
//   category: "Journey & Failure",
// },
// "6,9II": {
//   id: "6,9II",
//   title: "Line Two - 6,9II",
//   content: "Ona si fun lati se ohun kohun.",
//   category: "Opportunity & Path",
// },
// "7,9II": {
//   id: "7,9II",
//   title: "Line Two - 7,9II",
//   content: "Ko mase rin irin ajo. Obinrin yoo ri nkan osu re.",
//   category: "Journey & Women",
// },
// "8,9II": {
//   id: "8,9II",
//   title: "Line Two - 8,9II",
//   content: "Irin ajo yio waye sugbon ko kun fun adura. Ko maa baa bo lofo.",
//   category: "Journey & Prayer",
// },
// "9,9II": {
//   id: "9,9II",
//   title: "Line Two - 9,9II",
//   content: "Ko mase deja. Yio yi lowo. Yio ri nkan ti onfe. Nkan ti o sonu yio rii.",
//   category: "Loss & Recovery",
// },
// "10,9II": {
//   id: "10,9II",
//   title: "Line Two - 10,9II",
//   content: "Eje re yio maa fail. Ko sora fun hypertension.",
//   category: "Health & Blood",
// },
// "11,9II": {
//   id: "11,9II",
//   title: "Line Two - 11,9II",
//   content: "Yio maa se aare okan. Nkan to fe se ko ni bosi.",
//   category: "Heart & Failure",
// },
// "12,9II": {
//   id: "12,9II",
//   title: "Line Two - 12,9II",
//   content: "Asiri ki re nlo die die. Abgara na now. Owo re die die. Ko si ibe Olorun.",
//   category: "Secrets & Money",
// },
// "13,9II": {
//   id: "13,9II",
//   title: "Line Two - 13,9II",
//   content: "Omo re kan yio maa gbiyan ju sii.",
//   category: "Children & Troubles",
// },
// "14,9II": {
//   id: "14,9II",
//   title: "Line Two - 14,9II",
//   content: "Iyawo re wa ninu egbe. Yio si maa baa ja.",
//   category: "Marriage & Conflict",
// },
// "15,9II": {
//   id: "15,9II",
//   title: "Line Two - 15,9II",
//   content: "Ko mase ja rara. Suuru ni oro re gba.",
//   category: "Patience & Peace",
// },
// "16,9II": {
//   id: "16,9II",
//   title: "Line Two - 16,9II",
//   content: "Yio daran. Ko sora gidigidi. Adura.",
//   category: "Danger & Prayer",
// },
// // === J Solutions ===
// "1J": {
//   id: "1J",
//   title: "Section One - 1J",
//   content:
//     "Eti lori adawole. Awon agba ndamu. Ohunkohun ti aba nreti ko ni bosi. To ba je okunrin, awon aje fe mu loko ko lese dada, ato yoo san. To ba je obinrin, nkan osu re ko dara (irregular menstrual period).",
//   category: "Delay & Women",
// },
// "2J": {
//   id: "2J",
//   title: "Section Two - 2J",
//   content: "Yoo ri taje se, oni owo lowo.",
//   category: "Wealth & Profit",
// },
// "3J": {
//   id: "3J",
//   title: "Section Three - 3J",
//   content:
//     "Yoo ri ore lodo ijoba. Mura ki o di wahala olopa. A o ri anfaani lodo onise osu/ijoba. Gbogbo ibi ti o ba wa asiwaju ni, won yoo fi joye nla kan ko mo ko o. Oye nla, tent rere, bi award. To ba fe se oselu yoo rimu. To ba ndu ipo kan yoo bosi.",
//   category: "Government & Leadership",
// },
// "4J": {
//   id: "4J",
//   title: "Section Four - 4J",
//   content:
//     "Obinrin to ni owo e o jo se asepo. Won nwadi wa kiri. Yoo ni wahala legbe otun. Nkankan wa legbe otun ti yoo la operation lo. Ti a ba ri 9@2 ati 9@13, owo njo lo o ti di agbaana. Wahala inu didun.",
//   category: "Health & Women",
// },
// "5J": {
//   id: "5J",
//   title: "Section Five - 5J",
//   content:
//     "Wa ri letta ayo gba. A o ri gbigba. Ona owo gidi yoo la fun onibere. Gbigba adua lodo oloselu, lodo onise-osu.",
//   category: "Money & Joy",
// },
// "6J": {
//   id: "6J",
//   title: "Section Six - 6J",
//   content:
//     "Yoo ma sare okan, ko si owo lowo. Are nse owo re. Awon eniyan yoo ma fi iwosi lo e. Ti olopa ba nwa, won o mu.",
//   category: "Poverty & Trouble",
// },
// "7J": {
//   id: "7J",
//   title: "Section Seven - 7J",
//   content:
//     "O ni eyonu kan ti nlo ti nsise. Aye nyonu si. Gbogbo to nse odun mo won ninu.",
//   category: "Celebration & Envy",
// },
// "8J": {
//   id: "8J",
//   title: "Section Eight - 8J",
//   content:
//     "Ejo ti yoo na o lowo pupo ati wahala. Ni apa otun ni ikun wahala wa nibe. Yoo ma dun, yoo ma nawo si. Ti aba leri 9@2 ati 9@13 o ti di agbaana. Ko belorun ki won ma so asara sinu owo re. Are inu, papa lapa otun yoo ma dun, yoo ma kan. Ko tete mojuto ko ma di wahala si lorun.",
//   category: "Court & Expenses",
// },
// "9J": {
//   id: "9J",
//   title: "Section Nine - 9J",
//   content:
//     "Ore lodo ijoba, oloselu, olowo, yoo ri iwo si. Ti a ba fe mo iru ise ti eniyan nse, ao wo ile kewa 10 ati ile kefa 6. Yoo je olopa, soja, uniform. Alaniyan yoo change ile, yoo change ise.",
//   category: "Career & Government",
// },
// "10J": {
//   id: "10J",
//   title: "Section Ten - 10J",
//   content:
//     "Yoo bimo ti yoo ni ola. Adura wa yoo gba lodo onise-osu. Adura re ti gba, yoo ri anu Olorun.",
//   category: "Children & Blessing",
// },
// "11J": {
//   id: "11J",
//   title: "Section Eleven - 11J",
//   content:
//     "O da owo yo da. Won ko jeki owo duro. Won ngba owo danu. O ni ipenija owo.",
//   category: "Money & Loss",
// },
// "12J": {
//   id: "12J",
//   title: "Section Twelve - 12J",
//   content:
//     "Yoo ri idunnu lodo ijoba. Aranse nbo wa laipe yi. Olopa yoo mu, tabi oro to jemo ijoba. Yoo ni aponle, eni iyi, eni eye.",
//   category: "Honor & Government",
// },
// "13J": {
//   id: "13J",
//   title: "Section Thirteen - 13J",
//   content: "Yoo ri owo lati odo ijoba. Ao gburo owo kan.",
//   category: "Money & Government",
// },
// "14J": {
//   id: "14J",
//   title: "Section Fourteen - 14J",
//   content:
//     "Ko fi ajo tabi adua kun oro ara re ko le je eyan laaye. Won yio joko soro. Ko sora fun enu. Are ile iwosan, operation. Adura wa yoo gba.",
//   category: "Prayer & Health",
// },
// "15J": {
//   id: "15J",
//   title: "Section Fifteen - 15J",
//   content:
//     "Yoo rowo lenu se re, yoo jere oja. Through ise ijoba yoo dolowo, di doloro, di oga. Ki a ma se oniduro fun enikeni ni tolopa. Ti eeyan bani wahala pelu olopa tabi ijoba, yoo ri aanugba. O dara.",
//   category: "Business & Government",
// },
// "16J": {
//   id: "16J",
//   title: "Section Sixteen - 16J",
//   content:
//     "Ero okan ni lati ni ijo. Adura wa yoo gba. (16@1, 16@3, 16@7, 16@10 → opo ejo nbo).",
//   category: "Church & Cases",
// },

// // === J Subsections ===
// "10,2J": {
//   id: "10,2J",
//   title: "Subsection - 10,2J",
//   content: "Oyin fi se sara.",
//   category: "Honey & Sacrifice",
// },
// "10,7J": {
//   id: "10,7J",
//   title: "Subsection - 10,7J",
//   content: "O fe ni owo wa sini.",
//   category: "Money Desire",
// },
// "10,10J": {
//   id: "10,10J",
//   title: "Subsection - 10,10J",
//   content: "Oju yoo dun eni re kan. Aye lo wa nibe.",
//   category: "Joy & Life",
// },
// "10,12J": {
//   id: "10,12J",
//   title: "Subsection - 10,12J",
//   content: "Sora oro ewon nitori obinrin ko pe mo.",
//   category: "Court & Women",
// },
// "10,13J": {
//   id: "10,13J",
//   title: "Subsection - 10,13J",
//   content: "Won nse monafiki re lodo ijoba.",
//   category: "Deceit & Government",
// },
// "10,14J": {
//   id: "10,14J",
//   title: "Subsection - 10,14J",
//   content: "Sara fun agbalagba.",
//   category: "Elders & Sacrifice",
// },
// "10JA": {
//   id: "10JA",
//   title: "Subsection - 10JA",
//   content:
//     "Sora fun oro enu, oro ejo, tolopa tabi court, ale yiyan. Jeki gbogbo ona re kun fun isora. Sora fun iwa aifarabale. Woran woran loni, ki o si gba imoran awon asaju. Gbiyanju lati je alatunse, ki o ma je baseje. Loni sora fun iwa obinrin/okunrin pelu iwa palapala.",
//   category: "Speech & Court",
// },
// "10JB": {
//   id: "10JB",
//   title: "Subsection - 10JB",
//   content:
//     "O je onitiju eda ti inu re dara, ti o feran alaafia, ti o ni ifarada igba kigba to de. Feran irepo, ko feran lati maa yoju si nkan ti kokan. O ni ebun ogbon ati oye to n lo lati fi yanju oro ti o ba se koko. Feran orin, nife ile kiko, elemi gigun, olofin toto, alanu eda ni. Awon eniyan yoo maa yan je, o maa n fa eniyan goke, o maa n je ibanuje fun ti koba si owolowo re lati fi se iranlowo fun eniyan. O maa n fi arani re lati ran elomiran lowo. O korira gbese tabi ra nkan win. O ko rira ki eniyan so rare di bukata si lorun. Okan re maa n wa lorin kan ti o bafe se tabi pinnu lori nkankan. Nkan ti yoo yi ipinu re pada yoo le die. Igbese aye re yoo kun fun orisirisi ikuna, isoro, aini ifoya, airise ati wahala ati awon eniyan kan ti yoo maa je sababi buruku sinu aye won. Okan re naa lora lati gba yangbo tabi lati sun mo eniyan pelu iriri ti o ti ri pelu awon eniyan. Aisan: eti didun, efori, jedi, kuruna, eyin didun, inurirun, arariro, ona ofun didun, ejeriru. Sora pelu ounje lode. Ise: ile kiko, alagbase, agbe, oluko, iwe iroyin, ounje sise ta, eso tita, nkan oso ara ile ati oso ara, mineral tita, mechanic.",
//   category: "Personality, Sickness & Work",
// },

// // === J Line Two (1,10J – 16,10J) ===
// "1,10J": {
//   id: "1,10J",
//   title: "Line Two - 1,10J",
//   content: "Owo ko duro lowo re. Ibelorun/ajo.",
//   category: "Money & Prayer",
// },
// "2,10J": {
//   id: "2,10J",
//   title: "Line Two - 2,10J",
//   content: "Yio se afeku dukia kan (iyawo tabi omo).",
//   category: "Marriage & Wealth",
// },
// "3,10J": {
//   id: "3,10J",
//   title: "Line Two - 3,10J",
//   content: "Yio je oye tabi de ipo ola.",
//   category: "Title & Position",
// },
// "4,10J": {
//   id: "4,10J",
//   title: "Line Two - 4,10J",
//   content: "Inu re ko dun sugbon yio ri idunnu.",
//   category: "Happiness & Relief",
// },
// "5,10J": {
//   id: "5,10J",
//   title: "Line Two - 5,10J",
//   content: "Oore nbo sugbon ota po fun. Ko belorun.",
//   category: "Enemies & Kindness",
// },
// "6,10J": {
//   id: "6,10J",
//   title: "Line Two - 6,10J",
//   content: "O nba enia je tabi ki a so pe awon enia nse ibaje re.",
//   category: "Conflict & Envy",
// },
// "7,10J": {
//   id: "7,10J",
//   title: "Line Two - 7,10J",
//   content: "Ko ni aseyori kankan. Adura nikan nikan.",
//   category: "Failure & Prayer",
// },
// "8,10J": {
//   id: "8,10J",
//   title: "Line Two - 8,10J",
//   content: "Rin ajo ti a ko tanmo yoo ri oore nibe.",
//   category: "Travel & Blessing",
// },
// "9,10J": {
//   id: "9,10J",
//   title: "Line Two - 9,10J",
//   content: "Ore yoo daa, won yoo luu ni jibiti owo.",
//   category: "Friends & Fraud",
// },
// "10,10J": {
//   id: "10,10J",
//   title: "Line Two - 10,10J",
//   content: "Emi re kun fun opolopo nkan sugbon yoo se aseyori.",
//   category: "Life & Success",
// },
// "11,10J": {
//   id: "11,10J",
//   title: "Line Two - 11,10J",
//   content: "Oore kan nbo sugbon okan re nse iyameji.",
//   category: "Doubt & Help",
// },
// "12,10J": {
//   id: "12,10J",
//   title: "Line Two - 12,10J",
//   content: "Owo kan bo, yoo si duro lowo.",
//   category: "Money & Stability",
// },
// "13,10J": {
//   id: "13,10J",
//   title: "Line Two - 13,10J",
//   content: "Owo kan nbo, yoo si lo.",
//   category: "Money & Loss",
// },
// "14,10J": {
//   id: "14,10J",
//   title: "Line Two - 14,10J",
//   content: "Atajere lori oja.",
//   category: "Market & Profit",
// },
// "15,10J": {
//   id: "15,10J",
//   title: "Line Two - 15,10J",
//   content: "Irin ajo ti yoo mu ibinu wa.",
//   category: "Journey & Anger",
// },
// "16,10J": {
//   id: "16,10J",
//   title: "Line Two - 16,10J",
//   content: "Ogun airowona nba a ja.",
//   category: "Conflict & War",
// },
// // === K Solutions ===
// "1K": {
//   id: "1K",
//   title: "Section One - 1K",
//   content:
//     "Ero okan ti ko nise. Ohunkohun ti aba nreti koni bosi. Nkan ti okan eyan wa, idaamu, fi nkan-nkan, disappointment.",
//   category: "Disappointment & Delay",
// },
// "2K": {
//   id: "2K",
//   title: "Section Two - 2K",
//   content:
//     "Enikan nparo fun onibeere, nfi se yeye, eniti o fe se nkan eletan. Ti o ba nreti ore, ko gbadura si, ko ma le pe ko to bo si, nitori pe ina ni.",
//   category: "Deceit & Delay",
// },
// "3K": {
//   id: "3K",
//   title: "Section Three - 3K",
//   content:
//     "O fe fe obinrin tabi loko. Fun okunrin, iyawo meji loni. Fun obinrin, o fe loko titun, o ti fi ikan sile. Ile oko keji lowa. Agbokanle pelu adura ko ni ja ofo. Ti won ba fe se nkan fun tabi on reti nkan, emi buruku yoo ma so fun o pe ko nibo si. Aladehun ko ni sika. Ko ma fi okan si.",
//   category: "Marriage & Confusion",
// },
// "4K": {
//   id: "4K",
//   title: "Section Four - 4K",
//   content:
//     "Ti a ba ni tanmo nkankan yoo bosi. Ore ti Olorun ti pari ni. To ba je eni to loyun, ki won sora ki won ma fi obe gba omo ninu alaboyun. To ba je okunrin, ki won ma fi obe gba omo ninu iyawo.",
//   category: "Pregnancy & Safety",
// },
// "5K": {
//   id: "5K",
//   title: "Section Five - 5K",
//   content:
//     "Yoo ri letter lati okere. Owo kan tasore yoo te lowo. Gbogbo ore ti onibeere fi okan si pata ni yoo te lowo.",
//   category: "Letter & Money",
// },
// "6K": {
//   id: "6K",
//   title: "Section Six - 6K",
//   content:
//     "Yoo ri ore nibiti ko fi okan si. Ibi ti o ba fi okan si yoo slow die. Aya yoo ma ja, okan ko bale. Lori awon nkan to ko semi ti nre esi lati ibe, nkan yoo lo die ko to bo si. Delay, yoo bo si ki se immediately. To ba je eni to loyun, ki won ma fi obe gba omo ninu alaboyun. To ba je okunrin, ki won ma fi obe gba omo ninu iyawo.",
//   category: "Delay & Trouble",
// },
// "7K": {
//   id: "7K",
//   title: "Section Seven - 7K",
//   content: "Awon nkan ti alaniyan fokan ni ore, awon aje ti gba danu.",
//   category: "Lost Opportunities",
// },
// "8K": {
//   id: "8K",
//   title: "Section Eight - 8K",
//   content:
//     "Awon ota yoo ma dun koko mo aseyori lori nkan ti a ba fe. Ibi ti a ti nreti nkan yi, won yoo ni kope oku nkankan wa. To ba je ise ni nwa tabi ile iwe/travelling document/iwe igbelu, won a ni o ku document kan ko lo mu wa. Kanwon a ni o ku nkankan ki won lo mu wa. O tumo si pe nkan ti won nse ko iti pe. To ba ti pe, won yoo fun. To ba je owo, owo ye ko ni pe. Nkan ti nreti esi re npani laya. Fun apere, inu re ko dun bi nkan se nfale, yoo ni idaamu pelu aforiti. Adura yoo bo si. Delay ki se oju ese. Ti oyun ba ti yobi osu mefa meje ti o ti han sita (8@11 ki won mojuto oyun ko ma bi lokumo/fi obe gbebi)/4@11/6@11, ki eniti o loyun ki won ma fi obe gba ibi. Lojo ikunle, ti nba reti ore idaji ni yoo ri. To ba je contract meji ni o nreti, won fun ni eyokan tabi ki won o pin eyokan si meji. To ba je document lo submit si ibikan, won yoo ni o ku iwe kan ko lo mu wa. Leyin wahala yoo bosi.",
//   category: "Delay & Documents",
// },
// "9K": {
//   id: "9K",
//   title: "Section Nine - 9K",
//   content:
//     "Won fe yo ife re kuro lokan eni to feran re. Ijakule nibi afokansi. Ti a ba 9@11 ati 9@2 ba wa papo, irinajo wa lemi re ti o nawo si. Ki alaniyan ko ma fokan si ore kankan. Ti yoo ba bosi yoo daamu gan. Ko to bo si, ko ba owo ero de yoo ni wahala ninu ko to bosi.",
//   category: "Love & Obstacles",
// },
// "10K": {
//   id: "10K",
//   title: "Section Ten - 10K",
//   content:
//     "Ao ri nkan iwosi. Ki a faramo. Da yan laamu lori nkan ti o ba nfe ko to bosi, yoo bosi. Ore ti a fi okan si yoo wo le.",
//   category: "Patience & Reward",
// },
// "11K": {
//   id: "11K",
//   title: "Section Eleven - 11K",
//   content:
//     "Afokansi/erongba yoo se papa. Ti a ba ri irawo to da ni 6 ati 9, yoo lokiki. Adura re yoo gba.",
//   category: "Fame & Answered Prayer",
// },
// "12K": {
//   id: "12K",
//   title: "Section Twelve - 12K",
//   content:
//     "Disappointment. Won a ni ko mu nkan kan wa. Leyin na owo yoo te nkan ti a fe. Ti nba reti nkan, irorun. Gbogbo afokansi yoo jasi irorun.",
//   category: "Relief & Answer",
// },
// "13K": {
//   id: "13K",
//   title: "Section Thirteen - 13K",
//   content:
//     "Yoo fe obinrin lofe. Yoo ri oore nibi ti ko fokan si. Nkan ti a nreti yoo tewo. O fe se ajo kan, ajo na yoo si je. Ti a ba fe mo iru ajo na, ao wo ile 6 ati ile 9. Omi loba wa nibe, ajo na hantu ni, tabi agbo. To ba je erupe loba wa nibe, aje wipe ajo na nkan gigun, ose ni. To ba je ategun lowa nibe, yoo ni eye ninu. O le je jijo, o le je gigun. To ba ina lowa nibe, nkan bi ewe jijo ni.",
//   category: "Journey & Marriage",
// },
// "14K": {
//   id: "14K",
//   title: "Section Fourteen - 14K",
//   content:
//     "Ore ti nreti yoo bosi. Won a tun bere nkan miran ti yoo fe dabi etan. To ba fe gbowo nibikan, nkan ti o fe gba ko ni wa ri gba, yoo kere si afokansi re. Won yoo gba, lu ni jibiti. Won yoo ni o ku nkankan. Da nilaamu.",
//   category: "Fraud & Delay",
// },
// "15K": {
//   id: "15K",
//   title: "Section Fifteen - 15K",
//   content:
//     "Yoo fi se oga. Gbogbo nkan ti o nfi okan lodo eniyan, eeyan yoo gbadura ko to bo si.",
//   category: "Leadership & Delay",
// },
// "16K": {
//   id: "16K",
//   title: "Section Sixteen - 16K",
//   content: "Nkan ti o fi okan si yoo ni aroye ninu, ejo.",
//   category: "Court & Dispute",
// },

// // === K Subsections (11,3K – 11Kb) ===
// "11,3K": {
//   id: "11,3K",
//   title: "Subsection - 11,3K",
//   content: "Omo kekere kan yoo ku.",
//   category: "Death & Child",
// },
// "11,7K": {
//   id: "11,7K",
//   title: "Subsection - 11,7K",
//   content: "Ija de lori obinrin ara ile tabi adugbo.",
//   category: "Quarrel & Women",
// },
// "11,15K": {
//   id: "11,15K",
//   title: "Subsection - 11,15K",
//   content: "Owo ko si lowo, fe jade kuro ninu ilu. Ti o ba se be yoo dara.",
//   category: "Poverty & Escape",
// },
// "11KA": {
//   id: "11KA",
//   title: "Subsection - 11KA",
//   content:
//     "Iya ati ibanuje, itiju ati iponju. Ko si oluranlowo fun o afi Oluwa. Ohun ti on ro lokan le se si ere. Idiwo owo, alantakun kiko lara. Sora fun iwa aifarabale woran woran loni ki o si gba imoran awon asaju. Gbiyanju lati je alatunse, ki o ma je baseje. Loni sora fun obinrin/okunrin pelu iwa palapala.",
//   category: "Warning & Misfortune",
// },
// "11Kb": {
//   id: "11Kb",
//   title: "Subsection - 11Kb",
//   content:
//     "O je olotito, sugbon aye tabi awon eniyan koni gba o laaye lati so otito. Won yoo ma ti si iro pipa. Otito yoo je ki awon eniyan korira re. Won yoo ma gba oro re sodi. Wa fe ma da se nkan tire. Ti o ni fe se ajosepo pelu won tori ailooto, ise si re yoo ma yato si ti elomiran. Wa agidi okan, wa korira, iyanje tabi ki enikan ma lo owo agbara lati pase leyan lori lona ti ko to. O je eniti ara re ko bale, yoo ma se nkan pelu asise. Inu re ma sa dede baje. Ti o ba ronu lori bi nkan se nlo pelu re, ti ko te lorun, ero okan re ma nyi pada lojiji. Isele ojiji, ore ojiji, isubu ojiji. Ore ma nyoju nigbati o bati so ireti nu. Alanu eda to lawo to bani o, ti yoo se ore fun eniti yoo lo owo tabi anfani na dada. Ma nronu jinle ko to se nkan. Ota po ti won yoo ma jowu re. Ma fi inu han ore. O ma nko irinmeji bona po, lekan soso. O ma nse nkan meji lekansoso. O ma nro ti elomiran mo tire. O ma se iwadi nkanju bi o fi ye lo, ti o le fa ikorira tabi ota. O ki wa iparun fun eniyan. Feran oso le sise tabi wa ni ayika to mo toni-todi. AISAN: Arariro, inudidun, inurirun, ipalaran ibi-ija (accident), arawiwo, oyioju. ISE: Teacher, agbe, tewetegbo sise, egbo igi tita, nkan osin, aso reran, nurse, doctor, owo sise.",
//   category: "Personality, Sickness & Work",
// },

// // === K Line Two (1,11K – 16,11K) ===
// "1,11K": {
//   id: "1,11K",
//   title: "Line Two - 1,11K",
//   content: "Oogun yio maa daa laamu (Afunje oju oorun/Aye).",
//   category: "Medicine & Relief",
// },
// "2,11K": {
//   id: "2,11K",
//   title: "Line Two - 2,11K",
//   content: "Oore nla kan nbo wa. Kokun fun adura.",
//   category: "Help & Prayer",
// },
// "3,11K": {
//   id: "3,11K",
//   title: "Line Two - 3,11K",
//   content: "Oju obinrin/o ko yio maa pon on.",
//   category: "Women & Barrenness",
// },
// "4,11K": {
//   id: "4,11K",
//   title: "Line Two - 4,11K",
//   content: "Ririse/Ririje ko jina si, lasi koyi oore sunmo.",
//   category: "Fortune & Provision",
// },
// "5,11K": {
//   id: "5,11K",
//   title: "Line Two - 5,11K",
//   content: "Alakala wa fun.",
//   category: "Conflict & Division",
// },
// "6,11K": {
//   id: "6,11K",
//   title: "Line Two - 6,11K",
//   content: "Iyanje yio waaye lori oro kan. Suuru.",
//   category: "Quarrel & Patience",
// },
// "7,11K": {
//   id: "7,11K",
//   title: "Line Two - 7,11K",
//   content: "Ko sora fun ore kore. Onijibiti, ko sora ki jibiti ma daalu.",
//   category: "Fraud & Warning",
// },
// "8,11K": {
//   id: "8,11K",
//   title: "Line Two - 8,11K",
//   content: "Yoo fe obinrin. Yoo loko lorun.",
//   category: "Marriage & Blessing",
// },
// "9,11K": {
//   id: "9,11K",
//   title: "Line Two - 9,11K",
//   content: "Aisooto nko baa lemi ise. Irin ajo yoo waye ko lo.",
//   category: "Journey & Trouble",
// },
// "10,11K": {
//   id: "10,11K",
//   title: "Line Two - 10,11K",
//   content: "Oju owo npon. Saara nkan pupa.",
//   category: "Sacrifice & Wealth",
// },
// "11,11K": {
//   id: "11,11K",
//   title: "Line Two - 11,11K",
//   content: "Owo to po nbo wa fun.",
//   category: "Money & Gain",
// },
// "12,11K": {
//   id: "12,11K",
//   title: "Line Two - 12,11K",
//   content: "Airoju kan nbo, wa baa.",
//   category: "Trouble & Delay",
// },
// "13,11K": {
//   id: "13,11K",
//   title: "Line Two - 13,11K",
//   content: "Ko sora fun elenini.",
//   category: "Enemies & Warning",
// },
// "14,11K": {
//   id: "14,11K",
//   title: "Line Two - 14,11K",
//   content: "Bi ko ba moo eniyan je, won nba je.",
//   category: "People & Deception",
// },
// "15,11K": {
//   id: "15,11K",
//   title: "Line Two - 15,11K",
//   content: "Eti nsele lori ohun ti o beere si. Eti nsele sii.",
//   category: "Prayer & Hearing",
// },
// "16,11K": {
//   id: "16,11K",
//   title: "Line Two - 16,11K",
//   content: "Ko mase ebe. Iyonu lopolopo. Owo nbo.",
//   category: "Wealth & Relief",
// },
// // === L Solutions ===
// "1L": {
//   id: "1L",
//   title: "Section One - 1L",
//   content:
//     "Emi re wa lowo ota, ko mura ki won ma ma fi dara to wu won.",
//   category: "Enemies & Caution",
// },
// "2L": {
//   id: "2L",
//   title: "Section Two - 2L",
//   content:
//     "Ota ti yoo ma dina owo, pelu aiduro. Eeyan yoo bo lowo ota. Jeri ota, yoo fi ota se yeye pe o bori ota re.",
//   category: "Victory Over Enemies",
// },
// "3L": {
//   id: "3L",
//   title: "Section Three - 3L",
//   content:
//     "Ija ti a ba enikan ja ti aro pe o ti pari ti ko pari. L’okan eni yen, eni yen nbanija. Ti a ba ri 8@3, ni idile iyawo, iya iyawo tabi aunt iyawo yoo ma ba o ja. Tani o ma sepe larin yin, yoo ni epe sise ninu. (8@3 iyawo lo nbaja, 8@6 ibi ise ni won ti nbaja, 8@9 ija oju ona inu moto, awon eleye ni ota re). Belorun ki ota ma jeri re.",
//   category: "Quarrel & Family Enemies",
// },
// "4L": {
//   id: "4L",
//   title: "Section Four - 4L",
//   content: "Yoo jeri ota.",
//   category: "Enemies",
// },
// "5L": {
//   id: "5L",
//   title: "Section Five - 5L",
//   content:
//     "Eleda ko gbabode iku. Ko belorun ki ota ma rehin re. Ki o belorun fun omo re nitori ota.",
//   category: "Protection & Safety",
// },
// "6L": {
//   id: "6L",
//   title: "Section Six - 6L",
//   content:
//     "Ota ngbogun. Won nko ifasehin ba won, ko je ki o ni ilosiwaju. E mura dada, eda ti ogun ki ran.",
//   category: "War & Obstacles",
// },
// "7L": {
//   id: "7L",
//   title: "Section Seven - 7L",
//   content:
//     "Obinrin kan nbo wa sinu aye re. Ota ni aje si ni. Awon ota ti alaniyan ni aje. Nkan eyonu awon aje ni ko ma se.",
//   category: "Witchcraft & Women",
// },
// "8L": {
//   id: "8L",
//   title: "Section Eight - 8L",
//   content:
//     "Ota nwa ibanuje lori oro re. Ota po. Ota yoo ku. Ko belorun ki ota ma reyin re.",
//   category: "Enemies & Protection",
// },
// "9L": {
//   id: "9L",
//   title: "Section Nine - 9L",
//   content:
//     "Inu nbi awon ota wa. Ko ma jeki ota ko ile are si ara re. Ko ma fi aye sile fun ironu to le yori si are.",
//   category: "Enemies & Sickness",
// },
// "10L": {
//   id: "10L",
//   title: "Section Ten - 10L",
//   content:
//     "Belorun ki awon ota ma se fi are se o. Ota nyoju wo o, se iwadi oro eni, ngbiyanju lati mo monitor irinajo eni. Ota yoo ma gbogun tori buruji re to ji da da.",
//   category: "Enemies & Monitoring",
// },
// "11L": {
//   id: "11L",
//   title: "Section Eleven - 11L",
//   content: "Ota ti alaniyan emere ni, ki o se etutu emere.",
//   category: "Spiritual Enemy",
// },
// "12L": {
//   id: "12L",
//   title: "Section Twelve - 12L",
//   content: "Ota po, won fe gbemi re.",
//   category: "Enemies & Danger",
// },
// "13L": {
//   id: "13L",
//   title: "Section Thirteen - 13L",
//   content:
//     "Ota ngbogun sugbon isegun wa fun o. Isegun ota fun wa. Ota po fun, ota ni ko jeki nkan lo dede fun.",
//   category: "Victory Over Enemies",
// },
// "14L": {
//   id: "14L",
//   title: "Section Fourteen - 14L",
//   content:
//     "Ota nsa ogun si. Sora fun obinrin. Isegun ota fun onibeere.",
//   category: "Warfare & Protection",
// },
// "15L": {
//   id: "15L",
//   title: "Section Fifteen - 15L",
//   content: "Yoo ri eyin awon ota re lenu ise.",
//   category: "Enemies & Work",
// },
// "16L": {
//   id: "16L",
//   title: "Section Sixteen - 16L",
//   content: "Ota wa po gan.",
//   category: "Enemies",
// },

// // === M Solutions ===
// "1M": {
//   id: "1M",
//   title: "Section One - 1M",
//   content:
//     "Ore nbo wa odo alaniyan. 13+1=12, ore ni 12 nile ore ni.",
//   category: "Blessings & Friendship",
// },
// "2M": {
//   id: "2M",
//   title: "Section Two - 2M",
//   content:
//     "Onibeere yoo gba owo laipe. Ko ni owo lowo bi 2,500.",
//   category: "Money & Expectation",
// },
// "3M": {
//   id: "3M",
//   title: "Section Three - 3M",
//   content:
//     "Yoo ri leta lati okere. Sora tori aseyori, ota re awon to sunmo pekipeki.",
//   category: "Letter & Success",
// },
// "4M": {
//   id: "4M",
//   title: "Section Four - 4M",
//   content:
//     "Olorun se ore fun alaniyan ti ndunnu le lori. Owo wa lowo re, okan re bale. Nkankan nbe ti o je idunnu fun alaniyan.",
//   category: "Divine Blessing",
// },
// "5M": {
//   id: "5M",
//   title: "Section Five - 5M",
//   content:
//     "Enikan yoo fun loogun. Onibeere yoo gba call ayo. Yoo rise ti yoo po yoo si ni akojo.",
//   category: "Good News & Abundance",
// },
// "6M": {
//   id: "6M",
//   title: "Section Six - 6M",
//   content:
//     "Aladehun ko ni sika. Aibale okan lori oro kan. Awon to sunmo ni nko wahala ba.",
//   category: "Peace & People",
// },
// "7M": {
//   id: "7M",
//   title: "Section Seven - 7M",
//   content:
//     "Awon ti ndaa mu alaniyan, awon to sunmo ni.",
//   category: "Troublemakers",
// },
// "8M": {
//   id: "8M",
//   title: "Section Eight - 8M",
//   content:
//     "Okan re ko bale. Ipaya wa fun. Sora pelu epe sise.",
//   category: "Fear & Caution",
// },
// "9M": {
//   id: "9M",
//   title: "Section Nine - 9M",
//   content:
//     "Ti owo to opo yoo te wa lowo, o ma npora. Agbaana. Oni bere ni awon nkan ti nawo le lori. Ti a ba fe mo ibi ti nawo si, ao wo ile ise, ile omo, ile oko, ile iyawo. Ti a ba ti ri irawo ti ko dara nibe, ibe ni nawo si.",
//   category: "Money & Spending",
// },
// "10M": {
//   id: "10M",
//   title: "Section Ten - 10M",
//   content:
//     "Enikan yoo ma tan e. Sora fun jibiti. Won ndi lowo. O gba owo laipe yi. Owo wa lowo onibere. Owo nbe lowo alaniyan.",
//   category: "Fraud & Money",
// },
// "11M": {
//   id: "11M",
//   title: "Section Eleven - 11M",
//   content:
//     "Mase ya eniyan ni nkan. Mura dada. Emere ti nda lamu sunmo pekipeki.",
//   category: "Warning & Enemies",
// },
// "12M": {
//   id: "12M",
//   title: "Section Twelve - 12M",
//   content:
//     "Ma ya eniyan lowo, ko ni dapada. Fun. Owo ilu oyinbo wa lowo re.",
//   category: "Loans & Money",
// },
// "13M": {
//   id: "13M",
//   title: "Section Thirteen - 13M",
//   content:
//     "Ohun ti onse yio tee lowo. Onibeere nlo ajo to da to sise. Ao gba owo laipe yi.",
//   category: "Work & Money",
// },
// "14M": {
//   id: "14M",
//   title: "Section Fourteen - 14M",
//   content:
//     "Onibere ni ajo kan ti nje. Ko mase deja. Ipade kan yoo waye ki asora.",
//   category: "Meetings & Warning",
// },
// "15M": {
//   id: "15M",
//   title: "Section Fifteen - 15M",
//   content: "Yio jere oga. Yoo ni ilosiwaju lenu ise.",
//   category: "Work & Progress",
// },
// "16M": {
//   id: "16M",
//   title: "Section Sixteen - 16M",
//   content:
//     "Enikan yoo se aare. Awon eniyan yio ma wa o wa. Adura wa yoo gba. Ki ama binu.",
//   category: "Leadership & Prayer",
// },

// // === M Subsections (13,5M – 13Mb) ===
// "13,5M": {
//   id: "13,5M",
//   title: "Subsection - 13,5M",
//   content: "Ija ti won yio lurawon.",
//   category: "Quarrel",
// },
// "13,7M": {
//   id: "13,7M",
//   title: "Subsection - 13,7M",
//   content: "Ise kan nbe ti won yoo ran o. Wa ri ore nibe.",
//   category: "Work & Help",
// },
// "13,8M": {
//   id: "13,8M",
//   title: "Subsection - 13,8M",
//   content: "Enikan wa ti o si gba owo lowo re. Wa se suuru fun.",
//   category: "Debt & Patience",
// },
// "13,15M": {
//   id: "13,15M",
//   title: "Subsection - 13,15M",
//   content: "Ole nbo loru.",
//   category: "Warning & Theft",
// },
// "13,16M": {
//   id: "13,16M",
//   title: "Subsection - 13,16M",
//   content:
//     "Obinrin ati okunrin ti o sun mo o ni yio dide iranlowo fun o.",
//   category: "Help & Support",
// },
// "13MA": {
//   id: "13MA",
//   title: "Subsection - 13MA",
//   content:
//     "Awon eniyan yoo ma to o nija. Ko gbodo ba eniyan ja, ki o ma baa dina oore. Ikorira akoba lati odo ota ati jibiti ati oniwayo ore. Ibanuje re yio di ayo. Oluranlowo yoo dide fun o. Olorun yio mu isoro kuro lona re. Ire ni opin ona re yoo jasi. Fi adie funfun bo ori re ki omo araye baa. Sora fun iwa aifarabale woran woran, gba imoran awon asaju.",
//   category: "Enemies & Deliverance",
// },
// "13Mb": {
//   id: "13Mb",
//   title: "Subsection - 13Mb",
//   content:
//     "Ebun opolo. Olopolo pipe ni ogbon lati fi yanju oro to ba ta koko. Alanu eda ni o. Oga ninu ohun ti o ba nse. Ebun iran lati ri ohun ti o ba fe sele loju aye tabi orun. O je gbajumo, olokiki eniyan. Sora fun jibiti, agidi okan, ki eeyan ma gba imoran.",
//   category: "Gift & Wisdom",
// },

// // === Subsections (2,13M – 16,13M) ===
// "2,13M": {
//   id: "2,13M",
//   title: "Subsection - 2,13M",
//   content: "Accident. Ko ni ibeloriun. Ko le ri iranlowo gba.",
//   category: "Accident",
// },
// "3,13M": {
//   id: "3,13M",
//   title: "Subsection - 3,13M",
//   content: "Yio lu oogun lara obinrin. Arun. Sora fun sina.",
//   category: "Health & Warning",
// },
// "4,13M": {
//   id: "4,13M",
//   title: "Subsection - 4,13M",
//   content: "Won yio fi oro obinrin/oko loo. Ko fe, o dara.",
//   category: "Relationship",
// },
// "5,13M": {
//   id: "5,13M",
//   title: "Subsection - 5,13M",
//   content: "Ipaya wa fun. Airi owo to wa fun ko. Be olorun.",
//   category: "Fear & Money",
// },
// "6,13M": {
//   id: "6,13M",
//   title: "Subsection - 6,13M",
//   content: "Oyun yio maa bii. Ko iti duro daada.",
//   category: "Pregnancy",
// },
// "7,13M": {
//   id: "7,13M",
//   title: "Subsection - 7,13M",
//   content:
//     "Sina sise nko baa. Ki o fi sina sile, ko le ni laari.",
//   category: "Work",
// },
// "8,13M": {
//   id: "8,13M",
//   title: "Subsection - 8,13M",
//   content: "Ona ko dara fun onisowo.",
//   category: "Business",
// },
// "9,13M": {
//   id: "9,13M",
//   title: "Subsection - 9,13M",
//   content: "Ore kan nbo wa, ko tubo ni ibeloriun.",
//   category: "Friendship",
// },
// "10,13M": {
//   id: "10,13M",
//   title: "Subsection - 10,13M",
//   content:
//     "Aiye nda oro re ru. Okan re ko bale rara. Ko mura.",
//   category: "Disruption",
// },
// "11,13M": {
//   id: "11,13M",
//   title: "Subsection - 11,13M",
//   content: "Aise deede wa fun lenu ise. Ko lo fi sina sise sile.",
//   category: "Work",
// },
// "12,13M": {
//   id: "12,13M",
//   title: "Subsection - 12,13M",
//   content: "Omo kekere kan yio se aare. Ko toju re.",
//   category: "Child & Leadership",
// },
// "14,13M": {
//   id: "14,13M",
//   title: "Subsection - 14,13M",
//   content:
//     "Ajose owo pelu enikan ko ni yori si rere.",
//   category: "Partnership",
// },
// "15,13M": {
//   id: "15,13M",
//   title: "Subsection - 15,13M",
//   content: "Yio se oogun kan, yio si paa lara.",
//   category: "Health",
// },
// "16,13M": {
//   id: "16,13M",
//   title: "Subsection - 16,13M",
//   content: "Ko mase rin leru, ki won o maa baa fi ijambo se e.",
//   category: "Warning & Journey",
// },

// // === N Solutions ===
// "1N": {
//   id: "1N",
//   title: "Section One - 1N",
//   content:
//     "Asiri yoo nbo lati odo obinrin wa. Aleejo nwa alfa bo wa. Ti a ba 11@9, alejo ngbe moto nbo. 10@9 alejo nmu owo obo. 10@4 alejo ngbe aso bo.",
//   category: "Secrets & Visitors",
// },
// "2N": {
//   id: "2N",
//   title: "Section Two - 2N",
//   content:
//     "Ipo nla kan yoo sile, mura tori ota. Afe se ogun kan yoo na wa lowo. Alfa yoo ri owo kekere kan.",
//   category: "Position & Enemies",
// },
// "3N": {
//   id: "3N",
//   title: "Section Three - 3N",
//   content:
//     "Obinrin kan n wo ile ologun. Inu yoo dun lori ohun ti afe se. Alfa belorun ki awon aje ma baa ise re je.",
//   category: "Women & Protection",
// },
// "4N": {
//   id: "4N",
//   title: "Section Four - 4N",
//   content: "Alfa na ri ore ti ndun ninu.",
//   category: "Joy & Blessings",
// },
// "5N": {
//   id: "5N",
//   title: "Section Five - 5N",
//   content: "Ona yoo la fun Alfa, ona ko di mo Alfa.",
//   category: "Path & Progress",
// },
// "6N": {
//   id: "6N",
//   title: "Section Six - 6N",
//   content: "Nkan slow fun Alfa.",
//   category: "Delay",
// },
// "7N": {
//   id: "7N",
//   title: "Section Seven - 7N",
//   content: "Alaniyan, nla ala buruku.",
//   category: "Dreams",
// },
// "8N": {
//   id: "8N",
//   title: "Section Eight - 8N",
//   content:
//     "Oro ile, eniyan yoo ku lori re, sora fun enu. Eyin yoo ma dun onibere. Alfa yoo ri owo kekere.",
//   category: "Home & Death",
// },
// "9N": {
//   id: "9N",
//   title: "Section Nine - 9N",
//   content:
//     "Sora fun ore ti n wole bo. Tera mo ogun yoo sise. Okan alaniyan ko bale.",
//   category: "Enemies & Caution",
// },
// "10N": {
//   id: "10N",
//   title: "Section Ten - 10N",
//   content:
//     "Won nbo wa fun Alfa lowo. Alfa yoo ri owo. Ao wo ile 9 lati fi mo bi yoo se ti ya si.",
//   category: "Money & House",
// },
// "11N": {
//   id: "11N",
//   title: "Section Eleven - 11N",
//   content: "Ko se sara fun dada. Ogun yoo sise fun wa gam.",
//   category: "Healing & War",
// },
// "12N": {
//   id: "12N",
//   title: "Section Twelve - 12N",
//   content: "Awon ota ni nse o. Owo kan nbo fun Alfa.",
//   category: "Enemies & Money",
// },
// "13N": {
//   id: "13N",
//   title: "Section Thirteen - 13N",
//   content:
//     "Sora ole. Ao gba owo loni yi. Onimoto bi jeep n wa Alfa bo. Ti a ba ba irawo to da ni ile kesan yoo se dada.",
//   category: "Theft & Blessings",
// },
// "14N": {
//   id: "14N",
//   title: "Section Fourteen - 14N",
//   content:
//     "Ki Alfa sora ki won ma lu ni jibiti. Awon agba n da lamu. Jibiti yoo lu ni, bi igbati won fi wahala gba owo danu lowo re.",
//   category: "Fraud & Elders",
// },
// "15N": {
//   id: "15N",
//   title: "Section Fifteen - 15N",
//   content:
//     "Yio de ipo ola. Awon oro iro kan yio sele si o. Ao de ipo baba wa.",
//   category: "Position & Lies",
// },
// "16N": {
//   id: "16N",
//   title: "Section Sixteen - 16N",
//   content:
//     "Oogun yio maa baje. Ogun ti ase ko ope. Alfa yoo ri ero.",
//   category: "Medicine & Failure",
// },

// // === N Subsections (14NA – 14Nb) ===
// "14NA": {
//   id: "14NA",
//   title: "Subsection - 14NA",
//   content:
//     "Bi o ba ni ero lati lo si idale malo nitori aisan lile, fi sile di gbamiran nitori igbehin yoo dara. Nkan ti o fe se pelu agbara le di ofo ati adanu. Fi eja osan se sara ifun, fi isu bo ogun.",
//   category: "Sickness & Sacrifice",
// },
// "14Nb": {
//   id: "14Nb",
//   title: "Subsection - 14Nb",
//   content:
//     "O je onitiju, inu re dara, feran alaafia, ni ifarada. Ebun ogbon ati oye lati yanju oro. Feran orin, ile kiko, elemi gigun. O je alanu. O maa n ran elomiran lowo. O korira gbese. Igbese aye re yoo kun fun isoro, ikuna, wahala. O maa ni iriri pelu eniyan. Aisan: eti didun, efori, jedi, kuruna, eyin didun, inurirun, ona ofun didun, ejeriru. Ise: ile kiko, agbe, oluko, iwe iroyin, ounje sise ta, eso tita, mechanic.",
//   category: "Character & Health",
// },

// // === N Subsections (1,14N – 16,14N) ===
// "1,14N": {
//   id: "1,14N",
//   title: "Subsection - 1,14N",
//   content:
//     "Irin ajo yio yoju. Ko lo/jade nilu. Teri arisiki.",
//   category: "Journey",
// },
// "2,14N": {
//   id: "2,14N",
//   title: "Subsection - 2,14N",
//   content:
//     "Ota npete buburu sii lenu ise/inuu ile ti o n gbe.",
//   category: "Enemies",
// },
// "3,14N": {
//   id: "3,14N",
//   title: "Subsection - 3,14N",
//   content:
//     "Yio ra ile kan. Ko moju too. Lose nkan lee lori.",
//   category: "House",
// },
// "4,14N": {
//   id: "4,14N",
//   title: "Subsection - 4,14N",
//   content:
//     "Sora ko ma sofo dukia kan. Ko gbadura ki dukia ma sofo. Owo nbo fun lopolopo sugbon ko gbadura, teri ijamba.",
//   category: "Wealth & Prayer",
// },
// "5,14N": {
//   id: "5,14N",
//   title: "Subsection - 5,14N",
//   content:
//     "Mase rin irin ajo tabi jade nilu. Mase rin loru. Sora.",
//   category: "Journey & Warning",
// },
// "6,14N": {
//   id: "6,14N",
//   title: "Subsection - 6,14N",
//   content:
//     "Ona owo kan nyoju bo. Ko ku fun adura, yio tewo.",
//   category: "Money",
// },
// "7,14N": {
//   id: "7,14N",
//   title: "Subsection - 7,14N",
//   content:
//     "Awon agba yio maa daa laamu loju oorun.",
//   category: "Dream",
// },
// "8,14N": {
//   id: "8,14N",
//   title: "Subsection - 8,14N",
//   content:
//     "Ko gbadura gidi gidi, ko ma baa se aare.",
//   category: "Prayer",
// },
// "9,14N": {
//   id: "9,14N",
//   title: "Subsection - 9,14N",
//   content:
//     "Obinrin pupa kan nsaa gun sii. Ko le elo, ko ma ba sepo mo.",
//   category: "Women",
// },
// "10,14N": {
//   id: "10,14N",
//   title: "Subsection - 10,14N",
//   content:
//     "Yio ri iranlowo lati odo obinrin onisowo kan.",
//   category: "Help",
// },
// "11,14N": {
//   id: "11,14N",
//   title: "Subsection - 11,14N",
//   content:
//     "Oju owo npon. Ko mura si adura.",
//   category: "Money & Prayer",
// },
// "12,14N": {
//   id: "12,14N",
//   title: "Subsection - 12,14N",
//   content:
//     "Ko moju to ara re nitori aare, sugbon eni re gun.",
//   category: "Sickness",
// },
// "13,14N": {
//   id: "13,14N",
//   title: "Subsection - 13,14N",
//   content:
//     "Alaare wo lo wa legbe eni. Ka moju too, ko ma baa ku. Gbadura tori aare.",
//   category: "Sickness & Prayer",
// },
// "14,14N": {
//   id: "14,14N",
//   title: "Subsection - 14,14N",
//   content:
//     "Obinrin yio loyun. Mase se oyun. Aidara ni yio gbehin re. O lewu.",
//   category: "Pregnancy",
// },
// "15,14N": {
//   id: "15,14N",
//   title: "Subsection - 15,14N",
//   content:
//     "O ngburo owo sugbon owo ko n lee. Adura gidi. Ole yio jaa.",
//   category: "Money & Theft",
// },
// "16,14N": {
//   id: "16,14N",
//   title: "Subsection - 16,14N",
//   content:
//     "Won yio gbee ni dukia lo.",
//   category: "Wealth & Theft",
// },

// // === O Solutions ===
// "5O": {
//   id: "5O",
//   title: "Section Five - 5O",
//   content:
//     "Adura onibeere yoo gba leta/message ayo. Ki o toju ara tori, aisan eyin didun. Ilu to wa yoo rise nibe.",
//   category: "Prayer & Message",
// },
// "6O": {
//   id: "6O",
//   title: "Section Six - 6O",
//   content:
//     "Okan alaniyan ko bale. Ti a ba fe mo ibi aibale okan wa, ao wo ile owo, ile omo, ile afokansi, ile ise. Ti a ba ti ba irawo ti ko dara, ibe ni ibi aibale okan wa.",
//   category: "Restlessness",
// },
// "9O": {
//   id: "9O",
//   title: "Section Nine - 9O",
//   content:
//     "Aye yoo gba o nibiti o bawa, olori nibi gbogbo. Adura wa yoo gba laarin ilu yi.",
//   category: "Blessings",
// },
// "10O": {
//   id: "10O",
//   title: "Section Ten - 10O",
//   content:
//     "Arisiki to po lodun yi. Orisirisi ore nbo.",
//   category: "Wealth",
// },
// "11O": {
//   id: "11O",
//   title: "Section Eleven - 11O",
//   content:
//     "Adura ti gba. Ajosepo kan yoo yori si rere.",
//   category: "Prayer & Partnership",
// },
// "12O": {
//   id: "12O",
//   title: "Section Twelve - 12O",
//   content:
//     "Wa gba owo kan laipe yi. Ile ti o ngbe ko jinna si odo. Won kun ninu won ko kun nita.",
//   category: "Money",
// },
// "15O": {
//   id: "15O",
//   title: "Section Fifteen - 15O",
//   content:
//     "Yio maa pase. Ogun yoo sise fun wa. Gbogbo nto wa lori ile yoo se.",
//   category: "Authority & Healing",
// },
// "16O": {
//   id: "16O",
//   title: "Section Sixteen - 16O",
//   content:
//     "Adura yoo gba.",
//   category: "Prayer",
// },

// // === O Subsections (15OA – 15Ob) ===
// "15OA": {
//   id: "15OA",
//   title: "Subsection - 15OA",
//   content:
//     "Iwo yoo ma gbiyanju wa ojutu si oro aye re. Yoo ri iranlowo lowo eniyan. Idiwo ota yoo derun. Irinajo yoo pa iwo ati enikan po, ife wa nibe. Sora fun ija nla. Ma ba eniyan da nkan po tabi ya eniyan ni nkan. Oro isiti: ori irin ni ibi pataki jijade. Kaki ri kuro ninu ile fun nkankan. Yoo ma ronu lori bi aye re yoo se daru. Sunmo olorun, ma saanu.",
//   category: "Life & Obstacles",
// },
// "15Ob": {
//   id: "15Ob",
//   title: "Subsection - 15Ob",
//   content:
//     "O je olotito sugbon awon eniyan ko ni gba o laaye lati so otito. Won yoo maa ti si iro pipa. Otito yoo je ki won korira re. O maa n se nkan pelu asise, inu re maa nbaje lojiji. Ore ojiji, isele ojiji, ore maa nyoju nigbati o ba so ireti nu. O je alanu, sugbon ota po. O maa nko irinmeji, nse nkan meji lekansoso. O ma se iwadi nkanju ti o le fa ikorira. Ise: Teacher, agbe, tewetegbo, egbo igi tita, aso reran, nurse, doctor, owo sise. Aisan: arariro, inudidun, inurirun, ipalaran (accident), arawiwo, oyioju.",
//   category: "Character & Destiny",
// },

// // === O Subsections (1,15O – 16,15O) ===
// "1,15O": {
//   id: "1,15O",
//   title: "Subsection - 1,15O",
//   content:
//     "Owo kan nbo wa fun. Ko se adura dada.",
//   category: "Money",
// },
// "2,15O": {
//   id: "2,15O",
//   title: "Subsection - 2,15O",
//   content:
//     "Aisan yio se. Ko be Olorun.",
//   category: "Sickness",
// },
// "3,15O": {
//   id: "3,15O",
//   title: "Subsection - 3,15O",
//   content:
//     "Ko sora fun gbese. Yio je gbese. Ko be Olorun.",
//   category: "Debt",
// },
// "4,15O": {
//   id: "4,15O",
//   title: "Subsection - 4,15O",
//   content:
//     "Yio fe obinrin/loko. Iyawo/oko kan yio.",
//   category: "Marriage",
// },
// "5,15O": {
//   id: "5,15O",
//   title: "Subsection - 5,15O",
//   content:
//     "Ko sora fun ota. Ota doyi kaa. Ko fi aadun se sara ki o le rojutu oro re. Ko sora fun gbese. Ajadi apere belorun.",
//   category: "Enemies & Debt",
// },
// "6,15O": {
//   id: "6,15O",
//   title: "Subsection - 6,15O",
//   content:
//     "Aise deede yio wa fun lodo obinrin okunrin. Gbese aise deede lori ojo. Adura.",
//   category: "Debt & Prayer",
// },
// "7,15O": {
//   id: "7,15O",
//   title: "Subsection - 7,15O",
//   content:
//     "Onlo sin gbese kan. Ko se adura, ko le ri owo na gba.",
//   category: "Debt",
// },
// "8,15O": {
//   id: "8,15O",
//   title: "Subsection - 8,15O",
//   content:
//     "Yio maa na anadanu lori obinrin/okunrin. Yio maa je arisiki re.",
//   category: "Loss",
// },
// "9,15O": {
//   id: "9,15O",
//   title: "Subsection - 9,15O",
//   content:
//     "Aisooto yio ko baa lenu ise re.",
//   category: "Falsehood",
// },
// "10,15O": {
//   id: "10,15O",
//   title: "Subsection - 10,15O",
//   content:
//     "Owo kan nbo wa fun lati okeere.",
//   category: "Foreign Money",
// },
// "11,15O": {
//   id: "11,15O",
//   title: "Subsection - 11,15O",
//   content:
//     "Oogun yio sise fun. Adura yio gba.",
//   category: "Healing & Prayer",
// },
// "12,15O": {
//   id: "12,15O",
//   title: "Subsection - 12,15O",
//   content:
//     "Ko mase deja. Yio deja, yio si yii lowo. Asiriki gan.",
//   category: "Warning",
// },
// "14,15O": {
//   id: "14,15O",
//   title: "Subsection - 14,15O",
//   content:
//     "Asiriki jinna si emi. Ko belorun fun.",
//   category: "Spiritual Protection",
// },
// "15,15O": {
//   id: "15,15O",
//   title: "Subsection - 15,15O",
//   content:
//     "Yio je gbese ti yio po. Ko belorun.",
//   category: "Debt",
// },
// "16,15O": {
//   id: "16,15O",
//   title: "Subsection - 16,15O",
//   content:
//     "Yio fe obinrin. Ko sora fun sina. O nfe se sina.",
//   category: "Marriage & Path",
// },

// // === P Solutions ===
// "1P": {
//   id: "1P",
//   title: "Section One - 1P",
//   content:
//     "Ti o ba lo si irinajo yoo pe ju bo ti se ye, ko mura, ko le ri nkan mubo.",
//   category: "Travel",
// },
// "2P": {
//   id: "2P",
//   title: "Section Two - 2P",
//   content:
//     "Ori oluranlowo nibi bukata re. Ore kan nbo fun lati eyin odi wa.",
//   category: "Help & Support",
// },
// "3P": {
//   id: "3P",
//   title: "Section Three - 3P",
//   content:
//     "O fe gbe igbese lori oro kan, mura tori igbeyin oro ko le dara. Ore okeere nbo wa. Belorun ki awon eleye ma da o laamu.",
//   category: "Decision & Protection",
// },
// "4P": {
//   id: "4P",
//   title: "Section Four - 4P",
//   content:
//     "Yoo ri eniti won jo rira tipe. Yoo lo si eyin odi, yoo ri ore la eyin odi. Won yoo fi oro obinrin kan lo wa.",
//   category: "Partnership",
// },
// "5P": {
//   id: "5P",
//   title: "Section Five - 5P",
//   content:
//     "Sora ki won ma se epe. Oore okere nwole bo fun onibeere. Adua onibere yoo gba leyin odi to ba travel.",
//   category: "Prayer & Blessings",
// },
// "6P": {
//   id: "6P",
//   title: "Section Six - 6P",
//   content:
//     "Gbadura ki igbehin oro le yorisi rere. Awon eleye nko ifaseyin ba alaniyan lori adawole.",
//   category: "Prayer & Protection",
// },
// "7P": {
//   id: "7P",
//   title: "Section Seven - 7P",
//   content:
//     "Awon apapo eleye nda onibere laamu.",
//   category: "Obstacles",
// },
// "8P": {
//   id: "8P",
//   title: "Section Eight - 8P",
//   content:
//     "Arun ehin didun. Adua lori wahala awon aje. Awon eniyan yoo ba o se ejo. 16@1,16@3,16@7,16@10, opo ejo.",
//   category: "Health & Court Issues",
// },
// "9P": {
//   id: "9P",
//   title: "Section Nine - 9P",
//   content:
//     "Ore eyin odi ko gbi yanju ko travel, ore wa ni be. Ore lati odo arinrin ajo. Ao lo si irinajo ti aori ore nbe.",
//   category: "Travel & Friendship",
// },
// "10P": {
//   id: "10P",
//   title: "Section Ten - 10P",
//   content:
//     "Adua wa yoo gba lodo arinrin ajo. Ore alaniyan wa leyin odi.",
//   category: "Prayer & Support",
// },
// "11P": {
//   id: "11P",
//   title: "Section Eleven - 11P",
//   content:
//     "Sora ole, eru re wa legbe ona. Ma se fi eru re so eniyan. Ati eyin odi ni won ti nta ofa si.",
//   category: "Warning",
// },
// "12P": {
//   id: "12P",
//   title: "Section Twelve - 12P",
//   content:
//     "Won yoo kan sara si, ma fi inu han eniyan. Ona ati travel yoo laa. O ti jade kuro ninu ilu. Ti a ba ri po (12@10), ijoba yoo mu (deportation).",
//   category: "Travel & Deportation",
// },
// "13P": {
//   id: "13P",
//   title: "Section Thirteen - 13P",
//   content:
//     "Awon eniyan yio feran re. Ore kan nbo lati okeere wa.",
//   category: "Friendship",
// },
// "14P": {
//   id: "14P",
//   title: "Section Fourteen - 14P",
//   content:
//     "O fe se ajo kan, idale ni won yoo ti se. Ao wo ile 9: to ba good star o dara, to ba bad star ko dara. Isegun lori ota. Alejo kan nbo ni aipe, okunrin → Alfa, obinrin → Aje. Yoo ri eniti o ti ri tipe.",
//   category: "Journey & Visitor",
// },
// "15P": {
//   id: "15P",
//   title: "Section Fifteen - 15P",
//   content:
//     "Oore nbo fun. Ao ri anfani lodo eniti on taja. Gbigba adua. Eyan nla kan, oloselu, yoo wa yan wa lati eyin odi. Ao wo ile kesan irawo: to ba da → ore wa nibe, to ba ko da → yoo kan wa lasan.",
//   category: "Blessings & Politics",
// },
// "16P": {
//   id: "16P",
//   title: "Section Sixteen - 16P",
//   content:
//     "Oore eyi odi ilu. Awon alejo okeere yoo ma wa. Awon eleye nse idaamu.",
//   category: "Foreign Relations",
// },

  "1@1": {
    id: "1@1",
    title: "Section One - 1@1",
    content:
      "Oro obinrin, ki Olorun bo asiri, on nwa nkan lo si ibikan, onse iranlowo fun enikan. Emi Onibeere yoo gun.",
    category: "Women & Support",
  },

  "1@2": {
    id: "1@2",
    title: "Section One - 1@2",
    content:
      "Yoo ma saroye owo, idiwo nipa arisiki, eda to special to mu ori owo waye, o sise ko sise yoo lowo laye, ko ni ni ise kan pato, yoo ma rowo lona iyanu, agbero, arobo, gbogbo ibi to ba ya si ona ni ma je, ti ko bawa lowo, a je wipe, won ndi lowo, ao wo, ile kefa ati ikesan (oju ona igbesi aye) ti aba bad star, idi ti ko fi lowo niye.",
    category: "Wealth & Obstacles",
  },

  "1@3": {
    id: "1@3",
    title: "Section One - 1@3",
    content:
      "Eti lori adehun awon eeyan, iyigi ni, a so fun pe enikan fe fe o, ao wo ile keje ti irawo to wa nibe ba dara ao so pe odara, papa to baje Alaika 2, to je ina, ao so pe o ti bimo ri tabi ki omo to bi ku tabi ki oyun baje lara re ri. Ti aba ti ri bayi 1@3 kalo wo ile keje 7 nkan ti aba bani be ni yoo so bi igbeyawo na yoo se ri.",
    category: "Marriage & Agreements",
  },

  "1@4": {
    id: "1@4",
    title: "Section One - 1@4",
    content:
      "Oyun nbo. Olokiki ni idile baba, won mo doro duro de nile baba.",
    category: "Pregnancy & Family",
  },

  "1@5": {
    id: "1@5",
    title: "Section One - 1@5",
    content:
      "A ri oyun nile, lati confirm boya oyun tabi ki se oyun ile kerin 4 ti ina (1,2,9,16) wa ni ibe, ti awo ile kefa 6 ti aba omi (4,5,6,13), ile omo ngbona, ina ati ina NO, ina ati afefe NO, Omi ati afefe NO, OMI ATI OMI YES, OMI ATI ERUPE YES, ERUPE ATI ERUPE YES. Tani nwa oyun, enikan njeran oyun — 6@4 ki won se nkan ifonu ki oyun na le duro, kawo irawo to bawa nile kokanla.",
    category: "Pregnancy & Confirmation",
  },

  "1@6": {
    id: "1@6",
    title: "Section One - 1@6",
    content:
      "Alaafia ko kun to lara — ara nfe isinmi, be Olorun ko ma ri are, o need lati rest, ko ma lo sick, emi ti wa nile are.",
    category: "Health & Rest",
  },

  "1@7": {
    id: "1@7",
    title: "Section One - 1@7",
    content:
      "Obinrin/okunrin alaroye, alaroye, sora fun ija, iyigi kan re, nkan ti a so ni ile keta lao so nile keje.",
    category: "Conflict & Relationships",
  },

  "1@8": {
    id: "1@8",
    title: "Section One - 1@8",
    content:
      "Sora to ri iku ojiji, gbogbo nkan to le fa iku ojiji ko sora. Ti aba ri 8@8, 4@4, 11@11 ati 5@12 ko iku ni. 8 — iku, 4 — aso funfun, 11 — posi, 5 — sare, 12 — ota. 1@8, 14@9 accident to le fa iku, 14@9 ba daduro set back ifasehin ko ni nibi accident, 14@3 iyawo fe pa, tabi fun logun je, 14@6 ibi ise ni won ti fe pa/sa ogun si.",
    category: "Death & Danger",
  },

  "1@9": {
    id: "1@9",
    title: "Section One - 1@9",
    content:
      "Eti lori nkan to fe se. Emi fe ri irin ajo ti yoo ba ijakule pade. Ti a ba fe mo nkan ti yoo sele, 1@9 (1+9=10 -> 8? — original text: '1+9 =8 inksu ijakule'), bi emarun, sisubu, didide. To je process nkan yoo leti, ko se sara ko se adua ki irinajo na ko le dun.",
    category: "Journey & Setback",
  },

  "1@10": {
    id: "1@10",
    title: "Section One - 1@10",
    content:
      "Eti lori adawole, awon agba ndamu. Ohunkohun ti aba nreti koni bosi. To ba je okunrin awon aje fe mu loko ko lese dada, ato yoo san, to ba je obinrin nkan osu re ko dara.",
    category: "Elders & Obstacles",
  },

  "1@11": {
    id: "1@11",
    title: "Section One - 1@11",
    content:
      "Ero okan ti ko nise. Ohunkohun ti aba nreti koni bosi, nkan ti okan eyan wa, idaamu, fi nakannakan, disappointment.",
    category: "Mind & Disappointment",
  },

  "1@12": {
    id: "1@12",
    title: "Section One - 1@12",
    content:
      "Emi re wa lowo ota, ko mura ki won ma ma fi dara to wu won.",
    category: "Enemies & Spiritual Attack",
  },

  "1@13": {
    id: "1@13",
    title: "Section One - 1@13",
    content:
      "Ore nbo wa odo alaniyan. (13+1=12) — ore ni 12 nile ore ni.",
    category: "Friendship",
  },

  "1@14": {
    id: "1@14",
    title: "Section One - 1@14",
    content:
      "Aleejo nwa alfa bo wa. Ti a ba 11@9, alejo ngbe moto nbo; 10@9 alejo nmu owo bo; 4@9 alejo ngbe aso bo. 1@1 ati 1@14: Alejo kan duro de nile onibere agbada lowo. 1@1 alejo nbo fun Alfa. Ti a ba fe mo iru alejo ti nbo a wo ile kesan (9) ti a ba mo kanlanla (11) 11@9, alejo ngbe moto bo; ti o ba je 10@9 o nmu owo bo; 4@9 alejo ngbe aso bo.",
    category: "Visitors & Messages",
  },

  "1@15": {
    id: "1@15",
    title: "Section One - 1@15",
    content:
      "To ba lo si eyin odi yoo pe ju boti ye lo. Ko gbadua dada kole ri ore mubo leyin odi.",
    category: "Delay & Return",
  },

  "1@16": {
    id: "1@16",
    title: "Section One - 1@16",
    content:
      "To ba lo si eyin odi yoo pe ju boti ye lo. Ko gbadua dada kole ri ore mubo leyin odi.",
    category: "Delay & Return",
  },

  "1@5,6": {
    id: "1@5,6",
    title: "Section One - 1@5,6",
    content: "Oyun ibeji / oyun ti ko ni se see se.",
    category: "Pregnancy & Twins",
  },

  "1,1": {
  id: "1,1",
  title: "Section One - 1,1",
  content: "Eti yio ba adawole re — yio maa gbero nkan Kan ko ni seese. Yio ri wahala die, ko be Olorun Yio maa banuje.",
  category: "Obstacles & Sadness"
},
 "2,1": {
  id: "2,1",
  title: "Section One - 2,1",
  content: "Yio maa banuje lori awon isesi kan agbaana.",
  category: "Sadness & Behaviour"
},
 "3,1": {
  id: "3,1",
  title: "Section One - 3,1",
  content: "Nkan re yio maa baje loju emi re (Adura gidiidi) ko be Olorun fun Aseyori rere. Sora fun akoba.",
  category: "Spiritual Warning"
},
 "4,1": {
  id: "4,1",
  title: "Section One - 4,1",
  content: "Aare yio see. Awon Agba ti pin aran re.",
  category: "Health & Elders"
},
 "5,1": {
  id: "5,1",
  title: "Section One - 5,1",
  content: "Omo yio je Adanwo fun un.",
  category: "Children & Trials"
},
 "6,1": {
  id: "6,1",
  title: "Section One - 6,1",
  content: "Ko mase ba enian Da owo po, yio run. Yio padaanu duki.",
  category: "Wealth & Caution"
},
 "7,1": {
  id: "7,1",
  title: "Section One - 7,1",
  content: "Ko sora fun ole. Ko loni ibelorun fun Aseyori rere.",
  category: "Theft & Misfortune"
},
 "8,1": {
  id: "8,1",
  title: "Section One - 8,1",
  content: "Emi kukuru nbe Fun. Ko si Aseyori Kankan fun. Ko be Olorun gidigidi.",
  category: "Short Life & Failure"
},
 "9,1": {
  id: "9,1",
  title: "Section One - 9,1",
  content: "Owo jijo, Ai ni akojo. Ko be Olorun gigigidi. Ki ijanba mabaa see.",
  category: "Wealth Loss"
},
"10,1": {
  id: "10,1",
  title: "Section One - 10,1",
  content: "Oore jinna si alaniyan. Yi ki o gbiyanju lati toju ara tori awon adi majeni gberu.",
  category: "Help & Caution"
},
 "11,1": {
  id: "11,1",
  title: "Section One - 11,1",
  content: "Ki alufaa sora fun Sina, ki ifaseyin Ma baa de baa.",
  category: "Spiritual Warning"
},
 "12,1": {
  id: "12,1",
  title: "Section One - 12,1",
  content: "Owo kan nbo wa sugbon ki o be Olorun ki o le baa tewo.",
  category: "Wealth & Blessing"
},
 "13,1": {
  id: "13,1",
  title: "Section One - 13,1",
  content: "Irin ajo to dara to si mu idunnu lowo. Ori rere ni orin ajo.",
  category: "Travel & Fortune"
},
 "14,1": {
  id: "14,1",
  title: "Section One - 14,1",
  content: "Ko sora fun gbese. Ki alufaa baa be Olorun.",
  category: "Debt & Prayer"
},
 "15,1": {
  id: "15,1",
  title: "Section One - 15,1",
  content: "Aise deede nbe Fun lori dukia Ati awon omo.",
  category: "Wealth & Family"
},
 "16,1": {
  id: "16,1",
  title: "Section One - 16,1",
  content: "Aise deede nbe Fun lori dukia Ati awon omo.",
  category: "Wealth & Family"
},
  "1A": {
    id: "1A",
    title: "Section One - 1A",
    content:
      "Nkan re yoo ma fale, eti lori adawole, sora tori ki ota ma be si le larin family, tabi iyawo, ota nwa isubu re, ota ni ibujoko, o fe gbe igbese kan, ajosepo pelu eletan obinrin ati okunrin wa ri ore lati odo eniyan pataki kan, ati ara idale, oro ife larin okunrin ati obinrin, ota ngbiyanju lati daru, sora tori ija, ma se nkan ti yoo ti o loju, kosi oluranlowo, o da se opoplopo nkan fun rare, ota ngbiyanju lati fi oju da o laamu, oro ejo riro pelu re ati ogun sise sini, ti yoo ma fa ibinu abiju, ti awon eeyan yoo ma gba oro re sodi ti won yoo ma ba o sota, wa ma ro ero kero, ma si ro ero buruku si ara re, ma si ro ara re pin, tabi ko si ona abayo. O je eda, ti ko nini ore otito ti yoo wa pelu re lo titi, o ma tete fura tabi ri asise eniyan maa nronun ipa iwa ti eniyan le hu. Ko beru lati so otito, o ma nse gbogbo nkan re lona toto toye, laarin ebi, ore ati ni bi gbogbo, o nbi ebun opolo, emi sise nkan titun ti kowo po tabi nkan atijo ka fi opolo gbe kale lati fi ba igba mu, Ironu jinle ati opolo ti kowopo wa fun, o ni agbekale oro, ti o ma soro fun eniyan lati le tete ronu lo si ibe, ise ti o ba fi opolo ori gbe kale tabi tete ti a fi opolo ori ta, ti ki se teteti a fi owo, yoo ma je ju ise agbara lo. iwa agidi, tinu mi ni nse, aigbaimoran, aini iberu lati koju enikeni — paapaa to ba je lori otito, inakuna nigba miran, idiju gbesan, obinrin ti o ko wulo ati okunrin ti ko wulo ni fife. AISAN: Oju, Iba, Aisanarariro, Ikoinuriru, otutu inu, egun, ejeriru. ISE: Nurse, Electrical work, olopa, Hotel, ojiseolorun, Akowe, Labe ijoba, oja tita lorisirisi, nkan oso ile, ounje tita, Eja, Mineral, Perfume, Make up.",
    category: "Enemies, Family & Personality"
  },

  "2@1": {
    id: "2@1",
    title: "Section Two - 2@1",
    content:
      "Alakala, ounje oju orun, alawada, timo fi eeyan se yeye, ti ko serious, ro eyan pin, A LE DA NI IMORAN PE KO MA SE TIATA",
    category: "Character & Caution"
  },

  "2@2": {
    id: "2@2",
    title: "Section Two - 2@2",
    content:
      "Yoo ni dukia pupo, ti a bari pe ko ni dukia, a je pe aye ba nfin ara ao wo, IBI TI WON TI BA NFINRA, irawo to wa nile ti a ba ri (2@2 ati 2@6, won joko le asiki re, won ti block account re, ori ko fo arun ailowo lowo). Ti o ba je 2@2 lo da duro o dara, yoo ni dukia, ti 2@6 nikan ba da duro arun ailowo lowo nse.",
    category: "Wealth & Finance"
  },

  "2@3": {
    id: "2@3",
    title: "Section Two - 2@3",
    content:
      "Aladehun koni mu adehun se, a tun le tu si iyawo fe seyun, ti a ba tun leri 6@5 idaduro idaduro latusi, ile omo doti tabi igba to seyun won ko ko oyun tan, lo fa idaduro ti 2@3 ati 6@5 ba wa papo. 2@3 — TO BA DA DURO OBINRIN TO TI SEYUN RI TABI BIMO RI, KODA OKUNRIN NI OMO NA, ALAIKA=OKUNRIN, INKISU OBINRIN, YO JE ENITI YOO MA SE AWADA, ARA RE YOO YO MO ENIYAN.",
    category: "Contracts & Children"
  },

  "2@4": {
    id: "2@4",
    title: "Section Two - 2@4",
    content:
      "YOO MA RI IDUNNU LARIN OMO BABA RE, PAPA ORO TO JEMO OWO.",
    category: "Family Joy & Finances"
  },

  "2&4@5": {
    id: "2&4@5",
    title: "Section Two - 2&4@5",
    content:
      "Ki won mojuto Omo koo ma ba mo fewo, ojukokoro, EYI TO BA JE OKUNRIN YOO MA FEWO, KI WON SE NKAN OJU KOKORO FUN, NKAN ONIKAN NI YOO MA WU.",
    category: "Childcare & Caution"
  },

  "2@6": {
    id: "2@6",
    title: "Section Two - 2@6",
    content:
      "Won joko le asiki, aisi owo nda ile re ru, ao wo ile kesan, ti a ba humura, 7@9, gbogbo ore to fewole won gba danu, 12@12, awon wo awon ti won je elemi okunkun,15@11. To ba se adua, adua re yoo gba (2@2 ati 2@6= aisan ailowo lowo nse o). ORI KO FO EDO KO DUN, ARE AILOWO LOWO NSE.",
    category: "Financial Trouble & Remedies"
  },

  "2@7": {
    id: "2@7",
    title: "Section Two - 2@7",
    content:
      "Ninawo lori obinrin ti ko wulo, O TI SEYUN FUN YAN RI TABI KI OMO TI KU FUN RI, O TI BIMO RI OKUNRIN NI.",
    category: "Relationships & Pregnancy"
  },

  "2@8": {
    id: "2@8",
    title: "Section Two - 2@8",
    content:
      "INU RE YOO MA KUN GBURUGBU, AWON AJE TI GBE NKAN SI NIKUN.",
    category: "Emotional Overflow & Spiritual"
  },

  "2@9": {
    id: "2@9",
    title: "Section Two - 2@9",
    content:
      "Eti lori adawole. Eeti yoo ma ohun ti a ba nse. 9@1 ati 2@9. 2+9=7 awon agba ndiwo nfa eti, OLORUN YOO SO ORO DAYO, ERIN.",
    category: "Elders & Encouragement"
  },

  "2@10": {
    id: "2@10",
    title: "Section Two - 2@10",
    content: "YOO RI TAJE SE, ONI OWO LOWO.",
    category: "Prosperity"
  },

  "2@11": {
    id: "2@11",
    title: "Section Two - 2@11",
    content:
      "Enikan nparo fun onibeere, nfi se yeye, eniti o fe se nkan eletan, TI O BA NRETI ORE KO GBADURA SI, KO MA LE PE KO TO BO SI, TORI PE INA NI.",
    category: "Deception & Caution"
  },

  "2@12": {
    id: "2@12",
    title: "Section Two - 2@12",
    content: "OTA, YOO FI OTA SE YEYE PE O BORI OTA RE.",
    category: "Enemies & Victory"
  },

  "2@13": {
    id: "2@13",
    title: "Section Two - 2@13",
    content: "KO NI OWO LOWO BI 2,500, OWO KEKERE.",
    category: "Low Income"
  },

  "2@14": {
    id: "2@14",
    title: "Section Two - 2@14",
    content: "Afe se ogun kan yoo na wa lowo, ALFA YOO RI OWO KEKERE KAN.",
    category: "Conflict & Small Gain"
  },

  "2@16": {
    id: "2@16",
    title: "Section Two - 2@16",
    content: "ORE KAN NBO FUN LATI EYIN ODI WA.",
    category: "Support from Afar"
  },

  "1,2": {
    id: "1,2",
    title: "Section Two - 1,2",
    content:
      "Se suuru lopolopo mase fi owo wa owo, lasiko yi, ki die to ku maa baa tan.",
    category: "Patience & Finances"
  },

  "2,2": {
    id: "2,2",
    title: "Section Two - 2,2",
    content:
      "Sora fun onijibiti wa — Rin irin ajo kan se isora tori emi re, se saara ati adura leyin. Eleyi oore nbo, eyin sara oore nbo. Losi irin ajo naa waa ri oorte mubo nibe oore eyin odi Ilu.",
    category: "Journey & Blessings"
  },

  "4,2": {
    id: "4,2",
    title: "Section Two - 4,2",
    content:
      "Aare okan nbaa ja. Ohun to fe se yio Maa leti ko kun Fun adura tori Aseyori.",
    category: "Leadership & Prayer"
  },

  "5,2": {
    id: "5,2",
    title: "Section Two - 5,2",
    content: "Ko sora fun abosi, lodo ale re, iwo yio ri ale re e jo soro abosi.",
    category: "Dreams & Messages"
  },

  "6,2": {
    id: "6,2",
    title: "Section Two - 6,2",
    content: "Wa jere lori oja ti o nta, ki o tubo mura si iyonu.",
    category: "Business Advice"
  },

  "7,2": {
    id: "7,2",
    title: "Section Two - 7,2",
    content:
      "Yio rin irin ajo, yio si ri idunnu mubo, yio se orire ni irinajo.",
    category: "Travel & Good Fortune"
  },

  "8,2": {
    id: "8,2",
    title: "Section Two - 8,2",
    content: "Ona di moo, ko fi opolopo iyo se saara.",
    category: "Path & Moderation"
  },

  "9,2": {
    id: "9,2",
    title: "Section Two - 9,2",
    content:
      "Awon agba ndaa laamu, yio maa nawo danu, agbaana.",
    category: "Elders & Projects"
  },

  "10,2": {
    id: "10,2",
    title: "Section Two - 10,2",
    content:
      "Ko sora fun oja rira tole yori si onijibiti, alagbeda, kan nbo.",
    category: "Market & Risk"
  },

  "11,2": {
    id: "11,2",
    title: "Section Two - 11,2",
    content:
      "Owo kan yio te e owo wa si naa danu lasan ni (Isora ati adura).",
    category: "Small Gain & Prayer"
  },

  "12,2": {
    id: "12,2",
    title: "Section Two - 12,2",
    content:
      "Abosi yio sele sii Tori owo kan. Ko ri ni owo na gba.",
    category: "Loss & Caution"
  },

  "13,2": {
    id: "13,2",
    title: "Section Two - 13,2",
    content:
      "Ko kun fun Adura to ri ibanuje lori awon omo.",
    category: "Prayer & Trouble"
  },

  "13,2_alt": {
    id: "13,2_alt",
    title: "Section Two - 13,2 (alternate)",
    content:
      "Owo to ba kojo sii o lowo, ota yoo tuka, fi owo re pamo ma na inakuna (savings) oda owo nbo.",
    category: "Saving Advice"
  },

  "14,2": {
    id: "14,2",
    title: "Section Two - 14,2",
    content:
      "Owo yio po lowo re akojo owo ko ma tuka, se saara — eran eleje pelu aso pupa.",
    category: "Accumulation & Moderation"
  },

  "15,2": {
    id: "15,2",
    title: "Section Two - 15,2",
    content:
      "Eti yio ma aba ohun to fe se, ko se suuru ko si maa be Olorun.",
    category: "Impatience & Prayer"
  },

  "16,2": {
    id: "16,2",
    title: "Section Two - 16,2",
    content:
      "Wahala yio sele sio, ko ni ibelorun gidigidi.",
    category: "Trouble & Discontent"
  },

  "2A": {
    id: "2A",
    title: "Section Two - 2A",
    content:
      "Arin ota ni o wa, ogun idile, ejo riro pelu eni, won ti fi ogun buburu kan danwo ri sugbon o segun won. Won yoo ma ba owo je mo lowo Ota po ti yoo ma fa asedanu, wahala ti yoo gbe owo lo, Jibiti, ki eni eleni majise re, ki ole ma ja o, wahala ati idiwo yio wa fun o. Sara, agbado adie ati agbon ni sara, apa aimu dele ni ko je ki a mo pe olongbon nsode, asedanu, ki eleni ma jise re, sora pelu ija ina, mojuto alare papa iwo tori are Ife ati ibanikegbe yoo waye loni, ife si omo, aya, oko, obi, ore, oro isekuse loni sora. Iwa lile, ajosepo lorisirisi, ounje adidun, aso to dara, imototo. ALAIKA, DUKIA, EYAN DUDU NI, ILE OWO 2 TWO, ONIYEYE, ENITI KO SERIOUS, INA TI O MA NKE, TO KENU, ENI TO BA LO IRAWO YIN YOO DINU, TI NBA BINU EYAN KO NI MO, LE KANNA NI YOO BU GBEMU, PELU IBINU, TABI MA SE AWADA, TI INU YOO SI MA BI, TI ENIYAN KO NI MO, TO LE DI IBINU NLA LOJIJI. O je eda, ti ko nini ore otito ti yoo wa pelu re lo titi, o ma tete fura tabi ri asise eniyan maa nronun ipa iwa ti eniyan le hu. Ko beru lati so otito, o ma nse gbogbo nkan re lona toto toye, laarin ebi, ore ati ni bi gbogbo, o nbi ebun opolo, emi sise nkan titun ti kowo po tabi nkan atijo ka fi opolo gbe kale lati fi ba igba mu, Ironu jinle ati opolo ti kowopo wa fun, o ni agbekale oro, ti o ma soro fun eniyan lati le tete ronu lo si ibe, ise ti o ba fi opolo ori gbe kale tabi tete ti a fi opolo ori ta, ti ki se teteti a fi owo, yoo ma je ju ise agbara lo. iwa agidi, tinu mi ni nse, aigbaimoran, aini iberu lati koju enikeni — paapaa to ba je lori otito, inakuna nigba miran, idiju gbesan, obinrin ti o ko wulo ati okunrin ti ko wulo ni fife. AISAN: Oju, Iba, Aisanarariro, Ikoinuriru, otutu inu, egun, ejeriru.",
    category: "Enemies, Family & Social Issues"
  },
  "3@1": {
    "id": "3@1",
    "title": "Section Three - 3@1",
    "content": "Oro obinrin, ki Olorun bo asiri, on nwa nkan lo si ibikan, onse iranlowo fun enikan. Emi Onibeere yoo gun.",
    "category": "Obinrin & Ise"
  },
  "3@2": {
    "id": "3@2",
    "title": "Section Three - 3@2",
    "content": "ATEGUN, OSO. Oro Awe, oro obinrin kan nbe ni emi re, o nro pe nkan kolo dede, awon agba nse, O RI NKAN TI IBANINUJE NINU ILE. Agbana, aje ndi lowo, won ti bo ogo re mole, yoo ma fa idiwo sinu aye re, eti lori adehun awon eeyan, ti o ba fe se nkan yoo ma leti. KO FI AKARA SE SARA (3@2 ati 3@3 ko ri se rara).",
    "category": "Ibaninuje & Idiwo"
  },
  "3@3": {
    "id": "3@3",
    "title": "Section Three - 3@3",
    "content": "On reti nkankan tori yori si etan tabi jibiti. Ti a ba ri 3@3 ati 3@2 papo onibere ko ri se rara. A tun le tu 3@3 to ba daduro a tun le tu si pe o njeri pe obinrin ki se alagbere, KO TO LOKO TO BA MO OKUNRIN — MISTAKE NI. Awon agba ni idile iya won nda laamu. To baje okunrin iyawo eni yi ki se alagbere ninu abuda re, o wa le ma se awokose awon miran lati ma se. Alagbere obinrin 3@13 ati 13@3 ti a bati ri fun obinrin, alagbere ni. Fun okunrin, alagbere 1@7, 13@3 ati 3@13 yoo ba obinrin sun ti ki se iyawo re yoo ba sun. Ti a ri 3@3 pelu 3@6, ti o ba nise lowo, won ko jeki o gbadun ise. Wahala ti poju, ti ko bani ise yoo ma le ise kiri. IRAWO ILE 3 ATI 7 LAFI MO IGBEYAWO TO DARA. Omi ati erupe dara. Ina ati ategun o dara. Gbogbo iyoku ko dara. IRAWO ILE KETA 3 KA PO MO IRAWO KETALA 13. To ba bi good star o dara, to ba bi bad star ko dara. A tun le se ayewo lori irawo ina, omi, afefe ati erupe.",
    "category": "Alagbere & Irin Aye"
  },
  "3@4": {
    "id": "3@4",
    "title": "Section Three - 3@4",
    "content": "AMUBO. Awon agba ni idile baba ndamu.",
    "category": "Idile Baba"
  },
   "3@5": {
    "id": "3@5",
    "title": "Section Three - 3@5",
    "content": "Awon agba yoo block ile omo. Ti o ba ti bimo ri obinrin, omo naa yoo je, yoo kuru, yoo ri rubutu, ko ni je omo to slender to ga.",
    "category": "Omo & Idile"
  },
   "3@6": {
    "id": "3@6",
    "title": "Section Three - 3@6",
    "content": "Ko belorun ko ma ri idaamu lenu ise. To ba je onise owo, mo lo mo bo mo wa ise kakiri, yoo ma damu. Bere ise ka kiri, se e se ise tefe se mo ni, ko to ri ise se. Onise osu won yoo gbe ogun ti nibii ise, dojule kosi owo lowo. Ti 3@6 ati 6@6 ba jade osu meji si asiko yi, wahala yoo ba ise to nse. Ti 6@6 ba daduro, oro kanna ni.",
    "category": "Idaamu & Ise"
  },
  "3@7": {
    "id": "3@7",
    "title": "Section Three - 3@7",
    "content": "ONISE ISE NI. Ko si owo, osu osu ni. Gbogbo ise re ti di ibajẹ. Ko si àseyori rere ninu ohun ti o nse.",
    "category": "Ise & Owo"
  },
  "3@8": {
    "id": "3@8",
    "title": "Section Three - 3@8",
    "content": "Ti a ba ri 3@8, okunrin yii yoo ni wahala ninu oko ati iyawo. Obinrin naa yoo maa fi agbara rẹ maa je. Awon agba ti fi idena si. Ko ni ipinnu rere ninu oko.",
    "category": "Igbeyawo & Wahala"
  },
   "3@9": {
    "id": "3@9",
    "title": "Section Three - 3@9",
    "content": "Iwa ika wa nibe. Awaadi ki i se rere. Awon agba ti fi ibi si. O ni lati gbe adura gidigidi. Omi ni ororo, ohun gbogbo re ni Olorun lo le tu.",
    "category": "Iwa & Adura"
  },
   "3@10": {
    "id": "3@10",
    "title": "Section Three - 3@10",
    "content": "Ko ni alaanu ninu awon ara re. Oun ni ki a ma sọ ohun gbogbo fun un. O ni lati da ara re duro.",
    "category": "Idile & Ibaṣepọ"
  },
   "3@11": {
    "id": "3@11",
    "title": "Section Three - 3@11",
    "content": "Eniyan yii yoo maa ni wahala pẹlú awon omo. Won yoo maa fa aibale re jade. O ni lati gbadura fun iduroṣinṣin.",
    "category": "Omo & Iduroṣinṣin"
  },
   "3@12": {
    "id": "3@12",
    "title": "Section Three - 3@12",
    "content": "A n sọ fun alufa pe ki o ṣọra gidigidi nitori wahala nbo. Ẹ̀tan ti awọn agba fi si ọna rẹ̀, ati iṣẹ́ rẹ̀ le bajẹ. O gbọ́dọ̀ gbadura pupọ fun aabo ati isegun.",
    "category": "Alufa & Idaabobo"
  },

    "3@13": {
    "id": "3@13",
    "title": "Section Three - 3@13",
    "content": "Ko gbodo ba ore re darapo mo ise. Yio fa ipinya laarin won. Ko ni ire nibe.",
    "category": "Ore & Ise"
  },
   "3@14": {
    "id": "3@14",
    "title": "Section Three - 3@14",
    "content": "Irin ajo rere wa fun un. Yio mu ayo wa. Ori rere ni irin ajo.",
    "category": "Irin Ajo & Ayo"
  },
   "3@15": {
    "id": "3@15",
    "title": "Section Three - 3@15",
    "content": "Ko sora fun gbese. Owo gbese le ba gbogbo aye re jẹ. O gbodo ma be Olorun fun itusile.",
    "category": "Gbese & Itusile"
  },
   "3@16": {
    "id": "3@16",
    "title": "Section Three - 3@16",
    "content": "Aisedede nbe lori dukia ati lori awon omo re. O ni lati ma gbadura fun atunṣe ati ire rere.",
    "category": "Dukia & Omo"
  },
    "1,3":{
    "id": "1,3",
    "title": "Section One - 1,3",
    "content": "Eniyan yii yoo je alainitọju ninu ise. Ohun gbogbo ti o ba fi owo kan yoo bajẹ. Ko si àseyori. O gbodo ma gbadura.",
    "category": "Ise & Aseyori"
  },
   "2,3": {
    "id": "2,3",
    "title": "Section Two - 2,3",
    "content": "A n sọ fun un pe yoo maa banuje lori awon nkan kan. Ko ni ire pupọ. O ni lati gbadura gidigidi.",
    "category": "Ibanuje & Adura"
  },
   "3,3": {
    "id": "3,3",
    "title": "Section Three - 3,3",
    "content": "Ohun gbogbo re maa n bajẹ loju emi re. O gbodo gbadura fun Aseyori rere. Sora fun akoba.",
    "category": "Adura & Aseyori"
  },
   "4,3": {
    "id": "4,3",
    "title": "Section Four - 4,3",
    "content": "Aare ati ipinya wa fun un. Awon agba ti pin aran re. O gbodo ma be Olorun fun ilera.",
    "category": "Aare & Ilera"
  },

   "4@1": {
    "id": "4@1",
    "title": "Section Four - 4@1",
    "content": "O nri awon nkankan ti ndun mo ninu, yala ninu ile tabi nita, ki o ma te aso funfun sori bed re to ba fe sun.",
    "category": "Ile & Aabo"
  },
   "4@2": {
    "id": "4@2",
    "title": "Section Four - 4@2",
    "content": "Lori oro owo yoo maa ri idunnu, ayo, rerin.",
    "category": "Owo & Ayo"
  },
   "4@3": {
    "id": "4@3",
    "title": "Section Four - 4@3",
    "content": "Idaamu lori ise. Obinrin to ni omi lara, to mora ferefe, ni mo nwo nile yi. Yoo maa jowu pupo, igbonara po fun. To ba je okunrin, iyawo re yoo maa jowu. To ba je obinrin, ojowu ni, yoo light die, yoo lara die. (Irawo pase, ibi meji tabi meta ti soro papo ti ojo arawon. Bi 4@3 ojowu binrin, 5@7) Ojowu binrin yoo lo.",
    "category": "Ise & Ojowu"
  },
   "4@4": {
    "id": "4@4",
    "title": "Section Four - 4@4",
    "content": "Ni idile baba, alaniyan, yoo ri idunnu ninu gbogbo adawole.",
    "category": "Idile & Adawole"
  },
   "4@5": {
    "id": "4@5",
    "title": "Section Four - 4@5",
    "content": "Omo idunnu ni omo yi, sugbon yoo maa fewo, ojukokoro.",
    "category": "Omo & Ojukokoro"
  },
   "4@6": {
    "id": "4@6",
    "title": "Section Four - 4@6",
    "content": "Yoo ri ayo ninu ise re.",
    "category": "Ise & Ayo"
  },

   "4@7":{
    "id": "4@7",
    "title": "Section Four - 4@7",
    "content": "Okunrin ti ara re yoo gbona, jowu, lara die, mo lara.",
    "category": "Ara & Jowu"
  },
   "4@8":{
    "id": "4@8",
    "title": "Section Four - 4@8",
    "content": "Ko so enu re ko ma maa so gbogbo oro inu re sita, kole ni aseyori.",
    "category": "Iwa & Aseyori"
  },
   "4@9":{
    "id": "4@9",
    "title": "Section Four - 4@9",
    "content": "Irinaajo kan yoo waye, yoo ri idunnu nibe.",
    "category": "Irinaajo & Idunnu"
  },
  "4@10":{
    "id": "4@10",
    "title": "Section Four - 4@10",
    "content": "Won nwdi wa kiri, yoo ni wahala legbe otun, nkankan wa legbe otun ti yoo la operation lo. Ti a ba ri 9@2 ati 9@13, owo njo lo, o ti di agbaana. Wahala isale inu didun.",
    "category": "Ara & Wahala"
  },
  "4@11":{
    "id": "4@11",
    "title": "Section Four - 4@11",
    "content": "Ti a bani tanmo nkankan yoo bosi. Ore ti Olorun ti pari ni. To ba je eni to loyun, ki won sora ki won ma fi obe gba omo ninu alaboyun to ba je obinrin. To ba je okunrin, ki won ma fi obe gba omo ninu iyawo.",
    "category": "Omo & Ilera"
  },
   "4@12":{
    "id": "4@12",
    "title": "Section Four - 4@12",
    "content": "Yoo jeri ota.",
    "category": "Ota & Isegun"
  },

   "4@13": {
    "id": "4@13",
    "title": "Section Four - 4@13",
    "content": "Olorun fun alaniyan ti ndunnu le lori, owo wa lowo re, okan re bale, nkankan nbe ti o je idunnu fun alaniyan.",
    "category": "Idunnu & Ore"
  },
   "4@14": {
    "id": "4@14",
    "title": "Section Four - 4@14",
    "content": "Alfa na ri ore ti ndun ninu.",
    "category": "Ore & Ayọ"
  },
   "4@15": {
    "id": "4@16",
    "title": "Section Four - 4@16",
    "content": "Yoo ri eniton jo rira tipe. Yoo lo si eyin odi, yoo ri ore nla leyin odi. Won yoo fi oro obinrin ara eyin odi lowo bi ajosepo.",
    "category": "Ajosepo & Ore"
  },

    "4@16": {
    "id": "4A",
    "title": "Ota ti o farapamo lara ore re",
    "content": "Awon ore ti oju won dabi ore sugbon ota ni won. Wọn yoo ma fa ibanuje, dena ore nla, mu wahala emi okunkun wa. O ni agbara opolo, ebun irina lati ri ohun to nbo, ati ola ninu ise. Sugbon ma se fi ara re si ipo owo, sora fun jibiti, ki o maa fi suru gbe aye.",
    "category": "Spiritual Guidance"
  },
   "ISE": {
    "id": "ISE",
    "title": "Ise ti o le se",
    "content": "Electrical, Hotel business, Akoweoja, Akowe ijoba, Agbe sise, Adie sisin, Oluko, Ounje sise ta, Pharmacy.",
    "category": "Career"
  },
   "AISAN":{ 
    "id": "AISAN",
    "title": "Aisan to le se",
    "content": "Oru le mu aisan, inuriru, iba orikerike, ara riro, eyin didunki, ito sugar (diabetes).",
    "category": "Health"
  },
  "IRINAJO-1": {
    "id": "IRINAJO-1",
    "title": "Irin ajo ti yio la abuku",
    "content": "Irinajo kan le ko abuku ba o nitori igbese ti ko dara.",
    "category": "Journey"
  },
  "IRINAJO-2":{
    "id": "IRINAJO-2",
    "title": "Irinajo ti ko ni mubo",
    "content": "O le lo si ibikan sugbon ko ni ri anfaani kankan.",
    "category": "Journey"
  },
  "IRINAJO-3":{
    "id": "IRINAJO-3",
    "title": "Atajare lori oja re",
    "content": "Ni akoko yi, iṣowo re le dara.",
    "category": "Business"
  },
  "IRINAJO-4":{
    "id": "IRINAJO-4",
    "title": "Eti yoo ba nkan to fe se",
    "content": "Ero tabi igbese kan le daru nitori wahala.",
    "category": "Journey"
  },
   "IRINAJO-5": {
    "id": "IRINAJO-5",
    "title": "Adawole ko ni sese",
    "content": "Ero ti o n gbero le ma seese.",
    "category": "Journey"
  },
   "IRINAJO-6": {
    "id": "IRINAJO-6",
    "title": "Yoo ri ire mubo ni irin ajo",
    "content": "Irinajo kan le mu ire ati oore wa.",
    "category": "Journey"
  },
   "IRINAJO-7": {
    "id": "IRINAJO-7",
    "title": "Irinajo ti ko dara rara",
    "content": "Sora fun irinajo yi, ko dara rara.",
    "category": "Journey"
  },
   "IRINAJO-8":{
    "id": "IRINAJO-8",
    "title": "Yoo gburo owo kan",
    "content": "Yoo gba owo kan ti yoo si tee lowo.",
    "category": "Business"
  },
   "IRINAJO-9":{
    "id": "IRINAJO-9",
    "title": "Won yoo se abosi lori dukia",
    "content": "Sora fun eniyan ti o le se abosi si dukia re.",
    "category": "Warning"
  },
   "IRINAJO-10": {
    "id": "IRINAJO-10",
    "title": "Saara fun awon omo wewe",
    "content": "Ti o ba fun ni saara fun awon omo kekere, ona yoo si fun o.",
    "category": "Advice"
  },
   "IRINAJO-11": {
    "id": "IRINAJO-11",
    "title": "Ijamba motor le sele",
    "content": "Sora fun ijamba motor, se adura pelu saara.",
    "category": "Warning"
  },
   "IRINAJO-12": {
    "id": "IRINAJO-12",
    "title": "Mase rin irinajo yi",
    "content": "Ko dara lati rin irinajo yi, ma a gbe igbesẹ yi.",
    "category": "Journey"
  },
   "IRINAJO-13": {
    "id": "IRINAJO-13",
    "title": "Ona yoo si fun o",
    "content": "Ona rere yoo si, sugbon saara ni o nilo.",
    "category": "Journey"
  },
   "IRINAJO-14": {
    "id": "IRINAJO-14",
    "title": "Yoo foju kan obinrin kan",
    "content": "Obinrin kan yoo han, sugbon ko dara fun o.",
    "category": "Warning"
  },
  "IRINAJO-15": {
    "id": "IRINAJO-15",
    "title": "Enikan yoo se are iku",
    "content": "Sora gidigidi nitori arun tabi iku enikan.",
    "category": "Warning"
  },
   "ILE-OMO": {
    "id": "ILE-OMO",
    "title": "Oro oyun ati omo",
    "content": "Ko soro oyun ni bayi, sugbon bi oyun ba de leyin osu mefa tabi meje, iru awon irawo kan le ni ipa. Oro ojukokoro le fa wahala ninu ile.",
    "category": "Family"
  },

  
  "ILE-OMO": {
    "id": "ILE-OMO",
    "title": "Ile Omo / Oyun",
    "content": "Ko soro oyun ni bayi, sugbon bi oyun ba han sita leyin osu mefa tabi meje, ipa awon irawo kan wa. Oro ojukokoro yoo ma nso ni nile.",
    "category": "Family"
  },

  "5@1": {
    "id": "5-1",
    "title": "Ironu nipa omo ati irinajo",
    "content": "O wa lemi pe o fe rin irinajo, o fe kuro nibikan bo si ibikan.",
    "category": "Journey"
  },
  "5@2": {
    "id": "5-2",
    "title": "Agbaana nkan",
    "content": "Nkan yoo njade, owo ko duro lowo onibeere. Owo ti nwole ko duro.",
    "category": "Finance"
  },
  "5@3": {
    "id": "5-3",
    "title": "Ikosile obinrin",
    "content": "Obinrin ti yoo paro oko, bi eni paro ewu. Ewu ikosile wa. To ba je okunrin, iyawo re yoo paro. To ba je obinrin, oko re yoo paro.",
    "category": "Family"
  },
  "5@4": {
    "id": "5-4",
    "title": "Awon omo baba re",
    "content": "Yoo ri se ninu awon omo baba re.",
    "category": "Family"
  },
  "5@5": {
    "id": "5-5",
    "title": "Omo gbogbo",
    "content": "Ko ni isoro omo, gbogbo omo yoo ya re.",
    "category": "Family"
  },
  "5@6": {
    "id": "5-6",
    "title": "Ise alaniyan",
    "content": "Ise ti alaniyan nse ona re ni, sugbon ona ko di mo.",
    "category": "Career"
  },
  "5@7": {
    "id": "5-7",
    "title": "Ikosile okunrin",
    "content": "Okunrin naa yoo paro iyawo bi eni paro aso. Ikosile wa, wahala ibasepo nla.",
    "category": "Family"
  },
  "5@8": {
    "id": "5-8",
    "title": "Iku ojiji",
    "content": "Ko mura ki iku ojiji ma ba sele.",
    "category": "Warning"
  },
  "5@9": {
    "id": "5-9",
    "title": "Irinajo nla",
    "content": "Irinajo kan yoo waye laipe, kuro nibikan si ibi miiran. Agbega kan nbo fun onibeere.",
    "category": "Journey"
  },
  "5@10": {
    "id": "5-10",
    "title": "Ona owo gidi",
    "content": "Ona owo gidi yoo la fun onibeere, gbigba adura lodo oloselu tabi onise-osu.",
    "category": "Finance"
  },
  "5@11": {
    "id": "5-11",
    "title": "Message lati okere",
    "content": "Onibeere yoo ri message lati okere. Owo kekere yoo tee lowo.",
    "category": "Prediction"
  },
  "5@12": {
    "id": "5-12",
    "title": "Eleda ko gbabode iku",
    "content": "Eleda ko gbabode iku, ki o be l'orun ki ota ma rehin re. Gbadura fun omo re.",
    "category": "Spiritual Guidance"
  },
  "5@13": {
    "id": "5-13",
    "title": "Loogun ati call ayo",
    "content": "Enikan yoo fun o ni oogun. Onibeere yoo gba call ayo, yoo rise ti yoo po.",
    "category": "Prediction"
  },
  "5@14": {
    "id": "5-14",
    "title": "Ona alfa",
    "content": "Ona yoo la fun alfa, sugbon ona ko di mo.",
    "category": "Spiritual Guidance"
  },
  "5@15": {
    "id": "5-15",
    "title": "Toju ara",
    "content": "Ki o toju ara nitori aisan eyin didun. Ilu to wa, yoo rise nibẹ.",
    "category": "Health"
  },
  "5@16": {
    "id": "5-16",
    "title": "Oore okere",
    "content": "Oore lati okere yoo bo fun onibeere. Adura yoo gba leyin odi to ba travel.",
    "category": "Blessing"
  },

  "5A": {
    "id": "5A",
    "title": "Alejo ati ire",
    "content": "Alejo nbo fun o tabi iwo yoo lo si idale kan ti yoo mu ere ati ayo wa. Sugbon ota yoo gbero si o. Obinrin le tan o lati gba owo. Sugbon ire nla nbo pelu ebun opolo ati ola. O ma nwa bi ile aye re yoo dara, suru ni o nilo. O gbodo ma se dawole ohun ti agbara ko ka.",
    "category": "Spiritual Guidance"
  },

"6@1": {
  "id": "6@1",
  "title": "Ironu ati Wahala",
  "content": "Eti yio ba adawole re — yio maa gbero nkan ko ni seese. Yio ri wahala die, ko be Olorun. Yio maa banuje.",
  "category": "Destiny & Warnings"
},

"6@2": {
  "id": "6@2",
  "title": "Isesi Agbaana",
  "content": "Yio maa banuje lori awon isesi kan agbaana.",
  "category": "Challenges"
},

"6@3": {
  "id": "6@3",
  "title": "Nkan yio Baje",
  "content": "Nkan re yio maa baje loju emi re (Adura gidiidi). Ko be Olorun fun Aseyori rere. Sora fun akoba.",
  "category": "Spiritual Warning"
},

"6@4": {
  "id": "6@4",
  "title": "Aare",
  "content": "Aare yio see. Awon Agba ti pin aran re.",
  "category": "Health"
},

"6@5": {
  "id": "6@5",
  "title": "Omo Adanwo",
  "content": "Omo yio je Adanwo fun un.",
  "category": "Children & Trials"
},

"6@6": {
  "id": "6@6",
  "title": "Owo Po",
  "content": "Ko mase ba enian Da owo po, yio run. Yio padaanu duki.",
  "category": "Wealth & Warnings"
},

"6@7": {
  "id": "6@7",
  "title": "Ole",
  "content": "Ko sora fun ole. Ko loni ibelorun fun Aseyori rere.",
  "category": "Warnings"
},

"6@8": {
  "id": "6@8",
  "title": "Emi Kukuru",
  "content": "Emi kukuru nbe Fun. Ko si Aseyori Kankan fun. Ko be Olorun gidigidi.",
  "category": "Health & Destiny"
},

"6@9": {
  "id": "6@9",
  "title": "Owo Jijo",
  "content": "Owo jijo, Ai ni akojo. Ko be Olorun gigigidi. Ki ijanba mabaa see.",
  "category": "Wealth & Safety"
},

"6@10": {
  "id": "6@10",
  "title": "Oore Jinna",
  "content": "Oore jinna si alaniyan. Yi ki o gbiyanju lati toju ara tori awon adi majeni gberu.",
  "category": "Wellbeing"
},

"6@11": {
  "id": "6@11",
  "title": "Alufaa ati Sina",
  "content": "Ki alufaa sora fun Sina, ki ifaseyin ma baa de baa.",
  "category": "Faith & Spirituality"
},

"6@12": {
  "id": "6@12",
  "title": "Owo Kan Nbo",
  "content": "Owo kan nbo wa sugbon ki o be Olorun ki o le baa tewo.",
  "category": "Wealth"
},

"6@13": {
  "id": "6@13",
  "title": "Irin Ajo Rere",
  "content": "Irin ajo to dara to si mu idunnu lowo. Ori rere ni orin ajo.",
  "category": "Journey"
},

"6@14": {
  "id": "6@14",
  "title": "Gbese",
  "content": "Ko sora fun gbese. Ki alufaa baa be Olorun.",
  "category": "Wealth & Warnings"
},

"6@15": {
  "id": "6@15",
  "title": "Aise deede",
  "content": "Aise deede nbe Fun lori dukia ati awon omo.",
  "category": "Wealth & Family"
},

"6@16": {
  "id": "6@16",
  "title": "Aare Iku",
  "content": "Enikan yio se Aare iku. Ko mura gidigidi.",
  "category": "Health & Death Warning"
},

"6A": {
  "id": "6A",
  "title": "Ile Omo, Oyun & Irinajo",
  "content": "ILE OMO/OYUN, OMI, IRINAJO. Oro nipa oyun, omo, ati irinajo ti ko dara. Sora fun aisan ati wahala ti ota le mu wa. Adupe ati adura pataki fun aabo ati ire.",
  "category": "Pregnancy, Children & Journey"
},

"7@1": {
  "id": "7@1",
  "title": "Ibanuje ati Aini Owo",
  "content": "O wa ninu ibanuje nitori aini owo. Ao ma la alakala. Awon agba ndaamu, awon aje ntele kakiri, won ko jeki onibeere ni isinmi.",
  "category": "Wealth & Struggles"
},

"7@2": {
  "id": "7@2",
  "title": "Okuta Lori Owo",
  "content": "Okuta nbe lori nkan aje. Ti onibeere ba sowo, ko ni ta; ti o ba sise ijoba, yio maa gba salary nikan. Ko ni ri owo miran wo le. Awon eleye ndaa laamu.",
  "category": "Wealth & Blockages"
},

"7@3": {
  "id": "7@3",
  "title": "Idile Iya",
  "content": "Awon agbalagba ni idile iya, iyawo alaniyan eyan pupa ni. Alaniyan nta epo, eran pipa tabi aso.",
  "category": "Family & Traditions"
},

"7@4": {
  "id": "7@4",
  "title": "Aje Ile Baba",
  "content": "Awon aje ile baba nda alaniyan laamu. Ko mura.",
  "category": "Spiritual Warning"
},

"7@5": {
  "id": "7@5",
  "title": "Nkan Osu",
  "content": "Iyawo alaniyan nse nkan osu lowo. Ti o ba je okunrin, wahala owo; ti o ba je obinrin, yoo ri nkan osu re laipe sugbon ko sese pari re.",
  "category": "Family & Finances"
},

"7@6": {
  "id": "7@6",
  "title": "Ise & Ajo",
  "content": "Are yoo se oko re, tabi wahala fun obinrin. Asiri kan yoo tu. Won fun laajo, bo se adura, ko sise. Awon aje nba ise re je. O nilo wẹ owo aje kuro lara.",
  "category": "Work & Challenges"
},

"7@7": {
  "id": "7@7",
  "title": "Obinrin Tó Ni Ipa",
  "content": "Yoo fe obinrin to ni ipa, ti yoo ma fa owo rawon lowo. Awon agbalagba ni idile oko, iyawo alaniyan eyan pupa ni. Alaniyan nta epo, ata tabi aso.",
  "category": "Marriage & Relationships"
},

"7@8": {
  "id": "7@8",
  "title": "Eese ati Stroke",
  "content": "Won fe fi ese da alaniyan laamu tabi fi stroke se.",
  "category": "Spiritual Attack"
},

"7@9": {
  "id": "7@9",
  "title": "Ore Ti a Dina",
  "content": "Gbogbo ore ti nbo fun alaniyan won gba danu. Won block re. Obinrin pupa kan yoo maa dina mo.",
  "category": "Friendships & Blockages"
},

"7@10": {
  "id": "7@10",
  "title": "Eyonu Aye",
  "content": "O ni eyonu kan ninu ise, aye nse wahala si. Gbogbo to nse odun mo awon agba ninu.",
  "category": "Destiny & Warnings"
},

"7@11": {
  "id": "7@11",
  "title": "Ore Ti A Gba",
  "content": "Awon nkan ti alaniyan fokan si gege bi ore, awon aje gba danu.",
  "category": "Wealth & Loss"
},

"7@12": {
  "id": "7@12",
  "title": "Ota Aje",
  "content": "Awon ota alaniyan je aje pupa. Nkan eyonu awon aje ni ko ma se. Oso, emere, alfa, pastor, babalawo le je ota.",
  "category": "Enemies & Warnings"
},

"7@13": {
  "id": "7@13",
  "title": "Agbalagba Aje",
  "content": "Awon aje agbalagba to sunmo alaniyan ndaa laamu.",
  "category": "Spiritual Attack"
},

"7@14": {
  "id": "7@14",
  "title": "Ala Buruku",
  "content": "Alaniyan ni nla ala buruku to maa da wahala.",
  "category": "Dreams & Warnings"
},

"7@15": {
  "id": "7@15",
  "title": "Oju Omo",
  "content": "Oju omo yio pon. Wahala fun idile.",
  "category": "Children"
},

"7@16": {
  "id": "7@16",
  "title": "Apapo Eleye",
  "content": "Awon apapo eleye nda onibeere laamu. Ko lo nkan eyonu rara.",
  "category": "Enemies & Spiritual Blockage"
},

"7A": {
  "id": "7A",
  "title": "Ile Oko & Afeefe",
  "content": "Ile oko, afefe, awon agba, nkan pupa, eyan pupa foo. Irawo ile keta ati irawo ile keje ba bi inkisu, awon aje nse idaamu. Ogun idile iya ati baba nbe fun alaniyan. Aisan inu ati ori, gbese, oro etan larin okunrin ati obinrin. Onibeere je eniyan pataki sugbon opo ota wa. O je olotito sugbon awon eniyan ma npa iro si re. Otito mu ki won korira re. Ise re maa yato si ti elomiran. O ni agidi okan, isele ojiji maa nwaye. Opo ota yoo maa jowu re. O maa fi otito se oro sugbon eeyan maa gba sodi. O je alanu eda, sugbon ma se fi inu han gbogbo ore.",
  "category": "Family, Destiny & Spiritual Guidance"
},
  "8@1": {
    "id": "8@1",
    "title": "Section Eight - 8@1",
    "content": "IPAYA, AIFI OKAN BALE, IBANUJE, NBE FUN ONIBERE, ti o le gbemi eeyan... ao bere pe ta ni se epe larin awon meteta.",
    "category": "Eight"
  },
  "8@2": {
    "id": "8@2",
    "title": "Section Eight - 8@2",
    "content": "ERU NBA ONIBERE NIPA OWO, OKAN RE KO BALE NI PA ORO OLOWO DE.",
    "category": "Eight"
  },
  "8@3": {
    "id": "8@3",
    "title": "Section Eight - 8@3",
    "content": "Onibere okunrin, ti iya iyawo ba omo re joko nile oko, ... IYAWO TO GBE OKO SEPE.",
    "category": "Eight"
  },
  "8@4": {
    "id": "8@4",
    "title": "Section Eight - 8@4",
    "content": "TI BABA BA NBE KO TOJU BABA, KO MA SICK, TO BA TI KU KO SE SARA.",
    "category": "Eight"
  },
  "8@5": {
    "id": "8@5",
    "title": "Section Eight - 8@5",
    "content": "TI ALANIYAN BA TI BIMO, KO BE OLORUN LORI AWON OMO... TI KO BA TI BIMO IDADURO FUN OBINRIN.",
    "category": "Eight"
  },
  "8@6": {
    "id": "8@6",
    "title": "Section Eight - 8@6",
    "content": "MONAFIKI, AROKA, AIFINI LOKAN BALE LENU ISE, AWON OTA LO YIKA NIBI ISE KO SORA, KO SI IGBADUN, PAKALEKE WA NIBE.",
    "category": "Eight"
  },
  "8@7": {
    "id": "8@7",
    "title": "Section Eight - 8@7",
    "content": "Yoo fe obinrin kan ti yoo buru onifari... EPE TI WON NFI ARA WON SE YI YOO SE, TORI AWON KAN NBE TI WON NFI ASE SORI EPE NA.",
    "category": "Eight"
  },
  "8@8": {
    "id": "8@8",
    "title": "Section Eight - 8@8",
    "content": "KO SORA FUN IJA, IBINU, ORO TI KO MOWO MESE TORI IKU OJIJI... MA DI LE LORI.",
    "category": "Eight"
  },
  "8@9": {
    "id": "8@9",
    "title": "Section Eight - 8@9",
    "content": "WON TI GBE IGI DANA IGBESI AYE RE ATI JE YOO NIRA, ATI NAWO YOO NIRA... WON TI GBEGI DANA.",
    "category": "Eight"
  },
  "8@10": {
    "id": "8@10",
    "title": "Section Eight - 8@10",
    "content": "Ni apa otun ni ikun wahala wa nibe, yoo ma dun, ti o yoo ma nawo si... KO MA DI WAHALA SI LORUN.",
    "category": "Eight"
  },
  "8@11": {
    "id": "8@11",
    "title": "Section Eight - 8@11",
    "content": "Awon ota yoo ma dun koko mo aseyori... Leyin wahala yoo bosi.",
    "category": "Eight"
  },
  "8@12": {
    "id": "8@12",
    "title": "Section Eight - 8@12",
    "content": "KO BELORUN KI OTA MA REYIN RE.",
    "category": "Eight"
  },
  "8@13": {
    "id": "8@13",
    "title": "Section Eight - 8@13",
    "content": "OKAN RE KO BALE, IPAYA WA FUN, SORA PELU EPE SISE, BAKANA 8@1.",
    "category": "Eight"
  },
  "8@14": {
    "id": "8@14",
    "title": "Section Eight - 8@14",
    "content": "Oro ile, eniyan yoo ku lori re, sora fun enu. Eyin yoo ma dun onibere, ALFA YOO RI OWO KEKERE.",
    "category": "Eight"
  },
  "8@16": {
    "id": "8@16",
    "title": "Section Eight - 8@16",
    "content": "Arun ehin didun se o, adua lori wahala awon aje lori re, AWON EYAN YOO BA O SE EJO... OPO EJO.",
    "category": "Eight"
  },
  "8A": {
    "id": "8A",
    "title": "Section Eight - 8A",
    "content": "OBINRIN EYAN DUDU TO KURU NI... oro etan larin okunrin si obinrin.",
    "category": "Eight"
  },
  "8B": {
    "id": "8B",
    "title": "Section Eight - 8B",
    "content": "O je onitiju eda ti inu re dara, ti o feran alaafia, ti o ni ifarada... Mechanic.",
    "category": "Eight"
  },
"9@1": {
  "id": "9@1",
  "title": "Section Nine - 9@1",
  "content": "ALANIYAN NRONU, TO BA TI FOWO LERAN EMI TI JADE KURO LARA RE. IRONU TO JINNA TI EYAN TI GBA GBE RA, IRONU TI MA SORI EYAN KODO TI O LE FA IKU LOJIJI. Ao wo ile owo 2, boya owo ni, ao wo ile ise 6 boya ise ni, ao wo ile omo 5 boya omo ni, 3 odo iyawo, 7 odo oko. Bad star (3,6,7,8) ni ibi ti nkan ti nronu. Ti a ba ri irawo buruku nibe, ibe ni nkan ti nronu wa. Ti a ba wo ile owo, 2 ati 13 atelewo, ti araji ba wa nibe owo njade niyen.",
  "category": "Nronu & Finance"
},
"9@2": {
  "id": "9@2",
  "title": "Section Nine - 9@2",
  "content": "Ise ti dojuru, owo tabi dukia yoo jade lowo onibere. Ti 9@13 ba han o confirm agbaana. 8@5 omo sick ibe ni nawo si, 8@3 iyawo sick ibe ni nawo si, 8@6 ise ko lo dede. Ao wo ile ise ibi ti irawo 3,6,7,8 wa. Oro dada ni ma nso nile omo iya won. Awon agba ndaamu fun sara. Ao wo ile kefa 6, omi nkan olomi lo maa se sara.",
  "category": "Work & Loss"
},
"9@3": {
  "id": "9@3",
  "title": "Section Nine - 9@3",
  "content": "Iyawo ti lo tabi prepare lati ko. Ile iyigi sofo. Ko da ki won jo gbe, o ti lo, yoo lo.",
  "category": "Marriage & Home"
},
"9@4": {
  "id": "9@4",
  "title": "Section Nine - 9@4",
  "content": "Iyawo re yoo ko oko. Hunhun nbe larin ololufe meji. Awon ebi nronu nipa re. Ao wo ile kesan 9, ti irawo dara, ironu dara. Ti irawo ko dara, ironu ko dara.",
  "category": "Marriage & Family"
},
"9@5": {
  "id": "9@5",
  "title": "Section Nine - 9@5",
  "content": "Ti obinrin ni, yoo se nkan osu titi ojo merin. Alaniyan ko mojuto omo, ki ere mo po fun. Ko ma ma sa nile iwe tabi ile oko.",
  "category": "Women & Children"
},
"9@6": {
  "id": "9@6",
  "title": "Section Nine - 9@6",
  "content": "Ma se je adeja. Iya onibere yoo sare ka bi lere pe iya re nko. Iya kan re to ru ti ebi npa. Ti o ba ni iya, ko toju iya re. Ebi npa, yoo sick to ma ru gan. Ti iya ba ku, ko se sara fun.",
  "category": "Mother & Family"
},
"9@7": {
  "id": "9@7",
  "title": "Section Nine - 9@7",
  "content": "Ti okunrin, o fe ko iyawo. Ao wo ile kesan 9, ti daily ba wa nibe, ko ni lo. Bo lo yoo pada. Ti 3 se arija ni yoo lo.",
  "category": "Marriage & Men"
},
"9@8": {
  "id": "9@8",
  "title": "Section Nine - 9@8",
  "content": "9@8 ati 9@13 npase, ki alaniyan mura ajalu ti yoo sele ti eyan yoo ma ta dukia. Ki onibere ma fi ironu se ara re lese.",
  "category": "Danger & Loss"
},
"9@9": {
  "id": "9@9",
  "title": "Section Nine - 9@9",
  "content": "Irinaajo kan nbo wa fun onirin ajo. Ao wo ile mefa 6, ti irawo dara, irinajo dara. Ti irawo ko dara, ko ma lo.",
  "category": "Travel"
},
"9@10": {
  "id": "9@10",
  "title": "Section Nine - 9@10",
  "content": "Ti a ba fe mo iru ise ti eniyan nse, ao wo ile kewa 9@10 ati ile kefa 9@6. Yoo je olopa, soja, uniform. Alaniyan yoo change ile, yoo change ise.",
  "category": "Career & Change"
},
"9@11": {
  "id": "9@11",
  "title": "Section Nine - 9@11",
  "content": "Ti 9@11 ati 9@2 ba wa papo, irinajo wa lemi re ti o nawo si. Ki alaniyan ko ma fokan si ore kankan. Ti yoo ba bosi, yoo se wahala. Ko to bo si.",
  "category": "Travel & Caution"
},
"9@12": {
  "id": "9@12",
  "title": "Section Nine - 9@12",
  "content": "Ko ma jeki ota ko ile are si ara re. Ko ma fi aye sile fun ironu to le yori si are.",
  "category": "Protection"
},
"9@13": {
  "id": "9@13",
  "title": "Section Nine - 9@13",
  "content": "Onibere ni awon nkan ti nawo le lori. Ti a ba fe mo ibi ti nawo si, ao wo ile ise, ile omo, ile oko, ile iyawo. Ti a ba ri irawo ti ko dara nibe, ibe ni nawo si.",
  "category": "Finance & Family"
},
"9@14": {
  "id": "9@14",
  "title": "Section Nine - 9@14",
  "content": "Okan alaniyan ko bale.",
  "category": "Mind & Peace"
},
"9@15": {
  "id": "9@15",
  "title": "Section Nine - 9@15",
  "content": "Aye yoo gba o nibiti o bawa, olori nibi gbogbo. Adura wa yoo gba laarin ilu yi.",
  "category": "Blessings"
},
"9@16": {
  "id": "9@16",
  "title": "Section Nine - 9@16",
  "content": "Ko gbiyanju ko travel. Ore wa ni be, ore lati odo arinrin ajo. Ao lo si irin-ajo ti ao ri ore nbe.",
  "category": "Travel & Friendship"
},
"9A": {
  "id": "9A",
  "title": "Section Nine - 9A",
  "content": "ILE MESAN 9, ILE IRINAJO, ibi ti nkan kuro lowo eni. Ao relate gbogbo irawo mo ile kesan. Fun apeere, 13@11, 14@9, 14@13. Ogun kan wa ti n sise. 10@14 Alfa yoo gbowo. Ao lo wo ona ti owo fe gba wa ile kesan 9. Ti umura 7 wa nibe, 7@9 owo yen ko ni tewo. 15@9 owo naa yoo tewo. 11@9 moto car, 13@9 Jeep, bus, ajagbe ejo, oko nla. NARASARA ARIJA 9. Ti 1@14 ati 4@9 alejo ngbe asobo fun Alfa.",
  "category": "Travel & Finance"
},
"2,9": {
  "id": "2,9",
  "title": "Related Pair - 2,9",
  "content": "Awon agba ndaa laamu lori arisiki. Adura ati iyonu.",
  "category": "Elders & Risk"
},
"3,9": {
  "id": "3,9",
  "title": "Related Pair - 3,9",
  "content": "Owo re njo, owo ko ni kojosii lowo. Adura ati aajo.",
  "category": "Finance & Prayer"
},
"4,9": {
  "id": "4,9",
  "title": "Related Pair - 4,9",
  "content": "Owo kan nba fun un sugbon koni duro lowo.",
  "category": "Finance"
},
"5,9": {
  "id": "5,9",
  "title": "Related Pair - 5,9",
  "content": "Ko mase rin irin ajo. Koni ri nkan ti o nwa lo mubo.",
  "category": "Travel Warning"
},
"6,9": {
  "id": "6,9",
  "title": "Related Pair - 6,9",
  "content": "Ona si fun lati se ohun kohun.",
  "category": "Opportunity"
},
"7,9": {
  "id": "7,9",
  "title": "Related Pair - 7,9",
  "content": "Ko mase rin irin ajo. Obinrin yoo ri nkan osu re.",
  "category": "Travel & Women"
},
"8,9": {
  "id": "8,9",
  "title": "Related Pair - 8,9",
  "content": "Irinaajo yoo waye sugbon ko kun fun adura, ki ma baa bo lofo.",
  "category": "Travel & Prayer"
},
"9,9": {
  "id": "9,9",
  "title": "Related Pair - 9,9",
  "content": "Ko mase deja, yoo yi lowo. Yoo ri nkan ti onfe, nkan ti o sonu yoo rii.",
  "category": "Finance & Loss"
},
"10,9": {
  "id": "10,9",
  "title": "Related Pair - 10,9",
  "content": "Eje re yio maa fail, ko sora fun hypertension.",
  "category": "Health"
},
"11,9": {
  "id": "11,9",
  "title": "Related Pair - 11,9",
  "content": "Yoo maa se aare okan. Nkan to fe se ko ni bosi.",
  "category": "Health"
},
"12,9": {
  "id": "12,9",
  "title": "Related Pair - 12,9",
  "content": "Asiri ki re nlo die die. Abgara na now owo re die die ko si ibe Olorun.",
  "category": "Secrets & Finance"
},
"13,9": {
  "id": "13,9",
  "title": "Related Pair - 13,9",
  "content": "Omo re kan yoo maa gbiyanju sii.",
  "category": "Children"
},
"14,9": {
  "id": "14,9",
  "title": "Related Pair - 14,9",
  "content": "Iyawo re wa ninu egbe, yio si maa baa ja.",
  "category": "Marriage"
},
"15,9": {
  "id": "15,9",
  "title": "Related Pair - 15,9",
  "content": "Ko mase ja rara. Suuru ni oro re gba.",
  "category": "Patience"
},
"16,9": {
  "id": "16,9",
  "title": "Related Pair - 16,9",
  "content": "Yoo daran, ko sora gidigidi, adura.",
  "category": "Warning & Prayer"
},

"10@1": {
  "id": "10@1",
  "title": "Section Ten - 10@1",
  "content": "ALANIYAN NFI OKAN SI ARANSE KAN, YOO NI LARI LAYE. ORE, KAWO ILE 9 TI A BA BA BAD STAR NKAN YE OFO NI, TI A BA GOOD STAR O DARA. (Bad star (3,6,7,8), (4,5,10,15). Good star (10@1,10@5 ati 10@12), ti a ba ba nile obinrin olobinrin yoo loyun fun.)",
  "category": "General Life & Destiny"
},
"10@2": {
  "id": "10@2",
  "title": "Section Ten - 10@2",
  "content": "YOO LOLA TI YOO PO, ODA OWO KO NI DA, YOO RINA YOO RILO.",
  "category": "Wealth & Prosperity"
},
"10@3": {
  "id": "10@3",
  "title": "Section Ten - 10@3",
  "content": "IYAWO ALANIYAN EEYAN KUKURU, DUDU NI, YOO YOKUN YODI, ALASIKI EDA NI, KO MA KO.",
  "category": "Marriage & Relationships"
},
"10@4": {
  "id": "10@4",
  "title": "Section Ten - 10@4",
  "content": "OLOGO OMO TI MA NNA OWO SILE BABA RE, SE DADA FUN EBI, LO MA JE.",
  "category": "Family & Children"
},
"10@5": {
  "id": "10@5",
  "title": "Section Ten - 10@5",
  "content": "TO BA JE ENI TI WOJU OLORUN OYUN TI DE. ASIKAFU 10, A MA SORO OYUN A MA SORO OWO. TI A BA FE MO BOYA OYUN TI DE AO WO ILE 11 ATI 9, TI A BA BA GOOD STAR NIBE OYUN TI DE. Lati confirm boya oyun tabi ki se oyun, ile kerin 4 ti ina (1,2,9,16) wa ni ibe. Ti awo ile kefa 6 ti aba omi (4,5,6,13). ILE OMO NGBONA, Ina ati ina NO, Ina ati afefe NO, Ina ati erupe NO, Afefe ati afefe NO, Omi ati afefe NO, Omi ati omi YES, Omi ati erupe YES, Erupe ati erupe YES.",
  "category": "Pregnancy & Twins"
},
"10@6": {
  "id": "10@6",
  "title": "Section Ten - 10@6",
  "content": "TO BA NISE LOWO, AO KI KU ORIRE. TI KO BA NISE LOWO, YOO PADA JANA TI YOO RISE NIBI ISE IJOBA, ILE ISE ILE OWO, KO NI PROBLEM.",
  "category": "Work & Career"
},
"10@7": {
  "id": "10@7",
  "title": "Section Ten - 10@7",
  "content": "IYAWO RE/OKO RE EEYAN KUKURU NI YOO YOKUN YOO YODI ALASIKI.",
  "category": "Marriage & Relationships"
},
"10@8": {
  "id": "10@8",
  "title": "Section Ten - 10@8",
  "content": "KI O SORA KO WA OWO DELE IKU. KO MO SE OGUN OWO. IKU RE, OWO RE, KO DURO TI OLORUN.",
  "category": "Wealth & Warnings"
},
"10@9": {
  "id": "10@9",
  "title": "Section Ten - 10@9",
  "content": "YOO RIRIN AJO TI YOO RI OWO NIBE.",
  "category": "Travel & Fortune"
},
"10@10": {
  "id": "10@10",
  "title": "Section Ten - 10@10",
  "content": "ADURA RE TI GBA, YOO RI ANU OLORUN, YOO RI OWO.",
  "category": "Prayer & Blessings"
},
"10@11": {
  "id": "10@11",
  "title": "Section Ten - 10@11",
  "content": "ORE TI A FI OKAN SI, YOO WOLE. NKAN TI NRETI LORE YOO TE LOWO.",
  "category": "Friendship & Expectations"
},
"10@12": {
  "id": "10@12",
  "title": "Section Ten - 10@12",
  "content": "OTA YOO MA GBOGUN TORI BURUJI RE TO JI DA DA. ASIKI WA LOWO OTA KO MURA.",
  "category": "Enemies & Protection"
},
"10@13": {
  "id": "10@13",
  "title": "Section Ten - 10@13",
  "content": "OWO NBE LOWO ALANIYAN.",
  "category": "Wealth"
},
"10@14": {
  "id": "10@14",
  "title": "Section Ten - 10@14",
  "content": "Won nbo wa fun Alfa lowo, ALFA YOO RI OWO. AO WO ILE 9 LATI FI MO BI YOO SE TI YA SI. GOOD, YOO YA. BAD, YOO PE.",
  "category": "Religion & Wealth"
},
"10@15": {
  "id": "10@15",
  "title": "Section Ten - 10@15",
  "content": "Arisiki to po lodun yi, orisirisi ore nbo. Oore, ILU TI ALANIYAN WA NI YOO TI RISE, KO MA TRAVEL.",
  "category": "Wealth & Travel"
},
"10@16": {
  "id": "10@16",
  "title": "Section Ten - 10@16",
  "content": "ORE lodo arin-rin ajo. ORE ALANIYAN PO LEYIN ODI. KO GBIYANJU KO TRAVEL.",
  "category": "Friendship & Travel"
},
"10,2": {
  "id": "10,2",
  "title": "Section Ten - 10,2",
  "content": "Oyin fi se sara.",
  "category": "Health & Wellness"
},
"10,7": {
  "id": "10,7",
  "title": "Section Ten - 10,7",
  "content": "O fe ni owo wa sini.",
  "category": "Wealth"
},
"10,10": {
  "id": "10,10",
  "title": "Section Ten - 10,10",
  "content": "Oju yoo dun eni re kan, aye lo wa nibe.",
  "category": "Life & Happiness"
},
"10,12": {
  "id": "10,12",
  "title": "Section Ten - 10,12",
  "content": "Sora oro ewon nitori obinrin ko pe mo.",
  "category": "Warnings"
},
"10,13": {
  "id": "10,13",
  "title": "Section Ten - 10,13",
  "content": "Won nse monafiki re lodo ijoba.",
  "category": "Politics & Enemies"
},
"10,14": {
  "id": "10,14",
  "title": "Section Ten - 10,14",
  "content": "Sara fun agbalagba.",
  "category": "Respect & Elders"
},
"10A": {
  "id": "10A",
  "title": "Section Ten - 10A",
  "content": "NI, ILE OBA/OLA/OWO ILE, EEYAN KUKURU, TO YOKUN, YODI. TEN 10, A MO JUWE ABO ATI AKO SUGBON ABO NI. Sora fun oro enu, oro ejo, tolopa tabi court, ale yiyan. Jeki gbogbo ona re kun fun isora. Sora fun iwa aifarabale woran woran. Gba imoran awon asaju, gbiyanju lati je alatunse ki o ma je baseje. Sora fun iwa obinrin/okunrin pelu iwa palapala. O je onitiju eda ti inu re dara, ti o feran alaafia, ti o ni ifarada igba kigba to de, feran irepo, ko feran lati maa yoju si nkan ti kokan. O ni ebun ogbon ati oye ti o n lo lati fi yanju oro. Feran orin, nife ile kiko, elemi gigun, olofin toto, alanu eda ni. Awon eniyan yoo maa yan je, o maa n fa eniyan goke. O maa n je ibanuje fun ti koba si owolowo re lati fi se iranlowo fun eniyan. O maa n fi arani re lati ran elomiran lowo. O korira gbese tabi ra nkan win, o ko rira ki eniyan so rare di bukata si lorun. Okan re maa n wa lorin kan ti o bafe se tabi pinnu lori nkankan. Nkan ti yoo yi ipinu re pada yoo le die. Igbese aye re yoo kun fun orisirisi ikuna, isoro, aini ifoya, airise ati wahala. Okan re naa lora lati gba yangbo tabi lati sun mo eniyan pelu iriri ti o ti ri pelu awon eniyan. Aisan: eti didun, efori, jedi, kuruna, eyin didun, inurirun, arariro, ona ofun didun, ejeriru. Sora pelu ounje lode. Ise: ile kiko, alagbase, Agbe, Oluko, Iwe iroyin, ounje sise ta, eso tita, nkan oso ara ile ati oso ara, mineral tita, Mechanic.",
  "category": "Character & Destiny"
},
"1,10": {
  "id": "1,10",
  "title": "Section Ten - 1,10",
  "content": "Owo ko duro lowo re. Ibelorun/ajo.",
  "category": "Wealth & Travel"
},
"2,10": {
  "id": "2,10",
  "title": "Section Ten - 2,10",
  "content": "Yio se afeku dukia kan (Iyawo tabi omo).",
  "category": "Family & Property"
},
"3,10": {
  "id": "3,10",
  "title": "Section Ten - 3,10",
  "content": "Yio je oye tabi de ipo ola.",
  "category": "Position & Honour"
},
"4,10": {
  "id": "4,10",
  "title": "Section Ten - 4,10",
  "content": "Inu re ko dun sugbon yio ri idunnu.",
  "category": "Happiness"
},
"5,10": {
  "id": "5,10",
  "title": "Section Ten - 5,10",
  "content": "Oore nbo fun sugbon ota po fun ko belorun.",
  "category": "Friendship & Enemies"
},
"6,10": {
  "id": "6,10",
  "title": "Section Ten - 6,10",
  "content": "O nba enia je tabi ki a so pe awon enia nse ibaje re.",
  "category": "Enemies"
},
"7,10": {
  "id": "7,10",
  "title": "Section Ten - 7,10",
  "content": "Ko ni aseyori kankan. Adura kikankikan.",
  "category": "Failure & Warnings"
},
"8,10": {
  "id": "8,10",
  "title": "Section Ten - 8,10",
  "content": "Rin ajo ti a ko tanmo yio ri oore nibe.",
  "category": "Travel & Fortune"
},
"9,10": {
  "id": "9,10",
  "title": "Section Ten - 9,10",
  "content": "Ore yio daa, won yio lu ni jibiti owo.",
  "category": "Friends & Betrayal"
},
"10,10b": {
  "id": "10,10b",
  "title": "Section Ten - 10,10 (Extra)",
  "content": "Emi re kun fun opolopo nkan sugbon yio se aseyori.",
  "category": "Life & Success"
},
"11,10": {
  "id": "11,10",
  "title": "Section Ten - 11,10",
  "content": "Oore kan nbo fun sugbon okan re nse iyameji.",
  "category": "Friendship"
},
"12,10": {
  "id": "12,10",
  "title": "Section Ten - 12,10",
  "content": "Owo kan bo, yio si duro lowo.",
  "category": "Wealth"
},
"13,10": {
  "id": "13,10",
  "title": "Section Ten - 13,10",
  "content": "Owo kan nbo, yio si lo.",
  "category": "Wealth"
},
"14,10": {
  "id": "14,10",
  "title": "Section Ten - 14,10",
  "content": "Atajere lori oja.",
  "category": "Trade & Market"
},
"15,10": {
  "id": "15,10",
  "title": "Section Ten - 15,10",
  "content": "Irin ajo ti yio mu ibinu wa.",
  "category": "Travel & Warnings"
},
"16,10": {
  "id": "16,10",
  "title": "Section Ten - 16,10",
  "content": "Ogun airowona nbaa ja.",
  "category": "Conflict & War"
},
"11@1": {
  "id": "11@1",
  "title": "Section Eleven - 11@1",
  "content": "O nri irorun sugbon irorun yen ko po.",
  "category": "Comfort"
},
"11@2": {
  "id": "11@2",
  "title": "Section Eleven - 11@2",
  "content": "Ko fi ewa se sara ki owo le ji dada.",
  "category": "Wealth & Beauty"
},
"11@3": {
  "id": "11@3",
  "title": "Section Eleven - 11@3",
  "content": "Alaniyan o fe eyan meji, yala ko mo eyi ti yoo mu, tabi ko fi sola mo fe awon mejeji papo. A tun le tusi gbogbo nkan ti aba fi femi si lasiko, afi ki agbadura daada ko le bosi ki wahala ma jasi asan.",
  "category": "Love & Relationships"
},
"11@4": {
  "id": "11@4",
  "title": "Section Eleven - 11@4",
  "content": "Alaniyan nri idiwo lati idile baba.",
  "category": "Family Obstacles"
},
"11@5": {
  "id": "11@5",
  "title": "Section Eleven - 11@5",
  "content": "Ninu omo alaniyan o ti bi, ko ti bi obinrin ni yoo poju ninu omo re.",
  "category": "Children"
},
"11@6": {
  "id": "11@6",
  "title": "Section Eleven - 11@6",
  "content": "Eniyi ni ipenija owo. Bi igba ti won ti lekun mo owo re, won ndi owo lowo. 11 bawa ni 6 nikan ti ko si ni ibomiran, won ndi lowo. Ko pa akuko adie, ko fi eje re ra owo fun bi 30 minutes pelu adura itusile.",
  "category": "Wealth Challenges"
},
"11@7": {
  "id": "11@7",
  "title": "Section Eleven - 11@7",
  "content": "Okunrin yen obinrin meji lo date papo, tabi kape iyawo meji loni nile.",
  "category": "Marriage & Polygamy"
},
"11@8": {
  "id": "11@8",
  "title": "Section Eleven - 11@8",
  "content": "Sora ki awon Emere ma da emi re legbodo.",
  "category": "Spiritual Warnings"
},
"11@9": {
  "id": "11@9",
  "title": "Section Eleven - 11@9",
  "content": "Enikan nwa alaniyan, bo moto car ni yoo gba wa.",
  "category": "Travel & Cars"
},
"11@10": {
  "id": "11@10",
  "title": "Section Eleven - 11@10",
  "content": "O da owo yo da, won ko jeki owo duro, won ngba owo danu. O ni ipenija owo.",
  "category": "Wealth Problems"
},
"11@11": {
  "id": "11@11",
  "title": "Section Eleven - 11@11",
  "content": "Afokansi / erongba yoo se papa ti a ba ri irawo to da ni 6 ati 9. Yoo lokiki, adua re yoo gba.",
  "category": "Destiny & Prayers"
},
"11@12": {
  "id": "11@12",
  "title": "Section Eleven - 11@12",
  "content": "Ota ti alaniyan Emere ni, ki o se etutu Emere.",
  "category": "Enemies & Sacrifice"
},
"11@13": {
  "id": "11@13",
  "title": "Section Eleven - 11@13",
  "content": "Mura dada, Emere ti nda lamu sunmo pekipeki.",
  "category": "Spiritual Battles"
},
"11@14": {
  "id": "11@14",
  "title": "Section Eleven - 11@14",
  "content": "Onimoto kan nwa Alfa bo, car ni gbe bo. Ao wo ile 9, ti irawo to dara bawa nibe, yoo se dada. Ti irawo ti o dara ba wa nibe, yoo kan wa lasan ni.",
  "category": "Travel & Destiny"
},
"11@15": {
  "id": "11@15",
  "title": "Section Eleven - 11@15",
  "content": "Awon ti nse alaniyan inu ilu yen ni won jo ngbe.",
  "category": "Community"
},
"11@16": {
  "id": "11@16",
  "title": "Section Eleven - 11@16",
  "content": "Ati eyin odi ni won ti nta ofa si.",
  "category": "Enemies & Attacks"
},
"11A": {
  "id": "11A",
  "title": "Section Eleven - 11A",
  "content": "Afefe, Emere, ile erongba, ile afokansi. Eyan dudu, obinrin ni ni, Emere, elegbe omo. Irawo ijitimohi 11, ti ki se onibeji, ati askafu 10. Irawo aso, ti ko ni opposite, ko ni omo iya. Ijitmohi a ma soro obinrin to je dudu. A mo lo fun moto, car kekere. 11@3, 11@4, ogun Emere ni won fi nja eyan. Iya ati ibanuje, itiju ati iponju, ko si oluranlowo afi Oluwa. Ohun ti on ro lokan le se si ere, idiwo owo, alantakun kiko lara. Sora fun iwa aifarabale, gba imoran awon asaju, je alatunse. O je olotito, sugbon aye tabi awon eniyan koni gba o laaye lati so otito. Ota po, won yoo ma jowu re. O ma nko irinmeji bona po, o ma se nkan meji lekansoso. Aisan: arariro, inudidun, inurirun, ipalaran ibija (accident), arawiwo, oyioju. Ise: Teacher, agbe, tewetegbo sise, egbo igi tita, nkan osin, aso reran, nurse, doctor, owo sise.",
  "category": "Character & Destiny"
},
"1,11": {
  "id": "1,11",
  "title": "Section Eleven - 1,11",
  "content": "Oogun yio maa daa, Laamu (afunje oju oorun/aye).",
  "category": "Medicine & Protection"
},
"2,11": {
  "id": "2,11",
  "title": "Section Eleven - 2,11",
  "content": "Oore nla kan nbo wa, Kokun fun adura.",
  "category": "Blessings"
},
"3,11": {
  "id": "3,11",
  "title": "Section Eleven - 3,11",
  "content": "Oju obinrin / o ko yio maa pon on.",
  "category": "Love & Women"
},
"4,11": {
  "id": "4,11",
  "title": "Section Eleven - 4,11",
  "content": "Ririse/Ririje ko jina sii, lasiko yi oore sunmo.",
  "category": "Success"
},
"5,11": {
  "id": "5,11",
  "title": "Section Eleven - 5,11",
  "content": "Alakala wa fun.",
  "category": "Warnings"
},
"6,11": {
  "id": "6,11",
  "title": "Section Eleven - 6,11",
  "content": "Iyanje yio waaye lori oro kan. Suuru.",
  "category": "Challenges"
},
"7,11": {
  "id": "7,11",
  "title": "Section Eleven - 7,11",
  "content": "Ko sora fun ore kore. Onijibiti, ko sora ki jibiti ma daalu.",
  "category": "Friends & Betrayal"
},
"8,11": {
  "id": "8,11",
  "title": "Section Eleven - 8,11",
  "content": "Yio fe obinrin, yio loko lorun.",
  "category": "Marriage"
},
"9,11": {
  "id": "9,11",
  "title": "Section Eleven - 9,11",
  "content": "Aisooto nko baa. Lemi ise, irin ajo yio waye ko lo.",
  "category": "Travel & Deception"
},
"10,11": {
  "id": "10,11",
  "title": "Section Eleven - 10,11",
  "content": "Oju owo npon, saara nkan pupa.",
  "category": "Wealth & Sacrifice"
},
"11,11": {
  "id": "11,11",
  "title": "Section Eleven - 11,11",
  "content": "Owo to po nbo wa fun.",
  "category": "Wealth"
},
"12,11": {
  "id": "12,11",
  "title": "Section Eleven - 12,11",
  "content": "Airoju kan nbo wa baa.",
  "category": "Obstacles"
},
"13,11": {
  "id": "13,11",
  "title": "Section Eleven - 13,11",
  "content": "Ko sora fun Elenini.",
  "category": "Enemies"
},
"14,11": {
  "id": "14,11",
  "title": "Section Eleven - 14,11",
  "content": "Bi ko ba moo eniyan, je won nba je.",
  "category": "Community"
},
"15,11": {
  "id": "15,11",
  "title": "Section Eleven - 15,11",
  "content": "Eti nsele lori ohun ti o beere si. Eti nsele sii.",
  "category": "Warnings"
},
"16,11": {
  "id": "16,11",
  "title": "Section Eleven - 16,11",
  "content": "Ko mase ebe. Iyonu lopolopo, owo nbo.",
  "category": "Wealth & Trouble"
},
  "12@1": {
    "id": "12@1",
    "title": "Section Twelve - 12@1",
    "content": "Ota po, yoo ri iwosi, sora fun ibinu papa lori owo. Onibere ore diedie ni wole fun.",
    "category": "Enemies & Caution"
  },
  "12@2": {
    "id": "12@2",
    "title": "Section Twelve - 12@2",
    "content": "Obinrin ti yoo fe o nbo. Aranse mbo wa ni ibi ise wa. Ore to po yoo wole fun, to ba tun wa nile keta ore to po gan yoo wole.",
    "category": "Marriage & Opportunities"
  },
  "12@3": {
    "id": "12@3",
    "title": "Section Twelve - 12@3",
    "content": "Yoo sapejuwe obinrin, yala iyawo tabi ale, o kuru, ko ga, o dudu, obinrin ko mojuto ibujoko re. Aranse nbo lati odo Olorun, aroye nbe fun o. Ka sora fun ore nitori akoba ti aranse yi ba de.",
    "category": "Relationships & Test"
  },
  "12@4": {
    "id": "12@4",
    "title": "Section Twelve - 12@4",
    "content": "Ao fe obinrin dudu kan, odara. Ile dada ni sugbon awon yoo ma ba sota sugbon yoo jeri won.",
    "category": "Marriage & Household"
  },
  "12@5": {
    "id": "12@5",
    "title": "Section Twelve - 12@5",
    "content": "Eniti o nwa omo ni egbe wa yoo bimo. Omo kan yoo ma se jagidijagan, se ipanle.",
    "category": "Children & Family"
  },
  "12@6": {
    "id": "12@6",
    "title": "Section Twelve - 12@6",
    "content": "Ko fi okan bale, won ko le dadurosibe, nkan buruku kan kole sele si lenu ise.",
    "category": "Work & Stability"
  },
  "12@7": {
    "id": "12@7",
    "title": "Section Twelve - 12@7",
    "content": "Yoo sapejuwe obinrin, yala iyawo tabi ale, o kuru, ko ga, o dudu, obinrin ko mojuto ibujoko re. Obinrin na yoo ma fi se faari. Aori obinrin kan, oni apa lese osi.",
    "category": "Relationships & Family Signs"
  },
  "12@8": {
    "id": "12@8",
    "title": "Section Twelve - 12@8",
    "content": "Ki onibere ma fa wahala, ma se jagidijagan. Eti yoo maa ba ohun to fe se, won yoo ma wadi wa kiri.",
    "category": "Conduct & Guidance"
  },
  "12@9": {
    "id": "12@9",
    "title": "Section Twelve - 12@9",
    "content": "Ore yoo wole fun alaniyan.",
    "category": "Wealth & Friends"
  },
  "12@10": {
    "id": "12@10",
    "title": "Section Twelve - 12@10",
    "content": "Yoo ri idunnu lodo ijoba. Aranse nbo wa laipe yi. Olopa yoo mu, tabi oro to jemo ijoba, yoo ni aponle, eni iyi, eni eye.",
    "category": "Government & Honor"
  },
  "12@11": {
    "id": "12@11",
    "title": "Section Twelve - 12@11",
    "content": "Disappointment. Won a ni ko mu nkan kan wa, leyin na owo yoo te nkan ti a fe ti nba reti nkan. Irorun, gbogbo afokansi yoo jasi irorun.",
    "category": "Disappointment & Relief"
  },
  "12@12": {
    "id": "12@12",
    "title": "Section Twelve - 12@12",
    "content": "Ota po, won fe gbemi re.",
    "category": "Enemies & Danger"
  },
  "12@13": {
    "id": "12@13",
    "title": "Section Twelve - 12@13",
    "content": "Ma ya eniyan lowo, ko ni dapada fun. Owo ilu oyinbo wa lowo re.",
    "category": "Finance & Caution"
  },
  "12@14": {
    "id": "12@14",
    "title": "Section Twelve - 12@14",
    "content": "Awon ota ni nse o. Owo kan nbo fun Alfa.",
    "category": "Enemies & Finance"
  },
  "12@15": {
    "id": "12@15",
    "title": "Section Twelve - 12@15",
    "content": "Wa gba owo kan laipe yi. Ile ti o ngbe ko jinna si odo. Won kun ninu, won ko kun nita.",
    "category": "Wealth & Household"
  },
  "12@16": {
    "id": "12@16",
    "title": "Section Twelve - 12@16",
    "content": "Won yoo kan sara si, ma fi inu han eniyan. Ona ati travel yoo laa, o ti jade kuro ninu ilu. Ti a ba ri po, 12@10, ipase ijoba ni yoo fi kuro ninu ilu sile. Ona ati travel laa sile. O ti jade kuro ninu ilu. Ti a ba tun ri 12@10 ijoba yoo mu, deportation, yoo jade kuro ninu ilu.",
    "category": "Travel & Exile"
  },
  "12A": {
    "id": "12A",
    "title": "Section Twelve - 12A",
    "content": "Mura tori wahala ati ijangbon, ti awon ota ngbiyanju. Awon ota yoo ma se ilara re, won yoo ma wa isubu re ati titonija, lati ko inira ati wahala ba o ati so eni di eni ile (Olosi). Awon ota yoo ma fa asedanu sinu aye re yala lori ise (Business). Idiwo ati ainito wa fun o nisisiyi pelu adura ati igbiyanju, ona re yoo la. Iyanu ati anfani (Ore) lati ehin odi wa ore nbo. Owo, leta oke okun, nkan tita oke okun, awon olola yoo mo laipe yi, yoo di eni yi larin awon eniyan. Ma se fa oro kan lakoko yi, ki o se suru die. Sora fun iwa aifarabale woran woran loni ki o si gba imoran awon asaju gbiyanju lati je alatunse ki o ma je baseje loni. Sora fun obinrin/okunrin pelu iwa palapala.",
    "category": "Enemies & Struggles"
  },
  "12B": {
    "id": "12B",
    "title": "Section Twelve - 12B",
    "content": "O je onitiju eda ti inu re dara, ti o feran alaafia, ti o ni ifarada igba. Feran irepo, koferan lati maa yoju si nkan ti kokan. O ni ebun ogbon ati oye tio n lo lati fi yanju oro. Feran orin, nife ile kiko, elemi gigun, olofin toto, alanu eda ni. Awon eniyan yoo maa yan je, o maa n fa eniyan goke, o maa n je ibanuje fun ti koba si owolowo re lati fi se iranlowo fun eniyan. O maa n fi arani re lati ran elomiran lowo. O korira gbese tabi ra nkan win. O maa n wa lorin kan ti o bafe se tabi pinnu lori nkankan. Nkan ti yoo yi ipinu re pada yoo le die. Igbese aye re yoo kun fun orisirisi ikuna, isoro, aini ifoya, airise ati wahala. Awon eniyan kan yoo maa je sababi buruku sinu aye won. Okan re lora lati gba yangbo tabi lati sun mo eniyan pelu iriri. Aisan: eti didun, efori, jedi, kuruna, eyin didun, inurirun, arariro, ona ofun didun, ejeriru. Ise: ise ile kiko, alagbase, Agbe, Oluko, Iwe iroyin, ounje sise ta, eso tita, nkan oso ara ile ati oso ara, mineral tita, mechanic.",
    "category": "Character & Life Path"
  }


};

export default testimoniesData;