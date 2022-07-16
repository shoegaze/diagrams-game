(ns diagrams.ui.h-hints
  (:require [diagrams.matrix :refer (v-count)]))


(defn h-hints-component [game walls]
  [:div.h-hints
   (let [h-hints (:h-hints game)
         hint    (count h-hints)]
     (doall
       (for [x (range hint)
             :let [hint (h-hints x)]]
         (let [vc (v-count @walls x)]
           ^{:key x} [:h1 {:style
                           {:color (cond (< vc hint) :black
                                         (= vc hint) :green
                                         (> vc hint) :red)}}
                      (str hint)]))))])