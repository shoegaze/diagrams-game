(ns diagrams.matrix)


(defn- new-row [w]
  (vec (map (constantly false) (range w))))

(defn new-matrix [w h]
  (vec (map #(new-row w) (range h))))

; TODO: Fix indexing
(defn get-elem [mat x y]
  (get-in mat [x y]))

(defn set-elem [mat x y value]
  (assoc-in mat [x y] value))

(defn flip-elem [mat x y]
  (let [old-value (get-elem mat x y)
        new-value (not old-value)]
    (set-elem mat x y new-value)))

(defn get-dim [mat]
  (let [w (count mat)]
   (if (zero? w)
    [0 0]
    (let [h        (count (mat 0))
          hs       (map count mat)
          uniform? (every? #(= h %) hs)]
      (when uniform?
        [w h])))))

(defn get-row [mat y]
  (mat y))

(defn get-col [mat x]
  (map #(nth % x) mat))

(defn h-count [mat y]
  (let [row   (get-row mat y)
        trues ((group-by true? row) true)]
    (count trues)))

(defn v-count [mat x]
  (let [col   (get-col mat x)
        trues ((group-by true? col) true)]
    (count trues)))

(defn get-neighbors [mat x y default-val]
  [(get-in mat [(+ x 1) y      ] default-val)
   (get-in mat [(- x 1) y      ] default-val)
   (get-in mat [x       (+ y 1)] default-val)
   (get-in mat [x       (- y 1)] default-val)])

; TODO: Destructure args [x y] [w h]
(defn slice-chunk [mat x y w h]
  (->> mat
       (drop y)
       (take h)
       (map #(->> %
                  (drop x)
                  (take w)
                  (into [])))
       (into [])))

(defn has-pattern? [mat x y pattern]
  (let [[w h] (get-dim pattern)
        chunk (slice-chunk mat x y w h)]
    (= pattern chunk)))