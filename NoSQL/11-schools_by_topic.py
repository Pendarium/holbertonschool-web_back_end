#!/usr/bin/env python3
"""Module de recherche avec filtre spécifique"""


def schools_by_topic(mongo_collection, topic: str):
    """Retourne la liste des écoles ayant pour filtre topic"""
    list = mongo_collection.find({"topics": topic})
    return list