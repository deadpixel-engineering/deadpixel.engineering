<script lang="ts">
	const { data } = $props();
</script>

<div class="prose">
	{@html data.post.content}
</div>
