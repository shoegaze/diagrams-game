// Compiled by ClojureScript 1.11.57 {:optimizations :whitespace}
goog.provide('diagrams.ui.row');
goog.require('cljs.core');
goog.require('diagrams.ui.cell');
diagrams.ui.row.row_component = (function diagrams$ui$row$row_component(game,walls,markers,n,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5522__auto__ = (function diagrams$ui$row$row_component_$_iter__11896(s__11897){
return (new cljs.core.LazySeq(null,(function (){
var s__11897__$1 = s__11897;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__11897__$1);
if(temp__5804__auto__){
var s__11897__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11897__$2)){
var c__5520__auto__ = cljs.core.chunk_first.call(null,s__11897__$2);
var size__5521__auto__ = cljs.core.count.call(null,c__5520__auto__);
var b__11899 = cljs.core.chunk_buffer.call(null,size__5521__auto__);
if((function (){var i__11898 = (0);
while(true){
if((i__11898 < size__5521__auto__)){
var x = cljs.core._nth.call(null,c__5520__auto__,i__11898);
var key = ((n * x) + y);
cljs.core.chunk_append.call(null,b__11899,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [diagrams.ui.cell.cell_component,game,walls,markers,x,y], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__11900 = (i__11898 + (1));
i__11898 = G__11900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11899),diagrams$ui$row$row_component_$_iter__11896.call(null,cljs.core.chunk_rest.call(null,s__11897__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11899),null);
}
} else {
var x = cljs.core.first.call(null,s__11897__$2);
var key = ((n * x) + y);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [diagrams.ui.cell.cell_component,game,walls,markers,x,y], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),diagrams$ui$row$row_component_$_iter__11896.call(null,cljs.core.rest.call(null,s__11897__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__.call(null,cljs.core.range.call(null,n));
})()], null);
});