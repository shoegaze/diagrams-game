// Compiled by ClojureScript 1.11.57 {:optimizations :whitespace}
goog.provide('diagrams.ui.h_hints');
goog.require('cljs.core');
goog.require('diagrams.matrix');
diagrams.ui.h_hints.h_hints_component = (function diagrams$ui$h_hints$h_hints_component(game,walls){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-hints","div.h-hints",1487357211),(function (){var h_hints = new cljs.core.Keyword(null,"h-hints","h-hints",-670618653).cljs$core$IFn$_invoke$arity$1(game);
var hint = cljs.core.count.call(null,h_hints);
return cljs.core.doall.call(null,(function (){var iter__5522__auto__ = (function diagrams$ui$h_hints$h_hints_component_$_iter__12046(s__12047){
return (new cljs.core.LazySeq(null,(function (){
var s__12047__$1 = s__12047;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__12047__$1);
if(temp__5804__auto__){
var s__12047__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12047__$2)){
var c__5520__auto__ = cljs.core.chunk_first.call(null,s__12047__$2);
var size__5521__auto__ = cljs.core.count.call(null,c__5520__auto__);
var b__12049 = cljs.core.chunk_buffer.call(null,size__5521__auto__);
if((function (){var i__12048 = (0);
while(true){
if((i__12048 < size__5521__auto__)){
var x = cljs.core._nth.call(null,c__5520__auto__,i__12048);
var hint__$1 = h_hints.call(null,x);
cljs.core.chunk_append.call(null,b__12049,(function (){var vc = diagrams.matrix.v_count.call(null,cljs.core.deref.call(null,walls),x,cljs.core.true_QMARK_,true);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((vc < hint__$1))?new cljs.core.Keyword(null,"black","black",1294279647):((cljs.core._EQ_.call(null,vc,hint__$1))?new cljs.core.Keyword(null,"green","green",-945526839):(((vc > hint__$1))?new cljs.core.Keyword(null,"red","red",-969428204):null)))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hint__$1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null));
})());

var G__12050 = (i__12048 + (1));
i__12048 = G__12050;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12049),diagrams$ui$h_hints$h_hints_component_$_iter__12046.call(null,cljs.core.chunk_rest.call(null,s__12047__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12049),null);
}
} else {
var x = cljs.core.first.call(null,s__12047__$2);
var hint__$1 = h_hints.call(null,x);
return cljs.core.cons.call(null,(function (){var vc = diagrams.matrix.v_count.call(null,cljs.core.deref.call(null,walls),x,cljs.core.true_QMARK_,true);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((vc < hint__$1))?new cljs.core.Keyword(null,"black","black",1294279647):((cljs.core._EQ_.call(null,vc,hint__$1))?new cljs.core.Keyword(null,"green","green",-945526839):(((vc > hint__$1))?new cljs.core.Keyword(null,"red","red",-969428204):null)))], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hint__$1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null));
})(),diagrams$ui$h_hints$h_hints_component_$_iter__12046.call(null,cljs.core.rest.call(null,s__12047__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__.call(null,cljs.core.range.call(null,hint));
})());
})()], null);
});
