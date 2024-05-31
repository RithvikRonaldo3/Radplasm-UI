// avatar
import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'
import avatar10 from '@/assets/images/users/avatar-10.jpg'
import { Employee } from './types'

// basic tables
interface TableRecord {
	id: number
	name: string
	phoneNo: string
	dob: string
	country: string
	accountNo: string
	image: string
	cell: string
	activeClass?: string
}

interface ExpandableRecord {
	product: string
	courier: string
	variant: string
	now: number
	status: string
	price: string
	Quantity: string
	Amount: string
}

interface NestedRecords {
	name: string
	phoneNo: string
	dob: string
	country: string
	children?: NestedRecords[]
}

// basic tables
const records: TableRecord[] = [
	{
		id: 1,
		name: 'Risa D. Pearson',
		phoneNo: '336-508-2157',
		dob: 'July 24, 1950',
		country: 'India',
		accountNo: 'AC336 508 2157',
		image: avatar1,
		cell: 'Cell',
		activeClass: 'bg-gray-50 dark:bg-gray-900',
	},
	{
		id: 2,
		name: 'Ann C. Thompson',
		phoneNo: '646-473-2057',
		dob: 'January 25, 1959',
		country: 'USA',
		accountNo: 'SB646 473 2057',
		image: avatar10,
		cell: 'Cell',
	},
	{
		id: 3,
		name: 'Paul J. Friend',
		phoneNo: '281-308-0793',
		dob: 'September 1, 1939',
		country: 'Canada',
		accountNo: 'DL281 308 0793',
		image: avatar5,
		cell: 'Cell',
	},
	{
		id: 4,
		name: 'Linda G. Smith',
		phoneNo: '606-253-1207',
		dob: 'May 3, 1962',
		country: 'Brazil',
		accountNo: 'CA269 714 6825',
		image: avatar2,
		cell: 'Cell',
	},
]

const expandablerecords: ExpandableRecord[] = [
	{
		product: 'ASOS Ridley High Waist',
		courier: 'FedEx',
		variant: 'success',
		now: 100,
		status: 'Delivered',
		price: '$79.49',
		Quantity: '82',
		Amount: '6,518.18',
	},
	{
		product: 'Marco Lightweight Shirt',
		courier: 'DHL',
		variant: 'warning',
		now: 50,
		status: 'Shipped',
		price: '$128.50',
		Quantity: '37',
		Amount: '4,754.50',
	},
	{
		product: 'Half Sleeve Shirt',
		courier: 'Bright',
		variant: 'info',
		now: 25,
		status: 'Order Received',
		price: '$39.99',
		Quantity: '64',
		Amount: '2,559.36',
	},
	{
		product: 'Lightweight Jacket',
		courier: 'FedEx',
		variant: 'success',
		now: 100,
		status: 'Delivered',
		price: '$20.00',
		Quantity: '184',
		Amount: '3,680.00',
	},
	{
		product: 'Cargo Pant & Shirt',
		courier: 'FedEx',
		variant: 'danger',
		now: 10,
		status: 'Payment Failed',
		price: '$28.49',
		Quantity: '69',
		Amount: '1,965.81',
	},
	{
		product: 'ASOS Ridley High Waist',
		courier: 'FedEx',
		variant: 'danger',
		now: 10,
		status: 'Payment Failed',
		price: '$79.49',
		Quantity: '82',
		Amount: '6,518.18',
	},
]

const nestedrecords: NestedRecords[] = [
	{
		name: 'Risa D. Pearson',
		phoneNo: '336-508-2157',
		dob: 'July 24, 1950',
		country: 'india',
		children: [
			{
				name: 'Risa D. Pearson',
				phoneNo: '336-508-2157',
				dob: 'July 24, 1950',
				country: 'india',
			},
			{
				name: 'Ann C. Thompson',
				phoneNo: '646-473-2057',
				dob: 'January 25, 1959',
				country: 'Canada',
			},
		],
	},
	{
		name: 'Linda G. Smith',
		phoneNo: '606-253-1207',
		dob: 'September 2, 1939',
		country: 'Belgium',
	},
]

const dataTableRecords: Employee[] = [
	{
		id: 1,
		firstname: 'Jonathan',
		lastname: 'Anderson',
		clinic: 'Harmony Health Clinic',
		date: '1/09/2004',
		time: '9 AM'
	},
	{
		id: 2,
		firstname: 'Harold',
		lastname: 'Bennett',
		clinic: 'Sunrise Medical Center',
		date: '1/09/2003',
		time: '8:00 AM',
	},
	{
		id: 3,
		firstname: 'Shannon',
		lastname: 'Carter',
		clinic: 'Vitality Family Health',
		date: '1/09/2003',
		time: '11:15 AM		',
	},
	{
		id: 4,
		firstname: 'Robert',
		lastname: 'Diaz',
		clinic: 'Evergreen Wellness Clinic',
		date: '1/09/2003',
		time: '1:00 PM		',
	},
	{
		id: 5,
		firstname: 'Noel',
		lastname: 'Evans',
		clinic: 'Peak Performance Health',
		date: '1/09/2003',
		time: '2:45 PM		',
	},
	{
		id: 6,
		firstname: 'Traci',
		lastname: 'Garcia',
		clinic: 'Lakeside Medical Group',
		date: '1/09/2003',
		time: '4:00 PM		',
	},
	{
		id: 7,
		firstname: 'Kerry',
		lastname: 'Hughes',
		clinic: 'Clearview Health Services',
		date: '1/09/2003',
		time: '5:30 PM		',
	},
	{
		id: 8,
		firstname: 'Patsy',
		lastname: 'Johnson',
		clinic: 'Midtown Medical Associates',
		date: '1/09/2003',
		time: '7:00 PM		',
	},
	{
		id: 9,
		firstname: 'Cathy',
		lastname: 'Patel',
		clinic: 'Healing Hands Clinic',
		date: '1/09/2003',
		time: '9:30 AM		',
	},
	{
		id: 10,
		firstname: 'Tyrone',
		lastname: 'Thompson',
		clinic: 'Riverside Care Center',
		date: '1/09/2003',
		time: '2:45 PM		',
	},
]

export { records, expandablerecords, nestedrecords, dataTableRecords }
