(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,,,function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Logo:"SideDrawer_Logo__3voUv",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-"}},function(e,t,a){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis",ValidationError:"Input_ValidationError__qMR97"}},,,function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",Buttons:"BuildControls_Buttons__1NQXm",OrderButton:"BuildControls_OrderButton___M-Du",CancelButton:"BuildControls_CancelButton__SjDZz",enable:"BuildControls_enable__9xLsD"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},,,function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,a){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,,,,,,,,,,function(e,t,a){e.exports={Content:"Layout_Content__3H3X8"}},function(e,t,a){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},,function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},,function(e,t,a){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,a){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,a){e.exports={Loader:"Spinner_Loader__1twK-",load8:"Spinner_load8__36vjM"}},,function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},function(e,t,a){e.exports={ContactData:"ContactData_ContactData__20AK_"}},function(e,t,a){e.exports={Order:"Order_Order__3kYZJ"}},function(e,t,a){e.exports=a(84)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(40),i=a.n(l),o=a(14),c=(a(61),a(3)),s=a(4),u=a(6),d=a(5),m=a(1),h=a(41),p=a.n(h),g=function(e){return e.children},v=a(23),f=a.n(v),b=a(42),E=a.n(b),_=a(43),C=a.n(_),y=function(e){return r.a.createElement("div",{className:E.a.Logo},r.a.createElement("img",{src:C.a,alt:"MyBurger"}))},O=a(44),k=a.n(O),S=a(26),j=a.n(S),B=function(e){return r.a.createElement("li",{className:j.a.NavigationItem},r.a.createElement(o.b,{exact:!0,to:e.link,activeClassName:j.a.active},e.children))},I=function(){return r.a.createElement("ul",{className:k.a.NavigationItems},r.a.createElement(B,{link:"/"},"Burger Builder"),r.a.createElement(B,{link:"/orders"},"Orders"))},N=a(46),w=a.n(N),D=function(e){return r.a.createElement("div",{className:w.a.DrawerToggle,onClick:e.handleToggleSideDrawer},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},L=function(e){return r.a.createElement("header",{className:f.a.Toolbar},r.a.createElement(D,{handleToggleSideDrawer:e.handleToggleSideDrawer}),r.a.createElement("div",{className:f.a.Logo},r.a.createElement(y,null)),r.a.createElement("nav",{className:f.a.DesktopOnly},r.a.createElement(I,null)))},T=a(16),x=a.n(T),P=a(47),M=a.n(P),A=function(e){return e.visible?r.a.createElement("div",{className:M.a.Backdrop,onClick:e.close}):null},R=function(e){var t=[x.a.SideDrawer,x.a.Close];return e.showSideDrawer&&(t=[x.a.SideDrawer,x.a.Open]),r.a.createElement(g,null,r.a.createElement(A,{visible:e.showSideDrawer,close:e.closeSideDrawer}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:x.a.Logo},r.a.createElement(y,null)),r.a.createElement("nav",null,r.a.createElement(I,null))))},F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.closeSideDrawer=function(){e.setState({showSideDrawer:!1})},e.handleToggleSideDrawer=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(L,{handleToggleSideDrawer:this.handleToggleSideDrawer}),r.a.createElement(R,{showSideDrawer:this.state.showSideDrawer,closeSideDrawer:this.closeSideDrawer}),r.a.createElement("main",{className:p.a.Content},this.props.children))}}]),a}(r.a.Component),U=a(15),V=a(7),q=a(48),Y=a.n(q).a.create({baseURL:"https://burger-builder-v2-dd0b2.firebaseio.com/"}),K=a(24),X=a(49),J=a.n(X),W=a(12),z=a.n(W),Z=function(e){return function(e){var t=null;switch(e){case"bread-bottom":t=r.a.createElement("div",{className:z.a.BreadBottom});break;case"bread-top":t=r.a.createElement("div",{className:z.a.BreadTop},r.a.createElement("div",{className:z.a.Seeds1}),r.a.createElement("div",{className:z.a.Seeds2}));break;case"meat":t=r.a.createElement("div",{className:z.a.Meat});break;case"cheese":t=r.a.createElement("div",{className:z.a.Cheese});break;case"salad":t=r.a.createElement("div",{className:z.a.Salad});break;case"bacon":t=r.a.createElement("div",{className:z.a.Bacon});break;default:t=null}return t}(e.type)},H=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(K.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(Z,{key:t+a,type:t})}))})).reduce((function(e,t){return[].concat(Object(K.a)(e),Object(K.a)(t))}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:J.a.Burger},r.a.createElement(Z,{type:"bread-top"}),t,r.a.createElement(Z,{type:"bread-bottom"}))},Q=a(20),$=a.n(Q),G=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),ee=a(21),te=a.n(ee),ae=function(e){return r.a.createElement("div",{className:te.a.BuildControl},r.a.createElement("div",{className:te.a.Label},e.ingredientLabel),r.a.createElement("button",{className:te.a.Less,onClick:e.handleRemoveIngredient,disabled:e.disabledInfo},"Less"),r.a.createElement("button",{className:te.a.More,onClick:e.handleAddIngredient},"More"))},ne=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],re=function(e){return r.a.createElement("div",{className:$.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,G.format(e.totalPrice))),ne.map((function(t,a){return r.a.createElement(ae,{ingredientLabel:t.label,key:t.type+a,handleAddIngredient:function(){return e.handleAddIngredient(t.type)},handleRemoveIngredient:function(){return e.handleRemoveIngredient(t.type)},disabledInfo:e.disabledInfo[t.type]})})),r.a.createElement("div",{className:$.a.Buttons},r.a.createElement("button",{className:$.a.OrderButton,disabled:!e.purchasable,onClick:e.handleOrder},"ORDER NOW"),r.a.createElement("button",{className:$.a.CancelButton,disabled:!e.purchasable,onClick:e.handleClearOrder},"CLEAR")))},le=a(50),ie=a.n(le),oe=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.visible!==this.props.visible||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(A,{visible:this.props.visible,close:this.props.modalClose}),r.a.createElement("div",{className:ie.a.Modal,style:{transform:this.props.visible?"translateY(0)":"translateY(-100vh)",opacity:this.props.visible?1:0}},this.props.children))}}]),a}(r.a.Component),ce=a(29),se=a.n(ce),ue=function(e){return r.a.createElement("button",{disabled:e.disabled,className:[se.a.Button,se.a[e.buttonType]].join(" "),onClick:e.handleClick},e.children)},de=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.ingredients[t])}));return r.a.createElement(g,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",G.format(e.totalPrice))),r.a.createElement(ue,{handleClick:e.handleCancelPurchase,buttonType:"Danger"},"CANCEL"),r.a.createElement(ue,{handleClick:e.handleContinuePurchase,buttonType:"Success"},"CONTINUE"))},me=a(51),he=a.n(me),pe=function(){return r.a.createElement("div",{className:he.a.Loader},"Loading...")},ge=function(e,t){return function(a){Object(u.a)(l,a);var n=Object(d.a)(l);function l(){var e;Object(c.a)(this,l);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(e=n.call.apply(n,[this].concat(a))).state={error:null},e.handleErrorConfirmed=function(){e.setState({error:null})},e}return Object(s.a)(l,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.reqInt=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInt=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInt),t.interceptors.response.eject(this.resInt)}},{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(oe,{visible:this.state.error,modalClose:this.handleErrorConfirmed},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),l}(r.a.Component)},ve={salad:.5,cheese:.4,meat:1.3,bacon:.7},fe=ge(function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:null,totalPrice:0,purchasable:!1,ordered:!1,loading:!1,error:!1},e.updatePurchasable=function(t){var a=Object.values(t).reduce((function(e,t){return e+t}),0);e.setState({purchasable:a>0})},e.handleAddIngredient=function(t){var a=e.state.ingredients[t]+1,n=Object(V.a)(Object(V.a)({},e.state.ingredients),{},Object(U.a)({},t,a)),r=e.state.totalPrice+ve[t];e.setState({ingredients:n,totalPrice:r}),e.updatePurchasable(n)},e.handleRemoveIngredient=function(t){var a=e.state.ingredients[t];if(!(a<=0)){var n=a-1,r=Object(V.a)(Object(V.a)({},e.state.ingredients),{},Object(U.a)({},t,n)),l=e.state.totalPrice-ve[t];e.setState({ingredients:r,totalPrice:l}),e.updatePurchasable(r)}},e.handleOrder=function(){e.setState({ordered:!0})},e.handleClearOrder=function(){var t=Object(V.a)({},e.state.ingredients),a=Object.keys(t).map((function(e){return Object(U.a)({},e,0)})).reduce((function(e,t){return Object(V.a)(Object(V.a)({},e),t)}),{});e.setState({ingredients:a,totalPrice:0,purchasable:!1})},e.modalClose=function(){e.setState({ordered:!1})},e.handleContinuePurchase=function(){var t=[];for(var a in e.state.ingredients)t.push(encodeURIComponent(a)+"="+encodeURIComponent(e.state.ingredients[a]));t.push("price="+e.state.totalPrice);var n=t.join("&");e.props.history.push({pathname:"/checkout",search:"?"+n})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;Y.get("https://burger-builder-v2-dd0b2.firebaseio.com/ingredients.json").then((function(t){return e.setState({ingredients:t.data})})).catch((function(t){return e.setState({error:!0})}))}},{key:"render",value:function(){var e=Object(V.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=null,n=this.state.error?r.a.createElement("p",null,"Ingredients can't be loaded..."):r.a.createElement(pe,null);return this.state.ingredients&&(n=r.a.createElement(g,null,r.a.createElement(H,{ingredients:this.state.ingredients}),r.a.createElement(re,{handleAddIngredient:this.handleAddIngredient,handleRemoveIngredient:this.handleRemoveIngredient,disabledInfo:e,totalPrice:this.state.totalPrice,purchasable:this.state.purchasable,handleOrder:this.handleOrder,handleClearOrder:this.handleClearOrder})),a=r.a.createElement(de,{handleCancelPurchase:this.modalClose,handleContinuePurchase:this.handleContinuePurchase,ingredients:this.state.ingredients,totalPrice:this.state.totalPrice})),this.state.loading&&(a=r.a.createElement(pe,null)),r.a.createElement(g,null,r.a.createElement(oe,{visible:this.state.ordered,modalClose:this.modalClose},a),n)}}]),a}(r.a.Component),Y),be=a(52),Ee=a(53),_e=a.n(Ee),Ce=function(e){return r.a.createElement("div",{className:_e.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it's tasty!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(H,{ingredients:e.ingredients})),r.a.createElement(ue,{buttonType:"Danger",handleClick:e.checkoutCancel},"CANCEL"),r.a.createElement(ue,{buttonType:"Success",handleClick:e.checkoutContinue},"CONTINUE"))},ye=a(54),Oe=a.n(ye),ke=a(17),Se=a.n(ke),je=function(e){var t=null,a=[Se.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(Se.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.handleChange}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.handleChange}));break;case"select":t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.handleChange},e.elementConfig.options.map((function(e,t){return r.a.createElement("option",{key:t,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.handleChange}))}var n=null;return e.invalid&&e.touched&&(n=r.a.createElement("p",{className:Se.a.ValidationError},"Please enter a valid value!")),r.a.createElement("div",{className:Se.a.Input},r.a.createElement("label",{className:Se.a.Label},e.label),t,n)},Be=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",valid:!0,validation:{}}},formIsValid:!1,loading:!1},e.handleOrder=function(t){t.preventDefault(),e.setState({loading:!0});var a={};for(var n in e.state.orderForm)a[n]=e.state.orderForm[n].value;var r={ingredients:e.props.ingredients,price:e.props.totalPrice,orderData:a};Y.post("/orders.json",r).then((function(t){e.setState({loading:!1}),e.props.history.push("/")})).catch((function(t){console.log(t),e.setState({loading:!1})}))},e.checkValidity=function(e,t){var a=!0;return t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),a},e.handleInputChange=function(t,a){var n=t.target.value,r=Object(V.a)({},e.state.orderForm),l=Object(V.a)({},r[a]);l.value=n,l.valid=e.checkValidity(l.value,l.validation),l.touched=!0,r[a]=l;var i=!0;for(var o in r)i=r[o].valid&&i;e.setState({orderForm:r,formIsValid:i})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=r.a.createElement("form",{onSubmit:this.handleOrder},t.map((function(t){return r.a.createElement(je,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,handleChange:function(a){return e.handleInputChange(a,t.id)},invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched})})),r.a.createElement(ue,{buttonType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.state.loading&&(n=r.a.createElement(pe,null)),r.a.createElement("div",{className:Oe.a.ContactData},r.a.createElement("h4",null,"Enter Your Contact Data:"),n)}}]),a}(n.Component),Ie=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(c.a)(this,a),(n=t.call(this,e)).state={ingredients:null,totalPrice:0},n.handleCheckoutCancel=function(){n.props.history.goBack()},n.handleCheckoutContinue=function(){n.props.history.replace("/checkout/contact-data")};var r,l=new URLSearchParams(n.props.location.search).entries(),i={},o=0,s=Object(be.a)(l);try{for(s.s();!(r=s.n()).done;){var u=r.value;"price"===u[0]?o=+u[1]:i[u[0]]=+u[1]}}catch(d){s.e(d)}finally{s.f()}return n.state={ingredients:i,totalPrice:o},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Ce,{ingredients:this.state.ingredients,checkoutContinue:this.handleCheckoutContinue,checkoutCancel:this.handleCheckoutCancel}),r.a.createElement(m.a,{path:this.props.match.path+"/contact-data",render:function(t){return r.a.createElement(Be,Object.assign({ingredients:e.state.ingredients,totalPrice:e.state.totalPrice},t))}}))}}]),a}(n.Component),Ne=a(55),we=a.n(Ne),De=function(e){var t=null;return e.ingredients&&(t=Object.keys(e.ingredients).map((function(t,a){return r.a.createElement("span",{key:a,style:{textTransform:"capitalize",margin:"0 8px",border:"1px solid #ccc",padding:"5px"}},t,": ","(".concat(e.ingredients[t],") "))}))),r.a.createElement("div",{className:we.a.Order},r.a.createElement("p",null,"Ingredients: ",t),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,G.format(e.price))))},Le=ge(function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={orders:[],loading:!0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;Y.get("/orders.json").then((function(t){var a=[];for(var n in t.data)a.push(Object(V.a)(Object(V.a)({},t.data[n]),{},{id:n}));e.setState({orders:a,loading:!1})})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){return 0===this.state.orders.length?r.a.createElement("h1",{style:{textAlign:"center"}},"No Orders Found"):r.a.createElement("div",null,this.state.orders.map((function(e){return r.a.createElement(De,{key:e.id,ingredients:e.ingredients,price:e.price})})))}}]),a}(n.Component),Y),Te=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(F,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/checkout",component:Ie}),r.a.createElement(m.a,{path:"/orders",component:Le}),r.a.createElement(m.a,{path:"/",component:fe}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(Te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[56,1,2]]]);
//# sourceMappingURL=main.8fab6642.chunk.js.map