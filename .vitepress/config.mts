import { defineConfig } from 'vitepress'

const sidebar_links = {
	text: 'Contact and Friends',
	items: [
		{
			text: 'swampdog@fastmail.com',
			link: 'mailto:swampdog@fastmail.com'
		},
		{
			text: 'FIC',
			link: 'https://www.ic.org/directory/swamp-dog-hobble/'
		},
		{
			text: 'instagram',
			link: 'https://www.instagram.com/swampdogmutualaid/'
		},
		{
			text: '⚓ Davy\'s site',
			link: 'http://davyjonezlockr.gay/'
		},
		{
			text: '🔪 Ben\'s site',
			link: 'http://howebenhowe.com/'
		}
	]
}

export default defineConfig({
	title: "Swamp Dog Hobble",
	appearance: true,
	lastUpdated: true,
	description: "An intentional community in Brooklyn",
	cleanUrls: true,
	ignoreDeadLinks: true,
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
			{ text: 'Kitchen', link: '/kitchen/' },
		],
		sidebar: {
			'/kitchen/': [
				{
					text: 'Kitchen',
					items: [
						{ text: 'Sourdough Bread', link: '/kitchen/bread/' },
						{ text: 'Salsa Macha', link: '/kitchen/salsa-macha/' },
						{ text: 'Cornbread', link: '/kitchen/cornbread/' },
						{ text: 'Waffles', link: '/kitchen/waffles/' }
					]
				}
			],
			'/distro/': [
				{
					text: 'Distro',
					items: [
						{ text: 'Cooking', link: '/distro/' },
						{ text: 'Logistics', link: '/distro/logistics' },
						{ text: 'Chronicle', link: '/distro/chronicle' },
						{ text: 'Donate/Volunteer', link: '/distro/donate-volunteer' },
						{ text: 'Upcoming Timeline', link: '/distro/upcoming-timeline' },
						{ text: 'Recipes', link: '/distro/recipes/' },
						{ text: 'Ratios', link: '/distro/recipes/ratios' },
						{ text: 'Methods', link: '/distro/recipes/methods' }
					]
				},
				sidebar_links
			],
			'/': [sidebar_links]
		},
		outline: 2,
		socialLinks: [
			{ icon: 'instagram', link: 'https://www.instagram.com/swampdogmutualaid/', ariaLabel: 'SwampDog mutual aid instagram' }
		]
	}
})
