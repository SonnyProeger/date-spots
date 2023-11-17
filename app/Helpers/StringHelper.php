<?php

namespace App\Helpers;

class StringHelper
{
	public static function replaceHyphensWithSpaces($string): array|string {
		// Use str_replace to replace hyphens with spaces
		return str_replace('-', ' ', $string);
	}
}
