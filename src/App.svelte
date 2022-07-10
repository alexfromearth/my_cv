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
			<div class="title">SKILLS</div>
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
		display: flex;
		justify-content: center;
		align-items: center;
		background-image: url('/assets/background.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		min-width: 1500px;
		font-family: "Mr Eaves Reg", serif
	}

	.title {
		margin-left: 50px;
		margin-bottom: 20px;
		font-size: 32px;
		width: 235px;
		letter-spacing: 3px;
		font-family: "Mr Eaves Bold", serif;
	}

	.info-wrapper {
		height: 200px;
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
		width: 550px;
		margin-bottom: 45px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>