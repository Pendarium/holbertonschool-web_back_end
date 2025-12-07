#!/usr/bin/env python3
"""
Module qui contient une seule fonction : update_topics
"""


def update_topics(mongo_collection, name, topics):
    """
    Met à jour le champ 'topics' des écoles portant le nom donné.

    Args:
        mongo_collection: la collection PyMongo
        name (str): nom de l'école à mettre à jour
        topics (list of str): liste des sujets
    """
    mongo_collection.update_many(
        {"name": name},         # filtre
        {"$set": {"topics": topics}}  # modification
    )
