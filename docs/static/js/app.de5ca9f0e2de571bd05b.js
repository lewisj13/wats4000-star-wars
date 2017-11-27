webpackJsonp([1],{

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'app'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ce41de80","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("zKgV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Home.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Home = ({
  name: 'Home',
  data() {
    return {
      email: '',
      showForm: true,
      showError: false
    };
  },
  methods: {
    validateForm: function () {
      if (this.username != '' && this.email != '' && this.password === this.passwordVerify) {
        console.log('Form is valid.');
        this.showForm = false;
      } else {
        console.log('Form is not valid.');
        this.showError = true;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-37f9436c","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Home.vue
var Home_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showForm),expression:"showForm"}],staticClass:"form-container"},[_c('h1',[_vm._v("Star Wars")]),_vm._v(" "),_c('h2',[_vm._v("Welcome a galaxy far far away...")]),_vm._v(" "),_c('p',[_c('router-link',{attrs:{"to":{name: 'PeopleSpace'}}},[_vm._v("Characters")]),_vm._v(" "),_c('router-link',{attrs:{"to":{name: 'SpaceShips'}}},[_vm._v("SpaceShips")]),_vm._v(" "),_c('router-link',{attrs:{"to":{name: 'Planets'}}},[_vm._v("Planets")])],1),_vm._v(" "),_c('p',[_vm._v("  To start exploring the galxay, click on one of the links above to enter.")]),_vm._v(" "),_c('h2',[_vm._v("Sign up for the email list!")]),_vm._v(" "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.showError),expression:"showError"}],staticClass:"error"},[_vm._v(" There is an error within the form. Please check you information in each field. ")]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.validateForm($event)}}},[_c('p',[_c('label',{attrs:{"for":"email"}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],attrs:{"type":"email","id":"email","placeholder":"you@example.com"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})])]),_vm._v(" "),_vm._m(0,false,false)])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showForm),expression:"!showForm"}],staticClass:"success-message"},[_c('h1',[_vm._v("Thank you for signing up!")])])])}
var Home_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('input',{attrs:{"type":"submit","value":"Submit"}})])}]
var Home_esExports = { render: Home_render, staticRenderFns: Home_staticRenderFns }
/* harmony default export */ var components_Home = (Home_esExports);
// CONCATENATED MODULE: ./src/components/Home.vue
function Home_injectStyle (ssrContext) {
  __webpack_require__("fg6z")
}
var Home_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Home___vue_template_functional__ = false
/* styles */
var Home___vue_styles__ = Home_injectStyle
/* scopeId */
var Home___vue_scopeId__ = "data-v-37f9436c"
/* moduleIdentifier (server only) */
var Home___vue_module_identifier__ = null
var Home_Component = Home_normalizeComponent(
  Home,
  components_Home,
  Home___vue_template_functional__,
  Home___vue_styles__,
  Home___vue_scopeId__,
  Home___vue_module_identifier__
)

/* harmony default export */ var src_components_Home = (Home_Component.exports);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("mtWM");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/PeopleSpace.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var PeopleSpace = ({
  name: 'PeopleSpace',
  data() {
    return {
      posts: [],
      errors: [],
      name: []
    };
  },
  methods: {
    getPeople: function () {
      axios_default.a.get('https://swapi.co/api/people/?search=r2', {
        params: {}
      }).then(response => {
        this.results = response.data;
      }).catch(error => {
        this.errors.push(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e03f5024","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/PeopleSpace.vue
var PeopleSpace_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"peoplespace"},[_c('h1',[_vm._v(" Characters of Star Wars ")]),_vm._v(" "),_c('p',[_c('router-link',{attrs:{"to":{name: 'Home'}}},[_vm._v("Home")]),_vm._v(" "),_c('router-link',{attrs:{"to":{name: 'SpaceShips'}}},[_vm._v("SpaceShips")]),_vm._v(" "),_c('router-link',{attrs:{"to":{name: 'Planets'}}},[_vm._v("Planets")])],1),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.getPeople($event)}}},[_c('p',[_vm._v("Search Star Wars Charcters "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"}],attrs:{"type":"text"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}}),_c('button',{attrs:{"type":"submit"}},[_vm._v("Search")])])]),_vm._v(" "),(_vm.results && _vm.results.length > 0)?_c('ul',{staticClass:"results"},_vm._l((_vm.results),function(item){return _c('li',[_c('p',[_c('strong',[_vm._v(_vm._s(item.word))])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.score))])])})):(_vm.results && _vm.results.length==0)?_c('div',{staticClass:"no-results"},[_c('h2',[_vm._v("No Words Found")]),_vm._v(" "),_c('p',[_vm._v("Please adjust your search to find more words.")])]):_vm._e(),_vm._v(" "),(_vm.errors.length > 0)?_c('ul',{staticClass:"errors"},_vm._l((_vm.errors),function(error){return _c('li',[_vm._v("\n        "+_vm._s(error.message)+"\n      ")])})):_vm._e()])}
var PeopleSpace_staticRenderFns = []
var PeopleSpace_esExports = { render: PeopleSpace_render, staticRenderFns: PeopleSpace_staticRenderFns }
/* harmony default export */ var components_PeopleSpace = (PeopleSpace_esExports);
// CONCATENATED MODULE: ./src/components/PeopleSpace.vue
function PeopleSpace_injectStyle (ssrContext) {
  __webpack_require__("eVVh")
}
var PeopleSpace_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var PeopleSpace___vue_template_functional__ = false
/* styles */
var PeopleSpace___vue_styles__ = PeopleSpace_injectStyle
/* scopeId */
var PeopleSpace___vue_scopeId__ = "data-v-e03f5024"
/* moduleIdentifier (server only) */
var PeopleSpace___vue_module_identifier__ = null
var PeopleSpace_Component = PeopleSpace_normalizeComponent(
  PeopleSpace,
  components_PeopleSpace,
  PeopleSpace___vue_template_functional__,
  PeopleSpace___vue_styles__,
  PeopleSpace___vue_scopeId__,
  PeopleSpace___vue_module_identifier__
)

/* harmony default export */ var src_components_PeopleSpace = (PeopleSpace_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/SpaceShips.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SpaceShips = ({
  name: 'SpaceShips',
  data() {
    return {
      results: null,
      errors: [],
      name: []
    };
  },
  methods: {
    SpaceShips: function () {
      axios_default.a.get('http https://swapi.co/api/starships/?search=r2', {}).then(response => {
        this.results = response.data;
      }).catch(error => {
        this.errors.push(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dec55432","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/SpaceShips.vue
var SpaceShips_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spaceships"},[_c('h1',[_vm._v(" Spaceships of Star Wars ")]),_vm._v(" "),_c('p',[_c('router-link',{attrs:{"to":{name: 'Home'}}},[_vm._v("Home")]),_vm._v(" "),_c('router-link',{attrs:{"to":{name: 'PeopleSpace'}}},[_vm._v("Characters")]),_vm._v(" "),_c('router-link',{attrs:{"to":{name: 'Planets'}}},[_vm._v("Planets")])],1),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.getShips($event)}}},[_c('p',[_vm._v("Search Star Wars Spaceships "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"}],attrs:{"type":"text"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}}),_c('button',{attrs:{"type":"submit"}},[_vm._v("Search")])])]),_vm._v(" "),(_vm.results && _vm.results.length > 0)?_c('ul',{staticClass:"results"},_vm._l((_vm.results),function(item){return _c('li',[_c('p',[_c('strong',[_vm._v(_vm._s(item.word))])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.score))])])})):(_vm.results && _vm.results.length==0)?_c('div',{staticClass:"no-results"},[_c('h2',[_vm._v("No Starship Found")]),_vm._v(" "),_c('p',[_vm._v("Please adjust your search to find.")])]):_vm._e(),_vm._v(" "),(_vm.errors.length > 0)?_c('ul',{staticClass:"errors"},_vm._l((_vm.errors),function(error){return _c('li',[_vm._v("\n        "+_vm._s(error.message)+"\n      ")])})):_vm._e()])}
var SpaceShips_staticRenderFns = []
var SpaceShips_esExports = { render: SpaceShips_render, staticRenderFns: SpaceShips_staticRenderFns }
/* harmony default export */ var components_SpaceShips = (SpaceShips_esExports);
// CONCATENATED MODULE: ./src/components/SpaceShips.vue
function SpaceShips_injectStyle (ssrContext) {
  __webpack_require__("OsIX")
}
var SpaceShips_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var SpaceShips___vue_template_functional__ = false
/* styles */
var SpaceShips___vue_styles__ = SpaceShips_injectStyle
/* scopeId */
var SpaceShips___vue_scopeId__ = "data-v-dec55432"
/* moduleIdentifier (server only) */
var SpaceShips___vue_module_identifier__ = null
var SpaceShips_Component = SpaceShips_normalizeComponent(
  SpaceShips,
  components_SpaceShips,
  SpaceShips___vue_template_functional__,
  SpaceShips___vue_styles__,
  SpaceShips___vue_scopeId__,
  SpaceShips___vue_module_identifier__
)

/* harmony default export */ var src_components_SpaceShips = (SpaceShips_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Planets.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Planets = ({
  name: 'Planets',
  data() {
    return {
      results: null,
      errors: [],
      name: []
    };
  },
  methods: {
    getPlanets: function () {
      axios_default.a.get('http https://swapi.co/api/planets/?search=r2', {}).then(response => {
        this.results = response.data;
      }).catch(error => {
        this.errors.push(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-93b48224","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Planets.vue
var Planets_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"planets"},[_c('h1',[_vm._v(" Planets of Star Wars ")]),_vm._v(" "),_c('p',[_c('router-link',{attrs:{"to":{name: 'Home'}}},[_vm._v("Home")]),_vm._v(" "),_c('router-link',{attrs:{"to":{name: 'PeopleSpace'}}},[_vm._v("Characters")]),_vm._v(" "),_c('router-link',{attrs:{"to":{name: 'SpaceShips'}}},[_vm._v("SpaceShips")])],1),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.getPlanets($event)}}},[_c('p',[_vm._v("Search Star Wars Planets "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"}],attrs:{"type":"text"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}}),_c('button',{attrs:{"type":"submit"}},[_vm._v("Search")])])]),_vm._v(" "),(_vm.results && _vm.results.length > 0)?_c('ul',{staticClass:"results"},_vm._l((_vm.results),function(item){return _c('li',[_c('p',[_c('strong',[_vm._v(_vm._s(item.word))])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.score))])])})):(_vm.results && _vm.results.length==0)?_c('div',{staticClass:"no-results"},[_c('h2',[_vm._v("No Starship Found")]),_vm._v(" "),_c('p',[_vm._v("Please adjust your search to find.")])]):_vm._e(),_vm._v(" "),(_vm.errors.length > 0)?_c('ul',{staticClass:"errors"},_vm._l((_vm.errors),function(error){return _c('li',[_vm._v("\n          "+_vm._s(error.message)+"\n        ")])})):_vm._e()])}
var Planets_staticRenderFns = []
var Planets_esExports = { render: Planets_render, staticRenderFns: Planets_staticRenderFns }
/* harmony default export */ var components_Planets = (Planets_esExports);
// CONCATENATED MODULE: ./src/components/Planets.vue
function Planets_injectStyle (ssrContext) {
  __webpack_require__("OfpX")
}
var Planets_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var Planets___vue_template_functional__ = false
/* styles */
var Planets___vue_styles__ = Planets_injectStyle
/* scopeId */
var Planets___vue_scopeId__ = "data-v-93b48224"
/* moduleIdentifier (server only) */
var Planets___vue_module_identifier__ = null
var Planets_Component = Planets_normalizeComponent(
  Planets,
  components_Planets,
  Planets___vue_template_functional__,
  Planets___vue_styles__,
  Planets___vue_scopeId__,
  Planets___vue_module_identifier__
)

/* harmony default export */ var src_components_Planets = (Planets_Component.exports);

// CONCATENATED MODULE: ./src/router/index.js







vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Home',
    component: src_components_Home
  }, {
    path: '/PeopleSpace',
    name: 'PeopleSpace',
    component: src_components_PeopleSpace
  }, {
    path: '/SpaceShips',
    name: 'SpaceShips',
    component: src_components_SpaceShips
  }, {
    path: '/Planets',
    name: 'Planets',
    component: src_components_Planets
  }]
}));
// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




vue_esm["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new vue_esm["a" /* default */]({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App: src_App }
});

/***/ }),

/***/ "OfpX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "OsIX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "eVVh":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fg6z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "zKgV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.de5ca9f0e2de571bd05b.js.map