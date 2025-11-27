#!/usr/bin/env python3

"""
Docstring for python_async_comprehension.0-async_generator
"""

from typing import Generator
import asyncio
import random


async def async_generator() -> Generator[float, None, None]:
    """
    Docstring for async_generator

    :return: Description
    :rtype: AsyncGenerator[float, None]
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
