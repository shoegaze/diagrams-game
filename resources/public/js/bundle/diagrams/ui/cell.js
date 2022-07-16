// Compiled by ClojureScript 1.11.57 {:optimizations :whitespace}
goog.provide('diagrams.ui.cell');
goog.require('cljs.core');
goog.require('diagrams.matrix');
goog.require('diagrams.game.core');
diagrams.ui.cell.on_left_click = (function diagrams$ui$cell$on_left_click(ev,game,walls,markers,x,y){
if((!(diagrams.game.core.is_occupied_QMARK_.call(null,game,x,y)))){
cljs.core.swap_BANG_.call(null,walls,diagrams.matrix.flip_elem,x,y);

cljs.core.swap_BANG_.call(null,markers,diagrams.matrix.set_elem,x,y,false);
} else {
}

return false;
});
diagrams.ui.cell.on_right_click = (function diagrams$ui$cell$on_right_click(ev,game,walls,markers,x,y){
if((!(diagrams.game.core.is_occupied_QMARK_.call(null,game,x,y)))){
cljs.core.swap_BANG_.call(null,walls,diagrams.matrix.set_elem,x,y,false);

cljs.core.swap_BANG_.call(null,markers,diagrams.matrix.flip_elem,x,y);
} else {
}

return false;
});
diagrams.ui.cell.get_img_src = (function diagrams$ui$cell$get_img_src(mask_elem,wall_QMARK_,marker_QMARK_){
if(cljs.core.not_EQ_.call(null,mask_elem,new cljs.core.Keyword(null,"empty","empty",767870958))){
var G__455574 = mask_elem;
var G__455574__$1 = (((G__455574 instanceof cljs.core.Keyword))?G__455574.fqn:null);
switch (G__455574__$1) {
case "chest":
return "image/chest__60_60.png";

break;
case "mob":
return "image/mob__60_60.png";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__455574__$1)].join('')));

}
} else {
var G__455575 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wall_QMARK_,marker_QMARK_], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),G__455575)){
return "image/empty__60_60.png";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),G__455575)){
return "image/marker__60_60.png";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__455575)){
return "image/wall__60_60.png";
} else {
return "image/error__60_60.png";

}
}
}
}
});
diagrams.ui.cell.cell_component = (function diagrams$ui$cell$cell_component(game,walls,markers,x,y){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cell","span.cell",-564624425),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__455577_SHARP_){
return diagrams.ui.cell.on_left_click.call(null,p1__455577_SHARP_,game,walls,markers,x,y);
}),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (p1__455578_SHARP_){
return diagrams.ui.cell.on_right_click.call(null,p1__455578_SHARP_,game,walls,markers,x,y);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.floor","img.floor",-560564423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"image/floor__60_60.png"], null)], null),(function (){var mask_elem = diagrams.matrix.get_elem.call(null,new cljs.core.Keyword(null,"mask","mask",-585748447).cljs$core$IFn$_invoke$arity$1(game),x,y);
var wall_QMARK_ = diagrams.matrix.get_elem.call(null,cljs.core.deref.call(null,walls),x,y);
var marker_QMARK_ = diagrams.matrix.get_elem.call(null,cljs.core.deref.call(null,markers),x,y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.marker","img.marker",1059031185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),diagrams.ui.cell.get_img_src.call(null,mask_elem,wall_QMARK_,marker_QMARK_)], null)], null);
})()], null);
});
