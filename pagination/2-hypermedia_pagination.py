#!/usr/bin/env python3
"""Module that provides a hypermedia pagination function."""

import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names."""

    def dataset(self) -> List[List]:
        """Load dataset"""
        with open("Popular_Baby_Names.csv") as f:
            reader = csv.reader(f)
            dataset = [row for row in reader]
        return dataset[1:]

    def index_range(self, page: int, page_size: int):
        """Return start and end index for pagination"""
        start = (page - 1) * page_size
        end = page * page_size
        return start, end

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Return a page of the dataset."""

        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        dataset = self.dataset()
        start, end = self.index_range(page, page_size)

        if start >= len(dataset):
            return []

        return dataset[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """Return hypermedia pagination information."""

        dataset = self.dataset()
        data = self.get_page(page, page_size)

        total_pages = math.ceil(len(dataset) / page_size)

        next_page = page + 1 if page < total_pages else None
        prev_page = page - 1 if page > 1 else None

        return {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }
