import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Open Game Dev',
			social: {
				github: 'https://github.com/emistorrs/opengamedev.org',
				twitter: "https://twitter.com/EmiStorrs",
				email: "mailto:emi@dataerrata.com"
			},
			sidebar: [
				{ label: "Home", link: '/'},
				{ label: "The Framework", link: '/theframework'},
				{ label: "Cohort 1", link: '/cohort1'},
				{ label: "Credits", link: '/credits'},
			],
		}),
	],
});
