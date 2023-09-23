import { defineConfig } from 'vitepress'

export default defineConfig({
	title: "Swamp Dog Hobble",
	description: "An intentional community in Brooklyn",
	cleanUrls: true,
	head: [
		['link', { rel: 'icon', href: '/public/favicon/favicon.ico' }],
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/public/favicon/apple-touch-icon.png' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/public/favicon/favicon-32x32.png' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/public/favicon/favicon-16x16.png' }],
		['link', { rel: 'manifest', href: '/public/favicon/site.webmanifest' }],
	],
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
