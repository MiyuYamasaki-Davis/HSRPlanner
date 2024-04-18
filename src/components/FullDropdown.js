import React, { useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Image from "next/image";
import acheron from "../../public/images/HSR/acheron.png"
import argenti from "../../public/images/HSR/argenti.png"
import arlan from "../../public/images/HSR/arlan.png"
import asta from "../../public/images/HSR/asta.png"
import aventurine from "../../public/images/HSR/aventurine.png"
import bailu from "../../public/images/HSR/bailu.png"
import blackswan from "../../public/images/HSR/blackswan.png"
import blade from "../../public/images/HSR/blade.png"
// import boothill from "../../public/images/HSR/boothill.png"
import bronya from "../../public/images/HSR/bronya.png"
import clara from "../../public/images/HSR/clara.png"
import danheng from "../../public/images/HSR/danheng.png"
import danhengil from "../../public/images/HSR/danhengil.png"
import drratio from "../../public/images/HSR/drratio.png"
import fuxuan from "../../public/images/HSR/fuxuan.png"
import gallagher from "../../public/images/HSR/gallagher.png"
import gepard from "../../public/images/HSR/gepard.png"
import guinaifen from "../../public/images/HSR/guinaifen.png"
import hanya from "../../public/images/HSR/hanya.png"
import herta from "../../public/images/HSR/herta.png"
import himeko from "../../public/images/HSR/himeko.png"
import hook from "../../public/images/HSR/hook.png"
import huohuo from "../../public/images/HSR/huohuo.png"
import jingyuan from "../../public/images/HSR/jingyuan.png"
import jingliu from "../../public/images/HSR/jingliu.png"
import kafka from "../../public/images/HSR/kafka.png"
import luka from "../../public/images/HSR/luka.png"
import luocha from "../../public/images/HSR/luocha.png"
import lynx from "../../public/images/HSR/lynx.png"
import march from "../../public/images/HSR/march.png"
import misha from "../../public/images/HSR/misha.png"
import natasha from "../../public/images/HSR/natasha.png"
import pela from "../../public/images/HSR/pela.png"
import qingque from "../../public/images/HSR/qingque.png"
// import robin from "../../public/images/HSR/robin.png"
import ruanmei from "../../public/images/HSR/ruanmei.png"
import sampo from "../../public/images/HSR/sampo.png"
import seele from "../../public/images/HSR/seele.png"
import serval from "../../public/images/HSR/serval.png"
import silverwolf from "../../public/images/HSR/silverwolf.png"
import sparkle from "../../public/images/HSR/sparkle.png"
import sushang from "../../public/images/HSR/sushang.png"
import tingyun from "../../public/images/HSR/tingyun.png"
import topaz from "../../public/images/HSR/topaz.png"
import tbfire from "../../public/images/HSR/tbfire.png"
import tbphys from "../../public/images/HSR/tbphys.png"
import welt from "../../public/images/HSR/welt.png"
import xueyi from "../../public/images/HSR/xueyi.png"
import yanqing from "../../public/images/HSR/yanqing.png"
import yukong from "../../public/images/HSR/yukong.png"
import na from "../../public/images/HSR/NA.png"
import pBook from "../../public/images/HSR/pBook.png"
import bBook from "../../public/images/HSR/bBook.png"
import gBook from "../../public/images/HSR/gBook.png"
import pFilm from "../../public/images/HSR/pFilm.png"
import bFilm from "../../public/images/HSR/bFilm.png"
import gFilm from "../../public/images/HSR/gFilm.png"
import stag1 from "../../public/images/HSR/Item_Ascendant_Debris.png"
import stag2 from "../../public/images/HSR/Item_Broken_Teeth_of_Iron_Wolf.png"
import stag3 from "../../public/images/HSR/Item_Dream_Flamer.png"
import stag4 from "../../public/images/HSR/Item_Dream_Fridge.png"
import stag5 from "../../public/images/HSR/Item_Endotherm_Chitin.png"
import stag6 from "../../public/images/HSR/Item_Gelid_Chitin.png"
import stag7 from "../../public/images/HSR/Item_Golden_Crown_of_the_Past_Shadow.png"
import stag8 from "../../public/images/HSR/Item_Horn_of_Snow.png"
import stag9 from "../../public/images/HSR/Item_Lightning_Crown_of_the_Past_Shadow.png"
import stag10 from "../../public/images/HSR/Item_Nail_of_the_Ape.png"
import stag11 from "../../public/images/HSR/Item_Netherworld_Token.png"
import stag12 from "../../public/images/HSR/Item_Searing_Steel_Blade.png"
import stag13 from "../../public/images/HSR/Item_Shape_Shifter's_Lightning_Staff.png"
import stag14 from "../../public/images/HSR/Item_Storm_Eye.png"
import stag15 from "../../public/images/HSR/Item_Suppressing_Edict.png"
import stag16 from "../../public/images/HSR/Item_Void_Cast_Iron.png"
import stag17 from "../../public/images/HSR/Item_Raging_Heart.png"
import borehole from "../../public/images/HSR/borehole.png"
import divineseed from "../../public/images/HSR/divineseed.png"
import destroyer from "../../public/images/HSR/destroyer.png"
import eternal from "../../public/images/HSR/eternal.png"
import gABP from "../../public/images/HSR/gA.png";
import bABP from "../../public/images/HSR/bA.png";
import pABP from "../../public/images/HSR/pA.png";
import gAFG from "../../public/images/HSR/gAFG.png";
import bAFG from "../../public/images/HSR/bAFG.png";
import pAFG from "../../public/images/HSR/pAFG.png";
import gDSW from "../../public/images/HSR/gDSW.png";
import bDSW from "../../public/images/HSR/bDSW.png";
import pDSW from "../../public/images/HSR/pDSW.png";
import gDSZ from "../../public/images/HSR/gDSZ.png";
import bDSZ from "../../public/images/HSR/bDSZ.png";
import pDSZ from "../../public/images/HSR/pDSZ.png";
import gE from "../../public/images/HSR/gE.png";
import bE from "../../public/images/HSR/bE.png";
import pE from "../../public/images/HSR/pE.png";
import gHRS from "../../public/images/HSR/gHRS.png";
import bHRS from "../../public/images/HSR/bHRS.png";
import pHRS from "../../public/images/HSR/pHRS.png";
import gHTR from "../../public/images/HSR/gHTR.png";
import bHTR from "../../public/images/HSR/bHTR.png";
import pHTR from "../../public/images/HSR/pHTR.png";
import gNAC from "../../public/images/HSR/gNAC.png";
import bNAC from "../../public/images/HSR/bNAC.png";
import pNAC from "../../public/images/HSR/pNAC.png";
import gNGM from "../../public/images/HSR/gNGM.png";
import bNGM from "../../public/images/HSR/bNGM.png";
import pNGM from "../../public/images/HSR/pNGM.png";
import gPSZ from "../../public/images/HSR/gP.png";
import bPSZ from "../../public/images/HSR/bP.png";
import pPSZ from "../../public/images/HSR/pP.png";
import gPCSTP from "../../public/images/HSR/gPCSTP.png"
import bPCSTP from "../../public/images/HSR/bPCSTP.png"
import pPCSTP from "../../public/images/HSR/pPCSTP.png"
import gH from "../../public/images/HSR/gH.png";
import bH from "../../public/images/HSR/bH.png";
import pH from "../../public/images/HSR/pH.png";
import cookie from 'js-cookie';
import Cookies from "js-cookie";

const FullDropdown = (props) => {
  const characters = [
  { text:"Acheron", star:5, type:"N", stag:13, mat:"NAC", boss:"B", image:acheron},
  { text:"Argenti", star:5, type:"E", stag:11, mat:"E", boss:"DS", image:argenti},
  { text:"Arlan", star:4, type:"D", stag:9, mat:"DSZ", boss:"D", image:arlan},
  { text:"Asta", star:4, type:"Ha", stag:5, mat:"HRS", boss:"D", image:asta},
  { text:"Aventurine", star:5, type:"P", stag:15, mat:"PCSTP", boss:"B", image:aventurine},
  { text:"Bailu", star:5, type:"A", stag:9, mat:"ABP", boss:"EF", image:bailu},
  { text:"Black Swan", star:5, type:"N", stag:1, mat:"NAC", boss:"B", image:blackswan},
  { text:"Blade", star:5, type:"D", stag:1, mat:"DSZ", boss:"DS", image:blade},
  { text:"Boothill", star:5, type:"Hu", stag:0, mat:"", boss:"", image:na},
  { text:"Bronya", star:5, type:"Ha", stag:14, mat:"HRS", boss:"EF", image:bronya},
  { text:"Clara", star:5, type:"D", stag:2, mat:"DSZ", boss:"EF", image:clara},
  { text:"Dan Heng", star:4, type:"Hu", stag:14, mat:"H", boss:"D", image:danheng},
  { text:"Dan Heng: Imbibitor Lunae", star:5, type:"D", stag:15, mat:"DSZ", boss:"DS", image:danhengil},
  { text:"Dr. Ratio", star:5, type:"Hu", stag:15, mat:"H", boss:"B", image:drratio},
  { text:"Fu Xuan", star:5, type:"P", stag:10, mat:"PSZ", boss:"DS", image:fuxuan},
  { text:"Gallagher", star:4, type:"A", stag:0, mat:"AFG", boss:"", image:gallagher},
  { text:"Gepard", star:5, type:"P", stag:8, mat:"PSZ", boss:"EF", image:gepard},
  { text:"Guinaifen", star:4, type:"N", stag:12, mat:"NGM", boss:"DS", image:guinaifen},
  { text:"Hanya", star:4, type:"Ha", stag:11, mat:"HRS", boss:"DS", image:hanya},
  { text:"Herta", star:4, type:"E", stag:8, mat:"E", boss:"D", image:herta},
  { text:"Himeko", star:5, type:"E", stag:5, mat:"E", boss:"D", image:himeko},
  { text:"Hook", star:4, type:"D", stag:5, mat:"DSZ", boss:"EF", image:hook},
  { text:"Huohuo", star:5, type:"A", stag:1, mat:"ABP", boss:"DS", image:huohuo},
  { text:"Jing Yuan", star:5, type:"E", stag:13, mat:"E", boss:"D", image:jingyuan},
  { text:"Jingliu", star:5, type:"D", stag:6, mat:"DSZ", boss:"DS", image:jingliu},
  { text:"Kafka", star:5, type:"N", stag:13, mat:"NGM", boss:"DS", image:kafka},
  { text:"Luka", star:4, type:"N", stag:2, mat:"NGM", boss:"DS", image:luka},
  { text:"Luocha", star:5, type:"A", stag:7, mat:"ABP", boss:"EF", image:luocha},
  { text:"Lynx", star:4, type:"A", stag:10, mat:"ABP", boss:"DS", image:lynx},
  { text:"March 7th", star:4, type:"P", stag:8, mat:"PSZ", boss:"D", image:march},
  { text:"Misha", star:4, type:"D", stag:4, mat:"DSW", boss:"B", image:misha},
  { text:"Natasha", star:4, type:"A", stag:2, mat:"ABP", boss:"EF", image:natasha},
  { text:"Pela", star:4, type:"N", stag:8, mat:"NGM", boss:"EF", image:pela},
  { text:"Qingque", star:4, type:"E", stag:16, mat:"E", boss:"EF", image:qingque},
  { text:"Robin", star:5, type:"H", stag:0, mat:"", boss:"", image:na},
  { text:"Ruan Mei", star:5, type:"H", stag:6, mat:"HRS", boss:"B", image:ruanmei},
  { text:"Sampo", star:4, type:"N", stag:14, mat:"NGM", boss:"EF", image:sampo},
  { text:"Seele", star:5, type:"Hu", stag:16, mat:"H", boss:"EF", image:seele},
  { text:"Serval", star:4, type:"E", stag:9, mat:"E", boss:"EF", image:serval},
  { text:"Silver Wolf", star:5, type:"N", stag:16, mat:"NGM", boss:"D", image:silverwolf},
  { text:"Sparkle", star:5, type:"Ha", stag:3, mat:"HTR", boss:"B", image:sparkle},
  { text:"Sushang", star:4, type:"Hu", stag:2, mat:"H", boss:"EF", image:sushang},
  { text:"Tingyun", star:4, type:"Ha", stag:9, mat:"HRS", boss:"D", image:tingyun},
  { text:"Topaz", star:5, type:"Hu", stag:12, mat:"H", boss:"DS", image:topaz},
  { text:"Trailblazer: Preservation", star:5, type:"P", stag:0, mat:"PSZ", boss:"D", image:tbfire},
  { text:"Trailblazer: Destruction", star:5, type:"D", stag:0, mat:"DSZ", boss:"D", image:tbphys},
  { text:"Welt", star:5, type:"N", stag:7, mat:"NGM", boss:"D", image:welt},
  { text:"Xueyi", star:4, type:"D", stag:10, mat:"DSZ", boss:"B", image:xueyi},
  { text:"Yanqing", star:5, type:"Hu", stag:6, mat:"H", boss:"EF", image:yanqing},
  { text:"Yukong", star:4, type:"Ha", stag:7, mat:"HRS", boss:"D", image:yukong}
]

const lightCones = [
  { text:"A Secret Vow", star:4, type:"D", mat:"DSZ"},
  { text:"Adversarial", star:3, type:"Hu", mat:"H"},
  { text:"Along the Passing Shore", star:5, type:"N", mat:"NAC"},
  { text:"Amber", star:3, type:"P", mat:"PSZ"},
  { text:"An Instant Before A Gaze", star:5, type:"E", mat:"E"},
  { text:"Arrows", star:3, type:"Hu", mat:"H"},
  { text:"Baptism of Pure Thought", star:5, type:"Hu", mat:"H"},
  { text:"Before Dawn", star:5, type:"E", mat:"E"},
  { text:"Before the Tutorial Mission Start", star:4, type:"N", mat:"NGM"},
  { text:"Brighter Than the Sun", star:5, type:"D", mat:"DSZ"},
  { text:"But the Battle Isn't Over", star:5, type:"Ha", mat:"HRS"},
  { text:"Carve the Moon, Weave the Clouds", star:4, type:"Ha", mat:"HRS"},
  { text:"Chorus", star:3, type:"Ha", mat:"HRS"},
  { text:"Collapsing Sky", star:3, type:"D", mat:"DSZ"},
  { text:"Concert for Two", star:4, type:"P", mat:"PCSTP"},
  { text:"Cornucopia", star:3, type:"A", mat:"ABP"},
  { text:"Cruising in the Stellar Sea", star:5, type:"Hu", mat:"H"},
  { text:"Dance! Dance! Dance!", star:4, type:"Ha", mat:"HRS"},
  { text:"Darting Arrow", star:3, type:"Hu", mat:"H"},
  { text:"Data Bank", star:3, type:"E", mat:"E"},
  { text:"Day One of My New Life", star:4, type:"P", mat:"PSZ"},
  { text:"Defense", star:3, type:"P", mat:"PSZ"},
  { text:"Destiny's Threads Forewoven", star:4, type:"P", mat:"PSZ"},
  { text:"Dreamville Adventure", star:4, type:"Ha", mat:"HTR"},
  { text:"Earthly Escapade", star:5, type:"Ha", mat:"HTR"},
  { text:"Echoes of the Coffin", star:5, type:"A", mat:"ABP"},
  { text:"Eyes of the Prey", star:4, type:"N", mat:"NGM"},
  { text:"Fermata", star:4, type:"N", mat:"NGM"},
  { text:"Final Victor", star:4, type:"Hu", mat:"Hu"},
  { text:"Fine Fruit", star:3, type:"A", mat:"ABP"},
  { text:"Flames Afar", star:4, type:"D", mat:"DSW"},
  { text:"Geniuses' Repose", star:4, type:"E", mat:"E"},
  { text:"Good Night and Sleep Well", star:4, type:"N", mat:"NGM"},
  { text:"Hey, Over Here", star:4, type:"A", mat:"ABP"},
  { text:"Hidden Shadow", star:3, type:"N", mat:"NGM"},
  { text:"I Shall Be My Own Sword", star:5, type:"D", mat:"DSZ"},
  { text:"In the Name of the World", star:5, type:"N", mat:"NGM"},
  { text:"In the Night", star:5, type:"Hu", mat:"H"},
  { text:"Incessant Rain", star:5, type:"N", mat:"NGM"},
  { text:"Indelible Promise", star:4, type:"D", mat:"DSW"},
  { text:"Inherently Unjust Destiny", star:5, type:"P", mat:"PCSTP"},
  { text:"It's Showtime", star:4, type:"N", mat:"NAC"},
  { text:"Landau's Choice", star:4, type:"P", mat:"PSZ"},
  { text:"Loop", star:3, type:"N", mat:"NGM"},
  { text:"Make the World Clamor", star:4, type:"E", mat:"E"},
  { text:"Mediation", star:3, type:"Ha", mat:"HRS"},
  { text:"Memories of the Past", star:4, type:"Ha", mat:"HRS"},
  { text:"Meshing Cogs", star:3, type:"Ha", mat:"HRS"},
  { text:"Moment of Victory", star:5, type:"P", mat:"PSZ"},
  { text:"Multiplication", star:3, type:"A", mat:"ABP"},
  { text:"Mutual Demise", star:3, type:"D", mat:"DSZ"},
  { text:"Night of Fright", star:5, type:"A", mat:"ABP"},
  { text:"Night on the Milky Way", star:5, type:"E", mat:"E"},
  { text:"Nowhere to Run", star:4, type:"D", mat:"DSZ"},
  { text:"On the Fall of an Aeon", star:5, type:"D", mat:"DSZ"},
  { text:"Only Silence Remains", star:4, type:"Hu", mat:"H"},
  { text:"Passkey", star:3, type:"E", mat:"E"},
  { text:"Past and Future", star:4, type:"Ha", mat:"HRS"},
  { text:"Past Self in Mirror", star:5, type:"Ha", mat:"HRS"},
  { text:"Patience Is All You Need", star:5, type:"N", mat:"NGM"},
  { text:"Perfect Timing", star:4, type:"A", mat:"ABP"},
  { text:"Pioneering", star:3, type:"P", mat:"PSZ"},
  { text:"Planetary Rendezvous", star:4, type:"Ha", mat:"HRS"},
  { text:"Post-Op Conversation", star:4, type:"A", mat:"ABP"},
  { text:"Quid Pro Quo", star:4, type:"A", mat:"ABP"},
  { text:"Reforged Remembrance", star:5, type:"N", mat:"NAC"},
  { text:"Resolution Shines As Pearls of Sweat", star:4, type:"N", mat:"NGM"},
  { text:"Return to Darkness", star:4, type:"Hu", mat:"H"},
  { text:"River Flows In Spring", star:4, type:"Hu", mat:"H"},
  { text:"Sagacity", star:3, type:"E", mat:"E"},
  { text:"Shared Feeling", star:4, type:"A", mat:"ABP"},
  { text:"Shattered Home", star:3, type:"D", mat:"DSZ"},
  { text:"She Already Shut Her Eyes", star:5, type:"P", mat:"PSZ"},
  { text:"Sleep Like the Dead", star:5, type:"Hu", mat:"H"},
  { text:"Solitary Healing", star:5, type:"N", mat:"NGM"},
  { text:"Something Irreplaceable", star:5, type:"D", mat:"DSZ"},
  { text:"Subscribe for More!", star:4, type:"Hu", mat:"H"},
  { text:"Swordplay", star:4, type:"Hu", mat:"H"},
  { text:"Texture of Memories", star:5, type:"P", mat:"PSZ"},
  { text:"The Birth of the Self", star:4, type:"E", mat:"E"},
  { text:"The Day The Cosmos Fell", star:4, type:"E", mat:"E"},
  { text:"The Moles Welcome You", star:4, type:"D", mat:"DSZ"},
  { text:"The Seriousness of Breakfast", star:4, type:"E", mat:"E"},
  { text:"The Unreachable Side", star:5, type:"D", mat:"DSZ"},
  { text:"This is Me!", star:4, type:"P", mat:"PSZ"},
  { text:"Time Waits for No One", star:5, type:"A", mat:"ABP"},
  { text:"Today Is Another Peaceful Day", star:4, type:"E", mat:"E"},
  { text:"Trend of the Universal Market", star:4, type:"P", mat:"PSZ"},
  { text:"Under the Blue Sky", star:4, type:"D", mat:"DSZ"},
  { text:"Void", star:3, type:"N", mat:"NGM"},
  { text:"Warmth Shortens Cold Nights", star:4, type:"A", mat:"ABP"},
  { text:"We Are Wildfire", star:4, type:"P", mat:"PSZ"},
  { text:"We Will Meet Again", star:4, type:"N", mat:"NGM"},
  { text:"What is Real?", star:4, type:"A", mat:"ABP"},
  { text:"Woof! Walk Time!", star:4, type:"D", mat:"DSZ"},
  { text:"Worrisome, Blissful", star:5, type:"Hu", mat:"H"},
]

const traceLevels = [
  '1/1/1/1', 
  '1/2/2/2',
  '2/3/3/3',
  '3/4/4/4',
  '4/6/6/6',
  '5/8/8/8',
  '6/10/10/10',
];

const charactersMapped = characters.map((character, index) => (
  <DropdownItem key={character.text} value={character.text}>
    {character.text}
  </DropdownItem>
));

const lightConesMapped = lightCones.map((lightCone, index) => (
  <DropdownItem key={lightCone.text} value={lightCone.text}>
    {lightCone.text}
  </DropdownItem>
));

const tracesMapped = traceLevels.map((traceLevel, index) => (
  <DropdownItem key={traceLevel} value={index}>
    {traceLevel}
  </DropdownItem>
));

const echoCalculator = (traceLvl) => {
  return (() => {
    switch (traceLvl) {
      case '1/1/1/1': 
        return echoCalc[0]
      case '1/2/2/2':
        return echoCalc[1]
      case '2/3/3/3':
        return echoCalc[2]
      case '3/4/4/4':
        return echoCalc[3]
      case '4/6/6/6':
        return echoCalc[4]
      case '5/8/8/8':
        return echoCalc[5]
      case '6/10/10/10':
        return echoCalc[6]
      default:
        return null
    }
  })()
}

const getCookieValue = (cookieName) => {
  return +Cookies.get(cookieName) || 0; 
};

const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
const [selectedLightCone, setSelectedLightCone] = useState(lightCones[2]);
const [currentLevel, setCurrentLevel] = useState(1);
const [desiredLevel, setDesiredLevel] = useState(80);
const [currentLCLevel, setCurrentLCLevel] = useState(1);
const [desiredLCLevel, setDesiredLCLevel] = useState(80);
const [currentTraceLevel, setCurrentTraceLevel] = useState(traceLevels[0]);
const [desiredTraceLevel, setDesiredTraceLevel] = useState(traceLevels[5]);
const charLevelCalc = [0, 1, 6, 15, 25, 45, 86, 152, 290];
const lcLevelCalc = [0, 1, 5, 12, 22, 37, 61, 98, 166];
const stag5SCalc = [0, 0, 0, 0, 0, 3, 10, 30, 65];
const stag4SCalc = [0, 0, 0, 0, 0, 2, 7, 22, 50];
const lc5ST1Calc = [0, 0, 0, 0, 4, 4, 4, 4, 4];
const lc5ST2Calc = [0, 0, 0, 0, 0, 4, 12, 12, 12];
const lc5ST3Calc = [0, 0, 0, 0, 0, 0, 0, 5, 15];
const lc4ST1Calc = [0, 0, 0, 0, 3, 3, 3, 3, 3];
const lc4ST2Calc = [0, 0, 0, 0, 0, 3, 9, 9, 9];
const lc4ST3Calc = [0, 0, 0, 0, 0, 0, 0, 4, 12];
const lc3ST1Calc = [0, 0, 0, 0, 2, 2, 2, 2, 2];
const lc3ST2Calc = [0, 0, 0, 0, 0, 2, 6, 6, 6];
const lc3ST3Calc = [0, 0, 0, 0, 0, 0, 0, 3, 9];
const echoCalc = [0, 0, 1, 1, 2, 5, 12];

const [stag1Mat, setStag1Mat] = useState(getCookieValue('stag1Mat'));
const [stag2Mat, setStag2Mat] = useState(getCookieValue('stag2Mat'));
const [stag3Mat, setStag3Mat] = useState(getCookieValue('stag3Mat'));
const [stag4Mat, setStag4Mat] = useState(getCookieValue('stag4Mat'));
const [stag5Mat, setStag5Mat] = useState(getCookieValue('stag5Mat'));
const [stag6Mat, setStag6Mat] = useState(getCookieValue('stag6Mat'));
const [stag7Mat, setStag7Mat] = useState(getCookieValue('stag7Mat'));
const [stag8Mat, setStag8Mat] = useState(getCookieValue('stag8Mat'));
const [stag9Mat, setStag9Mat] = useState(getCookieValue('stag9Mat'));
const [stag10Mat, setStag10Mat] = useState(getCookieValue('stag10Mat'));
const [stag11Mat, setStag11Mat] = useState(getCookieValue('stag11Mat'));
const [stag12Mat, setStag12Mat] = useState(getCookieValue('stag12Mat'));
const [stag13Mat, setStag13Mat] = useState(getCookieValue('stag13Mat'));
const [stag14Mat, setStag14Mat] = useState(getCookieValue('stag14Mat'));
const [stag15Mat, setStag15Mat] = useState(getCookieValue('stag15Mat'));
const [stag16Mat, setStag16Mat] = useState(getCookieValue('stag16Mat'));
const [stag17Mat, setStag17Mat] = useState(getCookieValue('stag17Mat'));
const [DMat, setDMat] = useState(getCookieValue('DMat'));
const [EFMat, setEFMat] = useState(getCookieValue('EFMat'));
const [DSMat, setDSMat] = useState(getCookieValue('DSMat'));
const [BMat, setBMat] = useState(getCookieValue('BMat'));
const [gBookMat, setGBookMat] = useState(getCookieValue('gBookMat'));
const [bBookMat, setBBookMat] = useState(getCookieValue('bBookMat'));
const [pBookMat, setPBookMat] = useState(getCookieValue('pBookMat'));
const [gFilmMat, setGFilmMat] = useState(getCookieValue('gFilmMat'));
const [bFilmMat, setBFilmMat] = useState(getCookieValue('bFilmMat'));
const [pFilmMat, setPFilmMat] = useState(getCookieValue('pFilmMat'));
const [gABPMat, setgABPMat] = useState(getCookieValue('gABPMat'));
const [bABPMat, setbABPMat] = useState(getCookieValue('bABPMat'));
const [pABPMat, setpABPMat] = useState(getCookieValue('pABPMat'));
const [gAFGMat, setgAFGMat] = useState(getCookieValue('gAFGMat'));
const [bAFGMat, setbAFGMat] = useState(getCookieValue('bAFGMat'));
const [pAFGMat, setpAFGMat] = useState(getCookieValue('pAFGMat'));
const [gDSWMat, setgDSWMat] = useState(getCookieValue('gDSWMat'));
const [bDSWMat, setbDSWMat] = useState(getCookieValue('bDSWMat'));
const [pDSWMat, setpDSWMat] = useState(getCookieValue('gDSWMat'));
const [gDSZMat, setgDSZMat] = useState(getCookieValue('gDSZMat'));
const [bDSZMat, setbDSZMat] = useState(getCookieValue('bDSZMat'));
const [pDSZMat, setpDSZMat] = useState(getCookieValue('pDSZMat'));
const [gEMat, setgEMat] = useState(getCookieValue('gEMat'));
const [bEMat, setbEMat] = useState(getCookieValue('bEMat'));
const [pEMat, setpEMat] = useState(getCookieValue('pEMat'));
const [gHRSMat, setgHRSMat] = useState(getCookieValue('gHRSMat'));
const [bHRSMat, setbHRSMat] = useState(getCookieValue('bHRSMat'));
const [pHRSMat, setpHRSMat] = useState(getCookieValue('pHRSMat'));
const [gHTRMat, setgHTRMat] = useState(getCookieValue('gHTRMat'));
const [bHTRMat, setbHTRMat] = useState(getCookieValue('bHTRMat'));
const [pHTRMat, setpHTRMat] = useState(getCookieValue('pHTRMat'));
const [gNACMat, setgNACMat] = useState(getCookieValue('gNACMat'));
const [bNACMat, setbNACMat] = useState(getCookieValue('bNACMat'));
const [pNACMat, setpNACMat] = useState(getCookieValue('pNACMat'));
const [gNGMMat, setgNGMMat] = useState(getCookieValue('gNGMMat'));
const [bNGMMat, setbNGMMat] = useState(getCookieValue('bNGMMat'));
const [pNGMMat, setpNGMMat] = useState(getCookieValue('pNGMMat'));
const [gPSZMat, setgPSZMat] = useState(getCookieValue('gPSZMat'));
const [bPSZMat, setbPSZMat] = useState(getCookieValue('bPSZMat'));
const [pPSZMat, setpPSZMat] = useState(getCookieValue('pPSZMat'));
const [gPCSTPMat, setgPCSTPMat] = useState(getCookieValue('gPCSTPMat'));
const [bPCSTPMat, setbPCSTPMat] = useState(getCookieValue('bPCSTPMat'));
const [pPCSTPMat, setpPCSTPMat] = useState(getCookieValue('pPCSTPMat'));
const [gHMat, setgHMat] = useState(getCookieValue('gHMat'));
const [bHMat, setbHMat] = useState(getCookieValue('bHMat'));
const [pHMat, setpHMat] = useState(getCookieValue('pHMat'));

const handleCurrentLevelChange = (event) => {
  setCurrentLevel(event.target.value);
};

const handleDesiredLevelChange = (event) => {
  const newDesiredLevel = event.target.value;
  if (newDesiredLevel < currentLevel) {
    setCurrentLevel(newDesiredLevel);
  }
  setDesiredLevel(newDesiredLevel);
}

const handleCurrentLCLevelChange = (event) => {
  setCurrentLCLevel(event.target.value);
};

const handleDesiredLCLevelChange = (event) => {
  const newDesiredLCLevel = event.target.value;
  if (newDesiredLCLevel < currentLCLevel) {
    setCurrentLCLevel(newDesiredLCLevel);
  }
  setDesiredLCLevel(newDesiredLCLevel);
}

const filteredLightCones =
    selectedCharacter === null
      ? []
      : lightCones
        .filter((lc) => lc.type === selectedCharacter.type)
        .map((lc, index) => (
          <DropdownItem key={lc.text} value={lc.text}>
            {lc.text}
          </DropdownItem>
        ))
        .filter((lc) => lc !== null); // Filter out null options

  return (
    <>
      <div>
        <p>{selectedCharacter ? <Image src={selectedCharacter.image} alt="pBook" className='border-2 border-solid object-center w-80 h-auto mx-12'/> : ""}</p>
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="bordered" 
              className="capitalize flex-row items-center bg-dark text-light p-2.5 px-4 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
            >
              {selectedCharacter ? selectedCharacter.text : "Select character"}
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            style={{
              maxHeight:'350px',
              overflow:'scroll'
            }}
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedCharacter ? [selectedCharacter.text] : []}
            onSelectionChange={([key]) => {
              const character = characters.find((c) => c.text === key);
              setSelectedCharacter(character);
              setSelectedLightCone(filteredLightCones[0]);
            }}
            className='bg-dark text-light p-3'
          >
            {charactersMapped}
          </DropdownMenu>
        </Dropdown>
        <br/>
        <Dropdown>
          <DropdownTrigger>
            <Button 
              variant="bordered" 
              className="capitalize flex-row items-center bg-dark text-light p-2.5 px-4 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
            >
              {selectedLightCone ? selectedLightCone.text : "Select light cone"}
            </Button>
          </DropdownTrigger>
          <DropdownMenu 
            style={{
              maxHeight:'200px',
              overflow:'scroll'
            }}
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedLightCone ? [selectedLightCone.text] : []}
            onSelectionChange={([key]) => {
              const lc = lightCones.find((c) => c.text === key);
              setSelectedLightCone(lc);
            }}
            className='bg-dark text-light p-3'
          >
            {filteredLightCones}
          </DropdownMenu>
        </Dropdown>
        <br/>
        <div className='border-2'>
          Current Char Level: <input
            type="number"
            min='1'
            max='80'
            value={currentLevel}
            onChange={handleCurrentLevelChange}
            className='w-12 justify-center text-center border-2'
          />
          <br/>
          Desired Char Level: <input
            type="number"
            min='1'
            max='80'
            value={desiredLevel}
            onChange={handleDesiredLevelChange}
            className='w-12 justify-center text-center border-2'
          />
        </div>
        <div className='border-2'>
          Current Trace Level: 
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="bordered" 
                className="capitalize flex-row items-center text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
              >
                {currentTraceLevel}
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              style={{
                maxHeight:'200px',
                overflow:'scroll'
              }}
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={currentTraceLevel}
              onSelectionChange={([key]) => {
                const tLvl = traceLevels.find((c) => c === key);
                setCurrentTraceLevel(tLvl);
              }}
              className='bg-dark text-light p-3'
            >
              {tracesMapped}
            </DropdownMenu>
          </Dropdown>
          <br/>
          Desired Trace Level: 
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="bordered" 
                className="capitalize flex-row items-center text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
              >
                {desiredTraceLevel}
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              style={{
                maxHeight:'200px',
                overflow:'scroll'
              }}
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={desiredTraceLevel}
              onSelectionChange={([key]) => {
                const tLvl = traceLevels.find((c) => c === key);
                setDesiredTraceLevel(tLvl);
              }}
              className='bg-dark text-light p-3'
            >
              {tracesMapped}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className='border-2'>
          Current Light Cone Level: <input
            type="number"
            min='1'
            max='80'
            value={currentLCLevel}
            onChange={handleCurrentLCLevelChange}
            className='w-12 justify-center text-center border-2'
          />
          <br/>
          Desired Light Cone Level: <input
            type="number"
            min='1'
            max='80'
            value={desiredLCLevel}
            onChange={handleDesiredLCLevelChange}
            className='w-12 justify-center text-center border-2'
          />
        </div>
      </div>
      <table className="">
        <thead className='bg-dark text-light'>
          <th>
            Character Experience Books
          </th>
          <th className='w-24'/>
          <th/>
        </thead>
        <tbody className='border'>
          <tr>
            <td className='text-wrap'>
              Needed:
            </td>
            <td>
              {
                currentLevel == 1
                ? charLevelCalc[desiredLevel / 10]
                : charLevelCalc[desiredLevel / 10] - charLevelCalc[currentLevel / 10]
              }
            </td>
            <td/>
          </tr>
          <tr>
            <td>
              Have:
            </td>
            <td>
              {Math.floor(pBookMat + (bBookMat / 3) + (gBookMat / 9))}
            </td>
            <td>
              <Image src={pBook} alt="pBook" className='object-center w-16 h-auto'/>
            </td>
          </tr>
          <tr>
            <td>
              Updated Needed:
            </td>
            <td>

            </td>
            <td/>
          </tr>
        </tbody>
        <thead className='bg-dark text-light'>
          <th>
            Stagnant Shadow Materials
          </th>
          <th/>
          <th/>
        </thead>
        <tbody className='border'>
          <tr>
            <td>
              Needed:
            </td>
            <td>
              {
                selectedCharacter.star == 5
                ? currentLevel == 1
                  ? stag5SCalc[desiredLevel / 10]
                  : stag5SCalc[desiredLevel / 10] - stag5SCalc[currentLevel / 10]
                : currentLevel == 1
                  ? stag4SCalc[desiredLevel / 10]
                  : stag4SCalc[desiredLevel / 10] - stag4SCalc[currentLevel / 10]
              }
            </td>
            <td/>
          </tr>
          <tr>
            <td>
              Have:
            </td>
            <td>

            </td>
            <td>
              {
                (() => {
                  switch (selectedCharacter.stag) {
                    case 1:
                      return <Image src={stag1} alt="pBook" className='object-center w-16 h-auto'/>
                    case 2:
                      return <Image src={stag2} alt="pBook" className='object-center w-16 h-auto'/>
                    case 3:
                      return <Image src={stag3} alt="pBook" className='object-center w-16 h-auto'/>
                    case 4:
                      return <Image src={stag4} alt="pBook" className='object-center w-16 h-auto'/>
                    case 5:
                      return <Image src={stag5} alt="pBook" className='object-center w-16 h-auto'/>
                    case 6:
                      return <Image src={stag6} alt="pBook" className='object-center w-16 h-auto'/>
                    case 7:
                      return <Image src={stag7} alt="pBook" className='object-center w-16 h-auto'/>
                    case 8:
                      return <Image src={stag8} alt="pBook" className='object-center w-16 h-auto'/>
                    case 9:
                      return <Image src={stag9} alt="pBook" className='object-center w-16 h-auto'/>
                    case 10:
                      return <Image src={stag10} alt="pBook" className='object-center w-16 h-auto'/>
                    case 11:
                      return <Image src={stag11} alt="pBook" className='object-center w-16 h-auto'/>
                    case 12:
                      return <Image src={stag12} alt="pBook" className='object-center w-16 h-auto'/>
                    case 13:
                      return <Image src={stag13} alt="pBook" className='object-center w-16 h-auto'/>
                    case 14:
                      return <Image src={stag14} alt="pBook" className='object-center w-16 h-auto'/>
                    case 15:
                      return <Image src={stag15} alt="pBook" className='object-center w-16 h-auto'/>
                    case 16:
                      return <Image src={stag16} alt="pBook" className='object-center w-16 h-auto'/>
                    case 17:
                      return <Image src={stag17} alt="pBook" className='object-center w-16 h-auto'/>
                    default:
                      return null
                  }
                })()
              }
            </td>
          </tr>
          <tr>
            <td>
              Updated Needed:
            </td>
            <td>

            </td>
            <td/>
          </tr>
        </tbody>
        <thead className='bg-dark text-light'>
          <th>
            Light Cone Experience Films
          </th>
          <th/>
          <th/>
        </thead>
        <tbody className='border'>
          <tr>
            <td>
              Needed:
            </td>
            <td>
              {
                currentLCLevel == 1
                ? lcLevelCalc[desiredLCLevel / 10]
                : lcLevelCalc[desiredLCLevel / 10] - lcLevelCalc[currentLCLevel / 10]
              }
            </td>
            <td/>
          </tr>
          <tr>
            <td>
              Have:
            </td>
            <td>

            </td>
            <td>
              <Image src={pFilm} alt="pBook" className='object-center w-16 h-auto'/>
            </td>
          </tr>
          <tr>
            <td>
              Updated Needed:
            </td>
            <td>

            </td>
            <td/>
          </tr>
        </tbody>
        <thead className='bg-dark text-light'>
          <th>
            Light Cone Domain Materials
          </th>
          <th/>
          <th/>
        </thead>
        <tbody className='border'>
          <tr>
            <td>
              Tier 1 (Green) Needed:
            </td>
            <td>
              {
                selectedLightCone.star == 5
                ? currentLCLevel == 1
                  ? lc5ST1Calc[desiredLCLevel / 10]
                  : lc5ST1Calc[desiredLCLevel / 10] - lc5ST1Calc[currentLCLevel / 10]
                : selectedLightCone.star == 4
                  ? currentLCLevel == 1
                    ? lc4ST1Calc[desiredLCLevel / 10]
                    : lc4ST1Calc[desiredLCLevel / 10] - lc4ST1Calc[currentLCLevel / 10]
                  : currentLCLevel == 1
                    ? lc3ST1Calc[desiredLCLevel / 10]
                    : lc3ST1Calc[desiredLCLevel / 10] - lc3ST1Calc[currentLCLevel / 10]
              }
            </td>
            <td/>
          </tr>
          <tr>
            <td>
              Have:
            </td>
            <td>

            </td>
            <td>
              {
                (() => {
                  switch (selectedLightCone.mat) {
                    case 'ABP':
                      return <Image src={gABP} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'AFG':
                      return <Image src={gAFG} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'DSW':
                      return <Image src={gDSW} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'DSZ':
                      return <Image src={gDSZ} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'E':
                      return <Image src={gE} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'HRS':
                      return <Image src={gHRS} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'HTR':
                      return <Image src={gHTR} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'NAC':
                      return <Image src={gNAC} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'NGM':
                      return <Image src={gNGM} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'PSZ':
                      return <Image src={gPSZ} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'PCSTP':
                      return <Image src={gPCSTP} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'H':
                      return <Image src={gH} alt="pBook" className='object-center w-16 h-auto'/>
                    default:
                      return null
                  }
                })()
              }
            </td>
          </tr>
          <tr>
            <td>
              Updated Needed:
            </td>
            <td>

            </td>
            <td/>
          </tr>
        </tbody>
        <tbody className='border'>
          <tr>
            <td>
              Tier 2 (Blue) Needed:
            </td>
            <td>
              {
                selectedLightCone.star == 5
                ? currentLCLevel == 1
                  ? lc5ST2Calc[desiredLCLevel / 10]
                  : lc5ST2Calc[desiredLCLevel / 10] - lc5ST2Calc[currentLCLevel / 10]
                : selectedLightCone.star == 4
                  ? currentLCLevel == 1
                    ? lc4ST2Calc[desiredLCLevel / 10]
                    : lc4ST2Calc[desiredLCLevel / 10] - lc4ST2Calc[currentLCLevel / 10]
                  : currentLCLevel == 1
                    ? lc3ST2Calc[desiredLCLevel / 10]
                    : lc3ST2Calc[desiredLCLevel / 10] - lc3ST2Calc[currentLCLevel / 10]
              }
            </td>
            <td/>
          </tr>
          <tr>
            <td>
              Have:
            </td>
            <td>

            </td>
            <td>
              {
                (() => {
                    switch (selectedLightCone.mat) {
                      case 'ABP':
                        return <Image src={bABP} alt="pBook" className='object-center w-16 h-auto'/>
                      case 'AFG':
                        return <Image src={bAFG} alt="pBook" className='object-center w-16 h-auto'/>
                      case 'DSW':
                        return <Image src={bDSW} alt="pBook" className='object-center w-16 h-auto'/>
                      case 'DSZ':
                        return <Image src={bDSZ} alt="pBook" className='object-center w-16 h-auto'/>
                      case 'E':
                        return <Image src={bE} alt="pBook" className='object-center w-16 h-auto'/>
                      case 'HRS':
                        return <Image src={bHRS} alt="pBook" className='object-center w-16 h-auto'/>
                      case 'HTR':
                        return <Image src={bHTR} alt="pBook" className='object-center w-16 h-auto'/>
                      case 'NAC':
                        return <Image src={bNAC} alt="pBook" className='object-center w-16 h-auto'/>
                      case 'NGM':
                        return <Image src={bNGM} alt="pBook" className='object-center w-16 h-auto'/>
                      case 'PSZ':
                        return <Image src={bPSZ} alt="pBook" className='object-center w-16 h-auto'/>
                      case 'PCSTP':
                        return <Image src={bPCSTP} alt="pBook" className='object-center w-16 h-auto'/>
                      case 'H':
                        return <Image src={bH} alt="pBook" className='object-center w-16 h-auto'/>
                      default:
                        return null
                    }
                  })()
                }
            </td>
          </tr>
          <tr>
            <td>
              Updated Needed:
            </td>
            <td>

            </td>
            <td/>
          </tr>
        </tbody>
        <tbody className='border'>
          <tr>
            <td>
              Tier 3 (Purple) Needed:
            </td>
            <td>
              {
                selectedLightCone.star == 5
                ? currentLCLevel == 1
                  ? lc5ST3Calc[desiredLCLevel / 10]
                  : lc5ST3Calc[desiredLCLevel / 10] - lc5ST3Calc[currentLCLevel / 10]
                : selectedLightCone.star == 4
                  ? currentLCLevel == 1
                    ? lc4ST3Calc[desiredLCLevel / 10]
                    : lc4ST3Calc[desiredLCLevel / 10] - lc4ST3Calc[currentLCLevel / 10]
                  : currentLCLevel == 1
                    ? lc3ST3Calc[desiredLCLevel / 10]
                    : lc3ST3Calc[desiredLCLevel / 10] - lc3ST3Calc[currentLCLevel / 10]
              }
            </td>
            <td/>
          </tr>
          <tr>
            <td>
              Have:
            </td>
            <td>

            </td>
            <td>
              {
                (() => {
                  switch (selectedLightCone.mat) {
                    case 'ABP':
                      return <Image src={pABP} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'AFG':
                      return <Image src={pAFG} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'DSW':
                      return <Image src={pDSW} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'DSZ':
                      return <Image src={pDSZ} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'E':
                      return <Image src={pE} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'HRS':
                      return <Image src={pHRS} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'HTR':
                      return <Image src={pHTR} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'NAC':
                      return <Image src={pNAC} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'NGM':
                      return <Image src={pNGM} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'PSZ':
                      return <Image src={pPSZ} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'PCSTP':
                      return <Image src={pPCSTP} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'H':
                      return <Image src={pH} alt="pBook" className='object-center w-16 h-auto'/>
                    default:
                      return null
                  }
                })()
              }
            </td>
          </tr>
          <tr>
            <td>
              Updated Needed:
            </td>
            <td>

            </td>
            <td/>
          </tr>
        </tbody>
        <thead className='bg-dark text-light'>
          <th>
            Echo of War Materials
          </th>
          <th/>
          <th/>
        </thead>
        <tbody className='border'>
          <tr>
            <td>
              Needed:
            </td>
            <td>
                {
                  echoCalculator(desiredTraceLevel) - echoCalculator(currentTraceLevel)
                } 
            </td>
            <td/>
          </tr>
          <tr>
            <td>
              Have:
            </td>
            <td>

            </td>
            <td>
              {
                (() => {
                  switch (selectedCharacter.boss) {
                    case 'D':
                      return <Image src={destroyer} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'EF':
                      return <Image src={eternal} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'DS':
                      return <Image src={divineseed} alt="pBook" className='object-center w-16 h-auto'/>
                    case 'B':
                      return <Image src={borehole} alt="pBook" className='object-center w-16 h-auto'/>
                    default:
                      return null
                  }
                })()
              }
            </td>
          </tr>
          <tr>
            <td>
              Updated Needed:
            </td>
            <td>

            </td>
            <td/>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default FullDropdown