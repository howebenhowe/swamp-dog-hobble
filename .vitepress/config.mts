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
			{ text: 'images', link: '/images' },
			{ text: 'Distro Handbook', link: '/distro/' },
		],
		sidebar: {
			'/distro/': [
				{
					text: 'Distro',
					items: [
						{ text: 'Cooking', link: '/distro/' },
						{ text: 'Logistics', link: '/distro/logistics' },
						{ text: 'Chronicle', link: '/distro/chronicle' },
						{ text: 'Donate/Volunteer', link: '/distro/donate-volunteer' }
					]
				}
			],
		},
		outline: 2,
		socialLinks: [
			{ icon: { svg: '⚓' }, link: 'http://davyjonezlockr.gay/', ariaLabel: "Davy's personal website" },
			{ icon: { svg: '🔪' }, link: 'http://howebenhowe.com/', ariaLabel: "Ben's personal website" }
		]
	}
})
