<script>
	export let href = '',
		color = '';
</script>

<a class="flex text-xl group" {href}>
	<div
		class="my-auto w-7 h-7 transition-colors text-neutral-400 group-hover:{color} group-focus:{color}"
	>
		<slot />
	</div></a
>
