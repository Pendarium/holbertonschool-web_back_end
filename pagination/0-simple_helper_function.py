#!/usr/bin/env python3
"""
Module that contains a function that compute
the index_range of element in order to paginate
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Returns a tuple with that start index and end index
    of element to display in pagination
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
