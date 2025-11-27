#!/usr/bin/env python3
"""
Docstring pour python_async_comprehension.2-measure_runtime
"""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Docstring pour measure_runtime
    Function that runs concurently 4 times async_comprehension
    and measure how much time it takes
    """
    start = time.time()
    await asyncio.gather(*(async_comprehension() for i in range(4)))
    end = time.time()
    return (end - start)
