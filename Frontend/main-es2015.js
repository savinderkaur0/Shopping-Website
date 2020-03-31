(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\r\n    <a routerLink=\"/login\" routerLinkActive=\"active\"></a>\r\n    <a routerLink=\"/navbar\" routerLinkActive=\"active\"></a>\r\n    <a routerLink=\"/register\" routerLinkActive=\"active\"></a>\r\n    <a routerLink=\"/profile\" routerLinkActive=\"active\"></a>\r\n    <a routerLink=\"/items\" routerLinkActive=\"active\"></a>\r\n    <a routerLink=\"/footer\" routerLinkActive=\"active\"></a>\r\n</nav>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n  <body>\n<h1 style=\"text-align: center; font-weight: 10px;\">Bag---------Address---------Payment</h1>\n<div style=\"background-color:seagreen;text-align: center;\">Price Inclusive Of All Taxes</div>\n<hr>\n<h1 style=\"text-align: center; font-weight: 10px;\">MY BAG</h1>\n<!-- <div >\n  \n  <div *ngFor=\"let product of items\" class=\"categories\">\n<mat-card class=\"example-card\" style=\"width: 200px;height:400px\">\n\n<img mat-card-image  style=\"width: 200px;\" src=\"{{product.image}}\" alt=\"Photo\">\n\n<mat-card-content>\n<h4>{{product.name}}</h4>\n<h4><p>Rs.</p>{{product.price}}</h4>\n</mat-card-content>\n<mat-card-actions>\n\n \n<button mat-button (click)=\"deleteItem(product.id)\">Remove From Bag</button>\n\n</mat-card-actions>\n\n</mat-card>\n <br>\n\n</div>\n\n</div>\n<div class=\"example-card1\">\n<mat-card  style=\"width: 600px;height:400px\">\n  <mat-card-content>\n    \n    </mat-card-content>\n  </mat-card>\n</div> -->\n\n<table>\n \n  <tr>\n    <div *ngFor=\"let product of items\">\n    <td style=\"width:200px;align-content: center;\"><img mat-card-image  style=\"width: 200px;\" src=\"{{product.image}}\" alt=\"Photo\"></td>\n    <td style=\"width:200px;text-align: center;\"> Quantity Of Item:1</td>\n    <td style=\"width:200px;text-align: center;\">Category:{{product.name}}</td>\n    <td style=\"width:200px;text-align: center;\">Price Of Item:{{product.price}}</td>\n    <td style=\"width:200px;text-align: center;\"><button mat-button style=\"color: black;background-color: chartreuse;\" (click)=\"deleteItem(product.id)\">Remove From Bag</button></td>\n    </div>\n   \n  </tr>\n \n \n</table>\n<div >\n  <mat-card  class=\"example-card1\"  style=\"width: 400px;height:300px\">\n    <mat-card-content>\n      <h1 style=\"text-align: center; font-weight: 10px;\">Total Bill</h1>\n      <h2>Total Items:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{total1()}}</h2>\n      <h2>Total Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{total()}}</h2>\n      </mat-card-content>\n      <mat-card-actions>\n\n \n        <button   mat-button (click)=\"checkout()\" style=\"color: black;background-color:skyblue;margin-left: 130px;\">Checkout</button><br><br>\n        <br>\n        <a style=\"margin-left: 130px\" routerLink=\"/navbar\">Continue Shopping</a>\n        \n        </mat-card-actions>\n    </mat-card>\n  </div> \n  <br>\n  <br>\n  <hr>\n  <app-footer></app-footer>\n  </body>\n  </html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t\t<h1>contact us</h1>\n    </div>\n    \n\t<div class=\"row\" style=\"margin-top: -20px;\">\n\t\t\t<h4 style=\"text-align:center\">We'd love to hear from you!</h4>\n\t</div>\n\t<div class=\"row input-container\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"styled-input wide\">\n\t\t\t\t\t<input type=\"text\" required />\n\t\t\t\t\t<label>Name</label> \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6 col-sm-12\">\n\t\t\t\t<div class=\"styled-input\">\n\t\t\t\t\t<input type=\"text\" required />\n\t\t\t\t\t<label>Email</label> \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6 col-sm-12\">\n\t\t\t\t<div class=\"styled-input\" style=\"float:right;\">\n\t\t\t\t\t<input type=\"text\" required />\n\t\t\t\t\t<label>Phone Number</label> \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"styled-input wide\">\n\t\t\t\t\t<textarea required></textarea>\n\t\t\t\t\t<label>Message</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"btn-lrg submit-btn\">Send Message</div>\n\t\t\t</div>\n\t</div>\n</div>\n<br>\n<br>\n<hr>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"site-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-6\">\n          <h6>About</h6>\n          <p class=\"text-justify\">MYSHOP is one of the best sites when it comes to online shopping for family. The finest of material, superior design and unbeatable style go into the making of our family shopping collection. Compared with other  shopping sites, MYSHOP brings you the best price products which won’t hurt your pocket. With seasonal discounts on trendy casual wear, suits, blazers, sneakers and more, online shopping for family at MYSHOP just gets even more irresistible!</p>\n        </div>\n\n        <div class=\"col-xs-6 col-md-3\">\n          <h6>Categories</h6>\n          <ul class=\"footer-links\">\n            <li><a href=\"\">Men</a></li>\n            <li><a href=\"\">Women</a></li>\n           \n          </ul>\n        </div>\n\n        <div class=\"col-xs-6 col-md-3\">\n          <h6>Quick Links</h6>\n          <ul class=\"footer-links\">\n            \n            <li><a href=\"http://scanfcode.com/contact/\">Contact Us</a></li>\n            <h1>98770-xxxxx</h1><br>\n            <h1>XXXXX-45582</h1>\n          </ul>\n        </div>\n      </div>\n      <hr>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 col-sm-6 col-xs-12\">\n          <p class=\"copyright-text\">Copyright &copy; 2020 All Rights Reserved\n          </p>\n        </div>\n\n      \n      </div>\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div  style=\"background-image:url(assets\\\\lgn.png);margin-top:0px;margin-left: 0px; background-repeat: no-repeat;background-size: cover;height:624px\">\n   <div class=\"card\">\n       \n   </div>\n    <button routerLink=\"/navbar\">click me</button>\n   </div> -->\n<!-- <html>\n   <body>\n      <div class=\"loginbox\">\n         <img src=\"assets//avatar.jpg\" class=\"avatar\">\n         <h1>Login here</h1>\n         <mat-card class=\"container\">\n            <mat-card-content>\n               <b>Welcome Back:)</b>\n             \n               <form class=\"my-form\" (ngSubmit)=\"LoginProcess(loginForm)\" #loginForm=\"ngForm\"> \n  \n  <mat-form-field class=\"full-width\">\n    <mat-label>Email</mat-label>\n    <input type=\"email\" matInput placeholder=\"E-mail\" #email=\"ngModel\">\n    <mat-error *ngIf=\"email.invalid\">\n     <mat-error *ngIf=\"email.errors.requires\">\n       Please enter E-mail\n     </mat-error>\n     <mat-error *ngIf=\"email.errors.pattern\">\n     Please enter valid E-mail\n     </mat-error>\n    </mat-error>\n\n  </mat-form-field><br>\n  <mat-form-field class=\"full-width\">\n     <mat-label>Password</mat-label>\n     <input type=\"password\" matInput placeholder=\"Password\" minlength=\"8\" name=\"password\" #password=\"ngModel\" pattern=\"\">\n    <mat-error *ngIf=\"password.invalid\"></mat-error>\n    <mat-error *ngIf=\"password.errors.required\">Please enter password</mat-error>\n    <mat-error *ngIf=\"password.errors.pattern\">Enter atleast one Uppercase,One Lowrcase,One Number</mat-error>\n  </mat-form-field>\n  <mat-card-actions>\n     <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!loginForm.valid\" (click)=\"onLogin(loginForm)\">\n  </mat-card-actions>\n               </form>\n            </mat-card-content>\n         </mat-card>\n      </div>\n   </body>\n</html> -->\n<html>\n   <body>\n      <div class=\"form\">\n         <mat-toolbar class=\"toolbarwidth\" style=\"color: white;\" ><span><b>LOGIN HERE</b></span></mat-toolbar>\n            <mat-card class=\"card-container\">\n               <mat-card-content>\n                  <form class=\"my-form\" (ngSubmit)=\"LoginProcess(loginForm)\" #loginForm=\"ngForm\">\n                     <mat-form-field class=\"full-width\">\n                        <mat-label>E-mail</mat-label>\n                        <input type=\"email\" matInput placeholder=\"E-mail\" ngModel name=\"email\" #email=\"ngModel\" pattern=\"\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*\">\n                        <mat-error *ngIf=\"email.invalid\">\n                           <mat-error *ngIf=\"email.errors.required\">\n                             Please enter E-mail\n                           </mat-error>\n                        <mat-error *ngIf=\"email.errors.pattern\">\n                          Please enter Valid E-mail\n                        </mat-error>\n                        </mat-error>\n                      </mat-form-field><br>\n                      <!-- Password -->\n                      <mat-form-field class=\"full-width\">\n                        <mat-label>Password</mat-label>\n                        <input type=\"password\" matInput placeholder=\"Password\" ngModel name=\"password\" #password=\"ngModel\" >\n                        <mat-error *ngIf=\"password.invalid\">\n                           <mat-error *ngIf=\"password.errors.required\">\n                             Please enter password\n                           </mat-error>\n                        <mat-error *ngIf=\"password.errors.pattern\">\n                          Please enter Valid Password\n                        </mat-error>\n                        </mat-error>\n                      </mat-form-field>\n                      <!-- Button -->\n                      <mat-card-actions>\n                         <button mat-raised-button type=\"submit\" style=\"background-color:black;color: white;\"  (click)=\"onLogin(loginForm)\">Login</button>\n                       \n                      </mat-card-actions>\n                     <a><h6 style=\"color:black;margin-left: -18px;\"  routerLink=\"/register\">Don't have an account ? Register Here</h6></a>\n                  </form>\n               </mat-card-content><br>\n\n            </mat-card>\n      </div>\n    \n   </body>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/men/men.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/men/men.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav> \n<body>\n\n    <html>\n          <div>\n          <div>\n          <h1 style=\"text-align: center; font-size: 40px;\">Prices Inclusive Of All Taxes</h1>\n        <img src=\"/assets//mens.jpg\"  style=\"height:400px;width:1400px;margin-top: 50px;margin-right: 1200px;\">\n          </div>\n          \n        </div>\n        <h3 style=\"font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\">#FEATURED</h3>\n        <h6>Sunny days and sizzling looks are here again!</h6>\n        <!-- <div class=\"container\" style=\"display:flex; justify-content:space-around;margin-left: -37px;\">\n            <div>\n                <img src=\"/assets//back1.jpg\" style=\"height: 500px;width: 500px;\">\n            </div>\n            <div>\n                <img src=\"/assets//back2.jpg\" style=\"height: 500px;width: 500px;\">>\n            </div>\n            \n        </div>\n        <br>\n        <br>\n        \n        <div class=\"container\" style=\"display:flex; justify-content:space-around;margin-left: -37px;\">\n            <div>\n                <img src=\"/assets//back3.jpg \" style=\"height: 500px;width: 500px;\">>\n            </div>\n            <div>\n                <img src=\"/assets//back4.jpg\" style=\"height: 500px;width: 500px;\">>\n            </div>\n            \n        </div>\n        <br>\n        <br>\n        <div class=\"container\" style=\"display:flex; justify-content:space-around;margin-left: -37px;\">\n            <div>\n                <img src=\"/assets//back5.jpg\" style=\"height: 500px;width: 500px;\">>\n            </div>\n            <div>\n                <img src=\"/assets//back6.jpg\" style=\"height: 500px;width: 500px;\">>\n            </div>\n            \n        </div>\n        <br>\n        <br>\n         -->\n         <nav class=\"colourchange navbar align-items-center justify-content-center py-0 category-bar\">\n          <div  style=\"display:flex; justify-content:space-around;\">\n            \n              <div *ngFor=\"let item of categories\" class=\"categories\">\n                <div class=\"cursor\">\n                  <h1 (click)=\"sendCategory(item.category)\">{{item.category}}</h1>\n                </div>\n              </div>\n           \n            </div>\n          </nav>\n          \n          <div  style=\"display:flex; justify-content:space-around;\">\n          <div *ngFor=\"let product of mens\" class=\"categories\">\n  <mat-card class=\"example-card\" >\n     \n    <img mat-card-image src=\"{{product.image}}\" alt=\"Photo\">\n    <mat-card-content>\n        <p>Rs.</p><h4>{{product.price}}</h4>\n        \n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button  (click)=\"addToCart(product)\">Add To Cart</button>\n       \n    </mat-card-actions>\n    \n  </mat-card>\n  <br>\n  <br>\n\n</div>\n</div>\n\n    </html>\n\n</body>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <div class=\"container1\">\n    <h1>MYSHOP</h1>\n     \n     <h2 id=\"p1\"><i class=\"material-icons\" aria-setsize=\"20px\">\n       local_phone\n       </i> +91 9877063719</h2>\n  </div>\n \n <div id=\"id2\">\n   <div id=\"id4\">\n <button mat-button [matMenuTriggerFor]=\"aboveMenu\" routerLink=\"/navbar\" style=\"font-size: 20px;\">HOME</button>\n \n <button mat-button [matMenuTriggerFor]=\"belowMenu\" routerLink=\"/men\" style=\"font-size: 20px;\">MEN</button>\n \n <button mat-button [matMenuTriggerFor]=\"belowMenu\" routerLink=\"/women\" style=\"font-size: 20px;\">WOMEN</button>\n \n <button mat-button [matMenuTriggerFor]=\"belowMenu\" routerLink=\"/contact\" style=\"font-size: 20px;\">CONTACT US</button>\n <a routerLink=\"/cart\" class=\"button fancy-button\">\n  <i class=\"material-icons\" style=\"size: 30px; margin-left: 700px;\">shopping_cart</i>\n</a>\n </div>\n </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <div class=\"container1\">\n   <h1>MYSHOP</h1>\n    \n    <h2 id=\"p1\"><i class=\"material-icons\" aria-setsize=\"20px\">\n      local_phone\n      </i> +91 9877063719</h2>\n </div>\n\n<div id=\"id2\">\n  <div id=\"id4\">\n<button mat-button [matMenuTriggerFor]=\"aboveMenu\" routerLink=\"/navbar\" style=\"font-size: 20px;\">HOME</button>\n\n<button mat-button [matMenuTriggerFor]=\"belowMenu\" routerLink=\"/men\" style=\"font-size: 20px;\">MEN</button>\n\n<button mat-button [matMenuTriggerFor]=\"belowMenu\" routerLink=\"/women\" style=\"font-size: 20px;\">WOMEN</button>\n\n<button mat-button [matMenuTriggerFor]=\"belowMenu\" routerLink=\"/contact\" style=\"font-size: 20px;\">CONTACT US</button>\n<a routerLink=\"/cart\" class=\"button fancy-button\">\n  <i class=\"material-icons\" style=\"size: 30px; margin-left: 700px;\">shopping_cart</i>\n</a>\n</div>\n</div>\n<div class=\"container\"> \n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li  data-slide-to=\"0\" class=\"active\"></li>\n      <li  data-slide-to=\"1\"></li>\n      <li  data-slide-to=\"2\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img src=\"assets\\\\wall1.jpg\" alt=\"Los Angeles\">\n        <div class=\"carousel-caption\">\n          <h1 style=\"color:black;font-size: 70px;font-family:Verdana, Geneva, Tahoma, sans-serif\"><b>2020</b></h1>\n          <h1 style=\"color:black;font-size: 60px;font-weight: bold;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\">COLLECTION</h1>\n          <p></p>\n        </div>\n      </div>\n\n      <div class=\"item\">\n        <img src=\"assets\\\\wall2.jpg\" alt=\"Chicago\" >\n        <div class=\"carousel-caption\">\n          <h1 style=\"color:red;font-size:70px;\">ALL Brands</h1>\n          <h1 style=\"font-size: 70px;\">ON OFFER</h1>\n          <h1 style=\"font-size: 70px;\">50-80% Off</h1>\n        </div>\n      </div>\n    \n      <div class=\"item\">\n        <img src=\"assets\\\\wall3.jpg\" alt=\"New york\" >\n        <div class=\"carousel-caption\">\n          <h1>New Trends</h1>\n          <p></p>\n        </div>\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>\n\n<div id=\"crd\" style=\"display:flex; justify-content:space-around\">\n  <mat-card class=\"example-card\">\n    <i class=\"material-icons\" style=\"margin-left: 50px;\">\n      shopping_cart\n      </i>\n      \n\n    <mat-card-title>FREE SHIPPING</mat-card-title>\n    <mat-card-subtitle style=\"text-align: center;\"><i>on order over $150.0</i></mat-card-subtitle>\n  </mat-card>\n  <mat-card class=\"example-card\">\n    <i class=\"material-icons\"  style=\"margin-left: 50px;\">\n      shopping_cart\n      </i>\n    <mat-card-title>100% ORIGINAL</mat-card-title>\n    <mat-card-subtitle style=\"text-align: center;\"><i>NO Fake.No Duplicate</i></mat-card-subtitle>\n  </mat-card>\n  <mat-card class=\"example-card\">\n    <i class=\"material-icons\"  style=\"margin-left: 50px;\">\n      shopping_cart\n      </i>\n    <mat-card-title>EASY RETURNS</mat-card-title>\n    <mat-card-subtitle style=\"text-align: center;\"><i>Easy And Free Of Cost</i></mat-card-subtitle>\n  </mat-card>\n  <mat-card class=\"example-card\">\n    <i class=\"material-icons\"  style=\"margin-left: 50px;\">\n      shopping_cart\n      </i>\n    <mat-card-title>CASH ON DELIVERY</mat-card-title>\n    <mat-card-subtitle style=\"text-align:center;\"><i>Order And COD</i></mat-card-subtitle>\n  </mat-card>\n \n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n   <html>\n     \n     \n<!------ Include the above in your HEAD tag ---------->\n\n<!-- Displaying Message in the HTML -->\n\n<body>\n      <div class=\"register\">\n  \n    <div class=\"msg\">\n        <h1 style=\"color: black;\">{{message}}</h1>\n       </div>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <form>\n                <fieldset>\n                    <legend class=\"text-center\">REGISTER HERE<span class=\"req\"><small>\n                                *</small></span></legend>\n\n                    <div class=\"form-group\">\n                       <h1 >FirstName:</h1>\n                        <input required type=\"text\" [(ngModel)]=\"user.firstName\" [ngModelOptions]=\"{standalone: true}\"\n                            class=\"form-control phone\" maxlength=\"28\" placeholder=\"Enter your firstName\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <h1 >FirstName:</h1>\n                         <input required type=\"text\" [(ngModel)]=\"user.lastName\" [ngModelOptions]=\"{standalone: true}\"\n                             class=\"form-control phone\" maxlength=\"28\" placeholder=\"Enter your lastName\" />\n                     </div>\n                     <div class=\"form-group\">\n                        <h1 >FirstName:</h1>\n                         <input required type=\"text\" [(ngModel)]=\"user.email\" [ngModelOptions]=\"{standalone: true}\"\n                             class=\"form-control phone\" maxlength=\"28\" placeholder=\"Enter your email\" />\n                     </div>\n                    <div class=\"form-group\">\n                        <label for=\"firstname\"><span class=\"req\">* </span> Last Name: <small>This will be your login Last Name</small> </label>\n                        <input class=\"form-control\" type=\"text\"  [(ngModel)]=\"user.password\" [ngModelOptions]=\"{standalone: true}\" required\n                       placeholder=\"Enter valid password\" />\n                        <div id=\"errFirst\"></div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <br>\n                        <br>\n                        <input style=\"background-color: #ff0000;\" class=\"btn btn-success\" type=\"submit\" name=\"submit_reg\" value=\"Register\" (click)=\"registerProcess()\">&nbsp;\n                        <input style=\"background-color: red;\" class=\"btn btn-success\" type=\"submit\" name=\"submit_reg\" value=\"login\" routerLink=\"/login\">\n                    </div>\n                </fieldset>\n            </form><!-- ends register form -->\n            <!-- second for to fiter user-->\n        </div><!-- ends col-6 -->\n\n    </div>\n      </div>\n\n    </body>\n </html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/women/women.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/women/women.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-nav></app-nav> \n<body>\n\n    <html>\n          <div>\n          <div>\n          <h1 style=\"text-align: center; font-size: 40px;\">Prices Inclusive Of All Taxes</h1>\n        <img src=\"/assets//womenss.jpg\"  style=\"height:400px;width:1400px;margin-top: 50px;margin-right: 1200px;\">\n          </div>\n          \n        </div>\n        <h3 style=\"font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\">#FEATURED</h3>\n        <h6>Sunny days and sizzling looks are here again!</h6>\n        <!-- <div class=\"container\" style=\"display:flex; justify-content:space-around;margin-left: -37px;\">\n            <div>\n                <img src=\"/assets//back1.jpg\" style=\"height: 500px;width: 500px;\">\n            </div>\n            <div>\n                <img src=\"/assets//back2.jpg\" style=\"height: 500px;width: 500px;\">>\n            </div>\n            \n        </div>\n        <br>\n        <br>\n        \n        <div class=\"container\" style=\"display:flex; justify-content:space-around;margin-left: -37px;\">\n            <div>\n                <img src=\"/assets//back3.jpg \" style=\"height: 500px;width: 500px;\">>\n            </div>\n            <div>\n                <img src=\"/assets//back4.jpg\" style=\"height: 500px;width: 500px;\">>\n            </div>\n            \n        </div>\n        <br>\n        <br>\n        <div class=\"container\" style=\"display:flex; justify-content:space-around;margin-left: -37px;\">\n            <div>\n                <img src=\"/assets//back5.jpg\" style=\"height: 500px;width: 500px;\">>\n            </div>\n            <div>\n                <img src=\"/assets//back6.jpg\" style=\"height: 500px;width: 500px;\">>\n            </div>\n            \n        </div>\n        <br>\n        <br>\n         -->\n         <nav class=\"colourchange navbar align-items-center justify-content-center py-0 category-bar\">\n          <div  style=\"display:flex; justify-content:space-around;\">\n            \n              <div *ngFor=\"let item of categories\" class=\"categories\">\n                <div class=\"cursor\">\n                  <h1 style=\"color: blue;text-shadow: black;\"   (click)=\"sendCategory(item.category)\">{{item.category}}</h1>\n                </div>\n              </div>\n           \n            </div>\n          </nav>\n          \n          <div  style=\"display:flex; justify-content:space-around;\">\n          <div *ngFor=\"let product of women\" class=\"categories\">\n  <mat-card class=\"example-card\" >\n    <mat-card-header>\n<!--       \n      <mat-card-title></mat-card-title>\n      <mat-card-subtitle></mat-card-subtitle> -->\n    </mat-card-header>\n    <img mat-card-image src=\"{{product.image}}\" alt=\"Photo\">\n    <mat-card-content>\n        <p>Rs.</p><h4>{{product.price}}</h4>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button (click)=\"addToCart(product)\">Add To Cart</button>\n      \n    </mat-card-actions>\n    \n  </mat-card>\n  <br>\n  <br>\n\n</div>\n</div>\n\n    </html>\n\n</body>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-route.ts":
/*!******************************!*\
  !*** ./src/app/app-route.ts ***!
  \******************************/
/*! exports provided: MAIN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_ROUTES", function() { return MAIN_ROUTES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _men_men_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./men/men.component */ "./src/app/men/men.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _women_women_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./women/women.component */ "./src/app/women/women.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");









const MAIN_ROUTES = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'navbar', component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"] },
    { path: 'men', component: _men_men_component__WEBPACK_IMPORTED_MODULE_5__["MenComponent"] },
    { path: 'nav', component: _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"] },
    { path: 'women', component: _women_women_component__WEBPACK_IMPORTED_MODULE_7__["WomenComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-route */ "./src/app/app-route.ts");




const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_route__WEBPACK_IMPORTED_MODULE_3__["MAIN_ROUTES"])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Project';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/Button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/Input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/Card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/Toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_register_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-register.service */ "./src/app/user-register.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _men_men_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./men/men.component */ "./src/app/men/men.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _women_women_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./women/women.component */ "./src/app/women/women.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"],
            _men_men_component__WEBPACK_IMPORTED_MODULE_19__["MenComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_20__["NavComponent"],
            _women_women_component__WEBPACK_IMPORTED_MODULE_21__["WomenComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_22__["CartComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_Button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_Input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_material_Card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_Toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"]
        ],
        providers: [_user_register_service__WEBPACK_IMPORTED_MODULE_16__["UserRegistrationService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CartService = class CartService {
    constructor(http) {
        this.http = http;
        this.items = [];
    }
    doAdd(cart) {
        return this.http.post("http://localhost:8080/addToCart", cart, { responseType: 'text' });
    }
    gettingCartItems() {
        return this.http.get("http://localhost:8080/getcartitems");
    }
    // public clearCart()
    // {
    //   return this.http.delete("http://localhost8080/clearcart");
    // }
    deleteItem(id) {
        return this.http.delete("http://localhost:8080/rem/" + id);
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/cart.ts":
/*!*************************!*\
  !*** ./src/app/cart.ts ***!
  \*************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Cart {
    constructor(id, name, details, image, category, subCategory) {
    }
}


/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  /* .example-card2\r\n  \r\n  {\r\n      width:600px;\r\n      height: 100px;\r\n  }\r\n  .example-card1\r\n  {\r\n      width:600px;\r\n      height: 50px;\r\n  } */\r\n  /* .example-card {\r\n    width: 400px;\r\n    height:300px;\r\n    margin-left:60px;\r\n  \r\n  }\r\n*/\r\n  .example-card1\r\n  {\r\n    width:600px;\r\n    height:150px;\r\n    margin-top: 20px;\r\n   margin-left: 520px;\r\n   background-color: honeydew;\r\n    \r\n  }\r\n  table {\r\n    border-collapse: collapse;\r\n    margin-left: 190px;\r\n  }\r\n  table, th, td {\r\n    border: 2px solid black;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFOzs7Ozs7Ozs7O0tBVUc7RUFDSDs7Ozs7O0NBTUQ7RUFDQzs7SUFFRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtHQUNqQixrQkFBa0I7R0FDbEIsMEJBQTBCOztFQUUzQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjtFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAvKiAuZXhhbXBsZS1jYXJkMlxyXG4gIFxyXG4gIHtcclxuICAgICAgd2lkdGg6NjAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG4gIC5leGFtcGxlLWNhcmQxXHJcbiAge1xyXG4gICAgICB3aWR0aDo2MDBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH0gKi9cclxuICAvKiAuZXhhbXBsZS1jYXJkIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDozMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjYwcHg7XHJcbiAgXHJcbiAgfVxyXG4qL1xyXG4gIC5leGFtcGxlLWNhcmQxXHJcbiAge1xyXG4gICAgd2lkdGg6NjAwcHg7XHJcbiAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICBtYXJnaW4tbGVmdDogNTIwcHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3O1xyXG4gICAgXHJcbiAgfSBcclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5MHB4O1xyXG4gIH1cclxuICBcclxuICB0YWJsZSwgdGgsIHRkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let CartComponent = class CartComponent {
    constructor(http, router, cartService) {
        this.http = http;
        this.router = router;
        this.cartService = cartService;
        this.counter = 1;
        let response = this.cartService.gettingCartItems();
        response.subscribe((data) => this.items = data);
    }
    clear() {
        let response = this.http.delete("http://localhost8080/clearcart");
        //  console.log(this.items);
    }
    ngOnInit() {
    }
    total() {
        let tot = 0;
        for (var i = 0; i < this.items.length; i++) {
            tot = tot + this.items[i].price;
        }
        return tot;
    }
    checkout() {
        let s = this.items.length;
        if (s >= 1) {
            alert("Your Order Confirmed");
        }
        else {
            alert("Put some items in the cart");
        }
    }
    total1() {
        let quat = 0;
        quat = this.items.length;
        return quat;
    }
    deleteItem(id) {
        alert("Do you want to remove this item from bag.After removing kindly refresh it.");
        let re = this.cartService.deleteItem(id);
        re.subscribe((data) => console.log(data));
    }
};
CartComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    background-color: #444442;\r\n    padding-top: 85px;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Poppins', sans-serif, 'arial';\r\n    font-weight: 600;\r\n    font-size: 72px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\nh4 {\r\n    font-family: 'Roboto', sans-serif, 'arial';\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    color: #9b9b9b;\r\n    line-height: 1.5;\r\n}\r\n\r\n/* ///// inputs /////*/\r\n\r\ninput:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {\r\n    font-size: 0.75em;\r\n    color: #999;\r\n    top: -5px;\r\n    -webkit-transition: all 0.225s ease;\r\n    transition: all 0.225s ease;\r\n}\r\n\r\n.styled-input {\r\n    float: left;\r\n    width: 293px;\r\n    margin: 1rem 0;\r\n    position: relative;\r\n    border-radius: 4px;\r\n}\r\n\r\n@media only screen and (max-width: 768px){\r\n    .styled-input {\r\n        width:100%;\r\n    }\r\n}\r\n\r\n.styled-input label {\r\n    color: #999;\r\n    padding: 1.3rem 30px 1rem 30px;\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 0;\r\n    -webkit-transition: all 0.25s ease;\r\n    transition: all 0.25s ease;\r\n    pointer-events: none;\r\n}\r\n\r\n.styled-input.wide { \r\n    width: 650px;\r\n    max-width: 100%;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n    padding: 30px;\r\n    border: 0;\r\n    width: 100%;\r\n    font-size: 1rem;\r\n    background-color: #2d2d2d;\r\n    color: white;\r\n    border-radius: 4px;\r\n}\r\n\r\ninput:focus,\r\ntextarea:focus { outline: 0; }\r\n\r\ninput:focus ~ span,\r\ntextarea:focus ~ span {\r\n    width: 100%;\r\n    -webkit-transition: all 0.075s ease;\r\n    transition: all 0.075s ease;\r\n}\r\n\r\ntextarea {\r\n    width: 100%;\r\n    min-height: 15em;\r\n}\r\n\r\n.input-container {\r\n    width: 650px;\r\n    max-width: 100%;\r\n    margin: 20px auto 25px auto;\r\n}\r\n\r\n.submit-btn {\r\n  \r\n    padding: 7px 35px;\r\n    border-radius: 60px;\r\n    display: inline-block;\r\n    background-color: #4b8cfb;\r\n    color: white;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),\r\n              0 2px 10px 0 rgba(0,0,0,0.07);\r\n    -webkit-transition: all 300ms ease;\r\n    transition: all 300ms ease;\r\n}\r\n\r\n.submit-btn:hover {\r\n    -webkit-transform: translateY(1px);\r\n            transform: translateY(1px);\r\n    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),\r\n              0 1px 1px 0 rgba(0,0,0,0.09);\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .submit-btn {\r\n        width:100%;\r\n        float: none;\r\n        text-align:center;\r\n    }\r\n}\r\n\r\ninput[type=checkbox] + label {\r\n  color: #ccc;\r\n  font-style: italic;\r\n}\r\n\r\ninput[type=checkbox]:checked + label {\r\n  color: #f00;\r\n  font-style: normal;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUEsc0JBQXNCOztBQUV0QjtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsU0FBUztJQUNULG1DQUFtQztJQUNuQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1Asa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7aUJBQ2lCLFVBQVUsRUFBRTs7QUFFN0I7O0lBRUksV0FBVztJQUNYLG1DQUFtQztJQUNuQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZiwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmOzJDQUN1QztJQUN2QyxrQ0FBa0M7SUFDbEMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQjswQ0FDc0M7QUFDMUM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixXQUFXO1FBQ1gsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQyO1xyXG4gICAgcGFkZGluZy10b3A6IDg1cHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYsICdhcmlhbCc7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM5YjliOWI7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4vKiAvLy8vLyBpbnB1dHMgLy8vLy8qL1xyXG5cclxuaW5wdXQ6Zm9jdXMgfiBsYWJlbCwgdGV4dGFyZWE6Zm9jdXMgfiBsYWJlbCwgaW5wdXQ6dmFsaWQgfiBsYWJlbCwgdGV4dGFyZWE6dmFsaWQgfiBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yMjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yMjVzIGVhc2U7XHJcbn1cclxuXHJcbi5zdHlsZWQtaW5wdXQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjkzcHg7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAuc3R5bGVkLWlucHV0IHtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3R5bGVkLWlucHV0IGxhYmVsIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgcGFkZGluZzogMS4zcmVtIDMwcHggMXJlbSAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uc3R5bGVkLWlucHV0LndpZGUgeyBcclxuICAgIHdpZHRoOiA2NTBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyB7IG91dGxpbmU6IDA7IH1cclxuXHJcbmlucHV0OmZvY3VzIH4gc3BhbixcclxudGV4dGFyZWE6Zm9jdXMgfiBzcGFuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4wNzVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4wNzVzIGVhc2U7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTVlbTtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyNXB4IGF1dG87XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuIHtcclxuICBcclxuICAgIHBhZGRpbmc6IDdweCAzNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YjhjZmI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLDAuMDYpLFxyXG4gICAgICAgICAgICAgIDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLDAuMDcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG59XHJcblxyXG4uc3VibWl0LWJ0bjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMC4xMCksXHJcbiAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwwLjA5KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuc3VibWl0LWJ0biB7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59IFxyXG5cclxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsIHtcclxuICBjb2xvcjogI2YwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../user-login.service */ "./src/app/user-login.service.ts");




let ContactComponent = class ContactComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
    }
    ngOnInit() {
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_login_service__WEBPACK_IMPORTED_MODULE_3__["UserLoginService"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".site-footer\r\n{\r\n  background-color:#26272b;\r\n  padding:45px 0 20px;\r\n  font-size:15px;\r\n  line-height:24px;\r\n  color:#737373;\r\n}\r\n.site-footer hr\r\n{\r\n  border-top-color:#bbb;\r\n  opacity:0.5\r\n}\r\n.site-footer hr.small\r\n{\r\n  margin:20px 0\r\n}\r\n.site-footer h6\r\n{\r\n  color:#fff;\r\n  font-size:16px;\r\n  text-transform:uppercase;\r\n  margin-top:5px;\r\n  letter-spacing:2px\r\n}\r\n.site-footer a\r\n{\r\n  color:#737373;\r\n}\r\n.site-footer a:hover\r\n{\r\n  color:#3366cc;\r\n  text-decoration:none;\r\n}\r\n.footer-links\r\n{\r\n  padding-left:0;\r\n  list-style:none\r\n}\r\n.footer-links li\r\n{\r\n  display:block\r\n}\r\n.footer-links a\r\n{\r\n  color:#737373\r\n}\r\n.footer-links a:active,.footer-links a:focus,.footer-links a:hover\r\n{\r\n  color:#3366cc;\r\n  text-decoration:none;\r\n}\r\n.footer-links.inline li\r\n{\r\n  display:inline-block\r\n}\r\n.site-footer .social-icons\r\n{\r\n  text-align:right\r\n}\r\n.site-footer .social-icons a\r\n{\r\n  width:40px;\r\n  height:40px;\r\n  line-height:40px;\r\n  margin-left:6px;\r\n  margin-right:0;\r\n  border-radius:100%;\r\n  background-color:#33353d\r\n}\r\n.copyright-text\r\n{\r\n  margin:0\r\n}\r\n@media (max-width:991px)\r\n{\r\n  .site-footer [class^=col-]\r\n  {\r\n    margin-bottom:30px\r\n  }\r\n}\r\n@media (max-width:767px)\r\n{\r\n  .site-footer\r\n  {\r\n    padding-bottom:0\r\n  }\r\n  .site-footer .copyright-text,.site-footer .social-icons\r\n  {\r\n    text-align:center\r\n  }\r\n}\r\n.social-icons\r\n{\r\n  padding-left:0;\r\n  margin-bottom:0;\r\n  list-style:none\r\n}\r\n.social-icons li\r\n{\r\n  display:inline-block;\r\n  margin-bottom:4px\r\n}\r\n.social-icons li.title\r\n{\r\n  margin-right:15px;\r\n  text-transform:uppercase;\r\n  color:#96a2b2;\r\n  font-weight:700;\r\n  font-size:13px\r\n}\r\n.social-icons a{\r\n  background-color:#eceeef;\r\n  color:#818a91;\r\n  font-size:16px;\r\n  display:inline-block;\r\n  line-height:44px;\r\n  width:44px;\r\n  height:44px;\r\n  text-align:center;\r\n  margin-right:8px;\r\n  border-radius:100%;\r\n  -webkit-transition:all .2s linear;\r\n  transition:all .2s linear\r\n}\r\n.social-icons a:active,.social-icons a:focus,.social-icons a:hover\r\n{\r\n  color:#fff;\r\n  background-color:#29aafe\r\n}\r\n.social-icons.size-sm a\r\n{\r\n  line-height:34px;\r\n  height:34px;\r\n  width:34px;\r\n  font-size:14px\r\n}\r\n.social-icons a.facebook:hover\r\n{\r\n  background-color:#3b5998\r\n}\r\n.social-icons a.twitter:hover\r\n{\r\n  background-color:#00aced\r\n}\r\n.social-icons a.linkedin:hover\r\n{\r\n  background-color:#007bb6\r\n}\r\n.social-icons a.dribbble:hover\r\n{\r\n  background-color:#ea4c89\r\n}\r\n@media (max-width:767px)\r\n{\r\n  .social-icons li.title\r\n  {\r\n    display:block;\r\n    margin-right:0;\r\n    font-weight:600;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFDQTs7RUFFRSxxQkFBcUI7RUFDckI7QUFDRjtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Q7QUFDRjtBQUNBOztFQUVFLGFBQWE7QUFDZjtBQUNBOztFQUVFLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7QUFDQTs7RUFFRSxjQUFjO0VBQ2Q7QUFDRjtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsYUFBYTtFQUNiLG9CQUFvQjtBQUN0QjtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEI7QUFDRjtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRTs7SUFFRTtFQUNGO0FBQ0Y7QUFDQTs7RUFFRTs7SUFFRTtFQUNGO0VBQ0E7O0lBRUU7RUFDRjtBQUNGO0FBQ0E7O0VBRUUsY0FBYztFQUNkLGVBQWU7RUFDZjtBQUNGO0FBQ0E7O0VBRUUsb0JBQW9CO0VBQ3BCO0FBQ0Y7QUFDQTs7RUFFRSxpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixlQUFlO0VBQ2Y7QUFDRjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUVqQztBQUNGO0FBQ0E7O0VBRUUsVUFBVTtFQUNWO0FBQ0Y7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7RUFDVjtBQUNGO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFOztJQUVFLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpdGUtZm9vdGVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMyNjI3MmI7XHJcbiAgcGFkZGluZzo0NXB4IDAgMjBweDtcclxuICBmb250LXNpemU6MTVweDtcclxuICBsaW5lLWhlaWdodDoyNHB4O1xyXG4gIGNvbG9yOiM3MzczNzM7XHJcbn1cclxuLnNpdGUtZm9vdGVyIGhyXHJcbntcclxuICBib3JkZXItdG9wLWNvbG9yOiNiYmI7XHJcbiAgb3BhY2l0eTowLjVcclxufVxyXG4uc2l0ZS1mb290ZXIgaHIuc21hbGxcclxue1xyXG4gIG1hcmdpbjoyMHB4IDBcclxufVxyXG4uc2l0ZS1mb290ZXIgaDZcclxue1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIG1hcmdpbi10b3A6NXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOjJweFxyXG59XHJcbi5zaXRlLWZvb3RlciBhXHJcbntcclxuICBjb2xvcjojNzM3MzczO1xyXG59XHJcbi5zaXRlLWZvb3RlciBhOmhvdmVyXHJcbntcclxuICBjb2xvcjojMzM2NmNjO1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5mb290ZXItbGlua3Ncclxue1xyXG4gIHBhZGRpbmctbGVmdDowO1xyXG4gIGxpc3Qtc3R5bGU6bm9uZVxyXG59XHJcbi5mb290ZXItbGlua3MgbGlcclxue1xyXG4gIGRpc3BsYXk6YmxvY2tcclxufVxyXG4uZm9vdGVyLWxpbmtzIGFcclxue1xyXG4gIGNvbG9yOiM3MzczNzNcclxufVxyXG4uZm9vdGVyLWxpbmtzIGE6YWN0aXZlLC5mb290ZXItbGlua3MgYTpmb2N1cywuZm9vdGVyLWxpbmtzIGE6aG92ZXJcclxue1xyXG4gIGNvbG9yOiMzMzY2Y2M7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuLmZvb3Rlci1saW5rcy5pbmxpbmUgbGlcclxue1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrXHJcbn1cclxuLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnNcclxue1xyXG4gIHRleHQtYWxpZ246cmlnaHRcclxufVxyXG4uc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyBhXHJcbntcclxuICB3aWR0aDo0MHB4O1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OjQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6NnB4O1xyXG4gIG1hcmdpbi1yaWdodDowO1xyXG4gIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzM1M2RcclxufVxyXG4uY29weXJpZ2h0LXRleHRcclxue1xyXG4gIG1hcmdpbjowXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpXHJcbntcclxuICAuc2l0ZS1mb290ZXIgW2NsYXNzXj1jb2wtXVxyXG4gIHtcclxuICAgIG1hcmdpbi1ib3R0b206MzBweFxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweClcclxue1xyXG4gIC5zaXRlLWZvb3RlclxyXG4gIHtcclxuICAgIHBhZGRpbmctYm90dG9tOjBcclxuICB9XHJcbiAgLnNpdGUtZm9vdGVyIC5jb3B5cmlnaHQtdGV4dCwuc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29uc1xyXG4gIHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyXHJcbiAgfVxyXG59XHJcbi5zb2NpYWwtaWNvbnNcclxue1xyXG4gIHBhZGRpbmctbGVmdDowO1xyXG4gIG1hcmdpbi1ib3R0b206MDtcclxuICBsaXN0LXN0eWxlOm5vbmVcclxufVxyXG4uc29jaWFsLWljb25zIGxpXHJcbntcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBtYXJnaW4tYm90dG9tOjRweFxyXG59XHJcbi5zb2NpYWwtaWNvbnMgbGkudGl0bGVcclxue1xyXG4gIG1hcmdpbi1yaWdodDoxNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICBjb2xvcjojOTZhMmIyO1xyXG4gIGZvbnQtd2VpZ2h0OjcwMDtcclxuICBmb250LXNpemU6MTNweFxyXG59XHJcbi5zb2NpYWwtaWNvbnMgYXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNlY2VlZWY7XHJcbiAgY29sb3I6IzgxOGE5MTtcclxuICBmb250LXNpemU6MTZweDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBsaW5lLWhlaWdodDo0NHB4O1xyXG4gIHdpZHRoOjQ0cHg7XHJcbiAgaGVpZ2h0OjQ0cHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OjhweDtcclxuICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMnMgbGluZWFyO1xyXG4gIC1vLXRyYW5zaXRpb246YWxsIC4ycyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjphbGwgLjJzIGxpbmVhclxyXG59XHJcbi5zb2NpYWwtaWNvbnMgYTphY3RpdmUsLnNvY2lhbC1pY29ucyBhOmZvY3VzLC5zb2NpYWwtaWNvbnMgYTpob3ZlclxyXG57XHJcbiAgY29sb3I6I2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMyOWFhZmVcclxufVxyXG4uc29jaWFsLWljb25zLnNpemUtc20gYVxyXG57XHJcbiAgbGluZS1oZWlnaHQ6MzRweDtcclxuICBoZWlnaHQ6MzRweDtcclxuICB3aWR0aDozNHB4O1xyXG4gIGZvbnQtc2l6ZToxNHB4XHJcbn1cclxuLnNvY2lhbC1pY29ucyBhLmZhY2Vib29rOmhvdmVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjU5OThcclxufVxyXG4uc29jaWFsLWljb25zIGEudHdpdHRlcjpob3ZlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDBhY2VkXHJcbn1cclxuLnNvY2lhbC1pY29ucyBhLmxpbmtlZGluOmhvdmVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiYjZcclxufVxyXG4uc29jaWFsLWljb25zIGEuZHJpYmJibGU6aG92ZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2VhNGM4OVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KVxyXG57XHJcbiAgLnNvY2lhbC1pY29ucyBsaS50aXRsZVxyXG4gIHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MDtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n margin: 0;\r\n padding: 0;\r\n background-image: url(\"/assets//login.jpg\");\r\n background-size: cover;\r\n background-position: center;\r\n font-family: sans-serif;\r\n opacity: 200px;\r\n \r\n}\r\nspan\r\n{\r\n  margin-left: 126px;\r\n\r\n}\r\n.toolbarwidth\r\n{\r\n  background-color: black;\r\n}\r\na{\r\n  text-align: none;\r\n}\r\n.form\r\n{\r\n  \r\n  margin-left: 480px;\r\nwidth: 400px;\r\n}\r\n.my-form\r\n{\r\n  margin-left:90px;\r\n}\r\n.mat-card-actions\r\n{\r\n margin-left: 60px;\r\n color:white;\r\n \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsMkNBQTJDO0NBQzNDLHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0NBQ3ZCLGNBQWM7O0FBRWY7QUFDQTs7RUFFRSxrQkFBa0I7O0FBRXBCO0FBQ0E7O0VBRUUsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7O0VBR0Usa0JBQWtCO0FBQ3BCLFlBQVk7QUFDWjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztDQUVDLGlCQUFpQjtDQUNqQixXQUFXOztBQUVaIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiBtYXJnaW46IDA7XHJcbiBwYWRkaW5nOiAwO1xyXG4gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy8vbG9naW4uanBnXCIpO1xyXG4gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gb3BhY2l0eTogMjAwcHg7XHJcbiBcclxufVxyXG5zcGFuXHJcbntcclxuICBtYXJnaW4tbGVmdDogMTI2cHg7XHJcblxyXG59XHJcbi50b29sYmFyd2lkdGhcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbmF7XHJcbiAgdGV4dC1hbGlnbjogbm9uZTtcclxufVxyXG4uZm9ybVxyXG57XHJcbiAgXHJcbiAgbWFyZ2luLWxlZnQ6IDQ4MHB4O1xyXG53aWR0aDogNDAwcHg7XHJcbn1cclxuLm15LWZvcm1cclxue1xyXG4gIG1hcmdpbi1sZWZ0OjkwcHg7XHJcbn1cclxuLm1hdC1jYXJkLWFjdGlvbnNcclxue1xyXG4gbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiBjb2xvcjp3aGl0ZTtcclxuIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../user-login.service */ "./src/app/user-login.service.ts");




let LoginComponent = class LoginComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        let response = this.service.gettingCredentials();
        response.subscribe((data) => this.credentials = data);
    }
    ngOnInit() {
    }
    LoginProcess(form) {
        if (form.invalid) {
            console.log("Invalid");
            return;
        }
        const post = { pssword: form.value.password, email_id: form.value.email };
        console.log(post);
    }
    onLogin(form) {
        let flag = true;
        let email = form.value.email;
        let password = form.value.password;
        for (let i in this.credentials) {
            if (email == this.credentials[i].email && password == this.credentials[i].password && form.valid == true) {
                flag = false;
                this.router.navigateByUrl('/navbar');
                break;
            }
            else {
            }
        }
        if (flag == true) {
            alert("Invalid credentials");
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_login_service__WEBPACK_IMPORTED_MODULE_3__["UserLoginService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/men/men.component.css":
/*!***************************************!*\
  !*** ./src/app/men/men.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\r\n    margin-left: 40px;\r\n}\r\n.example-card {\r\n    max-width: 400px;\r\n  }\r\n.example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n  }\r\nmat-card-image{\r\n    -o-object-fit: cover;\r\n       object-fit: cover; /*this makes the image in src fit to the size specified below*/\r\n    width: 450px; /* Here you can use wherever you want to specify the width and also the height of the <img>*/\r\n    height: 450px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVuL21lbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLG1GQUFtRjtJQUNuRixzQkFBc0I7RUFDeEI7QUFDQTtJQUNFLG9CQUFpQjtPQUFqQixpQkFBaUIsRUFBRSw4REFBOEQ7SUFDakYsWUFBWSxFQUFFLDRGQUE0RjtJQUMxRyxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9tZW4vbWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbn1cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICBtYXQtY2FyZC1pbWFnZXtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyOyAvKnRoaXMgbWFrZXMgdGhlIGltYWdlIGluIHNyYyBmaXQgdG8gdGhlIHNpemUgc3BlY2lmaWVkIGJlbG93Ki9cclxuICAgIHdpZHRoOiA0NTBweDsgLyogSGVyZSB5b3UgY2FuIHVzZSB3aGVyZXZlciB5b3Ugd2FudCB0byBzcGVjaWZ5IHRoZSB3aWR0aCBhbmQgYWxzbyB0aGUgaGVpZ2h0IG9mIHRoZSA8aW1nPiovXHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/men/men.component.ts":
/*!**************************************!*\
  !*** ./src/app/men/men.component.ts ***!
  \**************************************/
/*! exports provided: MenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenComponent", function() { return MenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../user-login.service */ "./src/app/user-login.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../cart */ "./src/app/cart.ts");






let MenComponent = class MenComponent {
    constructor(router, service, cartService) {
        this.router = router;
        this.service = service;
        this.cartService = cartService;
        this.cart = new _cart__WEBPACK_IMPORTED_MODULE_5__["Cart"](0, " ", " ", "", " ", "");
        this.mens = [];
        this.categories = [
            { category: 'Men Tshirt' },
            { category: 'Men Shoes' },
        ];
        this.productList = [];
        this.items = [];
    }
    sendCategory(cat) {
        let response = this.service.getAllItems(cat);
        response.subscribe((data) => this.mens = data);
    }
    // public addToCart(product)
    // {
    //   this.cartService.addToCart(product);
    //   window.alert('Your product has been added to the cart!');
    // }
    addToCart(product) {
        let response = this.cartService.doAdd(product);
        response.subscribe((data) => this.items = data);
        window.alert('Your product has been added to the cart!');
    }
    ngOnInit() {
    }
};
MenComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_login_service__WEBPACK_IMPORTED_MODULE_3__["UserLoginService"] },
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
MenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-men',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./men.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/men/men.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./men.component.css */ "./src/app/men/men.component.css")).default]
    })
], MenComponent);



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1\r\n{\r\n    padding: 30px;\r\n    margin-top: 0px;\r\n}\r\n#p1\r\n{\r\n margin-top: -121px;\r\n margin-left: 900px;\r\n font-size: 30px;\r\n}\r\n#id2\r\n{\r\n    margin-top: 0px;\r\n    margin-left: 0px;\r\n    height:100px ;\r\n    background-color:whitesmoke;\r\n\r\n}\r\n.container1\r\n{\r\n    background-color:white;\r\n    width: 1350px;\r\n    height: 100px;\r\n    margin-left: 0px;\r\n}\r\n.container\r\n{\r\n    width:100%;\r\n    margin-left: 0px;\r\n    background-color: whitesmoke;\r\n}\r\n#id4\r\n{\r\n    \r\n    font-size: 51px;\r\n    line-height: -12px;\r\n\r\n}\r\n#oimg\r\n{\r\n    margin-top: -403px;\r\n}\r\n#srch\r\n{\r\n    margin-left: 500px;\r\n}\r\n.material-icons\r\n{\r\n    margin-top: 30px;\r\n    font-size: 43px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7O0NBRUMsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMkJBQTJCOztBQUUvQjtBQUNBOztJQUVJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDO0FBQ0E7OztJQUdJLGVBQWU7SUFDZixrQkFBa0I7O0FBRXRCO0FBQ0E7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMVxyXG57XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbiNwMVxyXG57XHJcbiBtYXJnaW4tdG9wOiAtMTIxcHg7XHJcbiBtYXJnaW4tbGVmdDogOTAwcHg7XHJcbiBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuI2lkMlxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgaGVpZ2h0OjEwMHB4IDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcclxuXHJcbn1cclxuLmNvbnRhaW5lcjFcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIHdpZHRoOiAxMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG4uY29udGFpbmVyXHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4jaWQ0XHJcbntcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiA1MXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IC0xMnB4O1xyXG5cclxufVxyXG4jb2ltZ1xyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAtNDAzcHg7XHJcbn1cclxuI3NyY2hcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwMHB4O1xyXG59XHJcbi5tYXRlcmlhbC1pY29uc1xyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiA0M3B4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1\r\n{\r\n    padding: 30px;\r\n    margin-top: 0px;\r\n}\r\n#p1\r\n{\r\n margin-top: -121px;\r\n margin-left: 900px;\r\n font-size: 30px;\r\n}\r\n#id2\r\n{\r\n    margin-top: 0px;\r\n    margin-left: 0px;\r\n    height:100px ;\r\n    background-color:whitesmoke;\r\n\r\n}\r\n.container1\r\n{\r\n    background-color:white;\r\n    width: 1350px;\r\n    height: 100px;\r\n    margin-left: 0px;\r\n}\r\n.container\r\n{\r\n    width:100%;\r\n    margin-left: 0px;\r\n    background-color: whitesmoke;\r\n}\r\n#id4\r\n{\r\n    \r\n    font-size: 51px;\r\n    line-height: -12px;\r\n\r\n}\r\n#oimg\r\n{\r\n    margin-top: -403px;\r\n}\r\n#srch\r\n{\r\n    margin-left: 500px;\r\n}\r\n.material-icons\r\n{\r\n    margin-top: 30px;\r\n    font-size: 43px;\r\n}\r\n.example-card\r\n{\r\n    max-width: 400px;\r\n    background-color:whitesmoke;\r\n   \r\n    height: 190px;\r\n    padding: 50px;\r\n}\r\n#crd\r\n{\r\n\r\n    margin-top:-47px;\r\n}\r\n#id3\r\n{\r\n    background-image: url(back.jpg);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7O0NBRUMsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCO0FBQ0E7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMkJBQTJCOztBQUUvQjtBQUNBOztJQUVJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBOztJQUVJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDO0FBQ0E7OztJQUdJLGVBQWU7SUFDZixrQkFBa0I7O0FBRXRCO0FBQ0E7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsMkJBQTJCOztJQUUzQixhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBOzs7SUFHSSxnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSwrQkFBK0I7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMVxyXG57XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbiNwMVxyXG57XHJcbiBtYXJnaW4tdG9wOiAtMTIxcHg7XHJcbiBtYXJnaW4tbGVmdDogOTAwcHg7XHJcbiBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuI2lkMlxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgaGVpZ2h0OjEwMHB4IDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcclxuXHJcbn1cclxuLmNvbnRhaW5lcjFcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIHdpZHRoOiAxMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG4uY29udGFpbmVyXHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4jaWQ0XHJcbntcclxuICAgIFxyXG4gICAgZm9udC1zaXplOiA1MXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IC0xMnB4O1xyXG5cclxufVxyXG4jb2ltZ1xyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAtNDAzcHg7XHJcbn1cclxuI3NyY2hcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwMHB4O1xyXG59XHJcbi5tYXRlcmlhbC1pY29uc1xyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiA0M3B4O1xyXG59XHJcbi5leGFtcGxlLWNhcmRcclxue1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTtcclxuICAgXHJcbiAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgcGFkZGluZzogNTBweDtcclxufVxyXG4jY3JkXHJcbntcclxuXHJcbiAgICBtYXJnaW4tdG9wOi00N3B4O1xyXG59XHJcbiNpZDNcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGJhY2suanBnKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nbody{\r\n    margin: 0;\r\n    padding: 0;\r\n    background-image: url(\"/assets//register.png\");\r\n    background-size: cover;\r\n    background-position: center;\r\n    font-family: sans-serif;\r\n    opacity: 200px;\r\n   }\r\n   .register\r\n   {\r\n    margin-left:550px;\r\n    height:622px;\r\n    width:675px;\r\n     background:white;\r\n     color:#fff;\r\n     top:50%;\r\n     left:50%;\r\n      position: absolute;\r\n      -webkit-transform: translate(-50%,-50%);\r\n              transform: translate(-50%,-50%);\r\n      box-sizing: border-box;\r\n      padding:70px 30px;\r\n   }\r\n   .msg\r\n{\r\n\r\n  margin-left: -310px;\r\n}\r\n   h1{\r\n     margin:0;\r\n     padding:0 0 20px;\r\n     text-align: center;\r\n     font-size: 22px;\r\n   }\r\n   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLDhDQUE4QztJQUM5QyxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixjQUFjO0dBQ2Y7R0FDQTs7SUFFQyxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7S0FDVixnQkFBZ0I7S0FDaEIsVUFBVTtLQUNWLE9BQU87S0FDUCxRQUFRO01BQ1Asa0JBQWtCO01BQ2xCLHVDQUErQjtjQUEvQiwrQkFBK0I7TUFDL0Isc0JBQXNCO01BQ3RCLGlCQUFpQjtHQUNwQjtHQUNIOzs7RUFHRSxtQkFBbUI7QUFDckI7R0FDRztLQUNFLFFBQVE7S0FDUixnQkFBZ0I7S0FDaEIsa0JBQWtCO0tBQ2xCLGVBQWU7R0FDakIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJvZHl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy8vcmVnaXN0ZXIucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgb3BhY2l0eTogMjAwcHg7XHJcbiAgIH1cclxuICAgLnJlZ2lzdGVyXHJcbiAgIHtcclxuICAgIG1hcmdpbi1sZWZ0OjU1MHB4O1xyXG4gICAgaGVpZ2h0OjYyMnB4O1xyXG4gICAgd2lkdGg6Njc1cHg7XHJcbiAgICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgICBjb2xvcjojZmZmO1xyXG4gICAgIHRvcDo1MCU7XHJcbiAgICAgbGVmdDo1MCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgcGFkZGluZzo3MHB4IDMwcHg7XHJcbiAgIH1cclxuLm1zZ1xyXG57XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiAtMzEwcHg7XHJcbn1cclxuICAgaDF7XHJcbiAgICAgbWFyZ2luOjA7XHJcbiAgICAgcGFkZGluZzowIDAgMjBweDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICB9XHJcbiAgICJdfQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../user-register.service */ "./src/app/user-register.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../user */ "./src/app/user.ts");




let RegisterComponent = class RegisterComponent {
    constructor(service) {
        this.service = service;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]("", "", "", "");
    }
    registerProcess() {
        let response = this.service.doRegistration(this.user);
        response.subscribe((data) => this.message = data);
    }
    ngOnInit() {
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _user_register_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/user-login.service.ts":
/*!***************************************!*\
  !*** ./src/app/user-login.service.ts ***!
  \***************************************/
/*! exports provided: UserLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginService", function() { return UserLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserLoginService = class UserLoginService {
    constructor(http) {
        this.http = http;
    }
    gettingCredentials() {
        return this.http.get("http://localhost:8080/getAll");
    }
    gettingDetails() {
        return this.http.get("http://localhost:8080/get/");
    }
    getAllItems(subCategory) {
        return this.http.get('http://localhost:8080/getBy/' + subCategory);
    }
};
UserLoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserLoginService);



/***/ }),

/***/ "./src/app/user-register.service.ts":
/*!******************************************!*\
  !*** ./src/app/user-register.service.ts ***!
  \******************************************/
/*! exports provided: UserRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationService", function() { return UserRegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserRegistrationService = class UserRegistrationService {
    constructor(http) {
        this.http = http;
    }
    //Does a API Call using POST Http Method
    doRegistration(user) {
        return this.http.post("http://localhost:8080/create", user, { responseType: 'text' });
    }
};
UserRegistrationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserRegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserRegistrationService);



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(firstName, lastName, email, password) {
    }
}


/***/ }),

/***/ "./src/app/women/women.component.css":
/*!*******************************************!*\
  !*** ./src/app/women/women.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvbWVuL3dvbWVuLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/women/women.component.ts":
/*!******************************************!*\
  !*** ./src/app/women/women.component.ts ***!
  \******************************************/
/*! exports provided: WomenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WomenComponent", function() { return WomenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _user_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../user-login.service */ "./src/app/user-login.service.ts");





let WomenComponent = class WomenComponent {
    constructor(router, service, cartService) {
        this.router = router;
        this.service = service;
        this.cartService = cartService;
        this.women = [];
        this.items = [];
        this.categories = [
            { category: 'Women Tshirt' },
            { category: 'Women Shoes' },
        ];
        this.productList = [];
    }
    sendCategory(cat) {
        let response = this.service.getAllItems(cat);
        response.subscribe((data) => this.women = data);
    }
    addToCart(product) {
        let response = this.cartService.doAdd(product);
        response.subscribe((data) => this.items = data);
        window.alert('Your product has been added to the cart!');
    }
    ngOnInit() {
    }
};
WomenComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_login_service__WEBPACK_IMPORTED_MODULE_4__["UserLoginService"] },
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
];
WomenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-women',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./women.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/women/women.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./women.component.css */ "./src/app/women/women.component.css")).default]
    })
], WomenComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\Desktop\ShoppingFrontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map