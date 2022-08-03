(ns diagrams.core
  (:require [domina :as dom]
            [reagent.dom :as rdom]
            [diagrams.ui.grid :refer (grid-component)]
            [diagrams.game.core :refer (test-game)]))


(defn ^:export run []
  (let [container (dom/by-id "container")]
    (rdom/render [grid-component test-game]
                 container)))