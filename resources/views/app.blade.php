<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

	<title inertia>{{ config('app.name', 'Laravel') }}</title>

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.bunny.net">
	<link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet"/>

	<!-- Scripts -->
	@routes
	@vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
	@inertiaHead
	<script>
        function initMap() {
            // This is an empty or minimal callback function
            // It ensures that the Google Maps API is loaded
        }
	</script>
	<script src="https://maps.googleapis.com/maps/api/js?key={{env('GOOGLE_API_KEY')}}&libraries=places&callback=initMap"></script>

</head>
<body class="font-sans antialiased">
@inertia
</body>
</html>
