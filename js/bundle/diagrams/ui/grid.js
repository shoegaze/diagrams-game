// Compiled by ClojureScript 1.11.57 {:optimizations :whitespace}
goog.provide('diagrams.ui.grid');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('diagrams.matrix');
goog.require('diagrams.game.solver');
goog.require('diagrams.ui.h_hints');
goog.require('diagrams.ui.v_hints');
goog.require('diagrams.ui.row');
if((typeof diagrams !== 'undefined') && (typeof diagrams.ui !== 'undefined') && (typeof diagrams.ui.grid !== 'undefined') && (typeof diagrams.ui.grid.n !== 'undefined')){
} else {
diagrams.ui.grid.n = (8);
}
if((typeof diagrams !== 'undefined') && (typeof diagrams.ui !== 'undefined') && (typeof diagrams.ui.grid !== 'undefined') && (typeof diagrams.ui.grid.walls !== 'undefined')){
} else {
diagrams.ui.grid.walls = reagent.core.atom.call(null,diagrams.matrix.new_matrix.call(null,diagrams.ui.grid.n,diagrams.ui.grid.n,false));
}
if((typeof diagrams !== 'undefined') && (typeof diagrams.ui !== 'undefined') && (typeof diagrams.ui.grid !== 'undefined') && (typeof diagrams.ui.grid.markers !== 'undefined')){
} else {
diagrams.ui.grid.markers = reagent.core.atom.call(null,diagrams.matrix.new_matrix.call(null,diagrams.ui.grid.n,diagrams.ui.grid.n,false));
}
diagrams.ui.grid.grid_component = (function diagrams$ui$grid$grid_component(game){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui","div.ui",645162633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hints","div.hints",1438246636),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [diagrams.ui.h_hints.h_hints_component,game,diagrams.ui.grid.walls], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [diagrams.ui.v_hints.v_hints_component,game,diagrams.ui.grid.walls], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid","div.grid",736588158),(function (){var iter__5522__auto__ = (function diagrams$ui$grid$grid_component_$_iter__17072(s__17073){
return (new cljs.core.LazySeq(null,(function (){
var s__17073__$1 = s__17073;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17073__$1);
if(temp__5804__auto__){
var s__17073__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17073__$2)){
var c__5520__auto__ = cljs.core.chunk_first.call(null,s__17073__$2);
var size__5521__auto__ = cljs.core.count.call(null,c__5520__auto__);
var b__17075 = cljs.core.chunk_buffer.call(null,size__5521__auto__);
if((function (){var i__17074 = (0);
while(true){
if((i__17074 < size__5521__auto__)){
var y = cljs.core._nth.call(null,c__5520__auto__,i__17074);
cljs.core.chunk_append.call(null,b__17075,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [diagrams.ui.row.row_component,game,diagrams.ui.grid.walls,diagrams.ui.grid.markers,diagrams.ui.grid.n,y], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)));

var G__17076 = (i__17074 + (1));
i__17074 = G__17076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17075),diagrams$ui$grid$grid_component_$_iter__17072.call(null,cljs.core.chunk_rest.call(null,s__17073__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17075),null);
}
} else {
var y = cljs.core.first.call(null,s__17073__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [diagrams.ui.row.row_component,game,diagrams.ui.grid.walls,diagrams.ui.grid.markers,diagrams.ui.grid.n,y], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),y], null)),diagrams$ui$grid$grid_component_$_iter__17072.call(null,cljs.core.rest.call(null,s__17073__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__.call(null,cljs.core.range.call(null,diagrams.ui.grid.n));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.win-banner","h1.win-banner",1712015876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),((diagrams.game.solver.solved_QMARK_.call(null,game,cljs.core.deref.call(null,diagrams.ui.grid.walls)))?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"hidden","hidden",-312506092))], null)], null),"YOU WIN!"], null)], null);
});
