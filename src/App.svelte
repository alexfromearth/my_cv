<script lang="ts">
	import Board from "./components/Board.svelte";
	import Section from "./components/Section.svelte";
	import Title from "./components/Title.svelte";
	import AdditionalInfo from "./components/AdditionalInfo.svelte";
	import { IData, storeData } from "./store";
	import TextGroup from "./components/TextGroup.svelte";
	import Tag from "./components/Tag.svelte";

	let data: IData;

	storeData.subscribe(value => {
		data = value;
	});
</script>

<main>
	<Board>
		<div class="info-wrapper">
			<Title fullName={data.fullName} profession={data.profession}/>
			<AdditionalInfo contacts={data.contacts} addressInfo={data.addressInfo}/>
		</div>
		<div>
			<Section title='SKILLS'>
			</Section>
			<div class="tags">
				<div class="tags-list">
					{#each data.skills as skill}
						<Tag text={skill}/>
					{/each}
				</div>
			</div>
			<Section title='WORK EXPERIENCE'>
				{#each data.workExp as { period, title, description, achivements }}
					<TextGroup title={title} period={period} description={description} achivements={achivements}/>
				{/each}
			</Section>
			<Section title="EDUCATION">
				{#each data.education as {period, title, description }}
					<TextGroup title={title} period={period} description={description}/>
				{/each}
			</Section>
		</div>
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

	.tags {
		display: flex;
		justify-content: center;
	}

	.tags-list {
		width: 500px;
		margin-bottom: 45px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>