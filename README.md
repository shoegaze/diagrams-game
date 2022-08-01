# diagrams

A clone of the Zachtronics minigame `Dungeons & Diagrams` from `Last Call BBS`.

## Rules

1. The numbers to the left and top indicate the number of walls that exist along the row/column. Wall conditions must be satisfied exactly.
2. All paths (non-wall tiles) are connected: i.e. there are no non-wall islands.
3. All paths must be narrow: i.e. there are no 2x2 non-wall regions.
4. All dead ends must have a mob. All mobs must exist in dead ends.
5. Chests must be in 3x3 'rooms' that are non-walls. They have exactly one exit that connects to the path.

When all of these rules are satisfied, the level is completed and a banner should show!
