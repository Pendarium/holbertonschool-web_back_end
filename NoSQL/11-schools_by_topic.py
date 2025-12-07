#!/usr/bin/env python3
"""
Module qui contient une seule fonction : schools_by_topic
"""


def schools_by_topic(mongo_collection, topic):
    """
    Retourne la liste des écoles contenant un topic donné.

    Args:
        mongo_collection: collection PyMongo
        topic (str): topic recherché

    Returns:
        list: liste des documents correspondants
    """
    return list(mongo_collection.find({"topics": topic}))
