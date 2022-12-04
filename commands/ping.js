const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.deferReply({ ephemeral: true });
		await wait(1000);
		await interaction.editReply({ content: 'Secret Pong!'});
		await wait(1000);
		await interaction.followUp({ content: 'Pong again!', ephemeral: true});
	},
};