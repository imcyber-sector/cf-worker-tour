const _posts = [
	{
    "_id": "6376baa5fb13b282ffc8afef",
    "name": "berlin tour",
    "options": [
        {
            "id": "berlin tour basic",
            "default": false,
            "name": "basic tour",
            "requiredContactFields": [
                "emailAddress",
                "phoneNumber"
            ],
            "units": [
                {
                    "id": "child",
                    "name": "minor",
                    "pricing": [
                        {
                            "currency": "eur",
                            "currencyPrecision": 2,
                            "price":1499
                        },
                        {
                            "currency": "usd",
                            "currencyPrecision": 2,
                            "price":1999
                        }
                    ]
                },
                {
                    "id": "adult",
                    "name": "adult",
                    "pricing": [
                        {
                            "currency": "eur",
                            "currencyPrecision": 2,
                            "price": 2499
                        },
                        {
                            "currency": "usd",
                            "currencyPrecision": 2,
                            "price": 2999
                        }
                    ]
                },
                {
                    "id": "senior",
                    "name": "senior",
                    "pricing": [
                        {
                            "currency": "eur",
                            "currencyPrecision": 2,
                            "price": 1999
                        },
                        {
                            "currency": "usd",
                            "currencyPrecision": 2,
                            "price": 2499
                        }
                    ]
                }
            ]
        },
        {
            "id": "berlin tour vip",
            "default": false,
            "name": "vip tour",
            "requiredContactFields": [
                "emailAddress",
                "phoneNumber"
            ],
            "units": [
                {
                    "id": "child",
                    "name": "minor",
                    "pricing": [
                        {
                            "currency": "eur",
                            "currencyPrecision": 2,
                            "price": 2499
                        },
                        {
                            "currency": "usd",
                            "currencyPrecision": 2,
                            "price": 3499
                        }
                    ]
                },
                {
                    "id": "adult",
                    "name": "adult",
                    "pricing": [
                        {
                            "currency": "eur",
                            "currencyPrecision": 2,
                            "price": 3499
                        },
                        {
                            "currency": "usd",
                            "currencyPrecision": 2,
                            "price": 4499
                        }
                    ]
                },
                {
                    "id": "senior",
                    "name": "senior",
                    "pricing": [
                        {
                            "currency": "eur",
                            "currencyPrecision": 2,
                            "price": 2999
                        },
                        {
                            "currency": "usd",
                            "currencyPrecision": 2,
                            "price": 3899
                        }
                    ]
                }
            ]
        }
    ],
    "defaultCurrency": "eur",
    "availableCurrencies": [
        "eur",
        "usd"
    ]
}, 
{
	"_id": "6376bb27fb13b282ffc8aff0",
	"name": "spain tour",
	"options": [
			{
					"id": "spain tour basic",
					"default": false,
					"name": "basic tour",
					"requiredContactFields": [
							"emailAddress",
							"phoneNumber"
					],
					"units": [
							{
									"id": "child",
									"name": "minor",
									"pricing": [
											{
													"currency": "eur",
													"currencyPrecision": 2,
													"price": 19999
											},
											{
													"currency": "usd",
													"currencyPrecision": 2,
													"price": 24999
											}
									]
							},
							{
									"id": "adult",
									"name": "adult",
									"pricing": [
											{
													"currency": "eur",
													"currencyPrecision": 2,
													"price": 29999
											},
											{
													"currency": "usd",
													"currencyPrecision": 2,
													"price": 34999
											}
									]
							},
							{
									"id": "senior",
									"name": "senior",
									"pricing": [
											{
													"currency": "eur",
													"currencyPrecision": 2,
													"price": 19999
											},
											{
													"currency": "usd",
													"currencyPrecision": 2,
													"price": 29999
											}
									]
							}
					]
			},
			{
					"id": "spain tour vip",
					"default": false,
					"name": "vip tour",
					"requiredContactFields": [
							"emailAddress",
							"phoneNumber"
					],
					"units": [
							{
									"id": "child",
									"name": "minor",
									"pricing": [
											{
													"currency": "eur",
													"currencyPrecision": 2,
													"price": 49999
											},
											{
													"currency": "usd",
													"currencyPrecision": 2,
													"price": 54999
											}
									]
							},
							{
									"id": "adult",
									"name": "adult",
									"pricing": [
											{
													"currency": "eur",
													"currencyPrecision": 2,
													"price": 79999
											},
											{
													"currency": "usd",
													"currencyPrecision": 2,
													"price": 84999
											}
									]
							},
							{
									"id": "senior",
									"name": "senior",
									"pricing": [
											{
													"currency": "eur",
													"currencyPrecision": 2,
													"price": 59999
											},
											{
													"currency": "usd",
													"currencyPrecision": 2,
													"price": 69999
											}
									]
							}
					]
			}
	],
	"defaultCurrency": "eur",
	"availableCurrencies": [
			"eur",
			"usd"
	]
},
];

export default class PostsStore {  
	async all() {    
		return _posts;  
	}
  
	async find(id: string) {    
		return _posts.find(post => post._id === id);  
	}
}
