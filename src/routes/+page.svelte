<script lang="ts">
  import DeadPixelLogo from '$lib/components/dead-pixel-logo.svelte';

  let ghostColor = '#17191c';
  let pixelColor = '#565b66';
</script>

<svelte:head>
  <title>Dead Pixel</title>
</svelte:head>

<main class="content">
  <section class="controls">
    <label>
      <span>Ghost</span>
      <span class="hex-color">{ghostColor}</span>
      <input type="color" bind:value={ghostColor} />
    </label>
    <label>
      <span>Pixel</span>
      <span class="hex-color">{pixelColor}</span>
      <input type="color" bind:value={pixelColor} />
    </label>
  </section>
  <DeadPixelLogo --ghost-color={ghostColor} --pixel-color={pixelColor} />
</main>

<style>
  .content {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .controls {
    display: flex;
    gap: 2rem;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    align-items: center;
    gap: 0.5rem;
  }

  .hex-color {
    font-size: 0.8rem;
    color: #565b66;
    user-select: all;
  }

  input[type='color'] {
    border: none;
    border-radius: 50%;
    padding: 0;
    padding-inline: 0;
    padding-block: 0;
    width: 40px;
    height: 40px;
  }

  input[type='color']::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  input[type='color']::-webkit-color-swatch {
    border-width: 0;
    padding: 0;
  }
</style>
