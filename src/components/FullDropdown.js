import React, { useState } from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const FullDropdown = (props) => {
  const characters = [
  { text:"Acheron", star:5, type:"N", stag:13, mat:"NAC", boss:"B"},
  { text:"Argenti", star:5, type:"E", stag:11, mat:"E", boss:"DS"},
  { text:"Arlan", star:4, type:"D", stag:9, mat:"DSZ", boss:"D"},
  { text:"Asta", star:4, type:"Ha", stag:5, mat:"HRS", boss:"D"},
  { text:"Aventurine", star:5, type:"P", stag:15, mat:"", boss:"B"},
  { text:"Bailu", star:5, type:"A", stag:9, mat:"A", boss:"EF"},
  { text:"Black Swan", star:5, type:"N", stag:1, mat:"NAC", boss:"B"},
  { text:"Blade", star:5, type:"D", stag:1, mat:"DSZ", boss:"DS"},
  { text:"Boothill", star:5, type:"Hu", stag:0, mat:"", boss:""},
  { text:"Bronya", star:5, type:"Ha", stag:14, mat:"HRS", boss:"EF"},
  { text:"Clara", star:5, type:"D", stag:2, mat:"DSZ", boss:"EF"},
  { text:"Dan Heng", star:4, type:"Hu", stag:14, mat:"H", boss:"D"},
  { text:"Dan Heng: Imbibitor Lunae", star:5, type:"D", stag:15, mat:"DSZ", boss:"DS"},
  { text:"Dr. Ratio", star:5, type:"Hu", stag:15, mat:"H", boss:"B"},
  { text:"Fu Xuan", star:5, type:"P", stag:10, mat:"P", boss:"DS"},
  { text:"Gallagher", star:4, type:"A", stag:0, mat:"A", boss:""},
  { text:"Gepard", star:5, type:"P", stag:8, mat:"P", boss:"EF"},
  { text:"Guinaifen", star:4, type:"N", stag:12, mat:"NGM", boss:"DS"},
  { text:"Hanya", star:4, type:"Ha", stag:11, mat:"HRS", boss:"DS"},
  { text:"Herta", star:4, type:"E", stag:8, mat:"E", boss:"D"},
  { text:"Himeko", star:5, type:"E", stag:5, mat:"E", boss:"D"},
  { text:"Hook", star:4, type:"D", stag:5, mat:"DSZ", boss:"EF"},
  { text:"Huohuo", star:5, type:"A", stag:1, mat:"A", boss:"DS"},
  { text:"Jing Yuan", star:5, type:"E", stag:13, mat:"E", boss:"D"},
  { text:"Jingliu", star:5, type:"D", stag:6, mat:"DSZ", boss:"DS"},
  { text:"Kafka", star:5, type:"N", stag:13, mat:"NGM", boss:"DS"},
  { text:"Luka", star:4, type:"N", stag:2, mat:"NGM", boss:"DS"},
  { text:"Luocha", star:5, type:"A", stag:7, mat:"A", boss:"EF"},
  { text:"Lynx", star:4, type:"A", stag:10, mat:"A", boss:"DS"},
  { text:"March 7th", star:4, type:"P", stag:8, mat:"P", boss:"D"},
  { text:"Misha", star:4, type:"D", stag:4, mat:"DSW", boss:"B"},
  { text:"Natasha", star:4, type:"A", stag:2, mat:"A", boss:"EF"},
  { text:"Pela", star:4, type:"N", stag:8, mat:"NGM", boss:"EF"},
  { text:"Qingque", star:4, type:"E", stag:16, mat:"E", boss:"EF"},
  { text:"Robin", star:5, type:"H", stag:0, mat:"", boss:""},
  { text:"Ruan Mei", star:5, type:"H", stag:6, mat:"HRS", boss:"B"},
  { text:"Sampo", star:4, type:"N", stag:14, mat:"NGM", boss:"EF"},
  { text:"Seele", star:5, type:"Hu", stag:16, mat:"H", boss:"EF"},
  { text:"Serval", star:4, type:"E", stag:9, mat:"E", boss:"EF"},
  { text:"Silver Wolf", star:5, type:"N", stag:16, mat:"NGM", boss:"D"},
  { text:"Sparkle", star:5, type:"Ha", stag:3, mat:"HTR", boss:"B"},
  { text:"Sushang", star:4, type:"Hu", stag:2, mat:"H", boss:"EF"},
  { text:"Tingyun", star:4, type:"Ha", stag:9, mat:"HRS", boss:"D"},
  { text:"Topaz", star:5, type:"Hu", stag:12, mat:"H", boss:"DS"},
  { text:"Trailblazer: Preservation", star:5, type:"P", stag:0, mat:"", boss:"D"},
  { text:"Trailblazer: Destruction", star:5, type:"D", stag:0, mat:"DSZ", boss:"D"},
  { text:"Welt", star:5, type:"N", stag:7, mat:"NGM", boss:"D"},
  { text:"Xueyi", star:4, type:"D", stag:10, mat:"DSZ", boss:"B"},
  { text:"Yanqing", star:5, type:"Hu", stag:6, mat:"H", boss:"EF"},
  { text:"Yukong", star:4, type:"Ha", stag:7, mat:"HRS", boss:"D"}
]

const lightCones = [
  { text:"A Secret Vow", star:4, type:"D", mat:"DSZ"},
  { text:"Adversarial", star:3, type:"Hu", mat:"H"},
  { text:"Along the Passing Shore", star:5, type:"N", mat:"NGM"},
  { text:"Amber", star:3, type:"P", mat:"P"},
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
  { text:"Concert for Two", star:4, type:"P", mat:""},
  { text:"Cornucopia", star:3, type:"A", mat:"A"},
  { text:"Cruising in the Stellar Sea", star:5, type:"Hu", mat:"H"},
  { text:"Dance! Dance! Dance!", star:4, type:"Ha", mat:"HRS"},
  { text:"Darting Arrow", star:3, type:"Hu", mat:"H"},
  { text:"Data Bank", star:3, type:"E", mat:"E"},
  { text:"Day One of My New Life", star:4, type:"P", mat:"P"},
  { text:"Defense", star:3, type:"P", mat:"P"},
  { text:"Destiny's Threads Forewoven", star:4, type:"P", mat:"P"},
  { text:"Dreamville Adventure", star:4, type:"Ha", mat:"HTR"},
  { text:"Earthly Escapade", star:5, type:"Ha", mat:"HTR"},
  { text:"Echoes of the Coffin", star:5, type:"A", mat:"A"},
  { text:"Eyes of the Prey", star:4, type:"N", mat:"NGM"},
  { text:"Fermata", star:4, type:"N", mat:"NGM"},
  { text:"Final Victor", star:4, type:"Hu", mat:"Hu"},
  { text:"Fine Fruit", star:3, type:"A", mat:"A"},
  { text:"Flames Afar", star:4, type:"D", mat:"DSW"},
  { text:"Geniuses' Repose", star:4, type:"E", mat:"E"},
  { text:"Good Night and Sleep Well", star:4, type:"N", mat:"NGM"},
  { text:"Hey, Over Here", star:4, type:"A", mat:"A"},
  { text:"Hidden Shadow", star:3, type:"N", mat:"NGM"},
  { text:"I Shall Be My Own Sword", star:5, type:"D", mat:"DSZ"},
  { text:"In the Name of the World", star:5, type:"N", mat:"NGM"},
  { text:"In the Night", star:5, type:"Hu", mat:"H"},
  { text:"Incessant Rain", star:5, type:"N", mat:"NGM"},
  { text:"Indelible Promise", star:4, type:"D", mat:"DSW"},
  { text:"Inherently Unjust Destiny", star:5, type:"P", mat:""},
  { text:"It's Showtime", star:4, type:"N", mat:"NAC"},
  { text:"Landau's Choice", star:4, type:"P", mat:"P"},
  { text:"Loop", star:3, type:"N", mat:"NGM"},
  { text:"Make the World Clamor", star:4, type:"E", mat:"E"},
  { text:"Mediation", star:3, type:"Ha", mat:"HRS"},
  { text:"Memories of the Past", star:4, type:"Ha", mat:"HRS"},
  { text:"Meshing Cogs", star:3, type:"Ha", mat:"HRS"},
  { text:"Moment of Victory", star:5, type:"P", mat:"P"},
  { text:"Multiplication", star:3, type:"A", mat:"A"},
  { text:"Mutual Demise", star:3, type:"D", mat:"DSZ"},
  { text:"Night of Fright", star:5, type:"A", mat:"A"},
  { text:"Night on the Milky Way", star:5, type:"E", mat:"E"},
  { text:"Nowhere to Run", star:4, type:"D", mat:"DSZ"},
  { text:"On the Fall of an Aeon", star:5, type:"D", mat:"DSZ"},
  { text:"Only Silence Remains", star:4, type:"Hu", mat:"H"},
  { text:"Passkey", star:3, type:"E", mat:"E"},
  { text:"Past and Future", star:4, type:"Ha", mat:"HRS"},
  { text:"Past Self in Mirror", star:5, type:"Ha", mat:"HRS"},
  { text:"Patience Is All You Need", star:5, type:"N", mat:"NGM"},
  { text:"Perfect Timing", star:4, type:"A", mat:"A"},
  { text:"Pioneering", star:3, type:"P", mat:"P"},
  { text:"Planetary Rendezvous", star:4, type:"Ha", mat:"HRS"},
  { text:"Post-Op Conversation", star:4, type:"A", mat:"A"},
  { text:"Quid Pro Quo", star:4, type:"A", mat:"A"},
  { text:"Reforged Remembrance", star:5, type:"N", mat:"NAC"},
  { text:"Resolution Shines As Pearls of Sweat", star:4, type:"N", mat:"NGM"},
  { text:"Return to Darkness", star:4, type:"Hu", mat:"H"},
  { text:"River Flows In Spring", star:4, type:"Hu", mat:"H"},
  { text:"Sagacity", star:3, type:"E", mat:"E"},
  { text:"Shared Feeling", star:4, type:"A", mat:"A"},
  { text:"Shattered Home", star:3, type:"D", mat:"DSZ"},
  { text:"She Already Shut Her Eyes", star:5, type:"P", mat:"P"},
  { text:"Sleep Like the Dead", star:5, type:"Hu", mat:"H"},
  { text:"Solitary Healing", star:5, type:"N", mat:"NGM"},
  { text:"Something Irreplaceable", star:5, type:"D", mat:"DSZ"},
  { text:"Subscribe for More!", star:4, type:"Hu", mat:"H"},
  { text:"Swordplay", star:4, type:"Hu", mat:"H"},
  { text:"Texture of Memories", star:5, type:"P", mat:"P"},
  { text:"The Birth of the Self", star:4, type:"E", mat:"E"},
  { text:"The Day The Cosmos Fell", star:4, type:"E", mat:"E"},
  { text:"The Moles Welcome You", star:4, type:"D", mat:"DSZ"},
  { text:"The Seriousness of Breakfast", star:4, type:"E", mat:"E"},
  { text:"The Unreachable Side", star:5, type:"D", mat:"DSZ"},
  { text:"This is Me!", star:4, type:"P", mat:"P"},
  { text:"Time Waits for No One", star:5, type:"A", mat:"A"},
  { text:"Today Is Another Peaceful Day", star:4, type:"E", mat:"E"},
  { text:"Trend of the Universal Market", star:4, type:"P", mat:"P"},
  { text:"Under the Blue Sky", star:4, type:"D", mat:"DSZ"},
  { text:"Void", star:3, type:"N", mat:"NGM"},
  { text:"Warmth Shortens Cold Nights", star:4, type:"A", mat:"A"},
  { text:"We Are Wildfire", star:4, type:"P", mat:"P"},
  { text:"We Will Meet Again", star:4, type:"N", mat:"NGM"},
  { text:"What is Real?", star:4, type:"A", mat:"A"},
  { text:"Woof! Walk Time!", star:4, type:"D", mat:"DSZ"},
  { text:"Worrisome, Blissful", star:5, type:"Hu", mat:"H"},
]

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

const [selectedCharacter, setSelectedCharacter] = useState(null);
const [selectedLightCone, setSelectedLightCone] = useState(null);

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
        <p>Image: {selectedCharacter ? selectedCharacter.text : "None"}</p>
        <p>Image: {selectedLightCone ? selectedLightCone.text : "None"}</p>

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
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedCharacter ? [selectedCharacter.text] : []}
            onSelectionChange={([key]) => {
              const character = characters.find((c) => c.text === key);
              setSelectedCharacter(character);
              setSelectedLightCone(null);
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
      </div>
    </>
  );
}

export default FullDropdown