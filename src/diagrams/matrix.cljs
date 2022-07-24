(ns diagrams.matrix)


(defn- new-row [w default]
  (->> (repeat default)
       (take w)
       (vec)))

(defn new-matrix [w h default]
  (->> (repeat (new-row w default))
       (take h)
       (vec)))

; TODO: Fix indexing
(defn get-elem [mat x y]
  (get-in mat [y x]))

(defn set-elem [mat x y value]
  (assoc-in mat [y x] value))

(defn update-elem [mat x y update-fn]
  (let [old-value (get-elem mat x y)
        new-value (update-fn old-value)]
    (set-elem mat x y new-value)))

(defn get-dim [mat]
  (let [h (count mat)]
   (if (zero? h)
    [0 0]
    (let [w        (count (mat 0))
          ws       (map count mat)
          uniform? (every? #(= w %) ws)]
      (when uniform?
        [w h])))))

(defn get-row [mat y]
  (mat y))

(defn get-col [mat x]
  (map #(% x) mat))

(defn h-count [mat y group-fn group]
  (let [row (get-row mat y)
        gs  (group-by group-fn row)]
    (count (gs group))))

(defn v-count [mat x group-fn group]
  (let [col (get-col mat x)
        gs  (group-by group-fn col)]
    (count (gs group))))

(defn get-neighbors [mat x y default]
  [(get-in mat [(+ x 1) y      ] default)
   (get-in mat [(- x 1) y      ] default)
   (get-in mat [x       (+ y 1)] default)
   (get-in mat [x       (- y 1)] default)])

; TODO: Destructure args [x y] [w h]
(defn slice-chunk [mat [x y] [w h]]
  (->> mat
       (drop y)
       (take h)
       (map #(->> %
                  (drop x)
                  (take w)
                  (into [])))
       (into [])))

(defn has-pattern? [mat x y pattern]
  (let [dim   (get-dim pattern)
        chunk (slice-chunk mat [x y] dim)]
    (= pattern chunk)))