#!/usr/bin/env python3
"""
Module qui contient une seule fonction : list_all
"""


def list_all(mongo_collection):
    """
    Fonction qui retourne tous les documents d'une collection.
    """
    resultat = list(mongo_collection.find())
    return resultat
