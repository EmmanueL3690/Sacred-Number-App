"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/Dialog";

const testimoniesData = {
  // === H Solutions ===
  "1H": {
    id: "1H",
    title: "Section One - 1H",
    content: "Ewu nla ti yio sele. Aare yoo se enikan, sugbon yoo gbadun",
    category: "Warning & Leadership",
  },
  "2H": {
    id: "2H",
    title: "Section Two - 2H",
    content: "Nkan ti o lo lowo re yoo pada. Onibeere yo ma se inawo anadanu",
    category: "Financial Recovery",
  },
  "3H": {
    id: "3H",
    title: "Section Three - 3H",
    content:
      "Yoo ri ore ni ojo kewa osu ti n bo, ki o beloun ki ewu nla masele si o",
    category: "Friendship & Protection",
  },
  "4H": {
    id: "4H",
    title: "Section Four - 4H",
    content: "Mura tori wahala ota. Dukia wa kan nbe nita, ki a gba",
    category: "Enemy Warning & Wealth",
  },
  "5H": {
    id: "5H",
    title: "Section Five - 5H",
    content: "Ko belorun lori omo, enikan yoo saare, sugbon ko ni ku",
    category: "Child Protection & Safety",
  },
  "6H": {
    id: "6H",
    title: "Section Six - 6H",
    content: "Enikan yoo ku, ki a ma losi ibe",
    category: "Death Warning",
  },
  "7H": {
    id: "7H",
    title: "Section Seven - 7H",
    content: "Iyawo re yoo ko sile, Obinrin kan nje ni bebe iku",
    category: "Marriage & Relationship",
  },
  "8H": {
    id: "8H",
    title: "Section Eight - 8H",
    content:
      "Ija adugbo ti yoo kan iwo papa. Ki onibeere yi se saara lori iku",
    category: "Community Conflict",
  },
  "9H": {
    id: "9H",
    title: "Section Nine - 9H",
    content:
      "Ma paya irorun nbo, inawo tabi fifo nkan to robe lorun ki awon ota maa",
    category: "Peace & Enemy Protection",
  },

  // === A Solutions ===
  "1A": {
    id: "1A",
    title: "Section One - 1A",
    content:
      "Oro obinrin, ki Olorun bo asiri, on nwa nkan lo si ibikan, onse iranlowo fun enikan. Emi Onibeere yoo gun",
    category: "Women & Support",
  },
  "2A": {
    id: "2A",
    title: "Section Two - 2A",
    content:
      "Alakala, ounje oju orun, alawada, timo fi eeyan se yeye, ti ko serious, ro eyan pin. A le da ni imoran pe ko ma se tiata",
    category: "Guidance & Behavior",
  },
  "3A": {
    id: "3A",
    title: "Section Three - 3A",
    content:
      "Oro Awe, oro obinrin kan nbe ni emi re, o nro pe nkan kolo dede, awon agba nse",
    category: "Tradition & Women",
  },
  "4A": {
    id: "4A",
    title: "Section Four - 4A",
    content:
      "O n ri awon nkankan ti ndun mo ninu, yala ninu ile tabi nita. Ki o ma te aso funfun sori bed re to ba fe sun",
    category: "Household & Protection",
  },
  "5A": {
    id: "5A",
    title: "Section Five - 5A",
    content: "Ironu nipa omo, irin ajo lilo, o fe kuro nibikan bo si ibikan",
    category: "Children & Travel",
  },
  "6A": {
    id: "6A",
    title: "Section Six - 6A",
    content:
      "Ohun ibinu. Aare okan nda onibeere laamu. Nurse arun kan ninu ara. N gbero lati ra nkan bi irin, ero",
    category: "Health & Anger",
  },
  "7A": {
    id: "7A",
    title: "Section Seven - 7A",
    content:
      "Owa ninu ibanuje airi owo na. Ao ma la alakala. Awon agba ndaamu, awon aje ntele kakiri. Won ko jeki oni isinmi",
    category: "Wealth & Struggles",
  },
  "8A": {
    id: "8A",
    title: "Section Eight - 8A",
    content: "Nkan ibanuje, ipaya. Aifi okan bale nbe fun onibere",
    category: "Fear & Worry",
  },
  "9A": {
    id: "9A",
    title: "Section Nine - 9A",
    content:
      "Okan onibere gba igbe, ironu to jinna ti eyan ti gba gbe ra. Ironu ti ma sori eyan kodo ti o le fa iku lojiji",
    category: "Deep Thoughts & Danger",
  },
  "10A": {
    id: "10A",
    title: "Section Ten - 10A",
    content:
      "Ko gbadura tori aare, okan re kun fun ironu. Alaniyan nfi okan si aran se kan, ore",
    category: "Prayer & Worry",
  },
  "11A": {
    id: "11A",
    title: "Section Eleven - 11A",
    content:
      "Royiroyi, ibi ti o fi kan te si adua ko le dara. Okan re wa lori nkankan. O nri irorun sugbon irorun yen ko po",
    category: "Dreams & Limited Relief",
  },
  "12A": {
    id: "12A",
    title: "Section Twelve - 12A",
    content:
      "Ota po, yoo ri iwosi, sora fun ibinu papa lori owo. Onibere ore diedie ni wole fun",
    category: "Enemies & Wealth",
  },
  "13A": {
    id: "13A",
    title: "Section Thirteen - 13A",
    content:
      "Nkan ibinu, ti okan ko, ki ise ma dojuru. Alaniyan ngbero moto nla jeep lati ra",
    category: "Plans & Anger",
  },
  "14A": {
    id: "14A",
    title: "Section Fourteen - 14A",
    content:
      "(Alfa, aladua, oni mimo) Aya onibere nja aya lori ogun to fe se. Yio je eniti Olorun fun lebun",
    category: "Religion & Conflict",
  },
  "15A": {
    id: "15A",
    title: "Section Fifteen - 15A",
    content:
      "Oni gbese lorun ti npalaya, oni gbese lorun ti o npa laya. Ma se lo aso to riri, aso alakowe",
    category: "Debt & Burden",
  },
  "16A": {
    id: "16A",
    title: "Section Sixteen - 16A",
    content:
      "Inu bibi abiju, igbona okan, oro ti a nba o leru, yio dara. Okan eni kun fun ero orisirisi",
    category: "Anger & Mixed Emotions",
  },
  "17A": {
    id: "17A",
    title: "Section Seventeen - 17A",
    content: "1@5 and 6: Oyun ibeji / oyun ti ko ni se see se",
    category: "Pregnancy",
  },
  "18A": {
    id: "18A",
    title: "Section Eighteen - 18A",
    content:
      "1&2 1,1: Eti yio ba adawole re. Yio maa gbero nkan kan ko ni seese. Yio ri wahala die, ko be Olorun",
    category: "Warnings & Challenges",
  },
  "19A": {
    id: "19A",
    title: "Section Nineteen - 19A",
    content: "1&2,2,1: Yio maa banuje lori awon isesi kan agbaana",
    category: "Sadness",
  },
  "20A": {
    id: "20A",
    title: "Section Twenty - 20A",
    content:
      "1&2,3,1: Nkan re yio maa baje loju emi re. Adura gidiidi. Ko be Olorun fun aseyori rere",
    category: "Prayer & Success",
  },
  "21A": {
    id: "21A",
    title: "Section Twenty-One - 21A",
    content: "1&2,4,1: Aare yio see. Awon Agba ti pin aran re",
    category: "Destiny",
  },
  "22A": {
    id: "22A",
    title: "Section Twenty-Two - 22A",
    content: "1&2,5,1: Omo yio je adanwo fun un",
    category: "Children & Trials",
  },
  "23A": {
    id: "23A",
    title: "Section Twenty-Three - 23A",
    content: "1&2,6,1: Ko mase ba enian da owo po, yio run yio padaanu dukia",
    category: "Wealth & Warning",
  },
  "24A": {
    id: "24A",
    title: "Section Twenty-Four - 24A",
    content: "1&2,7,1: Ko sora fun ole. Ko loni ibelorun fun aseyori rere",
    category: "Caution & Theft",
  },
  "25A": {
    id: "25A",
    title: "Section Twenty-Five - 25A",
    content:
      "1&2,8,1: Emi kukuru nbe fun. Ko si aseyori kankan. Ko be Olorun gidigidi",
    category: "Short Life Warning",
  },
  "26A": {
    id: "26A",
    title: "Section Twenty-Six - 26A",
    content:
      "1&2,9,1: Owo jijo, ai ni akojo. Ko be Olorun ki ijanba ma baa see",
    category: "Wealth & Loss",
  },
  "27A": {
    id: "27A",
    title: "Section Twenty-Seven - 27A",
    content:
      "1&2,10,1: Oore jinna si alaniyan. Yi ki o gbiyanju lati toju ara",
    category: "Kindness & Health",
  },
  "28A": {
    id: "28A",
    title: "Section Twenty-Eight - 28A",
    content: "1&2,11,1: Ki alufaa sora fun sina, ki ifaseyin ma baa de baa",
    category: "Religious Caution",
  },
  "29A": {
    id: "29A",
    title: "Section Twenty-Nine - 29A",
    content:
      "1&2,12,1: Owo kan nbo wa sugbon ki o be Olorun ki o le baa tewo",
    category: "Wealth & Prayer",
  },
  "30A": {
    id: "30A",
    title: "Section Thirty - 30A",
    content:
      "1&2,14,1: Irin ajo to dara to si mu idunnu lowo. Ori rere ni irin ajo",
    category: "Travel & Joy",
  },
  "31A": {
    id: "31A",
    title: "Section Thirty-One - 31A",
    content: "1&2,15,1: Ko sora fun gbese. Ki alufaa baa be Olorun",
    category: "Debt & Caution",
  },
  "32A": {
    id: "32A",
    title: "Section Thirty-Two - 32A",
    content:
      "1&2,16,1: Aise deede nbe fun lori dukia ati awon omo. Ki o se adua",
    category: "Wealth & Children",
  },
  "33A": {
    id: "33A",
    title: "Section Thirty-Three - 33A",
    content:
      "Nkan re yoo ma fale, eti lori adawole, sora tori ki ota ma be si ile. Ajosepo pelu eletan obinrin ati okunrin...",
    category: "Enemies & Relationships",
  },
  "34A": {
    id: "34A",
    title: "Section Thirty-Four - 34A",
    content:
      "O je eda ti ko nini ore otito ti yoo wa pelu lo titi. O ma tete fura tabi ri asise eniyan maa nronun ipa iwa...",
    category: "Friendship & Truth",
  },
};


export default function TestimoniesGrid() {
  const [selectedTestimony, setSelectedTestimony] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const numbers = Array.from({ length: 34 }, (_, i) => i + 1);
  const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"];

  const handleCellClick = (number, letter) => {
    const key = `${number}${letter}`;
    const testimony = testimoniesData[key];

    if (testimony) {
      setSelectedTestimony(testimony);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-black bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-4">
          Sacred Solutions Archive
        </h2>
        <p className="text-base sm:text-lg font-bold text-black drop-shadow-md">
          Discover wisdom through the mystical number-letter combinations
        </p>
      </div>

      <div className="overflow-x-auto bg-white/95 backdrop-blur-sm rounded-2xl border-2 border-orange-200 shadow-xl p-4 sm:p-6">
        <div className="min-w-[800px]">
          {/* Header with letters */}
          <div className="grid grid-cols-17 gap-1 mb-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12"></div>
            {letters.map((letter) => (
              <div
                key={letter}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-lg flex items-center justify-center font-black text-xs sm:text-sm shadow-lg"
              >
                {letter}
              </div>
            ))}
          </div>

          {/* Grid with numbers and cells */}
          {numbers.map((number) => (
            <div key={number} className="grid grid-cols-17 gap-1 mb-1">
              {/* Number header */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-lg flex items-center justify-center font-black text-xs sm:text-sm shadow-lg">
                {number}
              </div>

              {/* Letter cells */}
              {letters.map((letter) => {
                const key = `${number}${letter}`;
                const hasData = testimoniesData[key];

                return (
                  <button
                    key={key}
                    onClick={() => handleCellClick(number, letter)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center font-black text-xs transition-all duration-200 border-2 min-h-[40px] min-w-[40px] ${
                      hasData
                        ? "bg-gradient-to-br from-green-400 to-emerald-500 text-white border-green-600 hover:scale-110 hover:shadow-xl cursor-pointer"
                        : "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
                    }`}
                    disabled={!hasData}
                  >
                    {key}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <div className="flex items-center justify-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded border-2 border-green-600"></div>
          <span className="text-sm font-bold text-black">Available Solutions</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="w-4 h-4 bg-gray-100 rounded border-2 border-gray-300"></div>
          <span className="text-sm font-bold text-black">Coming Soon</span>
        </div>
      </div>

      {/* Solution Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-2xl bg-gradient-to-br from-white via-orange-50 to-yellow-50 border-2 border-orange-300 mx-4 sm:mx-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-black bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent text-center">
              {selectedTestimony?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedTestimony && (
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-orange-200 shadow-lg">
                <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-sm">{selectedTestimony.id}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-orange-700 bg-orange-100 px-3 py-1 rounded-full text-center">
                    {selectedTestimony.category}
                  </span>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-4 border-l-4 border-orange-500">
                  <p className="text-base sm:text-lg font-bold text-gray-900 leading-relaxed">
                    {selectedTestimony.content}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white px-6 sm:px-8 py-2 sm:py-3 font-black shadow-xl min-h-[44px] w-full sm:w-auto"
                >
                  Close Sacred Message
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
