(ns diagrams.game.core
  (:require [diagrams.matrix :as mat]))


(defn- mask-elem? [elem]
  (or (= elem :empty)
      (= elem :chest)
      (= elem :mob)))

(defn- sizes-match? [mask h-hints v-hints]
  (let [[mask-w mask-h] (mat/get-dim mask)
        h-count         (count h-hints)
        v-count         (count v-hints)]
    (and (= mask-w h-count)
         (= mask-h v-count))))

(defn- valid-game-params? [mask h-hints v-hints]
  (and (every? #(every? mask-elem? %) mask)
       (sizes-match? mask h-hints v-hints)))

(defn new-game [mask h-hints v-hints]
  (when (valid-game-params? mask h-hints v-hints)
    {:mask    mask
     :h-hints h-hints
     :v-hints v-hints}))

(defn is-occupied? [game x y]
  (let [mask (:mask game)
        elem (mat/get-elem mask x y)]
    (not= elem :empty)))


; DEBUG
(def test-game (new-game [[:empty :empty :empty :empty :empty :empty :empty :empty]
                          [:empty :empty :empty :empty :empty :empty :empty :mob  ]
                          [:empty :empty :mob   :empty :empty :empty :empty :empty]
                          [:empty :empty :empty :empty :empty :empty :empty :mob  ]
                          [:empty :empty :empty :empty :empty :empty :empty :empty]
                          [:empty :chest :empty :empty :empty :empty :empty :mob  ]
                          [:empty :empty :empty :empty :empty :empty :empty :empty]
                          [:empty :empty :empty :empty :empty :empty :empty :mob  ]]
                         [1 4 2 7 0 4 4 4]
                         [3 2 5 3 4 1 4 4]))