<script>
	export let className = '';
</script>

<div class="flex md:max-w-[42rem] p-2 bg-black/75 rounded-lg shadow-lg {className}">
	<slot />
</div>
