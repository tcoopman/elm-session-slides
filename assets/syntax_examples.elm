import Graphics.Element exposing (show)

import String

-- You can use infix operators just like in normal math, so
-- when you want to know 2 + 2 you can write it just like that!
four =
  2 + 2


-- Multiplication is similar.
sixteen =
  8 * 2


-- When you start putting these together, it is good to add
-- parentheses sometimes.
eleven =
  (4 * 3) - 1


-- The infix operators follow the normal rules of math though
-- so you can leave off the parens if you want.
thirteen =
  4 * 3 + 1


-- There are some infix operators for boolean values. Say you
-- have two boolean values and you want to know if both of them
-- are true. You can use the AND operator, written &&
--
-- The following function takes a number called 'age' and checks
-- if it is greater than 12 and less than 20, all the numbers that
-- end in "teen"
isTeenage : Int -> Bool
isTeenage age =
  (age > 12) && (age < 20)


-- Again, infix operators are set up so they can be used together
-- in reasonable ways without parentheses, so 'isTeenage' can be
-- written like this:
isTeenage' age =
  age > 12 && age < 20

f : Int -> Int -> Bool
f x y = x > y


double : Int -> Int
double = (*) 2

doubleTeenage = double >> isTeenage

even : Int -> Bool
even x = x `rem` 2 == 0

alwaysEven = double >> even
-- When in doubt, add some parentheses!

some = String.append "h" "i"
  |> String.toUpper
  |> String.repeat 3
  |> flip String.append "!"



main =
  show
    [ isTeenage four
    , isTeenage sixteen
    , isTeenage eleven
    , isTeenage thirteen
    , 5 |> f 4
    , (f 4) 5
    , (f 4) <| 5
    , doubleTeenage 7
    , 4 `rem` 2 == 0
    , even 5
    , even (double 5)
    , (double >> even) 5
    , alwaysEven 5
    , some == "HIHIHI!"
    ]
