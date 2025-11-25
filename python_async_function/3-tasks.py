#!/usr/bin/env python3
"""
Docstring for python_async_function.3-tasks
"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Docstring for task_wait_random

    :param max_delay: Description
    :type max_delay: int
    :return: Description
    :rtype: Task
    """
    task = asyncio.create_task(wait_random(max_delay))
    return task
