const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
		const locales = {
			ko: `서버 이름: ${interaction.guild.name}\n인원: ${interaction.guild.memberCount}`
		};
		await interaction.reply(locales[interaction.locale] ?? `This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
	},
};