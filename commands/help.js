const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription("allnighter's Notion"),
	async execute(interaction) {
		await interaction.reply("[Discord.js 개발기를 확인하세요](https://allnighter.notion.site/Discord-js-9029de00881042a68399abec14e6b32f)");
	},
};