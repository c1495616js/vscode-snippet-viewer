export const siteSettings = {
  name: 'Next Shop',
  description: 'Modern e-commerce website template using react nextjs',
  author: {
    name: 'Jerry Wang',
    websiteUrl: 'https://jerry.c1495616.online',
    address: '',
  },
  logo: {
    url: '/assets/images/logo.svg',
    alt: 'Jerry',
    href: '/',
    width: 95,
    height: 50,
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  CURRENCY: '$',
  site_header: {
    menu: [
      {
        id: 1,
        path: '/',
        label: 'Demos',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'Modern',
          },
          {
            id: 2,
            path: '/standard',
            label: 'Standard',
          },
          {
            id: 3,
            path: '/minimal',
            label: 'Minimal',
          },
          {
            id: 4,
            path: '/vintage',
            label: 'Vintage',
          },
          {
            id: 5,
            path: '/classic',
            label: 'Classic',
          },
        ],
      },
      {
        id: 2,
        path: '/search?q=men-wear',
        label: 'Men Wear',
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'Top Wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=t-shit-shirtrt',
                    label: 'T-Shirt',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shirts',
                    label: 'Casual Shirts',
                  },
                  {
                    id: 3,
                    path: '/search?q=formal-shirts',
                    label: 'Formal Shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=blazwers-coats',
                    label: 'Blazwers & Coats',
                  },
                  {
                    id: 5,
                    path: '/search?q=suits',
                    label: 'Suits',
                  },
                  {
                    id: 6,
                    path: '/search?q=jackets',
                    label: 'Jackets',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'Belt, Scarves & More',
              },
              {
                id: 3,
                path: '/search?q=watches-wearables',
                label: 'Watches & Wearables',
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=western-wear',
                label: 'Western Wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=dresses',
                    label: 'Dresses',
                  },
                  {
                    id: 2,
                    path: '/search?q=jumpsuits',
                    label: 'Jumpsuits',
                  },
                  {
                    id: 3,
                    path: '/search?q=tops-t-shirt',
                    label: 'Tops, T-Shirts & Shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=shorts-skirts',
                    label: 'Shorts & Skirts',
                  },
                  {
                    id: 5,
                    path: '/search?q=shurgs',
                    label: 'Shurgs',
                  },
                  {
                    id: 6,
                    path: '/search?q=blazers',
                    label: 'Blazers',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=plus-size',
                label: 'Plus Size',
              },
              {
                id: 3,
                path: '/search?q=sunglasses-frames',
                label: 'Sunglasses & Frames',
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=footwear',
                label: 'Footwear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=flats',
                    label: 'Flats',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shoes',
                    label: 'Casual Shoes',
                  },
                  {
                    id: 3,
                    path: '/search?q=heels',
                    label: 'Heels',
                  },
                  {
                    id: 4,
                    path: '/search?q=boots',
                    label: 'Boots',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=sports-active-wear',
                label: 'Sports & Active Wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=clothing',
                    label: 'Clothing',
                  },
                  {
                    id: 2,
                    path: '/search?q=footwear',
                    label: 'Footwear',
                  },
                  {
                    id: 3,
                    path: '/search?q=sports-accessories',
                    label: 'Sports Accessories',
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            columnItems: [
              {
                id: 1,
                path: '/search?q=lingerie-speepwear',
                label: 'Lingerie & Sleepwear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=bra',
                    label: 'Bra',
                  },
                  {
                    id: 2,
                    path: '/search?q=breifs',
                    label: 'Breifs',
                  },
                  {
                    id: 3,
                    path: '/search?q=shapewear',
                    label: 'Shapewear',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'Belt, Scarves & More',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=makeup',
                    label: 'Makeup',
                  },
                  {
                    id: 2,
                    path: '/search?q=skincare',
                    label: 'Skincare',
                  },
                  {
                    id: 3,
                    path: '/search?q=premium-beauty',
                    label: 'Premium Beauty',
                  },
                  {
                    id: 4,
                    path: '/search?q=lipsticks',
                    label: 'Lipsticks',
                  },
                ],
              },
            ],
          },
          {
            id: 5,
            columnItems: [
              {
                id: 1,
                path: '/search?q=gadgets',
                label: 'Gadgets',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=smart-wearables',
                    label: 'Smart Wearables',
                  },
                  {
                    id: 2,
                    path: '/search?q=headphones',
                    label: 'Headphones',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=jewellers',
                label: 'Jewellers',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=fashion-jewellers',
                    label: 'Fashion Jewellers',
                  },
                  {
                    id: 2,
                    path: '/search?q=fine-jewellers',
                    label: 'Fine Jewellers',
                  },
                ],
              },
              {
                id: 3,
                path: '/search?q=backpacks',
                label: 'Backpacks',
              },
              {
                id: 4,
                path: '/search?q=handbags-wallets',
                label: 'Handbags & Wallets',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        path: '/search?q=women-wear',
        label: 'Women Wear',
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=gadgets',
                label: 'Gadgets',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=smart-wearables',
                    label: 'Smart Wearables',
                  },
                  {
                    id: 2,
                    path: '/search?q=headphones',
                    label: 'Headphones',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=jewellers',
                label: 'Jewellers',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=fashion-jewellers',
                    label: 'Fashion Jewellers',
                  },
                  {
                    id: 2,
                    path: '/search?q=fine-jewellers',
                    label: 'Fine Jewellers',
                  },
                ],
              },
              {
                id: 3,
                path: '/search?q=backpacks',
                label: 'Backpacks',
              },
              {
                id: 4,
                path: '/search?q=handbags-wallets',
                label: 'Handbags & Wallets',
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'Top Wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=t-shirt',
                    label: 'T-Shirt',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shirts',
                    label: 'Casual Shirts',
                  },
                  {
                    id: 3,
                    path: '/search?q=formal-shirts',
                    label: 'Formal Shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=blazwers-coats',
                    label: 'Blazwers & Coats',
                  },
                  {
                    id: 5,
                    path: '/search?q=suits',
                    label: 'Suits',
                  },
                  {
                    id: 6,
                    path: '/search?q=jackets',
                    label: 'Jackets',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'Belt, Scarves & More',
              },
              {
                id: 3,
                path: '/search?q=watches-wearables',
                label: 'Watches & Wearables',
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=footwear',
                label: 'Footwear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=flats',
                    label: 'Flats',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shoes',
                    label: 'Casual Shoes',
                  },
                  {
                    id: 3,
                    path: '/search?q=heels',
                    label: 'Heels',
                  },
                  {
                    id: 4,
                    path: '/search?q=boots',
                    label: 'Boots',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=sports-active-wear',
                label: 'Sports & Active Wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=clothing',
                    label: 'Clothing',
                  },
                  {
                    id: 2,
                    path: '/search?q=footwear',
                    label: 'Footwear',
                  },
                  {
                    id: 3,
                    path: '/search?q=sports-accessories',
                    label: 'Sports Accessories',
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            columnItems: [
              {
                id: 1,
                path: '/search?q=western-wear',
                label: 'Western Wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=dresses',
                    label: 'Dresses',
                  },
                  {
                    id: 2,
                    path: '/search?q=jumpsuits',
                    label: 'Jumpsuits',
                  },
                  {
                    id: 3,
                    path: '/search?q=tops-t-shirt',
                    label: 'Tops, T-Shirts & Shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=shorts-skirts',
                    label: 'Shorts & Skirts',
                  },
                  {
                    id: 5,
                    path: '/search?q=shurgs',
                    label: 'Shurgs',
                  },
                  {
                    id: 6,
                    path: '/search?q=blazers',
                    label: 'Blazers',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=plus-size',
                label: 'Plus Size',
              },
              {
                id: 3,
                path: '/search?q=sunglasses-frames',
                label: 'Sunglasses & Frames',
              },
            ],
          },
          {
            id: 5,
            columnItems: [
              {
                id: 1,
                path: '/search?q=lingerie-speepwear',
                label: 'Lingerie & Sleepwear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=bra',
                    label: 'Bra',
                  },
                  {
                    id: 2,
                    path: '/search?q=breifs',
                    label: 'Breifs',
                  },
                  {
                    id: 3,
                    path: '/search?q=shapewear',
                    label: 'Shapewear',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'Belt, Scarves & More',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=makeup',
                    label: 'Makeup',
                  },
                  {
                    id: 2,
                    path: '/search?q=skincare',
                    label: 'Skincare',
                  },
                  {
                    id: 3,
                    path: '/search?q=premium-beauty',
                    label: 'Premium Beauty',
                  },
                  {
                    id: 4,
                    path: '/search?q=lipsticks',
                    label: 'Lipsticks',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        path: '/search?q=casual-wear',
        label: 'Casual Wear',
        columns: [
          {
            id: 1,
            columnItems: [
              {
                id: 1,
                path: '/search?q=gadgets',
                label: 'Gadgets',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=smart-wearables',
                    label: 'Smart Wearables',
                  },
                  {
                    id: 2,
                    path: '/search?q=headphones',
                    label: 'Headphones',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=jewellers',
                label: 'Jewellers',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=fashion-jewellers',
                    label: 'Fashion Jewellers',
                  },
                  {
                    id: 2,
                    path: '/search?q=fine-jewellers',
                    label: 'Fine Jewellers',
                  },
                ],
              },
              {
                id: 3,
                path: '/search?q=backpacks',
                label: 'Backpacks',
              },
              {
                id: 4,
                path: '/search?q=handbags-wallets',
                label: 'Handbags & Wallets',
              },
            ],
          },
          {
            id: 2,
            columnItems: [
              {
                id: 1,
                path: '/search?q=top-wear',
                label: 'Top Wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=t-shirt',
                    label: 'T-Shirt',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shirts',
                    label: 'Casual Shirts',
                  },
                  {
                    id: 3,
                    path: '/search?q=formal-shirts',
                    label: 'Formal Shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=blazwers-coats',
                    label: 'Blazwers & Coats',
                  },
                  {
                    id: 5,
                    path: '/search?q=suits',
                    label: 'Suits',
                  },
                  {
                    id: 6,
                    path: '/search?q=jackets',
                    label: 'Jackets',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'Belt, Scarves & More',
              },
              {
                id: 3,
                path: '/search?q=watches-wearables',
                label: 'Watches & Wearables',
              },
            ],
          },
          {
            id: 3,
            columnItems: [
              {
                id: 1,
                path: '/search?q=footwear',
                label: 'Footwear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=flats',
                    label: 'Flats',
                  },
                  {
                    id: 2,
                    path: '/search?q=casual-shoes',
                    label: 'Casual Shoes',
                  },
                  {
                    id: 3,
                    path: '/search?q=heels',
                    label: 'Heels',
                  },
                  {
                    id: 4,
                    path: '/search?q=boots',
                    label: 'Boots',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=sports-active-wear',
                label: 'Sports & Active Wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=clothing',
                    label: 'Clothing',
                  },
                  {
                    id: 2,
                    path: '/search?q=footwear',
                    label: 'Footwear',
                  },
                  {
                    id: 3,
                    path: '/search?q=sports-accessories',
                    label: 'Sports Accessories',
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            columnItems: [
              {
                id: 1,
                path: '/search?q=western-wear',
                label: 'Western Wear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=dresses',
                    label: 'Dresses',
                  },
                  {
                    id: 2,
                    path: '/search?q=jumpsuits',
                    label: 'Jumpsuits',
                  },
                  {
                    id: 3,
                    path: '/search?q=tops-t-shirt',
                    label: 'Tops, T-Shirts & Shirts',
                  },
                  {
                    id: 4,
                    path: '/search?q=shorts-skirts',
                    label: 'Shorts & Skirts',
                  },
                  {
                    id: 5,
                    path: '/search?q=shurgs',
                    label: 'Shurgs',
                  },
                  {
                    id: 6,
                    path: '/search?q=blazers',
                    label: 'Blazers',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=plus-size',
                label: 'Plus Size',
              },
              {
                id: 3,
                path: '/search?q=sunglasses-frames',
                label: 'Sunglasses & Frames',
              },
            ],
          },
          {
            id: 5,
            columnItems: [
              {
                id: 1,
                path: '/search?q=lingerie-speepwear',
                label: 'Lingerie & Sleepwear',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=bra',
                    label: 'Bra',
                  },
                  {
                    id: 2,
                    path: '/search?q=breifs',
                    label: 'Breifs',
                  },
                  {
                    id: 3,
                    path: '/search?q=shapewear',
                    label: 'Shapewear',
                  },
                ],
              },
              {
                id: 2,
                path: '/search?q=belt-scarves',
                label: 'Belt, Scarves & More',
                columnItemItems: [
                  {
                    id: 1,
                    path: '/search?q=makeup',
                    label: 'Makeup',
                  },
                  {
                    id: 2,
                    path: '/search?q=skincare',
                    label: 'Skincare',
                  },
                  {
                    id: 3,
                    path: '/search?q=premium-beauty',
                    label: 'Premium Beauty',
                  },
                  {
                    id: 4,
                    path: '/search?q=lipsticks',
                    label: 'Lipsticks',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        path: '/search',
        label: 'Search',
      },
      {
        id: 6,
        path: '/',
        label: 'Pages',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'Users',
            subMenu: [
              {
                id: 1,
                path: '/my-account',
                label: 'My Account',
              },
              {
                id: 2,
                path: '/signin',
                label: 'Sign In',
              },
              {
                id: 3,
                path: '/signup',
                label: 'Sing Up',
              },
              {
                id: 4,
                path: '/forget-password',
                label: 'Forget Password',
              },
            ],
          },
          {
            id: 2,
            path: '/faq',
            label: 'FAQ',
          },
          {
            id: 3,
            path: '/privacy',
            label: 'Privacy Policy',
          },
          {
            id: 4,
            path: '/terms',
            label: 'Terms & Condition',
          },
          {
            id: 5,
            path: '/contact-us',
            label: 'Contact Us',
          },
          {
            id: 6,
            path: '/checkout',
            label: 'Checkout',
          },
          {
            id: 7,
            path: '/order',
            label: 'Order',
          },
          {
            id: 8,
            path: '/404',
            label: '404',
          },
        ],
      },
    ],
    mobileMenu: [
      {
        id: 1,
        path: '/',
        label: 'Demos',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'Modern',
          },
          {
            id: 2,
            path: '/standard',
            label: 'Standard',
          },
          {
            id: 3,
            path: '/minimal',
            label: 'Minimal',
          },
          {
            id: 4,
            path: '/vintage',
            label: 'Vintage',
          },
          {
            id: 5,
            path: '/classic',
            label: 'Classic',
          },
        ],
      },
      {
        id: 2,
        path: '/search?q=men-wear',
        label: 'Men Wear',
        subMenu: [
          {
            id: 1,
            path: '/search?q=top-wear',
            label: 'Top Wear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=t-shirt',
                label: 'T-Shirt',
              },
              {
                id: 2,
                path: '/search?q=casual-shirts',
                label: 'Casual Shirts',
              },
              {
                id: 3,
                path: '/search?q=formal-shirts',
                label: 'Formal Shirts',
              },
              {
                id: 4,
                path: '/search?q=blazwers-coats',
                label: 'Blazwers & Coats',
              },
              {
                id: 5,
                path: '/search?q=suits',
                label: 'Suits',
              },
              {
                id: 6,
                path: '/search?q=jackets',
                label: 'Jackets',
              },
            ],
          },
          {
            id: 2,
            path: '/search?q=belt-scarves',
            label: 'Belt, Scarves & More',
          },
          {
            id: 3,
            path: '/search?q=watches-wearables',
            label: 'Watches & Wearables',
          },
          {
            id: 4,
            path: '/search?q=western-wear',
            label: 'Western Wear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=dresses',
                label: 'Dresses',
              },
              {
                id: 2,
                path: '/search?q=jumpsuits',
                label: 'Jumpsuits',
              },
              {
                id: 3,
                path: '/search?q=tops-t-shirt',
                label: 'Tops, T-Shirts & Shirts',
              },
              {
                id: 4,
                path: '/search?q=shorts-skirts',
                label: 'Shorts & Skirts',
              },
              {
                id: 5,
                path: '/search?q=shurgs',
                label: 'Shurgs',
              },
              {
                id: 6,
                path: '/search?q=blazers',
                label: 'Blazers',
              },
            ],
          },
          {
            id: 5,
            path: '/search?q=plus-size',
            label: 'Plus Size',
          },
          {
            id: 6,
            path: '/search?q=sunglasses-frames',
            label: 'Sunglasses & Frames',
          },
          {
            id: 6,
            path: '/search?q=footwear',
            label: 'Footwear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=flats',
                label: 'Flats',
              },
              {
                id: 2,
                path: '/search?q=casual-shoes',
                label: 'Casual Shoes',
              },
              {
                id: 3,
                path: '/search?q=heels',
                label: 'Heels',
              },
              {
                id: 4,
                path: '/search?q=boots',
                label: 'Boots',
              },
            ],
          },
          {
            id: 7,
            path: '/search?q=sports-active-wear',
            label: 'Sports & Active Wear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=clothing',
                label: 'Clothing',
              },
              {
                id: 2,
                path: '/search?q=footwear',
                label: 'Footwear',
              },
              {
                id: 3,
                path: '/search?q=sports-accessories',
                label: 'Sports Accessories',
              },
            ],
          },
          {
            id: 8,
            path: '/search?q=lingerie-speepwear',
            label: 'Lingerie & Sleepwear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=bra',
                label: 'Bra',
              },
              {
                id: 2,
                path: '/search?q=breifs',
                label: 'Breifs',
              },
              {
                id: 3,
                path: '/search?q=shapewear',
                label: 'Shapewear',
              },
            ],
          },
          {
            id: 9,
            path: '/search?q=belt-scarves',
            label: 'Belt, Scarves & More',
            subMenu: [
              {
                id: 1,
                path: '/search?q=makeup',
                label: 'Makeup',
              },
              {
                id: 2,
                path: '/search?q=skincare',
                label: 'Skincare',
              },
              {
                id: 3,
                path: '/search?q=premium-beauty',
                label: 'Premium Beauty',
              },
              {
                id: 4,
                path: '/search?q=lipsticks',
                label: 'Lipsticks',
              },
            ],
          },
          {
            id: 10,
            path: '/search?q=gadgets',
            label: 'Gadgets',
            subMenu: [
              {
                id: 1,
                path: '/search?q=smart-wearables',
                label: 'Smart Wearables',
              },
              {
                id: 2,
                path: '/search?q=headphones',
                label: 'Headphones',
              },
            ],
          },
          {
            id: 11,
            path: '/search?q=jewellers',
            label: 'Jewellers',
            subMenu: [
              {
                id: 1,
                path: '/search?q=fashion-jewellers',
                label: 'Fashion Jewellers',
              },
              {
                id: 2,
                path: '/search?q=fine-jewellers',
                label: 'Fine Jewellers',
              },
            ],
          },
          {
            id: 12,
            path: '/search?q=backpacks',
            label: 'Backpacks',
          },
          {
            id: 13,
            path: '/search?q=handbags-wallets',
            label: 'Handbags & Wallets',
          },
        ],
      },
      {
        id: 3,
        path: '/search?q=women-wear',
        label: 'Women Wear',
      },
      {
        id: 4,
        path: '/search?q=casual-wear',
        label: 'Casual Wear',
        subMenu: [
          {
            id: 1,
            path: '/search?q=top-wear',
            label: 'Top Wear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=t-shirt',
                label: 'T-Shirt',
              },
              {
                id: 2,
                path: '/search?q=casual-shirts',
                label: 'Casual Shirts',
              },
              {
                id: 3,
                path: '/search?q=formal-shirts',
                label: 'Formal Shirts',
              },
              {
                id: 4,
                path: '/search?q=blazwers-coats',
                label: 'Blazwers & Coats',
              },
              {
                id: 5,
                path: '/search?q=suits',
                label: 'Suits',
              },
              {
                id: 6,
                path: '/search?q=jackets',
                label: 'Jackets',
              },
            ],
          },
          {
            id: 2,
            path: '/search?q=belt-scarves',
            label: 'Belt, Scarves & More',
          },
          {
            id: 3,
            path: '/search?q=watches-wearables',
            label: 'Watches & Wearables',
          },
          {
            id: 4,
            path: '/search?q=western-wear',
            label: 'Western Wear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=dresses',
                label: 'Dresses',
              },
              {
                id: 2,
                path: '/search?q=jumpsuits',
                label: 'Jumpsuits',
              },
              {
                id: 3,
                path: '/search?q=tops-t-shirt',
                label: 'Tops, T-Shirts & Shirts',
              },
              {
                id: 4,
                path: '/search?q=shorts-skirts',
                label: 'Shorts & Skirts',
              },
              {
                id: 5,
                path: '/search?q=shurgs',
                label: 'Shurgs',
              },
              {
                id: 6,
                path: '/search?q=blazers',
                label: 'Blazers',
              },
            ],
          },
          {
            id: 5,
            path: '/search?q=plus-size',
            label: 'Plus Size',
          },
          {
            id: 6,
            path: '/search?q=sunglasses-frames',
            label: 'Sunglasses & Frames',
          },
          {
            id: 6,
            path: '/search?q=footwear',
            label: 'Footwear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=flats',
                label: 'Flats',
              },
              {
                id: 2,
                path: '/search?q=casual-shoes',
                label: 'Casual Shoes',
              },
              {
                id: 3,
                path: '/search?q=heels',
                label: 'Heels',
              },
              {
                id: 4,
                path: '/search?q=boots',
                label: 'Boots',
              },
            ],
          },
          {
            id: 7,
            path: '/search?q=sports-active-wear',
            label: 'Sports & Active Wear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=clothing',
                label: 'Clothing',
              },
              {
                id: 2,
                path: '/search?q=footwear',
                label: 'Footwear',
              },
              {
                id: 3,
                path: '/search?q=sports-accessories',
                label: 'Sports Accessories',
              },
            ],
          },
          {
            id: 8,
            path: '/search?q=lingerie-speepwear',
            label: 'Lingerie & Sleepwear',
            subMenu: [
              {
                id: 1,
                path: '/search?q=bra',
                label: 'Bra',
              },
              {
                id: 2,
                path: '/search?q=breifs',
                label: 'Breifs',
              },
              {
                id: 3,
                path: '/search?q=shapewear',
                label: 'Shapewear',
              },
            ],
          },
          {
            id: 9,
            path: '/search?q=belt-scarves',
            label: 'Belt, Scarves & More',
            subMenu: [
              {
                id: 1,
                path: '/search?q=makeup',
                label: 'Makeup',
              },
              {
                id: 2,
                path: '/search?q=skincare',
                label: 'Skincare',
              },
              {
                id: 3,
                path: '/search?q=premium-beauty',
                label: 'Premium Beauty',
              },
              {
                id: 4,
                path: '/search?q=lipsticks',
                label: 'Lipsticks',
              },
            ],
          },
          {
            id: 10,
            path: '/search?q=gadgets',
            label: 'Gadgets',
            subMenu: [
              {
                id: 1,
                path: '/search?q=smart-wearables',
                label: 'Smart Wearables',
              },
              {
                id: 2,
                path: '/search?q=headphones',
                label: 'Headphones',
              },
            ],
          },
          {
            id: 11,
            path: '/search?q=jewellers',
            label: 'Jewellers',
            subMenu: [
              {
                id: 1,
                path: '/search?q=fashion-jewellers',
                label: 'Fashion Jewellers',
              },
              {
                id: 2,
                path: '/search?q=fine-jewellers',
                label: 'Fine Jewellers',
              },
            ],
          },
          {
            id: 12,
            path: '/search?q=backpacks',
            label: 'Backpacks',
          },
          {
            id: 13,
            path: '/search?q=handbags-wallets',
            label: 'Handbags & Wallets',
          },
        ],
      },
      {
        id: 5,
        path: '/search',
        label: 'Search',
      },
      {
        id: 6,
        path: '/',
        label: 'Pages',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'Users',
            subMenu: [
              {
                id: 1,
                path: '/my-account',
                label: 'My Account',
              },
              {
                id: 2,
                path: '/signin',
                label: 'Sign In',
              },
              {
                id: 3,
                path: '/signup',
                label: 'Sing Up',
              },
              {
                id: 4,
                path: '/forget-password',
                label: 'Forget Password',
              },
            ],
          },
          {
            id: 2,
            path: '/faq',
            label: 'FAQ',
          },
          {
            id: 3,
            path: '/privacy',
            label: 'Privacy Policy',
          },
          {
            id: 4,
            path: '/terms',
            label: 'Terms & Condition',
          },
          {
            id: 5,
            path: '/contact-us',
            label: 'Contact Us',
          },
          {
            id: 6,
            path: '/checkout',
            label: 'Checkout',
          },
          {
            id: 7,
            path: '/order',
            label: 'Order',
          },
          {
            id: 8,
            path: '/404',
            label: '404',
          },
        ],
      },
    ],
  },
};
