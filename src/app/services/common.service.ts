import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PokemonName } from '../interfaces/default.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  pokemonList = new BehaviorSubject<PokemonName[]>([])
  pokemonNameList: PokemonName[] = [
    { id: 1, name: "Bulbasaur" },
    { id: 2, name: "Ivysaur" },
    { id: 3, name: "Venusaur" },
    { id: 4, name: "Venusaur\nMega Venusaur" },
    { id: 5, name: "Charmander" },
    { id: 6, name: "Charmeleon" },
    { id: 7, name: "Charizard" },
    { id: 8, name: "Charizard\nMega Charizard X" },
    { id: 9, name: "Charizard\nMega Charizard Y" },
    { id: 10, name: "Squirtle" },
    { id: 11, name: "Wartortle" },
    { id: 12, name: "Blastoise" },
    { id: 13, name: "Blastoise\nMega Blastoise" },
    { id: 14, name: "Caterpie" },
    { id: 15, name: "Metapod" },
    { id: 16, name: "Butterfree" },
    { id: 17, name: "Weedle" },
    { id: 18, name: "Kakuna" },
    { id: 19, name: "Beedrill" },
    { id: 20, name: "Beedrill\nMega Beedrill" },
    { id: 21, name: "Pidgey" },
    { id: 22, name: "Pidgeotto" },
    { id: 23, name: "Pidgeot" },
    { id: 24, name: "Pidgeot\nMega Pidgeot" },
    { id: 25, name: "Rattata" },
    { id: 26, name: "Rattata\nAlolan Rattata" },
    { id: 27, name: "Raticate" },
    { id: 28, name: "Raticate\nAlolan Raticate" },
    { id: 29, name: "Spearow" },
    { id: 30, name: "Fearow" },
    { id: 31, name: "Ekans" },
    { id: 32, name: "Arbok" },
    { id: 33, name: "Pikachu" },
    { id: 34, name: "Pikachu\nPartner Pikachu" },
    { id: 35, name: "Raichu" },
    { id: 36, name: "Raichu\nAlolan Raichu" },
    { id: 37, name: "Sandshrew" },
    { id: 38, name: "Sandshrew\nAlolan Sandshrew" },
    { id: 39, name: "Sandslash" },
    { id: 40, name: "Sandslash\nAlolan Sandslash" },
    { id: 41, name: "Nidoran♀" },
    { id: 42, name: "Nidorina" },
    { id: 43, name: "Nidoqueen" },
    { id: 44, name: "Nidoran♂" },
    { id: 45, name: "Nidorino" },
    { id: 46, name: "Nidoking" },
    { id: 47, name: "Clefairy" },
    { id: 48, name: "Clefable" },
    { id: 49, name: "Vulpix" },
    { id: 50, name: "Vulpix\nAlolan Vulpix" },
    { id: 51, name: "Ninetales" },
    { id: 52, name: "Ninetales\nAlolan Ninetales" },
    { id: 53, name: "Jigglypuff" },
    { id: 54, name: "Wigglytuff" },
    { id: 55, name: "Zubat" },
    { id: 56, name: "Golbat" },
    { id: 57, name: "Oddish" },
    { id: 58, name: "Gloom" },
    { id: 59, name: "Vileplume" },
    { id: 60, name: "Paras" },
    { id: 61, name: "Parasect" },
    { id: 62, name: "Venonat" },
    { id: 63, name: "Venomoth" },
    { id: 64, name: "Diglett" },
    { id: 65, name: "Diglett\nAlolan Diglett" },
    { id: 66, name: "Dugtrio" },
    { id: 67, name: "Dugtrio\nAlolan Dugtrio" },
    { id: 68, name: "Meowth" },
    { id: 69, name: "Meowth\nAlolan Meowth" },
    { id: 70, name: "Meowth\nGalarian Meowth" },
    { id: 71, name: "Persian" },
    { id: 72, name: "Persian\nAlolan Persian" },
    { id: 73, name: "Psyduck" },
    { id: 74, name: "Golduck" },
    { id: 75, name: "Mankey" },
    { id: 76, name: "Primeape" },
    { id: 77, name: "Growlithe" },
    { id: 78, name: "Arcanine" },
    { id: 79, name: "Poliwag" },
    { id: 80, name: "Poliwhirl" },
    { id: 81, name: "Poliwrath" },
    { id: 82, name: "Abra" },
    { id: 83, name: "Kadabra" },
    { id: 84, name: "Alakazam" },
    { id: 85, name: "Alakazam\nMega Alakazam" },
    { id: 86, name: "Machop" },
    { id: 87, name: "Machoke" },
    { id: 88, name: "Machamp" },
    { id: 89, name: "Bellsprout" },
    { id: 90, name: "Weepinbell" },
    { id: 91, name: "Victreebel" },
    { id: 92, name: "Tentacool" },
    { id: 93, name: "Tentacruel" },
    { id: 94, name: "Geodude" },
    { id: 95, name: "Geodude\nAlolan Geodude" },
    { id: 96, name: "Graveler" },
    { id: 97, name: "Graveler\nAlolan Graveler" },
    { id: 98, name: "Golem" },
    { id: 99, name: "Golem\nAlolan Golem" },
    { id: 100, name: "Ponyta" },
    { id: 101, name: "Ponyta\nGalarian Ponyta" },
    { id: 102, name: "Rapidash" },
    { id: 103, name: "Rapidash\nGalarian Rapidash" },
    { id: 104, name: "Slowpoke" },
    { id: 105, name: "Slowpoke\nGalarian Slowpoke" },
    { id: 106, name: "Slowbro" },
    { id: 107, name: "Slowbro\nMega Slowbro" },
    { id: 108, name: "Slowbro\nGalarian Slowbro" },
    { id: 109, name: "Magnemite" },
    { id: 110, name: "Magneton" },
    { id: 111, name: "Farfetch'd" },
    { id: 112, name: "Farfetch'd\nGalarian Farfetch'd" },
    { id: 113, name: "Doduo" },
    { id: 114, name: "Dodrio" },
    { id: 115, name: "Seel" },
    { id: 116, name: "Dewgong" },
    { id: 117, name: "Grimer" },
    { id: 118, name: "Grimer\nAlolan Grimer" },
    { id: 119, name: "Muk" },
    { id: 120, name: "Muk\nAlolan Muk" },
    { id: 121, name: "Shellder" },
    { id: 122, name: "Cloyster" },
    { id: 123, name: "Gastly" },
    { id: 124, name: "Haunter" },
    { id: 125, name: "Gengar" },
    { id: 126, name: "Gengar\nMega Gengar" },
    { id: 127, name: "Onix" },
    { id: 128, name: "Drowzee" },
    { id: 129, name: "Hypno" },
    { id: 130, name: "Krabby" },
    { id: 131, name: "Kingler" },
    { id: 132, name: "Voltorb" },
    { id: 133, name: "Electrode" },
    { id: 134, name: "Exeggcute" },
    { id: 135, name: "Exeggutor" },
    { id: 136, name: "Exeggutor\nAlolan Exeggutor" },
    { id: 137, name: "Cubone" },
    { id: 138, name: "Marowak" },
    { id: 139, name: "Marowak\nAlolan Marowak" },
    { id: 140, name: "Hitmonlee" },
    { id: 141, name: "Hitmonchan" },
    { id: 142, name: "Lickitung" },
    { id: 143, name: "Koffing" },
    { id: 144, name: "Weezing" },
    { id: 145, name: "Weezing\nGalarian Weezing" },
    { id: 146, name: "Rhyhorn" },
    { id: 147, name: "Rhydon" },
    { id: 148, name: "Chansey" },
    { id: 149, name: "Tangela" },
    { id: 150, name: "Kangaskhan" },
    { id: 151, name: "Kangaskhan\nMega Kangaskhan" },
    { id: 152, name: "Horsea" },
    { id: 153, name: "Seadra" },
    { id: 154, name: "Goldeen" },
    { id: 155, name: "Seaking" },
    { id: 156, name: "Staryu" },
    { id: 157, name: "Starmie" },
    { id: 158, name: "Mr. Mime" },
    { id: 159, name: "Mr. Mime\nGalarian Mr. Mime" },
    { id: 160, name: "Scyther" },
    { id: 161, name: "Jynx" },
    { id: 162, name: "Electabuzz" },
    { id: 163, name: "Magmar" },
    { id: 164, name: "Pinsir" },
    { id: 165, name: "Pinsir\nMega Pinsir" },
    { id: 166, name: "Tauros" },
    { id: 167, name: "Magikarp" },
    { id: 168, name: "Gyarados" },
    { id: 169, name: "Gyarados\nMega Gyarados" },
    { id: 170, name: "Lapras" },
    { id: 171, name: "Ditto" },
    { id: 172, name: "Eevee" },
    { id: 173, name: "Eevee\nPartner Eevee" },
    { id: 174, name: "Vaporeon" },
    { id: 175, name: "Jolteon" },
    { id: 176, name: "Flareon" },
    { id: 177, name: "Porygon" },
    { id: 178, name: "Omanyte" },
    { id: 179, name: "Omastar" },
    { id: 180, name: "Kabuto" },
    { id: 181, name: "Kabutops" },
    { id: 182, name: "Aerodactyl" },
    { id: 183, name: "Aerodactyl\nMega Aerodactyl" },
    { id: 184, name: "Snorlax" },
    { id: 185, name: "Articuno" },
    { id: 186, name: "Articuno\nGalarian Articuno" },
    { id: 187, name: "Zapdos" },
    { id: 188, name: "Zapdos\nGalarian Zapdos" },
    { id: 189, name: "Moltres" },
    { id: 190, name: "Moltres\nGalarian Moltres" },
    { id: 191, name: "Dratini" },
    { id: 192, name: "Dragonair" },
    { id: 193, name: "Dragonite" },
    { id: 194, name: "Mewtwo" },
    { id: 195, name: "Mewtwo\nMega Mewtwo X" },
    { id: 196, name: "Mewtwo\nMega Mewtwo Y" },
    { id: 197, name: "Mew" },
    { id: 198, name: "Chikorita" },
    { id: 199, name: "Bayleef" },
    { id: 200, name: "Meganium" },
    { id: 201, name: "Cyndaquil" },
    { id: 202, name: "Quilava" },
    { id: 203, name: "Typhlosion" },
    { id: 204, name: "Totodile" },
    { id: 205, name: "Croconaw" },
    { id: 206, name: "Feraligatr" },
    { id: 207, name: "Sentret" },
    { id: 208, name: "Furret" },
    { id: 209, name: "Hoothoot" },
    { id: 210, name: "Noctowl" },
    { id: 211, name: "Ledyba" },
    { id: 212, name: "Ledian" },
    { id: 213, name: "Spinarak" },
    { id: 214, name: "Ariados" },
    { id: 215, name: "Crobat" },
    { id: 216, name: "Chinchou" },
    { id: 217, name: "Lanturn" },
    { id: 218, name: "Pichu" },
    { id: 219, name: "Cleffa" },
    { id: 220, name: "Igglybuff" },
    { id: 221, name: "Togepi" },
    { id: 222, name: "Togetic" },
    { id: 223, name: "Natu" },
    { id: 224, name: "Xatu" },
    { id: 225, name: "Mareep" },
    { id: 226, name: "Flaaffy" },
    { id: 227, name: "Ampharos" },
    { id: 228, name: "Ampharos\nMega Ampharos" },
    { id: 229, name: "Bellossom" },
    { id: 230, name: "Marill" },
    { id: 231, name: "Azumarill" },
    { id: 232, name: "Sudowoodo" },
    { id: 233, name: "Politoed" },
    { id: 234, name: "Hoppip" },
    { id: 235, name: "Skiploom" },
    { id: 236, name: "Jumpluff" },
    { id: 237, name: "Aipom" },
    { id: 238, name: "Sunkern" },
    { id: 239, name: "Sunflora" },
    { id: 240, name: "Yanma" },
    { id: 241, name: "Wooper" },
    { id: 242, name: "Quagsire" },
    { id: 243, name: "Espeon" },
    { id: 244, name: "Umbreon" },
    { id: 245, name: "Murkrow" },
    { id: 246, name: "Slowking" },
    { id: 247, name: "Slowking\nGalarian Slowking" },
    { id: 248, name: "Misdreavus" },
    { id: 249, name: "Unown" },
    { id: 250, name: "Wobbuffet" },
    { id: 251, name: "Girafarig" },
    { id: 252, name: "Pineco" },
    { id: 253, name: "Forretress" },
    { id: 254, name: "Dunsparce" },
    { id: 255, name: "Gligar" },
    { id: 256, name: "Steelix" },
    { id: 257, name: "Steelix\nMega Steelix" },
    { id: 258, name: "Snubbull" },
    { id: 259, name: "Granbull" },
    { id: 260, name: "Qwilfish" },
    { id: 261, name: "Scizor" },
    { id: 262, name: "Scizor\nMega Scizor" },
    { id: 263, name: "Shuckle" },
    { id: 264, name: "Heracross" },
    { id: 265, name: "Heracross\nMega Heracross" },
    { id: 266, name: "Sneasel" },
    { id: 267, name: "Teddiursa" },
    { id: 268, name: "Ursaring" },
    { id: 269, name: "Slugma" },
    { id: 270, name: "Magcargo" },
    { id: 271, name: "Swinub" },
    { id: 272, name: "Piloswine" },
    { id: 273, name: "Corsola" },
    { id: 274, name: "Corsola\nGalarian Corsola" },
    { id: 275, name: "Remoraid" },
    { id: 276, name: "Octillery" },
    { id: 277, name: "Delibird" },
    { id: 278, name: "Mantine" },
    { id: 279, name: "Skarmory" },
    { id: 280, name: "Houndour" },
    { id: 281, name: "Houndoom" },
    { id: 282, name: "Houndoom\nMega Houndoom" },
    { id: 283, name: "Kingdra" },
    { id: 284, name: "Phanpy" },
    { id: 285, name: "Donphan" },
    { id: 286, name: "Porygon2" },
    { id: 287, name: "Stantler" },
    { id: 288, name: "Smeargle" },
    { id: 289, name: "Tyrogue" },
    { id: 290, name: "Hitmontop" },
    { id: 291, name: "Smoochum" },
    { id: 292, name: "Elekid" },
    { id: 293, name: "Magby" },
    { id: 294, name: "Miltank" },
    { id: 295, name: "Blissey" },
    { id: 296, name: "Raikou" },
    { id: 297, name: "Entei" },
    { id: 298, name: "Suicune" },
    { id: 299, name: "Larvitar" },
    { id: 300, name: "Pupitar" },
    { id: 301, name: "Tyranitar" },
    { id: 302, name: "Tyranitar\nMega Tyranitar" },
    { id: 303, name: "Lugia" },
    { id: 304, name: "Ho-oh" },
    { id: 305, name: "Celebi" },
    { id: 306, name: "Treecko" },
    { id: 307, name: "Grovyle" },
    { id: 308, name: "Sceptile" },
    { id: 309, name: "Sceptile\nMega Sceptile" },
    { id: 310, name: "Torchic" },
    { id: 311, name: "Combusken" },
    { id: 312, name: "Blaziken" },
    { id: 313, name: "Blaziken\nMega Blaziken" },
    { id: 314, name: "Mudkip" },
    { id: 315, name: "Marshtomp" },
    { id: 316, name: "Swampert" },
    { id: 317, name: "Swampert\nMega Swampert" },
    { id: 318, name: "Poochyena" },
    { id: 319, name: "Mightyena" },
    { id: 320, name: "Zigzagoon" },
    { id: 321, name: "Zigzagoon\nGalarian Zigzagoon" },
    { id: 322, name: "Linoone" },
    { id: 323, name: "Linoone\nGalarian Linoone" },
    { id: 324, name: "Wurmple" },
    { id: 325, name: "Silcoon" },
    { id: 326, name: "Beautifly" },
    { id: 327, name: "Cascoon" },
    { id: 328, name: "Dustox" },
    { id: 329, name: "Lotad" },
    { id: 330, name: "Lombre" },
    { id: 331, name: "Ludicolo" },
    { id: 332, name: "Seedot" },
    { id: 333, name: "Nuzleaf" },
    { id: 334, name: "Shiftry" },
    { id: 335, name: "Taillow" },
    { id: 336, name: "Swellow" },
    { id: 337, name: "Wingull" },
    { id: 338, name: "Pelipper" },
    { id: 339, name: "Ralts" },
    { id: 340, name: "Kirlia" },
    { id: 341, name: "Gardevoir" },
    { id: 342, name: "Gardevoir\nMega Gardevoir" },
    { id: 343, name: "Surskit" },
    { id: 344, name: "Masquerain" },
    { id: 345, name: "Shroomish" },
    { id: 346, name: "Breloom" },
    { id: 347, name: "Slakoth" },
    { id: 348, name: "Vigoroth" },
    { id: 349, name: "Slaking" },
    { id: 350, name: "Nincada" },
    { id: 351, name: "Ninjask" },
    { id: 352, name: "Shedinja" },
    { id: 353, name: "Whismur" },
    { id: 354, name: "Loudred" },
    { id: 355, name: "Exploud" },
    { id: 356, name: "Makuhita" },
    { id: 357, name: "Hariyama" },
    { id: 358, name: "Azurill" },
    { id: 359, name: "Nosepass" },
    { id: 360, name: "Skitty" },
    { id: 361, name: "Delcatty" },
    { id: 362, name: "Sableye" },
    { id: 363, name: "Sableye\nMega Sableye" },
    { id: 364, name: "Mawile" },
    { id: 365, name: "Mawile\nMega Mawile" },
    { id: 366, name: "Aron" },
    { id: 367, name: "Lairon" },
    { id: 368, name: "Aggron" },
    { id: 369, name: "Aggron\nMega Aggron" },
    { id: 370, name: "Meditite" },
    { id: 371, name: "Medicham" },
    { id: 372, name: "Medicham\nMega Medicham" },
    { id: 373, name: "Electrike" },
    { id: 374, name: "Manectric" },
    { id: 375, name: "Manectric\nMega Manectric" },
    { id: 376, name: "Plusle" },
    { id: 377, name: "Minun" },
    { id: 378, name: "Volbeat" },
    { id: 379, name: "Illumise" },
    { id: 380, name: "Roselia" },
    { id: 381, name: "Gulpin" },
    { id: 382, name: "Swalot" },
    { id: 383, name: "Carvanha" },
    { id: 384, name: "Sharpedo" },
    { id: 385, name: "Sharpedo\nMega Sharpedo" },
    { id: 386, name: "Wailmer" },
    { id: 387, name: "Wailord" },
    { id: 388, name: "Numel" },
    { id: 389, name: "Camerupt" },
    { id: 390, name: "Camerupt\nMega Camerupt" },
    { id: 391, name: "Torkoal" },
    { id: 392, name: "Spoink" },
    { id: 393, name: "Grumpig" },
    { id: 394, name: "Spinda" },
    { id: 395, name: "Trapinch" },
    { id: 396, name: "Vibrava" },
    { id: 397, name: "Flygon" },
    { id: 398, name: "Cacnea" },
    { id: 399, name: "Cacturne" },
    { id: 400, name: "Swablu" },
    { id: 401, name: "Altaria" },
    { id: 402, name: "Altaria\nMega Altaria" },
    { id: 403, name: "Zangoose" },
    { id: 404, name: "Seviper" },
    { id: 405, name: "Lunatone" },
    { id: 406, name: "Solrock" },
    { id: 407, name: "Barboach" },
    { id: 408, name: "Whiscash" },
    { id: 409, name: "Corphish" },
    { id: 410, name: "Crawdaunt" },
    { id: 411, name: "Baltoy" },
    { id: 412, name: "Claydol" },
    { id: 413, name: "Lileep" },
    { id: 414, name: "Cradily" },
    { id: 415, name: "Anorith" },
    { id: 416, name: "Armaldo" },
    { id: 417, name: "Feebas" },
    { id: 418, name: "Milotic" },
    { id: 419, name: "Castform" },
    { id: 420, name: "Castform\nSunny Form" },
    { id: 421, name: "Castform\nRainy Form" },
    { id: 422, name: "Castform\nSnowy Form" },
    { id: 423, name: "Kecleon" },
    { id: 424, name: "Shuppet" },
    { id: 425, name: "Banette" },
    { id: 426, name: "Banette\nMega Banette" },
    { id: 427, name: "Duskull" },
    { id: 428, name: "Dusclops" },
    { id: 429, name: "Tropius" },
    { id: 430, name: "Chimecho" },
    { id: 431, name: "Absol" },
    { id: 432, name: "Absol\nMega Absol" },
    { id: 433, name: "Wynaut" },
    { id: 434, name: "Snorunt" },
    { id: 435, name: "Glalie" },
    { id: 436, name: "Glalie\nMega Glalie" },
    { id: 437, name: "Spheal" },
    { id: 438, name: "Sealeo" },
    { id: 439, name: "Walrein" },
    { id: 440, name: "Clamperl" },
    { id: 441, name: "Huntail" },
    { id: 442, name: "Gorebyss" },
    { id: 443, name: "Relicanth" },
    { id: 444, name: "Luvdisc" },
    { id: 445, name: "Bagon" },
    { id: 446, name: "Shelgon" },
    { id: 447, name: "Salamence" },
    { id: 448, name: "Salamence\nMega Salamence" },
    { id: 449, name: "Beldum" },
    { id: 450, name: "Metang" },
    { id: 451, name: "Metagross" },
    { id: 452, name: "Metagross\nMega Metagross" },
    { id: 453, name: "Regirock" },
    { id: 454, name: "Regice" },
    { id: 455, name: "Registeel" },
    { id: 456, name: "Latias" },
    { id: 457, name: "Latias\nMega Latias" },
    { id: 458, name: "Latios" },
    { id: 459, name: "Latios\nMega Latios" },
    { id: 460, name: "Kyogre" },
    { id: 461, name: "Kyogre\nPrimal Kyogre" },
    { id: 462, name: "Groudon" },
    { id: 463, name: "Groudon\nPrimal Groudon" },
    { id: 464, name: "Rayquaza" },
    { id: 465, name: "Rayquaza\nMega Rayquaza" },
    { id: 466, name: "Jirachi" },
    { id: 467, name: "Deoxys\nNormal Forme" },
    { id: 468, name: "Deoxys\nAttack Forme" },
    { id: 469, name: "Deoxys\nDefense Forme" },
    { id: 470, name: "Deoxys\nSpeed Forme" },
    { id: 471, name: "Turtwig" },
    { id: 472, name: "Grotle" },
    { id: 473, name: "Torterra" },
    { id: 474, name: "Chimchar" },
    { id: 475, name: "Monferno" },
    { id: 476, name: "Infernape" },
    { id: 477, name: "Piplup" },
    { id: 478, name: "Prinplup" },
    { id: 479, name: "Empoleon" },
    { id: 480, name: "Starly" },
    { id: 481, name: "Staravia" },
    { id: 482, name: "Staraptor" },
    { id: 483, name: "Bidoof" },
    { id: 484, name: "Bibarel" },
    { id: 485, name: "Kricketot" },
    { id: 486, name: "Kricketune" },
    { id: 487, name: "Shinx" },
    { id: 488, name: "Luxio" },
    { id: 489, name: "Luxray" },
    { id: 490, name: "Budew" },
    { id: 491, name: "Roserade" },
    { id: 492, name: "Cranidos" },
    { id: 493, name: "Rampardos" },
    { id: 494, name: "Shieldon" },
    { id: 495, name: "Bastiodon" },
    { id: 496, name: "Burmy" },
    { id: 497, name: "Wormadam\nPlant Cloak" },
    { id: 498, name: "Wormadam\nSandy Cloak" },
    { id: 499, name: "Wormadam\nTrash Cloak" },
    { id: 500, name: "Mothim" },
    { id: 501, name: "Combee" },
    { id: 502, name: "Vespiquen" },
    { id: 503, name: "Pachirisu" },
    { id: 504, name: "Buizel" },
    { id: 505, name: "Floatzel" },
    { id: 506, name: "Cherubi" },
    { id: 507, name: "Cherrim" },
    { id: 508, name: "Shellos" },
    { id: 509, name: "Gastrodon" },
    { id: 510, name: "Ambipom" },
    { id: 511, name: "Drifloon" },
    { id: 512, name: "Drifblim" },
    { id: 513, name: "Buneary" },
    { id: 514, name: "Lopunny" },
    { id: 515, name: "Lopunny\nMega Lopunny" },
    { id: 516, name: "Mismagius" },
    { id: 517, name: "Honchkrow" },
    { id: 518, name: "Glameow" },
    { id: 519, name: "Purugly" },
    { id: 520, name: "Chingling" },
    { id: 521, name: "Stunky" },
    { id: 522, name: "Skuntank" },
    { id: 523, name: "Bronzor" },
    { id: 524, name: "Bronzong" },
    { id: 525, name: "Bonsly" },
    { id: 526, name: "Mime Jr." },
    { id: 527, name: "Happiny" },
    { id: 528, name: "Chatot" },
    { id: 529, name: "Spiritomb" },
    { id: 530, name: "Gible" },
    { id: 531, name: "Gabite" },
    { id: 532, name: "Garchomp" },
    { id: 533, name: "Garchomp\nMega Garchomp" },
    { id: 534, name: "Munchlax" },
    { id: 535, name: "Riolu" },
    { id: 536, name: "Lucario" },
    { id: 537, name: "Lucario\nMega Lucario" },
    { id: 538, name: "Hippopotas" },
    { id: 539, name: "Hippowdon" },
    { id: 540, name: "Skorupi" },
    { id: 541, name: "Drapion" },
    { id: 542, name: "Croagunk" },
    { id: 543, name: "Toxicroak" },
    { id: 544, name: "Carnivine" },
    { id: 545, name: "Finneon" },
    { id: 546, name: "Lumineon" },
    { id: 547, name: "Mantyke" },
    { id: 548, name: "Snover" },
    { id: 549, name: "Abomasnow" },
    { id: 550, name: "Abomasnow\nMega Abomasnow" },
    { id: 551, name: "Weavile" },
    { id: 552, name: "Magnezone" },
    { id: 553, name: "Lickilicky" },
    { id: 554, name: "Rhyperior" },
    { id: 555, name: "Tangrowth" },
    { id: 556, name: "Electivire" },
    { id: 557, name: "Magmortar" },
    { id: 558, name: "Togekiss" },
    { id: 559, name: "Yanmega" },
    { id: 560, name: "Leafeon" },
    { id: 561, name: "Glaceon" },
    { id: 562, name: "Gliscor" },
    { id: 563, name: "Mamoswine" },
    { id: 564, name: "Porygon-Z" },
    { id: 565, name: "Gallade" },
    { id: 566, name: "Gallade\nMega Gallade" },
    { id: 567, name: "Probopass" },
    { id: 568, name: "Dusknoir" },
    { id: 569, name: "Froslass" },
    { id: 570, name: "Rotom" },
    { id: 571, name: "Rotom\nHeat Rotom" },
    { id: 572, name: "Rotom\nWash Rotom" },
    { id: 573, name: "Rotom\nFrost Rotom" },
    { id: 574, name: "Rotom\nFan Rotom" },
    { id: 575, name: "Rotom\nMow Rotom" },
    { id: 576, name: "Uxie" },
    { id: 577, name: "Mesprit" },
    { id: 578, name: "Azelf" },
    { id: 579, name: "Dialga" },
    { id: 580, name: "Palkia" },
    { id: 581, name: "Heatran" },
    { id: 582, name: "Regigigas" },
    { id: 583, name: "Giratina\nAltered Forme" },
    { id: 584, name: "Giratina\nOrigin Forme" },
    { id: 585, name: "Cresselia" },
    { id: 586, name: "Phione" },
    { id: 587, name: "Manaphy" },
    { id: 588, name: "Darkrai" },
    { id: 589, name: "Shaymin\nLand Forme" },
    { id: 590, name: "Shaymin\nSky Forme" },
    { id: 591, name: "Arceus" },
    { id: 592, name: "Victini" },
    { id: 593, name: "Snivy" },
    { id: 594, name: "Servine" },
    { id: 595, name: "Serperior" },
    { id: 596, name: "Tepig" },
    { id: 597, name: "Pignite" },
    { id: 598, name: "Emboar" },
    { id: 599, name: "Oshawott" },
    { id: 600, name: "Dewott" },
    { id: 601, name: "Samurott" },
    { id: 602, name: "Patrat" },
    { id: 603, name: "Watchog" },
    { id: 604, name: "Lillipup" },
    { id: 605, name: "Herdier" },
    { id: 606, name: "Stoutland" },
    { id: 607, name: "Purrloin" },
    { id: 608, name: "Liepard" },
    { id: 609, name: "Pansage" },
    { id: 610, name: "Simisage" },
    { id: 611, name: "Pansear" },
    { id: 612, name: "Simisear" },
    { id: 613, name: "Panpour" },
    { id: 614, name: "Simipour" },
    { id: 615, name: "Munna" },
    { id: 616, name: "Musharna" },
    { id: 617, name: "Pidove" },
    { id: 618, name: "Tranquill" },
    { id: 619, name: "Unfezant" },
    { id: 620, name: "Blitzle" },
    { id: 621, name: "Zebstrika" },
    { id: 622, name: "Roggenrola" },
    { id: 623, name: "Boldore" },
    { id: 624, name: "Gigalith" },
    { id: 625, name: "Woobat" },
    { id: 626, name: "Swoobat" },
    { id: 627, name: "Drilbur" },
    { id: 628, name: "Excadrill" },
    { id: 629, name: "Audino" },
    { id: 630, name: "Audino\nMega Audino" },
    { id: 631, name: "Timburr" },
    { id: 632, name: "Gurdurr" },
    { id: 633, name: "Conkeldurr" },
    { id: 634, name: "Tympole" },
    { id: 635, name: "Palpitoad" },
    { id: 636, name: "Seismitoad" },
    { id: 637, name: "Throh" },
    { id: 638, name: "Sawk" },
    { id: 639, name: "Sewaddle" },
    { id: 640, name: "Swadloon" },
    { id: 641, name: "Leavanny" },
    { id: 642, name: "Venipede" },
    { id: 643, name: "Whirlipede" },
    { id: 644, name: "Scolipede" },
    { id: 645, name: "Cottonee" },
    { id: 646, name: "Whimsicott" },
    { id: 647, name: "Petilil" },
    { id: 648, name: "Lilligant" },
    { id: 649, name: "Basculin\nRed-Striped Form" },
    { id: 650, name: "Basculin\nBlue-Striped Form" },
    { id: 651, name: "Sandile" },
    { id: 652, name: "Krokorok" },
    { id: 653, name: "Krookodile" },
    { id: 654, name: "Darumaka" },
    { id: 655, name: "Darumaka\nGalarian Darumaka" },
    { id: 656, name: "Darmanitan\nStandard Mode" },
    { id: 657, name: "Darmanitan\nZen Mode" },
    { id: 658, name: "Darmanitan\nGalarian Standard Mode" },
    { id: 659, name: "Darmanitan\nGalarian Zen Mode" },
    { id: 660, name: "Maractus" },
    { id: 661, name: "Dwebble" },
    { id: 662, name: "Crustle" },
    { id: 663, name: "Scraggy" },
    { id: 664, name: "Scrafty" },
    { id: 665, name: "Sigilyph" },
    { id: 666, name: "Yamask" },
    { id: 667, name: "Yamask\nGalarian Yamask" },
    { id: 668, name: "Cofagrigus" },
    { id: 669, name: "Tirtouga" },
    { id: 670, name: "Carracosta" },
    { id: 671, name: "Archen" },
    { id: 672, name: "Archeops" },
    { id: 673, name: "Trubbish" },
    { id: 674, name: "Garbodor" },
    { id: 675, name: "Zorua" },
    { id: 676, name: "Zoroark" },
    { id: 677, name: "Minccino" },
    { id: 678, name: "Cinccino" },
    { id: 679, name: "Gothita" },
    { id: 680, name: "Gothorita" },
    { id: 681, name: "Gothitelle" },
    { id: 682, name: "Solosis" },
    { id: 683, name: "Duosion" },
    { id: 684, name: "Reuniclus" },
    { id: 685, name: "Ducklett" },
    { id: 686, name: "Swanna" },
    { id: 687, name: "Vanillite" },
    { id: 688, name: "Vanillish" },
    { id: 689, name: "Vanilluxe" },
    { id: 690, name: "Deerling" },
    { id: 691, name: "Sawsbuck" },
    { id: 692, name: "Emolga" },
    { id: 693, name: "Karrablast" },
    { id: 694, name: "Escavalier" },
    { id: 695, name: "Foongus" },
    { id: 696, name: "Amoonguss" },
    { id: 697, name: "Frillish" },
    { id: 698, name: "Jellicent" },
    { id: 699, name: "Alomomola" },
    { id: 700, name: "Joltik" },
    { id: 701, name: "Galvantula" },
    { id: 702, name: "Ferroseed" },
    { id: 703, name: "Ferrothorn" },
    { id: 704, name: "Klink" },
    { id: 705, name: "Klang" },
    { id: 706, name: "Klinklang" },
    { id: 707, name: "Tynamo" },
    { id: 708, name: "Eelektrik" },
    { id: 709, name: "Eelektross" },
    { id: 710, name: "Elgyem" },
    { id: 711, name: "Beheeyem" },
    { id: 712, name: "Litwick" },
    { id: 713, name: "Lampent" },
    { id: 714, name: "Chandelure" },
    { id: 715, name: "Axew" },
    { id: 716, name: "Fraxure" },
    { id: 717, name: "Haxorus" },
    { id: 718, name: "Cubchoo" },
    { id: 719, name: "Beartic" },
    { id: 720, name: "Cryogonal" },
    { id: 721, name: "Shelmet" },
    { id: 722, name: "Accelgor" },
    { id: 723, name: "Stunfisk" },
    { id: 724, name: "Stunfisk\nGalarian Stunfisk" },
    { id: 725, name: "Mienfoo" },
    { id: 726, name: "Mienshao" },
    { id: 727, name: "Druddigon" },
    { id: 728, name: "Golett" },
    { id: 729, name: "Golurk" },
    { id: 730, name: "Pawniard" },
    { id: 731, name: "Bisharp" },
    { id: 732, name: "Bouffalant" },
    { id: 733, name: "Rufflet" },
    { id: 734, name: "Braviary" },
    { id: 735, name: "Vullaby" },
    { id: 736, name: "Mandibuzz" },
    { id: 737, name: "Heatmor" },
    { id: 738, name: "Durant" },
    { id: 739, name: "Deino" },
    { id: 740, name: "Zweilous" },
    { id: 741, name: "Hydreigon" },
    { id: 742, name: "Larvesta" },
    { id: 743, name: "Volcarona" },
    { id: 744, name: "Cobalion" },
    { id: 745, name: "Terrakion" },
    { id: 746, name: "Virizion" },
    { id: 747, name: "Tornadus\nIncarnate Forme" },
    { id: 748, name: "Tornadus\nTherian Forme" },
    { id: 749, name: "Thundurus\nIncarnate Forme" },
    { id: 750, name: "Thundurus\nTherian Forme" },
    { id: 751, name: "Reshiram" },
    { id: 752, name: "Zekrom" },
    { id: 753, name: "Landorus\nIncarnate Forme" },
    { id: 754, name: "Landorus\nTherian Forme" },
    { id: 755, name: "Kyurem" },
    { id: 756, name: "Kyurem\nBlack Kyurem" },
    { id: 757, name: "Kyurem\nWhite Kyurem" },
    { id: 758, name: "Keldeo\nOrdinary Form" },
    { id: 759, name: "Keldeo\nResolute Form" },
    { id: 760, name: "Meloetta\nAria Forme" },
    { id: 761, name: "Meloetta\nPirouette Forme" },
    { id: 762, name: "Genesect" },
    { id: 763, name: "Chespin" },
    { id: 764, name: "Quilladin" },
    { id: 765, name: "Chesnaught" },
    { id: 766, name: "Fennekin" },
    { id: 767, name: "Braixen" },
    { id: 768, name: "Delphox" },
    { id: 769, name: "Froakie" },
    { id: 770, name: "Frogadier" },
    { id: 771, name: "Greninja" },
    { id: 772, name: "Greninja\nAsh-Greninja" },
    { id: 773, name: "Bunnelby" },
    { id: 774, name: "Diggersby" },
    { id: 775, name: "Fletchling" },
    { id: 776, name: "Fletchinder" },
    { id: 777, name: "Talonflame" },
    { id: 778, name: "Scatterbug" },
    { id: 779, name: "Spewpa" },
    { id: 780, name: "Vivillon" },
    { id: 781, name: "Litleo" },
    { id: 782, name: "Pyroar" },
    { id: 783, name: "Flabébé" },
    { id: 784, name: "Floette" },
    { id: 785, name: "Florges" },
    { id: 786, name: "Skiddo" },
    { id: 787, name: "Gogoat" },
    { id: 788, name: "Pancham" },
    { id: 789, name: "Pangoro" },
    { id: 790, name: "Furfrou" },
    { id: 791, name: "Espurr" },
    { id: 792, name: "Meowstic\nMale" },
    { id: 793, name: "Meowstic\nFemale" },
    { id: 794, name: "Honedge" },
    { id: 795, name: "Doublade" },
    { id: 796, name: "Aegislash\nShield Forme" },
    { id: 797, name: "Aegislash\nBlade Forme" },
    { id: 798, name: "Spritzee" },
    { id: 799, name: "Aromatisse" },
    { id: 800, name: "Swirlix" },
    { id: 801, name: "Slurpuff" },
    { id: 802, name: "Inkay" },
    { id: 803, name: "Malamar" },
    { id: 804, name: "Binacle" },
    { id: 805, name: "Barbaracle" },
    { id: 806, name: "Skrelp" },
    { id: 807, name: "Dragalge" },
    { id: 808, name: "Clauncher" },
    { id: 809, name: "Clawitzer" },
    { id: 810, name: "Helioptile" },
    { id: 811, name: "Heliolisk" },
    { id: 812, name: "Tyrunt" },
    { id: 813, name: "Tyrantrum" },
    { id: 814, name: "Amaura" },
    { id: 815, name: "Aurorus" },
    { id: 816, name: "Sylveon" },
    { id: 817, name: "Hawlucha" },
    { id: 818, name: "Dedenne" },
    { id: 819, name: "Carbink" },
    { id: 820, name: "Goomy" },
    { id: 821, name: "Sliggoo" },
    { id: 822, name: "Goodra" },
    { id: 823, name: "Klefki" },
    { id: 824, name: "Phantump" },
    { id: 825, name: "Trevenant" },
    { id: 826, name: "Pumpkaboo\nAverage Size" },
    { id: 827, name: "Pumpkaboo\nSmall Size" },
    { id: 828, name: "Pumpkaboo\nLarge Size" },
    { id: 829, name: "Pumpkaboo\nSuper Size" },
    { id: 830, name: "Gourgeist\nAverage Size" },
    { id: 831, name: "Gourgeist\nSmall Size" },
    { id: 832, name: "Gourgeist\nLarge Size" },
    { id: 833, name: "Gourgeist\nSuper Size" },
    { id: 834, name: "Bergmite" },
    { id: 835, name: "Avalugg" },
    { id: 836, name: "Noibat" },
    { id: 837, name: "Noivern" },
    { id: 838, name: "Xerneas" },
    { id: 839, name: "Yveltal" },
    { id: 840, name: "Zygarde\n50% Forme" },
    { id: 841, name: "Zygarde\n10% Forme" },
    { id: 842, name: "Zygarde\nComplete Forme" },
    { id: 843, name: "Diancie" },
    { id: 844, name: "Diancie\nMega Diancie" },
    { id: 845, name: "Hoopa\nHoopa Confined" },
    { id: 846, name: "Hoopa\nHoopa Unbound" },
    { id: 847, name: "Volcanion" },
    { id: 848, name: "Rowlet" },
    { id: 849, name: "Dartrix" },
    { id: 850, name: "Decidueye" },
    { id: 851, name: "Litten" },
    { id: 852, name: "Torracat" },
    { id: 853, name: "Incineroar" },
    { id: 854, name: "Popplio" },
    { id: 855, name: "Brionne" },
    { id: 856, name: "Primarina" },
    { id: 857, name: "Pikipek" },
    { id: 858, name: "Trumbeak" },
    { id: 859, name: "Toucannon" },
    { id: 860, name: "Yungoos" },
    { id: 861, name: "Gumshoos" },
    { id: 862, name: "Grubbin" },
    { id: 863, name: "Charjabug" },
    { id: 864, name: "Vikavolt" },
    { id: 865, name: "Crabrawler" },
    { id: 866, name: "Crabominable" },
    { id: 867, name: "Oricorio\nBaile Style" },
    { id: 868, name: "Oricorio\nPom-Pom Style" },
    { id: 869, name: "Oricorio\nPa'u Style" },
    { id: 870, name: "Oricorio\nSensu Style" },
    { id: 871, name: "Cutiefly" },
    { id: 872, name: "Ribombee" },
    { id: 873, name: "Rockruff" },
    { id: 874, name: "Rockruff\nOwn Tempo Rockruff" },
    { id: 875, name: "Lycanroc\nMidday Form" },
    { id: 876, name: "Lycanroc\nMidnight Form" },
    { id: 877, name: "Lycanroc\nDusk Form" },
    { id: 878, name: "Wishiwashi\nSolo Form" },
    { id: 879, name: "Wishiwashi\nSchool Form" },
    { id: 880, name: "Mareanie" },
    { id: 881, name: "Toxapex" },
    { id: 882, name: "Mudbray" },
    { id: 883, name: "Mudsdale" },
    { id: 884, name: "Dewpider" },
    { id: 885, name: "Araquanid" },
    { id: 886, name: "Fomantis" },
    { id: 887, name: "Lurantis" },
    { id: 888, name: "Morelull" },
    { id: 889, name: "Shiinotic" },
    { id: 890, name: "Salandit" },
    { id: 891, name: "Salazzle" },
    { id: 892, name: "Stufful" },
    { id: 893, name: "Bewear" },
    { id: 894, name: "Bounsweet" },
    { id: 895, name: "Steenee" },
    { id: 896, name: "Tsareena" },
    { id: 897, name: "Comfey" },
    { id: 898, name: "Oranguru" },
    { id: 899, name: "Passimian" },
    { id: 900, name: "Wimpod" },
    { id: 901, name: "Golisopod" },
    { id: 902, name: "Sandygast" },
    { id: 903, name: "Palossand" },
    { id: 904, name: "Pyukumuku" },
    { id: 905, name: "Type: Null" },
    { id: 906, name: "Silvally" },
    { id: 907, name: "Minior\nMeteor Form" },
    { id: 908, name: "Minior\nCore Form" },
    { id: 909, name: "Komala" },
    { id: 910, name: "Turtonator" },
    { id: 911, name: "Togedemaru" },
    { id: 912, name: "Mimikyu" },
    { id: 913, name: "Bruxish" },
    { id: 914, name: "Drampa" },
    { id: 915, name: "Dhelmise" },
    { id: 916, name: "Jangmo-o" },
    { id: 917, name: "Hakamo-o" },
    { id: 918, name: "Kommo-o" },
    { id: 919, name: "Tapu Koko" },
    { id: 920, name: "Tapu Lele" },
    { id: 921, name: "Tapu Bulu" },
    { id: 922, name: "Tapu Fini" },
    { id: 923, name: "Cosmog" },
    { id: 924, name: "Cosmoem" },
    { id: 925, name: "Solgaleo" },
    { id: 926, name: "Lunala" },
    { id: 927, name: "Nihilego" },
    { id: 928, name: "Buzzwole" },
    { id: 929, name: "Pheromosa" },
    { id: 930, name: "Xurkitree" },
    { id: 931, name: "Celesteela" },
    { id: 932, name: "Kartana" },
    { id: 933, name: "Guzzlord" },
    { id: 934, name: "Necrozma" },
    { id: 935, name: "Necrozma\nDusk Mane Necrozma" },
    { id: 936, name: "Necrozma\nDawn Wings Necrozma" },
    { id: 937, name: "Necrozma\nUltra Necrozma" },
    { id: 938, name: "Magearna" },
    { id: 939, name: "Marshadow" },
    { id: 940, name: "Poipole" },
    { id: 941, name: "Naganadel" },
    { id: 942, name: "Stakataka" },
    { id: 943, name: "Blacephalon" },
    { id: 944, name: "Zeraora" },
    { id: 945, name: "Meltan" },
    { id: 946, name: "Melmetal" },
    { id: 947, name: "Grookey" },
    { id: 948, name: "Thwackey" },
    { id: 949, name: "Rillaboom" },
    { id: 950, name: "Scorbunny" },
    { id: 951, name: "Raboot" },
    { id: 952, name: "Cinderace" },
    { id: 953, name: "Sobble" },
    { id: 954, name: "Drizzile" },
    { id: 955, name: "Inteleon" },
    { id: 956, name: "Skwovet" },
    { id: 957, name: "Greedent" },
    { id: 958, name: "Rookidee" },
    { id: 959, name: "Corvisquire" },
    { id: 960, name: "Corviknight" },
    { id: 961, name: "Blipbug" },
    { id: 962, name: "Dottler" },
    { id: 963, name: "Orbeetle" },
    { id: 964, name: "Nickit" },
    { id: 965, name: "Thievul" },
    { id: 966, name: "Gossifleur" },
    { id: 967, name: "Eldegoss" },
    { id: 968, name: "Wooloo" },
    { id: 969, name: "Dubwool" },
    { id: 970, name: "Chewtle" },
    { id: 971, name: "Drednaw" },
    { id: 972, name: "Yamper" },
    { id: 973, name: "Boltund" },
    { id: 974, name: "Rolycoly" },
    { id: 975, name: "Carkol" },
    { id: 976, name: "Coalossal" },
    { id: 977, name: "Applin" },
    { id: 978, name: "Flapple" },
    { id: 979, name: "Appletun" },
    { id: 980, name: "Silicobra" },
    { id: 981, name: "Sandaconda" },
    { id: 982, name: "Cramorant" },
    { id: 983, name: "Arrokuda" },
    { id: 984, name: "Barraskewda" },
    { id: 985, name: "Toxel" },
    { id: 986, name: "Toxtricity\nLow Key Form" },
    { id: 987, name: "Toxtricity\nAmped Form" },
    { id: 988, name: "Sizzlipede" },
    { id: 989, name: "Centiskorch" },
    { id: 990, name: "Clobbopus" },
    { id: 991, name: "Grapploct" },
    { id: 992, name: "Sinistea" },
    { id: 993, name: "Polteageist" },
    { id: 994, name: "Hatenna" },
    { id: 995, name: "Hattrem" },
    { id: 996, name: "Hatterene" },
    { id: 997, name: "Impidimp" },
    { id: 998, name: "Morgrem" },
    { id: 999, name: "Grimmsnarl" },
    { id: 1000, name: "Obstagoon" },
    { id: 1001, name: "Perrserker" },
    { id: 1002, name: "Cursola" },
    { id: 1003, name: "Sirfetch'd" },
    { id: 1004, name: "Mr. Rime" },
    { id: 1005, name: "Runerigus" },
    { id: 1006, name: "Milcery" },
    { id: 1007, name: "Alcremie" },
    { id: 1008, name: "Falinks" },
    { id: 1009, name: "Pincurchin" },
    { id: 1010, name: "Snom" },
    { id: 1011, name: "Frosmoth" },
    { id: 1012, name: "Stonjourner" },
    { id: 1013, name: "Eiscue\nIce Face" },
    { id: 1014, name: "Eiscue\nNoice Face" },
    { id: 1015, name: "Indeedee\nMale" },
    { id: 1016, name: "Indeedee\nFemale" },
    { id: 1017, name: "Morpeko\nFull Belly Mode" },
    { id: 1018, name: "Morpeko\nHangry Mode" },
    { id: 1019, name: "Cufant" },
    { id: 1020, name: "Copperajah" },
    { id: 1021, name: "Dracozolt" },
    { id: 1022, name: "Arctozolt" },
    { id: 1023, name: "Dracovish" },
    { id: 1024, name: "Arctovish" },
    { id: 1025, name: "Duraludon" },
    { id: 1026, name: "Dreepy" },
    { id: 1027, name: "Drakloak" },
    { id: 1028, name: "Dragapult" },
    { id: 1029, name: "Zacian\nCrowned Sword" },
    { id: 1030, name: "Zacian\nHero of Many Battles" },
    { id: 1031, name: "Zamazenta\nCrowned Shield" },
    { id: 1032, name: "Zamazenta\nHero of Many Battles" },
    { id: 1033, name: "Eternatus" },
    { id: 1034, name: "Eternatus\nEternamax" },
    { id: 1035, name: "Kubfu" },
    { id: 1036, name: "Urshifu\nSingle Strike Style" },
    { id: 1037, name: "Urshifu\nRapid Strike Style" },
    { id: 1038, name: "Zarude" },
    { id: 1039, name: "Regieleki" },
    { id: 1040, name: "Regidrago" },
    { id: 1041, name: "Glastrier" },
    { id: 1042, name: "Spectrier" },
    { id: 1043, name: "Calyrex" },
    { id: 1044, name: "Calyrex\nIce Rider" }
  ]
  constructor() { }

  setPokemonList(data: PokemonName[] = []) {
    this.pokemonList.next(data)
  }
}
