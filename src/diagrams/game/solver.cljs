(ns diagrams.game.solver
  (:require [diagrams.matrix :as mat]))


(defn- valid-forms? [game walls]
  ; (dim game) = (dim walls)
  ; every corr. mask-elem != :empty -> false? walls
  false)

(defn- walls-satisfied? [game walls]
  (let [h-hints (:h-hints game)
        v-hints (:v-hints game)
        hc      (map-indexed #(mat/v-count walls % true? true)
                             walls)
        ; BUG: Below doesn't work if n != m
        vc      (map-indexed #(mat/h-count walls % true? true)
                             walls)]
    (and (= hc h-hints)
         (= vc v-hints))))

(defn- dead-ends-are-mobs [game walls]
  (let [mask  (:mask game)
        [w h] (mat/get-dim mask)]
    (every? true?
            (for [x (range w)
                  y (range h)
                  :let [mask-elem (get-in mask [x y])
                        ;wall      (get-in walls [x y])
                        wall-neighbors (mat/get-neighbors walls x y true)]]
              (if (= mask-elem :mob)
                (= (count (filter true? wall-neighbors)) 3)
                true)))))

; Must be placed after dead-ends-are-mobs
(defn- chests-in-rooms? [game walls]
  false)

;(defn- paths-narrow? [game walls]
;  ; Convolve 2x2 :empty
;  (let [pattern [[:empty :empty]
;                 [:empty :empty]]
;        [w h]   (mat/get-dim game)]
;    (for [x (range w)
;          y (range h)]
;      )))

;(defn- paths-connected [game walls]
;  false)

(defn solved? [game walls]
  (and true
       ;(valid-forms? game walls)
       (walls-satisfied? game walls)
       (dead-ends-are-mobs game walls)
       (chests-in-room? game walls)
       ;(paths-narrow? game walls)
       ;(paths-connected game walls)
       ))