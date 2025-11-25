#!/usr/bin/env python3
"""
Docstring for python_variable_annotations.9-element_length
"""
from typing import Iterable, Sequence, Tuple, List


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Docstring for element_length

    :param lst: Description
    :type lst: Iterable[Sequence]
    :return: Description
    :rtype: List[Tuple[Sequence, int]]
    """
    return [(i, len(i)) for i in lst]
