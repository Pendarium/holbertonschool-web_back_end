#!/usr/bin/env python3
"""
Module providing a helper function for pagination index calculations.

This module contains a single function, index_range, which computes the start
and end indexes corresponding to a given page number and page size. It is
typically used in pagination mechanisms to determine which slice of a dataset
should be returned.
"""


from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return a tuple containing the start and end indexes for pagination.

    Args:
        page (int): The page number (1-indexed).
        page_size (int): The number of items per page.

    Returns:
        Tuple[int, int]: A tuple with the start index and the end index
            corresponding to the given page and page size.
    """
    start = (page - 1) * page_size
    end = page + page_size
    return (start, end)
