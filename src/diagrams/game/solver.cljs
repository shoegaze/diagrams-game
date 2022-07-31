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
    (->> (for [x (range w)
               y (range h)
               :let [mask-elem      (mat/get-elem mask x y)
                     wall-neighbors (mat/get-neighbors walls x y true)]]
           (if-not (= mask-elem :mob)
             true
             ; Ensure there are exactly 3 neighboring walls
             (->> wall-neighbors
                  (frequencies)
                  (#(get % true))
                  (= 3))))
         (every? identity))))

(defn- chest-room? [game walls x y]
  (if-not (mat/has-elem?
            (mat/get-chunk (:mask game) [x y] [3 3])
            :chest)
    false
    (let [h-walls (mat/get-chunk walls [(- x 1) y] [5 3] true)
          v-walls (mat/get-chunk walls [x (- y 1)] [3 5] true)
          h-count (mat/count-elem h-walls true)
          v-count (mat/count-elem v-walls true)
          sum     (+ h-count v-count)]
      (= sum 11))))

; Must be placed after dead-ends-are-mobs
(defn- chests-in-rooms? [game walls]
  (let [[w h]        (mat/get-dim walls)
        room-pattern (mat/new-matrix 3 3 :empty)]
      (->> (for [x (range w)
                 y (range h)]
             (if-not (mat/has-pattern? walls x y room-pattern)
               true
               (chest-room? game walls x y)))
           (every? identity))))

(defn- fill-chest-rooms [game walls]
  (let [walls' (atom walls)
        mask   (:mask game)
        [w h]  (mat/get-dim mask)
        wall-pattern (mat/new-matrix 3 3 true)]
    (doseq [y (range h)
            x (range w)
            :when (chest-room? game @walls' x y)]
      (swap! walls' mat/set-chunk x y wall-pattern))
    @walls'))

(defn- paths-narrow? [game walls]
  ; Convolve walls with 2x2 false matrix
  (let [[w h]        (mat/get-dim (:mask game))
        wall-pattern (mat/new-matrix 2 2 false)]
    (->> (for [x (range w)
               y (range h)]
           (mat/has-pattern? walls x y wall-pattern))
         (every? not))))

(defn are-neighbors? [[x1 y1] [x2 y2]]
  (let [dx (Math/abs (- x1 x2))
        dy (Math/abs (- y1 y2))]
    (= 1 (+ dx dy))))

(defn build-path
  ([root coords path]
   (let [neighbors (->> coords
                        (filter #(are-neighbors? root %))
                        (filter #(nil? (get path %))))
         path' (reduce conj path neighbors)]
     (println "neighbors" neighbors)
     (println "path'" path')
     (if (empty? neighbors)
       path'
       (do
         (println "> built path:" (reduce clojure.set/union path' neighbors))
         (reduce (fn [path root]
                   (clojure.set/union path (build-path root coords path)))
                 path'
                 neighbors)))))

  ([root coords]
   (build-path root coords #{root})))

(defn paths-connected [_game walls]
  (let [empty-coords (filter
                       (fn [[x y]] (false? (mat/get-elem walls x y)))
                       (->> walls
                            (mat/to-coords)
                            (mapcat identity)))]
    (if (empty? empty-coords)
      true
      (let [first-empty (first empty-coords)
            first-path  (build-path first-empty empty-coords)]
        (reduce
          (fn [_ coord]
            (if (get first-path coord)
              true
              (do
                (println "first-path" first-path)
                (println "coord" coord)
                (reduced false))))
          empty-coords)))))

(defn solved? [game walls]
  (and true
       ;(valid-forms? game walls)
       ;(walls-satisfied? game walls)
       ;(dead-ends-are-mobs game walls)
       ;(chests-in-rooms? game walls)
       (let [walls (fill-chest-rooms game walls)]
         ;(paths-narrow? game walls)
         (paths-connected game walls)
       )))