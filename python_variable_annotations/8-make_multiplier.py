#!/usr/bin/env python3
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Return a function that multiplies a float by the given multiplier.

    :param multiplier: The multiplier to apply.
    :type multiplier: float
    :return: A function that multiplies its float argument by multiplier.
    :rtype: Callable[[float], float]
    """
    def multiplier_function(x: float) -> float:
        return x * multiplier

    return multiplier_function
