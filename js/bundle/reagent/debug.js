// Compiled by ClojureScript 1.11.57 {:optimizations :whitespace}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__4886__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__4886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4887__i = 0, G__4887__a = new Array(arguments.length -  0);
while (G__4887__i < G__4887__a.length) {G__4887__a[G__4887__i] = arguments[G__4887__i + 0]; ++G__4887__i;}
  args = new cljs.core.IndexedSeq(G__4887__a,0,null);
} 
return G__4886__delegate.call(this,args);};
G__4886.cljs$lang$maxFixedArity = 0;
G__4886.cljs$lang$applyTo = (function (arglist__4888){
var args = cljs.core.seq(arglist__4888);
return G__4886__delegate(args);
});
G__4886.cljs$core$IFn$_invoke$arity$variadic = G__4886__delegate;
return G__4886;
})()
);

(o.error = (function() { 
var G__4889__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__4889 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4890__i = 0, G__4890__a = new Array(arguments.length -  0);
while (G__4890__i < G__4890__a.length) {G__4890__a[G__4890__i] = arguments[G__4890__i + 0]; ++G__4890__i;}
  args = new cljs.core.IndexedSeq(G__4890__a,0,null);
} 
return G__4889__delegate.call(this,args);};
G__4889.cljs$lang$maxFixedArity = 0;
G__4889.cljs$lang$applyTo = (function (arglist__4891){
var args = cljs.core.seq(arglist__4891);
return G__4889__delegate(args);
});
G__4889.cljs$core$IFn$_invoke$arity$variadic = G__4889__delegate;
return G__4889;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
