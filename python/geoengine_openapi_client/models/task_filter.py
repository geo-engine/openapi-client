# coding: utf-8

"""
    Geo Engine API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 0.8.0
    Contact: dev@geoengine.de
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import json
import pprint
import re  # noqa: F401
from aenum import Enum, no_arg





class TaskFilter(str, Enum):
    """
    TaskFilter
    """

    """
    allowed enum values
    """
    RUNNING = 'running'
    ABORTED = 'aborted'
    FAILED = 'failed'
    COMPLETED = 'completed'

    @classmethod
    def from_json(cls, json_str: str) -> TaskFilter:
        """Create an instance of TaskFilter from a JSON string"""
        return TaskFilter(json.loads(json_str))


