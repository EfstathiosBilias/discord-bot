const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
		category: 'utility',
	async execute(interaction) {
		await interaction.reply(`TServer name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	},
};