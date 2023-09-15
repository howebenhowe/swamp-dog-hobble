import { defineConfig } from 'vitepress'

export default defineConfig({
	title: "Swamp Dog Hobble",
	description: "An intentional community in Brooklyn",
	cleanUrls: true,
	themeConfig: {
		nav: [
			{ text: 'Manifesto', link: '/manifesto' },
			{ text: 'Norms', link: '/norms' }
		],

		outline: 2,

		socialLinks: [
			{ icon: { svg: '⚓' }, link: 'http://davyjonezlockr.gay/', ariaLabel: "Davy's personal website" }
		]
	}
})
