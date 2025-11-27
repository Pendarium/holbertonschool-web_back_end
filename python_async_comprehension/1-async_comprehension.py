#!/usr/bin/env python3
# Import from previous task
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    """
    Collects 10 random numbers using an async comprehension
    over async_generator, then returns them.
    """
    return [i async for i in async_generator()]
