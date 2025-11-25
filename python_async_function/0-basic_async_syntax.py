#!/usr/bin/env python3
"""
Docstring for python_async_function.0-basic_async_syntax
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    Docstring for wait_random

    :param max_delay: Description
    :type max_delay: int
    :return: Description
    :rtype: float
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
