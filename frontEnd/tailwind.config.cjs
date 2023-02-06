/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1440px'
		},
		extend: {
			colors: {
				colorTitle: '#3A3A3A',
				colorText: '#595959',
				colorBgbtn: '#F6CD4C',
				colorBgHeader: '#595959',
				colorBgFooter: '#595959',
				colorBgServices: '#595959',
				colorSofftYellow: '#F3E9BD',
				colorSoftGrray: '##E1E3E5'
			},
			fontFamily: {
				sans: ['urbanist', 'sans-serif']
			}
		},
		plugins: [require('daisyui')]
	}
};
