type JourneyEntry = {
	period: string;
	title: string;
	description: string;
};

type SocialLink = {
	label: string;
	href: string;
};

export const profile = {
	displayName: '周书玉 Suri',
	tagline: '春风得意马蹄疾 一日看尽长安花  Flower🌸',
	introduction: '这里是一片自留地',
	introductionEn: 'This is a personal blog.',
	portrait: {
		src: '/blog-selfie.jpg',
		alt: 'self portrait',
	},
	interests: ['Tech','Music','Movie','Game','Travel','Creativity','Food'],
	journey: [{
		period: '2024 — 至今',
		title: '记录生活',
		description: '开始搭建自己的个人网站，记录生活、兴趣与日常思考。',
        },
        {
            period: '2025',
            title: '探索新的兴趣',
            description: '持续阅读、观看电影，探索科技与数字生活。',
        },
    ] as JourneyEntry[],
	thingsILove: [
		{ category: '书籍', english: 'BOOKS', value: '我有霸总光环' },
		{ category: '音乐', english: 'MUSIC', value: '牵挂-曾沛慈' },
		{ category: '电视剧', english: 'Tv series', value: 'ポリティカルパン' },
		{ category: '游戏', english: 'GAMES', value: 'Sims4' },
		{ category: '旅行', english: 'TRAVEL', value: 'Seoul' },
		{ category: '其他', english: 'OTHERS', value: 'delicious food' },
	],
	currently: [
		{ label: '正在学习', english: 'LEARNING', value: 'AI agent' },
		{ label: '正在阅读', english: 'READING', value: '生活系唯一玩家' },
		{ label: '正在制作', english: 'MAKING', value: '娱乐综艺切片' },
	],
	contact: {
		email: '1131119069@qq.com',
		socialLinks: [{
			label: 'GitHub',
			href: 'https://github.com/Suriyoo'
		}] as SocialLink[],
	},
};