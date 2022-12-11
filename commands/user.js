const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		const locales = {
			ko: `${interaction.user}(${interaction.user.username})에 의해 실행된 커맨드\n가입일: ${interaction.member.joinedAt}`
		};
		await interaction.reply(locales[interaction.locale] ?? `This command was run by ${interaction.user}(${interaction.user.username}), who joined on [${interaction.member.joinedAt}].`);
	},
};