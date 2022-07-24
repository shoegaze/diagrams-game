(ns diagrams.ui.v-hints
  (:require [diagrams.matrix :refer (h-count)]))


(defn v-hints-component [game walls]
  [:div.v-hints
   (let [v-hints (:v-hints game)
         hint    (count v-hints)]
     (doall
       (for [y (range hint)
             :let [hint (v-hints y)]]
         (let [hc (h-count @walls y true? true)]
           ^{:key y} [:h1
                      {:style
                       {:color (cond (< hc hint) :black
                                     (= hc hint) :green
                                     (> hc hint) :red)}}
                      (str hint)]))))])