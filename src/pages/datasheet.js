import React from 'react'
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
import Image from 'next/image';

const datasheet = () => {
    return (
        <>
            <h1 className="flex items-center text-center justify-center text-4xl p-8 text-semibold mx-4">
                Character Materials
            </h1>
            <table className="w-full border-collapse text-center">
                <thead>
                    <tr className='text-lg text-bold sticky top-0'>
                        <th className="p-5 flex justify-center items-center bg-dark text-light">
                            Character Level
                        </th>
                        <th className="border p-4 bg-dark text-light">1-10</th>
                        <th className="border p-4 bg-dark text-light">1-20</th>
                        <th className="border p-4 bg-dark text-light">1-30</th>
                        <th className="border p-4 bg-dark text-light">1-40</th>
                        <th className="border p-4 bg-dark text-light">1-50</th>
                        <th className="border p-4 bg-dark text-light">1-60</th>
                        <th className="border p-4 bg-dark text-light">1-70</th>
                        <th className="border p-4 bg-dark text-light">1-80</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="border p-4 flex justify-center items-center">
                            <Image src={pBook} alt="pBook" className='object-center w-24 h-auto'/>
                        </th>
                        <td className="border p-4">1</td>
                        <td className="border p-4">6</td>
                        <td className="border p-4">15</td> 
                        <td className="border p-4">25</td>
                        <td className="border p-4">45</td>
                        <td className="border p-4">86</td>
                        <td className="border p-4">152</td>
                        <td className="border p-4">290</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th className="border p-4 flex flex-wrap justify-center items-center inline-block overflow-wrap">
                            <Image src={stag1} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag2} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag3} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag4} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag5} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag6} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag7} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag8} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag9} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag10} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag11} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag12} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag13} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag14} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag15} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag16} alt="pBook" className='object-center w-16 h-auto'/>
                            <Image src={stag17} alt="pBook" className='object-center w-16 h-auto'/>
                        </th>
                        <td className="border p-4 w-24">5 <span>&#9733;</span>: 0<br/> 4 <span>&#9733;</span>: 0</td>
                        <td className="border p-4 w-24">5 <span>&#9733;</span>: 0<br/> 4 <span>&#9733;</span>: 0</td>
                        <td className="border p-4 w-24">5 <span>&#9733;</span>: 0<br/> 4 <span>&#9733;</span>: 0</td>
                        <td className="border p-4 w-24">5 <span>&#9733;</span>: 0<br/> 4 <span>&#9733;</span>: 0</td>
                        <td className="border p-4 w-24">5 <span>&#9733;</span>: 3<br/> 4 <span>&#9733;</span>: 2</td>
                        <td className="border p-4 w-24">5 <span>&#9733;</span>: 10<br/> 4 <span>&#9733;</span>: 7</td>
                        <td className="border p-4 w-24">5 <span>&#9733;</span>: 30<br/> 4 <span>&#9733;</span>: 22</td>
                        <td className="border p-4 w-24">5 <span>&#9733;</span>: 65<br/> 4 <span>&#9733;</span>: 50</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className='text-lg h-auto text-bold sticky top-0'>
                        <th className="p-4 flex justify-center items-center bg-dark text-light">
                            Traces (Includes Minor Traces Available)<br/>
                            (Does Not Include Overworld Mats)
                        </th>
                        <td className="border p-4 w-32 bg-dark text-light">1/1/1/1</td>
                        <td className="border p-4 w-32 bg-dark text-light">1/1/1/1</td>
                        <td className="border p-4 w-32 bg-dark text-light">1/2/2/2</td>
                        <td className="border p-4 w-32 bg-dark text-light">2/3/3/3</td>
                        <td className="border p-4 w-32 bg-dark text-light">3/4/4/4</td>
                        <td className="border p-4 w-32 bg-dark text-light">4/6/6/6</td>
                        <td className="border p-4 w-32 bg-dark text-light">5/8/8/8</td>
                        <td className="border p-4 w-32 bg-dark text-light">6/10/10/10</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th className="p-4 h-auto flex justify-center items-center text-lg text-bold">
                            Tier 1 (Green) Materials:
                        </th>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 18<br/> 4 <span>&#9733;</span>: 12</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 18<br/> 4 <span>&#9733;</span>: 12</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 18<br/> 4 <span>&#9733;</span>: 12</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 18<br/> 4 <span>&#9733;</span>: 12</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 18<br/> 4 <span>&#9733;</span>: 12</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th className="p-4 h-auto flex justify-center items-center text-lg text-bold">
                            Tier 2 (Blue) Materials:
                        </th>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 18<br/> 4 <span>&#9733;</span>: 12</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 69<br/> 4 <span>&#9733;</span>: 54</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 69<br/> 4 <span>&#9733;</span>: 54</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 69<br/> 4 <span>&#9733;</span>: 54</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th className="p-4 h-auto flex justify-center items-center text-lg text-bold">
                            Tier 3 (Purple) Materials:
                        </th>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 33<br/> 4 <span>&#9733;</span>: 24</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 139<br/> 4 <span>&#9733;</span>: 105</td>
                    </tr>
                </tbody>
            </table>

            <h1 className="flex items-center text-center justify-center text-4xl p-8 text-semibold mx-4">
                Light Cone Materials
            </h1>
            <table className="w-full border-collapse text-center">
                <thead>
                    <tr className='text-lg text-bold sticky top-0'>
                        <th className="p-5 flex justify-center items-center bg-dark text-light">
                            Light Cone Level
                        </th>
                        <th className="border p-4 bg-dark text-light">1-10</th>
                        <th className="border p-4 bg-dark text-light">1-20</th>
                        <th className="border p-4 bg-dark text-light">1-30</th>
                        <th className="border p-4 bg-dark text-light">1-40</th>
                        <th className="border p-4 bg-dark text-light">1-50</th>
                        <th className="border p-4 bg-dark text-light">1-60</th>
                        <th className="border p-4 bg-dark text-light">1-70</th>
                        <th className="border p-4 bg-dark text-light">1-80</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="border p-4 flex justify-center items-center">
                            <Image src={pFilm} alt="pFilm" className='object-center w-24 h-auto'/>
                        </th>
                        <td className="border p-4">1</td>
                        <td className="border p-4">5</td>
                        <td className="border p-4">12</td>
                        <td className="border p-4">22</td>
                        <td className="border p-4">37</td>
                        <td className="border p-4">61</td>
                        <td className="border p-4">98</td>
                        <td className="border p-4">166</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th className="p-4 h-auto flex justify-center items-center text-lg text-bold">
                            Tier 1 (Green) Materials:
                        </th>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 4<br/> 4 <span>&#9733;</span>: 3<br/> 3 <span>&#9733;</span>: 2</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 4<br/> 4 <span>&#9733;</span>: 3<br/> 3 <span>&#9733;</span>: 2</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 4<br/> 4 <span>&#9733;</span>: 3<br/> 3 <span>&#9733;</span>: 2</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 4<br/> 4 <span>&#9733;</span>: 3<br/> 3 <span>&#9733;</span>: 2</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 4<br/> 4 <span>&#9733;</span>: 3<br/> 3 <span>&#9733;</span>: 2</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th className="p-4 h-auto flex justify-center items-center text-lg text-bold">
                            Tier 2 (Blue) Materials:
                        </th>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 4<br/> 4 <span>&#9733;</span>: 3<br/> 3 <span>&#9733;</span>: 2</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 12<br/> 4 <span>&#9733;</span>: 9<br/> 3 <span>&#9733;</span>: 6</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 12<br/> 4 <span>&#9733;</span>: 9<br/> 3 <span>&#9733;</span>: 6</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 12<br/> 4 <span>&#9733;</span>: 9<br/> 3 <span>&#9733;</span>: 6</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th className="p-4 h-auto flex justify-center items-center text-lg text-bold">
                            Tier 3 (Purple) Materials:
                        </th>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32"></td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 5<br/> 4 <span>&#9733;</span>: 4<br/> 3 <span>&#9733;</span>: 3</td>
                        <td className="border p-4 w-32">5 <span>&#9733;</span>: 15<br/> 4 <span>&#9733;</span>: 12<br/> 3 <span>&#9733;</span>: 9</td>
                    </tr>
                </tbody>
            </table>

            <h1 className="flex items-center text-center justify-center text-4xl p-8 text-semibold">
                Character EXP
            </h1>
            <table className="w-full border-collapse text-center">
                <thead >
                    <tr>
                        <th className="border p-4 flex justify-center items-center">
                            <Image src={gBook} alt="gBook" className='object-center w-24 h-auto'/>
                        </th>
                        <th></th>
                        <th className="border p-4 flex justify-center items-center">
                            <Image src={bBook} alt="bBook" className='object-center w-24 h-auto'/>
                        </th>
                        <th></th>
                        <th className="border p-4 flex justify-center items-center">
                            <Image src={pBook} alt="pBook" className='object-center w-24 h-auto'/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-lg'>
                        <td className="border p-4">
                            1,000 EXP
                        </td>
                        <td></td>
                        <td className="border p-4">
                            5,000 EXP
                        </td>
                        <td></td>
                        <td className="border p-4">
                            20,000 EXP
                        </td>
                    </tr>
                </tbody>
            </table>

            <h1 className="flex items-center text-center justify-center text-4xl p-8 text-semibold">
                Light Cone EXP
            </h1>
            <table className="w-full border-collapse text-center">
                <thead >
                    <tr>
                        <th className="border p-4 flex justify-center items-center">
                            <Image src={gFilm} alt="gFilm" className='object-center w-24 h-auto'/>
                        </th>
                        <th></th>
                        <th className="border p-4 flex justify-center items-center">
                            <Image src={bFilm} alt="bFilm" className='object-center w-24 h-auto'/>
                        </th>
                        <th></th>
                        <th className="border p-4 flex justify-center items-center">
                            <Image src={pFilm} alt="pFilm" className='object-center w-24 h-auto'/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-lg'>
                        <td className="border p-4">
                            500 EXP
                        </td>
                        <td></td>
                        <td className="border p-4">
                            2,000 EXP
                        </td>
                        <td></td>
                        <td className="border p-4">
                            6,000 EXP
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default datasheet