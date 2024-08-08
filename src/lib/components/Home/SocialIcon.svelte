<script>
	export let href = '',
		className = '';
</script>

<a class="flex text-xl group" {href}>
	<div class="my-auto w-7 h-7 transition-colors text-neutral-400 {className}">
		<slot />
	</div></a
>
