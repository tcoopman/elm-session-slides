{- ----------------------------------------------------------------

A "Tree" represents a binary tree. A "Node" in a binary tree
always has two children. A tree can also be "Empty". Below I have
defined "Tree" and a number of useful functions.

This example also includes some challenge problems :)

----------------------------------------------------------------
-}


module Main (..) where

import Graphics.Element exposing (..)
import Text


type Tree a
  = Empty
  | Node a (Tree a) (Tree a)


empty : Tree a
empty =
  Empty


singleton : a -> Tree a
singleton v =
  Node v Empty Empty


insert : comparable -> Tree comparable -> Tree comparable
insert x tree =
  case tree of
    Empty ->
      singleton x

    Node y left right ->
      if x > y then
        Node y left (insert x right)
      else if x < y then
        Node y (insert x left) right
      else
        tree


fromList : List comparable -> Tree comparable
fromList xs =
  List.foldl insert empty xs


depth : Tree a -> Int
depth tree =
  case tree of
    Empty ->
      0

    Node v left right ->
      1 + max (depth left) (depth right)


map : (a -> b) -> Tree a -> Tree b
map f tree =
  case tree of
    Empty ->
      Empty

    Node v left right ->
      Node (f v) (map f left) (map f right)

mapFold : (a -> b) -> Tree a -> Tree b
mapFold f =
  foldr (\v b -> Node (f v) b Empty) Empty


t1 =
  fromList [ 1, 2, 3 ]


t2 =
  fromList [ 2, 1, 3 ]


main : Element
main =
  flow
    down
    [ display "depth" depth t1
    , display "depth" depth t2
    , display "map ((+)1)" (map ((+) 1)) t2
    , display "mapFold ((+)1)" (mapFold ((+) 1)) t2
    , display "sum" sum t1
    , display "sumFold" sumFold t1
    , display "flatten" flatten t1
    , display "flatten" flatten t2
    , display "flattenFold" flattenFold t1
    , display "flattenFold" flattenFold t2
    , display "isElement 1" (isElement 1) t1
    , display "isElement 0" (isElement 0) t1
    , display "isElementFold 1" (isElementFold 1) t1
    , display "isElementFold 0" (isElementFold 0) t1
    ]


display : String -> (Tree a -> b) -> Tree a -> Element
display name f value =
  name
    ++ " ("
    ++ toString value
    ++ ") &rArr;\n    "
    ++ toString (f value)
    ++ "\n "
    |> Text.fromString
    |> Text.monospace
    |> leftAligned


sum : Tree number -> number
sum tree =
  case tree of
    Empty ->
      0

    Node v left right ->
      v + (sum left) + (sum right)


sumFold : Tree number -> number
sumFold =
  fold (+) 0



-- sumFold tree =
--   fold (+) 0 tree


flatten : Tree a -> List a
flatten tree =
  case tree of
    Empty ->
      []

    Node v l r ->
      [ v ] ++ (flatten l) ++ (flatten r)


flattenFold : Tree a -> List a
flattenFold =
  fold (::) []


isElement : a -> Tree a -> Bool
isElement a tree =
  case tree of
    Empty ->
      False

    Node v l r ->
      if v == a then
        True
      else
        (isElement a l) || (isElement a r)


isElementFold : a -> Tree a -> Bool
isElementFold e =
  fold (\v b -> b || v == e) False


fold : (a -> b -> b) -> b -> Tree a -> b
fold func b tree =
  case tree of
    Empty ->
      b

    Node v l r ->
      let
        fold' func' b' tree' =
          fold func' tree' b'
      in
        func v b |> fold' func l |> fold' func r



-- (fold func (fold func (func v b) l) r)


foldr : (a -> b -> b) -> b -> Tree a -> b
foldr func b tree =
  case tree of
    Empty ->
      b

    Node v l r ->
      let
        fold' func' b' tree' =
          fold func' tree' b'
      in
        func v b |> fold' func r |> fold' func l



{- ----------------------------------------------------------------

Exercises:

(1) Sum all of the elements of a tree.

       sum : Tree number -> number

(2) Flatten a tree into a list.

       flatten : Tree a -> List a

(3) Check to see if an element is in a given tree.

       isElement : a -> Tree a -> Bool

(4) Write a general fold function that acts on trees. The fold
    function does not need to guarantee a particular order of
    traversal.

       fold : (a -> b -> b) -> b -> Tree a -> b

(5) Use "fold" to do exercises 1-3 in one line each. The best
    readable versions I have come up have the following length
    in characters including spaces and function name:
      sum: 16
      flatten: 21
      isElement: 46
    See if you can match or beat me! Don't forget about currying
    and partial application!

(6) Can "fold" be used to implement "map" or "depth"?

(7) Try experimenting with different ways to traverse a
    tree: pre-order, in-order, post-order, depth-first, etc.
    More info at: http://en.wikipedia.org/wiki/Tree_traversal

----------------------------------------------------------------
-}
