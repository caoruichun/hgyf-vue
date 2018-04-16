import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Brand from '@/components/Brand'
import Join from '@/components/Join'
import News from '@/components/News'
import Company from '@/components/template/company/Company'
import BrandMerit from '@/components/template/company/BrandMerit'
import BrandStpry from '@/components/template/company/BrandStpry'
import CompanyContact from '@/components/template/company/CompanyContact'
import Product from '@/components/template/product/Product'
import Shop from '@/components/template/product/Shop'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/brand',
    component: Brand,
    children: [{
      path: '/',
      name: 'Company',
      component: Company
    }, {
      path: '/companycontact',
      name: 'CompanyContact',
      component: CompanyContact
    }, {
      path: '/brandmerit',
      name: 'BrandMerit',
      component: BrandMerit
    }, {
      path: '/brandstpry',
      name: 'BrandStpry',
      component: BrandStpry
    }]
  }, {
    path: '/about',
    component: About,
    children: [{
      path: '/',
      name: 'Product',
      component: Product
    }, {
      path: '/shop',
      name: 'Shop',
      component: Shop
    }]

  }, {
    path: '/join',
    name: 'Join',
    component: Join
  }, {
    path: '/news',
    name: 'News',
    component: News
  }]
})
