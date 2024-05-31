export interface MenuItemTypes {
	key: string
	label: string
	isTitle?: boolean
	icon?: string
	url?: string
	badge?: {
		variant: string
		text: string
	}
	parentKey?: string
	target?: string
	children?: MenuItemTypes[]
}

const MENU_ITEMS: MenuItemTypes[] = [
	{
		key: 'navigation',
		label: 'Navigation',
		isTitle: true,
	},
	{
		key: 'dashboard',
		label: 'Dashboards',
		isTitle: false,
		icon: 'ri-home-4-line',
		badge: {
			variant: 'bg-success rounded-full',
			text: '2',
		},
		children: [
			{
				key: 'forms-validation',
				label: 'Home',
				url: '/ui/tables/data-tables',
				parentKey: 'forms',
			},
			{
				key: 'tables-data',
				label: 'Patient Details',
				url: '/ui/forms/validation',
				parentKey: 'tables',
			},
		],
	},
]

export { MENU_ITEMS }
