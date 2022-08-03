// Compiled by ClojureScript 1.11.57 {:optimizations :whitespace}
goog.provide('diagrams.matrix');
goog.require('cljs.core');
diagrams.matrix.new_row = (function diagrams$matrix$new_row(w,default$){
return cljs.core.vec.call(null,cljs.core.take.call(null,w,cljs.core.repeat.call(null,default$)));
});
diagrams.matrix.new_matrix = (function diagrams$matrix$new_matrix(var_args){
var G__11680 = arguments.length;
switch (G__11680) {
case 3:
return diagrams.matrix.new_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return diagrams.matrix.new_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(diagrams.matrix.new_matrix.cljs$core$IFn$_invoke$arity$3 = (function (w,h,default$){
return cljs.core.vec.call(null,cljs.core.take.call(null,h,cljs.core.repeat.call(null,diagrams.matrix.new_row.call(null,w,default$))));
}));

(diagrams.matrix.new_matrix.cljs$core$IFn$_invoke$arity$2 = (function (w,h){
return diagrams.matrix.new_matrix.call(null,w,h,null);
}));

(diagrams.matrix.new_matrix.cljs$lang$maxFixedArity = 3);

diagrams.matrix.get_elem = (function diagrams$matrix$get_elem(var_args){
var G__11683 = arguments.length;
switch (G__11683) {
case 4:
return diagrams.matrix.get_elem.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return diagrams.matrix.get_elem.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(diagrams.matrix.get_elem.cljs$core$IFn$_invoke$arity$4 = (function (mat,x,y,default$){
return cljs.core.get_in.call(null,mat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),default$);
}));

(diagrams.matrix.get_elem.cljs$core$IFn$_invoke$arity$3 = (function (mat,x,y){
return diagrams.matrix.get_elem.call(null,mat,x,y,null);
}));

(diagrams.matrix.get_elem.cljs$lang$maxFixedArity = 4);

diagrams.matrix.set_elem = (function diagrams$matrix$set_elem(mat,x,y,value){
return cljs.core.assoc_in.call(null,mat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),value);
});
diagrams.matrix.update_elem = (function diagrams$matrix$update_elem(mat,x,y,update_fn){
var old_value = diagrams.matrix.get_elem.call(null,mat,x,y);
var new_value = update_fn.call(null,old_value);
return diagrams.matrix.set_elem.call(null,mat,x,y,new_value);
});
diagrams.matrix.get_dim = (function diagrams$matrix$get_dim(mat){
var h = cljs.core.count.call(null,mat);
if((h === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
var w = cljs.core.count.call(null,mat.call(null,(0)));
var ws = cljs.core.map.call(null,cljs.core.count,mat);
var uniform_QMARK_ = cljs.core.every_QMARK_.call(null,(function (p1__11685_SHARP_){
return cljs.core._EQ_.call(null,w,p1__11685_SHARP_);
}),ws);
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
return cljs.core.map.call(null,(function (p1__11686_SHARP_){
return p1__11686_SHARP_.call(null,x);
}),mat);
});
diagrams.matrix.h_count = (function diagrams$matrix$h_count(mat,y,group_fn,group){
var row = diagrams.matrix.get_row.call(null,mat,y);
var gs = cljs.core.group_by.call(null,group_fn,row);
return cljs.core.count.call(null,gs.call(null,group));
});
diagrams.matrix.v_count = (function diagrams$matrix$v_count(mat,x,group_fn,group){
var col = diagrams.matrix.get_col.call(null,mat,x);
var gs = cljs.core.group_by.call(null,group_fn,col);
return cljs.core.count.call(null,gs.call(null,group));
});
diagrams.matrix.get_neighbors = (function diagrams$matrix$get_neighbors(mat,x,y,default$){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [diagrams.matrix.get_elem.call(null,mat,(x + (1)),y,default$),diagrams.matrix.get_elem.call(null,mat,(x - (1)),y,default$),diagrams.matrix.get_elem.call(null,mat,x,(y + (1)),default$),diagrams.matrix.get_elem.call(null,mat,x,(y - (1)),default$)], null);
});
diagrams.matrix.get_chunk = (function diagrams$matrix$get_chunk(var_args){
var G__11688 = arguments.length;
switch (G__11688) {
case 4:
return diagrams.matrix.get_chunk.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return diagrams.matrix.get_chunk.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(diagrams.matrix.get_chunk.cljs$core$IFn$_invoke$arity$4 = (function (mat,p__11689,p__11690,default$){
var vec__11691 = p__11689;
var x = cljs.core.nth.call(null,vec__11691,(0),null);
var y = cljs.core.nth.call(null,vec__11691,(1),null);
var vec__11694 = p__11690;
var w = cljs.core.nth.call(null,vec__11694,(0),null);
var h = cljs.core.nth.call(null,vec__11694,(1),null);
return cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (y_local,row){
return cljs.core.vec.call(null,cljs.core.map_indexed.call(null,(function (x_local,_){
var y_SINGLEQUOTE_ = (y + y_local);
var x_SINGLEQUOTE_ = (x + x_local);
var new_value = diagrams.matrix.get_elem.call(null,mat,x_SINGLEQUOTE_,y_SINGLEQUOTE_,default$);
return new_value;
}),row));
}),diagrams.matrix.new_matrix.call(null,w,h,default$)));
}));

(diagrams.matrix.get_chunk.cljs$core$IFn$_invoke$arity$3 = (function (mat,p__11697,p__11698){
var vec__11699 = p__11697;
var x = cljs.core.nth.call(null,vec__11699,(0),null);
var y = cljs.core.nth.call(null,vec__11699,(1),null);
var vec__11702 = p__11698;
var w = cljs.core.nth.call(null,vec__11702,(0),null);
var h = cljs.core.nth.call(null,vec__11702,(1),null);
return diagrams.matrix.get_chunk.call(null,mat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null),null);
}));

(diagrams.matrix.get_chunk.cljs$lang$maxFixedArity = 4);

diagrams.matrix.set_chunk = (function diagrams$matrix$set_chunk(mat,x,y,chk){
var mat_SINGLEQUOTE_ = cljs.core.atom.call(null,mat);
var vec__11706 = diagrams.matrix.get_dim.call(null,chk);
var w_chk = cljs.core.nth.call(null,vec__11706,(0),null);
var h_chk = cljs.core.nth.call(null,vec__11706,(1),null);
var seq__11709_11777 = cljs.core.seq.call(null,cljs.core.range.call(null,h_chk));
var chunk__11718_11778 = null;
var count__11719_11779 = (0);
var i__11720_11780 = (0);
while(true){
if((i__11720_11780 < count__11719_11779)){
var y_chk_11781 = cljs.core._nth.call(null,chunk__11718_11778,i__11720_11780);
var seq__11721_11782 = cljs.core.seq.call(null,cljs.core.range.call(null,w_chk));
var chunk__11724_11783 = null;
var count__11725_11784 = (0);
var i__11726_11785 = (0);
while(true){
if((i__11726_11785 < count__11725_11784)){
var x_chk_11786 = cljs.core._nth.call(null,chunk__11724_11783,i__11726_11785);
var x_mat_11787 = (x + x_chk_11786);
var y_mat_11788 = (y + y_chk_11781);
var chk_elem_11789 = diagrams.matrix.get_elem.call(null,chk,x_chk_11786,y_chk_11781);
var vec__11759_11790 = diagrams.matrix.get_dim.call(null,mat);
var w_mat_11791 = cljs.core.nth.call(null,vec__11759_11790,(0),null);
var h_mat_11792 = cljs.core.nth.call(null,vec__11759_11790,(1),null);
if(((((((-1) < x_mat_11787)) && ((x_mat_11787 < w_mat_11791)))) && (((((-1) < y_mat_11788)) && ((y_mat_11788 < h_mat_11792)))))){
cljs.core.swap_BANG_.call(null,mat_SINGLEQUOTE_,diagrams.matrix.set_elem,x_mat_11787,y_mat_11788,chk_elem_11789);


var G__11793 = seq__11721_11782;
var G__11794 = chunk__11724_11783;
var G__11795 = count__11725_11784;
var G__11796 = (i__11726_11785 + (1));
seq__11721_11782 = G__11793;
chunk__11724_11783 = G__11794;
count__11725_11784 = G__11795;
i__11726_11785 = G__11796;
continue;
} else {
var G__11797 = seq__11721_11782;
var G__11798 = chunk__11724_11783;
var G__11799 = count__11725_11784;
var G__11800 = (i__11726_11785 + (1));
seq__11721_11782 = G__11797;
chunk__11724_11783 = G__11798;
count__11725_11784 = G__11799;
i__11726_11785 = G__11800;
continue;
}
} else {
var temp__5804__auto___11801 = cljs.core.seq.call(null,seq__11721_11782);
if(temp__5804__auto___11801){
var seq__11721_11802__$1 = temp__5804__auto___11801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11721_11802__$1)){
var c__5567__auto___11803 = cljs.core.chunk_first.call(null,seq__11721_11802__$1);
var G__11804 = cljs.core.chunk_rest.call(null,seq__11721_11802__$1);
var G__11805 = c__5567__auto___11803;
var G__11806 = cljs.core.count.call(null,c__5567__auto___11803);
var G__11807 = (0);
seq__11721_11782 = G__11804;
chunk__11724_11783 = G__11805;
count__11725_11784 = G__11806;
i__11726_11785 = G__11807;
continue;
} else {
var x_chk_11808 = cljs.core.first.call(null,seq__11721_11802__$1);
var x_mat_11809 = (x + x_chk_11808);
var y_mat_11810 = (y + y_chk_11781);
var chk_elem_11811 = diagrams.matrix.get_elem.call(null,chk,x_chk_11808,y_chk_11781);
var vec__11762_11812 = diagrams.matrix.get_dim.call(null,mat);
var w_mat_11813 = cljs.core.nth.call(null,vec__11762_11812,(0),null);
var h_mat_11814 = cljs.core.nth.call(null,vec__11762_11812,(1),null);
if(((((((-1) < x_mat_11809)) && ((x_mat_11809 < w_mat_11813)))) && (((((-1) < y_mat_11810)) && ((y_mat_11810 < h_mat_11814)))))){
cljs.core.swap_BANG_.call(null,mat_SINGLEQUOTE_,diagrams.matrix.set_elem,x_mat_11809,y_mat_11810,chk_elem_11811);


var G__11815 = cljs.core.next.call(null,seq__11721_11802__$1);
var G__11816 = null;
var G__11817 = (0);
var G__11818 = (0);
seq__11721_11782 = G__11815;
chunk__11724_11783 = G__11816;
count__11725_11784 = G__11817;
i__11726_11785 = G__11818;
continue;
} else {
var G__11819 = cljs.core.next.call(null,seq__11721_11802__$1);
var G__11820 = null;
var G__11821 = (0);
var G__11822 = (0);
seq__11721_11782 = G__11819;
chunk__11724_11783 = G__11820;
count__11725_11784 = G__11821;
i__11726_11785 = G__11822;
continue;
}
}
} else {
}
}
break;
}

var G__11823 = seq__11709_11777;
var G__11824 = chunk__11718_11778;
var G__11825 = count__11719_11779;
var G__11826 = (i__11720_11780 + (1));
seq__11709_11777 = G__11823;
chunk__11718_11778 = G__11824;
count__11719_11779 = G__11825;
i__11720_11780 = G__11826;
continue;
} else {
var temp__5804__auto___11827 = cljs.core.seq.call(null,seq__11709_11777);
if(temp__5804__auto___11827){
var seq__11709_11828__$1 = temp__5804__auto___11827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11709_11828__$1)){
var c__5567__auto___11829 = cljs.core.chunk_first.call(null,seq__11709_11828__$1);
var G__11830 = cljs.core.chunk_rest.call(null,seq__11709_11828__$1);
var G__11831 = c__5567__auto___11829;
var G__11832 = cljs.core.count.call(null,c__5567__auto___11829);
var G__11833 = (0);
seq__11709_11777 = G__11830;
chunk__11718_11778 = G__11831;
count__11719_11779 = G__11832;
i__11720_11780 = G__11833;
continue;
} else {
var y_chk_11834 = cljs.core.first.call(null,seq__11709_11828__$1);
var seq__11710_11835 = cljs.core.seq.call(null,cljs.core.range.call(null,w_chk));
var chunk__11713_11836 = null;
var count__11714_11837 = (0);
var i__11715_11838 = (0);
while(true){
if((i__11715_11838 < count__11714_11837)){
var x_chk_11839 = cljs.core._nth.call(null,chunk__11713_11836,i__11715_11838);
var x_mat_11840 = (x + x_chk_11839);
var y_mat_11841 = (y + y_chk_11834);
var chk_elem_11842 = diagrams.matrix.get_elem.call(null,chk,x_chk_11839,y_chk_11834);
var vec__11771_11843 = diagrams.matrix.get_dim.call(null,mat);
var w_mat_11844 = cljs.core.nth.call(null,vec__11771_11843,(0),null);
var h_mat_11845 = cljs.core.nth.call(null,vec__11771_11843,(1),null);
if(((((((-1) < x_mat_11840)) && ((x_mat_11840 < w_mat_11844)))) && (((((-1) < y_mat_11841)) && ((y_mat_11841 < h_mat_11845)))))){
cljs.core.swap_BANG_.call(null,mat_SINGLEQUOTE_,diagrams.matrix.set_elem,x_mat_11840,y_mat_11841,chk_elem_11842);


var G__11846 = seq__11710_11835;
var G__11847 = chunk__11713_11836;
var G__11848 = count__11714_11837;
var G__11849 = (i__11715_11838 + (1));
seq__11710_11835 = G__11846;
chunk__11713_11836 = G__11847;
count__11714_11837 = G__11848;
i__11715_11838 = G__11849;
continue;
} else {
var G__11850 = seq__11710_11835;
var G__11851 = chunk__11713_11836;
var G__11852 = count__11714_11837;
var G__11853 = (i__11715_11838 + (1));
seq__11710_11835 = G__11850;
chunk__11713_11836 = G__11851;
count__11714_11837 = G__11852;
i__11715_11838 = G__11853;
continue;
}
} else {
var temp__5804__auto___11854__$1 = cljs.core.seq.call(null,seq__11710_11835);
if(temp__5804__auto___11854__$1){
var seq__11710_11855__$1 = temp__5804__auto___11854__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11710_11855__$1)){
var c__5567__auto___11856 = cljs.core.chunk_first.call(null,seq__11710_11855__$1);
var G__11857 = cljs.core.chunk_rest.call(null,seq__11710_11855__$1);
var G__11858 = c__5567__auto___11856;
var G__11859 = cljs.core.count.call(null,c__5567__auto___11856);
var G__11860 = (0);
seq__11710_11835 = G__11857;
chunk__11713_11836 = G__11858;
count__11714_11837 = G__11859;
i__11715_11838 = G__11860;
continue;
} else {
var x_chk_11861 = cljs.core.first.call(null,seq__11710_11855__$1);
var x_mat_11862 = (x + x_chk_11861);
var y_mat_11863 = (y + y_chk_11834);
var chk_elem_11864 = diagrams.matrix.get_elem.call(null,chk,x_chk_11861,y_chk_11834);
var vec__11774_11865 = diagrams.matrix.get_dim.call(null,mat);
var w_mat_11866 = cljs.core.nth.call(null,vec__11774_11865,(0),null);
var h_mat_11867 = cljs.core.nth.call(null,vec__11774_11865,(1),null);
if(((((((-1) < x_mat_11862)) && ((x_mat_11862 < w_mat_11866)))) && (((((-1) < y_mat_11863)) && ((y_mat_11863 < h_mat_11867)))))){
cljs.core.swap_BANG_.call(null,mat_SINGLEQUOTE_,diagrams.matrix.set_elem,x_mat_11862,y_mat_11863,chk_elem_11864);


var G__11868 = cljs.core.next.call(null,seq__11710_11855__$1);
var G__11869 = null;
var G__11870 = (0);
var G__11871 = (0);
seq__11710_11835 = G__11868;
chunk__11713_11836 = G__11869;
count__11714_11837 = G__11870;
i__11715_11838 = G__11871;
continue;
} else {
var G__11872 = cljs.core.next.call(null,seq__11710_11855__$1);
var G__11873 = null;
var G__11874 = (0);
var G__11875 = (0);
seq__11710_11835 = G__11872;
chunk__11713_11836 = G__11873;
count__11714_11837 = G__11874;
i__11715_11838 = G__11875;
continue;
}
}
} else {
}
}
break;
}

var G__11876 = cljs.core.next.call(null,seq__11709_11828__$1);
var G__11877 = null;
var G__11878 = (0);
var G__11879 = (0);
seq__11709_11777 = G__11876;
chunk__11718_11778 = G__11877;
count__11719_11779 = G__11878;
i__11720_11780 = G__11879;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,mat_SINGLEQUOTE_);
});
diagrams.matrix.count_elem = (function diagrams$matrix$count_elem(mat,value){
return (function (p1__11880_SHARP_){
return cljs.core.get.call(null,p1__11880_SHARP_,value,(0));
}).call(null,cljs.core.frequencies.call(null,cljs.core.flatten.call(null,mat)));
});
diagrams.matrix.has_elem_QMARK_ = (function diagrams$matrix$has_elem_QMARK_(mat,value){
return (diagrams.matrix.count_elem.call(null,mat,value) > (0));
});
diagrams.matrix.has_pattern_QMARK_ = (function diagrams$matrix$has_pattern_QMARK_(mat,x,y,pattern){
var dim = diagrams.matrix.get_dim.call(null,pattern);
var chunk = diagrams.matrix.get_chunk.call(null,mat,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),dim,null);
return cljs.core._EQ_.call(null,pattern,chunk);
});
