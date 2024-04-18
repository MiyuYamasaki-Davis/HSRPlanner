import React, { useState } from "react";
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
import Image from "next/image";
import Link from "next/link";
import { NextResponse, NextRequest } from "next/server";
import cookie from 'js-cookie';
import Cookies from 'js-cookie';

const InventoryCharts = () => {
    const getCookieValue = (cookieName) => {
        return +Cookies.get(cookieName) || 0;  
    };
    const setCookieValue = (setter, cookieName, value) => {
        Cookies.set(cookieName, String(value), { expires: 365 });      
        setter(value);
    };

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

    return (
        <>
            <div>
                <br/>
                <table className='w-full border-collapse text-center justify-center'>
                    <thead>
                        <tr className='text-lg text-bold bg-dark'>
                            <th className='p-5 justify-left items-center bg-dark text-light'>
                                EXP Materials
                            </th>
                            <th className='p-4 bg-dark text-light'>
                                Tier 1: Green
                            </th>
                            <th className='bg-dark text-light'/>
                            <th className='p-4 bg-dark text-light'>
                                Tier 2: Blue
                            </th>
                            <th className='bg-dark text-light'/>
                            <th className='p-4 bg-dark text-light'>
                                Tier 3: Purple
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='w-full border'>
                            <th className='p-5 justify-center items-center bg-dark text-light'>
                                Character EXP Books
                            </th>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={gBook} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={gBookMat} onChange={(event) => setCookieValue(setGBookMat, 'gBookMat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={bBook} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={bBookMat} onChange={(event) => setCookieValue(setBBookMat, 'bBookMat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={pBook} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={pBookMat} onChange={(event) => setCookieValue(setPBookMat, 'pBookMat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                        <tr className='w-full border'>
                            <th className='p-5 justify-center items-center bg-dark text-light'>
                                Light Cone EXP Films
                            </th>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={gFilm} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={gFilmMat} onChange={(event) => setCookieValue(setGFilmMat, 'gFilmMat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={bFilm} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={bFilmMat} onChange={(event) => setCookieValue(setBFilmMat, 'bFilmMat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={pFilm} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={pFilmMat} onChange={(event) => setCookieValue(setPFilmMat, 'pFilmMat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br/>
            <div>
                <table className="w-full border-collapse text-center justify-center">
                    <thead>
                        <tr className='text-lg text-bold bg-dark'>
                            <th className='p-5 flex justify-left items-center bg-dark text-light'>
                                Stagnant Shadow
                            </th>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='w-full border'>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag10} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Abomination: <input type="number" min='0' value={stag10Mat} onChange={(event) => setCookieValue(setStag10Mat, 'stag10Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag5} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Blaze: <input type="number" min='0' value={stag5Mat} onChange={(event) => setCookieValue(setStag5Mat, 'stag5Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag1} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Celestial: <input type="number" min='0' value={stag1Mat} onChange={(event) => setCookieValue(setStag1Mat, 'stag1Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag13} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Doom: <input type="number" min='0' value={stag13Mat} onChange={(event) => setCookieValue(setStag13Mat, 'stag13Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag9} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Fulmination: <input type="number" min='0' value={stag9Mat} onChange={(event) => setCookieValue(setStag9Mat, 'stag9Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag14} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Gust: <input type="number" min='0' value={stag14Mat} onChange={(event) => setCookieValue(setStag14Mat, 'stag14Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag6} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Icicle: <input type="number" min='0' value={stag6Mat} onChange={(event) => setCookieValue(setStag6Mat, 'stag6Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag7} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Mirage: <input type="number" min='0' value={stag7Mat} onChange={(event) => setCookieValue(setStag7Mat, 'stag7Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                        <tr className='w-full border'>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag4} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Nectar: <input type="number" min='0' value={stag4Mat} onChange={(event) => setCookieValue(setStag4Mat, 'stag4Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag11} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Perdition: <input type="number" min='0' value={stag11Mat} onChange={(event) => setCookieValue(setStag11Mat, 'stag11Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag15} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Puppetry: <input type="number" min='0' value={stag15Mat} onChange={(event) => setCookieValue(setStag15Mat, 'stag15Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag16} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Quanta: <input type="number" min='0' value={stag16Mat} onChange={(event) => setCookieValue(setStag16Mat, 'stag16Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag8} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Rime: <input type="number" min='0' value={stag8Mat} onChange={(event) => setCookieValue(setStag8Mat, 'stag8Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag3} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Roast: <input type="number" min='0' value={stag3Mat} onChange={(event) => setCookieValue(setStag3Mat, 'stag3Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag12} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Scorch: <input type="number" min='0' value={stag12Mat} onChange={(event) => setCookieValue(setStag12Mat, 'stag12Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag2} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Spike: <input type="number" min='0' value={stag2Mat} onChange={(event) => setCookieValue(setStag2Mat, 'stag2Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                        <tr className='w-full border'>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={stag17} alt="pBook" className='object-center w-16 h-auto'/>
                                Shape of Ire: <input type="number" min='0' value={stag17Mat} onChange={(event) => setCookieValue(setStag17Mat, 'stag17Mat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td/>
                            <td/>
                            <td/>
                            <td/>
                            <td/>
                            <td/>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <table className='w-full border-collapse text-center justify-center'>
                    <thead>
                        <tr className='text-lg text-bold bg-dark'>
                            <th className='p-5 flex justify-left items-center bg-dark text-light'>
                                Echo of War
                            </th>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='w-full border'>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={destroyer} alt="pBook" className='object-center w-16 h-auto'/>
                                Destroyer: <input type="number" min='0' value={DMat} onChange={(event) => setCookieValue(setDMat, 'DMat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={eternal} alt="pBook" className='object-center w-16 h-auto'/>
                                Eternal Freeze: <input type="number" min='0' value={EFMat} onChange={(event) => setCookieValue(setEFMat, 'EFMat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={divineseed} alt="pBook" className='object-center w-16 h-auto'/>
                                Divine Seed: <input type="number" min='0' value={DSMat} onChange={(event) => setCookieValue(setDSMat, 'DSMat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={borehole} alt="pBook" className='object-center w-16 h-auto'/>
                                Borehole: <input type="number" min='0' value={BMat} onChange={(event) => setCookieValue(setBMat, 'BMat', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <table className='w-full border-collapse text-center justify-center'>
                    <thead>
                        <tr className='text-lg text-bold bg-dark'>
                            <th className='p-5 justify-left items-center bg-dark text-light'>
                                Domain Materials
                            </th>
                            <th className='p-4 bg-dark text-light'>
                                Tier 1: Green
                            </th>
                            <th className='bg-dark text-light'/>
                            <th className='p-4 bg-dark text-light'>
                                Tier 2: Blue
                            </th>
                            <th className='bg-dark text-light'/>
                            <th className='p-4 bg-dark text-light'>
                                Tier 3: Purple
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='w-full border'>
                            <th className='p-5 justify-center items-center bg-dark text-light'>
                                Bud of Abundance: Backwater Pass
                            </th>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={gABP} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={gABPMat} onChange={(event) => setCookieValue(setgABPMat, 'gABP', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={bABP} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={bABPMat} onChange={(event) => setCookieValue(setbABPMat, 'bABP', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={pABP} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={pABPMat} onChange={(event) => setCookieValue(setpABPMat, 'pABP', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                        <tr className='w-full border'>
                            <th className='p-5 justify-center items-center bg-dark text-light'>
                                Bud of Abundance: Fyxestroll Garden
                            </th>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={gAFG} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={gAFGMat} onChange={(event) => setCookieValue(setgAFGMat, 'gAFG', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={bAFG} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={bAFGMat} onChange={(event) => setCookieValue(setbAFGMat, 'bAFG', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={pAFG} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={pAFGMat} onChange={(event) => setCookieValue(setpAFGMat, 'pAFG', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                        <tr className='w-full border'>
                            <th className='p-5 justify-center items-center bg-dark text-light'>
                                Bud of Destruction: Scalegorge Waterscale
                            </th>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={gDSW} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={gDSWMat} onChange={(event) => setCookieValue(setgDSWMat, 'gDSW', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={bDSW} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={bDSWMat} onChange={(event) => setCookieValue(setbDSWMat, 'bDSW', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={pDSW} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={pDSWMat} onChange={(event) => setCookieValue(setpDSWMat, 'pDSW', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                        <tr className='w-full border'>
                            <th className='p-5 justify-center items-center bg-dark text-light'>
                                Bud of Destruction: Storage Zone
                            </th>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={gDSZ} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={gDSZMat} onChange={(event) => setCookieValue(setgDSZMat, 'gDSZ', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={bDSZ} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={bDSZMat} onChange={(event) => setCookieValue(setbDSZMat, 'bDSZ', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={pDSZ} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={pDSZMat} onChange={(event) => setCookieValue(setpDSZMat, 'pDSZ', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                        <tr className='w-full border'>
                            <th className='p-5 justify-center items-center bg-dark text-light'>
                                Bud of Erudition
                            </th>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={gE} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={gEMat} onChange={(event) => setCookieValue(setgEMat, 'gE', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={bE} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={bEMat} onChange={(event) => setCookieValue(setbEMat, 'bE', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={pE} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={pEMat} onChange={(event) => setCookieValue(setpEMat, 'pE', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                        <tr className='w-full border'>
                            <th className='p-5 justify-center items-center bg-dark text-light'>
                                Bud of Harmony: Robot Settlement
                            </th>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={gHRS} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={gHRSMat} onChange={(event) => setCookieValue(setgHRSMat, 'gHRS', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={bHRS} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={bHRSMat} onChange={(event) => setCookieValue(setbHRSMat, 'bHRS', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={pHRS} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={pHRSMat} onChange={(event) => setCookieValue(setpHRSMat, 'pHRS', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                        <tr className='w-full border'>
                            <th className='p-5 justify-center items-center bg-dark text-light'>
                                Bud of Harmony: The Reverie
                            </th>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={gHTR} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={gHTRMat} onChange={(event) => setCookieValue(setgHTRMat, 'gHTR', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={bHTR} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={bHTRMat} onChange={(event) => setCookieValue(setbHTRMat, 'bHTR', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={pHTR} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={pHTRMat} onChange={(event) => setCookieValue(setpHTRMat, 'pHTR', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                        <tr className='w-full border'>
                            <th className='p-5 justify-center items-center bg-dark text-light'>
                                Bud of Nihility: Alchemy Commission
                            </th>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={gNAC} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={gNACMat} onChange={(event) => setCookieValue(setgNACMat, 'gNAC', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={bNAC} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={bNACMat} onChange={(event) => setCookieValue(setbNACMat, 'bNAC', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={pNAC} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={pNACMat} onChange={(event) => setCookieValue(setpNACMat, 'pNAC', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                        <tr className='w-full border'>
                            <th className='p-5 justify-center items-center bg-dark text-light'>
                                Bud of Nihility: Great Mine
                            </th>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={gNGM} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={gNGMMat} onChange={(event) => setCookieValue(setgNGMMat, 'gNGM', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={bNGM} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={bNGMMat} onChange={(event) => setCookieValue(setbNGMMat, 'bNGM', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={pNGM} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={pNGMMat} onChange={(event) => setCookieValue(setpNGMMat, 'pNGM', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                        <tr className='w-full border'>
                            <th className='p-5 justify-center items-center bg-dark text-light'>
                                Bud of Preservation: Storage Zone
                            </th>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={gPSZ} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={gPSZMat} onChange={(event) => setCookieValue(setgPSZMat, 'gPSZ', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={bPSZ} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={bPSZMat} onChange={(event) => setCookieValue(setbPSZMat, 'bPSZ', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={pPSZ} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={pPSZMat} onChange={(event) => setCookieValue(setpPSZMat, 'pPSZ', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                        <tr className='w-full border'>
                            <th className='p-5 justify-center items-center bg-dark text-light'>
                                Bud of Preservation: Clock Studios Theme Park
                            </th>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={gPCSTP} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={gPCSTPMat} onChange={(event) => setCookieValue(setgPCSTPMat, 'gPCSTP', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={bPCSTP} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={bPCSTPMat} onChange={(event) => setCookieValue(setbPCSTPMat, 'bPCSTP', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={pPCSTP} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={pPCSTPMat} onChange={(event) => setCookieValue(setpPCSTPMat, 'pPCSTP', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                        <tr className='w-full border'>
                            <th className='p-5 justify-center items-center bg-dark text-light'>
                                Bud of the Hunt
                            </th>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={gH} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={gHMat} onChange={(event) => setCookieValue(setgHMat, 'gH', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={bH} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={bHMat} onChange={(event) => setCookieValue(setbHMat, 'bH', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                            <td/>
                            <td className='border p-4 flex items-center justify-center'>
                                <Image src={pH} alt="pBook" className='object-center w-16 h-auto'/>
                                <input type="number" min='0' value={pHMat} onChange={(event) => setCookieValue(setpHMat, 'pH', event.target.value)} className='w-12 justify-center text-center border-2'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <br/>
            <div>
                <button 
                    onClick={setCookie}
                    className='w-full items-center p-4 px-3 bg-dark text-light font-bold text-lg rounded-lg'
                >
                    Save
                </button>
            </div> */}
        </>
    )
}

export default InventoryCharts