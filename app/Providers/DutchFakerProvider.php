<?php

namespace App\Providers;

use Faker\Provider\Base;

class DutchFakerProvider extends Base
{
	protected static array $cities = [
		'Amsterdam', 'Rotterdam', 'The Hague (Den Haag)', 'Utrecht', 'Eindhoven', 'Tilburg', 'Groningen', 'Almere',
	];


	protected static array $states = [
		'Drenthe', 'Gelderland', 'Groningen', 'Flevoland', 'Friesland', 'Noord-Brabant', 'Noord-Holland', 'Overijssel',
		'Limburg', 'Utrecht', 'Zeeland', 'Zuid-Holland'
	];


	public function dutchCity() {
		return $this->randomElement(static::$cities);
	}

	public function dutchState() {
		return $this->randomElement(static::$states);
	}
}
