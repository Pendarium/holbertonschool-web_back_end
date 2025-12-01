#!/usr/bin/env python3
"""
task 0-simple_helper_function
"""


def index_range(page, page_size):
    """
    Retourne un tuple (start, end) représentant la plage d'index
    pour une pagination donnée.

    Arguments :
    - page : numéro de page (commence à 1)
    - page_size : nombre d’éléments par page
    """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)