// Compiled by ClojureScript 1.11.57 {:optimizations :whitespace}
goog.provide('diagrams.matrix');
goog.require('cljs.core');
diagrams.matrix.new_row = (function diagrams$matrix$new_row(w){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.constantly.call(null,false),cljs.core.range.call(null,w)));
});
diagrams.matrix.new_matrix = (function diagrams$matrix$new_matrix(w,h){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (){
return diagrams.matrix.new_row.call(null,w);
}),cljs.core.range.call(null,h)));
});
diagrams.matrix.get_elem = (function diagrams$matrix$get_elem(mat,x,y){
return cljs.core.get_in.call(null,mat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
diagrams.matrix.set_elem = (function diagrams$matrix$set_elem(mat,x,y,value){
return cljs.core.assoc_in.call(null,mat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),value);
});
diagrams.matrix.flip_elem = (function diagrams$matrix$flip_elem(mat,x,y){
var old_value = diagrams.matrix.get_elem.call(null,mat,x,y);
var new_value = cljs.core.not.call(null,old_value);
return diagrams.matrix.set_elem.call(null,mat,x,y,new_value);
});
diagrams.matrix.get_dim = (function diagrams$matrix$get_dim(mat){
var w = cljs.core.count.call(null,mat);
if((w === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
var h = cljs.core.count.call(null,mat.call(null,(0)));
var hs = cljs.core.map.call(null,cljs.core.count,mat);
var uniform_QMARK_ = cljs.core.every_QMARK_.call(null,(function (p1__455564_SHARP_){
return cljs.core._EQ_.call(null,h,p1__455564_SHARP_);
}),hs);
if(uniform_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null);
} else {
return null;
}
}
});
diagrams.matrix.get_row = (function diagrams$matrix$get_row(mat,y){
return mat.call(null,y);
});
diagrams.matrix.get_col = (function diagrams$matrix$get_col(mat,x){
return cljs.core.map.call(null,(function (p1__455565_SHARP_){
return cljs.core.nth.call(null,p1__455565_SHARP_,x);
}),mat);
});
diagrams.matrix.h_count = (function diagrams$matrix$h_count(mat,y){
var row = diagrams.matrix.get_row.call(null,mat,y);
var trues = cljs.core.group_by.call(null,cljs.core.true_QMARK_,row).call(null,true);
return cljs.core.count.call(null,trues);
});
diagrams.matrix.v_count = (function diagrams$matrix$v_count(mat,x){
var col = diagrams.matrix.get_col.call(null,mat,x);
var trues = cljs.core.group_by.call(null,cljs.core.true_QMARK_,col).call(null,true);
return cljs.core.count.call(null,trues);
});
