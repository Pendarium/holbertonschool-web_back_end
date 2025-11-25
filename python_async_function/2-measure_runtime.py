#!/usr/bin/env python3
"""
Docstring for python_async_function.2-measure_runtime
"""

import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Docstring for measure_time
    
    :param n: Description
    :type n: int
    :param max_delay: Description
    :type max_delay: int
    :return: Description
    :rtype: float
    """
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    total_time = end - start
    return total_time / n
