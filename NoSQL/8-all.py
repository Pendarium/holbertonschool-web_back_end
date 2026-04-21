#!/usr/bin/env python3
""" 8-all """


def list_all(mongo_collection):
    """ list_all """
    documents = mongo_collection.find()
    documents = list(documents)
    return documents
