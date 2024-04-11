<script>
	import '../app.css';
</script>

<div class="h-screen grid grid-cols-16 grid-rows-12">
	<div class="col-span-8 bg-red-100"></div>
	<div class="row-span-12 col-span-2 bg-black/50"></div>
	<div class="col-span-4">
		<slot />
	</div>
	<div class="row-span-12 col-span-2 bg-black/50"></div>
</div>

<div class="w-screen bg-blue-100">footer shit</div>
