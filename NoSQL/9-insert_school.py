#!/usr/bin/env python3
"""
Module qui contient une seule fonction : list_all
"""


def insert_school(mongo_collection, **kwargs):
    """_summary_

    Args:
        mongo_collection (_type_): _description_

    Returns:
        _type_: _description_
    """
    resultat = mongo_collection.insert_one(kwargs)
    nouvel_id = resultat.inserted_id
    return nouvel_id
