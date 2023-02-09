<template>
  <!-- Start Sidebar -->
  <div class="sidebar">
    <div class="sidebar__overlay" />
    <div class="sidebar__menu">
      <ul class="sidebar__menu-list">
        <li class="list__logo">
          <a href="#" class="list__logo-link">
            <img src="assets/images/icon-light.png" alt="logo-icon" class="icon__logo-light">
            <img src="assets/images/logo-light.png" alt="logo-light" class="img__logo-light">
          </a>
        </li>
        <li v-for="(item, index) in listMenu" :key="index" class="list__item">
          <div class="list__title">
            <span>{{ item.title }}</span>
          </div>
          <div v-for="(itemMenu, indexMenu) in item.menuItem" :key="indexMenu" class="list__item-menu">
            <template v-if="itemMenu.isMenu">
              <div
                :class="{show: currentMenu === itemMenu.key}"
                class="list__item-link"
                @click="myClick(itemMenu)"
              >
                <div class="link__content">
                  <i :class="itemMenu.icon" class="icon__menu" />
                  <span>{{ itemMenu.title }}</span>
                  <i class="ti-angle-right" />
                </div>
              </div>
              <ul class="submenu">
                <li
                  v-for="(itemSubMenu, indexSubMenu) in itemMenu.subMenuItem"
                  :key="indexSubMenu"
                  class="submenu__item"
                >
                  <template v-if="itemSubMenu.isSubMenu">
                    <div
                      :class="{show: currentSubMenu === itemSubMenu.key}"
                      class="submenu__item-link"
                      @click="mySubClick(itemSubMenu)"
                    >
                      <i class="ti-hand-point-right" />
                      <span>{{ itemSubMenu.title }}</span>
                      <i class="ti-angle-right" />
                    </div>
                    <ul class="submenu">
                      <li
                        v-for="(itemSubMenuDrop, indexSubMenuDrop) in itemSubMenu.subMenuDropItem"
                        :key="indexSubMenuDrop"
                        class="submenu__drop"
                      >
                        <router-link :to="{ name: 'Home' }">
                          <i class="ti-hand-point-right" />
                          <span>{{ itemSubMenuDrop.title }}</span>
                        </router-link>
                      </li>
                    </ul>
                  </template>
                  <template v-else>
                    <router-link :to="{ name: itemSubMenu.name }" class="submenu__item-link">
                      <i class="ti-hand-point-right" />
                      <span>{{ itemSubMenu.title }}</span>
                    </router-link>
                  </template>
                </li>
              </ul>
            </template>
            <template v-else>
              <div class="list__item-link">
                <router-link :class="{active: itemMenu.isActive}" :to="{ name: 'Home' }" class="link__content">
                  <i :class="itemMenu.icon" class="icon__menu" />
                  <span>{{ itemMenu.title }}</span>
                </router-link>
              </div>
            </template>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- End Sidebar -->
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      isActive: false,
      isMenu: false,
      isSubMenu: false,
      currentMenu: '',
      currentSubMenu: '',
      listMenu: [
        {
          title: 'Dashboard',
          menuItem: [
            {
              title: 'Dashboard',
              icon: 'ti-home',
              isActive: true
            },
            {
              title: 'Crypto Currencies',
              isMenu: true,
              icon: 'ti-wallet',
              key: 'crypto',
              subMenuItem: [
                {
                  title: 'Dashboard',
                },
                {
                  title: 'Marketcap',
                  name: 'CryptoMarketcap',
                },
                {
                  title: 'Currency exchange',
                },
                {
                  title: 'Buy & Sell',
                },
                {
                  title: 'Wallet',
                },
                {
                  title: 'Transactions',
                },
              ]
            },
            {
              title: 'ECommerce',
              isMenu: true,
              icon: 'ti-shopping-cart',
              key: 'ecommerce',
              subMenuItem: [
                {
                  title: 'Dashboard',
                },
                {
                  title: 'Products',
                },
                {
                  title: 'Products details',
                },
                {
                  title: 'Cart',
                },
                {
                  title: 'Wishist',
                },
                {
                  title: 'Checkout',
                },
                {
                  title: 'Orders',
                },
                {
                  title: 'Add Product',
                },
                {
                  title: 'Account',
                },
              ]
            }
          ],
        },
        {
          title: 'Landing',
          menuItem: [
            {
              title: 'LandingPage',
              icon: 'ti-layout'
            }
          ]
        },
        {
          title: 'Applications',
          menuItem: [
            {
              title: 'Apps',
              icon: 'ti-write',
              isMenu: true,
              key: 'apps',
              subMenuItem: [
                {
                  title: 'Widgets',
                },
                {
                  title: 'Mail',
                  isSubMenu: true,
                  key: 'mail',
                  subMenuDropItem: [
                    {
                      title: 'Mail-Inbox',
                    },
                    {
                      title: 'View-Mail',
                    },
                    {
                      title: 'Mail-Compose',
                    },
                  ]
                },
                {
                  title: 'Maps',
                  isSubMenu: true,
                  key: 'maps',
                  subMenuDropItem: [
                    {
                      title: 'Mapel Maps',
                    },
                    {
                      title: 'Vector Maps',
                    },
                  ]
                },
                {
                  title: 'Tables',
                  isSubMenu: true,
                  key: 'tables',
                  subMenuDropItem: [
                    {
                      title: 'Basic Tables',
                    },
                    {
                      title: 'Data Tables',
                    },
                  ]
                },
                {
                  title: 'Blog',
                  isSubMenu: true,
                  key: 'blog',
                  subMenuDropItem: [
                    {
                      title: 'Blog Page',
                    },
                    {
                      title: 'Blog Detail',
                    },
                    {
                      title: 'Blog Post',
                    },
                  ]
                },
                {
                  title: 'File Manager',
                  isSubMenu: true,
                  key: 'file manager',
                  subMenuDropItem: [
                    {
                      title: 'File Manager',
                    },
                    {
                      title: 'File Manager List',
                    },
                    {
                      title: 'File Details',
                    },
                    {
                      title: 'File Attachments',
                    },
                  ]
                },
                {
                  title: 'Icons',
                  isSubMenu: true,
                  key: 'icons',
                  subMenuDropItem: [
                    {
                      title: 'Font Awesome',
                    },
                    {
                      title: 'Material Design Icons',
                    },
                    {
                      title: 'Simple Line Icons',
                    },
                    {
                      title: 'Feather Icons',
                    },
                    {
                      title: 'Ionic Icons',
                    },
                    {
                      title: 'Flag Icons',
                    },
                    {
                      title: 'Pe7 Icons',
                    },
                    {
                      title: 'Themify Icons',
                    },
                    {
                      title: 'Typicons Icons',
                    },
                    {
                      title: 'Weather Icons',
                    },
                    {
                      title: 'Material Icons',
                    },
                    {
                      title: 'Bootstrap Icons',
                    },
                  ]
                },
              ]
            }
          ]
        },
        {
          title: 'Components',
          menuItem: [
            {
              title: 'Elements',
              icon: 'ti-package',
              isMenu: true,
              key: 'elements',
              subMenuItem: [
                {
                  title: 'Accordion',
                },
                {
                  title: 'Alerts',
                },
                {
                  title: 'Avatar',
                },
                {
                  title: 'Breadcrumbs',
                },
                {
                  title: 'Buttons',
                },
                {
                  title: 'Badge',
                },
                {
                  title: 'Dropdown',
                },
                {
                  title: 'Thumbnails',
                },
                {
                  title: 'List Group',
                },
                {
                  title: 'Navigation',
                },
                {
                  title: 'Pagination',
                },
                {
                  title: 'Popover',
                },
                {
                  title: 'Progress',
                },
                {
                  title: 'Spinners',
                },
                {
                  title: 'Media Object',
                },
                {
                  title: 'Typography',
                },
                {
                  title: 'Tooltip',
                },
                {
                  title: 'Toast',
                },
                {
                  title: 'Tags',
                },
                {
                  title: 'Tabs',
                },
              ]
            },
            {
              title: 'AdvancedUI',
              icon: 'ti-briefcase',
              isMenu: true,
              key: 'advancedUI',
              subMenuItem: [
                {
                  title: 'Carousel',
                },
                {
                  title: 'Collapse',
                },
                {
                  title: 'Chat',
                },
                {
                  title: 'Cards',
                },
                {
                  title: 'Calendar',
                },
                {
                  title: 'Contacts',
                },
                {
                  title: 'Modals',
                },
                {
                  title: 'Timeline',
                },
                {
                  title: 'Darggable-Cards',
                },
                {
                  title: 'Sweet Alert',
                },
                {
                  title: 'Ratings',
                },
                {
                  title: 'Search',
                },
                {
                  title: 'Userlist',
                },
                {
                  title: 'Notification',
                },
                {
                  title: 'Tree-view',
                },
              ]
            },
          ]
        },
        {
          title: 'Other Pages',
          menuItem: [
            {
              title: 'Pages',
              icon: 'ti-palette',
              isMenu: true,
              key: 'pages',
              subMenuItem: [
                {
                  title: 'Profile',
                },
                {
                  title: 'About Us',
                },
                {
                  title: 'Settings',
                },
                {
                  title: 'Invoice',
                },
                {
                  title: 'Pricing',
                },
                {
                  title: 'Gallery',
                },
                {
                  title: 'Notifications List',
                },
                {
                  title: 'Faqs',
                },
                {
                  title: 'Success Message',
                },
                {
                  title: 'Danger Message',
                },
                {
                  title: 'Warning Message',
                },
                {
                  title: 'Empty Page',
                },
                {
                  title: 'Switcher Page',
                },
              ]
            },
            {
              title: 'Utilities',
              icon: 'ti-shield',
              isMenu: true,
              key: 'utilities',
              subMenuItem: [
                {
                  title: 'Background',
                },
                {
                  title: 'Border',
                },
                {
                  title: 'Display',
                },
                {
                  title: 'Flex',
                },
                {
                  title: 'Height',
                },
                {
                  title: 'Margin',
                },
                {
                  title: 'Padding',
                },
                {
                  title: 'Width',
                },
                {
                  title: 'Extras',
                },
                {
                  title: 'Danger Message',
                },
              ]
            },
            {
              title: 'Submenu',
              icon: 'ti-menu',
              isMenu: true,
              key: 'submenu',
              subMenuItem: [
                {
                  title: 'Submenu-01',
                },
                {
                  title: 'Submenu-02',
                },
              ]
            },
            {
              title: 'Authentication',
              icon: 'ti-lock',
              isMenu: true,
              key: 'authentication',
              subMenuItem: [
                {
                  title: 'Sign In',
                },
                {
                  title: 'Sign Up',
                },
                {
                  title: 'Forgot Password',
                },
                {
                  title: 'Reset Password',
                },
                {
                  title: 'Lockscreen',
                },
                {
                  title: 'UnderConstruction',
                },
                {
                  title: '404 Error',
                },
                {
                  title: '500 Error',
                },
              ]
            },
          ]
        },
        {
          title: 'Forms & Charts',
          menuItem: [
            {
              title: 'Forms',
              icon: 'ti-receipt',
              isMenu: true,
              key: 'form',
              subMenuItem: [
                {
                  title: 'Form Elements',
                },
                {
                  title: 'Advanced Forms',
                },
                {
                  title: 'Form Layouts',
                },
                {
                  title: 'Form Validation',
                },
                {
                  title: 'Form Wizards',
                },
                {
                  title: 'WYSIWYG Editor',
                },
                {
                  title: 'Form Element-sizes',
                },
              ]
            },
            {
              title: 'Charts',
              icon: 'ti-bar-chart',
              isMenu: true,
              key: 'chart',
              subMenuItem: [
                {
                  title: 'Morris Charts',
                },
                {
                  title: 'Flot Charts',
                },
                {
                  title: 'ChartJS',
                },
                {
                  title: 'Sparkline & Peity',
                },
                {
                  title: 'Echart',
                },
              ]
            },
          ]
        },
      ]
    }
  },
  computed: {
    routes () {
      return this.$router.options.routes
    },
  },
//   mounted () {
//     var submenu = document.querySelectorAll('.list__item-link')
//     document.addEventListener('click', (e) => {
//       //  console.log(submenu);
//       // var subMenu = '.submenu'
//         submenu.forEach(element => {

//       if(!(e.target).closest(element).length) {
//         console.log(111111);
//           console.log(22222);
//           element.classList.remove('show')

//         // submenu.classList.remove('show')

//       }
// });
//       return;

//     })
//   },
  methods: {
    myClick (itemMenu) {
      this.currentMenu = itemMenu.key
    },
    mySubClick (itemSubMenu) {
      this.currentSubMenu = itemSubMenu.key
    }
  }
}
</script>