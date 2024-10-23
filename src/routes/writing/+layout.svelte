<script lang="ts">
	let { children, data } = $props();
</script>

<section class="container grid grid-cols-1 md:grid-cols-4">
	<nav>
		<ul>
			{#each data.posts as post (post.slug)}
				<li>
					<a href="/writing/{post.slug}" class="underline underline-offset-2 decoration-cyan-200">
						{post.title}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="col-span-3">
		{@render children()}
	</div>
</section>
