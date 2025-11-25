#!/usr/bin/env python3
"""
Docstring for python_variable_annotations.6-mxd_list
"""


from typing import List


def sum_mixed_list(mxd_lst: List[float | int]) -> float:
    """
    Docstring for sum_mixed_list

    :param mxd_lst: Description
    :type mxd_lst: List[float, int]
    :return: Description
    :rtype: float
    """
    return sum(mxd_lst)
