<script lang="ts">
	import Board from "./components/Board.svelte";
	import Section from "./components/Section.svelte";
	import Title from "./components/Title.svelte";
</script>

<main>
	<Board>
		<div class="info-wrapper">
			<Title fullName="Aleksey Shirokov" profession="Software Engineer"/>
		</div>
			<Section>
				Aleksey Shirokov CV!
			</Section>
	</Board>
</main>

<style>

	main {
		position: relative;
		height: 100vh;
		background-image: url('/assets/background.jpg');
		background-repeat: no-repeat;
		font-family: "Mr Eaves Reg", serif
	}

	.info-wrapper {
		height: 280px;
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

</style>