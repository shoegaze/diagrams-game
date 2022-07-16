// Compiled by ClojureScript 1.11.57 {:optimizations :whitespace}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__457476 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__457477 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__457477);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__457478 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__457479 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__457479);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__457478);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__457476);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__457481 = arguments.length;
switch (G__457481) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__457482 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__457482,(0),null);
var callback = cljs.core.nth.call(null,vec__457482,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__457486_457502 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__457487_457503 = null;
var count__457488_457504 = (0);
var i__457489_457505 = (0);
while(true){
if((i__457489_457505 < count__457488_457504)){
var vec__457496_457506 = cljs.core._nth.call(null,chunk__457487_457503,i__457489_457505);
var container_457507 = cljs.core.nth.call(null,vec__457496_457506,(0),null);
var comp_457508 = cljs.core.nth.call(null,vec__457496_457506,(1),null);
reagent.dom.re_render_component.call(null,comp_457508,container_457507);


var G__457509 = seq__457486_457502;
var G__457510 = chunk__457487_457503;
var G__457511 = count__457488_457504;
var G__457512 = (i__457489_457505 + (1));
seq__457486_457502 = G__457509;
chunk__457487_457503 = G__457510;
count__457488_457504 = G__457511;
i__457489_457505 = G__457512;
continue;
} else {
var temp__5804__auto___457513 = cljs.core.seq.call(null,seq__457486_457502);
if(temp__5804__auto___457513){
var seq__457486_457514__$1 = temp__5804__auto___457513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__457486_457514__$1)){
var c__5567__auto___457515 = cljs.core.chunk_first.call(null,seq__457486_457514__$1);
var G__457516 = cljs.core.chunk_rest.call(null,seq__457486_457514__$1);
var G__457517 = c__5567__auto___457515;
var G__457518 = cljs.core.count.call(null,c__5567__auto___457515);
var G__457519 = (0);
seq__457486_457502 = G__457516;
chunk__457487_457503 = G__457517;
count__457488_457504 = G__457518;
i__457489_457505 = G__457519;
continue;
} else {
var vec__457499_457520 = cljs.core.first.call(null,seq__457486_457514__$1);
var container_457521 = cljs.core.nth.call(null,vec__457499_457520,(0),null);
var comp_457522 = cljs.core.nth.call(null,vec__457499_457520,(1),null);
reagent.dom.re_render_component.call(null,comp_457522,container_457521);


var G__457523 = cljs.core.next.call(null,seq__457486_457514__$1);
var G__457524 = null;
var G__457525 = (0);
var G__457526 = (0);
seq__457486_457502 = G__457523;
chunk__457487_457503 = G__457524;
count__457488_457504 = G__457525;
i__457489_457505 = G__457526;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});
