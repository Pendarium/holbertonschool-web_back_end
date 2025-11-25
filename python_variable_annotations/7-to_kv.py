#!/usr/bin/env python3
"""
Docstring for python_variable_annotations.7-to_kv
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Docstring for to_kv

    :param k: Description
    :type k: str
    :param v: Description
    :type v: Union[int, float]
    :return: Description
    :rtype: Tuple[str, float]
    """
    return (k, float(v ** 2))
