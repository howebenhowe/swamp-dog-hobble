import { defineConfig } from 'vitepress'

export default defineConfig({
	title: "Swamp Dog Hobble",
	appearance: true,
	lastUpdated: true,
	description: "An intentional community in Brooklyn",
	cleanUrls: true,
	head: [
		['link', { rel: 'icon', href: '/public/favicon.ico' }],
	],
	themeConfig: {
		nav: [
			{ text: 'Manifesto', link: '/manifesto' },
			{ text: 'Norms', link: '/norms' },
			{ text: 'Finances', link: '/finances' },
		],

		outline: 2,

		socialLinks: [
			{ icon: { svg: '⚓' }, link: 'http://davyjonezlockr.gay/', ariaLabel: "Davy's personal website" }
		]
	}
})
