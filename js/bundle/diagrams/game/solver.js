// Compiled by ClojureScript 1.11.57 {:optimizations :whitespace}
goog.provide('diagrams.game.solver');
goog.require('cljs.core');
goog.require('diagrams.matrix');
diagrams.game.solver.valid_forms_QMARK_ = (function diagrams$game$solver$valid_forms_QMARK_(game,walls){
return false;
});
diagrams.game.solver.walls_satisfied_QMARK_ = (function diagrams$game$solver$walls_satisfied_QMARK_(game,walls){
var h_hints = new cljs.core.Keyword(null,"h-hints","h-hints",-670618653).cljs$core$IFn$_invoke$arity$1(game);
var v_hints = new cljs.core.Keyword(null,"v-hints","v-hints",827217637).cljs$core$IFn$_invoke$arity$1(game);
var hc = cljs.core.map_indexed.call(null,(function (p1__16936_SHARP_){
return diagrams.matrix.v_count.call(null,walls,p1__16936_SHARP_,cljs.core.true_QMARK_,true);
}),walls);
var vc = cljs.core.map_indexed.call(null,(function (p1__16937_SHARP_){
return diagrams.matrix.h_count.call(null,walls,p1__16937_SHARP_,cljs.core.true_QMARK_,true);
}),walls);
return ((cljs.core._EQ_.call(null,hc,h_hints)) && (cljs.core._EQ_.call(null,vc,v_hints)));
});
diagrams.game.solver.dead_ends_are_mobs = (function diagrams$game$solver$dead_ends_are_mobs(game,walls){
var mask = new cljs.core.Keyword(null,"mask","mask",-585748447).cljs$core$IFn$_invoke$arity$1(game);
var vec__16939 = diagrams.matrix.get_dim.call(null,mask);
var w = cljs.core.nth.call(null,vec__16939,(0),null);
var h = cljs.core.nth.call(null,vec__16939,(1),null);
return cljs.core.every_QMARK_.call(null,cljs.core.identity,(function (){var iter__5522__auto__ = (function diagrams$game$solver$dead_ends_are_mobs_$_iter__16942(s__16943){
return (new cljs.core.LazySeq(null,(function (){
var s__16943__$1 = s__16943;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__16943__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5518__auto__ = ((function (s__16943__$1,y,xs__6360__auto__,temp__5804__auto__,mask,vec__16939,w,h){
return (function diagrams$game$solver$dead_ends_are_mobs_$_iter__16942_$_iter__16944(s__16945){
return (new cljs.core.LazySeq(null,((function (s__16943__$1,y,xs__6360__auto__,temp__5804__auto__,mask,vec__16939,w,h){
return (function (){
var s__16945__$1 = s__16945;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__16945__$1);
if(temp__5804__auto____$1){
var s__16945__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16945__$2)){
var c__5520__auto__ = cljs.core.chunk_first.call(null,s__16945__$2);
var size__5521__auto__ = cljs.core.count.call(null,c__5520__auto__);
var b__16947 = cljs.core.chunk_buffer.call(null,size__5521__auto__);
if((function (){var i__16946 = (0);
while(true){
if((i__16946 < size__5521__auto__)){
var x = cljs.core._nth.call(null,c__5520__auto__,i__16946);
var mask_elem = diagrams.matrix.get_elem.call(null,mask,x,y);
var wall_neighbors = diagrams.matrix.get_neighbors.call(null,walls,x,y,true);
cljs.core.chunk_append.call(null,b__16947,(((!(cljs.core._EQ_.call(null,mask_elem,new cljs.core.Keyword(null,"mob","mob",1731093830)))))?true:cljs.core._EQ_.call(null,(3),((function (i__16946,s__16943__$1,mask_elem,wall_neighbors,x,c__5520__auto__,size__5521__auto__,b__16947,s__16945__$2,temp__5804__auto____$1,y,xs__6360__auto__,temp__5804__auto__,mask,vec__16939,w,h){
return (function (p1__16938_SHARP_){
return cljs.core.get.call(null,p1__16938_SHARP_,true);
});})(i__16946,s__16943__$1,mask_elem,wall_neighbors,x,c__5520__auto__,size__5521__auto__,b__16947,s__16945__$2,temp__5804__auto____$1,y,xs__6360__auto__,temp__5804__auto__,mask,vec__16939,w,h))
.call(null,cljs.core.frequencies.call(null,wall_neighbors)))));

var G__16948 = (i__16946 + (1));
i__16946 = G__16948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16947),diagrams$game$solver$dead_ends_are_mobs_$_iter__16942_$_iter__16944.call(null,cljs.core.chunk_rest.call(null,s__16945__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16947),null);
}
} else {
var x = cljs.core.first.call(null,s__16945__$2);
var mask_elem = diagrams.matrix.get_elem.call(null,mask,x,y);
var wall_neighbors = diagrams.matrix.get_neighbors.call(null,walls,x,y,true);
return cljs.core.cons.call(null,(((!(cljs.core._EQ_.call(null,mask_elem,new cljs.core.Keyword(null,"mob","mob",1731093830)))))?true:cljs.core._EQ_.call(null,(3),((function (s__16943__$1,mask_elem,wall_neighbors,x,s__16945__$2,temp__5804__auto____$1,y,xs__6360__auto__,temp__5804__auto__,mask,vec__16939,w,h){
return (function (p1__16938_SHARP_){
return cljs.core.get.call(null,p1__16938_SHARP_,true);
});})(s__16943__$1,mask_elem,wall_neighbors,x,s__16945__$2,temp__5804__auto____$1,y,xs__6360__auto__,temp__5804__auto__,mask,vec__16939,w,h))
.call(null,cljs.core.frequencies.call(null,wall_neighbors)))),diagrams$game$solver$dead_ends_are_mobs_$_iter__16942_$_iter__16944.call(null,cljs.core.rest.call(null,s__16945__$2)));
}
} else {
return null;
}
break;
}
});})(s__16943__$1,y,xs__6360__auto__,temp__5804__auto__,mask,vec__16939,w,h))
,null,null));
});})(s__16943__$1,y,xs__6360__auto__,temp__5804__auto__,mask,vec__16939,w,h))
;
var fs__5519__auto__ = cljs.core.seq.call(null,iterys__5518__auto__.call(null,cljs.core.range.call(null,w)));
if(fs__5519__auto__){
return cljs.core.concat.call(null,fs__5519__auto__,diagrams$game$solver$dead_ends_are_mobs_$_iter__16942.call(null,cljs.core.rest.call(null,s__16943__$1)));
} else {
var G__16949 = cljs.core.rest.call(null,s__16943__$1);
s__16943__$1 = G__16949;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__.call(null,cljs.core.range.call(null,h));
})());
});
diagrams.game.solver.chest_room_QMARK_ = (function diagrams$game$solver$chest_room_QMARK_(game,walls,x,y){
if((!(diagrams.matrix.has_elem_QMARK_.call(null,diagrams.matrix.get_chunk.call(null,new cljs.core.Keyword(null,"mask","mask",-585748447).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)),new cljs.core.Keyword(null,"chest","chest",2066810546))))){
return false;
} else {
var h_walls = diagrams.matrix.get_chunk.call(null,walls,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3)], null),true);
var v_walls = diagrams.matrix.get_chunk.call(null,walls,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5)], null),true);
var h_count = diagrams.matrix.count_elem.call(null,h_walls,true);
var v_count = diagrams.matrix.count_elem.call(null,v_walls,true);
var sum = (h_count + v_count);
return cljs.core._EQ_.call(null,sum,(11));
}
});
diagrams.game.solver.chests_in_rooms_QMARK_ = (function diagrams$game$solver$chests_in_rooms_QMARK_(game,walls){
var vec__16950 = diagrams.matrix.get_dim.call(null,walls);
var w = cljs.core.nth.call(null,vec__16950,(0),null);
var h = cljs.core.nth.call(null,vec__16950,(1),null);
var room_pattern = diagrams.matrix.new_matrix.call(null,(3),(3),new cljs.core.Keyword(null,"empty","empty",767870958));
return cljs.core.every_QMARK_.call(null,cljs.core.identity,(function (){var iter__5522__auto__ = (function diagrams$game$solver$chests_in_rooms_QMARK__$_iter__16953(s__16954){
return (new cljs.core.LazySeq(null,(function (){
var s__16954__$1 = s__16954;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__16954__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5518__auto__ = ((function (s__16954__$1,y,xs__6360__auto__,temp__5804__auto__,vec__16950,w,h,room_pattern){
return (function diagrams$game$solver$chests_in_rooms_QMARK__$_iter__16953_$_iter__16955(s__16956){
return (new cljs.core.LazySeq(null,((function (s__16954__$1,y,xs__6360__auto__,temp__5804__auto__,vec__16950,w,h,room_pattern){
return (function (){
var s__16956__$1 = s__16956;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__16956__$1);
if(temp__5804__auto____$1){
var s__16956__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16956__$2)){
var c__5520__auto__ = cljs.core.chunk_first.call(null,s__16956__$2);
var size__5521__auto__ = cljs.core.count.call(null,c__5520__auto__);
var b__16958 = cljs.core.chunk_buffer.call(null,size__5521__auto__);
if((function (){var i__16957 = (0);
while(true){
if((i__16957 < size__5521__auto__)){
var x = cljs.core._nth.call(null,c__5520__auto__,i__16957);
cljs.core.chunk_append.call(null,b__16958,(((!(diagrams.matrix.has_pattern_QMARK_.call(null,walls,x,y,room_pattern))))?true:diagrams.game.solver.chest_room_QMARK_.call(null,game,walls,x,y)));

var G__16959 = (i__16957 + (1));
i__16957 = G__16959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16958),diagrams$game$solver$chests_in_rooms_QMARK__$_iter__16953_$_iter__16955.call(null,cljs.core.chunk_rest.call(null,s__16956__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16958),null);
}
} else {
var x = cljs.core.first.call(null,s__16956__$2);
return cljs.core.cons.call(null,(((!(diagrams.matrix.has_pattern_QMARK_.call(null,walls,x,y,room_pattern))))?true:diagrams.game.solver.chest_room_QMARK_.call(null,game,walls,x,y)),diagrams$game$solver$chests_in_rooms_QMARK__$_iter__16953_$_iter__16955.call(null,cljs.core.rest.call(null,s__16956__$2)));
}
} else {
return null;
}
break;
}
});})(s__16954__$1,y,xs__6360__auto__,temp__5804__auto__,vec__16950,w,h,room_pattern))
,null,null));
});})(s__16954__$1,y,xs__6360__auto__,temp__5804__auto__,vec__16950,w,h,room_pattern))
;
var fs__5519__auto__ = cljs.core.seq.call(null,iterys__5518__auto__.call(null,cljs.core.range.call(null,w)));
if(fs__5519__auto__){
return cljs.core.concat.call(null,fs__5519__auto__,diagrams$game$solver$chests_in_rooms_QMARK__$_iter__16953.call(null,cljs.core.rest.call(null,s__16954__$1)));
} else {
var G__16960 = cljs.core.rest.call(null,s__16954__$1);
s__16954__$1 = G__16960;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__.call(null,cljs.core.range.call(null,h));
})());
});
diagrams.game.solver.fill_chest_rooms = (function diagrams$game$solver$fill_chest_rooms(game,walls){
var walls_SINGLEQUOTE_ = cljs.core.atom.call(null,walls);
var vec__16961 = diagrams.matrix.get_dim.call(null,new cljs.core.Keyword(null,"mask","mask",-585748447).cljs$core$IFn$_invoke$arity$1(game));
var w = cljs.core.nth.call(null,vec__16961,(0),null);
var h = cljs.core.nth.call(null,vec__16961,(1),null);
var wall_pattern = diagrams.matrix.new_matrix.call(null,(3),(3),true);
var seq__16964_16980 = cljs.core.seq.call(null,cljs.core.range.call(null,h));
var chunk__16971_16981 = null;
var count__16972_16982 = (0);
var i__16973_16983 = (0);
while(true){
if((i__16973_16983 < count__16972_16982)){
var y_16984 = cljs.core._nth.call(null,chunk__16971_16981,i__16973_16983);
var seq__16974_16985 = cljs.core.seq.call(null,cljs.core.range.call(null,w));
var chunk__16976_16986 = null;
var count__16977_16987 = (0);
var i__16978_16988 = (0);
while(true){
if((i__16978_16988 < count__16977_16987)){
var x_16989 = cljs.core._nth.call(null,chunk__16976_16986,i__16978_16988);
if(diagrams.game.solver.chest_room_QMARK_.call(null,game,cljs.core.deref.call(null,walls_SINGLEQUOTE_),x_16989,y_16984)){
cljs.core.swap_BANG_.call(null,walls_SINGLEQUOTE_,diagrams.matrix.set_chunk,x_16989,y_16984,wall_pattern);


var G__16990 = seq__16974_16985;
var G__16991 = chunk__16976_16986;
var G__16992 = count__16977_16987;
var G__16993 = (i__16978_16988 + (1));
seq__16974_16985 = G__16990;
chunk__16976_16986 = G__16991;
count__16977_16987 = G__16992;
i__16978_16988 = G__16993;
continue;
} else {
var G__16994 = seq__16974_16985;
var G__16995 = chunk__16976_16986;
var G__16996 = count__16977_16987;
var G__16997 = (i__16978_16988 + (1));
seq__16974_16985 = G__16994;
chunk__16976_16986 = G__16995;
count__16977_16987 = G__16996;
i__16978_16988 = G__16997;
continue;
}
} else {
var temp__5804__auto___16998 = cljs.core.seq.call(null,seq__16974_16985);
if(temp__5804__auto___16998){
var seq__16974_16999__$1 = temp__5804__auto___16998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16974_16999__$1)){
var c__5567__auto___17000 = cljs.core.chunk_first.call(null,seq__16974_16999__$1);
var G__17001 = cljs.core.chunk_rest.call(null,seq__16974_16999__$1);
var G__17002 = c__5567__auto___17000;
var G__17003 = cljs.core.count.call(null,c__5567__auto___17000);
var G__17004 = (0);
seq__16974_16985 = G__17001;
chunk__16976_16986 = G__17002;
count__16977_16987 = G__17003;
i__16978_16988 = G__17004;
continue;
} else {
var x_17005 = cljs.core.first.call(null,seq__16974_16999__$1);
if(diagrams.game.solver.chest_room_QMARK_.call(null,game,cljs.core.deref.call(null,walls_SINGLEQUOTE_),x_17005,y_16984)){
cljs.core.swap_BANG_.call(null,walls_SINGLEQUOTE_,diagrams.matrix.set_chunk,x_17005,y_16984,wall_pattern);


var G__17006 = cljs.core.next.call(null,seq__16974_16999__$1);
var G__17007 = null;
var G__17008 = (0);
var G__17009 = (0);
seq__16974_16985 = G__17006;
chunk__16976_16986 = G__17007;
count__16977_16987 = G__17008;
i__16978_16988 = G__17009;
continue;
} else {
var G__17010 = cljs.core.next.call(null,seq__16974_16999__$1);
var G__17011 = null;
var G__17012 = (0);
var G__17013 = (0);
seq__16974_16985 = G__17010;
chunk__16976_16986 = G__17011;
count__16977_16987 = G__17012;
i__16978_16988 = G__17013;
continue;
}
}
} else {
}
}
break;
}

var G__17014 = seq__16964_16980;
var G__17015 = chunk__16971_16981;
var G__17016 = count__16972_16982;
var G__17017 = (i__16973_16983 + (1));
seq__16964_16980 = G__17014;
chunk__16971_16981 = G__17015;
count__16972_16982 = G__17016;
i__16973_16983 = G__17017;
continue;
} else {
var temp__5804__auto___17018 = cljs.core.seq.call(null,seq__16964_16980);
if(temp__5804__auto___17018){
var seq__16964_17019__$1 = temp__5804__auto___17018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16964_17019__$1)){
var c__5567__auto___17020 = cljs.core.chunk_first.call(null,seq__16964_17019__$1);
var G__17021 = cljs.core.chunk_rest.call(null,seq__16964_17019__$1);
var G__17022 = c__5567__auto___17020;
var G__17023 = cljs.core.count.call(null,c__5567__auto___17020);
var G__17024 = (0);
seq__16964_16980 = G__17021;
chunk__16971_16981 = G__17022;
count__16972_16982 = G__17023;
i__16973_16983 = G__17024;
continue;
} else {
var y_17025 = cljs.core.first.call(null,seq__16964_17019__$1);
var seq__16965_17026 = cljs.core.seq.call(null,cljs.core.range.call(null,w));
var chunk__16967_17027 = null;
var count__16968_17028 = (0);
var i__16969_17029 = (0);
while(true){
if((i__16969_17029 < count__16968_17028)){
var x_17030 = cljs.core._nth.call(null,chunk__16967_17027,i__16969_17029);
if(diagrams.game.solver.chest_room_QMARK_.call(null,game,cljs.core.deref.call(null,walls_SINGLEQUOTE_),x_17030,y_17025)){
cljs.core.swap_BANG_.call(null,walls_SINGLEQUOTE_,diagrams.matrix.set_chunk,x_17030,y_17025,wall_pattern);


var G__17031 = seq__16965_17026;
var G__17032 = chunk__16967_17027;
var G__17033 = count__16968_17028;
var G__17034 = (i__16969_17029 + (1));
seq__16965_17026 = G__17031;
chunk__16967_17027 = G__17032;
count__16968_17028 = G__17033;
i__16969_17029 = G__17034;
continue;
} else {
var G__17035 = seq__16965_17026;
var G__17036 = chunk__16967_17027;
var G__17037 = count__16968_17028;
var G__17038 = (i__16969_17029 + (1));
seq__16965_17026 = G__17035;
chunk__16967_17027 = G__17036;
count__16968_17028 = G__17037;
i__16969_17029 = G__17038;
continue;
}
} else {
var temp__5804__auto___17039__$1 = cljs.core.seq.call(null,seq__16965_17026);
if(temp__5804__auto___17039__$1){
var seq__16965_17040__$1 = temp__5804__auto___17039__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16965_17040__$1)){
var c__5567__auto___17041 = cljs.core.chunk_first.call(null,seq__16965_17040__$1);
var G__17042 = cljs.core.chunk_rest.call(null,seq__16965_17040__$1);
var G__17043 = c__5567__auto___17041;
var G__17044 = cljs.core.count.call(null,c__5567__auto___17041);
var G__17045 = (0);
seq__16965_17026 = G__17042;
chunk__16967_17027 = G__17043;
count__16968_17028 = G__17044;
i__16969_17029 = G__17045;
continue;
} else {
var x_17046 = cljs.core.first.call(null,seq__16965_17040__$1);
if(diagrams.game.solver.chest_room_QMARK_.call(null,game,cljs.core.deref.call(null,walls_SINGLEQUOTE_),x_17046,y_17025)){
cljs.core.swap_BANG_.call(null,walls_SINGLEQUOTE_,diagrams.matrix.set_chunk,x_17046,y_17025,wall_pattern);


var G__17047 = cljs.core.next.call(null,seq__16965_17040__$1);
var G__17048 = null;
var G__17049 = (0);
var G__17050 = (0);
seq__16965_17026 = G__17047;
chunk__16967_17027 = G__17048;
count__16968_17028 = G__17049;
i__16969_17029 = G__17050;
continue;
} else {
var G__17051 = cljs.core.next.call(null,seq__16965_17040__$1);
var G__17052 = null;
var G__17053 = (0);
var G__17054 = (0);
seq__16965_17026 = G__17051;
chunk__16967_17027 = G__17052;
count__16968_17028 = G__17053;
i__16969_17029 = G__17054;
continue;
}
}
} else {
}
}
break;
}

var G__17055 = cljs.core.next.call(null,seq__16964_17019__$1);
var G__17056 = null;
var G__17057 = (0);
var G__17058 = (0);
seq__16964_16980 = G__17055;
chunk__16971_16981 = G__17056;
count__16972_16982 = G__17057;
i__16973_16983 = G__17058;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,walls_SINGLEQUOTE_);
});
diagrams.game.solver.paths_narrow_QMARK_ = (function diagrams$game$solver$paths_narrow_QMARK_(game,walls){
var vec__17059 = diagrams.matrix.get_dim.call(null,new cljs.core.Keyword(null,"mask","mask",-585748447).cljs$core$IFn$_invoke$arity$1(game));
var w = cljs.core.nth.call(null,vec__17059,(0),null);
var h = cljs.core.nth.call(null,vec__17059,(1),null);
var wall_pattern = diagrams.matrix.new_matrix.call(null,(2),(2),false);
return cljs.core.every_QMARK_.call(null,cljs.core.not,(function (){var iter__5522__auto__ = (function diagrams$game$solver$paths_narrow_QMARK__$_iter__17062(s__17063){
return (new cljs.core.LazySeq(null,(function (){
var s__17063__$1 = s__17063;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__17063__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var y = cljs.core.first.call(null,xs__6360__auto__);
var iterys__5518__auto__ = ((function (s__17063__$1,y,xs__6360__auto__,temp__5804__auto__,vec__17059,w,h,wall_pattern){
return (function diagrams$game$solver$paths_narrow_QMARK__$_iter__17062_$_iter__17064(s__17065){
return (new cljs.core.LazySeq(null,((function (s__17063__$1,y,xs__6360__auto__,temp__5804__auto__,vec__17059,w,h,wall_pattern){
return (function (){
var s__17065__$1 = s__17065;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__17065__$1);
if(temp__5804__auto____$1){
var s__17065__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17065__$2)){
var c__5520__auto__ = cljs.core.chunk_first.call(null,s__17065__$2);
var size__5521__auto__ = cljs.core.count.call(null,c__5520__auto__);
var b__17067 = cljs.core.chunk_buffer.call(null,size__5521__auto__);
if((function (){var i__17066 = (0);
while(true){
if((i__17066 < size__5521__auto__)){
var x = cljs.core._nth.call(null,c__5520__auto__,i__17066);
cljs.core.chunk_append.call(null,b__17067,diagrams.matrix.has_pattern_QMARK_.call(null,walls,x,y,wall_pattern));

var G__17068 = (i__17066 + (1));
i__17066 = G__17068;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17067),diagrams$game$solver$paths_narrow_QMARK__$_iter__17062_$_iter__17064.call(null,cljs.core.chunk_rest.call(null,s__17065__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17067),null);
}
} else {
var x = cljs.core.first.call(null,s__17065__$2);
return cljs.core.cons.call(null,diagrams.matrix.has_pattern_QMARK_.call(null,walls,x,y,wall_pattern),diagrams$game$solver$paths_narrow_QMARK__$_iter__17062_$_iter__17064.call(null,cljs.core.rest.call(null,s__17065__$2)));
}
} else {
return null;
}
break;
}
});})(s__17063__$1,y,xs__6360__auto__,temp__5804__auto__,vec__17059,w,h,wall_pattern))
,null,null));
});})(s__17063__$1,y,xs__6360__auto__,temp__5804__auto__,vec__17059,w,h,wall_pattern))
;
var fs__5519__auto__ = cljs.core.seq.call(null,iterys__5518__auto__.call(null,cljs.core.range.call(null,w)));
if(fs__5519__auto__){
return cljs.core.concat.call(null,fs__5519__auto__,diagrams$game$solver$paths_narrow_QMARK__$_iter__17062.call(null,cljs.core.rest.call(null,s__17063__$1)));
} else {
var G__17069 = cljs.core.rest.call(null,s__17063__$1);
s__17063__$1 = G__17069;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5522__auto__.call(null,cljs.core.range.call(null,h));
})());
});
diagrams.game.solver.paths_connected = (function diagrams$game$solver$paths_connected(game,walls){
cljs.core.reduce.call(null);

return false;
});
diagrams.game.solver.solved_QMARK_ = (function diagrams$game$solver$solved_QMARK_(game,walls){
var and__5043__auto__ = true;
if(and__5043__auto__){
var and__5043__auto____$1 = diagrams.game.solver.walls_satisfied_QMARK_.call(null,game,walls);
if(and__5043__auto____$1){
var and__5043__auto____$2 = diagrams.game.solver.dead_ends_are_mobs.call(null,game,walls);
if(and__5043__auto____$2){
var and__5043__auto____$3 = diagrams.game.solver.chests_in_rooms_QMARK_.call(null,game,walls);
if(and__5043__auto____$3){
var walls__$1 = diagrams.game.solver.fill_chest_rooms.call(null,game,walls);
return diagrams.game.solver.paths_narrow_QMARK_.call(null,game,walls__$1);
} else {
return and__5043__auto____$3;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
