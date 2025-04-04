import { Category } from './types';

export const categories: Category[] = [
    {
        id: "1",
        name: "Electronics",
        slug: "electronics",
        count: 120
    },
    {
        id: "2",
        name: "Home Appliances",
        slug: "home-appliances",
        count: 80,
        subcategories: [
            {
                id: "3",
                name: "Kitchen Appliances",
                slug: "kitchen-appliances",
                count: 35
            },
            {
                id: "4",
                name: "Cleaning Appliances",
                slug: "cleaning-appliances",
                count: 45
            }
        ]
    },
    {
        id: "5",
        name: "Security Systems",
        slug: "security-systems",
        count: 50
    },
    {
        id: "10",
        name: "Metering Solutions",
        slug: "metering-solutions",
        count: 100,
        subcategories: [
            {
                id: "11",
                name: "Smart Meters",
                slug: "smart-meters",
                count: 40
            },
            {
                id: "12",
                name: "Water Meters",
                slug: "water-meters",
                count: 30
            },
            {
                id: "13",
                name: "Gas Meters",
                slug: "gas-meters",
                count: 25
            }
        ]
    },
    {
        id: "17",
        name: "Clothing",
        slug: "clothing",
        count: 200
    },
    {
        id: "26",
        name: "Health & Beauty",
        slug: "health-beauty",
        count: 110,
        subcategories: [
            {
                id: "27",
                name: "Skincare",
                slug: "skincare",
                count: 60
            },
            {
                id: "28",
                name: "Makeup",
                slug: "makeup",
                count: 50
            }
        ]
    },
    {
        id: "32",
        name: "Construction Materials",
        slug: "construction-materials",
        count: 75
    },
    {
        id: "33",
        name: "Electrical Equipment",
        slug: "electrical-equipment",
        count: 60
    },
    {
        id: "34",
        name: "Safety Equipment",
        slug: "safety-equipment",
        count: 45
    },
    {
        id: "35",
        name: "Communication Devices",
        slug: "communication-devices",
        count: 55
    },
    {
        id: "36",
        name: "Sports",
        slug: "sports",
        count: 84
    },
    {
        id: "37",
        name: "Accessories",
        slug: "accessories",
        count: 105
    },
];