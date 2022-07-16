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
var G__455596__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__455596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__455597__i = 0, G__455597__a = new Array(arguments.length -  0);
while (G__455597__i < G__455597__a.length) {G__455597__a[G__455597__i] = arguments[G__455597__i + 0]; ++G__455597__i;}
  args = new cljs.core.IndexedSeq(G__455597__a,0,null);
} 
return G__455596__delegate.call(this,args);};
G__455596.cljs$lang$maxFixedArity = 0;
G__455596.cljs$lang$applyTo = (function (arglist__455598){
var args = cljs.core.seq(arglist__455598);
return G__455596__delegate(args);
});
G__455596.cljs$core$IFn$_invoke$arity$variadic = G__455596__delegate;
return G__455596;
})()
);

(o.error = (function() { 
var G__455599__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__455599 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__455600__i = 0, G__455600__a = new Array(arguments.length -  0);
while (G__455600__i < G__455600__a.length) {G__455600__a[G__455600__i] = arguments[G__455600__i + 0]; ++G__455600__i;}
  args = new cljs.core.IndexedSeq(G__455600__a,0,null);
} 
return G__455599__delegate.call(this,args);};
G__455599.cljs$lang$maxFixedArity = 0;
G__455599.cljs$lang$applyTo = (function (arglist__455601){
var args = cljs.core.seq(arglist__455601);
return G__455599__delegate(args);
});
G__455599.cljs$core$IFn$_invoke$arity$variadic = G__455599__delegate;
return G__455599;
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
