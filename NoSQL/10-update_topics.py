#!/usr/bin/env python3
"""Module de mise a jour des sujets d'une ecole dans MongoDB."""
from typing import List


def update_topics(mongo_collection, name: str, topics: List[str]):
    """Met a jour les sujets des ecoles correspondant au nom fourni."""
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})


"""
def update_topics(mongo_collection, name, topics):
    mongo_collection.update_one(
    {"name": name},
    {"$set": {"topics": topics}})
"""
