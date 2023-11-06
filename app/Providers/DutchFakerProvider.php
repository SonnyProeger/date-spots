<?php
namespace App\Providers;

use Faker\Provider\Base;

class DutchFakerProvider extends Base
{
    protected static array $cities = ['Amsterdam', 'Rotterdam', 'The Hague (Den Haag)', 'Utrecht', 'Eindhoven', 'Tilburg', 'Groningen', 'Almere', 'Breda', 'Nijmegen', 'Enschede', 'Haarlem', 'Arnhem', 'Zaanstad', 'Amersfoort', 'Apeldoorn', 'Hoofddorp', 'Maastricht', 'Leeuwarden', 'Leiden', 'Dordrecht', 'Zoetermeer', 'Zwolle', 'Deventer', 'Delft', 'Alkmaar',
        'Heerlen', 'Helmond', 'Hilversum', 'Oss', 'Sittard-Geleen', 'Amstelveen', 'Roosendaal', 'Purmerend', 'Lelystad', 'Almelo', 'Gouda', 'Hoorn', 'Vlaardingen', 'Assen', 'Bergen op Zoom', 'Capelle aan den IJssel', 'Veenendaal', 'Katwijk', 'Zeist', 'Nieuwegein', 'Roermond', 'Den Helder', 'Doetinchem', 'Hoogeveen', 'Terneuzen', 'Leusden', 'Harderwijk',
        'Maassluis', 'Culemborg', 'Zeewolde', 'Venray', 'Heusden', 'Medemblik', 'Laren', 'Nunspeet', 'Elst', 'Zandvoort', 'Bodegraven', 'Leerdam', 'Zaltbommel', 'Weesp', 'Wageningen', 'Nijkerk', 'Veghel', 'Oosterhout', 'Ridderkerk', 'Huizen', 'Pijnacker', 'Maarssen', 'Venlo', 'De Bilt', 'Wassenaar', 'Heemstede', 'Nuth', 'Geleen', 'Middelburg', 'Beverwijk',
        'Woerden', 'Veendam', 'Ermelo', 'Delfzijl', 'Sliedrecht', 'Zevenaar', 'Zwijndrecht', 'Uithoorn', 'Scheveningen', 'Papendrecht', 'Baarn', 'Bussum', 'Winschoten', 'Rijswijk', 'Best', 'Goirle', 'Lisse', 'Lichtenvoorde', 'Volendam', 'Hellevoetsluis', 'Gorinchem', 'Lunteren', 'Krimpen aan den IJssel', 'Laren', 'Geldrop', 'Naarden', 'Lochem', 'Haren', 'Epe',
        'Mijdrecht', 'Hardenberg', 'Nieuw-Lekkerland', 'Rhenen', 'Sassenheim', 'Urk', 'Veldhoven', 'Houten', 'Hendrik-Ido-Ambacht', 'Heemskerk', 'Borculo', 'Tongelre', 'Leek', 'Drimmelen', 'Dongen', 'Voorschoten', 'Oisterwijk', 'Tilburg', 'Pijnacker-Nootdorp', 'Goeree-Overflakkee', 'Heerenveen', 'Dordrecht', 'Roosendaal', 'Purmerend', 'Lelystad', 'Almelo', 'Gouda',
        'Hoorn', 'Vlaardingen', 'Assen', 'Bergen op Zoom', 'Capelle aan den IJssel', 'Veenendaal', 'Katwijk', 'Zeist', 'Nieuwegein', 'Roermond', 'Den Helder', 'Doetinchem', 'Hoogeveen', 'Terneuzen', 'Leusden', 'Harderwijk', 'Maassluis', 'Culemborg', 'Zeewolde', 'Venray', 'Heusden', 'Medemblik', 'Laren', 'Nunspeet', 'Elst', 'Zandvoort', 'Bodegraven', 'Leerdam', 'Zaltbommel',
        'Weesp', 'Wageningen', 'Nijkerk', 'Veghel', 'Oosterhout', 'Ridderkerk', 'Huizen', 'Pijnacker', 'Maarssen', 'Venlo', 'De Bilt', 'Wassenaar', 'Heemstede', 'Nuth', 'Geleen', 'Middelburg', 'Beverwijk', 'Woerden', 'Veendam', 'Ermelo', 'Delfzijl', 'Sliedrecht', 'Zevenaar', 'Zwijndrecht', 'Uithoorn', 'Scheveningen', 'Papendrecht', 'Baarn', 'Bussum', 'Winschoten', 'Rijswijk',
        'Best', 'Goirle', 'Lisse', 'Lichtenvoorde', 'Volendam', 'Hellevoetsluis', 'Gorinchem', 'Lunteren', 'Krimpen aan den IJssel', 'Laren', 'Geldrop', 'Naarden', 'Lochem', 'Haren', 'Epe', 'Mijdrecht', 'Hardenberg', 'Nieuw-Lekkerland', 'Rhenen', 'Sassenheim', 'Urk', 'Veldhoven', 'Houten', 'Hendrik-Ido-Ambacht', 'Heemskerk', 'Borculo', 'Tongelre', 'Leek', 'Drimmelen', 'Dongen',
        'Voorschoten', 'Oisterwijk', 'Tilburg', 'Pijnacker-Nootdorp', 'Goeree-Overflakkee', 'Heerenveen', 'Aalten', 'Vlagtwedde', 'Wateringen', 'Haaksbergen', 'Achtkarspelen', 'Winterswijk', 'Geldermalsen', 'Oegstgeest', 'Hardenberg', 'Hendrik-Ido-Ambacht', 'Werkendam', 'Sint-Oedenrode', 'Beverwijk', 'Coevorden', 'Beek', 'Uden', 'Uitgeest', 'Sint-Michielsgestel', 'Vianen', 'Meppel',
        'Maasgouw', 'Dalfsen', 'Weesp', 'Geldermalsen', 'Waddinxveen', 'Zeewolde', 'Dronten', 'Werkendam', 'Oss', 'Borger-Odoorn', 'Nunspeet', 'Leerdam', 'Nuenen, Gerwen en Nederwetten', 'Menterwolde', 'Nieuw-Lekkerland', 'Zoeterwoude', 'Uithoorn', 'Hengelo', 'Bloemendaal', 'Rijnwaarden', 'Heemstede', 'Cuijk', 'Bunnik', 'De Bilt', 'Rucphen', 'Bladel', 'Rijssen-Holten', 'Zevenaar',
        'Nieuwegein', 'Eijsden', 'Twenterand', 'Binnenmaas', 'Heerenveen', 'Medemblik', 'Hengelo', 'Wierden', 'Goirle', 'Zeist', 'Hoorn', 'Steenwijkerland', 'Maassluis', 'Oldenzaal', 'Wassenaar', 'Barneveld', 'Zederik', 'Bunschoten', 'Goor', 'Harderwijk', 'Maasdonk', 'Leusden', 'Hoogezand-Sappemeer', 'Middelburg', 'Hattem', 'Kollumerland en Nieuwkruisland', 'Veere', 'Woudenberg', 'Dongen', 'Kerkrade', 'Oegstgeest'
    ];


    protected static array $states = ['Drenthe', 'Gelderland', 'Groningen', 'Flevoland', 'Friesland', 'Noord-Brabant', 'Noord-Holland', 'Overijssel', 'Limburg', 'Utrecht', 'Zeeland', 'Zuid-Holland'];


    public function dutchCity()
    {
        return $this->randomElement(static::$cities);
    }

    public function dutchState()
    {
        return $this->randomElement(static::$states);
    }
}
